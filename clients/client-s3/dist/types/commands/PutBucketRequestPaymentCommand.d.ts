import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutBucketRequestPaymentRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutBucketRequestPaymentCommandInput extends PutBucketRequestPaymentRequest {
}
export interface PutBucketRequestPaymentCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the request payment configuration for a bucket. By default, the bucket owner pays
 *          for downloads from the bucket. This configuration parameter enables the bucket owner (only)
 *          to specify that the person requesting the download will be charged for the download. For
 *          more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RequesterPaysBuckets.html">Requester Pays
 *             Buckets</a>.</p>
 *
 *          <p>The following operations are related to <code>PutBucketRequestPayment</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketRequestPayment.html">GetBucketRequestPayment</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutBucketRequestPaymentCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutBucketRequestPaymentCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutBucketRequestPaymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBucketRequestPaymentCommandInput} for command's `input` shape.
 * @see {@link PutBucketRequestPaymentCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutBucketRequestPaymentCommand extends $Command<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput, S3ClientResolvedConfig> {
    readonly input: PutBucketRequestPaymentCommandInput;
    constructor(input: PutBucketRequestPaymentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput>;
    private serialize;
    private deserialize;
}
