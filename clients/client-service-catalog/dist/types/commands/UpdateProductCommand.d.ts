import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProductInput, UpdateProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProductCommandInput extends UpdateProductInput {
}
export interface UpdateProductCommandOutput extends UpdateProductOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProductCommandInput} for command's `input` shape.
 * @see {@link UpdateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProductCommand extends $Command<UpdateProductCommandInput, UpdateProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProductCommandInput;
    constructor(input: UpdateProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProductCommandInput, UpdateProductCommandOutput>;
    private serialize;
    private deserialize;
}
