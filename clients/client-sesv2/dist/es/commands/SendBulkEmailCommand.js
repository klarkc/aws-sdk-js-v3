import { __extends } from "tslib";
import { SendBulkEmailRequest, SendBulkEmailResponse } from "../models/models_0";
import { deserializeAws_restJson1SendBulkEmailCommand, serializeAws_restJson1SendBulkEmailCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Composes an email message to multiple destinations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, SendBulkEmailCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, SendBulkEmailCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new SendBulkEmailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBulkEmailCommandInput} for command's `input` shape.
 * @see {@link SendBulkEmailCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendBulkEmailCommand = /** @class */ (function (_super) {
    __extends(SendBulkEmailCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendBulkEmailCommand(input) {
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
    SendBulkEmailCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "SendBulkEmailCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendBulkEmailRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendBulkEmailResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendBulkEmailCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SendBulkEmailCommand(input, context);
    };
    SendBulkEmailCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SendBulkEmailCommand(output, context);
    };
    return SendBulkEmailCommand;
}($Command));
export { SendBulkEmailCommand };
//# sourceMappingURL=SendBulkEmailCommand.js.map