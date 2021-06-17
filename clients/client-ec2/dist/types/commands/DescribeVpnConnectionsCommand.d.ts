import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpnConnectionsRequest, DescribeVpnConnectionsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeVpnConnectionsCommandInput extends DescribeVpnConnectionsRequest {
}
export interface DescribeVpnConnectionsCommandOutput extends DescribeVpnConnectionsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your VPN connections.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">AWS Site-to-Site VPN</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeVpnConnectionsCommand extends $Command<DescribeVpnConnectionsCommandInput, DescribeVpnConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVpnConnectionsCommandInput;
    constructor(input: DescribeVpnConnectionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVpnConnectionsCommandInput, DescribeVpnConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
