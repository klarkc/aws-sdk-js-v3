import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartPersonTrackingRequest, StartPersonTrackingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartPersonTrackingCommandInput extends StartPersonTrackingRequest {
}
export interface StartPersonTrackingCommandOutput extends StartPersonTrackingResponse, __MetadataBearer {
}
/**
 * <p>Starts the asynchronous tracking of a person's path in a stored video.</p>
 *          <p>Amazon Rekognition Video can track the path of people in a video stored in an Amazon S3 bucket. Use <a>Video</a> to specify the bucket name
 *        and the filename of the video. <code>StartPersonTracking</code>
 *        returns a job identifier (<code>JobId</code>) which you use to get the results of the operation.
 *        When label detection is finished, Amazon Rekognition publishes a completion status
 *        to the Amazon Simple Notification Service topic that you specify in <code>NotificationChannel</code>. </p>
 *          <p>To get the results of the person detection operation, first check that the status value published to the Amazon SNS
 *        topic is <code>SUCCEEDED</code>. If so, call  <a>GetPersonTracking</a> and pass the job identifier
 *       (<code>JobId</code>) from the initial call to <code>StartPersonTracking</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartPersonTrackingCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartPersonTrackingCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new StartPersonTrackingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPersonTrackingCommandInput} for command's `input` shape.
 * @see {@link StartPersonTrackingCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartPersonTrackingCommand extends $Command<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartPersonTrackingCommandInput;
    constructor(input: StartPersonTrackingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPersonTrackingCommandInput, StartPersonTrackingCommandOutput>;
    private serialize;
    private deserialize;
}
