import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketTaggingOutput, GetBucketTaggingRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetBucketTaggingCommandInput extends GetBucketTaggingRequest {
}
export interface GetBucketTaggingCommandOutput extends GetBucketTaggingOutput, __MetadataBearer {
}
/**
 * <p>Returns the tag set associated with the bucket.</p>
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetBucketTagging</code> action. By default, the bucket owner has this
 *          permission and can grant this permission to others.</p>
 *
 *          <p>
 *             <code>GetBucketTagging</code> has the following special error:</p>
 *          <ul>
 *             <li>
 *                <p>Error code: <code>NoSuchTagSetError</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>Description: There is no tag set associated with the bucket.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 *          <p>The following operations are related to <code>GetBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketTagging.html">DeleteBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetBucketTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link GetBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetBucketTaggingCommand extends $Command<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetBucketTaggingCommandInput;
    constructor(input: GetBucketTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
