import { __extends } from "tslib";
import { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/models_0";
import { deserializeAws_queryListSubscriptionsByTopicCommand, serializeAws_queryListSubscriptionsByTopicCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
 *             list of subscriptions, up to 100. If there are more subscriptions, a
 *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
 *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsByTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSubscriptionsByTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionsByTopicCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsByTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListSubscriptionsByTopicCommand = /** @class */ (function (_super) {
    __extends(ListSubscriptionsByTopicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListSubscriptionsByTopicCommand(input) {
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
    ListSubscriptionsByTopicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListSubscriptionsByTopicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListSubscriptionsByTopicInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListSubscriptionsByTopicResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListSubscriptionsByTopicCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListSubscriptionsByTopicCommand(input, context);
    };
    ListSubscriptionsByTopicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListSubscriptionsByTopicCommand(output, context);
    };
    return ListSubscriptionsByTopicCommand;
}($Command));
export { ListSubscriptionsByTopicCommand };
//# sourceMappingURL=ListSubscriptionsByTopicCommand.js.map