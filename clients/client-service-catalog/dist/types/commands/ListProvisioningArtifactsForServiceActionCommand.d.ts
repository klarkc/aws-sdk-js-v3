import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisioningArtifactsForServiceActionInput, ListProvisioningArtifactsForServiceActionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisioningArtifactsForServiceActionCommandInput extends ListProvisioningArtifactsForServiceActionInput {
}
export interface ListProvisioningArtifactsForServiceActionCommandOutput extends ListProvisioningArtifactsForServiceActionOutput, __MetadataBearer {
}
/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsForServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsForServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsForServiceActionCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsForServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisioningArtifactsForServiceActionCommand extends $Command<ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisioningArtifactsForServiceActionCommandInput;
    constructor(input: ListProvisioningArtifactsForServiceActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningArtifactsForServiceActionCommandInput, ListProvisioningArtifactsForServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
