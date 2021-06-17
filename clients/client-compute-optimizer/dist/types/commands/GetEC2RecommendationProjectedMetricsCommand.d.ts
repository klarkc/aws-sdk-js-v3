import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEC2RecommendationProjectedMetricsRequest, GetEC2RecommendationProjectedMetricsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEC2RecommendationProjectedMetricsCommandInput extends GetEC2RecommendationProjectedMetricsRequest {
}
export interface GetEC2RecommendationProjectedMetricsCommandOutput extends GetEC2RecommendationProjectedMetricsResponse, __MetadataBearer {
}
/**
 * <p>Returns the projected utilization metrics of Amazon EC2 instance recommendations.</p>
 *
 *         <note>
 *             <p>The <code>Cpu</code> and <code>Memory</code> metrics are the only projected
 *                 utilization metrics returned when you run this action. Additionally, the
 *                     <code>Memory</code> metric is returned only for resources that have the unified
 *                 CloudWatch agent installed on them. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html#cw-agent">Enabling Memory
 *                     Utilization with the CloudWatch Agent</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2RecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEC2RecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEC2RecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetEC2RecommendationProjectedMetricsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEC2RecommendationProjectedMetricsCommand extends $Command<GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEC2RecommendationProjectedMetricsCommandInput;
    constructor(input: GetEC2RecommendationProjectedMetricsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEC2RecommendationProjectedMetricsCommandInput, GetEC2RecommendationProjectedMetricsCommandOutput>;
    private serialize;
    private deserialize;
}
