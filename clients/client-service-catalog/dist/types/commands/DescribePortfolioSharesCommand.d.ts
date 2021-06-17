import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePortfolioSharesCommandInput extends DescribePortfolioSharesInput {
}
export interface DescribePortfolioSharesCommandOutput extends DescribePortfolioSharesOutput, __MetadataBearer {
}
/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePortfolioSharesCommand extends $Command<DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribePortfolioSharesCommandInput;
    constructor(input: DescribePortfolioSharesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput>;
    private serialize;
    private deserialize;
}
