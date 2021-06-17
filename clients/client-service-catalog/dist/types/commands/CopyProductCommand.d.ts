import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CopyProductInput, CopyProductOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CopyProductCommandInput extends CopyProductInput {
}
export interface CopyProductCommandOutput extends CopyProductOutput, __MetadataBearer {
}
/**
 * <p>Copies the specified source product to the specified target product or a new product.</p>
 *          <p>You can copy a product to the same account or another account.
 *          You can copy a product to the same region or another region.</p>
 *          <p>This operation is performed asynchronously. To track the progress of the
 *          operation, use <a>DescribeCopyProductStatus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CopyProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CopyProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CopyProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyProductCommandInput} for command's `input` shape.
 * @see {@link CopyProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CopyProductCommand extends $Command<CopyProductCommandInput, CopyProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CopyProductCommandInput;
    constructor(input: CopyProductCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyProductCommandInput, CopyProductCommandOutput>;
    private serialize;
    private deserialize;
}
