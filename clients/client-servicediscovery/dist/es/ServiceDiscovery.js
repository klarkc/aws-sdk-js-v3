import { __extends } from "tslib";
import { ServiceDiscoveryClient } from "./ServiceDiscoveryClient";
import { CreateHttpNamespaceCommand, } from "./commands/CreateHttpNamespaceCommand";
import { CreatePrivateDnsNamespaceCommand, } from "./commands/CreatePrivateDnsNamespaceCommand";
import { CreatePublicDnsNamespaceCommand, } from "./commands/CreatePublicDnsNamespaceCommand";
import { CreateServiceCommand, } from "./commands/CreateServiceCommand";
import { DeleteNamespaceCommand, } from "./commands/DeleteNamespaceCommand";
import { DeleteServiceCommand, } from "./commands/DeleteServiceCommand";
import { DeregisterInstanceCommand, } from "./commands/DeregisterInstanceCommand";
import { DiscoverInstancesCommand, } from "./commands/DiscoverInstancesCommand";
import { GetInstanceCommand } from "./commands/GetInstanceCommand";
import { GetInstancesHealthStatusCommand, } from "./commands/GetInstancesHealthStatusCommand";
import { GetNamespaceCommand, } from "./commands/GetNamespaceCommand";
import { GetOperationCommand, } from "./commands/GetOperationCommand";
import { GetServiceCommand } from "./commands/GetServiceCommand";
import { ListInstancesCommand, } from "./commands/ListInstancesCommand";
import { ListNamespacesCommand, } from "./commands/ListNamespacesCommand";
import { ListOperationsCommand, } from "./commands/ListOperationsCommand";
import { ListServicesCommand, } from "./commands/ListServicesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { RegisterInstanceCommand, } from "./commands/RegisterInstanceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateInstanceCustomHealthStatusCommand, } from "./commands/UpdateInstanceCustomHealthStatusCommand";
import { UpdateServiceCommand, } from "./commands/UpdateServiceCommand";
/**
 * <p>With AWS Cloud Map, you can configure public DNS, private DNS, or HTTP namespaces that your microservice
 *    applications run in. When an instance becomes available, you can call the AWS Cloud Map API to register the instance
 *    with AWS Cloud Map. For public or private DNS namespaces, AWS Cloud Map automatically creates DNS records and an optional
 *    health check. Clients that submit public or private DNS queries, or HTTP requests, for the service receive an answer
 *    that contains up to eight healthy records. </p>
 */
var ServiceDiscovery = /** @class */ (function (_super) {
    __extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.createHttpNamespace = function (args, optionsOrCb, cb) {
        var command = new CreateHttpNamespaceCommand(args);
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
    ServiceDiscovery.prototype.createPrivateDnsNamespace = function (args, optionsOrCb, cb) {
        var command = new CreatePrivateDnsNamespaceCommand(args);
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
    ServiceDiscovery.prototype.createPublicDnsNamespace = function (args, optionsOrCb, cb) {
        var command = new CreatePublicDnsNamespaceCommand(args);
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
    ServiceDiscovery.prototype.createService = function (args, optionsOrCb, cb) {
        var command = new CreateServiceCommand(args);
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
    ServiceDiscovery.prototype.deleteNamespace = function (args, optionsOrCb, cb) {
        var command = new DeleteNamespaceCommand(args);
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
    ServiceDiscovery.prototype.deleteService = function (args, optionsOrCb, cb) {
        var command = new DeleteServiceCommand(args);
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
    ServiceDiscovery.prototype.deregisterInstance = function (args, optionsOrCb, cb) {
        var command = new DeregisterInstanceCommand(args);
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
    ServiceDiscovery.prototype.discoverInstances = function (args, optionsOrCb, cb) {
        var command = new DiscoverInstancesCommand(args);
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
    ServiceDiscovery.prototype.getInstance = function (args, optionsOrCb, cb) {
        var command = new GetInstanceCommand(args);
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
    ServiceDiscovery.prototype.getInstancesHealthStatus = function (args, optionsOrCb, cb) {
        var command = new GetInstancesHealthStatusCommand(args);
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
    ServiceDiscovery.prototype.getNamespace = function (args, optionsOrCb, cb) {
        var command = new GetNamespaceCommand(args);
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
    ServiceDiscovery.prototype.getOperation = function (args, optionsOrCb, cb) {
        var command = new GetOperationCommand(args);
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
    ServiceDiscovery.prototype.getService = function (args, optionsOrCb, cb) {
        var command = new GetServiceCommand(args);
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
    ServiceDiscovery.prototype.listInstances = function (args, optionsOrCb, cb) {
        var command = new ListInstancesCommand(args);
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
    ServiceDiscovery.prototype.listNamespaces = function (args, optionsOrCb, cb) {
        var command = new ListNamespacesCommand(args);
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
    ServiceDiscovery.prototype.listOperations = function (args, optionsOrCb, cb) {
        var command = new ListOperationsCommand(args);
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
    ServiceDiscovery.prototype.listServices = function (args, optionsOrCb, cb) {
        var command = new ListServicesCommand(args);
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
    ServiceDiscovery.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ServiceDiscovery.prototype.registerInstance = function (args, optionsOrCb, cb) {
        var command = new RegisterInstanceCommand(args);
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
    ServiceDiscovery.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ServiceDiscovery.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    ServiceDiscovery.prototype.updateInstanceCustomHealthStatus = function (args, optionsOrCb, cb) {
        var command = new UpdateInstanceCustomHealthStatusCommand(args);
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
    ServiceDiscovery.prototype.updateService = function (args, optionsOrCb, cb) {
        var command = new UpdateServiceCommand(args);
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
    return ServiceDiscovery;
}(ServiceDiscoveryClient));
export { ServiceDiscovery };
//# sourceMappingURL=ServiceDiscovery.js.map