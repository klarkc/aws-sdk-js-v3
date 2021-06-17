import { __extends } from "tslib";
import { DeleteProvisioningTemplateRequest, DeleteProvisioningTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteProvisioningTemplateCommand, serializeAws_restJson1DeleteProvisioningTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a fleet provisioning template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteProvisioningTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteProvisioningTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteProvisioningTemplateCommand(input) {
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
    DeleteProvisioningTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteProvisioningTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteProvisioningTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteProvisioningTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteProvisioningTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteProvisioningTemplateCommand(input, context);
    };
    DeleteProvisioningTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteProvisioningTemplateCommand(output, context);
    };
    return DeleteProvisioningTemplateCommand;
}($Command));
export { DeleteProvisioningTemplateCommand };
//# sourceMappingURL=DeleteProvisioningTemplateCommand.js.map