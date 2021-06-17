import { __extends } from "tslib";
import { UnsubscribeRequest, UnsubscribeResult } from "../models/models_0";
import { deserializeAws_restJson1UnsubscribeCommand, serializeAws_restJson1UnsubscribeCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes an association between a notification rule and an Amazon SNS topic so that
 *             subscribers to that topic stop receiving notifications when the events described in the
 *             rule are triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UnsubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UnsubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UnsubscribeCommand = /** @class */ (function (_super) {
    __extends(UnsubscribeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UnsubscribeCommand(input) {
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
    UnsubscribeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodestarNotificationsClient";
        var commandName = "UnsubscribeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnsubscribeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UnsubscribeResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnsubscribeCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UnsubscribeCommand(input, context);
    };
    UnsubscribeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UnsubscribeCommand(output, context);
    };
    return UnsubscribeCommand;
}($Command));
export { UnsubscribeCommand };
//# sourceMappingURL=UnsubscribeCommand.js.map