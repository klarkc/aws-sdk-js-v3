import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartCelebrityRecognitionRequest, StartCelebrityRecognitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartCelebrityRecognitionCommandInput extends StartCelebrityRecognitionRequest {
}
export interface StartCelebrityRecognitionCommandOutput extends StartCelebrityRecognitionResponse, __MetadataBearer {
}
/**
 * <p>Starts asynchronous recognition of celebrities in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect celebrities in a video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *       and the filename of the video.
 *       <code>StartCelebrityRecognition</code>
 *       returns a job identifier (<code>JobId</code>) which you use to get the results of the analysis.
 *       When celebrity recognition analysis is finished, Amazon Rekognition Video publishes a completion status
 *       to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.
 *       To get the results of the celebrity recognition analysis, first check that the status value published to the Amazon SNS
 *       topic is <code>SUCCEEDED</code>. If so, call  <a>GetCelebrityRecognition</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartCelebrityRecognition</code>. </p>
 *
 *          <p>For more information, see Recognizing Celebrities in the Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartCelebrityRecognitionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartCelebrityRecognitionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartCelebrityRecognitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartCelebrityRecognitionCommandInput} for command's `input` shape.
 * @see {@link StartCelebrityRecognitionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartCelebrityRecognitionCommand extends $Command<StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartCelebrityRecognitionCommandInput;
    constructor(input: StartCelebrityRecognitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartCelebrityRecognitionCommandInput, StartCelebrityRecognitionCommandOutput>;
    private serialize;
    private deserialize;
}
