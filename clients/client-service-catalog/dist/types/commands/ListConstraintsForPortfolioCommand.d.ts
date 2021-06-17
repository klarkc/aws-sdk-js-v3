import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListConstraintsForPortfolioCommandInput extends ListConstraintsForPortfolioInput {
}
export interface ListConstraintsForPortfolioCommandOutput extends ListConstraintsForPortfolioOutput, __MetadataBearer {
}
/**
 * <p>Lists the constraints for the specified portfolio and product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListConstraintsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListConstraintsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListConstraintsForPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConstraintsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListConstraintsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListConstraintsForPortfolioCommand extends $Command<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListConstraintsForPortfolioCommandInput;
    constructor(input: ListConstraintsForPortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
