import { __extends } from "tslib";
import { ElasticLoadBalancingClient } from "./ElasticLoadBalancingClient";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { ApplySecurityGroupsToLoadBalancerCommand, } from "./commands/ApplySecurityGroupsToLoadBalancerCommand";
import { AttachLoadBalancerToSubnetsCommand, } from "./commands/AttachLoadBalancerToSubnetsCommand";
import { ConfigureHealthCheckCommand, } from "./commands/ConfigureHealthCheckCommand";
import { CreateAppCookieStickinessPolicyCommand, } from "./commands/CreateAppCookieStickinessPolicyCommand";
import { CreateLBCookieStickinessPolicyCommand, } from "./commands/CreateLBCookieStickinessPolicyCommand";
import { CreateLoadBalancerCommand, } from "./commands/CreateLoadBalancerCommand";
import { CreateLoadBalancerListenersCommand, } from "./commands/CreateLoadBalancerListenersCommand";
import { CreateLoadBalancerPolicyCommand, } from "./commands/CreateLoadBalancerPolicyCommand";
import { DeleteLoadBalancerCommand, } from "./commands/DeleteLoadBalancerCommand";
import { DeleteLoadBalancerListenersCommand, } from "./commands/DeleteLoadBalancerListenersCommand";
import { DeleteLoadBalancerPolicyCommand, } from "./commands/DeleteLoadBalancerPolicyCommand";
import { DeregisterInstancesFromLoadBalancerCommand, } from "./commands/DeregisterInstancesFromLoadBalancerCommand";
import { DescribeAccountLimitsCommand, } from "./commands/DescribeAccountLimitsCommand";
import { DescribeInstanceHealthCommand, } from "./commands/DescribeInstanceHealthCommand";
import { DescribeLoadBalancerAttributesCommand, } from "./commands/DescribeLoadBalancerAttributesCommand";
import { DescribeLoadBalancerPoliciesCommand, } from "./commands/DescribeLoadBalancerPoliciesCommand";
import { DescribeLoadBalancerPolicyTypesCommand, } from "./commands/DescribeLoadBalancerPolicyTypesCommand";
import { DescribeLoadBalancersCommand, } from "./commands/DescribeLoadBalancersCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { DetachLoadBalancerFromSubnetsCommand, } from "./commands/DetachLoadBalancerFromSubnetsCommand";
import { DisableAvailabilityZonesForLoadBalancerCommand, } from "./commands/DisableAvailabilityZonesForLoadBalancerCommand";
import { EnableAvailabilityZonesForLoadBalancerCommand, } from "./commands/EnableAvailabilityZonesForLoadBalancerCommand";
import { ModifyLoadBalancerAttributesCommand, } from "./commands/ModifyLoadBalancerAttributesCommand";
import { RegisterInstancesWithLoadBalancerCommand, } from "./commands/RegisterInstancesWithLoadBalancerCommand";
import { RemoveTagsCommand } from "./commands/RemoveTagsCommand";
import { SetLoadBalancerListenerSSLCertificateCommand, } from "./commands/SetLoadBalancerListenerSSLCertificateCommand";
import { SetLoadBalancerPoliciesForBackendServerCommand, } from "./commands/SetLoadBalancerPoliciesForBackendServerCommand";
import { SetLoadBalancerPoliciesOfListenerCommand, } from "./commands/SetLoadBalancerPoliciesOfListenerCommand";
/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *         <p>A load balancer can distribute incoming traffic across your EC2 instances.
 *             This enables you to increase the availability of your application. The load balancer
 *             also monitors the health of its registered instances and ensures that it routes traffic
 *             only to healthy instances. You configure your load balancer to accept incoming traffic
 *             by specifying one or more listeners, which are configured with a protocol and port
 *             number for connections from clients to the load balancer and a protocol and port number
 *             for connections from the load balancer to the instances.</p>
 *         <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers,
 *             and Classic Load Balancers. You can select a load balancer based on your application needs. For more
 *             information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p>
 *         <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers.
 *             The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p>
 *
 *         <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>.
 *             Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p>
 *
 *         <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means
 *             that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK
 *             response code.</p>
 */
