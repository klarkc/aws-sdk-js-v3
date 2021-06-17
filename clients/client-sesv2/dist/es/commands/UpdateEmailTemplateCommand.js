import { __extends } from "tslib";
import { UpdateEmailTemplateRequest, UpdateEmailTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateEmailTemplateCommand, serializeAws_restJson1UpdateEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an email template. Email templates enable you to send personalized email to
 *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new UpdateEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(UpdateEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateEmailTemplateCommand(input) {
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
    UpdateEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "UpdateEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateEmailTemplateCommand(input, context);
    };
    UpdateEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateEmailTemplateCommand(output, context);
    };
    return UpdateEmailTemplateCommand;
}($Command));
export { UpdateEmailTemplateCommand };
//# sourceMappingURL=UpdateEmailTemplateCommand.js.map