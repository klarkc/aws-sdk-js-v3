import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { ExportLambdaFunctionRecommendationsRequest, ExportLambdaFunctionRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportLambdaFunctionRecommendationsCommandInput extends ExportLambdaFunctionRecommendationsRequest {
}
export interface ExportLambdaFunctionRecommendationsCommandOutput extends ExportLambdaFunctionRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Exports optimization recommendations for AWS Lambda functions.</p>
 *
 *
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Lambda function export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportLambdaFunctionRecommendationsCommand extends $Command<ExportLambdaFunctionRecommendationsCommandInput, ExportLambdaFunctionRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: ExportLambdaFunctionRecommendationsCommandInput;
    constructor(input: ExportLambdaFunctionRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportLambdaFunctionRecommendationsCommandInput, ExportLambdaFunctionRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
