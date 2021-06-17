import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AddCustomRoutingEndpointsCommandInput extends AddCustomRoutingEndpointsRequest {
}
export interface AddCustomRoutingEndpointsCommandOutput extends AddCustomRoutingEndpointsResponse, __MetadataBearer {
}
/**
 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
 * 	        <p>The listener port range must be large enough to support the number of IP addresses that can be
 * 		specified in your subnet. The number of ports required is: subnet size times the number
 * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * 		port range of at least 255 ports. </p>
 * 	        <p>Note: You must have enough remaining listener ports available to
 * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
 * 	        <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * 			destinations to receive traffic, or to specify individual port mappings that can receive
 * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new AddCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AddCustomRoutingEndpointsCommand extends $Command<AddCustomRoutingEndpointsCommandInput, AddCustomRoutingEndpointsCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: AddCustomRoutingEndpointsCommandInput;
    constructor(input: AddCustomRoutingEndpointsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddCustomRoutingEndpointsCommandInput, AddCustomRoutingEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
