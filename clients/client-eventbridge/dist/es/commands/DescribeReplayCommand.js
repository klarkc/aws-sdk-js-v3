import { __extends } from "tslib";
import { DescribeReplayRequest, DescribeReplayResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeReplayCommand, serializeAws_json1_1DescribeReplayCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the
 *       progress of a running replay. A replay processes events to replay based on the time in the
 *       event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and
 *       specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20
 *       minute time range, the events are replayed from the first minute of that 20 minute range
 *       first. Then the events from the second minute are replayed. You can use
 *         <code>DescribeReplay</code> to determine the progress of a replay. The value returned for
 *         <code>EventLastReplayedTime</code> indicates the time within the specified time range
 *       associated with the last event replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeReplayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplayCommandInput} for command's `input` shape.
 * @see {@link DescribeReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReplayCommand = /** @class */ (function (_super) {
    __extends(DescribeReplayCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReplayCommand(input) {
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
    DescribeReplayCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DescribeReplayCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReplayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReplayResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReplayCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeReplayCommand(input, context);
    };
    DescribeReplayCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeReplayCommand(output, context);
    };
    return DescribeReplayCommand;
}($Command));
export { DescribeReplayCommand };
//# sourceMappingURL=DescribeReplayCommand.js.map