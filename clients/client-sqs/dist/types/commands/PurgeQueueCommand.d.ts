import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { PurgeQueueRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurgeQueueCommandInput extends PurgeQueueRequest {
}
export interface PurgeQueueCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the messages in a queue specified by the <code>QueueURL</code>
 *             parameter.</p>
 *
 *          <important>
 *             <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages
 *                 deleted from a queue.</p>
 *             <p>The message deletion process takes up to 60 seconds. We recommend waiting for
 *                 60 seconds regardless of your queue's size. </p>
 *          </important>
 *         <p>Messages sent to the queue <i>before</i> you call
 *                 <code>PurgeQueue</code> might be received but are deleted within the next
 *             minute.</p>
 *         <p>Messages sent to the queue <i>after</i> you call
 *                 <code>PurgeQueue</code> might be deleted while the queue is being purged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, PurgeQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, PurgeQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new PurgeQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurgeQueueCommandInput} for command's `input` shape.
 * @see {@link PurgeQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurgeQueueCommand extends $Command<PurgeQueueCommandInput, PurgeQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: PurgeQueueCommandInput;
    constructor(input: PurgeQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurgeQueueCommandInput, PurgeQueueCommandOutput>;
    private serialize;
    private deserialize;
}
