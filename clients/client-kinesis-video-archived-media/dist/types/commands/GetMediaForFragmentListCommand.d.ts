import { KinesisVideoArchivedMediaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoArchivedMediaClient";
import { GetMediaForFragmentListInput, GetMediaForFragmentListOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMediaForFragmentListCommandInput extends GetMediaForFragmentListInput {
}
export interface GetMediaForFragmentListCommandOutput extends GetMediaForFragmentListOutput, __MetadataBearer {
}
/**
 * <p>Gets media for a list of fragments (specified by fragment number) from the archived
 *             data in an Amazon Kinesis video stream.</p>
 *
 *         <note>
 *             <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint.
 *                 Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using
 *                 the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url
 *                     parameter</a>. </p>
 *         </note>
 *
 *         <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 *         <important>
 *             <p>If an error is thrown after invoking a Kinesis Video Streams archived media API,
 *                 in addition to the HTTP status code and the response body, it includes the following
 *                 pieces of information: </p>
 *             <ul>
 *                <li>
 *                     <p>
 *                         <code>x-amz-ErrorType</code> HTTP header – contains a more specific error
 *                         type in addition to what the HTTP status code provides. </p>
 *                 </li>
 *                <li>
 *                     <p>
 *                         <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to
 *                         AWS, the support team can better diagnose the problem if given the Request
 *                         Id.</p>
 *                 </li>
 *             </ul>
 *             <p>Both the HTTP status code and the ErrorType header can be utilized to make
 *                 programmatic decisions about whether errors are retry-able and under what
 *                 conditions, as well as provide information on what actions the client programmer
 *                 might need to take in order to successfully try again.</p>
 *             <p>For more information, see the <b>Errors</b> section at
 *                 the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>.
 *             </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetMediaForFragmentListCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const command = new GetMediaForFragmentListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMediaForFragmentListCommandInput} for command's `input` shape.
 * @see {@link GetMediaForFragmentListCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMediaForFragmentListCommand extends $Command<GetMediaForFragmentListCommandInput, GetMediaForFragmentListCommandOutput, KinesisVideoArchivedMediaClientResolvedConfig> {
    readonly input: GetMediaForFragmentListCommandInput;
    constructor(input: GetMediaForFragmentListCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisVideoArchivedMediaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMediaForFragmentListCommandInput, GetMediaForFragmentListCommandOutput>;
    private serialize;
    private deserialize;
}
