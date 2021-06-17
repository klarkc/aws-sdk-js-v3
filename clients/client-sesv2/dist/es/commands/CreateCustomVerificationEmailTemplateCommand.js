import { __extends } from "tslib";
import { CreateCustomVerificationEmailTemplateRequest, CreateCustomVerificationEmailTemplateResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand, serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom verification email template.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html">Using Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomVerificationEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(CreateCustomVerificationEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomVerificationEmailTemplateCommand(input) {
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
    CreateCustomVerificationEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "CreateCustomVerificationEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomVerificationEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomVerificationEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomVerificationEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateCustomVerificationEmailTemplateCommand(input, context);
    };
    CreateCustomVerificationEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateCustomVerificationEmailTemplateCommand(output, context);
    };
    return CreateCustomVerificationEmailTemplateCommand;
}($Command));
export { CreateCustomVerificationEmailTemplateCommand };
//# sourceMappingURL=CreateCustomVerificationEmailTemplateCommand.js.map