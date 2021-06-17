import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetFaceDetectionRequest, GetFaceDetectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFaceDetectionCommandInput extends GetFaceDetectionRequest {
}
export interface GetFaceDetectionCommandOutput extends GetFaceDetectionResponse, __MetadataBearer {
}
/**
 * <p>Gets face detection results for a Amazon Rekognition Video analysis started by <a>StartFaceDetection</a>.</p>
 *          <p>Face detection with Amazon Rekognition Video is an asynchronous operation. You start face detection by calling <a>StartFaceDetection</a>
 *      which returns a job identifier (<code>JobId</code>). When the face detection operation finishes, Amazon Rekognition Video publishes a completion status to
 *      the Amazon Simple Notification Service topic registered in the initial call to <code>StartFaceDetection</code>. To get the results
 *      of the face detection operation, first check that the status value published to the Amazon SNS topic is <code>SUCCEEDED</code>.
 *      If so, call  <a>GetFaceDetection</a> and pass the job identifier
 *      (<code>JobId</code>) from the initial call to <code>StartFaceDetection</code>.</p>
 *          <p>
 *             <code>GetFaceDetection</code> returns an array of detected faces (<code>Faces</code>) sorted by the time the faces were detected. </p>
 *          <p>Use MaxResults parameter to limit the number of labels returned. If there are more results than
 *    specified in <code>MaxResults</code>, the value of <code>NextToken</code> in the operation response contains a pagination token for getting the next set
 *    of results. To get the next page of results, call <code>GetFaceDetection</code> and populate the <code>NextToken</code> request parameter with the token
 *     value returned from the previous call to <code>GetFaceDetection</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, GetFaceDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, GetFaceDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new GetFaceDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFaceDetectionCommandInput} for command's `input` shape.
 * @see {@link GetFaceDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFaceDetectionCommand extends $Command<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: GetFaceDetectionCommandInput;
    constructor(input: GetFaceDetectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFaceDetectionCommandInput, GetFaceDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
