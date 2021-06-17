import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchProductsAsAdminCommandInput extends SearchProductsAsAdminInput {
}
export interface SearchProductsAsAdminCommandOutput extends SearchProductsAsAdminOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the products for the specified portfolio or all products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProductsAsAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProductsAsAdminCommandInput} for command's `input` shape.
 * @see {@link SearchProductsAsAdminCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchProductsAsAdminCommand extends $Command<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: SearchProductsAsAdminCommandInput;
    constructor(input: SearchProductsAsAdminCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput>;
    private serialize;
    private deserialize;
}
