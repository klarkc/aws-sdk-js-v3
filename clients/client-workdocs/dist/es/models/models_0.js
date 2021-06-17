import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AbortDocumentVersionUploadRequest;
(function (AbortDocumentVersionUploadRequest) {
    /**
     * @internal
     */
    AbortDocumentVersionUploadRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(AbortDocumentVersionUploadRequest || (AbortDocumentVersionUploadRequest = {}));
export var EntityNotExistsException;
(function (EntityNotExistsException) {
    /**
     * @internal
     */
    EntityNotExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityNotExistsException || (EntityNotExistsException = {}));
export var FailedDependencyException;
(function (FailedDependencyException) {
    /**
     * @internal
     */
    FailedDependencyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailedDependencyException || (FailedDependencyException = {}));
export var ProhibitedStateException;
(function (ProhibitedStateException) {
    /**
     * @internal
     */
    ProhibitedStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProhibitedStateException || (ProhibitedStateException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var UnauthorizedOperationException;
(function (UnauthorizedOperationException) {
    /**
     * @internal
     */
    UnauthorizedOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedOperationException || (UnauthorizedOperationException = {}));
export var UnauthorizedResourceAccessException;
(function (UnauthorizedResourceAccessException) {
    /**
     * @internal
     */
    UnauthorizedResourceAccessException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnauthorizedResourceAccessException || (UnauthorizedResourceAccessException = {}));
export var ActivateUserRequest;
(function (ActivateUserRequest) {
    /**
     * @internal
     */
    ActivateUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(ActivateUserRequest || (ActivateUserRequest = {}));
export var LocaleType;
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
})(LocaleType || (LocaleType = {}));
export var UserStatusType;
(function (UserStatusType) {
    UserStatusType["ACTIVE"] = "ACTIVE";
    UserStatusType["INACTIVE"] = "INACTIVE";
    UserStatusType["PENDING"] = "PENDING";
})(UserStatusType || (UserStatusType = {}));
export var StorageType;
(function (StorageType) {
    StorageType["QUOTA"] = "QUOTA";
    StorageType["UNLIMITED"] = "UNLIMITED";
})(StorageType || (StorageType = {}));
export var StorageRuleType;
(function (StorageRuleType) {
    /**
     * @internal
     */
    StorageRuleType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageRuleType || (StorageRuleType = {}));
export var UserStorageMetadata;
(function (UserStorageMetadata) {
    /**
     * @internal
     */
    UserStorageMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserStorageMetadata || (UserStorageMetadata = {}));
export var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["MINIMALUSER"] = "MINIMALUSER";
    UserType["POWERUSER"] = "POWERUSER";
    UserType["USER"] = "USER";
    UserType["WORKSPACESUSER"] = "WORKSPACESUSER";
})(UserType || (UserType = {}));
export var User;
(function (User) {
    /**
     * @internal
     */
    User.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(User || (User = {}));
export var ActivateUserResponse;
(function (ActivateUserResponse) {
    /**
     * @internal
     */
    ActivateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateUserResponse || (ActivateUserResponse = {}));
export var CommentStatusType;
(function (CommentStatusType) {
    CommentStatusType["DELETED"] = "DELETED";
    CommentStatusType["DRAFT"] = "DRAFT";
    CommentStatusType["PUBLISHED"] = "PUBLISHED";
})(CommentStatusType || (CommentStatusType = {}));
export var CommentMetadata;
(function (CommentMetadata) {
    /**
     * @internal
     */
    CommentMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CommentMetadata || (CommentMetadata = {}));
export var UserMetadata;
(function (UserMetadata) {
    /**
     * @internal
     */
    UserMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserMetadata || (UserMetadata = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["DOCUMENT"] = "DOCUMENT";
    ResourceType["FOLDER"] = "FOLDER";
})(ResourceType || (ResourceType = {}));
export var ResourceMetadata;
(function (ResourceMetadata) {
    /**
     * @internal
     */
    ResourceMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceMetadata || (ResourceMetadata = {}));
export var GroupMetadata;
(function (GroupMetadata) {
    /**
     * @internal
     */
    GroupMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupMetadata || (GroupMetadata = {}));
export var Participants;
(function (Participants) {
    /**
     * @internal
     */
    Participants.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Participants || (Participants = {}));
export var ActivityType;
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
})(ActivityType || (ActivityType = {}));
export var Activity;
(function (Activity) {
    /**
     * @internal
     */
    Activity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Activity || (Activity = {}));
export var NotificationOptions;
(function (NotificationOptions) {
    /**
     * @internal
     */
    NotificationOptions.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.EmailMessage && { EmailMessage: SENSITIVE_STRING }))); };
})(NotificationOptions || (NotificationOptions = {}));
export var RoleType;
(function (RoleType) {
    RoleType["CONTRIBUTOR"] = "CONTRIBUTOR";
    RoleType["COOWNER"] = "COOWNER";
    RoleType["OWNER"] = "OWNER";
    RoleType["VIEWER"] = "VIEWER";
})(RoleType || (RoleType = {}));
export var PrincipalType;
(function (PrincipalType) {
    PrincipalType["ANONYMOUS"] = "ANONYMOUS";
    PrincipalType["GROUP"] = "GROUP";
    PrincipalType["INVITE"] = "INVITE";
    PrincipalType["ORGANIZATION"] = "ORGANIZATION";
    PrincipalType["USER"] = "USER";
})(PrincipalType || (PrincipalType = {}));
export var SharePrincipal;
(function (SharePrincipal) {
    /**
     * @internal
     */
    SharePrincipal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SharePrincipal || (SharePrincipal = {}));
export var AddResourcePermissionsRequest;
(function (AddResourcePermissionsRequest) {
    /**
     * @internal
     */
    AddResourcePermissionsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING })), (obj.NotificationOptions && {
        NotificationOptions: NotificationOptions.filterSensitiveLog(obj.NotificationOptions),
    }))); };
})(AddResourcePermissionsRequest || (AddResourcePermissionsRequest = {}));
export var ShareStatusType;
(function (ShareStatusType) {
    ShareStatusType["FAILURE"] = "FAILURE";
    ShareStatusType["SUCCESS"] = "SUCCESS";
})(ShareStatusType || (ShareStatusType = {}));
export var ShareResult;
(function (ShareResult) {
    /**
     * @internal
     */
    ShareResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.StatusMessage && { StatusMessage: SENSITIVE_STRING }))); };
})(ShareResult || (ShareResult = {}));
export var AddResourcePermissionsResponse;
(function (AddResourcePermissionsResponse) {
    /**
     * @internal
     */
    AddResourcePermissionsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.ShareResults && { ShareResults: obj.ShareResults.map(function (item) { return ShareResult.filterSensitiveLog(item); }) }))); };
})(AddResourcePermissionsResponse || (AddResourcePermissionsResponse = {}));
export var CommentVisibilityType;
(function (CommentVisibilityType) {
    CommentVisibilityType["PRIVATE"] = "PRIVATE";
    CommentVisibilityType["PUBLIC"] = "PUBLIC";
})(CommentVisibilityType || (CommentVisibilityType = {}));
export var CreateCommentRequest;
(function (CreateCommentRequest) {
    /**
     * @internal
     */
    CreateCommentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING })), (obj.Text && { Text: SENSITIVE_STRING }))); };
})(CreateCommentRequest || (CreateCommentRequest = {}));
export var Comment;
(function (Comment) {
    /**
     * @internal
     */
    Comment.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Text && { Text: SENSITIVE_STRING }))); };
})(Comment || (Comment = {}));
export var CreateCommentResponse;
(function (CreateCommentResponse) {
    /**
     * @internal
     */
    CreateCommentResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Comment && { Comment: Comment.filterSensitiveLog(obj.Comment) }))); };
})(CreateCommentResponse || (CreateCommentResponse = {}));
export var DocumentLockedForCommentsException;
(function (DocumentLockedForCommentsException) {
    /**
     * @internal
     */
    DocumentLockedForCommentsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DocumentLockedForCommentsException || (DocumentLockedForCommentsException = {}));
export var InvalidCommentOperationException;
(function (InvalidCommentOperationException) {
    /**
     * @internal
     */
    InvalidCommentOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidCommentOperationException || (InvalidCommentOperationException = {}));
export var CreateCustomMetadataRequest;
(function (CreateCustomMetadataRequest) {
    /**
     * @internal
     */
    CreateCustomMetadataRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(CreateCustomMetadataRequest || (CreateCustomMetadataRequest = {}));
export var CreateCustomMetadataResponse;
(function (CreateCustomMetadataResponse) {
    /**
     * @internal
     */
    CreateCustomMetadataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomMetadataResponse || (CreateCustomMetadataResponse = {}));
export var CustomMetadataLimitExceededException;
(function (CustomMetadataLimitExceededException) {
    /**
     * @internal
     */
    CustomMetadataLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomMetadataLimitExceededException || (CustomMetadataLimitExceededException = {}));
export var ConflictingOperationException;
(function (ConflictingOperationException) {
    /**
     * @internal
     */
    ConflictingOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictingOperationException || (ConflictingOperationException = {}));
export var CreateFolderRequest;
(function (CreateFolderRequest) {
    /**
     * @internal
     */
    CreateFolderRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(CreateFolderRequest || (CreateFolderRequest = {}));
export var ResourceStateType;
(function (ResourceStateType) {
    ResourceStateType["ACTIVE"] = "ACTIVE";
    ResourceStateType["RECYCLED"] = "RECYCLED";
    ResourceStateType["RECYCLING"] = "RECYCLING";
    ResourceStateType["RESTORING"] = "RESTORING";
})(ResourceStateType || (ResourceStateType = {}));
export var FolderMetadata;
(function (FolderMetadata) {
    /**
     * @internal
     */
    FolderMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FolderMetadata || (FolderMetadata = {}));
export var CreateFolderResponse;
(function (CreateFolderResponse) {
    /**
     * @internal
     */
    CreateFolderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateFolderResponse || (CreateFolderResponse = {}));
export var EntityAlreadyExistsException;
(function (EntityAlreadyExistsException) {
    /**
     * @internal
     */
    EntityAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityAlreadyExistsException || (EntityAlreadyExistsException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateLabelsRequest;
(function (CreateLabelsRequest) {
    /**
     * @internal
     */
    CreateLabelsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(CreateLabelsRequest || (CreateLabelsRequest = {}));
export var CreateLabelsResponse;
(function (CreateLabelsResponse) {
    /**
     * @internal
     */
    CreateLabelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateLabelsResponse || (CreateLabelsResponse = {}));
export var TooManyLabelsException;
(function (TooManyLabelsException) {
    /**
     * @internal
     */
    TooManyLabelsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyLabelsException || (TooManyLabelsException = {}));
export var SubscriptionProtocolType;
(function (SubscriptionProtocolType) {
    SubscriptionProtocolType["HTTPS"] = "HTTPS";
})(SubscriptionProtocolType || (SubscriptionProtocolType = {}));
export var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["ALL"] = "ALL";
})(SubscriptionType || (SubscriptionType = {}));
export var CreateNotificationSubscriptionRequest;
(function (CreateNotificationSubscriptionRequest) {
    /**
     * @internal
     */
    CreateNotificationSubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotificationSubscriptionRequest || (CreateNotificationSubscriptionRequest = {}));
export var Subscription;
(function (Subscription) {
    /**
     * @internal
     */
    Subscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Subscription || (Subscription = {}));
export var CreateNotificationSubscriptionResponse;
(function (CreateNotificationSubscriptionResponse) {
    /**
     * @internal
     */
    CreateNotificationSubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateNotificationSubscriptionResponse || (CreateNotificationSubscriptionResponse = {}));
export var TooManySubscriptionsException;
(function (TooManySubscriptionsException) {
    /**
     * @internal
     */
    TooManySubscriptionsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManySubscriptionsException || (TooManySubscriptionsException = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Password && { Password: SENSITIVE_STRING })), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(CreateUserRequest || (CreateUserRequest = {}));
export var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserResponse || (CreateUserResponse = {}));
export var DeactivateUserRequest;
(function (DeactivateUserRequest) {
    /**
     * @internal
     */
    DeactivateUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeactivateUserRequest || (DeactivateUserRequest = {}));
export var DeleteCommentRequest;
(function (DeleteCommentRequest) {
    /**
     * @internal
     */
    DeleteCommentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteCommentRequest || (DeleteCommentRequest = {}));
export var DeleteCustomMetadataRequest;
(function (DeleteCustomMetadataRequest) {
    /**
     * @internal
     */
    DeleteCustomMetadataRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteCustomMetadataRequest || (DeleteCustomMetadataRequest = {}));
export var DeleteCustomMetadataResponse;
(function (DeleteCustomMetadataResponse) {
    /**
     * @internal
     */
    DeleteCustomMetadataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomMetadataResponse || (DeleteCustomMetadataResponse = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var DeleteDocumentRequest;
(function (DeleteDocumentRequest) {
    /**
     * @internal
     */
    DeleteDocumentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteDocumentRequest || (DeleteDocumentRequest = {}));
export var DeleteFolderRequest;
(function (DeleteFolderRequest) {
    /**
     * @internal
     */
    DeleteFolderRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteFolderRequest || (DeleteFolderRequest = {}));
export var DeleteFolderContentsRequest;
(function (DeleteFolderContentsRequest) {
    /**
     * @internal
     */
    DeleteFolderContentsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteFolderContentsRequest || (DeleteFolderContentsRequest = {}));
export var DeleteLabelsRequest;
(function (DeleteLabelsRequest) {
    /**
     * @internal
     */
    DeleteLabelsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteLabelsRequest || (DeleteLabelsRequest = {}));
export var DeleteLabelsResponse;
(function (DeleteLabelsResponse) {
    /**
     * @internal
     */
    DeleteLabelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLabelsResponse || (DeleteLabelsResponse = {}));
export var DeleteNotificationSubscriptionRequest;
(function (DeleteNotificationSubscriptionRequest) {
    /**
     * @internal
     */
    DeleteNotificationSubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteNotificationSubscriptionRequest || (DeleteNotificationSubscriptionRequest = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DescribeActivitiesRequest;
(function (DescribeActivitiesRequest) {
    /**
     * @internal
     */
    DescribeActivitiesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeActivitiesRequest || (DescribeActivitiesRequest = {}));
export var DescribeActivitiesResponse;
(function (DescribeActivitiesResponse) {
    /**
     * @internal
     */
    DescribeActivitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeActivitiesResponse || (DescribeActivitiesResponse = {}));
export var InvalidArgumentException;
(function (InvalidArgumentException) {
    /**
     * @internal
     */
    InvalidArgumentException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArgumentException || (InvalidArgumentException = {}));
export var DescribeCommentsRequest;
(function (DescribeCommentsRequest) {
    /**
     * @internal
     */
    DescribeCommentsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeCommentsRequest || (DescribeCommentsRequest = {}));
export var DescribeCommentsResponse;
(function (DescribeCommentsResponse) {
    /**
     * @internal
     */
    DescribeCommentsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Comments && { Comments: obj.Comments.map(function (item) { return Comment.filterSensitiveLog(item); }) }))); };
})(DescribeCommentsResponse || (DescribeCommentsResponse = {}));
export var DescribeDocumentVersionsRequest;
(function (DescribeDocumentVersionsRequest) {
    /**
     * @internal
     */
    DescribeDocumentVersionsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeDocumentVersionsRequest || (DescribeDocumentVersionsRequest = {}));
export var DocumentSourceType;
(function (DocumentSourceType) {
    DocumentSourceType["ORIGINAL"] = "ORIGINAL";
    DocumentSourceType["WITH_COMMENTS"] = "WITH_COMMENTS";
})(DocumentSourceType || (DocumentSourceType = {}));
export var DocumentStatusType;
(function (DocumentStatusType) {
    DocumentStatusType["ACTIVE"] = "ACTIVE";
    DocumentStatusType["INITIALIZED"] = "INITIALIZED";
})(DocumentStatusType || (DocumentStatusType = {}));
export var DocumentThumbnailType;
(function (DocumentThumbnailType) {
    DocumentThumbnailType["LARGE"] = "LARGE";
    DocumentThumbnailType["SMALL"] = "SMALL";
    DocumentThumbnailType["SMALL_HQ"] = "SMALL_HQ";
})(DocumentThumbnailType || (DocumentThumbnailType = {}));
export var DocumentVersionMetadata;
(function (DocumentVersionMetadata) {
    /**
     * @internal
     */
    DocumentVersionMetadata.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Thumbnail && { Thumbnail: SENSITIVE_STRING })), (obj.Source && { Source: SENSITIVE_STRING }))); };
})(DocumentVersionMetadata || (DocumentVersionMetadata = {}));
export var DescribeDocumentVersionsResponse;
(function (DescribeDocumentVersionsResponse) {
    /**
     * @internal
     */
    DescribeDocumentVersionsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.DocumentVersions && {
        DocumentVersions: obj.DocumentVersions.map(function (item) { return DocumentVersionMetadata.filterSensitiveLog(item); }),
    }))); };
})(DescribeDocumentVersionsResponse || (DescribeDocumentVersionsResponse = {}));
export var OrderType;
(function (OrderType) {
    OrderType["ASCENDING"] = "ASCENDING";
    OrderType["DESCENDING"] = "DESCENDING";
})(OrderType || (OrderType = {}));
export var ResourceSortType;
(function (ResourceSortType) {
    ResourceSortType["DATE"] = "DATE";
    ResourceSortType["NAME"] = "NAME";
})(ResourceSortType || (ResourceSortType = {}));
export var FolderContentType;
(function (FolderContentType) {
    FolderContentType["ALL"] = "ALL";
    FolderContentType["DOCUMENT"] = "DOCUMENT";
    FolderContentType["FOLDER"] = "FOLDER";
})(FolderContentType || (FolderContentType = {}));
export var DescribeFolderContentsRequest;
(function (DescribeFolderContentsRequest) {
    /**
     * @internal
     */
    DescribeFolderContentsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeFolderContentsRequest || (DescribeFolderContentsRequest = {}));
export var DocumentMetadata;
(function (DocumentMetadata) {
    /**
     * @internal
     */
    DocumentMetadata.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.LatestVersionMetadata && {
        LatestVersionMetadata: DocumentVersionMetadata.filterSensitiveLog(obj.LatestVersionMetadata),
    }))); };
})(DocumentMetadata || (DocumentMetadata = {}));
export var DescribeFolderContentsResponse;
(function (DescribeFolderContentsResponse) {
    /**
     * @internal
     */
    DescribeFolderContentsResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Documents && { Documents: obj.Documents.map(function (item) { return DocumentMetadata.filterSensitiveLog(item); }) }))); };
})(DescribeFolderContentsResponse || (DescribeFolderContentsResponse = {}));
export var DescribeGroupsRequest;
(function (DescribeGroupsRequest) {
    /**
     * @internal
     */
    DescribeGroupsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING })), (obj.SearchQuery && { SearchQuery: SENSITIVE_STRING }))); };
})(DescribeGroupsRequest || (DescribeGroupsRequest = {}));
export var DescribeGroupsResponse;
(function (DescribeGroupsResponse) {
    /**
     * @internal
     */
    DescribeGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeGroupsResponse || (DescribeGroupsResponse = {}));
export var DescribeNotificationSubscriptionsRequest;
(function (DescribeNotificationSubscriptionsRequest) {
    /**
     * @internal
     */
    DescribeNotificationSubscriptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotificationSubscriptionsRequest || (DescribeNotificationSubscriptionsRequest = {}));
export var DescribeNotificationSubscriptionsResponse;
(function (DescribeNotificationSubscriptionsResponse) {
    /**
     * @internal
     */
    DescribeNotificationSubscriptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeNotificationSubscriptionsResponse || (DescribeNotificationSubscriptionsResponse = {}));
export var DescribeResourcePermissionsRequest;
(function (DescribeResourcePermissionsRequest) {
    /**
     * @internal
     */
    DescribeResourcePermissionsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeResourcePermissionsRequest || (DescribeResourcePermissionsRequest = {}));
export var RolePermissionType;
(function (RolePermissionType) {
    RolePermissionType["DIRECT"] = "DIRECT";
    RolePermissionType["INHERITED"] = "INHERITED";
})(RolePermissionType || (RolePermissionType = {}));
export var PermissionInfo;
(function (PermissionInfo) {
    /**
     * @internal
     */
    PermissionInfo.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PermissionInfo || (PermissionInfo = {}));
export var Principal;
(function (Principal) {
    /**
     * @internal
     */
    Principal.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Principal || (Principal = {}));
export var DescribeResourcePermissionsResponse;
(function (DescribeResourcePermissionsResponse) {
    /**
     * @internal
     */
    DescribeResourcePermissionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeResourcePermissionsResponse || (DescribeResourcePermissionsResponse = {}));
export var DescribeRootFoldersRequest;
(function (DescribeRootFoldersRequest) {
    /**
     * @internal
     */
    DescribeRootFoldersRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(DescribeRootFoldersRequest || (DescribeRootFoldersRequest = {}));
export var DescribeRootFoldersResponse;
(function (DescribeRootFoldersResponse) {
    /**
     * @internal
     */
    DescribeRootFoldersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRootFoldersResponse || (DescribeRootFoldersResponse = {}));
export var UserFilterType;
(function (UserFilterType) {
    UserFilterType["ACTIVE_PENDING"] = "ACTIVE_PENDING";
    UserFilterType["ALL"] = "ALL";
})(UserFilterType || (UserFilterType = {}));
export var UserSortType;
(function (UserSortType) {
    UserSortType["FULL_NAME"] = "FULL_NAME";
    UserSortType["STORAGE_LIMIT"] = "STORAGE_LIMIT";
    UserSortType["STORAGE_USED"] = "STORAGE_USED";
    UserSortType["USER_NAME"] = "USER_NAME";
    UserSortType["USER_STATUS"] = "USER_STATUS";
})(UserSortType || (UserSortType = {}));
export var DescribeUsersRequest;
(function (DescribeUsersRequest) {
    /**
     * @internal
     */
    DescribeUsersRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING })), (obj.Query && { Query: SENSITIVE_STRING }))); };
})(DescribeUsersRequest || (DescribeUsersRequest = {}));
export var DescribeUsersResponse;
(function (DescribeUsersResponse) {
    /**
     * @internal
     */
    DescribeUsersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUsersResponse || (DescribeUsersResponse = {}));
export var RequestedEntityTooLargeException;
(function (RequestedEntityTooLargeException) {
    /**
     * @internal
     */
    RequestedEntityTooLargeException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestedEntityTooLargeException || (RequestedEntityTooLargeException = {}));
export var GetCurrentUserRequest;
(function (GetCurrentUserRequest) {
    /**
     * @internal
     */
    GetCurrentUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetCurrentUserRequest || (GetCurrentUserRequest = {}));
export var GetCurrentUserResponse;
(function (GetCurrentUserResponse) {
    /**
     * @internal
     */
    GetCurrentUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCurrentUserResponse || (GetCurrentUserResponse = {}));
export var GetDocumentRequest;
(function (GetDocumentRequest) {
    /**
     * @internal
     */
    GetDocumentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetDocumentRequest || (GetDocumentRequest = {}));
export var GetDocumentResponse;
(function (GetDocumentResponse) {
    /**
     * @internal
     */
    GetDocumentResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) }))); };
})(GetDocumentResponse || (GetDocumentResponse = {}));
export var InvalidPasswordException;
(function (InvalidPasswordException) {
    /**
     * @internal
     */
    InvalidPasswordException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPasswordException || (InvalidPasswordException = {}));
export var GetDocumentPathRequest;
(function (GetDocumentPathRequest) {
    /**
     * @internal
     */
    GetDocumentPathRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetDocumentPathRequest || (GetDocumentPathRequest = {}));
export var ResourcePathComponent;
(function (ResourcePathComponent) {
    /**
     * @internal
     */
    ResourcePathComponent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePathComponent || (ResourcePathComponent = {}));
export var ResourcePath;
(function (ResourcePath) {
    /**
     * @internal
     */
    ResourcePath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourcePath || (ResourcePath = {}));
export var GetDocumentPathResponse;
(function (GetDocumentPathResponse) {
    /**
     * @internal
     */
    GetDocumentPathResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDocumentPathResponse || (GetDocumentPathResponse = {}));
export var GetDocumentVersionRequest;
(function (GetDocumentVersionRequest) {
    /**
     * @internal
     */
    GetDocumentVersionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetDocumentVersionRequest || (GetDocumentVersionRequest = {}));
export var GetDocumentVersionResponse;
(function (GetDocumentVersionResponse) {
    /**
     * @internal
     */
    GetDocumentVersionResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Metadata && { Metadata: DocumentVersionMetadata.filterSensitiveLog(obj.Metadata) }))); };
})(GetDocumentVersionResponse || (GetDocumentVersionResponse = {}));
export var GetFolderRequest;
(function (GetFolderRequest) {
    /**
     * @internal
     */
    GetFolderRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetFolderRequest || (GetFolderRequest = {}));
export var GetFolderResponse;
(function (GetFolderResponse) {
    /**
     * @internal
     */
    GetFolderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFolderResponse || (GetFolderResponse = {}));
export var GetFolderPathRequest;
(function (GetFolderPathRequest) {
    /**
     * @internal
     */
    GetFolderPathRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetFolderPathRequest || (GetFolderPathRequest = {}));
export var GetFolderPathResponse;
(function (GetFolderPathResponse) {
    /**
     * @internal
     */
    GetFolderPathResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFolderPathResponse || (GetFolderPathResponse = {}));
export var ResourceCollectionType;
(function (ResourceCollectionType) {
    ResourceCollectionType["SHARED_WITH_ME"] = "SHARED_WITH_ME";
})(ResourceCollectionType || (ResourceCollectionType = {}));
export var GetResourcesRequest;
(function (GetResourcesRequest) {
    /**
     * @internal
     */
    GetResourcesRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(GetResourcesRequest || (GetResourcesRequest = {}));
export var GetResourcesResponse;
(function (GetResourcesResponse) {
    /**
     * @internal
     */
    GetResourcesResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Documents && { Documents: obj.Documents.map(function (item) { return DocumentMetadata.filterSensitiveLog(item); }) }))); };
})(GetResourcesResponse || (GetResourcesResponse = {}));
export var DraftUploadOutOfSyncException;
(function (DraftUploadOutOfSyncException) {
    /**
     * @internal
     */
    DraftUploadOutOfSyncException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DraftUploadOutOfSyncException || (DraftUploadOutOfSyncException = {}));
export var InitiateDocumentVersionUploadRequest;
(function (InitiateDocumentVersionUploadRequest) {
    /**
     * @internal
     */
    InitiateDocumentVersionUploadRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(InitiateDocumentVersionUploadRequest || (InitiateDocumentVersionUploadRequest = {}));
export var UploadMetadata;
(function (UploadMetadata) {
    /**
     * @internal
     */
    UploadMetadata.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UploadUrl && { UploadUrl: SENSITIVE_STRING }))); };
})(UploadMetadata || (UploadMetadata = {}));
export var InitiateDocumentVersionUploadResponse;
(function (InitiateDocumentVersionUploadResponse) {
    /**
     * @internal
     */
    InitiateDocumentVersionUploadResponse.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Metadata && { Metadata: DocumentMetadata.filterSensitiveLog(obj.Metadata) })), (obj.UploadMetadata && { UploadMetadata: UploadMetadata.filterSensitiveLog(obj.UploadMetadata) }))); };
})(InitiateDocumentVersionUploadResponse || (InitiateDocumentVersionUploadResponse = {}));
export var ResourceAlreadyCheckedOutException;
(function (ResourceAlreadyCheckedOutException) {
    /**
     * @internal
     */
    ResourceAlreadyCheckedOutException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyCheckedOutException || (ResourceAlreadyCheckedOutException = {}));
export var StorageLimitExceededException;
(function (StorageLimitExceededException) {
    /**
     * @internal
     */
    StorageLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLimitExceededException || (StorageLimitExceededException = {}));
export var StorageLimitWillExceedException;
(function (StorageLimitWillExceedException) {
    /**
     * @internal
     */
    StorageLimitWillExceedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StorageLimitWillExceedException || (StorageLimitWillExceedException = {}));
export var RemoveAllResourcePermissionsRequest;
(function (RemoveAllResourcePermissionsRequest) {
    /**
     * @internal
     */
    RemoveAllResourcePermissionsRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(RemoveAllResourcePermissionsRequest || (RemoveAllResourcePermissionsRequest = {}));
export var RemoveResourcePermissionRequest;
(function (RemoveResourcePermissionRequest) {
    /**
     * @internal
     */
    RemoveResourcePermissionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(RemoveResourcePermissionRequest || (RemoveResourcePermissionRequest = {}));
export var UpdateDocumentRequest;
(function (UpdateDocumentRequest) {
    /**
     * @internal
     */
    UpdateDocumentRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(UpdateDocumentRequest || (UpdateDocumentRequest = {}));
export var InvalidOperationException;
(function (InvalidOperationException) {
    /**
     * @internal
     */
    InvalidOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidOperationException || (InvalidOperationException = {}));
export var DocumentVersionStatus;
(function (DocumentVersionStatus) {
    DocumentVersionStatus["ACTIVE"] = "ACTIVE";
})(DocumentVersionStatus || (DocumentVersionStatus = {}));
export var UpdateDocumentVersionRequest;
(function (UpdateDocumentVersionRequest) {
    /**
     * @internal
     */
    UpdateDocumentVersionRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(UpdateDocumentVersionRequest || (UpdateDocumentVersionRequest = {}));
export var UpdateFolderRequest;
(function (UpdateFolderRequest) {
    /**
     * @internal
     */
    UpdateFolderRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(UpdateFolderRequest || (UpdateFolderRequest = {}));
export var DeactivatingLastSystemUserException;
(function (DeactivatingLastSystemUserException) {
    /**
     * @internal
     */
    DeactivatingLastSystemUserException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeactivatingLastSystemUserException || (DeactivatingLastSystemUserException = {}));
export var IllegalUserStateException;
(function (IllegalUserStateException) {
    /**
     * @internal
     */
    IllegalUserStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IllegalUserStateException || (IllegalUserStateException = {}));
export var BooleanEnumType;
(function (BooleanEnumType) {
    BooleanEnumType["FALSE"] = "FALSE";
    BooleanEnumType["TRUE"] = "TRUE";
})(BooleanEnumType || (BooleanEnumType = {}));
export var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AuthenticationToken && { AuthenticationToken: SENSITIVE_STRING }))); };
})(UpdateUserRequest || (UpdateUserRequest = {}));
export var UpdateUserResponse;
(function (UpdateUserResponse) {
    /**
     * @internal
     */
    UpdateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserResponse || (UpdateUserResponse = {}));
//# sourceMappingURL=models_0.js.map