import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartTextDetectionRequest, StartTextDetectionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartTextDetectionCommandInput extends StartTextDetectionRequest {
}
export interface StartTextDetectionCommandOutput extends StartTextDetectionResponse, __MetadataBearer {
}
/**
 * <p>Starts asynchronous detection of text in a stored video.</p>
 *          <p>Amazon Rekognition Video can detect text in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name and
 *        the filename of the video. <code>StartTextDetection</code> returns a job identifier (<code>JobId</code>) which you use to get
 *        the results of the operation. When text detection is finished, Amazon Rekognition Video publishes a completion status to the Amazon Simple Notification Service topic
 *        that you specify in <code>NotificationChannel</code>.</p>
 *          <p>To get the results of the text detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. if so, call <a>GetTextDetection</a> and pass the job identifier (<code>JobId</code>)
 *        from the initial call to <code>StartTextDetection</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartTextDetectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartTextDetectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartTextDetectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartTextDetectionCommandInput} for command's `input` shape.
 * @see {@link StartTextDetectionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartTextDetectionCommand extends $Command<StartTextDetectionCommandInput, StartTextDetectionCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartTextDetectionCommandInput;
    constructor(input: StartTextDetectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTextDetectionCommandInput, StartTextDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
