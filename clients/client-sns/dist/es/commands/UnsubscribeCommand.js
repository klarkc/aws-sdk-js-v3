import { __extends } from "tslib";
import { UnsubscribeInput } from "../models/models_0";
import { deserializeAws_queryUnsubscribeCommand, serializeAws_queryUnsubscribeCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature
 *             is required. If the <code>Unsubscribe</code> call does not require authentication and
 *             the requester is not the subscription owner, a final cancellation message is delivered
 *             to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the
 *                 <code>Unsubscribe</code> request was unintended.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, UnsubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, UnsubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "SNSClient";
        var commandName = "UnsubscribeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UnsubscribeInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UnsubscribeCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryUnsubscribeCommand(input, context);
    };
    UnsubscribeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryUnsubscribeCommand(output, context);
    };
    return UnsubscribeCommand;
}($Command));
export { UnsubscribeCommand };
//# sourceMappingURL=UnsubscribeCommand.js.map