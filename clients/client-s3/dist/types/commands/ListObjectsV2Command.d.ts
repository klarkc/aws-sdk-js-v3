import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListObjectsV2Output, ListObjectsV2Request } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListObjectsV2CommandInput extends ListObjectsV2Request {
}
export interface ListObjectsV2CommandOutput extends ListObjectsV2Output, __MetadataBearer {
}
/**
 * <p>Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use
 *          the request parameters as selection criteria to return a subset of the objects in a bucket. A
 *          <code>200 OK</code> response can contain valid or invalid XML. Make sure to design your
 *          application to parse the contents of the response and handle it appropriately.
 *          Objects are returned sorted in an ascending order of the respective key names in the list.
 *          For more information about listing objects, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ListingKeysUsingAPIs.html">Listing object keys
 *             programmatically</a>
 *          </p>
 *
 *          <p>To use this operation, you must have READ access to the bucket.</p>
 *
 *          <p>To use this action in an AWS Identity and Access Management (IAM) policy, you must
 *          have permissions to perform the <code>s3:ListBucket</code> action. The bucket owner has
 *          this permission by default and can grant this permission to others. For more information
 *          about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *             Resources</a>.</p>
 *          <important>
 *             <p>This section describes the latest revision of this action. We recommend that you use this
 *             revised API for application development. For backward compatibility, Amazon S3 continues to
 *             support the prior version of this API, <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>.</p>
 *          </important>
 *
 *          <p>To get a list of your buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html">ListBuckets</a>.</p>
 *
 *          <p>The following operations are related to <code>ListObjectsV2</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html">GetObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new ListObjectsV2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListObjectsV2CommandInput} for command's `input` shape.
 * @see {@link ListObjectsV2CommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListObjectsV2Command extends $Command<ListObjectsV2CommandInput, ListObjectsV2CommandOutput, S3ClientResolvedConfig> {
    readonly input: ListObjectsV2CommandInput;
    constructor(input: ListObjectsV2CommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListObjectsV2CommandInput, ListObjectsV2CommandOutput>;
    private serialize;
    private deserialize;
}
