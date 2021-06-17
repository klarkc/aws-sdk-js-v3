import { __extends } from "tslib";
import { ResourceGroupsClient } from "./ResourceGroupsClient";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupConfigurationCommand, } from "./commands/GetGroupConfigurationCommand";
import { GetGroupQueryCommand, } from "./commands/GetGroupQueryCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GroupResourcesCommand, } from "./commands/GroupResourcesCommand";
import { ListGroupResourcesCommand, } from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { PutGroupConfigurationCommand, } from "./commands/PutGroupConfigurationCommand";
import { SearchResourcesCommand, } from "./commands/SearchResourcesCommand";
import { TagCommand } from "./commands/TagCommand";
import { UngroupResourcesCommand, } from "./commands/UngroupResourcesCommand";
import { UntagCommand } from "./commands/UntagCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateGroupQueryCommand, } from "./commands/UpdateGroupQueryCommand";
/**
 * <fullname>AWS Resource Groups</fullname>
 *
 *         <p>AWS Resource Groups lets you organize AWS resources such as Amazon EC2 instances, Amazon Relational Database Service
 *             databases, and Amazon S3 buckets into groups using criteria that you define as tags. A
 *             resource group is a collection of resources that match the resource types specified in a
 *             query, and share one or more tags or portions of tags. You can create a group of
 *             resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
 *             application layers, or virtually any criteria. Resource Groups enable you to automate management
 *             tasks, such as those in AWS Systems Manager Automation documents, on tag-related resources in
 *             AWS Systems Manager. Groups of tagged resources also let you quickly view a custom console in
 *             AWS Systems Manager that shows AWS Config compliance and other monitoring data about member
 *             resources.</p>
 *         <p>To create a resource group, build a resource query, and specify tags that identify the
 *             criteria that members of the group have in common. Tags are key-value pairs.</p>
 *         <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">AWS Resource Groups User Guide</a>.</p>
 *         <p>AWS Resource Groups uses a REST-compliant API that you can use to perform the following types of
 *             operations.</p>
 *         <ul>
 *             <li>
 *                 <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
 *                     resource query entities</p>
 *             </li>
 *             <li>
 *                 <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                 <p>Resolving resource group member ARNs so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                 <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                 <p>Searching AWS resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
var ResourceGroups = /** @class */ (function (_super) {
    __extends(ResourceGroups, _super);
    function ResourceGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceGroups.prototype.createGroup = function (args, optionsOrCb, cb) {
        var command = new CreateGroupCommand(args);
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
    ResourceGroups.prototype.deleteGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteGroupCommand(args);
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
    ResourceGroups.prototype.getGroup = function (args, optionsOrCb, cb) {
        var command = new GetGroupCommand(args);
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
    ResourceGroups.prototype.getGroupConfiguration = function (args, optionsOrCb, cb) {
        var command = new GetGroupConfigurationCommand(args);
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
    ResourceGroups.prototype.getGroupQuery = function (args, optionsOrCb, cb) {
        var command = new GetGroupQueryCommand(args);
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
    ResourceGroups.prototype.getTags = function (args, optionsOrCb, cb) {
        var command = new GetTagsCommand(args);
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
    ResourceGroups.prototype.groupResources = function (args, optionsOrCb, cb) {
        var command = new GroupResourcesCommand(args);
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
    ResourceGroups.prototype.listGroupResources = function (args, optionsOrCb, cb) {
        var command = new ListGroupResourcesCommand(args);
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
    ResourceGroups.prototype.listGroups = function (args, optionsOrCb, cb) {
        var command = new ListGroupsCommand(args);
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
    ResourceGroups.prototype.putGroupConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutGroupConfigurationCommand(args);
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
    ResourceGroups.prototype.searchResources = function (args, optionsOrCb, cb) {
        var command = new SearchResourcesCommand(args);
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
    ResourceGroups.prototype.tag = function (args, optionsOrCb, cb) {
        var command = new TagCommand(args);
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
    ResourceGroups.prototype.ungroupResources = function (args, optionsOrCb, cb) {
        var command = new UngroupResourcesCommand(args);
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
    ResourceGroups.prototype.untag = function (args, optionsOrCb, cb) {
        var command = new UntagCommand(args);
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
    ResourceGroups.prototype.updateGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupCommand(args);
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
    ResourceGroups.prototype.updateGroupQuery = function (args, optionsOrCb, cb) {
        var command = new UpdateGroupQueryCommand(args);
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
    return ResourceGroups;
}(ResourceGroupsClient));
export { ResourceGroups };
//# sourceMappingURL=ResourceGroups.js.map