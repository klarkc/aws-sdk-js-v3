import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpnConnectionOptionsRequest, ModifyVpnConnectionOptionsResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpnConnectionOptionsCommandInput extends ModifyVpnConnectionOptionsRequest {
}
export interface ModifyVpnConnectionOptionsCommandOutput extends ModifyVpnConnectionOptionsResult, __MetadataBearer {
}
/**
 * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
 *         <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the AWS side do not change, and the tunnel options do not change. Your VPN connection will be temporarily unavailable for a brief period while the VPN connection is updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpnConnectionOptionsCommand extends $Command<ModifyVpnConnectionOptionsCommandInput, ModifyVpnConnectionOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpnConnectionOptionsCommandInput;
    constructor(input: ModifyVpnConnectionOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpnConnectionOptionsCommandInput, ModifyVpnConnectionOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
