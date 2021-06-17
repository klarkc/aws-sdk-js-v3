import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { DeregisterInstanceRequest, DeregisterInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterInstanceCommandInput extends DeregisterInstanceRequest {
}
export interface DeregisterInstanceCommandOutput extends DeregisterInstanceResponse, __MetadataBearer {
}
/**
 * <p>Deletes the Amazon Route 53 DNS records and health check, if any, that AWS Cloud Map created for the specified
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeregisterInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeregisterInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DeregisterInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterInstanceCommand extends $Command<DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: DeregisterInstanceCommandInput;
    constructor(input: DeregisterInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
