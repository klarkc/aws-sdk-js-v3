import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { RejectPortfolioShareInput, RejectPortfolioShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectPortfolioShareCommandInput extends RejectPortfolioShareInput {
}
export interface RejectPortfolioShareCommandOutput extends RejectPortfolioShareOutput, __MetadataBearer {
}
/**
 * <p>Rejects an offer to share the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, RejectPortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, RejectPortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new RejectPortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectPortfolioShareCommandInput} for command's `input` shape.
 * @see {@link RejectPortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectPortfolioShareCommand extends $Command<RejectPortfolioShareCommandInput, RejectPortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: RejectPortfolioShareCommandInput;
    constructor(input: RejectPortfolioShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectPortfolioShareCommandInput, RejectPortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
