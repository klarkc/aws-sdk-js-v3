import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { ListCustomRoutingPortMappingsByDestinationRequest, ListCustomRoutingPortMappingsByDestinationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCustomRoutingPortMappingsByDestinationCommandInput extends ListCustomRoutingPortMappingsByDestinationRequest {
}
export interface ListCustomRoutingPortMappingsByDestinationCommandOutput extends ListCustomRoutingPortMappingsByDestinationResponse, __MetadataBearer {
}
/**
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsByDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCustomRoutingPortMappingsByDestinationCommand extends $Command<ListCustomRoutingPortMappingsByDestinationCommandInput, ListCustomRoutingPortMappingsByDestinationCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: ListCustomRoutingPortMappingsByDestinationCommandInput;
    constructor(input: ListCustomRoutingPortMappingsByDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomRoutingPortMappingsByDestinationCommandInput, ListCustomRoutingPortMappingsByDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