var ElasticLoadBalancing = /** @class */ (function (_super) {
    __extends(ElasticLoadBalancing, _super);
    function ElasticLoadBalancing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElasticLoadBalancing.prototype.addTags = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.applySecurityGroupsToLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new ApplySecurityGroupsToLoadBalancerCommand(args);
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
    ElasticLoadBalancing.prototype.attachLoadBalancerToSubnets = function (args, optionsOrCb, cb) {
        var command = new AttachLoadBalancerToSubnetsCommand(args);
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
    ElasticLoadBalancing.prototype.configureHealthCheck = function (args, optionsOrCb, cb) {
        var command = new ConfigureHealthCheckCommand(args);
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
    ElasticLoadBalancing.prototype.createAppCookieStickinessPolicy = function (args, optionsOrCb, cb) {
        var command = new CreateAppCookieStickinessPolicyCommand(args);
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
    ElasticLoadBalancing.prototype.createLBCookieStickinessPolicy = function (args, optionsOrCb, cb) {
        var command = new CreateLBCookieStickinessPolicyCommand(args);
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
    ElasticLoadBalancing.prototype.createLoadBalancer = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.createLoadBalancerListeners = function (args, optionsOrCb, cb) {
        var command = new CreateLoadBalancerListenersCommand(args);
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
    ElasticLoadBalancing.prototype.createLoadBalancerPolicy = function (args, optionsOrCb, cb) {
        var command = new CreateLoadBalancerPolicyCommand(args);
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
    ElasticLoadBalancing.prototype.deleteLoadBalancer = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.deleteLoadBalancerListeners = function (args, optionsOrCb, cb) {
        var command = new DeleteLoadBalancerListenersCommand(args);
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
    ElasticLoadBalancing.prototype.deleteLoadBalancerPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteLoadBalancerPolicyCommand(args);
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
    ElasticLoadBalancing.prototype.deregisterInstancesFromLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new DeregisterInstancesFromLoadBalancerCommand(args);
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
    ElasticLoadBalancing.prototype.describeAccountLimits = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.describeInstanceHealth = function (args, optionsOrCb, cb) {
        var command = new DescribeInstanceHealthCommand(args);
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
    ElasticLoadBalancing.prototype.describeLoadBalancerAttributes = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.describeLoadBalancerPolicies = function (args, optionsOrCb, cb) {
        var command = new DescribeLoadBalancerPoliciesCommand(args);
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
    ElasticLoadBalancing.prototype.describeLoadBalancerPolicyTypes = function (args, optionsOrCb, cb) {
        var command = new DescribeLoadBalancerPolicyTypesCommand(args);
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
    ElasticLoadBalancing.prototype.describeLoadBalancers = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.describeTags = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.detachLoadBalancerFromSubnets = function (args, optionsOrCb, cb) {
        var command = new DetachLoadBalancerFromSubnetsCommand(args);
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
    ElasticLoadBalancing.prototype.disableAvailabilityZonesForLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new DisableAvailabilityZonesForLoadBalancerCommand(args);
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
    ElasticLoadBalancing.prototype.enableAvailabilityZonesForLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new EnableAvailabilityZonesForLoadBalancerCommand(args);
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
    ElasticLoadBalancing.prototype.modifyLoadBalancerAttributes = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.registerInstancesWithLoadBalancer = function (args, optionsOrCb, cb) {
        var command = new RegisterInstancesWithLoadBalancerCommand(args);
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
    ElasticLoadBalancing.prototype.removeTags = function (args, optionsOrCb, cb) {
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
    ElasticLoadBalancing.prototype.setLoadBalancerListenerSSLCertificate = function (args, optionsOrCb, cb) {
        var command = new SetLoadBalancerListenerSSLCertificateCommand(args);
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
    ElasticLoadBalancing.prototype.setLoadBalancerPoliciesForBackendServer = function (args, optionsOrCb, cb) {
        var command = new SetLoadBalancerPoliciesForBackendServerCommand(args);
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
    ElasticLoadBalancing.prototype.setLoadBalancerPoliciesOfListener = function (args, optionsOrCb, cb) {
        var command = new SetLoadBalancerPoliciesOfListenerCommand(args);
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
    return ElasticLoadBalancing;
}(ElasticLoadBalancingClient));
export { ElasticLoadBalancing };
//# sourceMappingURL=ElasticLoadBalancing.js.map