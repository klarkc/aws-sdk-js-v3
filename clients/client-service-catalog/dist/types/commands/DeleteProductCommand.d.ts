import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProductInput, DeleteProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProductCommandInput extends DeleteProductInput {
}
export interface DeleteProductCommandOutput extends DeleteProductOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified product.</p>
 *          <p>You cannot delete a product if it was shared with you or is associated with a portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProductCommandInput} for command's `input` shape.
 * @see {@link DeleteProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProductCommand extends $Command<DeleteProductCommandInput, DeleteProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProductCommandInput;
    constructor(input: DeleteProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProductCommandInput, DeleteProductCommandOutput>;
    private serialize;
    private deserialize;
}
