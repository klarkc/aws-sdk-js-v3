import { __extends } from "tslib";
import { FSxClient } from "./FSxClient";
import { AssociateFileSystemAliasesCommand, } from "./commands/AssociateFileSystemAliasesCommand";
import { CancelDataRepositoryTaskCommand, } from "./commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommand } from "./commands/CopyBackupCommand";
import { CreateBackupCommand, } from "./commands/CreateBackupCommand";
import { CreateDataRepositoryTaskCommand, } from "./commands/CreateDataRepositoryTaskCommand";
import { CreateFileSystemCommand, } from "./commands/CreateFileSystemCommand";
import { CreateFileSystemFromBackupCommand, } from "./commands/CreateFileSystemFromBackupCommand";
import { DeleteBackupCommand, } from "./commands/DeleteBackupCommand";
import { DeleteFileSystemCommand, } from "./commands/DeleteFileSystemCommand";
import { DescribeBackupsCommand, } from "./commands/DescribeBackupsCommand";
import { DescribeDataRepositoryTasksCommand, } from "./commands/DescribeDataRepositoryTasksCommand";
import { DescribeFileSystemAliasesCommand, } from "./commands/DescribeFileSystemAliasesCommand";
import { DescribeFileSystemsCommand, } from "./commands/DescribeFileSystemsCommand";
import { DisassociateFileSystemAliasesCommand, } from "./commands/DisassociateFileSystemAliasesCommand";
import { ListTagsForResourceCommand, } from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand, } from "./commands/UntagResourceCommand";
import { UpdateFileSystemCommand, } from "./commands/UpdateFileSystemCommand";
/**
 * <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 */
var FSx = /** @class */ (function (_super) {
    __extends(FSx, _super);
    function FSx() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FSx.prototype.associateFileSystemAliases = function (args, optionsOrCb, cb) {
        var command = new AssociateFileSystemAliasesCommand(args);
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
    FSx.prototype.cancelDataRepositoryTask = function (args, optionsOrCb, cb) {
        var command = new CancelDataRepositoryTaskCommand(args);
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
    FSx.prototype.copyBackup = function (args, optionsOrCb, cb) {
        var command = new CopyBackupCommand(args);
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
    FSx.prototype.createBackup = function (args, optionsOrCb, cb) {
        var command = new CreateBackupCommand(args);
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
    FSx.prototype.createDataRepositoryTask = function (args, optionsOrCb, cb) {
        var command = new CreateDataRepositoryTaskCommand(args);
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
    FSx.prototype.createFileSystem = function (args, optionsOrCb, cb) {
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
    FSx.prototype.createFileSystemFromBackup = function (args, optionsOrCb, cb) {
        var command = new CreateFileSystemFromBackupCommand(args);
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
    FSx.prototype.deleteBackup = function (args, optionsOrCb, cb) {
        var command = new DeleteBackupCommand(args);
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
    FSx.prototype.deleteFileSystem = function (args, optionsOrCb, cb) {
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
    FSx.prototype.describeBackups = function (args, optionsOrCb, cb) {
        var command = new DescribeBackupsCommand(args);
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
    FSx.prototype.describeDataRepositoryTasks = function (args, optionsOrCb, cb) {
        var command = new DescribeDataRepositoryTasksCommand(args);
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
    FSx.prototype.describeFileSystemAliases = function (args, optionsOrCb, cb) {
        var command = new DescribeFileSystemAliasesCommand(args);
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
    FSx.prototype.describeFileSystems = function (args, optionsOrCb, cb) {
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
    FSx.prototype.disassociateFileSystemAliases = function (args, optionsOrCb, cb) {
        var command = new DisassociateFileSystemAliasesCommand(args);
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
    FSx.prototype.listTagsForResource = function (args, optionsOrCb, cb) {
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
    FSx.prototype.tagResource = function (args, optionsOrCb, cb) {
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
    FSx.prototype.untagResource = function (args, optionsOrCb, cb) {
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
    FSx.prototype.updateFileSystem = function (args, optionsOrCb, cb) {
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
    return FSx;
}(FSxClient));
export { FSx };
//# sourceMappingURL=FSx.js.map