import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnTunnelOptionsRequest, ModifyVpnTunnelOptionsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpnTunnelOptionsCommandInput extends ModifyVpnTunnelOptionsRequest {
}
export interface ModifyVpnTunnelOptionsCommandOutput extends ModifyVpnTunnelOptionsResult, __MetadataBearer {
}
/**
 * <p>Modifies the options for a VPN tunnel in an AWS Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN Tunnel Options for Your Site-to-Site VPN
 *                 Connection</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpnTunnelOptionsCommand extends $Command<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnTunnelOptionsCommandInput;
    constructor(input: ModifyVpnTunnelOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
