import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpnGatewayRequest, CreateVpnGatewayResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpnGatewayCommandInput extends CreateVpnGatewayRequest {
}
export interface CreateVpnGatewayCommandOutput extends CreateVpnGatewayResult, __MetadataBearer {
}
/**
 * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the VPC side of your VPN connection. You can create a virtual private gateway before creating the VPC itself.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpnGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpnGatewayCommand extends $Command<CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpnGatewayCommandInput;
    constructor(input: CreateVpnGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpnGatewayCommandInput, CreateVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
