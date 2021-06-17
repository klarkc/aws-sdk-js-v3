import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnTunnelCertificateRequest, ModifyVpnTunnelCertificateResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpnTunnelCertificateCommandInput extends ModifyVpnTunnelCertificateRequest {
}
export interface ModifyVpnTunnelCertificateCommandOutput extends ModifyVpnTunnelCertificateResult, __MetadataBearer {
}
/**
 * <p>Modifies the VPN tunnel endpoint certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelCertificateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelCertificateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelCertificateCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelCertificateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpnTunnelCertificateCommand extends $Command<ModifyVpnTunnelCertificateCommandInput, ModifyVpnTunnelCertificateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnTunnelCertificateCommandInput;
    constructor(input: ModifyVpnTunnelCertificateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnTunnelCertificateCommandInput, ModifyVpnTunnelCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
