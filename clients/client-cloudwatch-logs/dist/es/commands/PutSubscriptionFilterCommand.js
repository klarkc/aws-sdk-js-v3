import { __extends } from "tslib";
import { PutSubscriptionFilterRequest } from "../models/models_0";
import { deserializeAws_json1_1PutSubscriptionFilterCommand, serializeAws_json1_1PutSubscriptionFilterCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates a subscription filter and associates it with the specified log
 *       group. Subscription filters allow you to subscribe to a real-time stream of log events
 *       ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific
 *       destination. When log events are sent to the
 *       receiving service, they are Base64 encoded
 *       and compressed with the gzip format.</p>
 *          <p>The following destinations are supported for subscription filters:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Kinesis stream belonging to the same account as the subscription filter,
 *           for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A logical destination that belongs to a different account, for cross-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Kinesis Firehose delivery stream that belongs to the same account as the
 *           subscription filter, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An AWS Lambda function that belongs to the same account as the subscription filter,
 *           for same-account delivery.</p>
 *             </li>
 *          </ul>
 *          <p>Each log group can have up to two subscription filters associated with it. If you are
 *       updating an existing filter, you must specify the correct name in <code>filterName</code>.
 *       </p>
 *          <p>To perform a <code>PutSubscriptionFilter</code> operation, you must also have the
 *       <code>iam:PassRole</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link PutSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSubscriptionFilterCommand = /** @class */ (function (_super) {
    __extends(PutSubscriptionFilterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSubscriptionFilterCommand(input) {
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
    PutSubscriptionFilterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchLogsClient";
        var commandName = "PutSubscriptionFilterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSubscriptionFilterRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSubscriptionFilterCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutSubscriptionFilterCommand(input, context);
    };
    PutSubscriptionFilterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutSubscriptionFilterCommand(output, context);
    };
    return PutSubscriptionFilterCommand;
}($Command));
export { PutSubscriptionFilterCommand };
//# sourceMappingURL=PutSubscriptionFilterCommand.js.map