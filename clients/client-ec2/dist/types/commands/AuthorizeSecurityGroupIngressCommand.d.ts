import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupIngressRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeSecurityGroupIngressCommandInput extends AuthorizeSecurityGroupIngressRequest {
}
export interface AuthorizeSecurityGroupIngressCommandOutput extends __MetadataBearer {
}
/**
 * <p>Adds the specified ingress rules to a security group.</p>
 *          <p>An inbound rule permits instances to receive traffic from the specified IPv4 or IPv6 CIDR
 *        address ranges, or from the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For TCP and UDP, you must also specify the destination port or port range.
 *        For ICMP/ICMPv6, you must also specify the ICMP/ICMPv6 type and code.
 *        You can use -1 to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to instances within the security group as quickly as possible.
 *          However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AuthorizeSecurityGroupIngressCommand extends $Command<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AuthorizeSecurityGroupIngressCommandInput;
    constructor(input: AuthorizeSecurityGroupIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSecurityGroupIngressCommandInput, AuthorizeSecurityGroupIngressCommandOutput>;
    private serialize;
    private deserialize;
}
