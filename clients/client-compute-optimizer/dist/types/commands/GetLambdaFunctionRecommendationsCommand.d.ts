import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetLambdaFunctionRecommendationsRequest, GetLambdaFunctionRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLambdaFunctionRecommendationsCommandInput extends GetLambdaFunctionRecommendationsRequest {
}
export interface GetLambdaFunctionRecommendationsCommandOutput extends GetLambdaFunctionRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Returns AWS Lambda function recommendations.</p>
 *
 *
 *
 *         <p>AWS Compute Optimizer generates recommendations for functions that meet a specific set of
 *             requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported resources and
 *                 requirements</a> in the <i>AWS Compute Optimizer User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetLambdaFunctionRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetLambdaFunctionRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLambdaFunctionRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetLambdaFunctionRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLambdaFunctionRecommendationsCommand extends $Command<GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetLambdaFunctionRecommendationsCommandInput;
    constructor(input: GetLambdaFunctionRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLambdaFunctionRecommendationsCommandInput, GetLambdaFunctionRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
