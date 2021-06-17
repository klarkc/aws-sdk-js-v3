import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansCoverageRequest, GetSavingsPlansCoverageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSavingsPlansCoverageCommandInput extends GetSavingsPlansCoverageRequest {
}
export interface GetSavingsPlansCoverageCommandOutput extends GetSavingsPlansCoverageResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p>
 * 	        <ul>
 *             <li>
 *                <p>
 *                   <code>LINKED_ACCOUNT</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>REGION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SERVICE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INSTANCE_FAMILY</code>
 *                </p>
 *             </li>
 *          </ul>
 * 	        <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansCoverageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansCoverageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansCoverageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansCoverageCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansCoverageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSavingsPlansCoverageCommand extends $Command<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansCoverageCommandInput;
    constructor(input: GetSavingsPlansCoverageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput>;
    private serialize;
    private deserialize;
}
