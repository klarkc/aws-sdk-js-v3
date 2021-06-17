import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultVpcRequest, CreateDefaultVpcResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDefaultVpcCommandInput extends CreateDefaultVpcRequest {
}
export interface CreateDefaultVpcCommandOutput extends CreateDefaultVpcResult, __MetadataBearer {
}
/**
 * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
 * 			in each Availability Zone. For more information about the components of a default VPC,
 * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and
 * 			Default Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot
 * 			specify the components of the default VPC yourself.</p>
 * 		       <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
 * 			more than one default VPC per Region.</p>
 * 		       <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC
 * 			in a Region that supports EC2-Classic. If you want a default VPC in a Region that
 * 			supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is
 * 			that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs
 * 			FAQ</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultVpcCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultVpcCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDefaultVpcCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDefaultVpcCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultVpcCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDefaultVpcCommand extends $Command<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateDefaultVpcCommandInput;
    constructor(input: CreateDefaultVpcCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput>;
    private serialize;
    private deserialize;
}
