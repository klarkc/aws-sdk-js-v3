import { __extends } from "tslib";
import { ElasticLoadBalancingV2Client } from "./ElasticLoadBalancingV2Client";
import { AddListenerCertificatesCommand, } from "./commands/AddListenerCertificatesCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { CreateListenerCommand, } from "./commands/CreateListenerCommand";
import { CreateLoadBalancerCommand, } from "./commands/CreateLoadBalancerCommand";
import { CreateRuleCommand } from "./commands/CreateRuleCommand";
import { CreateTargetGroupCommand, } from "./commands/CreateTargetGroupCommand";
import { DeleteListenerCommand, } from "./commands/DeleteListenerCommand";
import { DeleteLoadBalancerCommand, } from "./commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommand } from "./commands/DeleteRuleCommand";
import { DeleteTargetGroupCommand, } from "./commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommand, } from "./commands/DeregisterTargetsCommand";
import { DescribeAccountLimitsCommand, } from "./commands/DescribeAccountLimitsCommand";
import { DescribeListenerCertificatesCommand, } from "./commands/DescribeListenerCertificatesCommand";
import { DescribeListenersCommand, } from "./commands/DescribeListenersCommand";
import { DescribeLoadBalancerAttributesCommand, } from "./commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancersCommand, } from "./commands/DescribeLoadBalancersCommand";
import { DescribeRulesCommand, } from "./commands/DescribeRulesCommand";
import { DescribeSSLPoliciesCommand, } from "./commands/DescribeSSLPoliciesCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { DescribeTargetGroupAttributesCommand, } from "./commands/DescribeTargetGroupAttributesCommand";
import { DescribeTargetGroupsCommand, } from "./commands/DescribeTargetGroupsCommand";
import { DescribeTargetHealthCommand, } from "./commands/DescribeTargetHealthCommand";
import { ModifyListenerCommand, } from "./commands/ModifyListenerCommand";
import { ModifyLoadBalancerAttributesCommand, } from "./commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommand } from "./commands/ModifyRuleCommand";
import { ModifyTargetGroupAttributesCommand, } from "./commands/ModifyTargetGroupAttributesCommand";
import { ModifyTargetGroupCommand, } from "./commands/ModifyTargetGroupCommand";
import { RegisterTargetsCommand, } from "./commands/RegisterTargetsCommand";
import { RemoveListenerCertificatesCommand, } from "./commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { SetIpAddressTypeCommand, } from "./commands/SetIpAddressTypeCommand";
import { SetRulePrioritiesCommand, } from "./commands/SetRulePrioritiesCommand";
import { SetSecurityGroupsCommand, } from "./commands/SetSecurityGroupsCommand";
import { SetSubnetsCommand } from "./commands/SetSubnetsCommand";
/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances.
 *       This enables you to increase the availability of your application. The load balancer also
 *       monitors the health of its registered targets and ensures that it routes traffic only to
 *       healthy targets. You configure your load balancer to accept incoming traffic by specifying one
 *       or more listeners, which are configured with a protocol and port number for connections from
 *       clients to the load balancer. You configure a target group with a protocol and port number for
 *       connections from the load balancer to the targets, and with health check settings to be used
 *       when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This
 *       reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports
 *           HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP,
 *           TLS, and UDP.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
