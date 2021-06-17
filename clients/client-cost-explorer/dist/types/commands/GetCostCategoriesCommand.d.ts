import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostCategoriesRequest, GetCostCategoriesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCostCategoriesCommandInput extends GetCostCategoriesRequest {
}
export interface GetCostCategoriesCommandOutput extends GetCostCategoriesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
 * 	        <note>
 *             <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostCategoriesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostCategoriesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostCategoriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostCategoriesCommandInput} for command's `input` shape.
 * @see {@link GetCostCategoriesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCostCategoriesCommand extends $Command<GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetCostCategoriesCommandInput;
    constructor(input: GetCostCategoriesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
