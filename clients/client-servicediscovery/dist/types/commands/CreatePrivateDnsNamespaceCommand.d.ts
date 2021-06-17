import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePrivateDnsNamespaceCommandInput extends CreatePrivateDnsNamespaceRequest {
}
export interface CreatePrivateDnsNamespaceCommandOutput extends CreatePrivateDnsNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace
 *    defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your
 *    service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service
 *    instances that are registered using a private DNS namespace can be discovered using either a
 *     <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can
 *    create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePrivateDnsNamespaceCommand extends $Command<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: CreatePrivateDnsNamespaceCommandInput;
    constructor(input: CreatePrivateDnsNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePrivateDnsNamespaceCommandInput, CreatePrivateDnsNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
