import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeDetectorModelRequest, DescribeDetectorModelResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDetectorModelCommandInput extends DescribeDetectorModelRequest {
}
export interface DescribeDetectorModelCommandOutput extends DescribeDetectorModelResponse, __MetadataBearer {
}
/**
 * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
 *       information about the latest version is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeDetectorModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeDetectorModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DescribeDetectorModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorModelCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDetectorModelCommand extends $Command<DescribeDetectorModelCommandInput, DescribeDetectorModelCommandOutput, IoTEventsClientResolvedConfig> {
    readonly input: DescribeDetectorModelCommandInput;
    constructor(input: DescribeDetectorModelCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDetectorModelCommandInput, DescribeDetectorModelCommandOutput>;
    private serialize;
    private deserialize;
}
