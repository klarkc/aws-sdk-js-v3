import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectVpcPeeringConnectionRequest, RejectVpcPeeringConnectionResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RejectVpcPeeringConnectionCommandInput extends RejectVpcPeeringConnectionRequest {
}
export interface RejectVpcPeeringConnectionCommandOutput extends RejectVpcPeeringConnectionResult, __MetadataBearer {
}
/**
 * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
 * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
 * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
 * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RejectVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RejectVpcPeeringConnectionCommand extends $Command<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectVpcPeeringConnectionCommandInput;
    constructor(input: RejectVpcPeeringConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
