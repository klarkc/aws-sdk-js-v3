import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateClientVpnTargetNetworkRequest, AssociateClientVpnTargetNetworkResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateClientVpnTargetNetworkCommandInput extends AssociateClientVpnTargetNetworkRequest {
}
export interface AssociateClientVpnTargetNetworkCommandOutput extends AssociateClientVpnTargetNetworkResult, __MetadataBearer {
}
/**
 * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
 * 	        <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AssociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link AssociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateClientVpnTargetNetworkCommand extends $Command<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateClientVpnTargetNetworkCommandInput;
    constructor(input: AssociateClientVpnTargetNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
