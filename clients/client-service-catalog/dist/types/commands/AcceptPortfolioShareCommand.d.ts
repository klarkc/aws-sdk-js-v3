import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptPortfolioShareCommandInput extends AcceptPortfolioShareInput {
}
export interface AcceptPortfolioShareCommandOutput extends AcceptPortfolioShareOutput, __MetadataBearer {
}
/**
 * <p>Accepts an offer to share the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AcceptPortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AcceptPortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AcceptPortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptPortfolioShareCommandInput} for command's `input` shape.
 * @see {@link AcceptPortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptPortfolioShareCommand extends $Command<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AcceptPortfolioShareCommandInput;
    constructor(input: AcceptPortfolioShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
