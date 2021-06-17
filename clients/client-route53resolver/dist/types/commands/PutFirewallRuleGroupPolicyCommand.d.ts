import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { PutFirewallRuleGroupPolicyRequest, PutFirewallRuleGroupPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutFirewallRuleGroupPolicyCommandInput extends PutFirewallRuleGroupPolicyRequest {
}
export interface PutFirewallRuleGroupPolicyCommandOutput extends PutFirewallRuleGroupPolicyResponse, __MetadataBearer {
}
/**
 * <p>Attaches an AWS Identity and Access Management (AWS IAM) policy for sharing the rule
 * 			group. You can use the policy to share the rule group using AWS Resource Access Manager
 * 			(AWS RAM). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, PutFirewallRuleGroupPolicyCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new PutFirewallRuleGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutFirewallRuleGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutFirewallRuleGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutFirewallRuleGroupPolicyCommand extends $Command<PutFirewallRuleGroupPolicyCommandInput, PutFirewallRuleGroupPolicyCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: PutFirewallRuleGroupPolicyCommandInput;
    constructor(input: PutFirewallRuleGroupPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFirewallRuleGroupPolicyCommandInput, PutFirewallRuleGroupPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
