import { __extends } from "tslib";
import { WorkDocsClient } from "./WorkDocsClient";
import { AbortDocumentVersionUploadCommand, } from "./commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommand, } from "./commands/ActivateUserCommand";
import { AddResourcePermissionsCommand, } from "./commands/AddResourcePermissionsCommand";
import { CreateCommentCommand, } from "./commands/CreateCommentCommand";
import { CreateCustomMetadataCommand, } from "./commands/CreateCustomMetadataCommand";
import { CreateFolderCommand, } from "./commands/CreateFolderCommand";
import { CreateLabelsCommand, } from "./commands/CreateLabelsCommand";
import { CreateNotificationSubscriptionCommand, } from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { DeactivateUserCommand, } from "./commands/DeactivateUserCommand";
import { DeleteCommentCommand, } from "./commands/DeleteCommentCommand";
import { DeleteCustomMetadataCommand, } from "./commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommand, } from "./commands/DeleteDocumentCommand";
import { DeleteFolderCommand, } from "./commands/DeleteFolderCommand";
import { DeleteFolderContentsCommand, } from "./commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommand, } from "./commands/DeleteLabelsCommand";
import { DeleteNotificationSubscriptionCommand, } from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DescribeActivitiesCommand, } from "./commands/DescribeActivitiesCommand";
import { DescribeCommentsCommand, } from "./commands/DescribeCommentsCommand";
import { DescribeDocumentVersionsCommand, } from "./commands/DescribeDocumentVersionsCommand";
import { DescribeFolderContentsCommand, } from "./commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommand, } from "./commands/DescribeGroupsCommand";
import { DescribeNotificationSubscriptionsCommand, } from "./commands/DescribeNotificationSubscriptionsCommand";
import { DescribeResourcePermissionsCommand, } from "./commands/DescribeResourcePermissionsCommand";
import { DescribeRootFoldersCommand, } from "./commands/DescribeRootFoldersCommand";
import { DescribeUsersCommand, } from "./commands/DescribeUsersCommand";
import { GetCurrentUserCommand, } from "./commands/GetCurrentUserCommand";
import { GetDocumentCommand } from "./commands/GetDocumentCommand";
import { GetDocumentPathCommand, } from "./commands/GetDocumentPathCommand";
import { GetDocumentVersionCommand, } from "./commands/GetDocumentVersionCommand";
import { GetFolderCommand } from "./commands/GetFolderCommand";
import { GetFolderPathCommand, } from "./commands/GetFolderPathCommand";
import { GetResourcesCommand, } from "./commands/GetResourcesCommand";
import { InitiateDocumentVersionUploadCommand, } from "./commands/InitiateDocumentVersionUploadCommand";
import { RemoveAllResourcePermissionsCommand, } from "./commands/RemoveAllResourcePermissionsCommand";
import { RemoveResourcePermissionCommand, } from "./commands/RemoveResourcePermissionCommand";
import { UpdateDocumentCommand, } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentVersionCommand, } from "./commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommand, } from "./commands/UpdateFolderCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";
/**
 * <p>The WorkDocs API is designed for the following use cases:</p>
 *         <ul>
 *             <li>
 *                 <p>File Migration: File migration applications are supported for users who
 *                     want to migrate their files from an on-premises or off-premises file system or
 *                     service. Users can insert files into a user directory structure, as well as
 *                     allow for basic metadata changes, such as modifications to the permissions of
 *                     files.</p>
 *             </li>
 *             <li>
 *                 <p>Security: Support security applications are supported for users who have
 *                     additional security needs, such as antivirus or data loss prevention. The API
 *                     actions, along with AWS CloudTrail, allow these applications to detect when
 *                     changes occur in Amazon WorkDocs. Then, the application can take the necessary
 *                     actions and replace the target file. If the target file violates the policy, the
 *                     application can also choose to email the user.</p>
 *             </li>
 *             <li>
 *                 <p>eDiscovery/Analytics: General administrative applications are supported,
 *                     such as eDiscovery and analytics. These applications can choose to mimic or
 *                     record the actions in an Amazon WorkDocs site, along with AWS CloudTrail, to
 *                     replicate data for eDiscovery, backup, or analytical applications.</p>
 *             </li>
 *          </ul>
 *         <p>All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed.
 *             They not only require the use of the AWS SDK, but also allow for the exclusive use of
 *             IAM users and roles to help facilitate access, trust, and permission policies. By
 *             creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM
 *             user gains full administrative visibility into the entire Amazon WorkDocs site (or as
 *             set in the IAM policy). This includes, but is not limited to, the ability to modify file
 *             permissions and upload any file to any user. This allows developers to perform the three
 *             use cases above, as well as give users the ability to grant access on a selective basis
 *             using the IAM model.</p>
 */
