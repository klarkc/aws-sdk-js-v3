import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisioningArtifactsInput, ListProvisioningArtifactsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProvisioningArtifactsCommandInput extends ListProvisioningArtifactsInput {
}
export interface ListProvisioningArtifactsCommandOutput extends ListProvisioningArtifactsOutput, __MetadataBearer {
}
/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisioningArtifactsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisioningArtifactsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListProvisioningArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningArtifactsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProvisioningArtifactsCommand extends $Command<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisioningArtifactsCommandInput;
    constructor(input: ListProvisioningArtifactsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisioningArtifactsCommandInput, ListProvisioningArtifactsCommandOutput>;
    private serialize;
    private deserialize;
}
