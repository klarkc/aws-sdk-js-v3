import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteBucketPolicyCommandInput extends DeleteBucketPolicyRequest {
}
export interface DeleteBucketPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>This implementation of the DELETE action uses the policy subresource to delete the
 *          policy of a specified bucket. If you are using an identity other than the root user of the
 *          AWS account that owns the bucket, the calling identity must have the
 *             <code>DeleteBucketPolicy</code> permissions on the specified bucket and belong to the
 *          bucket owner's account to use this operation. </p>
 *
 *          <p>If you don't have <code>DeleteBucketPolicy</code> permissions, Amazon S3 returns a <code>403
 *             Access Denied</code> error. If you have the correct permissions, but you're not using an
 *          identity that belongs to the bucket owner's account, Amazon S3 returns a <code>405 Method Not
 *             Allowed</code> error. </p>
 *
 *          <important>
 *             <p>As a security precaution, the root user of the AWS account that owns a bucket can
 *             always use this operation, even if the policy explicitly denies the root user the
 *             ability to perform this action.</p>
 *          </important>
 *
 *          <p>For more information about bucket policies, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and
 *             UserPolicies</a>. </p>
 *          <p>The following operations are related to <code>DeleteBucketPolicy</code>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketPolicyCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketPolicyCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new DeleteBucketPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBucketPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketPolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteBucketPolicyCommand extends $Command<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput, S3ClientResolvedConfig> {
    readonly input: DeleteBucketPolicyCommandInput;
    constructor(input: DeleteBucketPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
