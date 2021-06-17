import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { ExportAutoScalingGroupRecommendationsRequest, ExportAutoScalingGroupRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportAutoScalingGroupRecommendationsCommandInput extends ExportAutoScalingGroupRecommendationsRequest {
}
export interface ExportAutoScalingGroupRecommendationsCommandOutput extends ExportAutoScalingGroupRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Exports optimization recommendations for Auto Scaling groups.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Auto Scaling group export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportAutoScalingGroupRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportAutoScalingGroupRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportAutoScalingGroupRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportAutoScalingGroupRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportAutoScalingGroupRecommendationsCommand extends $Command<ExportAutoScalingGroupRecommendationsCommandInput, ExportAutoScalingGroupRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: ExportAutoScalingGroupRecommendationsCommandInput;
    constructor(input: ExportAutoScalingGroupRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportAutoScalingGroupRecommendationsCommandInput, ExportAutoScalingGroupRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
