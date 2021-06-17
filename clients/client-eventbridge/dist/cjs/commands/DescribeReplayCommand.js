"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeReplayCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeReplayCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EventBridgeClient";
        const commandName = "DescribeReplayCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeReplayRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeReplayResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DescribeReplayCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DescribeReplayCommand(output, context);
    }
}
exports.DescribeReplayCommand = DescribeReplayCommand;
//# sourceMappingURL=DescribeReplayCommand.js.map