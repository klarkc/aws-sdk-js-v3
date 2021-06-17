import { __extends } from "tslib";
import { Route53ResolverClient } from "./Route53ResolverClient";
import { AssociateFirewallRuleGroupCommand, } from "./commands/AssociateFirewallRuleGroupCommand";
import { AssociateResolverEndpointIpAddressCommand, } from "./commands/AssociateResolverEndpointIpAddressCommand";
import { AssociateResolverQueryLogConfigCommand, } from "./commands/AssociateResolverQueryLogConfigCommand";
import { AssociateResolverRuleCommand, } from "./commands/AssociateResolverRuleCommand";
import { CreateFirewallDomainListCommand, } from "./commands/CreateFirewallDomainListCommand";
import { CreateFirewallRuleCommand, } from "./commands/CreateFirewallRuleCommand";
import { CreateFirewallRuleGroupCommand, } from "./commands/CreateFirewallRuleGroupCommand";
import { CreateResolverEndpointCommand, } from "./commands/CreateResolverEndpointCommand";
import { CreateResolverQueryLogConfigCommand, } from "./commands/CreateResolverQueryLogConfigCommand";
import { CreateResolverRuleCommand, } from "./commands/CreateResolverRuleCommand";
import { DeleteFirewallDomainListCommand, } from "./commands/DeleteFirewallDomainListCommand";
import { DeleteFirewallRuleCommand, } from "./commands/DeleteFirewallRuleCommand";
import { DeleteFirewallRuleGroupCommand, } from "./commands/DeleteFirewallRuleGroupCommand";
import { DeleteResolverEndpointCommand, } from "./commands/DeleteResolverEndpointCommand";
import { DeleteResolverQueryLogConfigCommand, } from "./commands/DeleteResolverQueryLogConfigCommand";
import { DeleteResolverRuleCommand, } from "./commands/DeleteResolverRuleCommand";
import { DisassociateFirewallRuleGroupCommand, } from "./commands/DisassociateFirewallRuleGroupCommand";
import { DisassociateResolverEndpointIpAddressCommand, } from "./commands/DisassociateResolverEndpointIpAddressCommand";
import { DisassociateResolverQueryLogConfigCommand, } from "./commands/DisassociateResolverQueryLogConfigCommand";
import { DisassociateResolverRuleCommand, } from "./commands/DisassociateResolverRuleCommand";
import { GetFirewallConfigCommand, } from "./commands/GetFirewallConfigCommand";
import { GetFirewallDomainListCommand, } from "./commands/GetFirewallDomainListCommand";
import { GetFirewallRuleGroupAssociationCommand, } from "./commands/GetFirewallRuleGroupAssociationCommand";
import { GetFirewallRuleGroupCommand, } from "./commands/GetFirewallRuleGroupCommand";
import { GetFirewallRuleGroupPolicyCommand, } from "./commands/GetFirewallRuleGroupPolicyCommand";
import { GetResolverDnssecConfigCommand, } from "./commands/GetResolverDnssecConfigCommand";
import { GetResolverEndpointCommand, } from "./commands/GetResolverEndpointCommand";
import { GetResolverQueryLogConfigAssociationCommand, } from "./commands/GetResolverQueryLogConfigAssociationCommand";
import { GetResolverQueryLogConfigCommand, } from "./commands/GetResolverQueryLogConfigCommand";
import { GetResolverQueryLogConfigPolicyCommand, } from "./commands/GetResolverQueryLogConfigPolicyCommand";
import { GetResolverRuleAssociationCommand, } from "./commands/GetResolverRuleAssociationCommand";
import { GetResolverRuleCommand, } from "./commands/GetResolverRuleCommand";
import { GetResolverRulePolicyCommand, } from "./commands/GetResolverRulePolicyCommand";
import { ImportFirewallDomainsCommand, } from "./commands/ImportFirewallDomainsCommand";
import { ListFirewallConfigsCommand, } from "./commands/ListFirewallConfigsCommand";
import { ListFirewallDomainListsCommand, } from "./commands/ListFirewallDomainListsCommand";
import { ListFirewallDomainsCommand, } from "./commands/ListFirewallDomainsCommand";
import { ListFirewallRuleGroupAssociationsCommand, } from "./commands/ListFirewallRuleGroupAssociationsCommand";
import { ListFirewallRuleGroupsCommand, } from "./commands/ListFirewallRuleGroupsCommand";
import { ListFirewallRulesCommand, } from "./commands/ListFirewallRulesCommand";
import { ListResolverDnssecConfigsCommand, } from "./commands/ListResolverDnssecConfigsCommand";
import { ListResolverEndpointIpAddressesCommand, } from "./commands/ListResolverEndpointIpAddressesCommand";
import { ListResolverEndpointsCommand, } from "./commands/ListResolverEndpointsCommand";
import { ListResolverQueryLogConfigAssociationsCommand, } from "./commands/ListResolverQueryLogConfigAssociationsCommand";
import { ListResolverQueryLogConfigsCommand, } from "./commands/ListResolverQueryLogConfigsCommand";
import { ListResolverRuleAssociationsCommand, } from "./commands/ListResolverRuleAssociationsCommand";
import { ListResolverRulesCommand, } from "./commands/ListResolverRulesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { PutFirewallRuleGroupPolicyCommand, } from "./commands/PutFirewallRuleGroupPolicyCommand";
import { PutResolverQueryLogConfigPolicyCommand, } from "./commands/PutResolverQueryLogConfigPolicyCommand";
import { PutResolverRulePolicyCommand, } from "./commands/PutResolverRulePolicyCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateFirewallConfigCommand, } from "./commands/UpdateFirewallConfigCommand";
import { UpdateFirewallDomainsCommand, } from "./commands/UpdateFirewallDomainsCommand";
import { UpdateFirewallRuleCommand, } from "./commands/UpdateFirewallRuleCommand";
import { UpdateFirewallRuleGroupAssociationCommand, } from "./commands/UpdateFirewallRuleGroupAssociationCommand";
import { UpdateResolverDnssecConfigCommand, } from "./commands/UpdateResolverDnssecConfigCommand";
import { UpdateResolverEndpointCommand, } from "./commands/UpdateResolverEndpointCommand";
import { UpdateResolverRuleCommand, } from "./commands/UpdateResolverRuleCommand";
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
var Route53Resolver = /** @class */ (function (_super) {
    __extends(Route53Resolver, _super);
    function Route53Resolver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Route53Resolver.prototype.associateFirewallRuleGroup = function (args, optionsOrCb, cb) {
        var command = new AssociateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.associateResolverEndpointIpAddress = function (args, optionsOrCb, cb) {
        var command = new AssociateResolverEndpointIpAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.associateResolverQueryLogConfig = function (args, optionsOrCb, cb) {
        var command = new AssociateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.associateResolverRule = function (args, optionsOrCb, cb) {
        var command = new AssociateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createFirewallDomainList = function (args, optionsOrCb, cb) {
        var command = new CreateFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createFirewallRule = function (args, optionsOrCb, cb) {
        var command = new CreateFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createFirewallRuleGroup = function (args, optionsOrCb, cb) {
        var command = new CreateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createResolverEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createResolverQueryLogConfig = function (args, optionsOrCb, cb) {
        var command = new CreateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.createResolverRule = function (args, optionsOrCb, cb) {
        var command = new CreateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteFirewallDomainList = function (args, optionsOrCb, cb) {
        var command = new DeleteFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteFirewallRule = function (args, optionsOrCb, cb) {
        var command = new DeleteFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteFirewallRuleGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteResolverEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteResolverQueryLogConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.deleteResolverRule = function (args, optionsOrCb, cb) {
        var command = new DeleteResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.disassociateFirewallRuleGroup = function (args, optionsOrCb, cb) {
        var command = new DisassociateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.disassociateResolverEndpointIpAddress = function (args, optionsOrCb, cb) {
        var command = new DisassociateResolverEndpointIpAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.disassociateResolverQueryLogConfig = function (args, optionsOrCb, cb) {
        var command = new DisassociateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.disassociateResolverRule = function (args, optionsOrCb, cb) {
        var command = new DisassociateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getFirewallConfig = function (args, optionsOrCb, cb) {
        var command = new GetFirewallConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getFirewallDomainList = function (args, optionsOrCb, cb) {
        var command = new GetFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getFirewallRuleGroup = function (args, optionsOrCb, cb) {
        var command = new GetFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getFirewallRuleGroupAssociation = function (args, optionsOrCb, cb) {
        var command = new GetFirewallRuleGroupAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getFirewallRuleGroupPolicy = function (args, optionsOrCb, cb) {
        var command = new GetFirewallRuleGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverDnssecConfig = function (args, optionsOrCb, cb) {
        var command = new GetResolverDnssecConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverEndpoint = function (args, optionsOrCb, cb) {
        var command = new GetResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverQueryLogConfig = function (args, optionsOrCb, cb) {
        var command = new GetResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverQueryLogConfigAssociation = function (args, optionsOrCb, cb) {
        var command = new GetResolverQueryLogConfigAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverQueryLogConfigPolicy = function (args, optionsOrCb, cb) {
        var command = new GetResolverQueryLogConfigPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverRule = function (args, optionsOrCb, cb) {
        var command = new GetResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverRuleAssociation = function (args, optionsOrCb, cb) {
        var command = new GetResolverRuleAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.getResolverRulePolicy = function (args, optionsOrCb, cb) {
        var command = new GetResolverRulePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.importFirewallDomains = function (args, optionsOrCb, cb) {
        var command = new ImportFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallConfigs = function (args, optionsOrCb, cb) {
        var command = new ListFirewallConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallDomainLists = function (args, optionsOrCb, cb) {
        var command = new ListFirewallDomainListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallDomains = function (args, optionsOrCb, cb) {
        var command = new ListFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallRuleGroupAssociations = function (args, optionsOrCb, cb) {
        var command = new ListFirewallRuleGroupAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallRuleGroups = function (args, optionsOrCb, cb) {
        var command = new ListFirewallRuleGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listFirewallRules = function (args, optionsOrCb, cb) {
        var command = new ListFirewallRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverDnssecConfigs = function (args, optionsOrCb, cb) {
        var command = new ListResolverDnssecConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverEndpointIpAddresses = function (args, optionsOrCb, cb) {
        var command = new ListResolverEndpointIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverEndpoints = function (args, optionsOrCb, cb) {
        var command = new ListResolverEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverQueryLogConfigAssociations = function (args, optionsOrCb, cb) {
        var command = new ListResolverQueryLogConfigAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverQueryLogConfigs = function (args, optionsOrCb, cb) {
        var command = new ListResolverQueryLogConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverRuleAssociations = function (args, optionsOrCb, cb) {
        var command = new ListResolverRuleAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listResolverRules = function (args, optionsOrCb, cb) {
        var command = new ListResolverRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
        var command = new ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.putFirewallRuleGroupPolicy = function (args, optionsOrCb, cb) {
        var command = new PutFirewallRuleGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.putResolverQueryLogConfigPolicy = function (args, optionsOrCb, cb) {
        var command = new PutResolverQueryLogConfigPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.putResolverRulePolicy = function (args, optionsOrCb, cb) {
        var command = new PutResolverRulePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.tagResource = function (args, optionsOrCb, cb) {
        var command = new TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.untagResource = function (args, optionsOrCb, cb) {
        var command = new UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateFirewallConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateFirewallConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateFirewallDomains = function (args, optionsOrCb, cb) {
        var command = new UpdateFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateFirewallRule = function (args, optionsOrCb, cb) {
        var command = new UpdateFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateFirewallRuleGroupAssociation = function (args, optionsOrCb, cb) {
        var command = new UpdateFirewallRuleGroupAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateResolverDnssecConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateResolverDnssecConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateResolverEndpoint = function (args, optionsOrCb, cb) {
        var command = new UpdateResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    Route53Resolver.prototype.updateResolverRule = function (args, optionsOrCb, cb) {
        var command = new UpdateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return Route53Resolver;
}(Route53ResolverClient));
export { Route53Resolver };
//# sourceMappingURL=Route53Resolver.js.map