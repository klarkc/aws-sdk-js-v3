import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNatGatewayCommandInput extends CreateNatGatewayRequest {
}
export interface CreateNatGatewayCommandOutput extends CreateNatGatewayResult, __MetadataBearer {
}
/**
 * <p>Creates a NAT gateway in the specified public subnet. This action creates a network
 *             interface in the specified subnet with a private IP address from the IP address range of
 *             the subnet. Internet-bound traffic from a private subnet can be routed to the NAT
 *             gateway, therefore enabling instances in the private subnet to connect to the internet.
 *             For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT Gateways</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNatGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNatGatewayCommand extends $Command<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNatGatewayCommandInput;
    constructor(input: CreateNatGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
