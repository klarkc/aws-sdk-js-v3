import { __extends } from "tslib";
import { SendVoiceMessageRequest, SendVoiceMessageResponse } from "../models/models_0";
import { deserializeAws_restJson1SendVoiceMessageCommand, serializeAws_restJson1SendVoiceMessageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Create a new voice message and send it to a recipient's phone number.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointSMSVoiceClient, SendVoiceMessageCommand } from "@aws-sdk/client-pinpoint-sms-voice"; // ES Modules import
 * // const { PinpointSMSVoiceClient, SendVoiceMessageCommand } = require("@aws-sdk/client-pinpoint-sms-voice"); // CommonJS import
 * const client = new PinpointSMSVoiceClient(config);
 * const command = new SendVoiceMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendVoiceMessageCommandInput} for command's `input` shape.
 * @see {@link SendVoiceMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointSMSVoiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendVoiceMessageCommand = /** @class */ (function (_super) {
    __extends(SendVoiceMessageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendVoiceMessageCommand(input) {
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
    SendVoiceMessageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointSMSVoiceClient";
        var commandName = "SendVoiceMessageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendVoiceMessageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendVoiceMessageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendVoiceMessageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendVoiceMessageCommand(input, context);
    };
    SendVoiceMessageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendVoiceMessageCommand(output, context);
    };
    return SendVoiceMessageCommand;
}($Command));
export { SendVoiceMessageCommand };
//# sourceMappingURL=SendVoiceMessageCommand.js.map