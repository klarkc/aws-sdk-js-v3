import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";
import { ListNamespacesRequest, ListNamespacesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNamespacesCommandInput extends ListNamespacesRequest {
}
export interface ListNamespacesCommandOutput extends ListNamespacesResponse, __MetadataBearer {
}
/**
 * <p>Lists summary information about the namespaces that were created by the current AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListNamespacesCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListNamespacesCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new ListNamespacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListNamespacesCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNamespacesCommand extends $Command<ListNamespacesCommandInput, ListNamespacesCommandOutput, ServiceDiscoveryClientResolvedConfig> {
    readonly input: ListNamespacesCommandInput;
    constructor(input: ListNamespacesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceDiscoveryClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNamespacesCommandInput, ListNamespacesCommandOutput>;
    private serialize;
    private deserialize;
}
