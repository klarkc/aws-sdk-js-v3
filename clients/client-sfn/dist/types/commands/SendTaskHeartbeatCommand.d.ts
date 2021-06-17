import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SendTaskHeartbeatCommandInput extends SendTaskHeartbeatInput {
}
export interface SendTaskHeartbeatCommandOutput extends SendTaskHeartbeatOutput, __MetadataBearer {
}
/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report to Step Functions that the task represented by the specified
 *         <code>taskToken</code> is still making progress. This action resets the
 *         <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state
 *       machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself
 *       create an event in the execution history. However, if the task times out, the execution
 *       history contains an <code>ActivityTimedOut</code> entry for activities, or a
 *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
 *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern.</p>
 *          <note>
 *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
 *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
 *         for heartbeats.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, SendTaskHeartbeatCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, SendTaskHeartbeatCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new SendTaskHeartbeatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendTaskHeartbeatCommandInput} for command's `input` shape.
 * @see {@link SendTaskHeartbeatCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SendTaskHeartbeatCommand extends $Command<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput, SFNClientResolvedConfig> {
    readonly input: SendTaskHeartbeatCommandInput;
    constructor(input: SendTaskHeartbeatCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
