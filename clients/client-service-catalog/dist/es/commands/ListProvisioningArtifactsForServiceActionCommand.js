import { __extends } from "tslib";
import { ListProvisioningArtifactsForServiceActionInput, ListProvisioningArtifactsForServiceActionOutput, } from "../models/models_0";
import { deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand, serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisioningArtifactsForServiceActionCommand = /** @class */ (function (_super) {
    __extends(ListProvisioningArtifactsForServiceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisioningArtifactsForServiceActionCommand(input) {
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
    ListProvisioningArtifactsForServiceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListProvisioningArtifactsForServiceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisioningArtifactsForServiceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(input, context);
    };
    ListProvisioningArtifactsForServiceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(output, context);
    };
    return ListProvisioningArtifactsForServiceActionCommand;
}($Command));
export { ListProvisioningArtifactsForServiceActionCommand };
//# sourceMappingURL=ListProvisioningArtifactsForServiceActionCommand.js.map