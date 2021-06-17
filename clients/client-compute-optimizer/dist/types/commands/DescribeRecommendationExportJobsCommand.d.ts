import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { DescribeRecommendationExportJobsRequest, DescribeRecommendationExportJobsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRecommendationExportJobsCommandInput extends DescribeRecommendationExportJobsRequest {
}
export interface DescribeRecommendationExportJobsCommandOutput extends DescribeRecommendationExportJobsResponse, __MetadataBearer {
}
/**
 * <p>Describes recommendation export jobs created in the last seven days.</p>
 *
 *         <p>Use the <code>ExportAutoScalingGroupRecommendations</code> or
 *                 <code>ExportEC2InstanceRecommendations</code> actions to request an export of your
 *             recommendations. Then use the <code>DescribeRecommendationExportJobs</code> action to
 *             view your export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new DescribeRecommendationExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecommendationExportJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRecommendationExportJobsCommand extends $Command<DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: DescribeRecommendationExportJobsCommandInput;
    constructor(input: DescribeRecommendationExportJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput>;
    private serialize;
    private deserialize;
}
