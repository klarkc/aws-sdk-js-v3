import { __extends } from "tslib";
import { DeleteProvisioningArtifactInput, DeleteProvisioningArtifactOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteProvisioningArtifactCommand, serializeAws_json1_1DeleteProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot delete a provisioning artifact associated with a product that was shared with you.
 *          You cannot delete the last provisioning artifact for a product, because a product must have at
 *          least one provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(DeleteProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProvisioningArtifactCommand(input) {
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
    DeleteProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "DeleteProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteProvisioningArtifactCommand(input, context);
    };
    DeleteProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteProvisioningArtifactCommand(output, context);
    };
    return DeleteProvisioningArtifactCommand;
}($Command));
export { DeleteProvisioningArtifactCommand };
//# sourceMappingURL=DeleteProvisioningArtifactCommand.js.map