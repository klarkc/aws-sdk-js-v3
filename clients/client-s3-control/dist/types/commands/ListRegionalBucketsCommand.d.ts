import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListRegionalBucketsRequest, ListRegionalBucketsResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRegionalBucketsCommandInput extends ListRegionalBucketsRequest {
}
export interface ListRegionalBucketsCommandOutput extends ListRegionalBucketsResult, __MetadataBearer {
}
/**
 * <p>Returns a list of all Outposts buckets in an Outpost that are owned by the authenticated
 *          sender of the request. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">Using Amazon S3 on Outposts</a> in the
 *             <i>Amazon S3 User Guide</i>.</p>
 *          <p>For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts
 *          endpoint hostname prefix and <code>x-amz-outpost-id</code> in your request, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListRegionalBuckets.html#API_control_ListRegionalBuckets_Examples">Examples</a> section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListRegionalBucketsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListRegionalBucketsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListRegionalBucketsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRegionalBucketsCommandInput} for command's `input` shape.
 * @see {@link ListRegionalBucketsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRegionalBucketsCommand extends $Command<ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: ListRegionalBucketsCommandInput;
    constructor(input: ListRegionalBucketsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRegionalBucketsCommandInput, ListRegionalBucketsCommandOutput>;
    private serialize;
    private deserialize;
}
