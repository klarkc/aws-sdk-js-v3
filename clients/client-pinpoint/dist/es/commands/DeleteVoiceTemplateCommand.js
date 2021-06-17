import { __extends } from "tslib";
import { DeleteVoiceTemplateRequest, DeleteVoiceTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteVoiceTemplateCommand, serializeAws_restJson1DeleteVoiceTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a message template for messages that were sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteVoiceTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteVoiceTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteVoiceTemplateCommand(input) {
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
    DeleteVoiceTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteVoiceTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteVoiceTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteVoiceTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteVoiceTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteVoiceTemplateCommand(input, context);
    };
    DeleteVoiceTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteVoiceTemplateCommand(output, context);
    };
    return DeleteVoiceTemplateCommand;
}($Command));
export { DeleteVoiceTemplateCommand };
//# sourceMappingURL=DeleteVoiceTemplateCommand.js.map