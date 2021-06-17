import { __extends } from "tslib";
import { DeleteCustomVerificationEmailTemplateRequest, DeleteCustomVerificationEmailTemplateResponse, } from "../models/models_0";
import { deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand, serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/es/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, DeleteCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, DeleteCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new DeleteCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomVerificationEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomVerificationEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomVerificationEmailTemplateCommand(input) {
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
    DeleteCustomVerificationEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "DeleteCustomVerificationEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomVerificationEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteCustomVerificationEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomVerificationEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand(input, context);
    };
    DeleteCustomVerificationEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteCustomVerificationEmailTemplateCommand(output, context);
    };
    return DeleteCustomVerificationEmailTemplateCommand;
}($Command));
export { DeleteCustomVerificationEmailTemplateCommand };
//# sourceMappingURL=DeleteCustomVerificationEmailTemplateCommand.js.map