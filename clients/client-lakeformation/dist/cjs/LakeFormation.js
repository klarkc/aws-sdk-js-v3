"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LakeFormation = void 0;
const LakeFormationClient_1 = require("./LakeFormationClient");
const AddLFTagsToResourceCommand_1 = require("./commands/AddLFTagsToResourceCommand");
const BatchGrantPermissionsCommand_1 = require("./commands/BatchGrantPermissionsCommand");
const BatchRevokePermissionsCommand_1 = require("./commands/BatchRevokePermissionsCommand");
const CreateLFTagCommand_1 = require("./commands/CreateLFTagCommand");
const DeleteLFTagCommand_1 = require("./commands/DeleteLFTagCommand");
const DeregisterResourceCommand_1 = require("./commands/DeregisterResourceCommand");
const DescribeResourceCommand_1 = require("./commands/DescribeResourceCommand");
const GetDataLakeSettingsCommand_1 = require("./commands/GetDataLakeSettingsCommand");
const GetEffectivePermissionsForPathCommand_1 = require("./commands/GetEffectivePermissionsForPathCommand");
const GetLFTagCommand_1 = require("./commands/GetLFTagCommand");
const GetResourceLFTagsCommand_1 = require("./commands/GetResourceLFTagsCommand");
const GrantPermissionsCommand_1 = require("./commands/GrantPermissionsCommand");
const ListLFTagsCommand_1 = require("./commands/ListLFTagsCommand");
const ListPermissionsCommand_1 = require("./commands/ListPermissionsCommand");
const ListResourcesCommand_1 = require("./commands/ListResourcesCommand");
const PutDataLakeSettingsCommand_1 = require("./commands/PutDataLakeSettingsCommand");
const RegisterResourceCommand_1 = require("./commands/RegisterResourceCommand");
const RemoveLFTagsFromResourceCommand_1 = require("./commands/RemoveLFTagsFromResourceCommand");
const RevokePermissionsCommand_1 = require("./commands/RevokePermissionsCommand");
const SearchDatabasesByLFTagsCommand_1 = require("./commands/SearchDatabasesByLFTagsCommand");
const SearchTablesByLFTagsCommand_1 = require("./commands/SearchTablesByLFTagsCommand");
const UpdateLFTagCommand_1 = require("./commands/UpdateLFTagCommand");
const UpdateResourceCommand_1 = require("./commands/UpdateResourceCommand");
/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
class LakeFormation extends LakeFormationClient_1.LakeFormationClient {
    addLFTagsToResource(args, optionsOrCb, cb) {
        const command = new AddLFTagsToResourceCommand_1.AddLFTagsToResourceCommand(args);
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
    batchGrantPermissions(args, optionsOrCb, cb) {
        const command = new BatchGrantPermissionsCommand_1.BatchGrantPermissionsCommand(args);
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
    batchRevokePermissions(args, optionsOrCb, cb) {
        const command = new BatchRevokePermissionsCommand_1.BatchRevokePermissionsCommand(args);
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
    createLFTag(args, optionsOrCb, cb) {
        const command = new CreateLFTagCommand_1.CreateLFTagCommand(args);
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
    deleteLFTag(args, optionsOrCb, cb) {
        const command = new DeleteLFTagCommand_1.DeleteLFTagCommand(args);
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
    deregisterResource(args, optionsOrCb, cb) {
        const command = new DeregisterResourceCommand_1.DeregisterResourceCommand(args);
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
    describeResource(args, optionsOrCb, cb) {
        const command = new DescribeResourceCommand_1.DescribeResourceCommand(args);
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
    getDataLakeSettings(args, optionsOrCb, cb) {
        const command = new GetDataLakeSettingsCommand_1.GetDataLakeSettingsCommand(args);
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
    getEffectivePermissionsForPath(args, optionsOrCb, cb) {
        const command = new GetEffectivePermissionsForPathCommand_1.GetEffectivePermissionsForPathCommand(args);
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
    getLFTag(args, optionsOrCb, cb) {
        const command = new GetLFTagCommand_1.GetLFTagCommand(args);
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
    getResourceLFTags(args, optionsOrCb, cb) {
        const command = new GetResourceLFTagsCommand_1.GetResourceLFTagsCommand(args);
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
    grantPermissions(args, optionsOrCb, cb) {
        const command = new GrantPermissionsCommand_1.GrantPermissionsCommand(args);
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
    listLFTags(args, optionsOrCb, cb) {
        const command = new ListLFTagsCommand_1.ListLFTagsCommand(args);
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
    listPermissions(args, optionsOrCb, cb) {
        const command = new ListPermissionsCommand_1.ListPermissionsCommand(args);
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
    listResources(args, optionsOrCb, cb) {
        const command = new ListResourcesCommand_1.ListResourcesCommand(args);
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
    putDataLakeSettings(args, optionsOrCb, cb) {
        const command = new PutDataLakeSettingsCommand_1.PutDataLakeSettingsCommand(args);
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
    registerResource(args, optionsOrCb, cb) {
        const command = new RegisterResourceCommand_1.RegisterResourceCommand(args);
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
    removeLFTagsFromResource(args, optionsOrCb, cb) {
        const command = new RemoveLFTagsFromResourceCommand_1.RemoveLFTagsFromResourceCommand(args);
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
    revokePermissions(args, optionsOrCb, cb) {
        const command = new RevokePermissionsCommand_1.RevokePermissionsCommand(args);
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
    searchDatabasesByLFTags(args, optionsOrCb, cb) {
        const command = new SearchDatabasesByLFTagsCommand_1.SearchDatabasesByLFTagsCommand(args);
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
    searchTablesByLFTags(args, optionsOrCb, cb) {
        const command = new SearchTablesByLFTagsCommand_1.SearchTablesByLFTagsCommand(args);
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
    updateLFTag(args, optionsOrCb, cb) {
        const command = new UpdateLFTagCommand_1.UpdateLFTagCommand(args);
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
    updateResource(args, optionsOrCb, cb) {
        const command = new UpdateResourceCommand_1.UpdateResourceCommand(args);
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
exports.LakeFormation = LakeFormation;
//# sourceMappingURL=LakeFormation.js.map