var ElasticLoadBalancingV2 = /** @class */ (function (_super) {
    __extends(ElasticLoadBalancingV2, _super);
    function ElasticLoadBalancingV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticLoadBalancingV2.prototype.addListenerCertificates = function (args, optionsOrCb, cb) {
        var command = new AddListenerCertificatesCommand(args);
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
    ElasticLoadBalancingV2.prototype.addTags = function (args, optionsOrCb, cb) {
        var command = new AddTagsCommand(args);
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
    ElasticLoadBalancingV2.prototype.createListener = function (args, optionsOrCb, cb) {
        var command = new CreateListenerCommand(args);
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
    ElasticLoadBalancingV2.prototype.createLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new CreateLoadBalancerCommand(args);
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
    ElasticLoadBalancingV2.prototype.createRule = function (args, optionsOrCb, cb) {
        var command = new CreateRuleCommand(args);
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
    ElasticLoadBalancingV2.prototype.createTargetGroup = function (args, optionsOrCb, cb) {
        var command = new CreateTargetGroupCommand(args);
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
    ElasticLoadBalancingV2.prototype.deleteListener = function (args, optionsOrCb, cb) {
        var command = new DeleteListenerCommand(args);
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
    ElasticLoadBalancingV2.prototype.deleteLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new DeleteLoadBalancerCommand(args);
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
    ElasticLoadBalancingV2.prototype.deleteRule = function (args, optionsOrCb, cb) {
        var command = new DeleteRuleCommand(args);
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
    ElasticLoadBalancingV2.prototype.deleteTargetGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteTargetGroupCommand(args);
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
    ElasticLoadBalancingV2.prototype.deregisterTargets = function (args, optionsOrCb, cb) {
        var command = new DeregisterTargetsCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeAccountLimits = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountLimitsCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeListenerCertificates = function (args, optionsOrCb, cb) {
        var command = new DescribeListenerCertificatesCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeListeners = function (args, optionsOrCb, cb) {
        var command = new DescribeListenersCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeLoadBalancerAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeLoadBalancerAttributesCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeLoadBalancers = function (args, optionsOrCb, cb) {
        var command = new DescribeLoadBalancersCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeRules = function (args, optionsOrCb, cb) {
        var command = new DescribeRulesCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeSSLPolicies = function (args, optionsOrCb, cb) {
        var command = new DescribeSSLPoliciesCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeTags = function (args, optionsOrCb, cb) {
        var command = new DescribeTagsCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeTargetGroupAttributes = function (args, optionsOrCb, cb) {
        var command = new DescribeTargetGroupAttributesCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeTargetGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeTargetGroupsCommand(args);
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
    ElasticLoadBalancingV2.prototype.describeTargetHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeTargetHealthCommand(args);
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
    ElasticLoadBalancingV2.prototype.modifyListener = function (args, optionsOrCb, cb) {
        var command = new ModifyListenerCommand(args);
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
    ElasticLoadBalancingV2.prototype.modifyLoadBalancerAttributes = function (args, optionsOrCb, cb) {
        var command = new ModifyLoadBalancerAttributesCommand(args);
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
    ElasticLoadBalancingV2.prototype.modifyRule = function (args, optionsOrCb, cb) {
        var command = new ModifyRuleCommand(args);
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
    ElasticLoadBalancingV2.prototype.modifyTargetGroup = function (args, optionsOrCb, cb) {
        var command = new ModifyTargetGroupCommand(args);
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
    ElasticLoadBalancingV2.prototype.modifyTargetGroupAttributes = function (args, optionsOrCb, cb) {
        var command = new ModifyTargetGroupAttributesCommand(args);
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
    ElasticLoadBalancingV2.prototype.registerTargets = function (args, optionsOrCb, cb) {
        var command = new RegisterTargetsCommand(args);
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
    ElasticLoadBalancingV2.prototype.removeListenerCertificates = function (args, optionsOrCb, cb) {
        var command = new RemoveListenerCertificatesCommand(args);
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
    ElasticLoadBalancingV2.prototype.removeTags = function (args, optionsOrCb, cb) {
        var command = new RemoveTagsCommand(args);
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
    ElasticLoadBalancingV2.prototype.setIpAddressType = function (args, optionsOrCb, cb) {
        var command = new SetIpAddressTypeCommand(args);
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
    ElasticLoadBalancingV2.prototype.setRulePriorities = function (args, optionsOrCb, cb) {
        var command = new SetRulePrioritiesCommand(args);
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
    ElasticLoadBalancingV2.prototype.setSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new SetSecurityGroupsCommand(args);
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
    ElasticLoadBalancingV2.prototype.setSubnets = function (args, optionsOrCb, cb) {
        var command = new SetSubnetsCommand(args);
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
    return ElasticLoadBalancingV2;
}(ElasticLoadBalancingV2Client));
export { ElasticLoadBalancingV2 };
//# sourceMappingURL=ElasticLoadBalancingV2.js.map