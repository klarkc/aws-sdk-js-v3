import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfoliosInput, ListPortfoliosOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPortfoliosCommandInput extends ListPortfoliosInput {
}
export interface ListPortfoliosCommandOutput extends ListPortfoliosOutput, __MetadataBearer {
}
/**
 * <p>Lists all portfolios in the catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfoliosCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPortfoliosCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortfoliosCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPortfoliosCommand extends $Command<ListPortfoliosCommandInput, ListPortfoliosCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPortfoliosCommandInput;
    constructor(input: ListPortfoliosCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortfoliosCommandInput, ListPortfoliosCommandOutput>;
    private serialize;
    private deserialize;
}
