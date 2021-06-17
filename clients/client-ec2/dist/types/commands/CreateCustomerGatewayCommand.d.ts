import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateCustomerGatewayRequest, CreateCustomerGatewayResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomerGatewayCommandInput extends CreateCustomerGatewayRequest {
}
export interface CreateCustomerGatewayCommandOutput extends CreateCustomerGatewayResult, __MetadataBearer {
}
/**
 * <p>Provides information to AWS about your VPN customer gateway device. The customer
 *             gateway is the appliance at your end of the VPN connection. (The device on the AWS side
 *             of the VPN connection is the virtual private gateway.) You must provide the
 *             internet-routable IP address of the customer gateway's external interface. The IP
 *             address must be static and can be behind a device performing network address translation
 *             (NAT).</p>
 *         <p>For devices that use Border Gateway Protocol (BGP), you can also provide the device's
 *             BGP Autonomous System Number (ASN). You can use an existing ASN assigned to your
 *             network. If you don't have an ASN already, you can use a private ASN (in the 64512 -
 *             65534 range).</p>
 *         <note>
 *             <p>Amazon EC2 supports all 4-byte ASN numbers in the range of 1 - 2147483647, with the
 *                 exception of the following:</p>
 *                 <ul>
 *                <li>
 *                   <p>7224 - reserved in the <code>us-east-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>9059 - reserved in the <code>eu-west-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>17943 - reserved in the <code>ap-southeast-1</code> Region</p>
 *                </li>
 *                <li>
 *                   <p>10124 - reserved in the <code>ap-northeast-1</code> Region</p>
 *                </li>
 *             </ul>
 *         </note>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN
 *                 User Guide</i>.</p>
 *         <important>
 *             <p>To create more than one customer gateway with the same VPN type, IP address, and
 *                 BGP ASN, specify a unique device name for each customer gateway. Identical requests
 *                 return information about the existing customer gateway and do not create new
 *                 customer gateways.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomerGatewayCommand extends $Command<CreateCustomerGatewayCommandInput, CreateCustomerGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateCustomerGatewayCommandInput;
    constructor(input: CreateCustomerGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomerGatewayCommandInput, CreateCustomerGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
