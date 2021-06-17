import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSubnetsRequest, DescribeSubnetsResult } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSubnetsCommandInput extends DescribeSubnetsRequest {
}
export interface DescribeSubnetsCommandOutput extends DescribeSubnetsResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your subnets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSubnetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSubnetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSubnetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubnetsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSubnetsCommand extends $Command<DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeSubnetsCommandInput;
    constructor(input: DescribeSubnetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubnetsCommandInput, DescribeSubnetsCommandOutput>;
    private serialize;
    private deserialize;
}