var WorkDocs = /** @class */ (function (_super) {
    __extends(WorkDocs, _super);
    function WorkDocs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkDocs.prototype.abortDocumentVersionUpload = function (args, optionsOrCb, cb) {
        var command = new AbortDocumentVersionUploadCommand(args);
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
    WorkDocs.prototype.activateUser = function (args, optionsOrCb, cb) {
        var command = new ActivateUserCommand(args);
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
    WorkDocs.prototype.addResourcePermissions = function (args, optionsOrCb, cb) {
        var command = new AddResourcePermissionsCommand(args);
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
    WorkDocs.prototype.createComment = function (args, optionsOrCb, cb) {
        var command = new CreateCommentCommand(args);
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
    WorkDocs.prototype.createCustomMetadata = function (args, optionsOrCb, cb) {
        var command = new CreateCustomMetadataCommand(args);
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
    WorkDocs.prototype.createFolder = function (args, optionsOrCb, cb) {
        var command = new CreateFolderCommand(args);
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
    WorkDocs.prototype.createLabels = function (args, optionsOrCb, cb) {
        var command = new CreateLabelsCommand(args);
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
    WorkDocs.prototype.createNotificationSubscription = function (args, optionsOrCb, cb) {
        var command = new CreateNotificationSubscriptionCommand(args);
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
    WorkDocs.prototype.createUser = function (args, optionsOrCb, cb) {
        var command = new CreateUserCommand(args);
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
    WorkDocs.prototype.deactivateUser = function (args, optionsOrCb, cb) {
        var command = new DeactivateUserCommand(args);
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
    WorkDocs.prototype.deleteComment = function (args, optionsOrCb, cb) {
        var command = new DeleteCommentCommand(args);
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
    WorkDocs.prototype.deleteCustomMetadata = function (args, optionsOrCb, cb) {
        var command = new DeleteCustomMetadataCommand(args);
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
    WorkDocs.prototype.deleteDocument = function (args, optionsOrCb, cb) {
        var command = new DeleteDocumentCommand(args);
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
    WorkDocs.prototype.deleteFolder = function (args, optionsOrCb, cb) {
        var command = new DeleteFolderCommand(args);
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
    WorkDocs.prototype.deleteFolderContents = function (args, optionsOrCb, cb) {
        var command = new DeleteFolderContentsCommand(args);
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
    WorkDocs.prototype.deleteLabels = function (args, optionsOrCb, cb) {
        var command = new DeleteLabelsCommand(args);
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
    WorkDocs.prototype.deleteNotificationSubscription = function (args, optionsOrCb, cb) {
        var command = new DeleteNotificationSubscriptionCommand(args);
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
    WorkDocs.prototype.deleteUser = function (args, optionsOrCb, cb) {
        var command = new DeleteUserCommand(args);
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
    WorkDocs.prototype.describeActivities = function (args, optionsOrCb, cb) {
        var command = new DescribeActivitiesCommand(args);
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
    WorkDocs.prototype.describeComments = function (args, optionsOrCb, cb) {
        var command = new DescribeCommentsCommand(args);
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
    WorkDocs.prototype.describeDocumentVersions = function (args, optionsOrCb, cb) {
        var command = new DescribeDocumentVersionsCommand(args);
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
    WorkDocs.prototype.describeFolderContents = function (args, optionsOrCb, cb) {
        var command = new DescribeFolderContentsCommand(args);
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
    WorkDocs.prototype.describeGroups = function (args, optionsOrCb, cb) {
        var command = new DescribeGroupsCommand(args);
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
    WorkDocs.prototype.describeNotificationSubscriptions = function (args, optionsOrCb, cb) {
        var command = new DescribeNotificationSubscriptionsCommand(args);
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
    WorkDocs.prototype.describeResourcePermissions = function (args, optionsOrCb, cb) {
        var command = new DescribeResourcePermissionsCommand(args);
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
    WorkDocs.prototype.describeRootFolders = function (args, optionsOrCb, cb) {
        var command = new DescribeRootFoldersCommand(args);
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
    WorkDocs.prototype.describeUsers = function (args, optionsOrCb, cb) {
        var command = new DescribeUsersCommand(args);
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
    WorkDocs.prototype.getCurrentUser = function (args, optionsOrCb, cb) {
        var command = new GetCurrentUserCommand(args);
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
    WorkDocs.prototype.getDocument = function (args, optionsOrCb, cb) {
        var command = new GetDocumentCommand(args);
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
    WorkDocs.prototype.getDocumentPath = function (args, optionsOrCb, cb) {
        var command = new GetDocumentPathCommand(args);
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
    WorkDocs.prototype.getDocumentVersion = function (args, optionsOrCb, cb) {
        var command = new GetDocumentVersionCommand(args);
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
    WorkDocs.prototype.getFolder = function (args, optionsOrCb, cb) {
        var command = new GetFolderCommand(args);
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
    WorkDocs.prototype.getFolderPath = function (args, optionsOrCb, cb) {
        var command = new GetFolderPathCommand(args);
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
    WorkDocs.prototype.getResources = function (args, optionsOrCb, cb) {
        var command = new GetResourcesCommand(args);
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
    WorkDocs.prototype.initiateDocumentVersionUpload = function (args, optionsOrCb, cb) {
        var command = new InitiateDocumentVersionUploadCommand(args);
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
    WorkDocs.prototype.removeAllResourcePermissions = function (args, optionsOrCb, cb) {
        var command = new RemoveAllResourcePermissionsCommand(args);
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
    WorkDocs.prototype.removeResourcePermission = function (args, optionsOrCb, cb) {
        var command = new RemoveResourcePermissionCommand(args);
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
    WorkDocs.prototype.updateDocument = function (args, optionsOrCb, cb) {
        var command = new UpdateDocumentCommand(args);
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
    WorkDocs.prototype.updateDocumentVersion = function (args, optionsOrCb, cb) {
        var command = new UpdateDocumentVersionCommand(args);
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
    WorkDocs.prototype.updateFolder = function (args, optionsOrCb, cb) {
        var command = new UpdateFolderCommand(args);
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
    WorkDocs.prototype.updateUser = function (args, optionsOrCb, cb) {
        var command = new UpdateUserCommand(args);
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
    return WorkDocs;
}(WorkDocsClient));
export { WorkDocs };
//# sourceMappingURL=WorkDocs.js.map