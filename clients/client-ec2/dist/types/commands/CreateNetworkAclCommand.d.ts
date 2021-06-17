import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclRequest, CreateNetworkAclResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkAclCommandInput extends CreateNetworkAclRequest {
}
export interface CreateNetworkAclCommandOutput extends CreateNetworkAclResult, __MetadataBearer {
}
/**
 * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkAclCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkAclCommand extends $Command<CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkAclCommandInput;
    constructor(input: CreateNetworkAclCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkAclCommandInput, CreateNetworkAclCommandOutput>;
    private serialize;
    private deserialize;
}
