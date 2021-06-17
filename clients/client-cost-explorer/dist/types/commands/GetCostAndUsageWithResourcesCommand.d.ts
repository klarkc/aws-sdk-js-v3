import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageWithResourcesRequest, GetCostAndUsageWithResourcesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCostAndUsageWithResourcesCommandInput extends GetCostAndUsageWithResourcesRequest {
}
export interface GetCostAndUsageWithResourcesCommandOutput extends GetCostAndUsageWithResourcesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and
 * 	    usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that
 * 	    you want the request to return. You can also filter and group your data by various dimensions,
 * 	    such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
 * 	    of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in AWS
 * 	    Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
 * 	        <note>
 *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageWithResourcesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageWithResourcesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostAndUsageWithResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostAndUsageWithResourcesCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageWithResourcesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCostAndUsageWithResourcesCommand extends $Command<GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostAndUsageWithResourcesCommandInput;
    constructor(input: GetCostAndUsageWithResourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
