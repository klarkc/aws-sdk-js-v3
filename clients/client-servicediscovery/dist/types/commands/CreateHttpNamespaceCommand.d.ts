import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHttpNamespaceCommandInput extends CreateHttpNamespaceRequest {
}
export interface CreateHttpNamespaceCommandOutput extends CreateHttpNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a
 *     <code>DiscoverInstances</code> request but can't be discovered using DNS.</p>
 *          <p>For the current quota on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map quotas</a> in the
 *     <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateHttpNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHttpNamespaceCommand extends $Command<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: CreateHttpNamespaceCommandInput;
    constructor(input: CreateHttpNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHttpNamespaceCommandInput, CreateHttpNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
