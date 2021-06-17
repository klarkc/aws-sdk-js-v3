import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnConnectionRequest, CreateVpnConnectionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpnConnectionCommandInput extends CreateVpnConnectionRequest {
}
export interface CreateVpnConnectionCommandOutput extends CreateVpnConnectionResult, __MetadataBearer {
}
/**
 * <p>Creates a VPN connection between an existing virtual private gateway or transit gateway and a
 *             customer gateway. The supported connection type is <code>ipsec.1</code>.</p>
 *         <p>The response includes information that you need to give to your network administrator
 *             to configure your customer gateway.</p>
 *         <important>
 *             <p>We strongly recommend that you use HTTPS when calling this operation because the
 *                 response contains sensitive cryptographic information for configuring your customer
 *                 gateway device.</p>
 *         </important>
 *         <p>If you decide to shut down your VPN connection for any reason and later create a new
 *             VPN connection, you must reconfigure your customer gateway with the new information
 *             returned from this call.</p>
 *         <p>This is an idempotent operation. If you perform the operation more than once, Amazon
 *             EC2 doesn't return an error.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpnConnectionCommand extends $Command<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpnConnectionCommandInput;
    constructor(input: CreateVpnConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
