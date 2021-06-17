import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProductInput, CreateProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProductCommandInput extends CreateProductInput {
}
export interface CreateProductCommandOutput extends CreateProductOutput, __MetadataBearer {
}
/**
 * <p>Creates a product.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 *
 *          <p>The user or role that performs this operation must have the
 *             <code>cloudformation:GetTemplate</code> IAM policy permission. This policy permission is
 *          required when using the <code>ImportFromPhysicalId</code> template source in the
 *          information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProductCommandInput} for command's `input` shape.
 * @see {@link CreateProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProductCommand extends $Command<CreateProductCommandInput, CreateProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProductCommandInput;
    constructor(input: CreateProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProductCommandInput, CreateProductCommandOutput>;
    private serialize;
    private deserialize;
}
