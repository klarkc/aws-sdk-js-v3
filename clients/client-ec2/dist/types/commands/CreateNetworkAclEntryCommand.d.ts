import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclEntryRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNetworkAclEntryCommandInput extends CreateNetworkAclEntryRequest {
}
export interface CreateNetworkAclEntryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
 * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
 * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
 * 		        ingress rules and a separate set of egress rules.</p>
 * 		       <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
 * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
 * 		       <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
 *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNetworkAclEntryCommand extends $Command<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateNetworkAclEntryCommandInput;
    constructor(input: CreateNetworkAclEntryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput>;
    private serialize;
    private deserialize;
}
