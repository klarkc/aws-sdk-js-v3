import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { DescribeAnomalyDetectionExecutionsRequest, DescribeAnomalyDetectionExecutionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeAnomalyDetectionExecutionsCommandInput extends DescribeAnomalyDetectionExecutionsRequest {
}
export interface DescribeAnomalyDetectionExecutionsCommandOutput extends DescribeAnomalyDetectionExecutionsResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the status of the specified anomaly detection jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAnomalyDetectionExecutionsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DescribeAnomalyDetectionExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAnomalyDetectionExecutionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAnomalyDetectionExecutionsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeAnomalyDetectionExecutionsCommand extends $Command<DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput, LookoutMetricsClientResolvedConfig> {
    readonly input: DescribeAnomalyDetectionExecutionsCommandInput;
    constructor(input: DescribeAnomalyDetectionExecutionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutMetricsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnomalyDetectionExecutionsCommandInput, DescribeAnomalyDetectionExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
