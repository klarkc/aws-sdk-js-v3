import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelAnalysisRequest, DescribeDetectorModelAnalysisResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDetectorModelAnalysisCommandInput extends DescribeDetectorModelAnalysisRequest {
}
export interface DescribeDetectorModelAnalysisCommandOutput extends DescribeDetectorModelAnalysisResponse, __MetadataBearer {
}
/**
 * <p>Retrieves runtime information about a detector model analysis.</p>
 *          <note>
 *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelAnalysisCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelAnalysisCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeDetectorModelAnalysisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorModelAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelAnalysisCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDetectorModelAnalysisCommand extends $Command<DescribeDetectorModelAnalysisCommandInput, DescribeDetectorModelAnalysisCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: DescribeDetectorModelAnalysisCommandInput;
    constructor(input: DescribeDetectorModelAnalysisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDetectorModelAnalysisCommandInput, DescribeDetectorModelAnalysisCommandOutput>;
    private serialize;
    private deserialize;
}
