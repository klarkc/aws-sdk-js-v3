import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetRightsizingRecommendationRequest, GetRightsizingRecommendationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRightsizingRecommendationCommandInput extends GetRightsizingRecommendationRequest {
}
export interface GetRightsizingRecommendationCommandOutput extends GetRightsizingRecommendationResponse, __MetadataBearer {
}
/**
 * <p>Creates recommendations that
 *       help you save cost
 *       by identifying idle and underutilized Amazon EC2 instances.</p>
 *          <p>Recommendations are generated to either downsize or terminate instances, along with
 *       providing savings detail and metrics. For details on calculation and function, see
 *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing
 *         Your Cost with Rightsizing
 *       Recommendations</a>
 *       in the <i>AWS Billing and Cost Management User
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetRightsizingRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetRightsizingRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetRightsizingRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRightsizingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRightsizingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRightsizingRecommendationCommand extends $Command<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetRightsizingRecommendationCommandInput;
    constructor(input: GetRightsizingRecommendationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput>;
    private serialize;
    private deserialize;
}
