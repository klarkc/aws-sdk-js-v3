import { __extends } from "tslib";
import { SendEmailRequest, SendEmailResponse } from "../models/models_0";
import { deserializeAws_restJson1SendEmailCommand, serializeAws_restJson1SendEmailCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of
 *             messages:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Simple</b> – A standard email message. When
 *                     you create this type of message, you specify the sender, the recipient, and the
 *                     message body, and Amazon Pinpoint assembles the message for you.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Raw</b> –  A raw, MIME-formatted email
 *                     message. When you send this type of email, you have to specify all of the
 *                     message headers, as well as the message body. You can use this message type to
 *                     send messages that contain attachments. The message that you specify has to be a
 *                     valid MIME message.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, SendEmailCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, SendEmailCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new SendEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendEmailCommandInput} for command's `input` shape.
 * @see {@link SendEmailCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendEmailCommand = /** @class */ (function (_super) {
    __extends(SendEmailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendEmailCommand(input) {
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
    SendEmailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "SendEmailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendEmailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendEmailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendEmailCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendEmailCommand(input, context);
    };
    SendEmailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendEmailCommand(output, context);
    };
    return SendEmailCommand;
}($Command));
export { SendEmailCommand };
//# sourceMappingURL=SendEmailCommand.js.map