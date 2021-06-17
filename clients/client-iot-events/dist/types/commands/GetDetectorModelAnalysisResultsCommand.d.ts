import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { GetDetectorModelAnalysisResultsRequest, GetDetectorModelAnalysisResultsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDetectorModelAnalysisResultsCommandInput extends GetDetectorModelAnalysisResultsRequest {
}
export interface GetDetectorModelAnalysisResultsCommandOutput extends GetDetectorModelAnalysisResultsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves one or more analysis results of the detector model.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, GetDetectorModelAnalysisResultsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new GetDetectorModelAnalysisResultsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDetectorModelAnalysisResultsCommandInput} for command's `input` shape.
 * @see {@link GetDetectorModelAnalysisResultsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDetectorModelAnalysisResultsCommand extends $Command<GetDetectorModelAnalysisResultsCommandInput, GetDetectorModelAnalysisResultsCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: GetDetectorModelAnalysisResultsCommandInput;
    constructor(input: GetDetectorModelAnalysisResultsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDetectorModelAnalysisResultsCommandInput, GetDetectorModelAnalysisResultsCommandOutput>;
    private serialize;
    private deserialize;
}
