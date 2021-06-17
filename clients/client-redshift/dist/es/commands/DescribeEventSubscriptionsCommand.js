import { __extends } from "tslib";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeEventSubscriptionsCommand, serializeAws_queryDescribeEventSubscriptionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists descriptions of all the Amazon Redshift event notification subscriptions for a
 *             customer account. If you specify a subscription name, lists the description for that
 *             subscription.</p>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all event notification subscriptions that match any combination of the specified keys
 *             and values. For example, if you have <code>owner</code> and <code>environment</code> for
 *             tag keys, and <code>admin</code> and <code>test</code> for tag values, all subscriptions
 *             that have any combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, subscriptions are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "RedshiftClient";
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