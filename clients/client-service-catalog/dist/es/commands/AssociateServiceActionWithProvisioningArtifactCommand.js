import { __extends } from "tslib";
import { AssociateServiceActionWithProvisioningArtifactInput, AssociateServiceActionWithProvisioningArtifactOutput, } from "../models/models_0";
import { deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand, serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a self-service action with a provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateServiceActionWithProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(AssociateServiceActionWithProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateServiceActionWithProvisioningArtifactCommand(input) {
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
    AssociateServiceActionWithProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "AssociateServiceActionWithProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateServiceActionWithProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateServiceActionWithProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateServiceActionWithProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(input, context);
    };
    AssociateServiceActionWithProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(output, context);
    };
    return AssociateServiceActionWithProvisioningArtifactCommand;
}($Command));
export { AssociateServiceActionWithProvisioningArtifactCommand };
//# sourceMappingURL=AssociateServiceActionWithProvisioningArtifactCommand.js.map