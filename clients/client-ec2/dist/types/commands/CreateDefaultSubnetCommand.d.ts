import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDefaultSubnetCommandInput extends CreateDefaultSubnetRequest {
}
export interface CreateDefaultSubnetCommandOutput extends CreateDefaultSubnetResult, __MetadataBearer {
}
/**
 * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
 *             specified Availability Zone in your default VPC. You can have only one default subnet
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a Default
 *                 Subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDefaultSubnetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDefaultSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDefaultSubnetCommand extends $Command<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateDefaultSubnetCommandInput;
    constructor(input: CreateDefaultSubnetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput>;
    private serialize;
    private deserialize;
}
