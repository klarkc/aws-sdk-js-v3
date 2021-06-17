import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallRuleGroupAssociationsRequest, ListFirewallRuleGroupAssociationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFirewallRuleGroupAssociationsCommandInput extends ListFirewallRuleGroupAssociationsRequest {
}
export interface ListFirewallRuleGroupAssociationsCommandOutput extends ListFirewallRuleGroupAssociationsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
 *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleGroupAssociationsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallRuleGroupAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallRuleGroupAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleGroupAssociationsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFirewallRuleGroupAssociationsCommand extends $Command<ListFirewallRuleGroupAssociationsCommandInput, ListFirewallRuleGroupAssociationsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListFirewallRuleGroupAssociationsCommandInput;
    constructor(input: ListFirewallRuleGroupAssociationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFirewallRuleGroupAssociationsCommandInput, ListFirewallRuleGroupAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
