import { __extends } from "tslib";
import { UpdateCustomVerificationEmailTemplateRequest, UpdateCustomVerificationEmailTemplateResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand, serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCustomVerificationEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateCustomVerificationEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCustomVerificationEmailTemplateCommand(input) {
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
    UpdateCustomVerificationEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "UpdateCustomVerificationEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCustomVerificationEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCustomVerificationEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCustomVerificationEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand(input, context);
    };
    UpdateCustomVerificationEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCustomVerificationEmailTemplateCommand(output, context);
    };
    return UpdateCustomVerificationEmailTemplateCommand;
}($Command));
export { UpdateCustomVerificationEmailTemplateCommand };
//# sourceMappingURL=UpdateCustomVerificationEmailTemplateCommand.js.map