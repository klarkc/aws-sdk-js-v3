import { __extends } from "tslib";
import { ListServiceActionsForProvisioningArtifactInput, ListServiceActionsForProvisioningArtifactOutput, } from "../models/models_0";
import { deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand, serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListServiceActionsForProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceActionsForProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsForProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServiceActionsForProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(ListServiceActionsForProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListServiceActionsForProvisioningArtifactCommand(input) {
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
    ListServiceActionsForProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListServiceActionsForProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListServiceActionsForProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListServiceActionsForProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(input, context);
    };
    ListServiceActionsForProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListServiceActionsForProvisioningArtifactCommand(output, context);
    };
    return ListServiceActionsForProvisioningArtifactCommand;
}($Command));
export { ListServiceActionsForProvisioningArtifactCommand };
//# sourceMappingURL=ListServiceActionsForProvisioningArtifactCommand.js.map