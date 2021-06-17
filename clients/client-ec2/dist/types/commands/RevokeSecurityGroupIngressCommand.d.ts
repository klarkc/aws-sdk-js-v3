import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeSecurityGroupIngressRequest, RevokeSecurityGroupIngressResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeSecurityGroupIngressCommandInput extends RevokeSecurityGroupIngressRequest {
}
export interface RevokeSecurityGroupIngressCommandOutput extends RevokeSecurityGroupIngressResult, __MetadataBearer {
}
/**
 * <p>Removes the specified ingress rules from a security group. To remove a rule, the values
 *        that you specify (for example, ports) must match the existing rule's values exactly.</p>
 *
 *    	     <note>
 *             <p>[EC2-Classic , default VPC] If the values you specify do not match the existing rule's values,
 *                 no error is returned, and the output describes the security group rules that were
 *                 not revoked. </p>
 *             <p>AWS recommends that you use <a>DescribeSecurityGroups</a> to verify
 *                 that the rule has been removed.</p>
 *          </note>
 *
 *          <p>Each rule consists of the protocol and the CIDR range or source security group. For the TCP and UDP protocols, you must also specify the destination port or range of ports. For the ICMP protocol, you must also specify the ICMP type and code. If the security group rule has a description, you do not have to specify the description to revoke the rule.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible. However, a small delay might occur.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RevokeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RevokeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RevokeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeSecurityGroupIngressCommand extends $Command<RevokeSecurityGroupIngressCommandInput, RevokeSecurityGroupIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeSecurityGroupIngressCommandInput;
    constructor(input: RevokeSecurityGroupIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSecurityGroupIngressCommandInput, RevokeSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
