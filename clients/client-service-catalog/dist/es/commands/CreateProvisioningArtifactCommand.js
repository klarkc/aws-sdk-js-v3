import { __extends } from "tslib";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateProvisioningArtifactCommand, serializeAws_json1_1CreateProvisioningArtifactCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          IAM policy permission. This policy permission is required when using the
 *          <code>ImportFromPhysicalId</code> template source in the information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateProvisioningArtifactCommand = /** @class */ (function (_super) {
    __extends(CreateProvisioningArtifactCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateProvisioningArtifactCommand(input) {
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
    CreateProvisioningArtifactCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreateProvisioningArtifactCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateProvisioningArtifactInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateProvisioningArtifactOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateProvisioningArtifactCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateProvisioningArtifactCommand(input, context);
    };
    CreateProvisioningArtifactCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateProvisioningArtifactCommand(output, context);
    };
    return CreateProvisioningArtifactCommand;
}($Command));
export { CreateProvisioningArtifactCommand };
//# sourceMappingURL=CreateProvisioningArtifactCommand.js.map