"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileSummary = exports.ListUserProfilesRequest = exports.ListTeamMembersResult = exports.TeamMember = exports.ListTeamMembersRequest = exports.ListTagsForProjectResult = exports.ListTagsForProjectRequest = exports.ListResourcesResult = exports.Resource = exports.ListResourcesRequest = exports.ListProjectsResult = exports.ProjectSummary = exports.ListProjectsRequest = exports.InvalidNextTokenException = exports.DisassociateTeamMemberResult = exports.DisassociateTeamMemberRequest = exports.UserProfileNotFoundException = exports.DescribeUserProfileResult = exports.DescribeUserProfileRequest = exports.DescribeProjectResult = exports.ProjectStatus = exports.DescribeProjectRequest = exports.DeleteUserProfileResult = exports.DeleteUserProfileRequest = exports.DeleteProjectResult = exports.DeleteProjectRequest = exports.UserProfileAlreadyExistsException = exports.CreateUserProfileResult = exports.CreateUserProfileRequest = exports.ProjectCreationFailedException = exports.ProjectAlreadyExistsException = exports.CreateProjectResult = exports.CreateProjectRequest = exports.Toolchain = exports.ToolchainSource = exports.Code = exports.CodeSource = exports.S3Location = exports.CodeDestination = exports.GitHubCodeDestination = exports.CodeCommitCodeDestination = exports.ValidationException = exports.TeamMemberAlreadyAssociatedException = exports.ProjectNotFoundException = exports.ProjectConfigurationException = exports.LimitExceededException = exports.InvalidServiceRoleException = exports.ConcurrentModificationException = exports.AssociateTeamMemberResult = exports.AssociateTeamMemberRequest = void 0;
exports.UpdateUserProfileResult = exports.UpdateUserProfileRequest = exports.UpdateTeamMemberResult = exports.UpdateTeamMemberRequest = exports.TeamMemberNotFoundException = exports.UpdateProjectResult = exports.UpdateProjectRequest = exports.UntagProjectResult = exports.UntagProjectRequest = exports.TagProjectResult = exports.TagProjectRequest = exports.ListUserProfilesResult = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AssociateTeamMemberRequest;
(function (AssociateTeamMemberRequest) {
    /**
     * @internal
     */
    AssociateTeamMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTeamMemberRequest = exports.AssociateTeamMemberRequest || (exports.AssociateTeamMemberRequest = {}));
var AssociateTeamMemberResult;
(function (AssociateTeamMemberResult) {
    /**
     * @internal
     */
    AssociateTeamMemberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateTeamMemberResult = exports.AssociateTeamMemberResult || (exports.AssociateTeamMemberResult = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var InvalidServiceRoleException;
(function (InvalidServiceRoleException) {
    /**
     * @internal
     */
    InvalidServiceRoleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidServiceRoleException = exports.InvalidServiceRoleException || (exports.InvalidServiceRoleException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ProjectConfigurationException;
(function (ProjectConfigurationException) {
    /**
     * @internal
     */
    ProjectConfigurationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectConfigurationException = exports.ProjectConfigurationException || (exports.ProjectConfigurationException = {}));
var ProjectNotFoundException;
(function (ProjectNotFoundException) {
    /**
     * @internal
     */
    ProjectNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectNotFoundException = exports.ProjectNotFoundException || (exports.ProjectNotFoundException = {}));
var TeamMemberAlreadyAssociatedException;
(function (TeamMemberAlreadyAssociatedException) {
    /**
     * @internal
     */
    TeamMemberAlreadyAssociatedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeamMemberAlreadyAssociatedException = exports.TeamMemberAlreadyAssociatedException || (exports.TeamMemberAlreadyAssociatedException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var CodeCommitCodeDestination;
(function (CodeCommitCodeDestination) {
    /**
     * @internal
     */
    CodeCommitCodeDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeCommitCodeDestination = exports.CodeCommitCodeDestination || (exports.CodeCommitCodeDestination = {}));
var GitHubCodeDestination;
(function (GitHubCodeDestination) {
    /**
     * @internal
     */
    GitHubCodeDestination.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.token && { token: smithy_client_1.SENSITIVE_STRING }),
    });
})(GitHubCodeDestination = exports.GitHubCodeDestination || (exports.GitHubCodeDestination = {}));
var CodeDestination;
(function (CodeDestination) {
    /**
     * @internal
     */
    CodeDestination.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.gitHub && { gitHub: GitHubCodeDestination.filterSensitiveLog(obj.gitHub) }),
    });
})(CodeDestination = exports.CodeDestination || (exports.CodeDestination = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var CodeSource;
(function (CodeSource) {
    /**
     * @internal
     */
    CodeSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CodeSource = exports.CodeSource || (exports.CodeSource = {}));
var Code;
(function (Code) {
    /**
     * @internal
     */
    Code.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.destination && { destination: CodeDestination.filterSensitiveLog(obj.destination) }),
    });
})(Code = exports.Code || (exports.Code = {}));
var ToolchainSource;
(function (ToolchainSource) {
    /**
     * @internal
     */
    ToolchainSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ToolchainSource = exports.ToolchainSource || (exports.ToolchainSource = {}));
var Toolchain;
(function (Toolchain) {
    /**
     * @internal
     */
    Toolchain.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.stackParameters && { stackParameters: smithy_client_1.SENSITIVE_STRING }),
    });
})(Toolchain = exports.Toolchain || (exports.Toolchain = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.name && { name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sourceCode && { sourceCode: obj.sourceCode.map((item) => Code.filterSensitiveLog(item)) }),
        ...(obj.toolchain && { toolchain: Toolchain.filterSensitiveLog(obj.toolchain) }),
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var CreateProjectResult;
(function (CreateProjectResult) {
    /**
     * @internal
     */
    CreateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResult = exports.CreateProjectResult || (exports.CreateProjectResult = {}));
var ProjectAlreadyExistsException;
(function (ProjectAlreadyExistsException) {
    /**
     * @internal
     */
    ProjectAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectAlreadyExistsException = exports.ProjectAlreadyExistsException || (exports.ProjectAlreadyExistsException = {}));
var ProjectCreationFailedException;
(function (ProjectCreationFailedException) {
    /**
     * @internal
     */
    ProjectCreationFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectCreationFailedException = exports.ProjectCreationFailedException || (exports.ProjectCreationFailedException = {}));
var CreateUserProfileRequest;
(function (CreateUserProfileRequest) {
    /**
     * @internal
     */
    CreateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateUserProfileRequest = exports.CreateUserProfileRequest || (exports.CreateUserProfileRequest = {}));
var CreateUserProfileResult;
(function (CreateUserProfileResult) {
    /**
     * @internal
     */
    CreateUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateUserProfileResult = exports.CreateUserProfileResult || (exports.CreateUserProfileResult = {}));
var UserProfileAlreadyExistsException;
(function (UserProfileAlreadyExistsException) {
    /**
     * @internal
     */
    UserProfileAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserProfileAlreadyExistsException = exports.UserProfileAlreadyExistsException || (exports.UserProfileAlreadyExistsException = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResult;
(function (DeleteProjectResult) {
    /**
     * @internal
     */
    DeleteProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResult = exports.DeleteProjectResult || (exports.DeleteProjectResult = {}));
var DeleteUserProfileRequest;
(function (DeleteUserProfileRequest) {
    /**
     * @internal
     */
    DeleteUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserProfileRequest = exports.DeleteUserProfileRequest || (exports.DeleteUserProfileRequest = {}));
var DeleteUserProfileResult;
(function (DeleteUserProfileResult) {
    /**
     * @internal
     */
    DeleteUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserProfileResult = exports.DeleteUserProfileResult || (exports.DeleteUserProfileResult = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var ProjectStatus;
(function (ProjectStatus) {
    /**
     * @internal
     */
    ProjectStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectStatus = exports.ProjectStatus || (exports.ProjectStatus = {}));
var DescribeProjectResult;
(function (DescribeProjectResult) {
    /**
     * @internal
     */
    DescribeProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.name && { name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeProjectResult = exports.DescribeProjectResult || (exports.DescribeProjectResult = {}));
var DescribeUserProfileRequest;
(function (DescribeUserProfileRequest) {
    /**
     * @internal
     */
    DescribeUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserProfileRequest = exports.DescribeUserProfileRequest || (exports.DescribeUserProfileRequest = {}));
var DescribeUserProfileResult;
(function (DescribeUserProfileResult) {
    /**
     * @internal
     */
    DescribeUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(DescribeUserProfileResult = exports.DescribeUserProfileResult || (exports.DescribeUserProfileResult = {}));
var UserProfileNotFoundException;
(function (UserProfileNotFoundException) {
    /**
     * @internal
     */
    UserProfileNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserProfileNotFoundException = exports.UserProfileNotFoundException || (exports.UserProfileNotFoundException = {}));
var DisassociateTeamMemberRequest;
(function (DisassociateTeamMemberRequest) {
    /**
     * @internal
     */
    DisassociateTeamMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTeamMemberRequest = exports.DisassociateTeamMemberRequest || (exports.DisassociateTeamMemberRequest = {}));
var DisassociateTeamMemberResult;
(function (DisassociateTeamMemberResult) {
    /**
     * @internal
     */
    DisassociateTeamMemberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateTeamMemberResult = exports.DisassociateTeamMemberResult || (exports.DisassociateTeamMemberResult = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ProjectSummary;
(function (ProjectSummary) {
    /**
     * @internal
     */
    ProjectSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectSummary = exports.ProjectSummary || (exports.ProjectSummary = {}));
var ListProjectsResult;
(function (ListProjectsResult) {
    /**
     * @internal
     */
    ListProjectsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResult = exports.ListProjectsResult || (exports.ListProjectsResult = {}));
var ListResourcesRequest;
(function (ListResourcesRequest) {
    /**
     * @internal
     */
    ListResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesRequest = exports.ListResourcesRequest || (exports.ListResourcesRequest = {}));
var Resource;
(function (Resource) {
    /**
     * @internal
     */
    Resource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Resource = exports.Resource || (exports.Resource = {}));
var ListResourcesResult;
(function (ListResourcesResult) {
    /**
     * @internal
     */
    ListResourcesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesResult = exports.ListResourcesResult || (exports.ListResourcesResult = {}));
var ListTagsForProjectRequest;
(function (ListTagsForProjectRequest) {
    /**
     * @internal
     */
    ListTagsForProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForProjectRequest = exports.ListTagsForProjectRequest || (exports.ListTagsForProjectRequest = {}));
var ListTagsForProjectResult;
(function (ListTagsForProjectResult) {
    /**
     * @internal
     */
    ListTagsForProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForProjectResult = exports.ListTagsForProjectResult || (exports.ListTagsForProjectResult = {}));
var ListTeamMembersRequest;
(function (ListTeamMembersRequest) {
    /**
     * @internal
     */
    ListTeamMembersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTeamMembersRequest = exports.ListTeamMembersRequest || (exports.ListTeamMembersRequest = {}));
var TeamMember;
(function (TeamMember) {
    /**
     * @internal
     */
    TeamMember.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeamMember = exports.TeamMember || (exports.TeamMember = {}));
var ListTeamMembersResult;
(function (ListTeamMembersResult) {
    /**
     * @internal
     */
    ListTeamMembersResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTeamMembersResult = exports.ListTeamMembersResult || (exports.ListTeamMembersResult = {}));
var ListUserProfilesRequest;
(function (ListUserProfilesRequest) {
    /**
     * @internal
     */
    ListUserProfilesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUserProfilesRequest = exports.ListUserProfilesRequest || (exports.ListUserProfilesRequest = {}));
var UserProfileSummary;
(function (UserProfileSummary) {
    /**
     * @internal
     */
    UserProfileSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(UserProfileSummary = exports.UserProfileSummary || (exports.UserProfileSummary = {}));
var ListUserProfilesResult;
(function (ListUserProfilesResult) {
    /**
     * @internal
     */
    ListUserProfilesResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.userProfiles && {
            userProfiles: obj.userProfiles.map((item) => UserProfileSummary.filterSensitiveLog(item)),
        }),
    });
})(ListUserProfilesResult = exports.ListUserProfilesResult || (exports.ListUserProfilesResult = {}));
var TagProjectRequest;
(function (TagProjectRequest) {
    /**
     * @internal
     */
    TagProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagProjectRequest = exports.TagProjectRequest || (exports.TagProjectRequest = {}));
var TagProjectResult;
(function (TagProjectResult) {
    /**
     * @internal
     */
    TagProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagProjectResult = exports.TagProjectResult || (exports.TagProjectResult = {}));
var UntagProjectRequest;
(function (UntagProjectRequest) {
    /**
     * @internal
     */
    UntagProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagProjectRequest = exports.UntagProjectRequest || (exports.UntagProjectRequest = {}));
var UntagProjectResult;
(function (UntagProjectResult) {
    /**
     * @internal
     */
    UntagProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagProjectResult = exports.UntagProjectResult || (exports.UntagProjectResult = {}));
var UpdateProjectRequest;
(function (UpdateProjectRequest) {
    /**
     * @internal
     */
    UpdateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.name && { name: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.description && { description: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateProjectRequest = exports.UpdateProjectRequest || (exports.UpdateProjectRequest = {}));
var UpdateProjectResult;
(function (UpdateProjectResult) {
    /**
     * @internal
     */
    UpdateProjectResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateProjectResult = exports.UpdateProjectResult || (exports.UpdateProjectResult = {}));
var TeamMemberNotFoundException;
(function (TeamMemberNotFoundException) {
    /**
     * @internal
     */
    TeamMemberNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TeamMemberNotFoundException = exports.TeamMemberNotFoundException || (exports.TeamMemberNotFoundException = {}));
var UpdateTeamMemberRequest;
(function (UpdateTeamMemberRequest) {
    /**
     * @internal
     */
    UpdateTeamMemberRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTeamMemberRequest = exports.UpdateTeamMemberRequest || (exports.UpdateTeamMemberRequest = {}));
var UpdateTeamMemberResult;
(function (UpdateTeamMemberResult) {
    /**
     * @internal
     */
    UpdateTeamMemberResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTeamMemberResult = exports.UpdateTeamMemberResult || (exports.UpdateTeamMemberResult = {}));
var UpdateUserProfileRequest;
(function (UpdateUserProfileRequest) {
    /**
     * @internal
     */
    UpdateUserProfileRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateUserProfileRequest = exports.UpdateUserProfileRequest || (exports.UpdateUserProfileRequest = {}));
var UpdateUserProfileResult;
(function (UpdateUserProfileResult) {
    /**
     * @internal
     */
    UpdateUserProfileResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.displayName && { displayName: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.emailAddress && { emailAddress: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateUserProfileResult = exports.UpdateUserProfileResult || (exports.UpdateUserProfileResult = {}));
//# sourceMappingURL=models_0.js.map