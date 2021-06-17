import { __extends } from "tslib";
import { GetEmailTemplateRequest, GetEmailTemplateResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEmailTemplateCommand, serializeAws_restJson1GetEmailTemplateCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays the template object (which includes the subject line, HTML part and text
 *             part) for the template you specify.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new GetEmailTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link GetEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEmailTemplateCommand = /** @class */ (function (_super) {
    __extends(GetEmailTemplateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEmailTemplateCommand(input) {
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
    GetEmailTemplateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "GetEmailTemplateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEmailTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEmailTemplateResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEmailTemplateCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEmailTemplateCommand(input, context);
    };
    GetEmailTemplateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEmailTemplateCommand(output, context);
    };
    return GetEmailTemplateCommand;
}($Command));
export { GetEmailTemplateCommand };
//# sourceMappingURL=GetEmailTemplateCommand.js.map