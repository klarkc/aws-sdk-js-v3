import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateServiceActionFromProvisioningArtifactInput, DisassociateServiceActionFromProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateServiceActionFromProvisioningArtifactCommandInput extends DisassociateServiceActionFromProvisioningArtifactInput {
}
export interface DisassociateServiceActionFromProvisioningArtifactCommandOutput extends DisassociateServiceActionFromProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Disassociates the specified self-service action association from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateServiceActionFromProvisioningArtifactCommand extends $Command<DisassociateServiceActionFromProvisioningArtifactCommandInput, DisassociateServiceActionFromProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateServiceActionFromProvisioningArtifactCommandInput;
    constructor(input: DisassociateServiceActionFromProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateServiceActionFromProvisioningArtifactCommandInput, DisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
