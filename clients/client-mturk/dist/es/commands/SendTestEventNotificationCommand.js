import { __extends } from "tslib";
import { SendTestEventNotificationRequest, SendTestEventNotificationResponse } from "../models/models_0";
import { deserializeAws_json1_1SendTestEventNotificationCommand, serializeAws_json1_1SendTestEventNotificationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send
 *             a notification message as if a HIT event occurred, according to the provided
 *             notification specification. This allows you to test notifications without
 *             setting up notifications for a real HIT type and trying to trigger them using the website.
 *             When you call this operation, the service attempts to send the test notification immediately.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendTestEventNotificationCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendTestEventNotificationCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new SendTestEventNotificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTestEventNotificationCommandInput} for command's `input` shape.
 * @see {@link SendTestEventNotificationCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SendTestEventNotificationCommand = /** @class */ (function (_super) {
    __extends(SendTestEventNotificationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SendTestEventNotificationCommand(input) {
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
    SendTestEventNotificationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "SendTestEventNotificationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SendTestEventNotificationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SendTestEventNotificationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SendTestEventNotificationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SendTestEventNotificationCommand(input, context);
    };
    SendTestEventNotificationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SendTestEventNotificationCommand(output, context);
    };
    return SendTestEventNotificationCommand;
}($Command));
export { SendTestEventNotificationCommand };
//# sourceMappingURL=SendTestEventNotificationCommand.js.map