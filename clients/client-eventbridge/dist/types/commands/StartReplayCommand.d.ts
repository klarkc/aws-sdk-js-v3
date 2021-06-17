import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { StartReplayRequest, StartReplayResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartReplayCommandInput extends StartReplayRequest {
}
export interface StartReplayCommandOutput extends StartReplayResponse, __MetadataBearer {
}
/**
 * <p>Starts the specified replay. Events are not necessarily replayed in the exact same order
 *       that they were added to the archive. A replay processes events to replay based on the time in
 *       the event, and replays them using 1 minute intervals. If you specify an
 *         <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time
 *       range, the events are replayed from the first minute of that 20 minute range first. Then the
 *       events from the second minute are replayed. You can use <code>DescribeReplay</code> to
 *       determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code>
 *       indicates the time within the specified time range associated with the last event
 *       replayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, StartReplayCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, StartReplayCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new StartReplayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartReplayCommandInput} for command's `input` shape.
 * @see {@link StartReplayCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartReplayCommand extends $Command<StartReplayCommandInput, StartReplayCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: StartReplayCommandInput;
    constructor(input: StartReplayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReplayCommandInput, StartReplayCommandOutput>;
    private serialize;
    private deserialize;
}
