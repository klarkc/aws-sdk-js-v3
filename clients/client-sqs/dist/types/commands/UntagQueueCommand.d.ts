import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { UntagQueueRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagQueueCommandInput extends UntagQueueRequest {
}
export interface UntagQueueCommandOutput extends __MetadataBearer {
}
/**
 * <p>Remove cost allocation tags from the specified Amazon SQS queue. For an overview, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-tags.html">Tagging Your Amazon SQS Queues</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, UntagQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, UntagQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new UntagQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagQueueCommandInput} for command's `input` shape.
 * @see {@link UntagQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagQueueCommand extends $Command<UntagQueueCommandInput, UntagQueueCommandOutput, SQSClientResolvedConfig> {
    readonly input: UntagQueueCommandInput;
    constructor(input: UntagQueueCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagQueueCommandInput, UntagQueueCommandOutput>;
    private serialize;
    private deserialize;
}
