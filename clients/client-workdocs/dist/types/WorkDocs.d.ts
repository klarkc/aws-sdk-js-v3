import { WorkDocsClient } from "./WorkDocsClient";
import { AbortDocumentVersionUploadCommandInput, AbortDocumentVersionUploadCommandOutput } from "./commands/AbortDocumentVersionUploadCommand";
import { ActivateUserCommandInput, ActivateUserCommandOutput } from "./commands/ActivateUserCommand";
import { AddResourcePermissionsCommandInput, AddResourcePermissionsCommandOutput } from "./commands/AddResourcePermissionsCommand";
import { CreateCommentCommandInput, CreateCommentCommandOutput } from "./commands/CreateCommentCommand";
import { CreateCustomMetadataCommandInput, CreateCustomMetadataCommandOutput } from "./commands/CreateCustomMetadataCommand";
import { CreateFolderCommandInput, CreateFolderCommandOutput } from "./commands/CreateFolderCommand";
import { CreateLabelsCommandInput, CreateLabelsCommandOutput } from "./commands/CreateLabelsCommand";
import { CreateNotificationSubscriptionCommandInput, CreateNotificationSubscriptionCommandOutput } from "./commands/CreateNotificationSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeactivateUserCommandInput, DeactivateUserCommandOutput } from "./commands/DeactivateUserCommand";
import { DeleteCommentCommandInput, DeleteCommentCommandOutput } from "./commands/DeleteCommentCommand";
import { DeleteCustomMetadataCommandInput, DeleteCustomMetadataCommandOutput } from "./commands/DeleteCustomMetadataCommand";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput } from "./commands/DeleteDocumentCommand";
import { DeleteFolderCommandInput, DeleteFolderCommandOutput } from "./commands/DeleteFolderCommand";
import { DeleteFolderContentsCommandInput, DeleteFolderContentsCommandOutput } from "./commands/DeleteFolderContentsCommand";
import { DeleteLabelsCommandInput, DeleteLabelsCommandOutput } from "./commands/DeleteLabelsCommand";
import { DeleteNotificationSubscriptionCommandInput, DeleteNotificationSubscriptionCommandOutput } from "./commands/DeleteNotificationSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput } from "./commands/DescribeActivitiesCommand";
import { DescribeCommentsCommandInput, DescribeCommentsCommandOutput } from "./commands/DescribeCommentsCommand";
import { DescribeDocumentVersionsCommandInput, DescribeDocumentVersionsCommandOutput } from "./commands/DescribeDocumentVersionsCommand";
import { DescribeFolderContentsCommandInput, DescribeFolderContentsCommandOutput } from "./commands/DescribeFolderContentsCommand";
import { DescribeGroupsCommandInput, DescribeGroupsCommandOutput } from "./commands/DescribeGroupsCommand";
import { DescribeNotificationSubscriptionsCommandInput, DescribeNotificationSubscriptionsCommandOutput } from "./commands/DescribeNotificationSubscriptionsCommand";
import { DescribeResourcePermissionsCommandInput, DescribeResourcePermissionsCommandOutput } from "./commands/DescribeResourcePermissionsCommand";
import { DescribeRootFoldersCommandInput, DescribeRootFoldersCommandOutput } from "./commands/DescribeRootFoldersCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { GetCurrentUserCommandInput, GetCurrentUserCommandOutput } from "./commands/GetCurrentUserCommand";
import { GetDocumentCommandInput, GetDocumentCommandOutput } from "./commands/GetDocumentCommand";
import { GetDocumentPathCommandInput, GetDocumentPathCommandOutput } from "./commands/GetDocumentPathCommand";
import { GetDocumentVersionCommandInput, GetDocumentVersionCommandOutput } from "./commands/GetDocumentVersionCommand";
import { GetFolderCommandInput, GetFolderCommandOutput } from "./commands/GetFolderCommand";
import { GetFolderPathCommandInput, GetFolderPathCommandOutput } from "./commands/GetFolderPathCommand";
import { GetResourcesCommandInput, GetResourcesCommandOutput } from "./commands/GetResourcesCommand";
import { InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput } from "./commands/InitiateDocumentVersionUploadCommand";
import { RemoveAllResourcePermissionsCommandInput, RemoveAllResourcePermissionsCommandOutput } from "./commands/RemoveAllResourcePermissionsCommand";
import { RemoveResourcePermissionCommandInput, RemoveResourcePermissionCommandOutput } from "./commands/RemoveResourcePermissionCommand";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput } from "./commands/UpdateDocumentCommand";
import { UpdateDocumentVersionCommandInput, UpdateDocumentVersionCommandOutput } from "./commands/UpdateDocumentVersionCommand";
import { UpdateFolderCommandInput, UpdateFolderCommandOutput } from "./commands/UpdateFolderCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class WorkDocs extends WorkDocsClient {
    /**
     * <p>Aborts the upload of the specified document version that was previously initiated
     *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
     *             only when it no longer intends to upload the document version, or fails to do
     *             so.</p>
     */
    abortDocumentVersionUpload(args: AbortDocumentVersionUploadCommandInput, options?: __HttpHandlerOptions): Promise<AbortDocumentVersionUploadCommandOutput>;
    abortDocumentVersionUpload(args: AbortDocumentVersionUploadCommandInput, cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void): void;
    abortDocumentVersionUpload(args: AbortDocumentVersionUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AbortDocumentVersionUploadCommandOutput) => void): void;
    /**
     * <p>Activates the specified user. Only active users can access Amazon
     *             WorkDocs.</p>
     */
    activateUser(args: ActivateUserCommandInput, options?: __HttpHandlerOptions): Promise<ActivateUserCommandOutput>;
    activateUser(args: ActivateUserCommandInput, cb: (err: any, data?: ActivateUserCommandOutput) => void): void;
    activateUser(args: ActivateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ActivateUserCommandOutput) => void): void;
    /**
     * <p>Creates a set of permissions for the specified folder or document. The resource
     *             permissions are overwritten if the principals already have different
     *             permissions.</p>
     */
    addResourcePermissions(args: AddResourcePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<AddResourcePermissionsCommandOutput>;
    addResourcePermissions(args: AddResourcePermissionsCommandInput, cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void): void;
    addResourcePermissions(args: AddResourcePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddResourcePermissionsCommandOutput) => void): void;
    /**
     * <p>Adds a new comment to the specified document version.</p>
     */
    createComment(args: CreateCommentCommandInput, options?: __HttpHandlerOptions): Promise<CreateCommentCommandOutput>;
    createComment(args: CreateCommentCommandInput, cb: (err: any, data?: CreateCommentCommandOutput) => void): void;
    createComment(args: CreateCommentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCommentCommandOutput) => void): void;
    /**
     * <p>Adds one or more custom properties to the specified resource (a folder, document,
     *             or version).</p>
     */
    createCustomMetadata(args: CreateCustomMetadataCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomMetadataCommandOutput>;
    createCustomMetadata(args: CreateCustomMetadataCommandInput, cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void): void;
    createCustomMetadata(args: CreateCustomMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomMetadataCommandOutput) => void): void;
    /**
     * <p>Creates a folder with the specified name and parent folder.</p>
     */
    createFolder(args: CreateFolderCommandInput, options?: __HttpHandlerOptions): Promise<CreateFolderCommandOutput>;
    createFolder(args: CreateFolderCommandInput, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
    createFolder(args: CreateFolderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFolderCommandOutput) => void): void;
    /**
     * <p>Adds the specified list of labels to the given resource (a document or
     *             folder)</p>
     */
    createLabels(args: CreateLabelsCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelsCommandOutput>;
    createLabels(args: CreateLabelsCommandInput, cb: (err: any, data?: CreateLabelsCommandOutput) => void): void;
    createLabels(args: CreateLabelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLabelsCommandOutput) => void): void;
    /**
     * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
     *             confirmation message, and must confirm the subscription.</p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/subscribe-notifications.html">Subscribe to
     *                 Notifications</a> in the <i>Amazon WorkDocs Developer
     *             Guide</i>.</p>
     */
    createNotificationSubscription(args: CreateNotificationSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotificationSubscriptionCommandOutput>;
    createNotificationSubscription(args: CreateNotificationSubscriptionCommandInput, cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void): void;
    createNotificationSubscription(args: CreateNotificationSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotificationSubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates a user in a Simple AD or Microsoft AD directory. The status of a newly
     *             created user is "ACTIVE". New users can access Amazon WorkDocs.</p>
     */
    createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
    createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    createUser(args: CreateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
    /**
     * <p>Deactivates the specified user, which revokes the user's access to Amazon
     *             WorkDocs.</p>
     */
    deactivateUser(args: DeactivateUserCommandInput, options?: __HttpHandlerOptions): Promise<DeactivateUserCommandOutput>;
    deactivateUser(args: DeactivateUserCommandInput, cb: (err: any, data?: DeactivateUserCommandOutput) => void): void;
    deactivateUser(args: DeactivateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeactivateUserCommandOutput) => void): void;
    /**
     * <p>Deletes the specified comment from the document version.</p>
     */
    deleteComment(args: DeleteCommentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCommentCommandOutput>;
    deleteComment(args: DeleteCommentCommandInput, cb: (err: any, data?: DeleteCommentCommandOutput) => void): void;
    deleteComment(args: DeleteCommentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCommentCommandOutput) => void): void;
    /**
     * <p>Deletes custom metadata from the specified resource.</p>
     */
    deleteCustomMetadata(args: DeleteCustomMetadataCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomMetadataCommandOutput>;
    deleteCustomMetadata(args: DeleteCustomMetadataCommandInput, cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void): void;
    deleteCustomMetadata(args: DeleteCustomMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomMetadataCommandOutput) => void): void;
    /**
     * <p>Permanently deletes the specified document and its associated metadata.</p>
     */
    deleteDocument(args: DeleteDocumentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDocumentCommandOutput>;
    deleteDocument(args: DeleteDocumentCommandInput, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
    deleteDocument(args: DeleteDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDocumentCommandOutput) => void): void;
    /**
     * <p>Permanently deletes the specified folder and its contents.</p>
     */
    deleteFolder(args: DeleteFolderCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFolderCommandOutput>;
    deleteFolder(args: DeleteFolderCommandInput, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
    deleteFolder(args: DeleteFolderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFolderCommandOutput) => void): void;
    /**
     * <p>Deletes the contents of the specified folder.</p>
     */
    deleteFolderContents(args: DeleteFolderContentsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFolderContentsCommandOutput>;
    deleteFolderContents(args: DeleteFolderContentsCommandInput, cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void): void;
    deleteFolderContents(args: DeleteFolderContentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFolderContentsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified list of labels from a resource.</p>
     */
    deleteLabels(args: DeleteLabelsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLabelsCommandOutput>;
    deleteLabels(args: DeleteLabelsCommandInput, cb: (err: any, data?: DeleteLabelsCommandOutput) => void): void;
    deleteLabels(args: DeleteLabelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLabelsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified subscription from the specified organization.</p>
     */
    deleteNotificationSubscription(args: DeleteNotificationSubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotificationSubscriptionCommandOutput>;
    deleteNotificationSubscription(args: DeleteNotificationSubscriptionCommandInput, cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void): void;
    deleteNotificationSubscription(args: DeleteNotificationSubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotificationSubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified user from a Simple AD or Microsoft AD directory.</p>
     */
    deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
    deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    deleteUser(args: DeleteUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
    /**
     * <p>Describes the user activities in a specified time period.</p>
     */
    describeActivities(args: DescribeActivitiesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActivitiesCommandOutput>;
    describeActivities(args: DescribeActivitiesCommandInput, cb: (err: any, data?: DescribeActivitiesCommandOutput) => void): void;
    describeActivities(args: DescribeActivitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActivitiesCommandOutput) => void): void;
    /**
     * <p>List all the comments for the specified document version.</p>
     */
    describeComments(args: DescribeCommentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCommentsCommandOutput>;
    describeComments(args: DescribeCommentsCommandInput, cb: (err: any, data?: DescribeCommentsCommandOutput) => void): void;
    describeComments(args: DescribeCommentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCommentsCommandOutput) => void): void;
    /**
     * <p>Retrieves the document versions for the specified document.</p>
     *         <p>By default, only active versions are returned.</p>
     */
    describeDocumentVersions(args: DescribeDocumentVersionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDocumentVersionsCommandOutput>;
    describeDocumentVersions(args: DescribeDocumentVersionsCommandInput, cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void): void;
    describeDocumentVersions(args: DescribeDocumentVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDocumentVersionsCommandOutput) => void): void;
    /**
     * <p>Describes the contents of the specified folder, including its documents and
     *             subfolders.</p>
     *         <p>By default, Amazon WorkDocs returns the first 100 active document and folder
     *             metadata items. If there are more results, the response includes a marker that you can
     *             use to request the next set of results. You can also request initialized
     *             documents.</p>
     */
    describeFolderContents(args: DescribeFolderContentsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFolderContentsCommandOutput>;
    describeFolderContents(args: DescribeFolderContentsCommandInput, cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void): void;
    describeFolderContents(args: DescribeFolderContentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFolderContentsCommandOutput) => void): void;
    /**
     * <p>Describes the groups specified by the query. Groups are defined by the underlying
     *             Active Directory.</p>
     */
    describeGroups(args: DescribeGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupsCommandOutput>;
    describeGroups(args: DescribeGroupsCommandInput, cb: (err: any, data?: DescribeGroupsCommandOutput) => void): void;
    describeGroups(args: DescribeGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the specified notification subscriptions.</p>
     */
    describeNotificationSubscriptions(args: DescribeNotificationSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotificationSubscriptionsCommandOutput>;
    describeNotificationSubscriptions(args: DescribeNotificationSubscriptionsCommandInput, cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void): void;
    describeNotificationSubscriptions(args: DescribeNotificationSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotificationSubscriptionsCommandOutput) => void): void;
    /**
     * <p>Describes the permissions of a specified resource.</p>
     */
    describeResourcePermissions(args: DescribeResourcePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourcePermissionsCommandOutput>;
    describeResourcePermissions(args: DescribeResourcePermissionsCommandInput, cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void): void;
    describeResourcePermissions(args: DescribeResourcePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourcePermissionsCommandOutput) => void): void;
    /**
     * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
     *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
     *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
     *             action for SigV4 (administrative API) clients.</p>
     *         <p>This action requires an authentication token. To get an authentication token,
     *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
     *                 Control for User Applications</a> in the
     *             <i>Amazon
     *             WorkDocs Developer Guide</i>.</p>
     */
    describeRootFolders(args: DescribeRootFoldersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRootFoldersCommandOutput>;
    describeRootFolders(args: DescribeRootFoldersCommandInput, cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void): void;
    describeRootFolders(args: DescribeRootFoldersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRootFoldersCommandOutput) => void): void;
    /**
     * <p>Describes the specified users. You can describe all users or filter the results
     *             (for example, by status or organization).</p>
     *         <p>By default, Amazon WorkDocs returns the first 24 active or pending users. If there
     *             are more results, the response includes a marker that you can use to request the next
     *             set of results.</p>
     */
    describeUsers(args: DescribeUsersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUsersCommandOutput>;
    describeUsers(args: DescribeUsersCommandInput, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    describeUsers(args: DescribeUsersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUsersCommandOutput) => void): void;
    /**
     * <p>Retrieves details of the current user for whom the authentication token was
     *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
     *         <p>This action requires an authentication token. To get an authentication token,
     *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
     *                 Control for User Applications</a> in the
     *             <i>Amazon
     *                 WorkDocs Developer Guide</i>.</p>
     */
    getCurrentUser(args: GetCurrentUserCommandInput, options?: __HttpHandlerOptions): Promise<GetCurrentUserCommandOutput>;
    getCurrentUser(args: GetCurrentUserCommandInput, cb: (err: any, data?: GetCurrentUserCommandOutput) => void): void;
    getCurrentUser(args: GetCurrentUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCurrentUserCommandOutput) => void): void;
    /**
     * <p>Retrieves details of a document.</p>
     */
    getDocument(args: GetDocumentCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentCommandOutput>;
    getDocument(args: GetDocumentCommandInput, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
    getDocument(args: GetDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDocumentCommandOutput) => void): void;
    /**
     * <p>Retrieves the path information (the hierarchy from the root folder) for the
     *             requested document.</p>
     *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
     *             requested document and only includes the IDs of the parent folders in the path. You can
     *             limit the maximum number of levels. You can also request the names of the parent
     *             folders.</p>
     */
    getDocumentPath(args: GetDocumentPathCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentPathCommandOutput>;
    getDocumentPath(args: GetDocumentPathCommandInput, cb: (err: any, data?: GetDocumentPathCommandOutput) => void): void;
    getDocumentPath(args: GetDocumentPathCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDocumentPathCommandOutput) => void): void;
    /**
     * <p>Retrieves version metadata for the specified document.</p>
     */
    getDocumentVersion(args: GetDocumentVersionCommandInput, options?: __HttpHandlerOptions): Promise<GetDocumentVersionCommandOutput>;
    getDocumentVersion(args: GetDocumentVersionCommandInput, cb: (err: any, data?: GetDocumentVersionCommandOutput) => void): void;
    getDocumentVersion(args: GetDocumentVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDocumentVersionCommandOutput) => void): void;
    /**
     * <p>Retrieves the metadata of the specified folder.</p>
     */
    getFolder(args: GetFolderCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderCommandOutput>;
    getFolder(args: GetFolderCommandInput, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
    getFolder(args: GetFolderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFolderCommandOutput) => void): void;
    /**
     * <p>Retrieves the path information (the hierarchy from the root folder) for the
     *             specified folder.</p>
     *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
     *             requested folder and only includes the IDs of the parent folders in the path. You can
     *             limit the maximum number of levels. You can also request the parent folder
     *             names.</p>
     */
    getFolderPath(args: GetFolderPathCommandInput, options?: __HttpHandlerOptions): Promise<GetFolderPathCommandOutput>;
    getFolderPath(args: GetFolderPathCommandInput, cb: (err: any, data?: GetFolderPathCommandOutput) => void): void;
    getFolderPath(args: GetFolderPathCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetFolderPathCommandOutput) => void): void;
    /**
     * <p>Retrieves a collection of resources, including folders and documents. The only
     *             <code>CollectionType</code> supported is <code>SHARED_WITH_ME</code>.</p>
     */
    getResources(args: GetResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetResourcesCommandOutput>;
    getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
    getResources(args: GetResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
    /**
     * <p>Creates a new document object and version object.</p>
     *         <p>The client specifies the parent folder ID and name of the document to upload. The
     *             ID is optionally specified when creating a new version of an existing document. This is
     *             the first step to upload a document. Next, upload the document to the URL returned from
     *             the call, and then call <a>UpdateDocumentVersion</a>.</p>
     *         <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
     */
    initiateDocumentVersionUpload(args: InitiateDocumentVersionUploadCommandInput, options?: __HttpHandlerOptions): Promise<InitiateDocumentVersionUploadCommandOutput>;
    initiateDocumentVersionUpload(args: InitiateDocumentVersionUploadCommandInput, cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void): void;
    initiateDocumentVersionUpload(args: InitiateDocumentVersionUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: InitiateDocumentVersionUploadCommandOutput) => void): void;
    /**
     * <p>Removes all the permissions from the specified resource.</p>
     */
    removeAllResourcePermissions(args: RemoveAllResourcePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveAllResourcePermissionsCommandOutput>;
    removeAllResourcePermissions(args: RemoveAllResourcePermissionsCommandInput, cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void): void;
    removeAllResourcePermissions(args: RemoveAllResourcePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveAllResourcePermissionsCommandOutput) => void): void;
    /**
     * <p>Removes the permission for the specified principal from the specified
     *             resource.</p>
     */
    removeResourcePermission(args: RemoveResourcePermissionCommandInput, options?: __HttpHandlerOptions): Promise<RemoveResourcePermissionCommandOutput>;
    removeResourcePermission(args: RemoveResourcePermissionCommandInput, cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void): void;
    removeResourcePermission(args: RemoveResourcePermissionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveResourcePermissionCommandOutput) => void): void;
    /**
     * <p>Updates the specified attributes of a document. The user must have access to both
     *             the document and its parent folder, if applicable.</p>
     */
    updateDocument(args: UpdateDocumentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDocumentCommandOutput>;
    updateDocument(args: UpdateDocumentCommandInput, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
    updateDocument(args: UpdateDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDocumentCommandOutput) => void): void;
    /**
     * <p>Changes the status of the document version to ACTIVE. </p>
     *         <p>Amazon WorkDocs also sets its document container to ACTIVE. This is the last step
     *             in a document upload, after the client uploads the document to an S3-presigned URL
     *             returned by <a>InitiateDocumentVersionUpload</a>. </p>
     */
    updateDocumentVersion(args: UpdateDocumentVersionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDocumentVersionCommandOutput>;
    updateDocumentVersion(args: UpdateDocumentVersionCommandInput, cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void): void;
    updateDocumentVersion(args: UpdateDocumentVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDocumentVersionCommandOutput) => void): void;
    /**
     * <p>Updates the specified attributes of the specified folder. The user must have access
     *             to both the folder and its parent folder, if applicable.</p>
     */
    updateFolder(args: UpdateFolderCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFolderCommandOutput>;
    updateFolder(args: UpdateFolderCommandInput, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
    updateFolder(args: UpdateFolderCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateFolderCommandOutput) => void): void;
    /**
     * <p>Updates the specified attributes of the specified user, and grants or revokes
     *             administrative privileges to the Amazon WorkDocs site.</p>
     */
    updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
    updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
    updateUser(args: UpdateUserCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
}
