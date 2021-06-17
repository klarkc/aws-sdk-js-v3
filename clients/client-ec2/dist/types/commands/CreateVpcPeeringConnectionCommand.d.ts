import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionRequest {
}
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionResult, __MetadataBearer {
}
/**
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 			an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 			another AWS account and can be in a different Region to the requester VPC. The requester
 * 			VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateVpcPeeringConnectionCommand extends $Command<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcPeeringConnectionCommandInput;
    constructor(input: CreateVpcPeeringConnectionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
