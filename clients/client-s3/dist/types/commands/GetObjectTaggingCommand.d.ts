import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetObjectTaggingOutput, GetObjectTaggingRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetObjectTaggingCommandInput extends GetObjectTaggingRequest {
}
export interface GetObjectTaggingCommandOutput extends GetObjectTaggingOutput, __MetadataBearer {
}
/**
 * <p>Returns the tag-set of an object. You send the GET request against the tagging
 *          subresource associated with the object.</p>
 *
 *          <p>To use this operation, you must have permission to perform the
 *             <code>s3:GetObjectTagging</code> action. By default, the GET action returns
 *          information about current version of an object. For a versioned bucket, you can have
 *          multiple versions of an object in your bucket. To retrieve tags of any other version, use
 *          the versionId query parameter. You also need permission for the
 *             <code>s3:GetObjectVersionTagging</code> action.</p>
 *
 *          <p> By default, the bucket owner has this permission and can grant this permission to
 *          others.</p>
 *
 *          <p> For information about the Amazon S3 object tagging feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html">Object Tagging</a>.</p>
 *
 *          <p>The following action is related to <code>GetObjectTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjectTagging.html">DeleteObjectTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new GetObjectTaggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link GetObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetObjectTaggingCommand extends $Command<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput, S3ClientResolvedConfig> {
    readonly input: GetObjectTaggingCommandInput;
    constructor(input: GetObjectTaggingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput>;
    private serialize;
    private deserialize;
}
