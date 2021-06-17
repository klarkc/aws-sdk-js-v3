import { __extends } from "tslib";
import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListProvisioningArtifactsCommand, serializeAws_json1_1ListProvisioningArtifactsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisioningArtifactsCommand = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisioningArtifactsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ListProvisioningArtifactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListProvisioningArtifactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisioningArtifactsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisioningArtifactsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisioningArtifactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProvisioningArtifactsCommand(input, context);
    };
    ListProvisioningArtifactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProvisioningArtifactsCommand(output, context);
    };
    return ListProvisioningArtifactsCommand;
}($Command));
export { ListProvisioningArtifactsCommand };
//# sourceMappingURL=ListProvisioningArtifactsCommand.js.map