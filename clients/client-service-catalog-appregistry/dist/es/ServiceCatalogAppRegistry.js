import { __extends } from "tslib";
import { ServiceCatalogAppRegistryClient } from "./ServiceCatalogAppRegistryClient";
import { AssociateAttributeGroupCommand, } from "./commands/AssociateAttributeGroupCommand";
import { AssociateResourceCommand, } from "./commands/AssociateResourceCommand";
import { CreateApplicationCommand, } from "./commands/CreateApplicationCommand";
import { CreateAttributeGroupCommand, } from "./commands/CreateAttributeGroupCommand";
import { DeleteApplicationCommand, } from "./commands/DeleteApplicationCommand";
import { DeleteAttributeGroupCommand, } from "./commands/DeleteAttributeGroupCommand";
import { DisassociateAttributeGroupCommand, } from "./commands/DisassociateAttributeGroupCommand";
import { DisassociateResourceCommand, } from "./commands/DisassociateResourceCommand";
import { GetApplicationCommand, } from "./commands/GetApplicationCommand";
import { GetAttributeGroupCommand, } from "./commands/GetAttributeGroupCommand";
import { ListApplicationsCommand, } from "./commands/ListApplicationsCommand";
import { ListAssociatedAttributeGroupsCommand, } from "./commands/ListAssociatedAttributeGroupsCommand";
import { ListAssociatedResourcesCommand, } from "./commands/ListAssociatedResourcesCommand";
import { ListAttributeGroupsCommand, } from "./commands/ListAttributeGroupsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { SyncResourceCommand, } from "./commands/SyncResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommand, } from "./commands/UpdateApplicationCommand";
import { UpdateAttributeGroupCommand, } from "./commands/UpdateAttributeGroupCommand";
/**
 * <p> AWS Service Catalog AppRegistry enables organizations to understand the application context of their AWS resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.</p>
 */
var ServiceCatalogAppRegistry = /** @class */ (function (_super) {
    __extends(ServiceCatalogAppRegistry, _super);
    function ServiceCatalogAppRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceCatalogAppRegistry.prototype.associateAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new AssociateAttributeGroupCommand(args);
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
    ServiceCatalogAppRegistry.prototype.associateResource = function (args, optionsOrCb, cb) {
        var command = new AssociateResourceCommand(args);
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
    ServiceCatalogAppRegistry.prototype.createApplication = function (args, optionsOrCb, cb) {
        var command = new CreateApplicationCommand(args);
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
    ServiceCatalogAppRegistry.prototype.createAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new CreateAttributeGroupCommand(args);
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
    ServiceCatalogAppRegistry.prototype.deleteApplication = function (args, optionsOrCb, cb) {
        var command = new DeleteApplicationCommand(args);
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
    ServiceCatalogAppRegistry.prototype.deleteAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteAttributeGroupCommand(args);
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
    ServiceCatalogAppRegistry.prototype.disassociateAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new DisassociateAttributeGroupCommand(args);
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
    ServiceCatalogAppRegistry.prototype.disassociateResource = function (args, optionsOrCb, cb) {
        var command = new DisassociateResourceCommand(args);
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
    ServiceCatalogAppRegistry.prototype.getApplication = function (args, optionsOrCb, cb) {
        var command = new GetApplicationCommand(args);
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
    ServiceCatalogAppRegistry.prototype.getAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new GetAttributeGroupCommand(args);
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
    ServiceCatalogAppRegistry.prototype.listApplications = function (args, optionsOrCb, cb) {
        var command = new ListApplicationsCommand(args);
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
    ServiceCatalogAppRegistry.prototype.listAssociatedAttributeGroups = function (args, optionsOrCb, cb) {
        var command = new ListAssociatedAttributeGroupsCommand(args);
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
    ServiceCatalogAppRegistry.prototype.listAssociatedResources = function (args, optionsOrCb, cb) {
        var command = new ListAssociatedResourcesCommand(args);
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
    ServiceCatalogAppRegistry.prototype.listAttributeGroups = function (args, optionsOrCb, cb) {
        var command = new ListAttributeGroupsCommand(args);
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
    ServiceCatalogAppRegistry.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    ServiceCatalogAppRegistry.prototype.syncResource = function (args, optionsOrCb, cb) {
        var command = new SyncResourceCommand(args);
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
    ServiceCatalogAppRegistry.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    ServiceCatalogAppRegistry.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    ServiceCatalogAppRegistry.prototype.updateApplication = function (args, optionsOrCb, cb) {
        var command = new UpdateApplicationCommand(args);
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
    ServiceCatalogAppRegistry.prototype.updateAttributeGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateAttributeGroupCommand(args);
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
    return ServiceCatalogAppRegistry;
}(ServiceCatalogAppRegistryClient));
export { ServiceCatalogAppRegistry };
//# sourceMappingURL=ServiceCatalogAppRegistry.js.map