"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceGroups = void 0;
const ResourceGroupsClient_1 = require("./ResourceGroupsClient");
const CreateGroupCommand_1 = require("./commands/CreateGroupCommand");
const DeleteGroupCommand_1 = require("./commands/DeleteGroupCommand");
const GetGroupCommand_1 = require("./commands/GetGroupCommand");
const GetGroupConfigurationCommand_1 = require("./commands/GetGroupConfigurationCommand");
const GetGroupQueryCommand_1 = require("./commands/GetGroupQueryCommand");
const GetTagsCommand_1 = require("./commands/GetTagsCommand");
const GroupResourcesCommand_1 = require("./commands/GroupResourcesCommand");
const ListGroupResourcesCommand_1 = require("./commands/ListGroupResourcesCommand");
const ListGroupsCommand_1 = require("./commands/ListGroupsCommand");
const PutGroupConfigurationCommand_1 = require("./commands/PutGroupConfigurationCommand");
const SearchResourcesCommand_1 = require("./commands/SearchResourcesCommand");
const TagCommand_1 = require("./commands/TagCommand");
const UngroupResourcesCommand_1 = require("./commands/UngroupResourcesCommand");
const UntagCommand_1 = require("./commands/UntagCommand");
const UpdateGroupCommand_1 = require("./commands/UpdateGroupCommand");
const UpdateGroupQueryCommand_1 = require("./commands/UpdateGroupQueryCommand");
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
class ResourceGroups extends ResourceGroupsClient_1.ResourceGroupsClient {
    createGroup(args, optionsOrCb, cb) {
        const command = new CreateGroupCommand_1.CreateGroupCommand(args);
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
    deleteGroup(args, optionsOrCb, cb) {
        const command = new DeleteGroupCommand_1.DeleteGroupCommand(args);
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
    getGroup(args, optionsOrCb, cb) {
        const command = new GetGroupCommand_1.GetGroupCommand(args);
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
    getGroupConfiguration(args, optionsOrCb, cb) {
        const command = new GetGroupConfigurationCommand_1.GetGroupConfigurationCommand(args);
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
    getGroupQuery(args, optionsOrCb, cb) {
        const command = new GetGroupQueryCommand_1.GetGroupQueryCommand(args);
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
    getTags(args, optionsOrCb, cb) {
        const command = new GetTagsCommand_1.GetTagsCommand(args);
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
    groupResources(args, optionsOrCb, cb) {
        const command = new GroupResourcesCommand_1.GroupResourcesCommand(args);
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
    listGroupResources(args, optionsOrCb, cb) {
        const command = new ListGroupResourcesCommand_1.ListGroupResourcesCommand(args);
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
    listGroups(args, optionsOrCb, cb) {
        const command = new ListGroupsCommand_1.ListGroupsCommand(args);
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
    putGroupConfiguration(args, optionsOrCb, cb) {
        const command = new PutGroupConfigurationCommand_1.PutGroupConfigurationCommand(args);
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
    searchResources(args, optionsOrCb, cb) {
        const command = new SearchResourcesCommand_1.SearchResourcesCommand(args);
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
    tag(args, optionsOrCb, cb) {
        const command = new TagCommand_1.TagCommand(args);
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
    ungroupResources(args, optionsOrCb, cb) {
        const command = new UngroupResourcesCommand_1.UngroupResourcesCommand(args);
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
    untag(args, optionsOrCb, cb) {
        const command = new UntagCommand_1.UntagCommand(args);
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
    updateGroup(args, optionsOrCb, cb) {
        const command = new UpdateGroupCommand_1.UpdateGroupCommand(args);
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
    updateGroupQuery(args, optionsOrCb, cb) {
        const command = new UpdateGroupQueryCommand_1.UpdateGroupQueryCommand(args);
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
exports.ResourceGroups = ResourceGroups;
//# sourceMappingURL=ResourceGroups.js.map