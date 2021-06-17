import { __extends } from "tslib";
import { LakeFormationClient } from "./LakeFormationClient";
import { AddLFTagsToResourceCommand, } from "./commands/AddLFTagsToResourceCommand";
import { BatchGrantPermissionsCommand, } from "./commands/BatchGrantPermissionsCommand";
import { BatchRevokePermissionsCommand, } from "./commands/BatchRevokePermissionsCommand";
import { CreateLFTagCommand } from "./commands/CreateLFTagCommand";
import { DeleteLFTagCommand } from "./commands/DeleteLFTagCommand";
import { DeregisterResourceCommand, } from "./commands/DeregisterResourceCommand";
import { DescribeResourceCommand, } from "./commands/DescribeResourceCommand";
import { GetDataLakeSettingsCommand, } from "./commands/GetDataLakeSettingsCommand";
import { GetEffectivePermissionsForPathCommand, } from "./commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommand } from "./commands/GetLFTagCommand";
import { GetResourceLFTagsCommand, } from "./commands/GetResourceLFTagsCommand";
import { GrantPermissionsCommand, } from "./commands/GrantPermissionsCommand";
import { ListLFTagsCommand } from "./commands/ListLFTagsCommand";
import { ListPermissionsCommand, } from "./commands/ListPermissionsCommand";
import { ListResourcesCommand, } from "./commands/ListResourcesCommand";
import { PutDataLakeSettingsCommand, } from "./commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommand, } from "./commands/RegisterResourceCommand";
import { RemoveLFTagsFromResourceCommand, } from "./commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommand, } from "./commands/RevokePermissionsCommand";
import { SearchDatabasesByLFTagsCommand, } from "./commands/SearchDatabasesByLFTagsCommand";
import { SearchTablesByLFTagsCommand, } from "./commands/SearchTablesByLFTagsCommand";
import { UpdateLFTagCommand } from "./commands/UpdateLFTagCommand";
import { UpdateResourceCommand, } from "./commands/UpdateResourceCommand";
/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
var LakeFormation = /** @class */ (function (_super) {
    __extends(LakeFormation, _super);
    function LakeFormation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LakeFormation.prototype.addLFTagsToResource = function (args, optionsOrCb, cb) {
        var command = new AddLFTagsToResourceCommand(args);
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
    LakeFormation.prototype.batchGrantPermissions = function (args, optionsOrCb, cb) {
        var command = new BatchGrantPermissionsCommand(args);
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
    LakeFormation.prototype.batchRevokePermissions = function (args, optionsOrCb, cb) {
        var command = new BatchRevokePermissionsCommand(args);
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
    LakeFormation.prototype.createLFTag = function (args, optionsOrCb, cb) {
        var command = new CreateLFTagCommand(args);
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
    LakeFormation.prototype.deleteLFTag = function (args, optionsOrCb, cb) {
        var command = new DeleteLFTagCommand(args);
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
    LakeFormation.prototype.deregisterResource = function (args, optionsOrCb, cb) {
        var command = new DeregisterResourceCommand(args);
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
    LakeFormation.prototype.describeResource = function (args, optionsOrCb, cb) {
        var command = new DescribeResourceCommand(args);
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
    LakeFormation.prototype.getDataLakeSettings = function (args, optionsOrCb, cb) {
        var command = new GetDataLakeSettingsCommand(args);
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
    LakeFormation.prototype.getEffectivePermissionsForPath = function (args, optionsOrCb, cb) {
        var command = new GetEffectivePermissionsForPathCommand(args);
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
    LakeFormation.prototype.getLFTag = function (args, optionsOrCb, cb) {
        var command = new GetLFTagCommand(args);
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
    LakeFormation.prototype.getResourceLFTags = function (args, optionsOrCb, cb) {
        var command = new GetResourceLFTagsCommand(args);
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
    LakeFormation.prototype.grantPermissions = function (args, optionsOrCb, cb) {
        var command = new GrantPermissionsCommand(args);
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
    LakeFormation.prototype.listLFTags = function (args, optionsOrCb, cb) {
        var command = new ListLFTagsCommand(args);
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
    LakeFormation.prototype.listPermissions = function (args, optionsOrCb, cb) {
        var command = new ListPermissionsCommand(args);
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
    LakeFormation.prototype.listResources = function (args, optionsOrCb, cb) {
        var command = new ListResourcesCommand(args);
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
    LakeFormation.prototype.putDataLakeSettings = function (args, optionsOrCb, cb) {
        var command = new PutDataLakeSettingsCommand(args);
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
    LakeFormation.prototype.registerResource = function (args, optionsOrCb, cb) {
        var command = new RegisterResourceCommand(args);
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
    LakeFormation.prototype.removeLFTagsFromResource = function (args, optionsOrCb, cb) {
        var command = new RemoveLFTagsFromResourceCommand(args);
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
    LakeFormation.prototype.revokePermissions = function (args, optionsOrCb, cb) {
        var command = new RevokePermissionsCommand(args);
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
    LakeFormation.prototype.searchDatabasesByLFTags = function (args, optionsOrCb, cb) {
        var command = new SearchDatabasesByLFTagsCommand(args);
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
    LakeFormation.prototype.searchTablesByLFTags = function (args, optionsOrCb, cb) {
        var command = new SearchTablesByLFTagsCommand(args);
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
    LakeFormation.prototype.updateLFTag = function (args, optionsOrCb, cb) {
        var command = new UpdateLFTagCommand(args);
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
    LakeFormation.prototype.updateResource = function (args, optionsOrCb, cb) {
        var command = new UpdateResourceCommand(args);
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
    return LakeFormation;
}(LakeFormationClient));
export { LakeFormation };
//# sourceMappingURL=LakeFormation.js.map