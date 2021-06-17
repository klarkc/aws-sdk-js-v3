import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListAcceptedPortfolioSharesInput, ListAcceptedPortfolioSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAcceptedPortfolioSharesCommandInput extends ListAcceptedPortfolioSharesInput {
}
export interface ListAcceptedPortfolioSharesCommandOutput extends ListAcceptedPortfolioSharesOutput, __MetadataBearer {
}
/**
 * <p>Lists all portfolios for which sharing was accepted by this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListAcceptedPortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAcceptedPortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link ListAcceptedPortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAcceptedPortfolioSharesCommand extends $Command<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListAcceptedPortfolioSharesCommandInput;
    constructor(input: ListAcceptedPortfolioSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput>;
    private serialize;
    private deserialize;
}
