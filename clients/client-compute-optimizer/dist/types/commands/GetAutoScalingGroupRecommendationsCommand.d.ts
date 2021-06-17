import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetAutoScalingGroupRecommendationsRequest, GetAutoScalingGroupRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetAutoScalingGroupRecommendationsCommandInput extends GetAutoScalingGroupRecommendationsRequest {
}
export interface GetAutoScalingGroupRecommendationsCommandOutput extends GetAutoScalingGroupRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Returns Auto Scaling group recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon EC2 Auto Scaling groups that meet a specific
 *             set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetAutoScalingGroupRecommendationsCommand extends $Command<GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetAutoScalingGroupRecommendationsCommandInput;
    constructor(input: GetAutoScalingGroupRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutoScalingGroupRecommendationsCommandInput, GetAutoScalingGroupRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
