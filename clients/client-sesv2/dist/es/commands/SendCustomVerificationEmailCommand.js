import { __extends } from "tslib";
import { SendCustomVerificationEmailRequest, SendCustomVerificationEmailResponse } from "../models/models_0";
import { deserializeAws_restJson1SendCustomVerificationEmailCommand, serializeAws_restJson1SendCustomVerificationEmailCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             AWS Region and attempts to verify it. As a result of executing this operation, a
 *             customized verification email is sent to the specified address.</p>
 *         <p>To use this operation, you must first create a custom verification email template. For
 *             more information about creating and using custom verification email templates, see
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendCustomVerificationEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendCustomVerificationEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new SendCustomVerificationEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendCustomVerificationEmailCommandInput} for command's `input` shape.
 * @see {@link SendCustomVerificationEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendCustomVerificationEmailCommand = /** @class */ (function (_super) {
    __extends(SendCustomVerificationEmailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendCustomVerificationEmailCommand(input) {
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
    SendCustomVerificationEmailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "SendCustomVerificationEmailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendCustomVerificationEmailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendCustomVerificationEmailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendCustomVerificationEmailCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendCustomVerificationEmailCommand(input, context);
    };
    SendCustomVerificationEmailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendCustomVerificationEmailCommand(output, context);
    };
    return SendCustomVerificationEmailCommand;
}($Command));
export { SendCustomVerificationEmailCommand };
//# sourceMappingURL=SendCustomVerificationEmailCommand.js.map