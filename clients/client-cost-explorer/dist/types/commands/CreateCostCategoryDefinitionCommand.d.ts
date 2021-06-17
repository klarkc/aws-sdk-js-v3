import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateCostCategoryDefinitionRequest, CreateCostCategoryDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCostCategoryDefinitionCommandInput extends CreateCostCategoryDefinitionRequest {
}
export interface CreateCostCategoryDefinitionCommandOutput extends CreateCostCategoryDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new Cost Category with the requested name and rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, CreateCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, CreateCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new CreateCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCostCategoryDefinitionCommand extends $Command<CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: CreateCostCategoryDefinitionCommandInput;
    constructor(input: CreateCostCategoryDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
