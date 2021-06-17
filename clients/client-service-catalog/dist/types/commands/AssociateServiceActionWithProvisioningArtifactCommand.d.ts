import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateServiceActionWithProvisioningArtifactInput, AssociateServiceActionWithProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateServiceActionWithProvisioningArtifactCommandInput extends AssociateServiceActionWithProvisioningArtifactInput {
}
export interface AssociateServiceActionWithProvisioningArtifactCommandOutput extends AssociateServiceActionWithProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Associates a self-service action with a provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new AssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateServiceActionWithProvisioningArtifactCommand extends $Command<AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateServiceActionWithProvisioningArtifactCommandInput;
    constructor(input: AssociateServiceActionWithProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateServiceActionWithProvisioningArtifactCommandInput, AssociateServiceActionWithProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
