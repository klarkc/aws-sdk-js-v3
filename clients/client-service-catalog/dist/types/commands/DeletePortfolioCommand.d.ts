import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeletePortfolioInput, DeletePortfolioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeletePortfolioCommandInput extends DeletePortfolioInput {
}
export interface DeletePortfolioCommandOutput extends DeletePortfolioOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified portfolio.</p>
 *          <p>You cannot delete a portfolio if it was shared with you or if it has associated
 *          products, users, constraints, or shared accounts.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeletePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePortfolioCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeletePortfolioCommand extends $Command<DeletePortfolioCommandInput, DeletePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeletePortfolioCommandInput;
    constructor(input: DeletePortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePortfolioCommandInput, DeletePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
