import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisioningArtifactInput, UpdateProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateProvisioningArtifactCommandInput extends UpdateProvisioningArtifactInput {
}
export interface UpdateProvisioningArtifactCommandOutput extends UpdateProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot update a provisioning artifact for a product that was shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new UpdateProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateProvisioningArtifactCommand extends $Command<UpdateProvisioningArtifactCommandInput, UpdateProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProvisioningArtifactCommandInput;
    constructor(input: UpdateProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisioningArtifactCommandInput, UpdateProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
