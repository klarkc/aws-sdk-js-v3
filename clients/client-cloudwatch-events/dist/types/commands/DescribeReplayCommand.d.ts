import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DescribeReplayRequest, DescribeReplayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReplayCommandInput extends DescribeReplayRequest {
}
export interface DescribeReplayCommandOutput extends DescribeReplayResponse, __MetadataBearer {
}
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
 * import { CloudWatchEventsClient, DescribeReplayCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeReplayCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribeReplayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplayCommandInput} for command's `input` shape.
 * @see {@link DescribeReplayCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReplayCommand extends $Command<DescribeReplayCommandInput, DescribeReplayCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DescribeReplayCommandInput;
    constructor(input: DescribeReplayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplayCommandInput, DescribeReplayCommandOutput>;
    private serialize;
    private deserialize;
}
