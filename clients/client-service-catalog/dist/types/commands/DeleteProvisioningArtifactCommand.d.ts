import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProvisioningArtifactInput, DeleteProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteProvisioningArtifactCommandInput extends DeleteProvisioningArtifactInput {
}
export interface DeleteProvisioningArtifactCommandOutput extends DeleteProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Deletes the specified provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot delete a provisioning artifact associated with a product that was shared with you.
 *          You cannot delete the last provisioning artifact for a product, because a product must have at
 *          least one provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DeleteProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteProvisioningArtifactCommand extends $Command<DeleteProvisioningArtifactCommandInput, DeleteProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProvisioningArtifactCommandInput;
    constructor(input: DeleteProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisioningArtifactCommandInput, DeleteProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
