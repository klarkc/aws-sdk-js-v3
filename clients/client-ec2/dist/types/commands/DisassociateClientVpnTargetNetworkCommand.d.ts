import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateClientVpnTargetNetworkRequest, DisassociateClientVpnTargetNetworkResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateClientVpnTargetNetworkCommandInput extends DisassociateClientVpnTargetNetworkRequest {
}
export interface DisassociateClientVpnTargetNetworkCommandOutput extends DisassociateClientVpnTargetNetworkResult, __MetadataBearer {
}
/**
 * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the
 * 			last target network from a Client VPN, the following happens:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>The route that was automatically added for the VPC is deleted</p>
 * 			         </li>
 *             <li>
 * 				           <p>All active client connections are terminated</p>
 * 			         </li>
 *             <li>
 * 				           <p>New client connections are disallowed</p>
 * 			         </li>
 *             <li>
 * 				           <p>The Client VPN endpoint's status changes to <code>pending-associate</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisassociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link DisassociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateClientVpnTargetNetworkCommand extends $Command<DisassociateClientVpnTargetNetworkCommandInput, DisassociateClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateClientVpnTargetNetworkCommandInput;
    constructor(input: DisassociateClientVpnTargetNetworkCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateClientVpnTargetNetworkCommandInput, DisassociateClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
