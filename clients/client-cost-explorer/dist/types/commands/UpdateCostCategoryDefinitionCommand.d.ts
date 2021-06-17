import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { UpdateCostCategoryDefinitionRequest, UpdateCostCategoryDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCostCategoryDefinitionCommandInput extends UpdateCostCategoryDefinitionRequest {
}
export interface UpdateCostCategoryDefinitionCommandOutput extends UpdateCostCategoryDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new UpdateCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCostCategoryDefinitionCommand extends $Command<UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: UpdateCostCategoryDefinitionCommandInput;
    constructor(input: UpdateCostCategoryDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
