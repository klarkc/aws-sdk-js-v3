import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningArtifactInput, DescribeProvisioningArtifactOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProvisioningArtifactCommandInput extends DescribeProvisioningArtifactInput {
}
export interface DescribeProvisioningArtifactCommandOutput extends DescribeProvisioningArtifactOutput, __MetadataBearer {
}
/**
 * <p>Gets information about the specified provisioning artifact (also known as a version) for the specified product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link DescribeProvisioningArtifactCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProvisioningArtifactCommand extends $Command<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisioningArtifactCommandInput;
    constructor(input: DescribeProvisioningArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisioningArtifactCommandInput, DescribeProvisioningArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
