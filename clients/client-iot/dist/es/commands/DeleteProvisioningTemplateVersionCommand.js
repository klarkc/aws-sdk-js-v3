import { __extends } from "tslib";
import { DeleteProvisioningTemplateVersionRequest, DeleteProvisioningTemplateVersionResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand, serializeAws_restJson1DeleteProvisioningTemplateVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a fleet provisioning template version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProvisioningTemplateVersionCommand = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProvisioningTemplateVersionCommand(input) {
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
    DeleteProvisioningTemplateVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteProvisioningTemplateVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProvisioningTemplateVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProvisioningTemplateVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProvisioningTemplateVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProvisioningTemplateVersionCommand(input, context);
    };
    DeleteProvisioningTemplateVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProvisioningTemplateVersionCommand(output, context);
    };
    return DeleteProvisioningTemplateVersionCommand;
}($Command));
export { DeleteProvisioningTemplateVersionCommand };
//# sourceMappingURL=DeleteProvisioningTemplateVersionCommand.js.map