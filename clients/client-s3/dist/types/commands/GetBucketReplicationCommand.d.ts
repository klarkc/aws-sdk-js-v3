import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketReplicationOutput, GetBucketReplicationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBucketReplicationCommandInput extends GetBucketReplicationRequest {
}
export interface GetBucketReplicationCommandOutput extends GetBucketReplicationOutput, __MetadataBearer {
}
/**
 * <p>Returns the replication configuration of a bucket.</p>
 *          <note>
 *             <p> It can take a while to propagate the put or delete a replication configuration to
 *             all Amazon S3 systems. Therefore, a get request soon after put or delete can return a wrong
 *             result. </p>
 *          </note>
 *          <p> For information about replication configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *
 *          <p>This action requires permissions for the <code>s3:GetReplicationConfiguration</code>
 *          action. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 *             Policies</a>.</p>
 *
 *          <p>If you include the <code>Filter</code> element in a replication configuration, you must
 *          also include the <code>DeleteMarkerReplication</code> and <code>Priority</code> elements.
 *          The response also returns those elements.</p>
 *
 *          <p>For information about <code>GetBucketReplication</code> errors, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ReplicationErrorCodeList">List of
 *             replication-related error codes</a>
 *          </p>
 *
 *
 *          <p>The following operations are related to <code>GetBucketReplication</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketReplication.html">PutBucketReplication</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketReplication.html">DeleteBucketReplication</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketReplicationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketReplicationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketReplicationCommandInput} for command's `input` shape.
 * @see {@link GetBucketReplicationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBucketReplicationCommand extends $Command<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketReplicationCommandInput;
    constructor(input: GetBucketReplicationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput>;
    private serialize;
    private deserialize;
}
