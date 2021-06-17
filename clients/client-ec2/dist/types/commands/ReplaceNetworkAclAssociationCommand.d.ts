import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ReplaceNetworkAclAssociationCommandInput extends ReplaceNetworkAclAssociationRequest {
}
export interface ReplaceNetworkAclAssociationCommandOutput extends ReplaceNetworkAclAssociationResult, __MetadataBearer {
}
/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
 * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ReplaceNetworkAclAssociationCommand extends $Command<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceNetworkAclAssociationCommandInput;
    constructor(input: ReplaceNetworkAclAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
