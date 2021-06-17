import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterTransitGatewayMulticastGroupMembersRequest, RegisterTransitGatewayMulticastGroupMembersResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterTransitGatewayMulticastGroupMembersCommandInput extends RegisterTransitGatewayMulticastGroupMembersRequest {
}
export interface RegisterTransitGatewayMulticastGroupMembersCommandOutput extends RegisterTransitGatewayMulticastGroupMembersResult, __MetadataBearer {
}
/**
 * <p>Registers members (network interfaces) with the  transit gateway multicast group. A member is a network interface associated
 *             with a supported EC2 instance that receives multicast traffic. For information about
 *             supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Consideration</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the members, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the members were added
 *             to the  transit gateway multicast group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupMembersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterTransitGatewayMulticastGroupMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupMembersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterTransitGatewayMulticastGroupMembersCommand extends $Command<RegisterTransitGatewayMulticastGroupMembersCommandInput, RegisterTransitGatewayMulticastGroupMembersCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterTransitGatewayMulticastGroupMembersCommandInput;
    constructor(input: RegisterTransitGatewayMulticastGroupMembersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTransitGatewayMulticastGroupMembersCommandInput, RegisterTransitGatewayMulticastGroupMembersCommandOutput>;
    private serialize;
    private deserialize;
}
