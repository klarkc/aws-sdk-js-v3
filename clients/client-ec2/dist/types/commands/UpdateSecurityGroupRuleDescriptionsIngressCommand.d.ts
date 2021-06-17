import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UpdateSecurityGroupRuleDescriptionsIngressRequest, UpdateSecurityGroupRuleDescriptionsIngressResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandInput extends UpdateSecurityGroupRuleDescriptionsIngressRequest {
}
export interface UpdateSecurityGroupRuleDescriptionsIngressCommandOutput extends UpdateSecurityGroupRuleDescriptionsIngressResult, __MetadataBearer {
}
/**
 * <p>Updates the description of an ingress (inbound) security group rule. You can replace an
 * 			existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UpdateSecurityGroupRuleDescriptionsIngressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UpdateSecurityGroupRuleDescriptionsIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityGroupRuleDescriptionsIngressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command<UpdateSecurityGroupRuleDescriptionsIngressCommandInput, UpdateSecurityGroupRuleDescriptionsIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput;
    constructor(input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityGroupRuleDescriptionsIngressCommandInput, UpdateSecurityGroupRuleDescriptionsIngressCommandOutput>;
    private serialize;
    private deserialize;
}
