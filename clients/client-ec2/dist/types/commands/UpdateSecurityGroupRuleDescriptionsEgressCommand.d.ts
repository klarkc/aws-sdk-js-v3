import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UpdateSecurityGroupRuleDescriptionsEgressRequest, UpdateSecurityGroupRuleDescriptionsEgressResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandInput extends UpdateSecurityGroupRuleDescriptionsEgressRequest {
}
export interface UpdateSecurityGroupRuleDescriptionsEgressCommandOutput extends UpdateSecurityGroupRuleDescriptionsEgressResult, __MetadataBearer {
}
/**
 * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsEgressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UpdateSecurityGroupRuleDescriptionsEgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsEgressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command<UpdateSecurityGroupRuleDescriptionsEgressCommandInput, UpdateSecurityGroupRuleDescriptionsEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput;
    constructor(input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityGroupRuleDescriptionsEgressCommandInput, UpdateSecurityGroupRuleDescriptionsEgressCommandOutput>;
    private serialize;
    private deserialize;
}
