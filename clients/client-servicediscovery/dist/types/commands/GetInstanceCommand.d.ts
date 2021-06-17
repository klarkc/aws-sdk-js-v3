import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetInstanceRequest, GetInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetInstanceCommandInput extends GetInstanceRequest {
}
export interface GetInstanceCommandOutput extends GetInstanceResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetInstanceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetInstanceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInstanceCommandInput} for command's `input` shape.
 * @see {@link GetInstanceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetInstanceCommand extends $Command<GetInstanceCommandInput, GetInstanceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetInstanceCommandInput;
    constructor(input: GetInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceCommandInput, GetInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
