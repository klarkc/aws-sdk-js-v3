"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route53Resolver = void 0;
const Route53ResolverClient_1 = require("./Route53ResolverClient");
const AssociateFirewallRuleGroupCommand_1 = require("./commands/AssociateFirewallRuleGroupCommand");
const AssociateResolverEndpointIpAddressCommand_1 = require("./commands/AssociateResolverEndpointIpAddressCommand");
const AssociateResolverQueryLogConfigCommand_1 = require("./commands/AssociateResolverQueryLogConfigCommand");
const AssociateResolverRuleCommand_1 = require("./commands/AssociateResolverRuleCommand");
const CreateFirewallDomainListCommand_1 = require("./commands/CreateFirewallDomainListCommand");
const CreateFirewallRuleCommand_1 = require("./commands/CreateFirewallRuleCommand");
const CreateFirewallRuleGroupCommand_1 = require("./commands/CreateFirewallRuleGroupCommand");
const CreateResolverEndpointCommand_1 = require("./commands/CreateResolverEndpointCommand");
const CreateResolverQueryLogConfigCommand_1 = require("./commands/CreateResolverQueryLogConfigCommand");
const CreateResolverRuleCommand_1 = require("./commands/CreateResolverRuleCommand");
const DeleteFirewallDomainListCommand_1 = require("./commands/DeleteFirewallDomainListCommand");
const DeleteFirewallRuleCommand_1 = require("./commands/DeleteFirewallRuleCommand");
const DeleteFirewallRuleGroupCommand_1 = require("./commands/DeleteFirewallRuleGroupCommand");
const DeleteResolverEndpointCommand_1 = require("./commands/DeleteResolverEndpointCommand");
const DeleteResolverQueryLogConfigCommand_1 = require("./commands/DeleteResolverQueryLogConfigCommand");
const DeleteResolverRuleCommand_1 = require("./commands/DeleteResolverRuleCommand");
const DisassociateFirewallRuleGroupCommand_1 = require("./commands/DisassociateFirewallRuleGroupCommand");
const DisassociateResolverEndpointIpAddressCommand_1 = require("./commands/DisassociateResolverEndpointIpAddressCommand");
const DisassociateResolverQueryLogConfigCommand_1 = require("./commands/DisassociateResolverQueryLogConfigCommand");
const DisassociateResolverRuleCommand_1 = require("./commands/DisassociateResolverRuleCommand");
const GetFirewallConfigCommand_1 = require("./commands/GetFirewallConfigCommand");
const GetFirewallDomainListCommand_1 = require("./commands/GetFirewallDomainListCommand");
const GetFirewallRuleGroupAssociationCommand_1 = require("./commands/GetFirewallRuleGroupAssociationCommand");
const GetFirewallRuleGroupCommand_1 = require("./commands/GetFirewallRuleGroupCommand");
const GetFirewallRuleGroupPolicyCommand_1 = require("./commands/GetFirewallRuleGroupPolicyCommand");
const GetResolverDnssecConfigCommand_1 = require("./commands/GetResolverDnssecConfigCommand");
const GetResolverEndpointCommand_1 = require("./commands/GetResolverEndpointCommand");
const GetResolverQueryLogConfigAssociationCommand_1 = require("./commands/GetResolverQueryLogConfigAssociationCommand");
const GetResolverQueryLogConfigCommand_1 = require("./commands/GetResolverQueryLogConfigCommand");
const GetResolverQueryLogConfigPolicyCommand_1 = require("./commands/GetResolverQueryLogConfigPolicyCommand");
const GetResolverRuleAssociationCommand_1 = require("./commands/GetResolverRuleAssociationCommand");
const GetResolverRuleCommand_1 = require("./commands/GetResolverRuleCommand");
const GetResolverRulePolicyCommand_1 = require("./commands/GetResolverRulePolicyCommand");
const ImportFirewallDomainsCommand_1 = require("./commands/ImportFirewallDomainsCommand");
const ListFirewallConfigsCommand_1 = require("./commands/ListFirewallConfigsCommand");
const ListFirewallDomainListsCommand_1 = require("./commands/ListFirewallDomainListsCommand");
const ListFirewallDomainsCommand_1 = require("./commands/ListFirewallDomainsCommand");
const ListFirewallRuleGroupAssociationsCommand_1 = require("./commands/ListFirewallRuleGroupAssociationsCommand");
const ListFirewallRuleGroupsCommand_1 = require("./commands/ListFirewallRuleGroupsCommand");
const ListFirewallRulesCommand_1 = require("./commands/ListFirewallRulesCommand");
const ListResolverDnssecConfigsCommand_1 = require("./commands/ListResolverDnssecConfigsCommand");
const ListResolverEndpointIpAddressesCommand_1 = require("./commands/ListResolverEndpointIpAddressesCommand");
const ListResolverEndpointsCommand_1 = require("./commands/ListResolverEndpointsCommand");
const ListResolverQueryLogConfigAssociationsCommand_1 = require("./commands/ListResolverQueryLogConfigAssociationsCommand");
const ListResolverQueryLogConfigsCommand_1 = require("./commands/ListResolverQueryLogConfigsCommand");
const ListResolverRuleAssociationsCommand_1 = require("./commands/ListResolverRuleAssociationsCommand");
const ListResolverRulesCommand_1 = require("./commands/ListResolverRulesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutFirewallRuleGroupPolicyCommand_1 = require("./commands/PutFirewallRuleGroupPolicyCommand");
const PutResolverQueryLogConfigPolicyCommand_1 = require("./commands/PutResolverQueryLogConfigPolicyCommand");
const PutResolverRulePolicyCommand_1 = require("./commands/PutResolverRulePolicyCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateFirewallConfigCommand_1 = require("./commands/UpdateFirewallConfigCommand");
const UpdateFirewallDomainsCommand_1 = require("./commands/UpdateFirewallDomainsCommand");
const UpdateFirewallRuleCommand_1 = require("./commands/UpdateFirewallRuleCommand");
const UpdateFirewallRuleGroupAssociationCommand_1 = require("./commands/UpdateFirewallRuleGroupAssociationCommand");
const UpdateResolverDnssecConfigCommand_1 = require("./commands/UpdateResolverDnssecConfigCommand");
const UpdateResolverEndpointCommand_1 = require("./commands/UpdateResolverEndpointCommand");
const UpdateResolverRuleCommand_1 = require("./commands/UpdateResolverRuleCommand");
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
class Route53Resolver extends Route53ResolverClient_1.Route53ResolverClient {
    associateFirewallRuleGroup(args, optionsOrCb, cb) {
        const command = new AssociateFirewallRuleGroupCommand_1.AssociateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateResolverEndpointIpAddress(args, optionsOrCb, cb) {
        const command = new AssociateResolverEndpointIpAddressCommand_1.AssociateResolverEndpointIpAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateResolverQueryLogConfig(args, optionsOrCb, cb) {
        const command = new AssociateResolverQueryLogConfigCommand_1.AssociateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateResolverRule(args, optionsOrCb, cb) {
        const command = new AssociateResolverRuleCommand_1.AssociateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFirewallDomainList(args, optionsOrCb, cb) {
        const command = new CreateFirewallDomainListCommand_1.CreateFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFirewallRule(args, optionsOrCb, cb) {
        const command = new CreateFirewallRuleCommand_1.CreateFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFirewallRuleGroup(args, optionsOrCb, cb) {
        const command = new CreateFirewallRuleGroupCommand_1.CreateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResolverEndpoint(args, optionsOrCb, cb) {
        const command = new CreateResolverEndpointCommand_1.CreateResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResolverQueryLogConfig(args, optionsOrCb, cb) {
        const command = new CreateResolverQueryLogConfigCommand_1.CreateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResolverRule(args, optionsOrCb, cb) {
        const command = new CreateResolverRuleCommand_1.CreateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFirewallDomainList(args, optionsOrCb, cb) {
        const command = new DeleteFirewallDomainListCommand_1.DeleteFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFirewallRule(args, optionsOrCb, cb) {
        const command = new DeleteFirewallRuleCommand_1.DeleteFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFirewallRuleGroup(args, optionsOrCb, cb) {
        const command = new DeleteFirewallRuleGroupCommand_1.DeleteFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResolverEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteResolverEndpointCommand_1.DeleteResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResolverQueryLogConfig(args, optionsOrCb, cb) {
        const command = new DeleteResolverQueryLogConfigCommand_1.DeleteResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteResolverRule(args, optionsOrCb, cb) {
        const command = new DeleteResolverRuleCommand_1.DeleteResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateFirewallRuleGroup(args, optionsOrCb, cb) {
        const command = new DisassociateFirewallRuleGroupCommand_1.DisassociateFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateResolverEndpointIpAddress(args, optionsOrCb, cb) {
        const command = new DisassociateResolverEndpointIpAddressCommand_1.DisassociateResolverEndpointIpAddressCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateResolverQueryLogConfig(args, optionsOrCb, cb) {
        const command = new DisassociateResolverQueryLogConfigCommand_1.DisassociateResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateResolverRule(args, optionsOrCb, cb) {
        const command = new DisassociateResolverRuleCommand_1.DisassociateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFirewallConfig(args, optionsOrCb, cb) {
        const command = new GetFirewallConfigCommand_1.GetFirewallConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFirewallDomainList(args, optionsOrCb, cb) {
        const command = new GetFirewallDomainListCommand_1.GetFirewallDomainListCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFirewallRuleGroup(args, optionsOrCb, cb) {
        const command = new GetFirewallRuleGroupCommand_1.GetFirewallRuleGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFirewallRuleGroupAssociation(args, optionsOrCb, cb) {
        const command = new GetFirewallRuleGroupAssociationCommand_1.GetFirewallRuleGroupAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getFirewallRuleGroupPolicy(args, optionsOrCb, cb) {
        const command = new GetFirewallRuleGroupPolicyCommand_1.GetFirewallRuleGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverDnssecConfig(args, optionsOrCb, cb) {
        const command = new GetResolverDnssecConfigCommand_1.GetResolverDnssecConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverEndpoint(args, optionsOrCb, cb) {
        const command = new GetResolverEndpointCommand_1.GetResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverQueryLogConfig(args, optionsOrCb, cb) {
        const command = new GetResolverQueryLogConfigCommand_1.GetResolverQueryLogConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverQueryLogConfigAssociation(args, optionsOrCb, cb) {
        const command = new GetResolverQueryLogConfigAssociationCommand_1.GetResolverQueryLogConfigAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverQueryLogConfigPolicy(args, optionsOrCb, cb) {
        const command = new GetResolverQueryLogConfigPolicyCommand_1.GetResolverQueryLogConfigPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverRule(args, optionsOrCb, cb) {
        const command = new GetResolverRuleCommand_1.GetResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverRuleAssociation(args, optionsOrCb, cb) {
        const command = new GetResolverRuleAssociationCommand_1.GetResolverRuleAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getResolverRulePolicy(args, optionsOrCb, cb) {
        const command = new GetResolverRulePolicyCommand_1.GetResolverRulePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    importFirewallDomains(args, optionsOrCb, cb) {
        const command = new ImportFirewallDomainsCommand_1.ImportFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallConfigs(args, optionsOrCb, cb) {
        const command = new ListFirewallConfigsCommand_1.ListFirewallConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallDomainLists(args, optionsOrCb, cb) {
        const command = new ListFirewallDomainListsCommand_1.ListFirewallDomainListsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallDomains(args, optionsOrCb, cb) {
        const command = new ListFirewallDomainsCommand_1.ListFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallRuleGroupAssociations(args, optionsOrCb, cb) {
        const command = new ListFirewallRuleGroupAssociationsCommand_1.ListFirewallRuleGroupAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallRuleGroups(args, optionsOrCb, cb) {
        const command = new ListFirewallRuleGroupsCommand_1.ListFirewallRuleGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFirewallRules(args, optionsOrCb, cb) {
        const command = new ListFirewallRulesCommand_1.ListFirewallRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverDnssecConfigs(args, optionsOrCb, cb) {
        const command = new ListResolverDnssecConfigsCommand_1.ListResolverDnssecConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverEndpointIpAddresses(args, optionsOrCb, cb) {
        const command = new ListResolverEndpointIpAddressesCommand_1.ListResolverEndpointIpAddressesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverEndpoints(args, optionsOrCb, cb) {
        const command = new ListResolverEndpointsCommand_1.ListResolverEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverQueryLogConfigAssociations(args, optionsOrCb, cb) {
        const command = new ListResolverQueryLogConfigAssociationsCommand_1.ListResolverQueryLogConfigAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverQueryLogConfigs(args, optionsOrCb, cb) {
        const command = new ListResolverQueryLogConfigsCommand_1.ListResolverQueryLogConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverRuleAssociations(args, optionsOrCb, cb) {
        const command = new ListResolverRuleAssociationsCommand_1.ListResolverRuleAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listResolverRules(args, optionsOrCb, cb) {
        const command = new ListResolverRulesCommand_1.ListResolverRulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putFirewallRuleGroupPolicy(args, optionsOrCb, cb) {
        const command = new PutFirewallRuleGroupPolicyCommand_1.PutFirewallRuleGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResolverQueryLogConfigPolicy(args, optionsOrCb, cb) {
        const command = new PutResolverQueryLogConfigPolicyCommand_1.PutResolverQueryLogConfigPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putResolverRulePolicy(args, optionsOrCb, cb) {
        const command = new PutResolverRulePolicyCommand_1.PutResolverRulePolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFirewallConfig(args, optionsOrCb, cb) {
        const command = new UpdateFirewallConfigCommand_1.UpdateFirewallConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFirewallDomains(args, optionsOrCb, cb) {
        const command = new UpdateFirewallDomainsCommand_1.UpdateFirewallDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFirewallRule(args, optionsOrCb, cb) {
        const command = new UpdateFirewallRuleCommand_1.UpdateFirewallRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateFirewallRuleGroupAssociation(args, optionsOrCb, cb) {
        const command = new UpdateFirewallRuleGroupAssociationCommand_1.UpdateFirewallRuleGroupAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResolverDnssecConfig(args, optionsOrCb, cb) {
        const command = new UpdateResolverDnssecConfigCommand_1.UpdateResolverDnssecConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResolverEndpoint(args, optionsOrCb, cb) {
        const command = new UpdateResolverEndpointCommand_1.UpdateResolverEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateResolverRule(args, optionsOrCb, cb) {
        const command = new UpdateResolverRuleCommand_1.UpdateResolverRuleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Route53Resolver = Route53Resolver;
//# sourceMappingURL=Route53Resolver.js.map