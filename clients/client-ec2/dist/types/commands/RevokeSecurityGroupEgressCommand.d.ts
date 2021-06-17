import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeSecurityGroupEgressRequest, RevokeSecurityGroupEgressResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeSecurityGroupEgressCommandInput extends RevokeSecurityGroupEgressRequest {
}
export interface RevokeSecurityGroupEgressCommandOutput extends RevokeSecurityGroupEgressResult, __MetadataBearer {
}
/**
 * <p>[VPC only] Removes the specified egress rules from a security group for EC2-VPC.
 *        This action does not apply to security groups for use in EC2-Classic. To remove a rule, the
 *        values that you specify (for example, ports) must match the existing rule's values
 *        exactly.</p>
 *          <note>
 *             <p>[Default VPC] If the values you specify do not match the existing rule's values, no error is
 *                 returned, and the output describes the security group rules that were not revoked. </p>
 *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
 *                 that the rule has been removed.</p>
 *          </note>
 *          <p>Each rule consists of the protocol and the IPv4 or IPv6 CIDR range or source security
 *       group. For the TCP and UDP protocols, you must also specify the destination port or range of
 *       ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule
 *       has a description, you do not have to specify the description to revoke the rule.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeSecurityGroupEgressCommand extends $Command<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeSecurityGroupEgressCommandInput;
    constructor(input: RevokeSecurityGroupEgressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSecurityGroupEgressCommandInput, RevokeSecurityGroupEgressCommandOutput>;
    private serialize;
    private deserialize;
}
