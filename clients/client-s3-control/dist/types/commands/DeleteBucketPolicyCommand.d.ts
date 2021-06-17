import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteBucketPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBucketPolicyCommandInput extends DeleteBucketPolicyRequest {
}
export interface DeleteBucketPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <note>
 *             <p>This action deletes an Amazon S3 on Outposts bucket policy. To delete an
 *          S3 bucket policy, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketPolicy.html">DeleteBucketPolicy</a> in the <i>Amazon S3 API Reference</i>.
 *       </p>
 *          </note>
 *          <p>This implementation of the DELETE action uses the policy subresource to delete the
 *          policy of a specified Amazon S3 on Outposts bucket. If you are using an identity other than the
 *          root user of the AWS account that owns the bucket, the calling identity must have the
 *             <code>s3-outposts:DeleteBucketPolicy</code> permissions on the specified Outposts bucket
 *          and belong to the bucket owner's account to use this action. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in
 *             <i>Amazon S3 User Guide</i>.</p>
 *
 *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a
 *          <code>403 Access Denied</code> error. If you have the correct permissions, but you're
 *          not using an identity that belongs to the bucket owner's account, Amazon S3 returns a
 *          <code>405 Method Not Allowed</code> error. </p>
 *
 *
 *          <important>
 *             <p>As a security precaution, the root user of the AWS account that owns a bucket can always use this action,
 *          even if the policy explicitly denies the root user the ability to perform this action.</p>
 *          </important>
 *
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User Policies</a>. </p>
 *
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteBucketPolicy.html#API_control_DeleteBucketPolicy_Examples">Examples</a> section.</p>
 *
 *          <p>The following actions are related to <code>DeleteBucketPolicy</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetBucketPolicy.html">GetBucketPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutBucketPolicy.html">PutBucketPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteBucketPolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteBucketPolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new DeleteBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBucketPolicyCommand extends $Command<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: DeleteBucketPolicyCommandInput;
    constructor(input: DeleteBucketPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
