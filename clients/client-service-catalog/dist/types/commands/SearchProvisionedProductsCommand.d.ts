import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface SearchProvisionedProductsCommandInput extends SearchProvisionedProductsInput {
}
export interface SearchProvisionedProductsCommandOutput extends SearchProvisionedProductsOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class SearchProvisionedProductsCommand extends $Command<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: SearchProvisionedProductsCommandInput;
    constructor(input: SearchProvisionedProductsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput>;
    private serialize;
    private deserialize;
}
