import { __extends } from "tslib";
import { EFSClient } from "./EFSClient";
import { CreateAccessPointCommand, } from "./commands/CreateAccessPointCommand";
import { CreateFileSystemCommand, } from "./commands/CreateFileSystemCommand";
import { CreateMountTargetCommand, } from "./commands/CreateMountTargetCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { DeleteAccessPointCommand, } from "./commands/DeleteAccessPointCommand";
import { DeleteFileSystemCommand, } from "./commands/DeleteFileSystemCommand";
import { DeleteFileSystemPolicyCommand, } from "./commands/DeleteFileSystemPolicyCommand";
import { DeleteMountTargetCommand, } from "./commands/DeleteMountTargetCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DescribeAccessPointsCommand, } from "./commands/DescribeAccessPointsCommand";
import { DescribeAccountPreferencesCommand, } from "./commands/DescribeAccountPreferencesCommand";
import { DescribeBackupPolicyCommand, } from "./commands/DescribeBackupPolicyCommand";
import { DescribeFileSystemPolicyCommand, } from "./commands/DescribeFileSystemPolicyCommand";
import { DescribeFileSystemsCommand, } from "./commands/DescribeFileSystemsCommand";
import { DescribeLifecycleConfigurationCommand, } from "./commands/DescribeLifecycleConfigurationCommand";
import { DescribeMountTargetSecurityGroupsCommand, } from "./commands/DescribeMountTargetSecurityGroupsCommand";
import { DescribeMountTargetsCommand, } from "./commands/DescribeMountTargetsCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { ModifyMountTargetSecurityGroupsCommand, } from "./commands/ModifyMountTargetSecurityGroupsCommand";
import { PutAccountPreferencesCommand, } from "./commands/PutAccountPreferencesCommand";
import { PutBackupPolicyCommand, } from "./commands/PutBackupPolicyCommand";
import { PutFileSystemPolicyCommand, } from "./commands/PutFileSystemPolicyCommand";
import { PutLifecycleConfigurationCommand, } from "./commands/PutLifecycleConfigurationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateFileSystemCommand, } from "./commands/UpdateFileSystemCommand";
/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use
 *       with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic,
 *       growing and shrinking automatically as you add and remove files, so your applications have the
 *       storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>
 */
var EFS = /** @class */ (function (_super) {
    __extends(EFS, _super);
    function EFS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EFS.prototype.createAccessPoint = function (args, optionsOrCb, cb) {
        var command = new CreateAccessPointCommand(args);
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
    EFS.prototype.createFileSystem = function (args, optionsOrCb, cb) {
        var command = new CreateFileSystemCommand(args);
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
    EFS.prototype.createMountTarget = function (args, optionsOrCb, cb) {
        var command = new CreateMountTargetCommand(args);
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
    EFS.prototype.createTags = function (args, optionsOrCb, cb) {
        var command = new CreateTagsCommand(args);
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
    EFS.prototype.deleteAccessPoint = function (args, optionsOrCb, cb) {
        var command = new DeleteAccessPointCommand(args);
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
    EFS.prototype.deleteFileSystem = function (args, optionsOrCb, cb) {
        var command = new DeleteFileSystemCommand(args);
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
    EFS.prototype.deleteFileSystemPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteFileSystemPolicyCommand(args);
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
    EFS.prototype.deleteMountTarget = function (args, optionsOrCb, cb) {
        var command = new DeleteMountTargetCommand(args);
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
    EFS.prototype.deleteTags = function (args, optionsOrCb, cb) {
        var command = new DeleteTagsCommand(args);
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
    EFS.prototype.describeAccessPoints = function (args, optionsOrCb, cb) {
        var command = new DescribeAccessPointsCommand(args);
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
    EFS.prototype.describeAccountPreferences = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountPreferencesCommand(args);
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
    EFS.prototype.describeBackupPolicy = function (args, optionsOrCb, cb) {
        var command = new DescribeBackupPolicyCommand(args);
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
    EFS.prototype.describeFileSystemPolicy = function (args, optionsOrCb, cb) {
        var command = new DescribeFileSystemPolicyCommand(args);
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
    EFS.prototype.describeFileSystems = function (args, optionsOrCb, cb) {
        var command = new DescribeFileSystemsCommand(args);
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
    EFS.prototype.describeLifecycleConfiguration = function (args, optionsOrCb, cb) {
        var command = new DescribeLifecycleConfigurationCommand(args);
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
    EFS.prototype.describeMountTargets = function (args, optionsOrCb, cb) {
        var command = new DescribeMountTargetsCommand(args);
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
    EFS.prototype.describeMountTargetSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeMountTargetSecurityGroupsCommand(args);
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
    EFS.prototype.describeTags = function (args, optionsOrCb, cb) {
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
    EFS.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    EFS.prototype.modifyMountTargetSecurityGroups = function (args, optionsOrCb, cb) {
        var command = new ModifyMountTargetSecurityGroupsCommand(args);
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
    EFS.prototype.putAccountPreferences = function (args, optionsOrCb, cb) {
        var command = new PutAccountPreferencesCommand(args);
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
    EFS.prototype.putBackupPolicy = function (args, optionsOrCb, cb) {
        var command = new PutBackupPolicyCommand(args);
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
    EFS.prototype.putFileSystemPolicy = function (args, optionsOrCb, cb) {
        var command = new PutFileSystemPolicyCommand(args);
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
    EFS.prototype.putLifecycleConfiguration = function (args, optionsOrCb, cb) {
        var command = new PutLifecycleConfigurationCommand(args);
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
    EFS.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    EFS.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    EFS.prototype.updateFileSystem = function (args, optionsOrCb, cb) {
        var command = new UpdateFileSystemCommand(args);
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
    return EFS;
}(EFSClient));
export { EFS };
//# sourceMappingURL=EFS.js.map