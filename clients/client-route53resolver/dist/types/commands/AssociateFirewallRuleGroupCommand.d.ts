import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateFirewallRuleGroupRequest, AssociateFirewallRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateFirewallRuleGroupCommandInput extends AssociateFirewallRuleGroupRequest {
}
export interface AssociateFirewallRuleGroupCommandOutput extends AssociateFirewallRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, AssociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, AssociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new AssociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateFirewallRuleGroupCommand extends $Command<AssociateFirewallRuleGroupCommandInput, AssociateFirewallRuleGroupCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: AssociateFirewallRuleGroupCommandInput;
    constructor(input: AssociateFirewallRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateFirewallRuleGroupCommandInput, AssociateFirewallRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
