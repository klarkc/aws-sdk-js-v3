import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProvisionedProductPlanInput, DeleteProvisionedProductPlanOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProvisionedProductPlanCommandInput extends DeleteProvisionedProductPlanInput {
}
export interface DeleteProvisionedProductPlanCommandOutput extends DeleteProvisionedProductPlanOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisionedProductPlanCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProvisionedProductPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisionedProductPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedProductPlanCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProvisionedProductPlanCommand extends $Command<DeleteProvisionedProductPlanCommandInput, DeleteProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProvisionedProductPlanCommandInput;
    constructor(input: DeleteProvisionedProductPlanCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisionedProductPlanCommandInput, DeleteProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
