import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { DeleteQueueRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteQueueCommandInput extends DeleteQueueRequest {
}
export interface DeleteQueueCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the queue specified by the <code>QueueUrl</code>, regardless of the queue's contents.</p>
 *          <important>
 *             <p>Be careful with the <code>DeleteQueue</code> action: When you delete a queue, any messages in the queue are no longer available.
 *       </p>
 *          </important>
 *          <p>When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a
 *           <code>
 *                <a>SendMessage</a>
 *             </code> request might succeed, but after 60 seconds the queue and the message you sent no longer exist.</p>
 *          <p>When you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.</p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteQueueCommand extends $Command<DeleteQueueCommandInput, DeleteQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: DeleteQueueCommandInput;
    constructor(input: DeleteQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteQueueCommandInput, DeleteQueueCommandOutput>;
    private serialize;
    private deserialize;
}
