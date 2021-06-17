import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallDomainListsRequest, ListFirewallDomainListsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFirewallDomainListsCommandInput extends ListFirewallDomainListsRequest {
}
export interface ListFirewallDomainListsCommandOutput extends ListFirewallDomainListsResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p>
 *          <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainListsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainListsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListFirewallDomainListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFirewallDomainListsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainListsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFirewallDomainListsCommand extends $Command<ListFirewallDomainListsCommandInput, ListFirewallDomainListsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListFirewallDomainListsCommandInput;
    constructor(input: ListFirewallDomainListsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFirewallDomainListsCommandInput, ListFirewallDomainListsCommandOutput>;
    private serialize;
    private deserialize;
}
