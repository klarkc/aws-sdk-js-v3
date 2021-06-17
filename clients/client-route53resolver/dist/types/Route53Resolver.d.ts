import { Route53ResolverClient } from "./Route53ResolverClient";
import { AssociateFirewallRuleGroupCommandInput, AssociateFirewallRuleGroupCommandOutput } from "./commands/AssociateFirewallRuleGroupCommand";
import { AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput } from "./commands/AssociateResolverEndpointIpAddressCommand";
import { AssociateResolverQueryLogConfigCommandInput, AssociateResolverQueryLogConfigCommandOutput } from "./commands/AssociateResolverQueryLogConfigCommand";
import { AssociateResolverRuleCommandInput, AssociateResolverRuleCommandOutput } from "./commands/AssociateResolverRuleCommand";
import { CreateFirewallDomainListCommandInput, CreateFirewallDomainListCommandOutput } from "./commands/CreateFirewallDomainListCommand";
import { CreateFirewallRuleCommandInput, CreateFirewallRuleCommandOutput } from "./commands/CreateFirewallRuleCommand";
import { CreateFirewallRuleGroupCommandInput, CreateFirewallRuleGroupCommandOutput } from "./commands/CreateFirewallRuleGroupCommand";
import { CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput } from "./commands/CreateResolverEndpointCommand";
import { CreateResolverQueryLogConfigCommandInput, CreateResolverQueryLogConfigCommandOutput } from "./commands/CreateResolverQueryLogConfigCommand";
import { CreateResolverRuleCommandInput, CreateResolverRuleCommandOutput } from "./commands/CreateResolverRuleCommand";
import { DeleteFirewallDomainListCommandInput, DeleteFirewallDomainListCommandOutput } from "./commands/DeleteFirewallDomainListCommand";
import { DeleteFirewallRuleCommandInput, DeleteFirewallRuleCommandOutput } from "./commands/DeleteFirewallRuleCommand";
import { DeleteFirewallRuleGroupCommandInput, DeleteFirewallRuleGroupCommandOutput } from "./commands/DeleteFirewallRuleGroupCommand";
import { DeleteResolverEndpointCommandInput, DeleteResolverEndpointCommandOutput } from "./commands/DeleteResolverEndpointCommand";
import { DeleteResolverQueryLogConfigCommandInput, DeleteResolverQueryLogConfigCommandOutput } from "./commands/DeleteResolverQueryLogConfigCommand";
import { DeleteResolverRuleCommandInput, DeleteResolverRuleCommandOutput } from "./commands/DeleteResolverRuleCommand";
import { DisassociateFirewallRuleGroupCommandInput, DisassociateFirewallRuleGroupCommandOutput } from "./commands/DisassociateFirewallRuleGroupCommand";
import { DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput } from "./commands/DisassociateResolverEndpointIpAddressCommand";
import { DisassociateResolverQueryLogConfigCommandInput, DisassociateResolverQueryLogConfigCommandOutput } from "./commands/DisassociateResolverQueryLogConfigCommand";
import { DisassociateResolverRuleCommandInput, DisassociateResolverRuleCommandOutput } from "./commands/DisassociateResolverRuleCommand";
import { GetFirewallConfigCommandInput, GetFirewallConfigCommandOutput } from "./commands/GetFirewallConfigCommand";
import { GetFirewallDomainListCommandInput, GetFirewallDomainListCommandOutput } from "./commands/GetFirewallDomainListCommand";
import { GetFirewallRuleGroupAssociationCommandInput, GetFirewallRuleGroupAssociationCommandOutput } from "./commands/GetFirewallRuleGroupAssociationCommand";
import { GetFirewallRuleGroupCommandInput, GetFirewallRuleGroupCommandOutput } from "./commands/GetFirewallRuleGroupCommand";
import { GetFirewallRuleGroupPolicyCommandInput, GetFirewallRuleGroupPolicyCommandOutput } from "./commands/GetFirewallRuleGroupPolicyCommand";
import { GetResolverDnssecConfigCommandInput, GetResolverDnssecConfigCommandOutput } from "./commands/GetResolverDnssecConfigCommand";
import { GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput } from "./commands/GetResolverEndpointCommand";
import { GetResolverQueryLogConfigAssociationCommandInput, GetResolverQueryLogConfigAssociationCommandOutput } from "./commands/GetResolverQueryLogConfigAssociationCommand";
import { GetResolverQueryLogConfigCommandInput, GetResolverQueryLogConfigCommandOutput } from "./commands/GetResolverQueryLogConfigCommand";
import { GetResolverQueryLogConfigPolicyCommandInput, GetResolverQueryLogConfigPolicyCommandOutput } from "./commands/GetResolverQueryLogConfigPolicyCommand";
import { GetResolverRuleAssociationCommandInput, GetResolverRuleAssociationCommandOutput } from "./commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommandInput, GetResolverRuleCommandOutput } from "./commands/GetResolverRuleCommand";
import { GetResolverRulePolicyCommandInput, GetResolverRulePolicyCommandOutput } from "./commands/GetResolverRulePolicyCommand";
import { ImportFirewallDomainsCommandInput, ImportFirewallDomainsCommandOutput } from "./commands/ImportFirewallDomainsCommand";
import { ListFirewallConfigsCommandInput, ListFirewallConfigsCommandOutput } from "./commands/ListFirewallConfigsCommand";
import { ListFirewallDomainListsCommandInput, ListFirewallDomainListsCommandOutput } from "./commands/ListFirewallDomainListsCommand";
import { ListFirewallDomainsCommandInput, ListFirewallDomainsCommandOutput } from "./commands/ListFirewallDomainsCommand";
import { ListFirewallRuleGroupAssociationsCommandInput, ListFirewallRuleGroupAssociationsCommandOutput } from "./commands/ListFirewallRuleGroupAssociationsCommand";
import { ListFirewallRuleGroupsCommandInput, ListFirewallRuleGroupsCommandOutput } from "./commands/ListFirewallRuleGroupsCommand";
import { ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput } from "./commands/ListFirewallRulesCommand";
import { ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput } from "./commands/ListResolverDnssecConfigsCommand";
import { ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput } from "./commands/ListResolverEndpointIpAddressesCommand";
import { ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput } from "./commands/ListResolverEndpointsCommand";
import { ListResolverQueryLogConfigAssociationsCommandInput, ListResolverQueryLogConfigAssociationsCommandOutput } from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import { ListResolverQueryLogConfigsCommandInput, ListResolverQueryLogConfigsCommandOutput } from "./commands/ListResolverQueryLogConfigsCommand";
import { ListResolverRuleAssociationsCommandInput, ListResolverRuleAssociationsCommandOutput } from "./commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommandInput, ListResolverRulesCommandOutput } from "./commands/ListResolverRulesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutFirewallRuleGroupPolicyCommandInput, PutFirewallRuleGroupPolicyCommandOutput } from "./commands/PutFirewallRuleGroupPolicyCommand";
import { PutResolverQueryLogConfigPolicyCommandInput, PutResolverQueryLogConfigPolicyCommandOutput } from "./commands/PutResolverQueryLogConfigPolicyCommand";
import { PutResolverRulePolicyCommandInput, PutResolverRulePolicyCommandOutput } from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFirewallConfigCommandInput, UpdateFirewallConfigCommandOutput } from "./commands/UpdateFirewallConfigCommand";
import { UpdateFirewallDomainsCommandInput, UpdateFirewallDomainsCommandOutput } from "./commands/UpdateFirewallDomainsCommand";
import { UpdateFirewallRuleCommandInput, UpdateFirewallRuleCommandOutput } from "./commands/UpdateFirewallRuleCommand";
import { UpdateFirewallRuleGroupAssociationCommandInput, UpdateFirewallRuleGroupAssociationCommandOutput } from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import { UpdateResolverDnssecConfigCommandInput, UpdateResolverDnssecConfigCommandOutput } from "./commands/UpdateResolverDnssecConfigCommand";
import { UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput } from "./commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommandInput, UpdateResolverRuleCommandOutput } from "./commands/UpdateResolverRuleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC
 * 			from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names
 * 			such as domain names for EC2 instances or Elastic Load Balancing load balancers.
 * 			Resolver performs recursive lookups against public name servers for all other domain
 * 			names.</p>
 *
 * 		       <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p>
 *
 * 		       <p>
 *             <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b>
 *          </p>
 *
 * 		       <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers
 * 			to easily resolve domain names for AWS resources such as EC2 instances or records in a Route 53 private hosted zone.
 * 			For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers
 * 			on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>
 *             <b>Conditionally forward queries from a VPC to resolvers on your network</b>
 *          </p>
 *
 * 		       <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network.
 * 			To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward
 * 			(such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to.
 * 			If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match
 * 			(acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver
 * 			Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p>
 *
 * 		       <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose
 * 			whether to forward queries from your VPCs to your network (outbound queries), from your
 * 			network to your VPCs (inbound queries), or both.</p>
 */
export declare class Route53Resolver extends Route53ResolverClient {
    /**
     * <p>Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. </p>
     */
    associateFirewallRuleGroup(args: AssociateFirewallRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<AssociateFirewallRuleGroupCommandOutput>;
    associateFirewallRuleGroup(args: AssociateFirewallRuleGroupCommandInput, cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void): void;
    associateFirewallRuleGroup(args: AssociateFirewallRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateFirewallRuleGroupCommandOutput) => void): void;
    /**
     * <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address,
     * 			submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p>
     * 		       <p>To remove an IP address from an endpoint, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>.
     * 		</p>
     */
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResolverEndpointIpAddressCommandOutput>;
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void): void;
    associateResolverEndpointIpAddress(args: AssociateResolverEndpointIpAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResolverEndpointIpAddressCommandOutput) => void): void;
    /**
     * <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs
     * 			that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code>
     * 			request for each VPC.</p>
     *
     * 		       <note>
     *             <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p>
     *          </note>
     *
     * 		       <p>To remove a VPC from a query logging configuration, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.
     * 			</p>
     */
    associateResolverQueryLogConfig(args: AssociateResolverQueryLogConfigCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResolverQueryLogConfigCommandOutput>;
    associateResolverQueryLogConfig(args: AssociateResolverQueryLogConfigCommandInput, cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void): void;
    associateResolverQueryLogConfig(args: AssociateResolverQueryLogConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResolverQueryLogConfigCommandOutput) => void): void;
    /**
     * <p>Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries
     * 			for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the
     * 			IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. </p>
     */
    associateResolverRule(args: AssociateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<AssociateResolverRuleCommandOutput>;
    associateResolverRule(args: AssociateResolverRuleCommandInput, cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void): void;
    associateResolverRule(args: AssociateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateResolverRuleCommandOutput) => void): void;
    /**
     * <p>Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. </p>
     */
    createFirewallDomainList(args: CreateFirewallDomainListCommandInput, options?: __HttpHandlerOptions): Promise<CreateFirewallDomainListCommandOutput>;
    createFirewallDomainList(args: CreateFirewallDomainListCommandInput, cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void): void;
    createFirewallDomainList(args: CreateFirewallDomainListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFirewallDomainListCommandOutput) => void): void;
    /**
     * <p>Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.</p>
     */
    createFirewallRule(args: CreateFirewallRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateFirewallRuleCommandOutput>;
    createFirewallRule(args: CreateFirewallRuleCommandInput, cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void): void;
    createFirewallRule(args: CreateFirewallRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFirewallRuleCommandOutput) => void): void;
    /**
     * <p>Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group
     *            by calling <a>CreateFirewallRule</a>. </p>
     */
    createFirewallRuleGroup(args: CreateFirewallRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateFirewallRuleGroupCommandOutput>;
    createFirewallRuleGroup(args: CreateFirewallRuleGroupCommandInput, cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void): void;
    createFirewallRuleGroup(args: CreateFirewallRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFirewallRuleGroupCommandOutput) => void): void;
    /**
     * <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p>
     * 		       <ul>
     *             <li>
     *                <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC
     * 				from your network.</p>
     *             </li>
     *             <li>
     *                <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC
     * 				to your network.</p>
     *             </li>
     *          </ul>
     */
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateResolverEndpointCommandOutput>;
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void): void;
    createResolverEndpoint(args: CreateResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs.
     * 			Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p>
     *
     * 		       <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p>
     *
     * 		       <p>You can optionally use AWS Resource Access Manager (AWS RAM) to share a query logging configuration with other AWS accounts. The other accounts
     * 			can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all
     * 			VPCs that are associated with the configuration.</p>
     */
    createResolverQueryLogConfig(args: CreateResolverQueryLogConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateResolverQueryLogConfigCommandOutput>;
    createResolverQueryLogConfig(args: CreateResolverQueryLogConfigCommandInput, cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void): void;
    createResolverQueryLogConfig(args: CreateResolverQueryLogConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResolverQueryLogConfigCommandOutput) => void): void;
    /**
     * <p>For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through,
     * 			one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.</p>
     */
    createResolverRule(args: CreateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateResolverRuleCommandOutput>;
    createResolverRule(args: CreateResolverRuleCommandInput, cb: (err: any, data?: CreateResolverRuleCommandOutput) => void): void;
    createResolverRule(args: CreateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResolverRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified domain list. </p>
     */
    deleteFirewallDomainList(args: DeleteFirewallDomainListCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFirewallDomainListCommandOutput>;
    deleteFirewallDomainList(args: DeleteFirewallDomainListCommandInput, cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void): void;
    deleteFirewallDomainList(args: DeleteFirewallDomainListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFirewallDomainListCommandOutput) => void): void;
    /**
     * <p>Deletes the specified firewall rule.</p>
     */
    deleteFirewallRule(args: DeleteFirewallRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFirewallRuleCommandOutput>;
    deleteFirewallRule(args: DeleteFirewallRuleCommandInput, cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void): void;
    deleteFirewallRule(args: DeleteFirewallRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFirewallRuleCommandOutput) => void): void;
    /**
     * <p>Deletes the specified firewall rule group. </p>
     */
    deleteFirewallRuleGroup(args: DeleteFirewallRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFirewallRuleGroupCommandOutput>;
    deleteFirewallRuleGroup(args: DeleteFirewallRuleGroupCommandInput, cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void): void;
    deleteFirewallRuleGroup(args: DeleteFirewallRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFirewallRuleGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound
     * 			Resolver endpoint:</p>
     * 		       <ul>
     *             <li>
     *                <p>
     *                   <b>Inbound</b>: DNS queries from your network are no longer routed
     * 				to the DNS service for the specified VPC.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p>
     *             </li>
     *          </ul>
     */
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResolverEndpointCommandOutput>;
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void): void;
    deleteResolverEndpoint(args: DeleteResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are
     * 			associated with the configuration. This also applies if the query logging configuration is shared with other AWS accounts, and
     * 			the other accounts have associated VPCs with the shared configuration.</p>
     *
     * 		       <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p>
     *
     * 		       <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing
     * 			the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs
     * 			that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically
     * 			disassociated from the configuration.</p>
     */
    deleteResolverQueryLogConfig(args: DeleteResolverQueryLogConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResolverQueryLogConfigCommandOutput>;
    deleteResolverQueryLogConfig(args: DeleteResolverQueryLogConfigCommandInput, cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void): void;
    deleteResolverQueryLogConfig(args: DeleteResolverQueryLogConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResolverQueryLogConfigCommandOutput) => void): void;
    /**
     * <p>Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you
     * 			associated the Resolver rule with. For more information, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.</p>
     */
    deleteResolverRule(args: DeleteResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteResolverRuleCommandOutput>;
    deleteResolverRule(args: DeleteResolverRuleCommandInput, cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void): void;
    deleteResolverRule(args: DeleteResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteResolverRuleCommandOutput) => void): void;
    /**
     * <p>Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. </p>
     */
    disassociateFirewallRuleGroup(args: DisassociateFirewallRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateFirewallRuleGroupCommandOutput>;
    disassociateFirewallRuleGroup(args: DisassociateFirewallRuleGroupCommandInput, cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void): void;
    disassociateFirewallRuleGroup(args: DisassociateFirewallRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateFirewallRuleGroupCommandOutput) => void): void;
    /**
     * <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address,
     * 			submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p>
     * 		       <p>To add an IP address to an endpoint, see
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>.
     * 		</p>
     */
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResolverEndpointIpAddressCommandOutput>;
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void): void;
    disassociateResolverEndpointIpAddress(args: DisassociateResolverEndpointIpAddressCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResolverEndpointIpAddressCommandOutput) => void): void;
    /**
     * <p>Disassociates a VPC from a query logging configuration.</p>
     *
     * 		       <note>
     * 			         <p>Before you can delete a query logging configuration, you must first disassociate all VPCs
     * 				from the configuration. If you used AWS Resource Access Manager (AWS RAM) to share a
     * 				query logging configuration with other accounts, VPCs can be disassociated from the
     * 				configuration in the following ways:</p>
     * 			         <ul>
     *                <li>
     *                   <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p>
     *                </li>
     *                <li>
     *                   <p>You can stop sharing the configuration.</p>
     *                </li>
     *             </ul>
     * 		       </note>
     */
    disassociateResolverQueryLogConfig(args: DisassociateResolverQueryLogConfigCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResolverQueryLogConfigCommandOutput>;
    disassociateResolverQueryLogConfig(args: DisassociateResolverQueryLogConfigCommandInput, cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void): void;
    disassociateResolverQueryLogConfig(args: DisassociateResolverQueryLogConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResolverQueryLogConfigCommandOutput) => void): void;
    /**
     * <p>Removes the association between a specified Resolver rule and a specified VPC.</p>
     * 		       <important>
     * 			         <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the
     * 				domain name that you specified in the Resolver rule. </p>
     * 		       </important>
     */
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateResolverRuleCommandOutput>;
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void): void;
    disassociateResolverRule(args: DisassociateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateResolverRuleCommandOutput) => void): void;
    /**
     * <p>Retrieves the configuration of the firewall behavior provided by DNS Firewall for a
     * 			single VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
     */
    getFirewallConfig(args: GetFirewallConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetFirewallConfigCommandOutput>;
    getFirewallConfig(args: GetFirewallConfigCommandInput, cb: (err: any, data?: GetFirewallConfigCommandOutput) => void): void;
    getFirewallConfig(args: GetFirewallConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFirewallConfigCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified firewall domain list.</p>
     */
    getFirewallDomainList(args: GetFirewallDomainListCommandInput, options?: __HttpHandlerOptions): Promise<GetFirewallDomainListCommandOutput>;
    getFirewallDomainList(args: GetFirewallDomainListCommandInput, cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void): void;
    getFirewallDomainList(args: GetFirewallDomainListCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFirewallDomainListCommandOutput) => void): void;
    /**
     * <p>Retrieves the specified firewall rule group. </p>
     */
    getFirewallRuleGroup(args: GetFirewallRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetFirewallRuleGroupCommandOutput>;
    getFirewallRuleGroup(args: GetFirewallRuleGroupCommandInput, cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void): void;
    getFirewallRuleGroup(args: GetFirewallRuleGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFirewallRuleGroupCommandOutput) => void): void;
    /**
     * <p>Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.</p>
     */
    getFirewallRuleGroupAssociation(args: GetFirewallRuleGroupAssociationCommandInput, options?: __HttpHandlerOptions): Promise<GetFirewallRuleGroupAssociationCommandOutput>;
    getFirewallRuleGroupAssociation(args: GetFirewallRuleGroupAssociationCommandInput, cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void): void;
    getFirewallRuleGroupAssociation(args: GetFirewallRuleGroupAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFirewallRuleGroupAssociationCommandOutput) => void): void;
    /**
     * <p>Returns the AWS Identity and Access Management (AWS IAM) policy for sharing the
     * 			specified rule group. You can use the policy to share the rule group using AWS Resource
     * 			Access Manager (AWS RAM). </p>
     */
    getFirewallRuleGroupPolicy(args: GetFirewallRuleGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetFirewallRuleGroupPolicyCommandOutput>;
    getFirewallRuleGroupPolicy(args: GetFirewallRuleGroupPolicyCommandInput, cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void): void;
    getFirewallRuleGroupPolicy(args: GetFirewallRuleGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFirewallRuleGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Gets DNSSEC validation information for a specified resource.</p>
     */
    getResolverDnssecConfig(args: GetResolverDnssecConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverDnssecConfigCommandOutput>;
    getResolverDnssecConfig(args: GetResolverDnssecConfigCommandInput, cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void): void;
    getResolverDnssecConfig(args: GetResolverDnssecConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverDnssecConfigCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the
     * 			current status of the endpoint.</p>
     */
    getResolverEndpoint(args: GetResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverEndpointCommandOutput>;
    getResolverEndpoint(args: GetResolverEndpointCommandInput, cb: (err: any, data?: GetResolverEndpointCommandOutput) => void): void;
    getResolverEndpoint(args: GetResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration
     * 			is logging queries for and the location that logs are sent to. </p>
     */
    getResolverQueryLogConfig(args: GetResolverQueryLogConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverQueryLogConfigCommandOutput>;
    getResolverQueryLogConfig(args: GetResolverQueryLogConfigCommandInput, cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void): void;
    getResolverQueryLogConfig(args: GetResolverQueryLogConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverQueryLogConfigCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC
     * 			with a query logging configuration, Resolver logs DNS queries that originate in that VPC.</p>
     */
    getResolverQueryLogConfigAssociation(args: GetResolverQueryLogConfigAssociationCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverQueryLogConfigAssociationCommandOutput>;
    getResolverQueryLogConfigAssociation(args: GetResolverQueryLogConfigAssociationCommandInput, cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void): void;
    getResolverQueryLogConfigAssociation(args: GetResolverQueryLogConfigAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverQueryLogConfigAssociationCommandOutput) => void): void;
    /**
     * <p>Gets information about a query logging policy. A query logging policy specifies the Resolver query logging
     * 			operations and resources that you want to allow another AWS account to be able to use.</p>
     */
    getResolverQueryLogConfigPolicy(args: GetResolverQueryLogConfigPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverQueryLogConfigPolicyCommandOutput>;
    getResolverQueryLogConfigPolicy(args: GetResolverQueryLogConfigPolicyCommandInput, cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void): void;
    getResolverQueryLogConfigPolicy(args: GetResolverQueryLogConfigPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverQueryLogConfigPolicyCommandOutput) => void): void;
    /**
     * <p>Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the
     * 			outbound Resolver endpoint that the rule is associated with.</p>
     */
    getResolverRule(args: GetResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRuleCommandOutput>;
    getResolverRule(args: GetResolverRuleCommandInput, cb: (err: any, data?: GetResolverRuleCommandOutput) => void): void;
    getResolverRule(args: GetResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRuleCommandOutput) => void): void;
    /**
     * <p>Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using
     * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. </p>
     */
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRuleAssociationCommandOutput>;
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void): void;
    getResolverRuleAssociation(args: GetResolverRuleAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRuleAssociationCommandOutput) => void): void;
    /**
     * <p>Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share
     * 			with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. </p>
     */
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverRulePolicyCommandOutput>;
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void): void;
    getResolverRulePolicy(args: GetResolverRulePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResolverRulePolicyCommandOutput) => void): void;
    /**
     * <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p>
     *          <p>Each domain specification in your domain list must satisfy the following
     * 	requirements: </p>
     *          <ul>
     *             <li>
     *       	        <p>It can optionally start with <code>*</code> (asterisk).</p>
     *       	     </li>
     *             <li>
     *       	        <p>With the exception of the optional starting asterisk, it must only contain
     *       	   the following characters: <code>A-Z</code>, <code>a-z</code>,
     *       	   <code>0-9</code>, <code>-</code> (hyphen).</p>
     *       	     </li>
     *             <li>
     *       	        <p>It must be from 1-255 characters in length. </p>
     *       	     </li>
     *          </ul>
     */
    importFirewallDomains(args: ImportFirewallDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ImportFirewallDomainsCommandOutput>;
    importFirewallDomains(args: ImportFirewallDomainsCommandInput, cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void): void;
    importFirewallDomains(args: ImportFirewallDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ImportFirewallDomainsCommandOutput) => void): void;
    /**
     * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p>
     *          <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallConfigs(args: ListFirewallConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallConfigsCommandOutput>;
    listFirewallConfigs(args: ListFirewallConfigsCommandInput, cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void): void;
    listFirewallConfigs(args: ListFirewallConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallConfigsCommandOutput) => void): void;
    /**
     * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p>
     *          <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallDomainLists(args: ListFirewallDomainListsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallDomainListsCommandOutput>;
    listFirewallDomainLists(args: ListFirewallDomainListsCommandInput, cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void): void;
    listFirewallDomainLists(args: ListFirewallDomainListsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallDomainListsCommandOutput) => void): void;
    /**
     * <p>Retrieves the domains that you have defined for the specified firewall domain list.  </p>
     *          <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallDomains(args: ListFirewallDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallDomainsCommandOutput>;
    listFirewallDomains(args: ListFirewallDomainsCommandInput, cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void): void;
    listFirewallDomains(args: ListFirewallDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallDomainsCommandOutput) => void): void;
    /**
     * <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p>
     *          <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallRuleGroupAssociations(args: ListFirewallRuleGroupAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallRuleGroupAssociationsCommandOutput>;
    listFirewallRuleGroupAssociations(args: ListFirewallRuleGroupAssociationsCommandInput, cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void): void;
    listFirewallRuleGroupAssociations(args: ListFirewallRuleGroupAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallRuleGroupAssociationsCommandOutput) => void): void;
    /**
     * <p>Retrieves the minimal high-level information for the rule groups that you have defined.  </p>
     *          <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallRuleGroups(args: ListFirewallRuleGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallRuleGroupsCommandOutput>;
    listFirewallRuleGroups(args: ListFirewallRuleGroupsCommandInput, cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void): void;
    listFirewallRuleGroups(args: ListFirewallRuleGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallRuleGroupsCommandOutput) => void): void;
    /**
     * <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p>
     *          <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
     */
    listFirewallRules(args: ListFirewallRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListFirewallRulesCommandOutput>;
    listFirewallRules(args: ListFirewallRulesCommandInput, cb: (err: any, data?: ListFirewallRulesCommandOutput) => void): void;
    listFirewallRules(args: ListFirewallRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFirewallRulesCommandOutput) => void): void;
    /**
     * <p>Lists the configurations for DNSSEC validation that are associated with the current AWS account.</p>
     */
    listResolverDnssecConfigs(args: ListResolverDnssecConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverDnssecConfigsCommandOutput>;
    listResolverDnssecConfigs(args: ListResolverDnssecConfigsCommandInput, cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void): void;
    listResolverDnssecConfigs(args: ListResolverDnssecConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverDnssecConfigsCommandOutput) => void): void;
    /**
     * <p>Gets the IP addresses for a specified Resolver endpoint.</p>
     */
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverEndpointIpAddressesCommandOutput>;
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void): void;
    listResolverEndpointIpAddresses(args: ListResolverEndpointIpAddressesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverEndpointIpAddressesCommandOutput) => void): void;
    /**
     * <p>Lists all the Resolver endpoints that were created using the current AWS account.</p>
     */
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverEndpointsCommandOutput>;
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void): void;
    listResolverEndpoints(args: ListResolverEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists information about associations between Amazon VPCs and query logging configurations.</p>
     */
    listResolverQueryLogConfigAssociations(args: ListResolverQueryLogConfigAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverQueryLogConfigAssociationsCommandOutput>;
    listResolverQueryLogConfigAssociations(args: ListResolverQueryLogConfigAssociationsCommandInput, cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void): void;
    listResolverQueryLogConfigAssociations(args: ListResolverQueryLogConfigAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverQueryLogConfigAssociationsCommandOutput) => void): void;
    /**
     * <p>Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save
     * 			DNS query logs and specifies the VPCs that you want to log queries for.</p>
     */
    listResolverQueryLogConfigs(args: ListResolverQueryLogConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverQueryLogConfigsCommandOutput>;
    listResolverQueryLogConfigs(args: ListResolverQueryLogConfigsCommandInput, cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void): void;
    listResolverQueryLogConfigs(args: ListResolverQueryLogConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverQueryLogConfigsCommandOutput) => void): void;
    /**
     * <p>Lists the associations that were created between Resolver rules and VPCs using the current AWS account.</p>
     */
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverRuleAssociationsCommandOutput>;
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void): void;
    listResolverRuleAssociations(args: ListResolverRuleAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverRuleAssociationsCommandOutput) => void): void;
    /**
     * <p>Lists the Resolver rules that were created using the current AWS account.</p>
     */
    listResolverRules(args: ListResolverRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListResolverRulesCommandOutput>;
    listResolverRules(args: ListResolverRulesCommandInput, cb: (err: any, data?: ListResolverRulesCommandOutput) => void): void;
    listResolverRules(args: ListResolverRulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResolverRulesCommandOutput) => void): void;
    /**
     * <p>Lists the tags that you associated with the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Attaches an AWS Identity and Access Management (AWS IAM) policy for sharing the rule
     * 			group. You can use the policy to share the rule group using AWS Resource Access Manager
     * 			(AWS RAM). </p>
     */
    putFirewallRuleGroupPolicy(args: PutFirewallRuleGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutFirewallRuleGroupPolicyCommandOutput>;
    putFirewallRuleGroupPolicy(args: PutFirewallRuleGroupPolicyCommandInput, cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void): void;
    putFirewallRuleGroupPolicy(args: PutFirewallRuleGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFirewallRuleGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Specifies an AWS account that you want to share a query logging configuration with, the query logging configuration that you want to share,
     * 			and the operations that you want the account to be able to perform on the configuration.</p>
     */
    putResolverQueryLogConfigPolicy(args: PutResolverQueryLogConfigPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResolverQueryLogConfigPolicyCommandOutput>;
    putResolverQueryLogConfigPolicy(args: PutResolverQueryLogConfigPolicyCommandInput, cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void): void;
    putResolverQueryLogConfigPolicy(args: PutResolverQueryLogConfigPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResolverQueryLogConfigPolicyCommandOutput) => void): void;
    /**
     * <p>Specifies an AWS rule that you want to share with another account, the account that you want to share the rule with,
     * 			and the operations that you want the account to be able to perform on the rule.</p>
     */
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutResolverRulePolicyCommandOutput>;
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void): void;
    putResolverRulePolicy(args: PutResolverRulePolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutResolverRulePolicyCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to a specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from a specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the configuration of the firewall behavior provided by DNS Firewall for a single
     * 			VPC from Amazon Virtual Private Cloud (Amazon VPC). </p>
     */
    updateFirewallConfig(args: UpdateFirewallConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallConfigCommandOutput>;
    updateFirewallConfig(args: UpdateFirewallConfigCommandInput, cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void): void;
    updateFirewallConfig(args: UpdateFirewallConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallConfigCommandOutput) => void): void;
    /**
     * <p>Updates the firewall domain list from an array of domain specifications. </p>
     */
    updateFirewallDomains(args: UpdateFirewallDomainsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallDomainsCommandOutput>;
    updateFirewallDomains(args: UpdateFirewallDomainsCommandInput, cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void): void;
    updateFirewallDomains(args: UpdateFirewallDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallDomainsCommandOutput) => void): void;
    /**
     * <p>Updates the specified firewall rule. </p>
     */
    updateFirewallRule(args: UpdateFirewallRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallRuleCommandOutput>;
    updateFirewallRule(args: UpdateFirewallRuleCommandInput, cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void): void;
    updateFirewallRule(args: UpdateFirewallRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallRuleCommandOutput) => void): void;
    /**
     * <p>Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. </p>
     */
    updateFirewallRuleGroupAssociation(args: UpdateFirewallRuleGroupAssociationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFirewallRuleGroupAssociationCommandOutput>;
    updateFirewallRuleGroupAssociation(args: UpdateFirewallRuleGroupAssociationCommandInput, cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void): void;
    updateFirewallRuleGroupAssociation(args: UpdateFirewallRuleGroupAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFirewallRuleGroupAssociationCommandOutput) => void): void;
    /**
     * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
     */
    updateResolverDnssecConfig(args: UpdateResolverDnssecConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResolverDnssecConfigCommandOutput>;
    updateResolverDnssecConfig(args: UpdateResolverDnssecConfigCommandInput, cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void): void;
    updateResolverDnssecConfig(args: UpdateResolverDnssecConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResolverDnssecConfigCommandOutput) => void): void;
    /**
     * <p>Updates the name of an inbound or an outbound Resolver endpoint.  </p>
     */
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResolverEndpointCommandOutput>;
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void): void;
    updateResolverEndpoint(args: UpdateResolverEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResolverEndpointCommandOutput) => void): void;
    /**
     * <p>Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional.
     * 			If you don't specify a parameter, it retains its current value.</p>
     */
    updateResolverRule(args: UpdateResolverRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResolverRuleCommandOutput>;
    updateResolverRule(args: UpdateResolverRuleCommandInput, cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void): void;
    updateResolverRule(args: UpdateResolverRuleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResolverRuleCommandOutput) => void): void;
}
