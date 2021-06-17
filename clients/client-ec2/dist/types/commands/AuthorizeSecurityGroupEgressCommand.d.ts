import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AuthorizeSecurityGroupEgressRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AuthorizeSecurityGroupEgressCommandInput extends AuthorizeSecurityGroupEgressRequest {
}
export interface AuthorizeSecurityGroupEgressCommandOutput extends __MetadataBearer {
}
/**
 * <p>[VPC only] Adds the specified egress rules to a security group for use with a VPC.</p>
 *          <p>An outbound rule permits instances to send traffic to the specified IPv4 or IPv6 CIDR
 *       address ranges, or to the instances associated with the specified destination security groups.</p>
 *          <p>You specify a protocol for each rule (for example, TCP).
 *        For the TCP and UDP protocols, you must also specify the destination port or port range.
 *        For the ICMP protocol, you must also specify the ICMP type and code.
 *        You can use -1 for the type or code to mean all types or all codes.</p>
 *          <p>Rule changes are propagated to affected instances as quickly as possible. However, a small delay might occur.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AuthorizeSecurityGroupEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AuthorizeSecurityGroupEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AuthorizeSecurityGroupEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeSecurityGroupEgressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeSecurityGroupEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AuthorizeSecurityGroupEgressCommand extends $Command<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AuthorizeSecurityGroupEgressCommandInput;
    constructor(input: AuthorizeSecurityGroupEgressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSecurityGroupEgressCommandInput, AuthorizeSecurityGroupEgressCommandOutput>;
    private serialize;
    private deserialize;
}
