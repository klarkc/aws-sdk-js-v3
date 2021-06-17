import { __extends } from "tslib";
import { DescribeEventsRequest, DescribeEventsResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventsCommand, serializeAws_json1_1DescribeEventsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Returns information about events that meet the specified filter criteria. Events are
 *          returned in a summary form and do not include the detailed description, any additional
 *          metadata that depends on the event type, or any affected resources. To retrieve that
 *          information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p>
 *          <p>If no filter criteria are specified, all events are returned. Results are sorted by
 *             <code>lastModifiedTime</code>, starting with the most recent event.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>When you call the <code>DescribeEvents</code> operation and specify an entity
 *                   for the <code>entityValues</code> parameter, AWS Health might return public
 *                   events that aren't specific to that resource. For example, if you call
 *                      <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2)
 *                   instance, AWS Health might return events that aren't specific to that resource or
 *                   service. To get events that are specific to a service, use the
 *                      <code>services</code> parameter in the <code>filter</code> object. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *                </li>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventsCommand = /** @class */ (function (_super) {
    __extends(DescribeEventsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventsCommand(input) {
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
    DescribeEventsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthClient";
        var commandName = "DescribeEventsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventsCommand(input, context);
    };
    DescribeEventsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventsCommand(output, context);
    };
    return DescribeEventsCommand;
}($Command));
export { DescribeEventsCommand };
//# sourceMappingURL=DescribeEventsCommand.js.map