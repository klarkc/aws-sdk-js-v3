import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListServiceActionsForProvisioningArtifactInput, ListServiceActionsForProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListServiceActionsForProvisioningArtifactCommandInput extends ListServiceActionsForProvisioningArtifactInput {
}
export interface ListServiceActionsForProvisioningArtifactCommandOutput extends ListServiceActionsForProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListServiceActionsForProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceActionsForProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsForProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListServiceActionsForProvisioningArtifactCommand extends $Command<ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListServiceActionsForProvisioningArtifactCommandInput;
    constructor(input: ListServiceActionsForProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
