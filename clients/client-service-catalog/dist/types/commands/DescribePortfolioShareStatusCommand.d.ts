import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioShareStatusInput, DescribePortfolioShareStatusOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePortfolioShareStatusCommandInput extends DescribePortfolioShareStatusInput {
}
export interface DescribePortfolioShareStatusCommandOutput extends DescribePortfolioShareStatusOutput, __MetadataBearer {
}
/**
 * <p>Gets the status of the specified portfolio share operation. This API can only be called
 *          by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioShareStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioShareStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioShareStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioShareStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioShareStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePortfolioShareStatusCommand extends $Command<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribePortfolioShareStatusCommandInput;
    constructor(input: DescribePortfolioShareStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput>;
    private serialize;
    private deserialize;
}
