import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { BatchAssociateServiceActionWithProvisioningArtifactInput, BatchAssociateServiceActionWithProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandInput extends BatchAssociateServiceActionWithProvisioningArtifactInput {
}
export interface BatchAssociateServiceActionWithProvisioningArtifactCommandOutput extends BatchAssociateServiceActionWithProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Associates multiple self-service actions with provisioning artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, BatchAssociateServiceActionWithProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new BatchAssociateServiceActionWithProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateServiceActionWithProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchAssociateServiceActionWithProvisioningArtifactCommand extends $Command<BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput;
    constructor(input: BatchAssociateServiceActionWithProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchAssociateServiceActionWithProvisioningArtifactCommandInput, BatchAssociateServiceActionWithProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
