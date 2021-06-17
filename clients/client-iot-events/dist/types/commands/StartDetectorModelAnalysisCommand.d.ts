import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { StartDetectorModelAnalysisRequest, StartDetectorModelAnalysisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartDetectorModelAnalysisCommandInput extends StartDetectorModelAnalysisRequest {
}
export interface StartDetectorModelAnalysisCommandOutput extends StartDetectorModelAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Performs an analysis of your detector model. For more information,
 *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a>
 *       in the <i>AWS IoT Events Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, StartDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, StartDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new StartDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartDetectorModelAnalysisCommand extends $Command<StartDetectorModelAnalysisCommandInput, StartDetectorModelAnalysisCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: StartDetectorModelAnalysisCommandInput;
    constructor(input: StartDetectorModelAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDetectorModelAnalysisCommandInput, StartDetectorModelAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
