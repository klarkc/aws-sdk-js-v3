import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListBudgetsForResourceInput, ListBudgetsForResourceOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListBudgetsForResourceCommandInput extends ListBudgetsForResourceInput {
}
export interface ListBudgetsForResourceCommandOutput extends ListBudgetsForResourceOutput, __MetadataBearer {
}
/**
 * <p>Lists all the budgets associated to the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListBudgetsForResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListBudgetsForResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListBudgetsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBudgetsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListBudgetsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListBudgetsForResourceCommand extends $Command<ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListBudgetsForResourceCommandInput;
    constructor(input: ListBudgetsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
