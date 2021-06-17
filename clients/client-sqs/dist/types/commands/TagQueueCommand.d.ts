import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { TagQueueRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface TagQueueCommandInput extends TagQueueRequest {
}
export interface TagQueueCommandOutput extends __MetadataBearer {
}
/**
 * <p>Add cost allocation tags to the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *
 *          <p>When you use queue tags, keep the following guidelines in mind:</p>
 *          <ul>
 *             <li>
 *                <p>Adding more than 50 tags to a queue isn't recommended.</p>
 *             </li>
 *             <li>
 *                <p>Tags don't have any semantic meaning. Amazon SQS interprets tags as character strings.</p>
 *             </li>
 *             <li>
 *                <p>Tags are case-sensitive.</p>
 *             </li>
 *             <li>
 *                <p>A new tag with a key identical to that of an existing tag overwrites the existing tag.</p>
 *             </li>
 *          </ul>
 *          <p>For a full list of tag restrictions, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-limits.html#limits-queues">Limits Related to Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, TagQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, TagQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new TagQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagQueueCommandInput} for command's `input` shape.
 * @see {@link TagQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class TagQueueCommand extends $Command<TagQueueCommandInput, TagQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: TagQueueCommandInput;
    constructor(input: TagQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagQueueCommandInput, TagQueueCommandOutput>;
    private serialize;
    private deserialize;
}
