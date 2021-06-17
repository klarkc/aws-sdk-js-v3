import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateRouteRequest, CreateRouteResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRouteCommandInput extends CreateRouteRequest {
}
export interface CreateRouteCommandOutput extends CreateRouteResult, __MetadataBearer {
}
/**
 * <p>Creates a route in a route table within a VPC.</p>
 *          <p>You must specify one of the following targets: internet gateway or virtual private
 * 			gateway, NAT instance, NAT gateway, VPC peering connection, network interface, egress-only internet gateway, or transit gateway.</p>
 *          <p>When determining how to route traffic, we use the route with the most specific match.
 *             For example, traffic is destined for the IPv4 address <code>192.0.2.3</code>, and the
 *             route table includes the following two IPv4 routes:</p>
 * 			      <ul>
 *             <li>
 * 					          <p>
 *                   <code>192.0.2.0/24</code> (goes to some target A)</p>
 * 				        </li>
 *             <li>
 * 					          <p>
 *                   <code>192.0.2.0/28</code> (goes to some target B)</p>
 * 				        </li>
 *          </ul>
 * 		       <p>Both routes apply to the traffic destined for <code>192.0.2.3</code>. However, the second route
 * 				in the list covers a smaller number of IP addresses and is therefore more specific,
 * 				so we use that route to determine where to target the traffic.</p>
 *          <p>For more information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route Tables</a> in the
 *          <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRouteCommand extends $Command<CreateRouteCommandInput, CreateRouteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateRouteCommandInput;
    constructor(input: CreateRouteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRouteCommandInput, CreateRouteCommandOutput>;
    private serialize;
    private deserialize;
}
