import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProvisioningArtifactCommandInput extends CreateProvisioningArtifactInput {
}
export interface CreateProvisioningArtifactCommandOutput extends CreateProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
 *
 *          <p>The user or role that performs this operation must have the <code>cloudformation:GetTemplate</code>
 *          IAM policy permission. This policy permission is required when using the
 *          <code>ImportFromPhysicalId</code> template source in the information data section.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProvisioningArtifactCommand extends $Command<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProvisioningArtifactCommandInput;
    constructor(input: CreateProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
