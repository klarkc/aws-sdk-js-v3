import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { GetEC2InstanceRecommendationsRequest, GetEC2InstanceRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetEC2InstanceRecommendationsCommandInput extends GetEC2InstanceRecommendationsRequest {
}
export interface GetEC2InstanceRecommendationsCommandOutput extends GetEC2InstanceRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Returns Amazon EC2 instance recommendations.</p>
 *
 *         <p>AWS Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet
 *             a specific set of requirements. For more information, see the <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/requirements.html">Supported
 *                 resources and requirements</a> in the <i>AWS Compute Optimizer User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetEC2InstanceRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetEC2InstanceRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEC2InstanceRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetEC2InstanceRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetEC2InstanceRecommendationsCommand extends $Command<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: GetEC2InstanceRecommendationsCommandInput;
    constructor(input: GetEC2InstanceRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetEC2InstanceRecommendationsCommandInput, GetEC2InstanceRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
