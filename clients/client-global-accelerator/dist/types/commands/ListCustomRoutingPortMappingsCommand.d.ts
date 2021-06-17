import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomRoutingPortMappingsCommandInput extends ListCustomRoutingPortMappingsRequest {
}
export interface ListCustomRoutingPortMappingsCommandOutput extends ListCustomRoutingPortMappingsResponse, __MetadataBearer {
}
/**
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 		mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 * 	        <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 * 		your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 * 		in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomRoutingPortMappingsCommand extends $Command<ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListCustomRoutingPortMappingsCommandInput;
    constructor(input: ListCustomRoutingPortMappingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput>;
    private serialize;
    private deserialize;
}
