import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { UpdateServiceRequest, UpdateServiceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateServiceCommandInput extends UpdateServiceRequest {
}
export interface UpdateServiceCommandOutput extends UpdateServiceResponse, __MetadataBearer {
}
/**
 * <p>Submits a request to perform the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>Update the TTL setting for existing <code>DnsRecords</code> configurations</p>
 *             </li>
 *             <li>
 *                <p>Add, update, or delete <code>HealthCheckConfig</code> for a specified service</p>
 *                <note>
 *                   <p>You can't add, update, or delete a <code>HealthCheckCustomConfig</code> configuration.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>For public and private DNS namespaces, note the following:</p>
 *          <ul>
 *             <li>
 *                <p>If you omit any existing <code>DnsRecords</code> or <code>HealthCheckConfig</code> configurations from an
 *       <code>UpdateService</code> request, the configurations are deleted from the service.</p>
 *             </li>
 *             <li>
 *                <p>If you omit an existing <code>HealthCheckCustomConfig</code> configuration from an <code>UpdateService</code>
 *      request, the configuration isn't deleted from the service.</p>
 *             </li>
 *          </ul>
 *          <p>When you update settings for a service, AWS Cloud Map also updates the corresponding settings in all the records
 *    and health checks that were created by using the specified service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, UpdateServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, UpdateServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new UpdateServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServiceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateServiceCommand extends $Command<UpdateServiceCommandInput, UpdateServiceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: UpdateServiceCommandInput;
    constructor(input: UpdateServiceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceCommandInput, UpdateServiceCommandOutput>;
    private serialize;
    private deserialize;
}
