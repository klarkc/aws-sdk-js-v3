import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSecurityGroupRequest, CreateSecurityGroupResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSecurityGroupCommandInput extends CreateSecurityGroupRequest {
}
export interface CreateSecurityGroupCommandOutput extends CreateSecurityGroupResult, __MetadataBearer {
}
/**
 * <p>Creates a security group.</p>
 *          <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.
 *          For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in
 * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
 * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>When you create a security group, you specify a friendly name of your choice. You can have a security group for use in EC2-Classic with the same name as a security group for use in a VPC. However, you can't have two security groups for use in EC2-Classic with the same name or two security groups for use in a VPC with the same name.</p>
 *          <p>You have a default security group for use in EC2-Classic and a default security group for use in your VPC. If you don't specify a security group when you launch an instance, the instance is launched into the appropriate default security group. A default security group includes a default rule that grants instances unrestricted network access to each other.</p>
 *          <p>You can add or remove rules from your security groups using
 * 					<a>AuthorizeSecurityGroupIngress</a>,
 * 					<a>AuthorizeSecurityGroupEgress</a>,
 * 					<a>RevokeSecurityGroupIngress</a>, and
 * 					<a>RevokeSecurityGroupEgress</a>.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSecurityGroupCommand extends $Command<CreateSecurityGroupCommandInput, CreateSecurityGroupCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSecurityGroupCommandInput;
    constructor(input: CreateSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecurityGroupCommandInput, CreateSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
