import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetFirewallRuleGroupPolicyRequest, GetFirewallRuleGroupPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFirewallRuleGroupPolicyCommandInput extends GetFirewallRuleGroupPolicyRequest {
}
export interface GetFirewallRuleGroupPolicyCommandOutput extends GetFirewallRuleGroupPolicyResponse, __MetadataBearer {
}
/**
 * <p>Returns the AWS Identity and Access Management (AWS IAM) policy for sharing the
 * 			specified rule group. You can use the policy to share the rule group using AWS Resource
 * 			Access Manager (AWS RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFirewallRuleGroupPolicyCommand extends $Command<GetFirewallRuleGroupPolicyCommandInput, GetFirewallRuleGroupPolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetFirewallRuleGroupPolicyCommandInput;
    constructor(input: GetFirewallRuleGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFirewallRuleGroupPolicyCommandInput, GetFirewallRuleGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
