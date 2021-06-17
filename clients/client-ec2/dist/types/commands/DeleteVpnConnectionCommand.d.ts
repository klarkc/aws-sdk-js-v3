import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVpnConnectionRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteVpnConnectionCommandInput extends DeleteVpnConnectionRequest {
}
export interface DeleteVpnConnectionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified VPN connection.</p>
 *         <p>If you're deleting the VPC and its associated components, we recommend that you detach the virtual private gateway from the VPC and delete the VPC before deleting the VPN connection. If you believe that the tunnel credentials for your VPN connection have been compromised, you can delete the VPN connection and create a new one that has new keys, without needing to delete the VPC or virtual private gateway. If you create a new VPN connection, you must reconfigure the customer gateway device using the new configuration information returned with the new VPN connection ID.</p>
 *         <p>For certificate-based authentication, delete all AWS Certificate Manager (ACM) private certificates used for the AWS-side tunnel endpoints for the VPN connection before deleting the VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteVpnConnectionCommand extends $Command<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteVpnConnectionCommandInput;
    constructor(input: DeleteVpnConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteVpnConnectionCommandInput, DeleteVpnConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
