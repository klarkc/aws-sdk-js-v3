import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNamespaceCommandInput extends GetNamespaceRequest {
}
export interface GetNamespaceCommandOutput extends GetNamespaceResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNamespaceCommand extends $Command<GetNamespaceCommandInput, GetNamespaceCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: GetNamespaceCommandInput;
    constructor(input: GetNamespaceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNamespaceCommandInput, GetNamespaceCommandOutput>;
    private serialize;
    private deserialize;
}
