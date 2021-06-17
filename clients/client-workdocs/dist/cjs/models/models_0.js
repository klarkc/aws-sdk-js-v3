"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLabelsRequest = exports.LimitExceededException = exports.EntityAlreadyExistsException = exports.CreateFolderResponse = exports.FolderMetadata = exports.ResourceStateType = exports.CreateFolderRequest = exports.ConflictingOperationException = exports.CustomMetadataLimitExceededException = exports.CreateCustomMetadataResponse = exports.CreateCustomMetadataRequest = exports.InvalidCommentOperationException = exports.DocumentLockedForCommentsException = exports.CreateCommentResponse = exports.Comment = exports.CreateCommentRequest = exports.CommentVisibilityType = exports.AddResourcePermissionsResponse = exports.ShareResult = exports.ShareStatusType = exports.AddResourcePermissionsRequest = exports.SharePrincipal = exports.PrincipalType = exports.RoleType = exports.NotificationOptions = exports.Activity = exports.ActivityType = exports.Participants = exports.GroupMetadata = exports.ResourceMetadata = exports.ResourceType = exports.UserMetadata = exports.CommentMetadata = exports.CommentStatusType = exports.ActivateUserResponse = exports.User = exports.UserType = exports.UserStorageMetadata = exports.StorageRuleType = exports.StorageType = exports.UserStatusType = exports.LocaleType = exports.ActivateUserRequest = exports.UnauthorizedResourceAccessException = exports.UnauthorizedOperationException = exports.ServiceUnavailableException = exports.ProhibitedStateException = exports.FailedDependencyException = exports.EntityNotExistsException = exports.AbortDocumentVersionUploadRequest = void 0;
exports.DescribeRootFoldersResponse = exports.DescribeRootFoldersRequest = exports.DescribeResourcePermissionsResponse = exports.Principal = exports.PermissionInfo = exports.RolePermissionType = exports.DescribeResourcePermissionsRequest = exports.DescribeNotificationSubscriptionsResponse = exports.DescribeNotificationSubscriptionsRequest = exports.DescribeGroupsResponse = exports.DescribeGroupsRequest = exports.DescribeFolderContentsResponse = exports.DocumentMetadata = exports.DescribeFolderContentsRequest = exports.FolderContentType = exports.ResourceSortType = exports.OrderType = exports.DescribeDocumentVersionsResponse = exports.DocumentVersionMetadata = exports.DocumentThumbnailType = exports.DocumentStatusType = exports.DocumentSourceType = exports.DescribeDocumentVersionsRequest = exports.DescribeCommentsResponse = exports.DescribeCommentsRequest = exports.InvalidArgumentException = exports.DescribeActivitiesResponse = exports.DescribeActivitiesRequest = exports.DeleteUserRequest = exports.DeleteNotificationSubscriptionRequest = exports.DeleteLabelsResponse = exports.DeleteLabelsRequest = exports.DeleteFolderContentsRequest = exports.DeleteFolderRequest = exports.DeleteDocumentRequest = exports.ConcurrentModificationException = exports.DeleteCustomMetadataResponse = exports.DeleteCustomMetadataRequest = exports.DeleteCommentRequest = exports.DeactivateUserRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.TooManySubscriptionsException = exports.CreateNotificationSubscriptionResponse = exports.Subscription = exports.CreateNotificationSubscriptionRequest = exports.SubscriptionType = exports.SubscriptionProtocolType = exports.TooManyLabelsException = exports.CreateLabelsResponse = void 0;
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.BooleanEnumType = exports.IllegalUserStateException = exports.DeactivatingLastSystemUserException = exports.UpdateFolderRequest = exports.UpdateDocumentVersionRequest = exports.DocumentVersionStatus = exports.InvalidOperationException = exports.UpdateDocumentRequest = exports.RemoveResourcePermissionRequest = exports.RemoveAllResourcePermissionsRequest = exports.StorageLimitWillExceedException = exports.StorageLimitExceededException = exports.ResourceAlreadyCheckedOutException = exports.InitiateDocumentVersionUploadResponse = exports.UploadMetadata = exports.InitiateDocumentVersionUploadRequest = exports.DraftUploadOutOfSyncException = exports.GetResourcesResponse = exports.GetResourcesRequest = exports.ResourceCollectionType = exports.GetFolderPathResponse = exports.GetFolderPathRequest = exports.GetFolderResponse = exports.GetFolderRequest = exports.GetDocumentVersionResponse = exports.GetDocumentVersionRequest = exports.GetDocumentPathResponse = exports.ResourcePath = exports.ResourcePathComponent = exports.GetDocumentPathRequest = exports.InvalidPasswordException = exports.GetDocumentResponse = exports.GetDocumentRequest = exports.GetCurrentUserResponse = exports.GetCurrentUserRequest = exports.RequestedEntityTooLargeException = exports.DescribeUsersResponse = exports.DescribeUsersRequest = exports.UserSortType = exports.UserFilterType = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AbortDocumentVersionUploadRequest;
(function (AbortDocumentVersionUploadRequest) {
    /**
     * @internal
     */
    AbortDocumentVersionUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(AbortDocumentVersionUploadRequest = exports.AbortDocumentVersionUploadRequest || (exports.AbortDocumentVersionUploadRequest = {}));
var EntityNotExistsException;
(function (EntityNotExistsException) {
    /**
     * @internal
     */
    EntityNotExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityNotExistsException = exports.EntityNotExistsException || (exports.EntityNotExistsException = {}));
var FailedDependencyException;
(function (FailedDependencyException) {
    /**
     * @internal
     */
    FailedDependencyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailedDependencyException = exports.FailedDependencyException || (exports.FailedDependencyException = {}));
var ProhibitedStateException;
(function (ProhibitedStateException) {
    /**
     * @internal
     */
    ProhibitedStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProhibitedStateException = exports.ProhibitedStateException || (exports.ProhibitedStateException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var UnauthorizedOperationException;
(function (UnauthorizedOperationException) {
    /**
     * @internal
     */
    UnauthorizedOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedOperationException = exports.UnauthorizedOperationException || (exports.UnauthorizedOperationException = {}));
var UnauthorizedResourceAccessException;
(function (UnauthorizedResourceAccessException) {
    /**
     * @internal
     */
    UnauthorizedResourceAccessException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnauthorizedResourceAccessException = exports.UnauthorizedResourceAccessException || (exports.UnauthorizedResourceAccessException = {}));
var ActivateUserRequest;
(function (ActivateUserRequest) {
    /**
     * @internal
     */
    ActivateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(ActivateUserRequest = exports.ActivateUserRequest || (exports.ActivateUserRequest = {}));
var LocaleType;
(function (LocaleType) {
    LocaleType["DE"] = "de";
    LocaleType["DEFAULT"] = "default";
    LocaleType["EN"] = "en";
    LocaleType["ES"] = "es";
    LocaleType["FR"] = "fr";
    LocaleType["JA"] = "ja";
    LocaleType["KO"] = "ko";
    LocaleType["PT_BR"] = "pt_BR";
    LocaleType["RU"] = "ru";
    LocaleType["ZH_CN"] = "zh_CN";
    LocaleType["ZH_TW"] = "zh_TW";
})(LocaleType = exports.LocaleType || (exports.LocaleType = {}));
var UserStatusType;
(function (UserStatusType) {
    UserStatusType["ACTIVE"] = "ACTIVE";
    UserStatusType["INACTIVE"] = "INACTIVE";
    UserStatusType["PENDING"] = "PENDING";
})(UserStatusType = exports.UserStatusType || (exports.UserStatusType = {}));
var StorageType;
(function (StorageType) {
    StorageType["QUOTA"] = "QUOTA";
    StorageType["UNLIMITED"] = "UNLIMITED";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
var StorageRuleType;
(function (StorageRuleType) {
    /**
     * @internal
     */
    StorageRuleType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageRuleType = exports.StorageRuleType || (exports.StorageRuleType = {}));
var UserStorageMetadata;
(function (UserStorageMetadata) {
    /**
     * @internal
     */
    UserStorageMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserStorageMetadata = exports.UserStorageMetadata || (exports.UserStorageMetadata = {}));
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["MINIMALUSER"] = "MINIMALUSER";
    UserType["POWERUSER"] = "POWERUSER";
    UserType["USER"] = "USER";
    UserType["WORKSPACESUSER"] = "WORKSPACESUSER";
})(UserType = exports.UserType || (exports.UserType = {}));
var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(User = exports.User || (exports.User = {}));
var ActivateUserResponse;
(function (ActivateUserResponse) {
    /**
     * @internal
     */
    ActivateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateUserResponse = exports.ActivateUserResponse || (exports.ActivateUserResponse = {}));
var CommentStatusType;
(function (CommentStatusType) {
    CommentStatusType["DELETED"] = "DELETED";
    CommentStatusType["DRAFT"] = "DRAFT";
    CommentStatusType["PUBLISHED"] = "PUBLISHED";
})(CommentStatusType = exports.CommentStatusType || (exports.CommentStatusType = {}));
var CommentMetadata;
(function (CommentMetadata) {
    /**
     * @internal
     */
    CommentMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CommentMetadata = exports.CommentMetadata || (exports.CommentMetadata = {}));
var UserMetadata;
(function (UserMetadata) {
    /**
     * @internal
     */
    UserMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserMetadata = exports.UserMetadata || (exports.UserMetadata = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["DOCUMENT"] = "DOCUMENT";
    ResourceType["FOLDER"] = "FOLDER";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ResourceMetadata;
(function (ResourceMetadata) {
    /**
     * @internal
     */
    ResourceMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceMetadata = exports.ResourceMetadata || (exports.ResourceMetadata = {}));
var GroupMetadata;
(function (GroupMetadata) {
    /**
     * @internal
     */
    GroupMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupMetadata = exports.GroupMetadata || (exports.GroupMetadata = {}));
var Participants;
(function (Participants) {
    /**
     * @internal
     */
    Participants.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Participants = exports.Participants || (exports.Participants = {}));
var ActivityType;
(function (ActivityType) {
    ActivityType["DOCUMENT_ANNOTATION_ADDED"] = "DOCUMENT_ANNOTATION_ADDED";
    ActivityType["DOCUMENT_ANNOTATION_DELETED"] = "DOCUMENT_ANNOTATION_DELETED";
    ActivityType["DOCUMENT_CHECKED_IN"] = "DOCUMENT_CHECKED_IN";
    ActivityType["DOCUMENT_CHECKED_OUT"] = "DOCUMENT_CHECKED_OUT";
    ActivityType["DOCUMENT_COMMENT_ADDED"] = "DOCUMENT_COMMENT_ADDED";
    ActivityType["DOCUMENT_COMMENT_DELETED"] = "DOCUMENT_COMMENT_DELETED";
    ActivityType["DOCUMENT_MOVED"] = "DOCUMENT_MOVED";
    ActivityType["DOCUMENT_RECYCLED"] = "DOCUMENT_RECYCLED";
    ActivityType["DOCUMENT_RENAMED"] = "DOCUMENT_RENAMED";
    ActivityType["DOCUMENT_RESTORED"] = "DOCUMENT_RESTORED";
    ActivityType["DOCUMENT_REVERTED"] = "DOCUMENT_REVERTED";
    ActivityType["DOCUMENT_SHAREABLE_LINK_CREATED"] = "DOCUMENT_SHAREABLE_LINK_CREATED";
    ActivityType["DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED"] = "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED";
    ActivityType["DOCUMENT_SHAREABLE_LINK_REMOVED"] = "DOCUMENT_SHAREABLE_LINK_REMOVED";
    ActivityType["DOCUMENT_SHARED"] = "DOCUMENT_SHARED";
    ActivityType["DOCUMENT_SHARE_PERMISSION_CHANGED"] = "DOCUMENT_SHARE_PERMISSION_CHANGED";
    ActivityType["DOCUMENT_UNSHARED"] = "DOCUMENT_UNSHARED";
    ActivityType["DOCUMENT_VERSION_DELETED"] = "DOCUMENT_VERSION_DELETED";
    ActivityType["DOCUMENT_VERSION_DOWNLOADED"] = "DOCUMENT_VERSION_DOWNLOADED";
    ActivityType["DOCUMENT_VERSION_UPLOADED"] = "DOCUMENT_VERSION_UPLOADED";
    ActivityType["DOCUMENT_VERSION_VIEWED"] = "DOCUMENT_VERSION_VIEWED";
    ActivityType["FOLDER_CREATED"] = "FOLDER_CREATED";
    ActivityType["FOLDER_DELETED"] = "FOLDER_DELETED";
    ActivityType["FOLDER_MOVED"] = "FOLDER_MOVED";
    ActivityType["FOLDER_RECYCLED"] = "FOLDER_RECYCLED";
    ActivityType["FOLDER_RENAMED"] = "FOLDER_RENAMED";
    ActivityType["FOLDER_RESTORED"] = "FOLDER_RESTORED";
    ActivityType["FOLDER_SHAREABLE_LINK_CREATED"] = "FOLDER_SHAREABLE_LINK_CREATED";
    ActivityType["FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED"] = "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED";
    ActivityType["FOLDER_SHAREABLE_LINK_REMOVED"] = "FOLDER_SHAREABLE_LINK_REMOVED";
    ActivityType["FOLDER_SHARED"] = "FOLDER_SHARED";
    ActivityType["FOLDER_SHARE_PERMISSION_CHANGED"] = "FOLDER_SHARE_PERMISSION_CHANGED";
    ActivityType["FOLDER_UNSHARED"] = "FOLDER_UNSHARED";
})(ActivityType = exports.ActivityType || (exports.ActivityType = {}));
var Activity;
(function (Activity) {
    /**
     * @internal
     */
    Activity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Activity = exports.Activity || (exports.Activity = {}));
var NotificationOptions;
(function (NotificationOptions) {
    /**
     * @internal
     */
    NotificationOptions.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.EmailMessage && { EmailMessage: smithy_client_1.SENSITIVE_STRING }),
    });
})(NotificationOptions = exports.NotificationOptions || (exports.NotificationOptions = {}));
var RoleType;
(function (RoleType) {
    RoleType["CONTRIBUTOR"] = "CONTRIBUTOR";
    RoleType["COOWNER"] = "COOWNER";
    RoleType["OWNER"] = "OWNER";
    RoleType["VIEWER"] = "VIEWER";
})(RoleType = exports.RoleType || (exports.RoleType = {}));
var PrincipalType;
(function (PrincipalType) {
    PrincipalType["ANONYMOUS"] = "ANONYMOUS";
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["INVITE"] = "INVITE";
    PrincipalType["ORGANIZATION"] = "ORGANIZATION";
    PrincipalType["USER"] = "USER";
})(PrincipalType = exports.PrincipalType || (exports.PrincipalType = {}));
var SharePrincipal;
(function (SharePrincipal) {
    /**
     * @internal
     */
    SharePrincipal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SharePrincipal = exports.SharePrincipal || (exports.SharePrincipal = {}));
var AddResourcePermissionsRequest;
(function (AddResourcePermissionsRequest) {
    /**
     * @internal
     */
    AddResourcePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.NotificationOptions && {
            NotificationOptions: NotificationOptions.filterSensitiveLog(obj.NotificationOptions),
        }),
    });
})(AddResourcePermissionsRequest = exports.AddResourcePermissionsRequest || (exports.AddResourcePermissionsRequest = {}));
var ShareStatusType;
(function (ShareStatusType) {
    ShareStatusType["FAILURE"] = "FAILURE";
    ShareStatusType["SUCCESS"] = "SUCCESS";
})(ShareStatusType = exports.ShareStatusType || (exports.ShareStatusType = {}));
var ShareResult;
(function (ShareResult) {
    /**
     * @internal
     */
    ShareResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.StatusMessage && { StatusMessage: smithy_client_1.SENSITIVE_STRING }),
    });
})(ShareResult = exports.ShareResult || (exports.ShareResult = {}));
var AddResourcePermissionsResponse;
(function (AddResourcePermissionsResponse) {
    /**
     * @internal
     */
    AddResourcePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ShareResults && { ShareResults: obj.ShareResults.map((item) => ShareResult.filterSensitiveLog(item)) }),
    });
})(AddResourcePermissionsResponse = exports.AddResourcePermissionsResponse || (exports.AddResourcePermissionsResponse = {}));
var CommentVisibilityType;
(function (CommentVisibilityType) {
    CommentVisibilityType["PRIVATE"] = "PRIVATE";
    CommentVisibilityType["PUBLIC"] = "PUBLIC";
})(CommentVisibilityType = exports.CommentVisibilityType || (exports.CommentVisibilityType = {}));
var CreateCommentRequest;
(function (CreateCommentRequest) {
    /**
     * @internal
     */
    CreateCommentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateCommentRequest = exports.CreateCommentRequest || (exports.CreateCommentRequest = {}));
var Comment;
(function (Comment) {
    /**
     * @internal
     */
    Comment.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Text && { Text: smithy_client_1.SENSITIVE_STRING }),
    });
})(Comment = exports.Comment || (exports.Comment = {}));
var CreateCommentResponse;
(function (CreateCommentResponse) {
    /**
     * @internal
     */
    CreateCommentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Comment && { Comment: Comment.filterSensitiveLog(obj.Comment) }),
    });
})(CreateCommentResponse = exports.CreateCommentResponse || (exports.CreateCommentResponse = {}));
var DocumentLockedForCommentsException;
(function (DocumentLockedForCommentsException) {
    /**
     * @internal
     */
    DocumentLockedForCommentsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DocumentLockedForCommentsException = exports.DocumentLockedForCommentsException || (exports.DocumentLockedForCommentsException = {}));
var InvalidCommentOperationException;
(function (InvalidCommentOperationException) {
    /**
     * @internal
     */
    InvalidCommentOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidCommentOperationException = exports.InvalidCommentOperationException || (exports.InvalidCommentOperationException = {}));
var CreateCustomMetadataRequest;
(function (CreateCustomMetadataRequest) {
    /**
     * @internal
     */
    CreateCustomMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateCustomMetadataRequest = exports.CreateCustomMetadataRequest || (exports.CreateCustomMetadataRequest = {}));
var CreateCustomMetadataResponse;
(function (CreateCustomMetadataResponse) {
    /**
     * @internal
     */
    CreateCustomMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomMetadataResponse = exports.CreateCustomMetadataResponse || (exports.CreateCustomMetadataResponse = {}));
var CustomMetadataLimitExceededException;
(function (CustomMetadataLimitExceededException) {
    /**
     * @internal
     */
    CustomMetadataLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomMetadataLimitExceededException = exports.CustomMetadataLimitExceededException || (exports.CustomMetadataLimitExceededException = {}));
var ConflictingOperationException;
(function (ConflictingOperationException) {
    /**
     * @internal
     */
    ConflictingOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictingOperationException = exports.ConflictingOperationException || (exports.ConflictingOperationException = {}));
var CreateFolderRequest;
(function (CreateFolderRequest) {
    /**
     * @internal
     */
    CreateFolderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateFolderRequest = exports.CreateFolderRequest || (exports.CreateFolderRequest = {}));
var ResourceStateType;
(function (ResourceStateType) {
    ResourceStateType["ACTIVE"] = "ACTIVE";
    ResourceStateType["RECYCLED"] = "RECYCLED";
    ResourceStateType["RECYCLING"] = "RECYCLING";
    ResourceStateType["RESTORING"] = "RESTORING";
})(ResourceStateType = exports.ResourceStateType || (exports.ResourceStateType = {}));
var FolderMetadata;
(function (FolderMetadata) {
    /**
     * @internal
     */
    FolderMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FolderMetadata = exports.FolderMetadata || (exports.FolderMetadata = {}));
var CreateFolderResponse;
(function (CreateFolderResponse) {
    /**
     * @internal
     */
    CreateFolderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFolderResponse = exports.CreateFolderResponse || (exports.CreateFolderResponse = {}));
var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityAlreadyExistsException = exports.EntityAlreadyExistsException || (exports.EntityAlreadyExistsException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateLabelsRequest;
(function (CreateLabelsRequest) {
    /**
     * @internal
     */
    CreateLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateLabelsRequest = exports.CreateLabelsRequest || (exports.CreateLabelsRequest = {}));
var CreateLabelsResponse;
(function (CreateLabelsResponse) {
    /**
     * @internal
     */
    CreateLabelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateLabelsResponse = exports.CreateLabelsResponse || (exports.CreateLabelsResponse = {}));
var TooManyLabelsException;
(function (TooManyLabelsException) {
    /**
     * @internal
     */
    TooManyLabelsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyLabelsException = exports.TooManyLabelsException || (exports.TooManyLabelsException = {}));
var SubscriptionProtocolType;
(function (SubscriptionProtocolType) {
    SubscriptionProtocolType["HTTPS"] = "HTTPS";
})(SubscriptionProtocolType = exports.SubscriptionProtocolType || (exports.SubscriptionProtocolType = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["ALL"] = "ALL";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
var CreateNotificationSubscriptionRequest;
(function (CreateNotificationSubscriptionRequest) {
    /**
     * @internal
     */
    CreateNotificationSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotificationSubscriptionRequest = exports.CreateNotificationSubscriptionRequest || (exports.CreateNotificationSubscriptionRequest = {}));
var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscription = exports.Subscription || (exports.Subscription = {}));
var CreateNotificationSubscriptionResponse;
(function (CreateNotificationSubscriptionResponse) {
    /**
     * @internal
     */
    CreateNotificationSubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateNotificationSubscriptionResponse = exports.CreateNotificationSubscriptionResponse || (exports.CreateNotificationSubscriptionResponse = {}));
var TooManySubscriptionsException;
(function (TooManySubscriptionsException) {
    /**
     * @internal
     */
    TooManySubscriptionsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManySubscriptionsException = exports.TooManySubscriptionsException || (exports.TooManySubscriptionsException = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Password && { Password: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateUserRequest = exports.CreateUserRequest || (exports.CreateUserRequest = {}));
var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateUserResponse = exports.CreateUserResponse || (exports.CreateUserResponse = {}));
var DeactivateUserRequest;
(function (DeactivateUserRequest) {
    /**
     * @internal
     */
    DeactivateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeactivateUserRequest = exports.DeactivateUserRequest || (exports.DeactivateUserRequest = {}));
var DeleteCommentRequest;
(function (DeleteCommentRequest) {
    /**
     * @internal
     */
    DeleteCommentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteCommentRequest = exports.DeleteCommentRequest || (exports.DeleteCommentRequest = {}));
var DeleteCustomMetadataRequest;
(function (DeleteCustomMetadataRequest) {
    /**
     * @internal
     */
    DeleteCustomMetadataRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteCustomMetadataRequest = exports.DeleteCustomMetadataRequest || (exports.DeleteCustomMetadataRequest = {}));
var DeleteCustomMetadataResponse;
(function (DeleteCustomMetadataResponse) {
    /**
     * @internal
     */
    DeleteCustomMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomMetadataResponse = exports.DeleteCustomMetadataResponse || (exports.DeleteCustomMetadataResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var DeleteDocumentRequest;
(function (DeleteDocumentRequest) {
    /**
     * @internal
     */
    DeleteDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteDocumentRequest = exports.DeleteDocumentRequest || (exports.DeleteDocumentRequest = {}));
var DeleteFolderRequest;
(function (DeleteFolderRequest) {
    /**
     * @internal
     */
    DeleteFolderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteFolderRequest = exports.DeleteFolderRequest || (exports.DeleteFolderRequest = {}));
var DeleteFolderContentsRequest;
(function (DeleteFolderContentsRequest) {
    /**
     * @internal
     */
    DeleteFolderContentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteFolderContentsRequest = exports.DeleteFolderContentsRequest || (exports.DeleteFolderContentsRequest = {}));
var DeleteLabelsRequest;
(function (DeleteLabelsRequest) {
    /**
     * @internal
     */
    DeleteLabelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteLabelsRequest = exports.DeleteLabelsRequest || (exports.DeleteLabelsRequest = {}));
var DeleteLabelsResponse;
(function (DeleteLabelsResponse) {
    /**
     * @internal
     */
    DeleteLabelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLabelsResponse = exports.DeleteLabelsResponse || (exports.DeleteLabelsResponse = {}));
var DeleteNotificationSubscriptionRequest;
(function (DeleteNotificationSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteNotificationSubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteNotificationSubscriptionRequest = exports.DeleteNotificationSubscriptionRequest || (exports.DeleteNotificationSubscriptionRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DescribeActivitiesRequest;
(function (DescribeActivitiesRequest) {
    /**
     * @internal
     */
    DescribeActivitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeActivitiesRequest = exports.DescribeActivitiesRequest || (exports.DescribeActivitiesRequest = {}));
var DescribeActivitiesResponse;
(function (DescribeActivitiesResponse) {
    /**
     * @internal
     */
    DescribeActivitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeActivitiesResponse = exports.DescribeActivitiesResponse || (exports.DescribeActivitiesResponse = {}));
var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArgumentException = exports.InvalidArgumentException || (exports.InvalidArgumentException = {}));
var DescribeCommentsRequest;
(function (DescribeCommentsRequest) {
    /**
     * @internal
     */
    DescribeCommentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeCommentsRequest = exports.DescribeCommentsRequest || (exports.DescribeCommentsRequest = {}));
var DescribeCommentsResponse;
(function (DescribeCommentsResponse) {
    /**
     * @internal
     */
    DescribeCommentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Comments && { Comments: obj.Comments.map((item) => Comment.filterSensitiveLog(item)) }),
    });
})(DescribeCommentsResponse = exports.DescribeCommentsResponse || (exports.DescribeCommentsResponse = {}));
var DescribeDocumentVersionsRequest;
(function (DescribeDocumentVersionsRequest) {
    /**
     * @internal
     */
    DescribeDocumentVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeDocumentVersionsRequest = exports.DescribeDocumentVersionsRequest || (exports.DescribeDocumentVersionsRequest = {}));
var DocumentSourceType;
(function (DocumentSourceType) {
    DocumentSourceType["ORIGINAL"] = "ORIGINAL";
    DocumentSourceType["WITH_COMMENTS"] = "WITH_COMMENTS";
})(DocumentSourceType = exports.DocumentSourceType || (exports.DocumentSourceType = {}));
var DocumentStatusType;
(function (DocumentStatusType) {
    DocumentStatusType["ACTIVE"] = "ACTIVE";
    DocumentStatusType["INITIALIZED"] = "INITIALIZED";
})(DocumentStatusType = exports.DocumentStatusType || (exports.DocumentStatusType = {}));
var DocumentThumbnailType;
(function (DocumentThumbnailType) {
    DocumentThumbnailType["LARGE"] = "LARGE";
    DocumentThumbnailType["SMALL"] = "SMALL";
    DocumentThumbnailType["SMALL_HQ"] = "SMALL_HQ";
})(DocumentThumbnailType = exports.DocumentThumbnailType || (exports.DocumentThumbnailType = {}));
var DocumentVersionMetadata;
(function (DocumentVersionMetadata) {
    /**
     * @internal
     */
    DocumentVersionMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Thumbnail && { Thumbnail: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Source && { Source: smithy_client_1.SENSITIVE_STRING }),
    });
})(DocumentVersionMetadata = exports.DocumentVersionMetadata || (exports.DocumentVersionMetadata = {}));
var DescribeDocumentVersionsResponse;
(function (DescribeDocumentVersionsResponse) {
    /**
     * @internal
     */
    DescribeDocumentVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.DocumentVersions && {
            DocumentVersions: obj.DocumentVersions.map((item) => DocumentVersionMetadata.filterSensitiveLog(item)),
        }),
    });
})(DescribeDocumentVersionsResponse = exports.DescribeDocumentVersionsResponse || (exports.DescribeDocumentVersionsResponse = {}));
var OrderType;
(function (OrderType) {
    OrderType["ASCENDING"] = "ASCENDING";
    OrderType["DESCENDING"] = "DESCENDING";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var ResourceSortType;
(function (ResourceSortType) {
    ResourceSortType["DATE"] = "DATE";
    ResourceSortType["NAME"] = "NAME";
})(ResourceSortType = exports.ResourceSortType || (exports.ResourceSortType = {}));
var FolderContentType;
(function (FolderContentType) {
    FolderContentType["ALL"] = "ALL";
    FolderContentType["DOCUMENT"] = "DOCUMENT";
    FolderContentType["FOLDER"] = "FOLDER";
})(FolderContentType = exports.FolderContentType || (exports.FolderContentType = {}));
var DescribeFolderContentsRequest;
(function (DescribeFolderContentsRequest) {
    /**
     * @internal
     */
    DescribeFolderContentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeFolderContentsRequest = exports.DescribeFolderContentsRequest || (exports.DescribeFolderContentsRequest = {}));
var DocumentMetadata;
(function (DocumentMetadata) {
    /**
     * @internal
     */
    DocumentMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.LatestVersionMetadata && {
            LatestVersionMetadata: DocumentVersionMetadata.filterSensitiveLog(obj.LatestVersionMetadata),
        }),
    });
})(DocumentMetadata = exports.DocumentMetadata || (exports.DocumentMetadata = {}));
var DescribeFolderContentsResponse;
(function (DescribeFolderContentsResponse) {
    /**
     * @internal
     */
    DescribeFolderContentsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadata.filterSensitiveLog(item)) }),
    });
})(DescribeFolderContentsResponse = exports.DescribeFolderContentsResponse || (exports.DescribeFolderContentsResponse = {}));
var DescribeGroupsRequest;
(function (DescribeGroupsRequest) {
    /**
     * @internal
     */
    DescribeGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.SearchQuery && { SearchQuery: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeGroupsRequest = exports.DescribeGroupsRequest || (exports.DescribeGroupsRequest = {}));
var DescribeGroupsResponse;
(function (DescribeGroupsResponse) {
    /**
     * @internal
     */
    DescribeGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGroupsResponse = exports.DescribeGroupsResponse || (exports.DescribeGroupsResponse = {}));
var DescribeNotificationSubscriptionsRequest;
(function (DescribeNotificationSubscriptionsRequest) {
    /**
     * @internal
     */
    DescribeNotificationSubscriptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotificationSubscriptionsRequest = exports.DescribeNotificationSubscriptionsRequest || (exports.DescribeNotificationSubscriptionsRequest = {}));
var DescribeNotificationSubscriptionsResponse;
(function (DescribeNotificationSubscriptionsResponse) {
    /**
     * @internal
     */
    DescribeNotificationSubscriptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeNotificationSubscriptionsResponse = exports.DescribeNotificationSubscriptionsResponse || (exports.DescribeNotificationSubscriptionsResponse = {}));
var DescribeResourcePermissionsRequest;
(function (DescribeResourcePermissionsRequest) {
    /**
     * @internal
     */
    DescribeResourcePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeResourcePermissionsRequest = exports.DescribeResourcePermissionsRequest || (exports.DescribeResourcePermissionsRequest = {}));
var RolePermissionType;
(function (RolePermissionType) {
    RolePermissionType["DIRECT"] = "DIRECT";
    RolePermissionType["INHERITED"] = "INHERITED";
})(RolePermissionType = exports.RolePermissionType || (exports.RolePermissionType = {}));
var PermissionInfo;
(function (PermissionInfo) {
    /**
     * @internal
     */
    PermissionInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PermissionInfo = exports.PermissionInfo || (exports.PermissionInfo = {}));
var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Principal = exports.Principal || (exports.Principal = {}));
var DescribeResourcePermissionsResponse;
(function (DescribeResourcePermissionsResponse) {
    /**
     * @internal
     */
    DescribeResourcePermissionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourcePermissionsResponse = exports.DescribeResourcePermissionsResponse || (exports.DescribeResourcePermissionsResponse = {}));
var DescribeRootFoldersRequest;
(function (DescribeRootFoldersRequest) {
    /**
     * @internal
     */
    DescribeRootFoldersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeRootFoldersRequest = exports.DescribeRootFoldersRequest || (exports.DescribeRootFoldersRequest = {}));
var DescribeRootFoldersResponse;
(function (DescribeRootFoldersResponse) {
    /**
     * @internal
     */
    DescribeRootFoldersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRootFoldersResponse = exports.DescribeRootFoldersResponse || (exports.DescribeRootFoldersResponse = {}));
var UserFilterType;
(function (UserFilterType) {
    UserFilterType["ACTIVE_PENDING"] = "ACTIVE_PENDING";
    UserFilterType["ALL"] = "ALL";
})(UserFilterType = exports.UserFilterType || (exports.UserFilterType = {}));
var UserSortType;
(function (UserSortType) {
    UserSortType["FULL_NAME"] = "FULL_NAME";
    UserSortType["STORAGE_LIMIT"] = "STORAGE_LIMIT";
    UserSortType["STORAGE_USED"] = "STORAGE_USED";
    UserSortType["USER_NAME"] = "USER_NAME";
    UserSortType["USER_STATUS"] = "USER_STATUS";
})(UserSortType = exports.UserSortType || (exports.UserSortType = {}));
var DescribeUsersRequest;
(function (DescribeUsersRequest) {
    /**
     * @internal
     */
    DescribeUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Query && { Query: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeUsersRequest = exports.DescribeUsersRequest || (exports.DescribeUsersRequest = {}));
var DescribeUsersResponse;
(function (DescribeUsersResponse) {
    /**
     * @internal
     */
    DescribeUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUsersResponse = exports.DescribeUsersResponse || (exports.DescribeUsersResponse = {}));
var RequestedEntityTooLargeException;
(function (RequestedEntityTooLargeException) {
    /**
     * @internal
     */
    RequestedEntityTooLargeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestedEntityTooLargeException = exports.RequestedEntityTooLargeException || (exports.RequestedEntityTooLargeException = {}));
var GetCurrentUserRequest;
(function (GetCurrentUserRequest) {
    /**
     * @internal
     */
    GetCurrentUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetCurrentUserRequest = exports.GetCurrentUserRequest || (exports.GetCurrentUserRequest = {}));
var GetCurrentUserResponse;
(function (GetCurrentUserResponse) {
    /**
     * @internal
     */
    GetCurrentUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCurrentUserResponse = exports.GetCurrentUserResponse || (exports.GetCurrentUserResponse = {}));
var GetDocumentRequest;
(function (GetDocumentRequest) {
    /**
     * @internal
     */
    GetDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDocumentRequest = exports.GetDocumentRequest || (exports.GetDocumentRequest = {}));
var GetDocumentResponse;
(function (GetDocumentResponse) {
    /**
     * @internal
     */
    GetDocumentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) }),
    });
})(GetDocumentResponse = exports.GetDocumentResponse || (exports.GetDocumentResponse = {}));
var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPasswordException = exports.InvalidPasswordException || (exports.InvalidPasswordException = {}));
var GetDocumentPathRequest;
(function (GetDocumentPathRequest) {
    /**
     * @internal
     */
    GetDocumentPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDocumentPathRequest = exports.GetDocumentPathRequest || (exports.GetDocumentPathRequest = {}));
var ResourcePathComponent;
(function (ResourcePathComponent) {
    /**
     * @internal
     */
    ResourcePathComponent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePathComponent = exports.ResourcePathComponent || (exports.ResourcePathComponent = {}));
var ResourcePath;
(function (ResourcePath) {
    /**
     * @internal
     */
    ResourcePath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourcePath = exports.ResourcePath || (exports.ResourcePath = {}));
var GetDocumentPathResponse;
(function (GetDocumentPathResponse) {
    /**
     * @internal
     */
    GetDocumentPathResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDocumentPathResponse = exports.GetDocumentPathResponse || (exports.GetDocumentPathResponse = {}));
var GetDocumentVersionRequest;
(function (GetDocumentVersionRequest) {
    /**
     * @internal
     */
    GetDocumentVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetDocumentVersionRequest = exports.GetDocumentVersionRequest || (exports.GetDocumentVersionRequest = {}));
var GetDocumentVersionResponse;
(function (GetDocumentVersionResponse) {
    /**
     * @internal
     */
    GetDocumentVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Metadata && { Metadata: DocumentVersionMetadata.filterSensitiveLog(obj.Metadata) }),
    });
})(GetDocumentVersionResponse = exports.GetDocumentVersionResponse || (exports.GetDocumentVersionResponse = {}));
var GetFolderRequest;
(function (GetFolderRequest) {
    /**
     * @internal
     */
    GetFolderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetFolderRequest = exports.GetFolderRequest || (exports.GetFolderRequest = {}));
var GetFolderResponse;
(function (GetFolderResponse) {
    /**
     * @internal
     */
    GetFolderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFolderResponse = exports.GetFolderResponse || (exports.GetFolderResponse = {}));
var GetFolderPathRequest;
(function (GetFolderPathRequest) {
    /**
     * @internal
     */
    GetFolderPathRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetFolderPathRequest = exports.GetFolderPathRequest || (exports.GetFolderPathRequest = {}));
var GetFolderPathResponse;
(function (GetFolderPathResponse) {
    /**
     * @internal
     */
    GetFolderPathResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetFolderPathResponse = exports.GetFolderPathResponse || (exports.GetFolderPathResponse = {}));
var ResourceCollectionType;
(function (ResourceCollectionType) {
    ResourceCollectionType["SHARED_WITH_ME"] = "SHARED_WITH_ME";
})(ResourceCollectionType = exports.ResourceCollectionType || (exports.ResourceCollectionType = {}));
var GetResourcesRequest;
(function (GetResourcesRequest) {
    /**
     * @internal
     */
    GetResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(GetResourcesRequest = exports.GetResourcesRequest || (exports.GetResourcesRequest = {}));
var GetResourcesResponse;
(function (GetResourcesResponse) {
    /**
     * @internal
     */
    GetResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Documents && { Documents: obj.Documents.map((item) => DocumentMetadata.filterSensitiveLog(item)) }),
    });
})(GetResourcesResponse = exports.GetResourcesResponse || (exports.GetResourcesResponse = {}));
var DraftUploadOutOfSyncException;
(function (DraftUploadOutOfSyncException) {
    /**
     * @internal
     */
    DraftUploadOutOfSyncException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DraftUploadOutOfSyncException = exports.DraftUploadOutOfSyncException || (exports.DraftUploadOutOfSyncException = {}));
var InitiateDocumentVersionUploadRequest;
(function (InitiateDocumentVersionUploadRequest) {
    /**
     * @internal
     */
    InitiateDocumentVersionUploadRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(InitiateDocumentVersionUploadRequest = exports.InitiateDocumentVersionUploadRequest || (exports.InitiateDocumentVersionUploadRequest = {}));
var UploadMetadata;
(function (UploadMetadata) {
    /**
     * @internal
     */
    UploadMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UploadUrl && { UploadUrl: smithy_client_1.SENSITIVE_STRING }),
    });
})(UploadMetadata = exports.UploadMetadata || (exports.UploadMetadata = {}));
var InitiateDocumentVersionUploadResponse;
(function (InitiateDocumentVersionUploadResponse) {
    /**
     * @internal
     */
    InitiateDocumentVersionUploadResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) }),
        ...(obj.UploadMetadata && { UploadMetadata: UploadMetadata.filterSensitiveLog(obj.UploadMetadata) }),
    });
})(InitiateDocumentVersionUploadResponse = exports.InitiateDocumentVersionUploadResponse || (exports.InitiateDocumentVersionUploadResponse = {}));
var ResourceAlreadyCheckedOutException;
(function (ResourceAlreadyCheckedOutException) {
    /**
     * @internal
     */
    ResourceAlreadyCheckedOutException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyCheckedOutException = exports.ResourceAlreadyCheckedOutException || (exports.ResourceAlreadyCheckedOutException = {}));
var StorageLimitExceededException;
(function (StorageLimitExceededException) {
    /**
     * @internal
     */
    StorageLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLimitExceededException = exports.StorageLimitExceededException || (exports.StorageLimitExceededException = {}));
var StorageLimitWillExceedException;
(function (StorageLimitWillExceedException) {
    /**
     * @internal
     */
    StorageLimitWillExceedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StorageLimitWillExceedException = exports.StorageLimitWillExceedException || (exports.StorageLimitWillExceedException = {}));
var RemoveAllResourcePermissionsRequest;
(function (RemoveAllResourcePermissionsRequest) {
    /**
     * @internal
     */
    RemoveAllResourcePermissionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(RemoveAllResourcePermissionsRequest = exports.RemoveAllResourcePermissionsRequest || (exports.RemoveAllResourcePermissionsRequest = {}));
var RemoveResourcePermissionRequest;
(function (RemoveResourcePermissionRequest) {
    /**
     * @internal
     */
    RemoveResourcePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(RemoveResourcePermissionRequest = exports.RemoveResourcePermissionRequest || (exports.RemoveResourcePermissionRequest = {}));
var UpdateDocumentRequest;
(function (UpdateDocumentRequest) {
    /**
     * @internal
     */
    UpdateDocumentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDocumentRequest = exports.UpdateDocumentRequest || (exports.UpdateDocumentRequest = {}));
var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {}));
var DocumentVersionStatus;
(function (DocumentVersionStatus) {
    DocumentVersionStatus["ACTIVE"] = "ACTIVE";
})(DocumentVersionStatus = exports.DocumentVersionStatus || (exports.DocumentVersionStatus = {}));
var UpdateDocumentVersionRequest;
(function (UpdateDocumentVersionRequest) {
    /**
     * @internal
     */
    UpdateDocumentVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateDocumentVersionRequest = exports.UpdateDocumentVersionRequest || (exports.UpdateDocumentVersionRequest = {}));
var UpdateFolderRequest;
(function (UpdateFolderRequest) {
    /**
     * @internal
     */
    UpdateFolderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateFolderRequest = exports.UpdateFolderRequest || (exports.UpdateFolderRequest = {}));
var DeactivatingLastSystemUserException;
(function (DeactivatingLastSystemUserException) {
    /**
     * @internal
     */
    DeactivatingLastSystemUserException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivatingLastSystemUserException = exports.DeactivatingLastSystemUserException || (exports.DeactivatingLastSystemUserException = {}));
var IllegalUserStateException;
(function (IllegalUserStateException) {
    /**
     * @internal
     */
    IllegalUserStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IllegalUserStateException = exports.IllegalUserStateException || (exports.IllegalUserStateException = {}));
var BooleanEnumType;
(function (BooleanEnumType) {
    BooleanEnumType["FALSE"] = "FALSE";
    BooleanEnumType["TRUE"] = "TRUE";
})(BooleanEnumType = exports.BooleanEnumType || (exports.BooleanEnumType = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AuthenticationToken && { AuthenticationToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateUserRequest = exports.UpdateUserRequest || (exports.UpdateUserRequest = {}));
var UpdateUserResponse;
(function (UpdateUserResponse) {
    /**
     * @internal
     */
    UpdateUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserResponse = exports.UpdateUserResponse || (exports.UpdateUserResponse = {}));
//# sourceMappingURL=models_0.js.map