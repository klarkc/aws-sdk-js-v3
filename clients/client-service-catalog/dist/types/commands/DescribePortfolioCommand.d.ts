import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioInput, DescribePortfolioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePortfolioCommandInput extends DescribePortfolioInput {
}
export interface DescribePortfolioCommandOutput extends DescribePortfolioOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePortfolioCommand extends $Command<DescribePortfolioCommandInput, DescribePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribePortfolioCommandInput;
    constructor(input: DescribePortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortfolioCommandInput, DescribePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
