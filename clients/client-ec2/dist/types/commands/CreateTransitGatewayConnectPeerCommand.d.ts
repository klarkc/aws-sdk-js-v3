import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayConnectPeerRequest, CreateTransitGatewayConnectPeerResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTransitGatewayConnectPeerCommandInput extends CreateTransitGatewayConnectPeerRequest {
}
export interface CreateTransitGatewayConnectPeerCommandOutput extends CreateTransitGatewayConnectPeerResult, __MetadataBearer {
}
/**
 * <p>Creates a Connect peer for a specified transit gateway Connect attachment between a
 *             transit gateway and an appliance.</p>
 *         <p>The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html#tgw-connect-peer">Connect peers</a> in the <i>Transit Gateways Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayConnectPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTransitGatewayConnectPeerCommand extends $Command<CreateTransitGatewayConnectPeerCommandInput, CreateTransitGatewayConnectPeerCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateTransitGatewayConnectPeerCommandInput;
    constructor(input: CreateTransitGatewayConnectPeerCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTransitGatewayConnectPeerCommandInput, CreateTransitGatewayConnectPeerCommandOutput>;
    private serialize;
    private deserialize;
}
