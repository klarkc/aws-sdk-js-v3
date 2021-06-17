import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetInstancesHealthStatusRequest, GetInstancesHealthStatusResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstancesHealthStatusCommandInput extends GetInstancesHealthStatusRequest {
}
export interface GetInstancesHealthStatusCommandOutput extends GetInstancesHealthStatusResponse, __MetadataBearer {
}
/**
 * <p>Gets the current health status (<code>Healthy</code>, <code>Unhealthy</code>, or <code>Unknown</code>) of one or
 *    more instances that are associated with a specified service.</p>
 *          <note>
 *             <p>There's a brief delay between when you register an instance and when the health status for the instance is
 *     available. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstancesHealthStatusCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetInstancesHealthStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstancesHealthStatusCommandInput} for command's `input` shape.
 * @see {@link GetInstancesHealthStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstancesHealthStatusCommand extends $Command<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetInstancesHealthStatusCommandInput;
    constructor(input: GetInstancesHealthStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstancesHealthStatusCommandInput, GetInstancesHealthStatusCommandOutput>;
    private serialize;
    private deserialize;
}
