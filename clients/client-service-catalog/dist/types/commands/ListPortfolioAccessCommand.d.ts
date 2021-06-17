import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfolioAccessInput, ListPortfolioAccessOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListPortfolioAccessCommandInput extends ListPortfolioAccessInput {
}
export interface ListPortfolioAccessCommandOutput extends ListPortfolioAccessOutput, __MetadataBearer {
}
/**
 * <p>Lists the account IDs that have access to the specified portfolio.</p>
 *          <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfolioAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfolioAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListPortfolioAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPortfolioAccessCommandInput} for command's `input` shape.
 * @see {@link ListPortfolioAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListPortfolioAccessCommand extends $Command<ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListPortfolioAccessCommandInput;
    constructor(input: ListPortfolioAccessCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput>;
    private serialize;
    private deserialize;
}
