import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdatePortfolioInput, UpdatePortfolioOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePortfolioCommandInput extends UpdatePortfolioInput {
}
export interface UpdatePortfolioCommandOutput extends UpdatePortfolioOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified portfolio.</p>
 *          <p>You cannot update a product that was shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdatePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdatePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdatePortfolioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePortfolioCommandInput} for command's `input` shape.
 * @see {@link UpdatePortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePortfolioCommand extends $Command<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdatePortfolioCommandInput;
    constructor(input: UpdatePortfolioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePortfolioCommandInput, UpdatePortfolioCommandOutput>;
    private serialize;
    private deserialize;
}
