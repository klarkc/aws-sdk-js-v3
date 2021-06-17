import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { AddPermissionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddPermissionCommandInput extends AddPermissionRequest {
}
export interface AddPermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds a permission to a queue for a specific
 *       <a href="https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P">principal</a>.
 *       This allows sharing access to the queue.</p>
 *          <p>When you create a queue, you have full control access rights for the queue.
 *       Only you, the owner of the queue, can grant or deny permissions to the queue.
 *       For more information about these permissions, see
 *       <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow
 *       Developers to Write Messages to a Shared Queue</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                  <p>
 *                      <code>AddPermission</code> generates a policy for you. You can use
 *                      <code>
 *                         <a>SetQueueAttributes</a>
 *                      </code> to
 *                         upload your policy. For more information, see
 *                             <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html">Using Custom Policies with the Amazon SQS Access Policy Language</a> in
 *                         the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *                </li>
 *                <li>
 *                  <p>An Amazon SQS policy can have a maximum of 7 actions.</p>
 *                </li>
 *                <li>
 *                     <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
 *                 </li>
 *             </ul>
 *          </note>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant cross-account permissions to a role and a user name</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, AddPermissionCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, AddPermissionCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddPermissionCommand extends $Command<AddPermissionCommandInput, AddPermissionCommandOutput, SQSClientResolvedConfig> {
    readonly input: AddPermissionCommandInput;
    constructor(input: AddPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddPermissionCommandInput, AddPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
