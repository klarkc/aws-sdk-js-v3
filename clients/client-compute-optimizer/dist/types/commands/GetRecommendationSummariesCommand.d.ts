import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetRecommendationSummariesRequest, GetRecommendationSummariesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRecommendationSummariesCommandInput extends GetRecommendationSummariesRequest {
}
export interface GetRecommendationSummariesCommandOutput extends GetRecommendationSummariesResponse, __MetadataBearer {
}
/**
 * <p>Returns the optimization findings for an account.</p>
 *         <p>It returns the number of:</p>
 *         <ul>
 *             <li>
 *                 <p>Amazon EC2 instances in an account that are <code>Underprovisioned</code>,
 *                         <code>Overprovisioned</code>, or <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Auto Scaling groups in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Amazon EBS volumes in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Lambda functions in an account that are <code>NotOptimized</code>, or
 *                         <code>Optimized</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetRecommendationSummariesCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetRecommendationSummariesCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetRecommendationSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationSummariesCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRecommendationSummariesCommand extends $Command<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetRecommendationSummariesCommandInput;
    constructor(input: GetRecommendationSummariesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecommendationSummariesCommandInput, GetRecommendationSummariesCommandOutput>;
    private serialize;
    private deserialize;
}
