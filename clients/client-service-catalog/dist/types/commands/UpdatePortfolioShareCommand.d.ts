import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdatePortfolioShareInput, UpdatePortfolioShareOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePortfolioShareCommandInput extends UpdatePortfolioShareInput {
}
export interface UpdatePortfolioShareCommandOutput extends UpdatePortfolioShareOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing for an existing portfolio share. </p>
 *
 *          <p>The portfolio share cannot be updated if the <code> CreatePortfolioShare</code> operation is <code>IN_PROGRESS</code>, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be COMPLETED.</p>
 *
 *          <p>You must provide the <code>accountId</code> or organization node in the input, but not both.</p>
 *
 *          <p>If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke <code>UpdatePortfolioShare</code> separately for each share type. </p>
 *
 *          <p>This API cannot be used for removing the portfolio share. You must use <code>DeletePortfolioShare</code> API for that action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdatePortfolioShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePortfolioShareCommand extends $Command<UpdatePortfolioShareCommandInput, UpdatePortfolioShareCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdatePortfolioShareCommandInput;
    constructor(input: UpdatePortfolioShareCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePortfolioShareCommandInput, UpdatePortfolioShareCommandOutput>;
    private serialize;
    private deserialize;
}
