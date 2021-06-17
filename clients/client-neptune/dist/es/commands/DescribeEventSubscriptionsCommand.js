import { __extends } from "tslib";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeEventSubscriptionsCommand, serializeAws_queryDescribeEventSubscriptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the subscription descriptions for a customer account. The description for a
 *       subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID,
 *       CreationTime, and Status.</p>
 *          <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventSubscriptionsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventSubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventSubscriptionsCommand(input) {
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
    DescribeEventSubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NeptuneClient";
        var commandName = "DescribeEventSubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventSubscriptionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EventSubscriptionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventSubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeEventSubscriptionsCommand(input, context);
    };
    DescribeEventSubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeEventSubscriptionsCommand(output, context);
    };
    return DescribeEventSubscriptionsCommand;
}($Command));
export { DescribeEventSubscriptionsCommand };
//# sourceMappingURL=DescribeEventSubscriptionsCommand.js.map