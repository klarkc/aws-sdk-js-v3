import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeletePortfolioShareInput, DeletePortfolioShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePortfolioShareCommandInput extends DeletePortfolioShareInput {
}
export interface DeletePortfolioShareCommandOutput extends DeletePortfolioShareOutput, __MetadataBearer {
}
/**
 * <p>Stops sharing the specified portfolio with the specified account or organization
 *          node. Shares to an organization node can only be deleted by the management account of an
 *          organization or by a delegated administrator.</p>
 *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePortfolioShareCommand extends $Command<DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeletePortfolioShareCommandInput;
    constructor(input: DeletePortfolioShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePortfolioShareCommandInput, DeletePortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
