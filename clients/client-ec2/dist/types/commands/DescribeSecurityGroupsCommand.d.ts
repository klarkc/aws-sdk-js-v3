import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSecurityGroupsCommandInput extends DescribeSecurityGroupsRequest {
}
export interface DescribeSecurityGroupsCommandOutput extends DescribeSecurityGroupsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified security groups or all of your security groups.</p>
 *          <p>A security group is for use with instances either in the EC2-Classic platform
 * 				or in a specific VPC. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security Groups</a> in
 * 				the <i>Amazon Elastic Compute Cloud User Guide</i> and
 * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSecurityGroupsCommand extends $Command<DescribeSecurityGroupsCommandInput, DescribeSecurityGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSecurityGroupsCommandInput;
    constructor(input: DescribeSecurityGroupsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityGroupsCommandInput, DescribeSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
