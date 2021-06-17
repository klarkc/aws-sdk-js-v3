import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetFirewallRuleGroupAssociationRequest, GetFirewallRuleGroupAssociationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFirewallRuleGroupAssociationCommandInput extends GetFirewallRuleGroupAssociationRequest {
}
export interface GetFirewallRuleGroupAssociationCommandOutput extends GetFirewallRuleGroupAssociationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, GetFirewallRuleGroupAssociationCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new GetFirewallRuleGroupAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFirewallRuleGroupAssociationCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleGroupAssociationCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetFirewallRuleGroupAssociationCommand extends $Command<GetFirewallRuleGroupAssociationCommandInput, GetFirewallRuleGroupAssociationCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetFirewallRuleGroupAssociationCommandInput;
    constructor(input: GetFirewallRuleGroupAssociationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFirewallRuleGroupAssociationCommandInput, GetFirewallRuleGroupAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
