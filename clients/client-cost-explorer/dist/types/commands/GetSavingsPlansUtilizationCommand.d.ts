import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansUtilizationRequest, GetSavingsPlansUtilizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSavingsPlansUtilizationCommandInput extends GetSavingsPlansUtilizationRequest {
}
export interface GetSavingsPlansUtilizationCommandOutput extends GetSavingsPlansUtilizationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
 * 	        <note>
 *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSavingsPlansUtilizationCommand extends $Command<GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansUtilizationCommandInput;
    constructor(input: GetSavingsPlansUtilizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
