import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateFirewallRuleGroupRequest, DisassociateFirewallRuleGroupResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateFirewallRuleGroupCommandInput extends DisassociateFirewallRuleGroupRequest {
}
export interface DisassociateFirewallRuleGroupCommandOutput extends DisassociateFirewallRuleGroupResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, DisassociateFirewallRuleGroupCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new DisassociateFirewallRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFirewallRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateFirewallRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateFirewallRuleGroupCommand extends $Command<DisassociateFirewallRuleGroupCommandInput, DisassociateFirewallRuleGroupCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DisassociateFirewallRuleGroupCommandInput;
    constructor(input: DisassociateFirewallRuleGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateFirewallRuleGroupCommandInput, DisassociateFirewallRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
