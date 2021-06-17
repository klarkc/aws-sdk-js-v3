import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateProductWithPortfolioCommandInput extends AssociateProductWithPortfolioInput {
}
export interface AssociateProductWithPortfolioCommandOutput extends AssociateProductWithPortfolioOutput, __MetadataBearer {
}
/**
 * <p>Associates the specified product with the specified portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateProductWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateProductWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateProductWithPortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateProductWithPortfolioCommandInput} for command's `input` shape.
 * @see {@link AssociateProductWithPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateProductWithPortfolioCommand extends $Command<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateProductWithPortfolioCommandInput;
    constructor(input: AssociateProductWithPortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
