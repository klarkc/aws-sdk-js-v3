import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RegisterTransitGatewayMulticastGroupSourcesRequest, RegisterTransitGatewayMulticastGroupSourcesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RegisterTransitGatewayMulticastGroupSourcesCommandInput extends RegisterTransitGatewayMulticastGroupSourcesRequest {
}
export interface RegisterTransitGatewayMulticastGroupSourcesCommandOutput extends RegisterTransitGatewayMulticastGroupSourcesResult, __MetadataBearer {
}
/**
 * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
 *         <p>A multicast source is a network interface attached to a supported instance that sends
 *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *         <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RegisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command<RegisterTransitGatewayMulticastGroupSourcesCommandInput, RegisterTransitGatewayMulticastGroupSourcesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RegisterTransitGatewayMulticastGroupSourcesCommandInput;
    constructor(input: RegisterTransitGatewayMulticastGroupSourcesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTransitGatewayMulticastGroupSourcesCommandInput, RegisterTransitGatewayMulticastGroupSourcesCommandOutput>;
    private serialize;
    private deserialize;
}
