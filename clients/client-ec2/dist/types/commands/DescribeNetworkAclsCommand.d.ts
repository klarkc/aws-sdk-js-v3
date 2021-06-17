import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkAclsRequest, DescribeNetworkAclsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNetworkAclsCommandInput extends DescribeNetworkAclsRequest {
}
export interface DescribeNetworkAclsCommandOutput extends DescribeNetworkAclsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your network ACLs.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkAclsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkAclsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNetworkAclsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkAclsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNetworkAclsCommand extends $Command<DescribeNetworkAclsCommandInput, DescribeNetworkAclsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkAclsCommandInput;
    constructor(input: DescribeNetworkAclsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkAclsCommandInput, DescribeNetworkAclsCommandOutput>;
    private serialize;
    private deserialize;
}
