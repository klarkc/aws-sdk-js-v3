import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCustomMetricRequest, DescribeCustomMetricResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCustomMetricCommandInput extends DescribeCustomMetricRequest {
}
export interface DescribeCustomMetricCommandOutput extends DescribeCustomMetricResponse, __MetadataBearer {
}
/**
 * <p>
 *       Gets information about a Device Defender detect custom metric.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCustomMetricCommand extends $Command<DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput, IoTClientResolvedConfig> {
    readonly input: DescribeCustomMetricCommandInput;
    constructor(input: DescribeCustomMetricCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCustomMetricCommandInput, DescribeCustomMetricCommandOutput>;
    private serialize;
    private deserialize;
}
