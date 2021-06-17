import { __extends } from "tslib";
import { WorkSpacesClient } from "./WorkSpacesClient";
import { AssociateConnectionAliasCommand, } from "./commands/AssociateConnectionAliasCommand";
import { AssociateIpGroupsCommand, } from "./commands/AssociateIpGroupsCommand";
import { AuthorizeIpRulesCommand, } from "./commands/AuthorizeIpRulesCommand";
import { CopyWorkspaceImageCommand, } from "./commands/CopyWorkspaceImageCommand";
import { CreateConnectionAliasCommand, } from "./commands/CreateConnectionAliasCommand";
import { CreateIpGroupCommand, } from "./commands/CreateIpGroupCommand";
import { CreateTagsCommand } from "./commands/CreateTagsCommand";
import { CreateWorkspaceBundleCommand, } from "./commands/CreateWorkspaceBundleCommand";
import { CreateWorkspacesCommand, } from "./commands/CreateWorkspacesCommand";
import { DeleteConnectionAliasCommand, } from "./commands/DeleteConnectionAliasCommand";
import { DeleteIpGroupCommand, } from "./commands/DeleteIpGroupCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteWorkspaceBundleCommand, } from "./commands/DeleteWorkspaceBundleCommand";
import { DeleteWorkspaceImageCommand, } from "./commands/DeleteWorkspaceImageCommand";
import { DeregisterWorkspaceDirectoryCommand, } from "./commands/DeregisterWorkspaceDirectoryCommand";
import { DescribeAccountCommand, } from "./commands/DescribeAccountCommand";
import { DescribeAccountModificationsCommand, } from "./commands/DescribeAccountModificationsCommand";
import { DescribeClientPropertiesCommand, } from "./commands/DescribeClientPropertiesCommand";
import { DescribeConnectionAliasPermissionsCommand, } from "./commands/DescribeConnectionAliasPermissionsCommand";
import { DescribeConnectionAliasesCommand, } from "./commands/DescribeConnectionAliasesCommand";
import { DescribeIpGroupsCommand, } from "./commands/DescribeIpGroupsCommand";
import { DescribeTagsCommand, } from "./commands/DescribeTagsCommand";
import { DescribeWorkspaceBundlesCommand, } from "./commands/DescribeWorkspaceBundlesCommand";
import { DescribeWorkspaceDirectoriesCommand, } from "./commands/DescribeWorkspaceDirectoriesCommand";
import { DescribeWorkspaceImagePermissionsCommand, } from "./commands/DescribeWorkspaceImagePermissionsCommand";
import { DescribeWorkspaceImagesCommand, } from "./commands/DescribeWorkspaceImagesCommand";
import { DescribeWorkspaceSnapshotsCommand, } from "./commands/DescribeWorkspaceSnapshotsCommand";
import { DescribeWorkspacesCommand, } from "./commands/DescribeWorkspacesCommand";
import { DescribeWorkspacesConnectionStatusCommand, } from "./commands/DescribeWorkspacesConnectionStatusCommand";
import { DisassociateConnectionAliasCommand, } from "./commands/DisassociateConnectionAliasCommand";
import { DisassociateIpGroupsCommand, } from "./commands/DisassociateIpGroupsCommand";
import { ImportWorkspaceImageCommand, } from "./commands/ImportWorkspaceImageCommand";
import { ListAvailableManagementCidrRangesCommand, } from "./commands/ListAvailableManagementCidrRangesCommand";
import { MigrateWorkspaceCommand, } from "./commands/MigrateWorkspaceCommand";
import { ModifyAccountCommand, } from "./commands/ModifyAccountCommand";
import { ModifyClientPropertiesCommand, } from "./commands/ModifyClientPropertiesCommand";
import { ModifySelfservicePermissionsCommand, } from "./commands/ModifySelfservicePermissionsCommand";
import { ModifyWorkspaceAccessPropertiesCommand, } from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import { ModifyWorkspaceCreationPropertiesCommand, } from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import { ModifyWorkspacePropertiesCommand, } from "./commands/ModifyWorkspacePropertiesCommand";
import { ModifyWorkspaceStateCommand, } from "./commands/ModifyWorkspaceStateCommand";
import { RebootWorkspacesCommand, } from "./commands/RebootWorkspacesCommand";
import { RebuildWorkspacesCommand, } from "./commands/RebuildWorkspacesCommand";
import { RegisterWorkspaceDirectoryCommand, } from "./commands/RegisterWorkspaceDirectoryCommand";
import { RestoreWorkspaceCommand, } from "./commands/RestoreWorkspaceCommand";
import { RevokeIpRulesCommand, } from "./commands/RevokeIpRulesCommand";
import { StartWorkspacesCommand, } from "./commands/StartWorkspacesCommand";
import { StopWorkspacesCommand, } from "./commands/StopWorkspacesCommand";
import { TerminateWorkspacesCommand, } from "./commands/TerminateWorkspacesCommand";
import { UpdateConnectionAliasPermissionCommand, } from "./commands/UpdateConnectionAliasPermissionCommand";
import { UpdateRulesOfIpGroupCommand, } from "./commands/UpdateRulesOfIpGroupCommand";
import { UpdateWorkspaceBundleCommand, } from "./commands/UpdateWorkspaceBundleCommand";
import { UpdateWorkspaceImagePermissionCommand, } from "./commands/UpdateWorkspaceImagePermissionCommand";
/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 */
var WorkSpaces = /** @class */ (function (_super) {
    __extends(WorkSpaces, _super);
    function WorkSpaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkSpaces.prototype.associateConnectionAlias = function (args, optionsOrCb, cb) {
        var command = new AssociateConnectionAliasCommand(args);
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
    WorkSpaces.prototype.associateIpGroups = function (args, optionsOrCb, cb) {
        var command = new AssociateIpGroupsCommand(args);
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
    WorkSpaces.prototype.authorizeIpRules = function (args, optionsOrCb, cb) {
        var command = new AuthorizeIpRulesCommand(args);
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
    WorkSpaces.prototype.copyWorkspaceImage = function (args, optionsOrCb, cb) {
        var command = new CopyWorkspaceImageCommand(args);
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
    WorkSpaces.prototype.createConnectionAlias = function (args, optionsOrCb, cb) {
        var command = new CreateConnectionAliasCommand(args);
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
    WorkSpaces.prototype.createIpGroup = function (args, optionsOrCb, cb) {
        var command = new CreateIpGroupCommand(args);
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
    WorkSpaces.prototype.createTags = function (args, optionsOrCb, cb) {
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
    WorkSpaces.prototype.createWorkspaceBundle = function (args, optionsOrCb, cb) {
        var command = new CreateWorkspaceBundleCommand(args);
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
    WorkSpaces.prototype.createWorkspaces = function (args, optionsOrCb, cb) {
        var command = new CreateWorkspacesCommand(args);
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
    WorkSpaces.prototype.deleteConnectionAlias = function (args, optionsOrCb, cb) {
        var command = new DeleteConnectionAliasCommand(args);
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
    WorkSpaces.prototype.deleteIpGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteIpGroupCommand(args);
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
    WorkSpaces.prototype.deleteTags = function (args, optionsOrCb, cb) {
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
    WorkSpaces.prototype.deleteWorkspaceBundle = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkspaceBundleCommand(args);
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
    WorkSpaces.prototype.deleteWorkspaceImage = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkspaceImageCommand(args);
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
    WorkSpaces.prototype.deregisterWorkspaceDirectory = function (args, optionsOrCb, cb) {
        var command = new DeregisterWorkspaceDirectoryCommand(args);
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
    WorkSpaces.prototype.describeAccount = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountCommand(args);
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
    WorkSpaces.prototype.describeAccountModifications = function (args, optionsOrCb, cb) {
        var command = new DescribeAccountModificationsCommand(args);
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
    WorkSpaces.prototype.describeClientProperties = function (args, optionsOrCb, cb) {
        var command = new DescribeClientPropertiesCommand(args);
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
    WorkSpaces.prototype.describeConnectionAliases = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionAliasesCommand(args);
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
    WorkSpaces.prototype.describeConnectionAliasPermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeConnectionAliasPermissionsCommand(args);
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
    WorkSpaces.prototype.describeIpGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeIpGroupsCommand(args);
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
    WorkSpaces.prototype.describeTags = function (args, optionsOrCb, cb) {
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
    WorkSpaces.prototype.describeWorkspaceBundles = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspaceBundlesCommand(args);
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
    WorkSpaces.prototype.describeWorkspaceDirectories = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspaceDirectoriesCommand(args);
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
    WorkSpaces.prototype.describeWorkspaceImagePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspaceImagePermissionsCommand(args);
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
    WorkSpaces.prototype.describeWorkspaceImages = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspaceImagesCommand(args);
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
    WorkSpaces.prototype.describeWorkspaces = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspacesCommand(args);
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
    WorkSpaces.prototype.describeWorkspacesConnectionStatus = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspacesConnectionStatusCommand(args);
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
    WorkSpaces.prototype.describeWorkspaceSnapshots = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkspaceSnapshotsCommand(args);
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
    WorkSpaces.prototype.disassociateConnectionAlias = function (args, optionsOrCb, cb) {
        var command = new DisassociateConnectionAliasCommand(args);
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
    WorkSpaces.prototype.disassociateIpGroups = function (args, optionsOrCb, cb) {
        var command = new DisassociateIpGroupsCommand(args);
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
    WorkSpaces.prototype.importWorkspaceImage = function (args, optionsOrCb, cb) {
        var command = new ImportWorkspaceImageCommand(args);
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
    WorkSpaces.prototype.listAvailableManagementCidrRanges = function (args, optionsOrCb, cb) {
        var command = new ListAvailableManagementCidrRangesCommand(args);
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
    WorkSpaces.prototype.migrateWorkspace = function (args, optionsOrCb, cb) {
        var command = new MigrateWorkspaceCommand(args);
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
    WorkSpaces.prototype.modifyAccount = function (args, optionsOrCb, cb) {
        var command = new ModifyAccountCommand(args);
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
    WorkSpaces.prototype.modifyClientProperties = function (args, optionsOrCb, cb) {
        var command = new ModifyClientPropertiesCommand(args);
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
    WorkSpaces.prototype.modifySelfservicePermissions = function (args, optionsOrCb, cb) {
        var command = new ModifySelfservicePermissionsCommand(args);
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
    WorkSpaces.prototype.modifyWorkspaceAccessProperties = function (args, optionsOrCb, cb) {
        var command = new ModifyWorkspaceAccessPropertiesCommand(args);
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
    WorkSpaces.prototype.modifyWorkspaceCreationProperties = function (args, optionsOrCb, cb) {
        var command = new ModifyWorkspaceCreationPropertiesCommand(args);
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
    WorkSpaces.prototype.modifyWorkspaceProperties = function (args, optionsOrCb, cb) {
        var command = new ModifyWorkspacePropertiesCommand(args);
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
    WorkSpaces.prototype.modifyWorkspaceState = function (args, optionsOrCb, cb) {
        var command = new ModifyWorkspaceStateCommand(args);
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
    WorkSpaces.prototype.rebootWorkspaces = function (args, optionsOrCb, cb) {
        var command = new RebootWorkspacesCommand(args);
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
    WorkSpaces.prototype.rebuildWorkspaces = function (args, optionsOrCb, cb) {
        var command = new RebuildWorkspacesCommand(args);
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
    WorkSpaces.prototype.registerWorkspaceDirectory = function (args, optionsOrCb, cb) {
        var command = new RegisterWorkspaceDirectoryCommand(args);
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
    WorkSpaces.prototype.restoreWorkspace = function (args, optionsOrCb, cb) {
        var command = new RestoreWorkspaceCommand(args);
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
    WorkSpaces.prototype.revokeIpRules = function (args, optionsOrCb, cb) {
        var command = new RevokeIpRulesCommand(args);
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
    WorkSpaces.prototype.startWorkspaces = function (args, optionsOrCb, cb) {
        var command = new StartWorkspacesCommand(args);
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
    WorkSpaces.prototype.stopWorkspaces = function (args, optionsOrCb, cb) {
        var command = new StopWorkspacesCommand(args);
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
    WorkSpaces.prototype.terminateWorkspaces = function (args, optionsOrCb, cb) {
        var command = new TerminateWorkspacesCommand(args);
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
    WorkSpaces.prototype.updateConnectionAliasPermission = function (args, optionsOrCb, cb) {
        var command = new UpdateConnectionAliasPermissionCommand(args);
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
    WorkSpaces.prototype.updateRulesOfIpGroup = function (args, optionsOrCb, cb) {
        var command = new UpdateRulesOfIpGroupCommand(args);
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
    WorkSpaces.prototype.updateWorkspaceBundle = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkspaceBundleCommand(args);
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
    WorkSpaces.prototype.updateWorkspaceImagePermission = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkspaceImagePermissionCommand(args);
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
    return WorkSpaces;
}(WorkSpacesClient));
export { WorkSpaces };
//# sourceMappingURL=WorkSpaces.js.map