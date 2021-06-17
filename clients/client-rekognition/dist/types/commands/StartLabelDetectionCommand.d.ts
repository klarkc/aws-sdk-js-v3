import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartLabelDetectionRequest, StartLabelDetectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartLabelDetectionCommandInput extends StartLabelDetectionRequest {
}
export interface StartLabelDetectionCommandOutput extends StartLabelDetectionResponse, __MetadataBearer {
}
/**
 * <p>Starts asynchronous detection of labels in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect labels in a video. Labels are instances of real-world entities.
 *        This includes objects like flower, tree, and table; events like
 *        wedding, graduation, and birthday party; concepts like landscape, evening, and nature; and activities
 *        like a person getting out of a car or a person skiing.</p>
 *
 *          <p>The video must be stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *        and the filename of the video.
 *         <code>StartLabelDetection</code> returns a job identifier (<code>JobId</code>) which you use to get the
 *        results of the operation. When label detection is finished, Amazon Rekognition Video publishes a completion status
 *         to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>.</p>
 *          <p>To get the results of the label detection operation, first check that the status value published to the Amazon SNS
 *         topic is <code>SUCCEEDED</code>. If so, call  <a>GetLabelDetection</a> and pass the job identifier
 *        (<code>JobId</code>) from the initial call to <code>StartLabelDetection</code>.</p>
 *         <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartLabelDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartLabelDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartLabelDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartLabelDetectionCommandInput} for command's `input` shape.
 * @see {@link StartLabelDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartLabelDetectionCommand extends $Command<StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartLabelDetectionCommandInput;
    constructor(input: StartLabelDetectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartLabelDetectionCommandInput, StartLabelDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
