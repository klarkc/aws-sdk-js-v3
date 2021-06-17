import { __extends } from "tslib";
import { ListEmailTemplatesRequest, ListEmailTemplatesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEmailTemplatesCommand, serializeAws_restJson1ListEmailTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the email templates present in your Amazon SES account in the current AWS
 *             Region.</p>
 *
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListEmailTemplatesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListEmailTemplatesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListEmailTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEmailTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListEmailTemplatesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEmailTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListEmailTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEmailTemplatesCommand(input) {
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
    ListEmailTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListEmailTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEmailTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEmailTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEmailTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEmailTemplatesCommand(input, context);
    };
    ListEmailTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEmailTemplatesCommand(output, context);
    };
    return ListEmailTemplatesCommand;
}($Command));
export { ListEmailTemplatesCommand };
//# sourceMappingURL=ListEmailTemplatesCommand.js.map