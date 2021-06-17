import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AssociateTeamMemberRequest;
(function (AssociateTeamMemberRequest) {
    /**
     * @internal
     */
    AssociateTeamMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTeamMemberRequest || (AssociateTeamMemberRequest = {}));
export var AssociateTeamMemberResult;
(function (AssociateTeamMemberResult) {
    /**
     * @internal
     */
    AssociateTeamMemberResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateTeamMemberResult || (AssociateTeamMemberResult = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var InvalidServiceRoleException;
(function (InvalidServiceRoleException) {
    /**
     * @internal
     */
    InvalidServiceRoleException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidServiceRoleException || (InvalidServiceRoleException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ProjectConfigurationException;
(function (ProjectConfigurationException) {
    /**
     * @internal
     */
    ProjectConfigurationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectConfigurationException || (ProjectConfigurationException = {}));
export var ProjectNotFoundException;
(function (ProjectNotFoundException) {
    /**
     * @internal
     */
    ProjectNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectNotFoundException || (ProjectNotFoundException = {}));
export var TeamMemberAlreadyAssociatedException;
(function (TeamMemberAlreadyAssociatedException) {
    /**
     * @internal
     */
    TeamMemberAlreadyAssociatedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeamMemberAlreadyAssociatedException || (TeamMemberAlreadyAssociatedException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var CodeCommitCodeDestination;
(function (CodeCommitCodeDestination) {
    /**
     * @internal
     */
    CodeCommitCodeDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeCommitCodeDestination || (CodeCommitCodeDestination = {}));
export var GitHubCodeDestination;
(function (GitHubCodeDestination) {
    /**
     * @internal
     */
    GitHubCodeDestination.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.token && { token: SENSITIVE_STRING }))); };
})(GitHubCodeDestination || (GitHubCodeDestination = {}));
export var CodeDestination;
(function (CodeDestination) {
    /**
     * @internal
     */
    CodeDestination.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.gitHub && { gitHub: GitHubCodeDestination.filterSensitiveLog(obj.gitHub) }))); };
})(CodeDestination || (CodeDestination = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var CodeSource;
(function (CodeSource) {
    /**
     * @internal
     */
    CodeSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CodeSource || (CodeSource = {}));
export var Code;
(function (Code) {
    /**
     * @internal
     */
    Code.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.destination && { destination: CodeDestination.filterSensitiveLog(obj.destination) }))); };
})(Code || (Code = {}));
export var ToolchainSource;
(function (ToolchainSource) {
    /**
     * @internal
     */
    ToolchainSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ToolchainSource || (ToolchainSource = {}));
export var Toolchain;
(function (Toolchain) {
    /**
     * @internal
     */
    Toolchain.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.stackParameters && { stackParameters: SENSITIVE_STRING }))); };
})(Toolchain || (Toolchain = {}));
export var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign(__assign({}, obj), (obj.name && { name: SENSITIVE_STRING })), (obj.description && { description: SENSITIVE_STRING })), (obj.sourceCode && { sourceCode: obj.sourceCode.map(function (item) { return Code.filterSensitiveLog(item); }) })), (obj.toolchain && { toolchain: Toolchain.filterSensitiveLog(obj.toolchain) }))); };
})(CreateProjectRequest || (CreateProjectRequest = {}));
export var CreateProjectResult;
(function (CreateProjectResult) {
    /**
     * @internal
     */
    CreateProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectResult || (CreateProjectResult = {}));
export var ProjectAlreadyExistsException;
(function (ProjectAlreadyExistsException) {
    /**
     * @internal
     */
    ProjectAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectAlreadyExistsException || (ProjectAlreadyExistsException = {}));
export var ProjectCreationFailedException;
(function (ProjectCreationFailedException) {
    /**
     * @internal
     */
    ProjectCreationFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectCreationFailedException || (ProjectCreationFailedException = {}));
export var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    /**
     * @internal
     */
    CreateUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(CreateUserProfileRequest || (CreateUserProfileRequest = {}));
export var CreateUserProfileResult;
(function (CreateUserProfileResult) {
    /**
     * @internal
     */
    CreateUserProfileResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(CreateUserProfileResult || (CreateUserProfileResult = {}));
export var UserProfileAlreadyExistsException;
(function (UserProfileAlreadyExistsException) {
    /**
     * @internal
     */
    UserProfileAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserProfileAlreadyExistsException || (UserProfileAlreadyExistsException = {}));
export var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectRequest || (DeleteProjectRequest = {}));
export var DeleteProjectResult;
(function (DeleteProjectResult) {
    /**
     * @internal
     */
    DeleteProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectResult || (DeleteProjectResult = {}));
export var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    /**
     * @internal
     */
    DeleteUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserProfileRequest || (DeleteUserProfileRequest = {}));
export var DeleteUserProfileResult;
(function (DeleteUserProfileResult) {
    /**
     * @internal
     */
    DeleteUserProfileResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserProfileResult || (DeleteUserProfileResult = {}));
export var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectRequest || (DescribeProjectRequest = {}));
export var ProjectStatus;
(function (ProjectStatus) {
    /**
     * @internal
     */
    ProjectStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectStatus || (ProjectStatus = {}));
export var DescribeProjectResult;
(function (DescribeProjectResult) {
    /**
     * @internal
     */
    DescribeProjectResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.name && { name: SENSITIVE_STRING })), (obj.description && { description: SENSITIVE_STRING }))); };
})(DescribeProjectResult || (DescribeProjectResult = {}));
export var DescribeUserProfileRequest;
(function (DescribeUserProfileRequest) {
    /**
     * @internal
     */
    DescribeUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserProfileRequest || (DescribeUserProfileRequest = {}));
export var DescribeUserProfileResult;
(function (DescribeUserProfileResult) {
    /**
     * @internal
     */
    DescribeUserProfileResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(DescribeUserProfileResult || (DescribeUserProfileResult = {}));
export var UserProfileNotFoundException;
(function (UserProfileNotFoundException) {
    /**
     * @internal
     */
    UserProfileNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UserProfileNotFoundException || (UserProfileNotFoundException = {}));
export var DisassociateTeamMemberRequest;
(function (DisassociateTeamMemberRequest) {
    /**
     * @internal
     */
    DisassociateTeamMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTeamMemberRequest || (DisassociateTeamMemberRequest = {}));
export var DisassociateTeamMemberResult;
(function (DisassociateTeamMemberResult) {
    /**
     * @internal
     */
    DisassociateTeamMemberResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateTeamMemberResult || (DisassociateTeamMemberResult = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsRequest || (ListProjectsRequest = {}));
export var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectSummary || (ProjectSummary = {}));
export var ListProjectsResult;
(function (ListProjectsResult) {
    /**
     * @internal
     */
    ListProjectsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsResult || (ListProjectsResult = {}));
export var ListResourcesRequest;
(function (ListResourcesRequest) {
    /**
     * @internal
     */
    ListResourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourcesRequest || (ListResourcesRequest = {}));
export var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Resource || (Resource = {}));
export var ListResourcesResult;
(function (ListResourcesResult) {
    /**
     * @internal
     */
    ListResourcesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourcesResult || (ListResourcesResult = {}));
export var ListTagsForProjectRequest;
(function (ListTagsForProjectRequest) {
    /**
     * @internal
     */
    ListTagsForProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForProjectRequest || (ListTagsForProjectRequest = {}));
export var ListTagsForProjectResult;
(function (ListTagsForProjectResult) {
    /**
     * @internal
     */
    ListTagsForProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForProjectResult || (ListTagsForProjectResult = {}));
export var ListTeamMembersRequest;
(function (ListTeamMembersRequest) {
    /**
     * @internal
     */
    ListTeamMembersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTeamMembersRequest || (ListTeamMembersRequest = {}));
export var TeamMember;
(function (TeamMember) {
    /**
     * @internal
     */
    TeamMember.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeamMember || (TeamMember = {}));
export var ListTeamMembersResult;
(function (ListTeamMembersResult) {
    /**
     * @internal
     */
    ListTeamMembersResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTeamMembersResult || (ListTeamMembersResult = {}));
export var ListUserProfilesRequest;
(function (ListUserProfilesRequest) {
    /**
     * @internal
     */
    ListUserProfilesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUserProfilesRequest || (ListUserProfilesRequest = {}));
export var UserProfileSummary;
(function (UserProfileSummary) {
    /**
     * @internal
     */
    UserProfileSummary.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(UserProfileSummary || (UserProfileSummary = {}));
export var ListUserProfilesResult;
(function (ListUserProfilesResult) {
    /**
     * @internal
     */
    ListUserProfilesResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.userProfiles && {
        userProfiles: obj.userProfiles.map(function (item) { return UserProfileSummary.filterSensitiveLog(item); }),
    }))); };
})(ListUserProfilesResult || (ListUserProfilesResult = {}));
export var TagProjectRequest;
(function (TagProjectRequest) {
    /**
     * @internal
     */
    TagProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagProjectRequest || (TagProjectRequest = {}));
export var TagProjectResult;
(function (TagProjectResult) {
    /**
     * @internal
     */
    TagProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagProjectResult || (TagProjectResult = {}));
export var UntagProjectRequest;
(function (UntagProjectRequest) {
    /**
     * @internal
     */
    UntagProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagProjectRequest || (UntagProjectRequest = {}));
export var UntagProjectResult;
(function (UntagProjectResult) {
    /**
     * @internal
     */
    UntagProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagProjectResult || (UntagProjectResult = {}));
export var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.name && { name: SENSITIVE_STRING })), (obj.description && { description: SENSITIVE_STRING }))); };
})(UpdateProjectRequest || (UpdateProjectRequest = {}));
export var UpdateProjectResult;
(function (UpdateProjectResult) {
    /**
     * @internal
     */
    UpdateProjectResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateProjectResult || (UpdateProjectResult = {}));
export var TeamMemberNotFoundException;
(function (TeamMemberNotFoundException) {
    /**
     * @internal
     */
    TeamMemberNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TeamMemberNotFoundException || (TeamMemberNotFoundException = {}));
export var UpdateTeamMemberRequest;
(function (UpdateTeamMemberRequest) {
    /**
     * @internal
     */
    UpdateTeamMemberRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTeamMemberRequest || (UpdateTeamMemberRequest = {}));
export var UpdateTeamMemberResult;
(function (UpdateTeamMemberResult) {
    /**
     * @internal
     */
    UpdateTeamMemberResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateTeamMemberResult || (UpdateTeamMemberResult = {}));
export var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    /**
     * @internal
     */
    UpdateUserProfileRequest.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(UpdateUserProfileRequest || (UpdateUserProfileRequest = {}));
export var UpdateUserProfileResult;
(function (UpdateUserProfileResult) {
    /**
     * @internal
     */
    UpdateUserProfileResult.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.displayName && { displayName: SENSITIVE_STRING })), (obj.emailAddress && { emailAddress: SENSITIVE_STRING }))); };
})(UpdateUserProfileResult || (UpdateUserProfileResult = {}));
//# sourceMappingURL=models_0.js.map