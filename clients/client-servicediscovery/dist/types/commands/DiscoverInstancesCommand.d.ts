import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { DiscoverInstancesRequest, DiscoverInstancesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DiscoverInstancesCommandInput extends DiscoverInstancesRequest {
}
export interface DiscoverInstancesCommandOutput extends DiscoverInstancesResponse, __MetadataBearer {
}
/**
 * <p>Discovers registered instances for a specified namespace and service. You can use <code>DiscoverInstances</code>
 *    to discover instances for any type of namespace. For public and private DNS namespaces, you can also use DNS queries
 *    to discover instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DiscoverInstancesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DiscoverInstancesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DiscoverInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverInstancesCommandInput} for command's `input` shape.
 * @see {@link DiscoverInstancesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DiscoverInstancesCommand extends $Command<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: DiscoverInstancesCommandInput;
    constructor(input: DiscoverInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
