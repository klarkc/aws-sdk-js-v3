import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { BatchDisassociateServiceActionFromProvisioningArtifactInput, BatchDisassociateServiceActionFromProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandInput extends BatchDisassociateServiceActionFromProvisioningArtifactInput {
}
export interface BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput extends BatchDisassociateServiceActionFromProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchDisassociateServiceActionFromProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new BatchDisassociateServiceActionFromProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command<BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput;
    constructor(input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDisassociateServiceActionFromProvisioningArtifactCommandInput, BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
