"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListedUser = exports.ListedServer = exports.ListAccessesResponse = exports.ListedAccess = exports.ListAccessesRequest = exports.InvalidNextTokenException = exports.ImportSshPublicKeyResponse = exports.ImportSshPublicKeyRequest = exports.DescribeUserResponse = exports.DescribeUserRequest = exports.DescribeServerResponse = exports.DescribeServerRequest = exports.DescribeSecurityPolicyResponse = exports.DescribeSecurityPolicyRequest = exports.DescribedUser = exports.SshPublicKey = exports.DescribedServer = exports.State = exports.DescribedSecurityPolicy = exports.DescribeAccessResponse = exports.DescribedAccess = exports.DescribeAccessRequest = exports.DeleteUserRequest = exports.DeleteSshPublicKeyRequest = exports.DeleteServerRequest = exports.DeleteAccessRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.ThrottlingException = exports.CreateServerResponse = exports.CreateServerRequest = exports.Tag = exports.Protocol = exports.IdentityProviderType = exports.IdentityProviderDetails = exports.EndpointType = exports.EndpointDetails = exports.Domain = exports.ServiceUnavailableException = exports.ResourceNotFoundException = exports.ResourceExistsException = exports.InvalidRequestException = exports.InternalServiceError = exports.CreateAccessResponse = exports.CreateAccessRequest = exports.PosixProfile = exports.HomeDirectoryType = exports.HomeDirectoryMapEntry = exports.ConflictException = exports.AccessDeniedException = void 0;
exports.UpdateUserResponse = exports.UpdateUserRequest = exports.UpdateServerResponse = exports.UpdateServerRequest = exports.UpdateAccessResponse = exports.UpdateAccessRequest = exports.UntagResourceRequest = exports.TestIdentityProviderResponse = exports.TestIdentityProviderRequest = exports.TagResourceRequest = exports.StopServerRequest = exports.StartServerRequest = exports.ListUsersResponse = exports.ListUsersRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListServersResponse = exports.ListServersRequest = exports.ListSecurityPoliciesResponse = exports.ListSecurityPoliciesRequest = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var HomeDirectoryMapEntry;
(function (HomeDirectoryMapEntry) {
    /**
     * @internal
     */
    HomeDirectoryMapEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HomeDirectoryMapEntry = exports.HomeDirectoryMapEntry || (exports.HomeDirectoryMapEntry = {}));
var HomeDirectoryType;
(function (HomeDirectoryType) {
    HomeDirectoryType["LOGICAL"] = "LOGICAL";
    HomeDirectoryType["PATH"] = "PATH";
})(HomeDirectoryType = exports.HomeDirectoryType || (exports.HomeDirectoryType = {}));
var PosixProfile;
(function (PosixProfile) {
    /**
     * @internal
     */
    PosixProfile.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PosixProfile = exports.PosixProfile || (exports.PosixProfile = {}));
var CreateAccessRequest;
(function (CreateAccessRequest) {
    /**
     * @internal
     */
    CreateAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessRequest = exports.CreateAccessRequest || (exports.CreateAccessRequest = {}));
var CreateAccessResponse;
(function (CreateAccessResponse) {
    /**
     * @internal
     */
    CreateAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAccessResponse = exports.CreateAccessResponse || (exports.CreateAccessResponse = {}));
var InternalServiceError;
(function (InternalServiceError) {
    /**
     * @internal
     */
    InternalServiceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ResourceExistsException;
(function (ResourceExistsException) {
    /**
     * @internal
     */
    ResourceExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceExistsException = exports.ResourceExistsException || (exports.ResourceExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceUnavailableException = exports.ServiceUnavailableException || (exports.ServiceUnavailableException = {}));
var Domain;
(function (Domain) {
    Domain["EFS"] = "EFS";
    Domain["S3"] = "S3";
})(Domain = exports.Domain || (exports.Domain = {}));
var EndpointDetails;
(function (EndpointDetails) {
    /**
     * @internal
     */
    EndpointDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndpointDetails = exports.EndpointDetails || (exports.EndpointDetails = {}));
var EndpointType;
(function (EndpointType) {
    EndpointType["PUBLIC"] = "PUBLIC";
    EndpointType["VPC"] = "VPC";
    EndpointType["VPC_ENDPOINT"] = "VPC_ENDPOINT";
})(EndpointType = exports.EndpointType || (exports.EndpointType = {}));
var IdentityProviderDetails;
(function (IdentityProviderDetails) {
    /**
     * @internal
     */
    IdentityProviderDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdentityProviderDetails = exports.IdentityProviderDetails || (exports.IdentityProviderDetails = {}));
var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType["API_GATEWAY"] = "API_GATEWAY";
    IdentityProviderType["AWS_DIRECTORY_SERVICE"] = "AWS_DIRECTORY_SERVICE";
    IdentityProviderType["SERVICE_MANAGED"] = "SERVICE_MANAGED";
})(IdentityProviderType = exports.IdentityProviderType || (exports.IdentityProviderType = {}));
var Protocol;
(function (Protocol) {
    Protocol["FTP"] = "FTP";
    Protocol["FTPS"] = "FTPS";
    Protocol["SFTP"] = "SFTP";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateServerRequest;
(function (CreateServerRequest) {
    /**
     * @internal
     */
    CreateServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.HostKey && { HostKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateServerRequest = exports.CreateServerRequest || (exports.CreateServerRequest = {}));
var CreateServerResponse;
(function (CreateServerResponse) {
    /**
     * @internal
     */
    CreateServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateServerResponse = exports.CreateServerResponse || (exports.CreateServerResponse = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
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
var DeleteAccessRequest;
(function (DeleteAccessRequest) {
    /**
     * @internal
     */
    DeleteAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAccessRequest = exports.DeleteAccessRequest || (exports.DeleteAccessRequest = {}));
var DeleteServerRequest;
(function (DeleteServerRequest) {
    /**
     * @internal
     */
    DeleteServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServerRequest = exports.DeleteServerRequest || (exports.DeleteServerRequest = {}));
var DeleteSshPublicKeyRequest;
(function (DeleteSshPublicKeyRequest) {
    /**
     * @internal
     */
    DeleteSshPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSshPublicKeyRequest = exports.DeleteSshPublicKeyRequest || (exports.DeleteSshPublicKeyRequest = {}));
var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteUserRequest = exports.DeleteUserRequest || (exports.DeleteUserRequest = {}));
var DescribeAccessRequest;
(function (DescribeAccessRequest) {
    /**
     * @internal
     */
    DescribeAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessRequest = exports.DescribeAccessRequest || (exports.DescribeAccessRequest = {}));
var DescribedAccess;
(function (DescribedAccess) {
    /**
     * @internal
     */
    DescribedAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribedAccess = exports.DescribedAccess || (exports.DescribedAccess = {}));
var DescribeAccessResponse;
(function (DescribeAccessResponse) {
    /**
     * @internal
     */
    DescribeAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccessResponse = exports.DescribeAccessResponse || (exports.DescribeAccessResponse = {}));
var DescribedSecurityPolicy;
(function (DescribedSecurityPolicy) {
    /**
     * @internal
     */
    DescribedSecurityPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribedSecurityPolicy = exports.DescribedSecurityPolicy || (exports.DescribedSecurityPolicy = {}));
var State;
(function (State) {
    State["OFFLINE"] = "OFFLINE";
    State["ONLINE"] = "ONLINE";
    State["STARTING"] = "STARTING";
    State["START_FAILED"] = "START_FAILED";
    State["STOPPING"] = "STOPPING";
    State["STOP_FAILED"] = "STOP_FAILED";
})(State = exports.State || (exports.State = {}));
var DescribedServer;
(function (DescribedServer) {
    /**
     * @internal
     */
    DescribedServer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribedServer = exports.DescribedServer || (exports.DescribedServer = {}));
var SshPublicKey;
(function (SshPublicKey) {
    /**
     * @internal
     */
    SshPublicKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SshPublicKey = exports.SshPublicKey || (exports.SshPublicKey = {}));
var DescribedUser;
(function (DescribedUser) {
    /**
     * @internal
     */
    DescribedUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribedUser = exports.DescribedUser || (exports.DescribedUser = {}));
var DescribeSecurityPolicyRequest;
(function (DescribeSecurityPolicyRequest) {
    /**
     * @internal
     */
    DescribeSecurityPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityPolicyRequest = exports.DescribeSecurityPolicyRequest || (exports.DescribeSecurityPolicyRequest = {}));
var DescribeSecurityPolicyResponse;
(function (DescribeSecurityPolicyResponse) {
    /**
     * @internal
     */
    DescribeSecurityPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSecurityPolicyResponse = exports.DescribeSecurityPolicyResponse || (exports.DescribeSecurityPolicyResponse = {}));
var DescribeServerRequest;
(function (DescribeServerRequest) {
    /**
     * @internal
     */
    DescribeServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServerRequest = exports.DescribeServerRequest || (exports.DescribeServerRequest = {}));
var DescribeServerResponse;
(function (DescribeServerResponse) {
    /**
     * @internal
     */
    DescribeServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServerResponse = exports.DescribeServerResponse || (exports.DescribeServerResponse = {}));
var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserRequest = exports.DescribeUserRequest || (exports.DescribeUserRequest = {}));
var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeUserResponse = exports.DescribeUserResponse || (exports.DescribeUserResponse = {}));
var ImportSshPublicKeyRequest;
(function (ImportSshPublicKeyRequest) {
    /**
     * @internal
     */
    ImportSshPublicKeyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSshPublicKeyRequest = exports.ImportSshPublicKeyRequest || (exports.ImportSshPublicKeyRequest = {}));
var ImportSshPublicKeyResponse;
(function (ImportSshPublicKeyResponse) {
    /**
     * @internal
     */
    ImportSshPublicKeyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportSshPublicKeyResponse = exports.ImportSshPublicKeyResponse || (exports.ImportSshPublicKeyResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListAccessesRequest;
(function (ListAccessesRequest) {
    /**
     * @internal
     */
    ListAccessesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessesRequest = exports.ListAccessesRequest || (exports.ListAccessesRequest = {}));
var ListedAccess;
(function (ListedAccess) {
    /**
     * @internal
     */
    ListedAccess.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListedAccess = exports.ListedAccess || (exports.ListedAccess = {}));
var ListAccessesResponse;
(function (ListAccessesResponse) {
    /**
     * @internal
     */
    ListAccessesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAccessesResponse = exports.ListAccessesResponse || (exports.ListAccessesResponse = {}));
var ListedServer;
(function (ListedServer) {
    /**
     * @internal
     */
    ListedServer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListedServer = exports.ListedServer || (exports.ListedServer = {}));
var ListedUser;
(function (ListedUser) {
    /**
     * @internal
     */
    ListedUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListedUser = exports.ListedUser || (exports.ListedUser = {}));
var ListSecurityPoliciesRequest;
(function (ListSecurityPoliciesRequest) {
    /**
     * @internal
     */
    ListSecurityPoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityPoliciesRequest = exports.ListSecurityPoliciesRequest || (exports.ListSecurityPoliciesRequest = {}));
var ListSecurityPoliciesResponse;
(function (ListSecurityPoliciesResponse) {
    /**
     * @internal
     */
    ListSecurityPoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSecurityPoliciesResponse = exports.ListSecurityPoliciesResponse || (exports.ListSecurityPoliciesResponse = {}));
var ListServersRequest;
(function (ListServersRequest) {
    /**
     * @internal
     */
    ListServersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServersRequest = exports.ListServersRequest || (exports.ListServersRequest = {}));
var ListServersResponse;
(function (ListServersResponse) {
    /**
     * @internal
     */
    ListServersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServersResponse = exports.ListServersResponse || (exports.ListServersResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersRequest = exports.ListUsersRequest || (exports.ListUsersRequest = {}));
var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListUsersResponse = exports.ListUsersResponse || (exports.ListUsersResponse = {}));
var StartServerRequest;
(function (StartServerRequest) {
    /**
     * @internal
     */
    StartServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartServerRequest = exports.StartServerRequest || (exports.StartServerRequest = {}));
var StopServerRequest;
(function (StopServerRequest) {
    /**
     * @internal
     */
    StopServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopServerRequest = exports.StopServerRequest || (exports.StopServerRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TestIdentityProviderRequest;
(function (TestIdentityProviderRequest) {
    /**
     * @internal
     */
    TestIdentityProviderRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UserPassword && { UserPassword: smithy_client_1.SENSITIVE_STRING }),
    });
})(TestIdentityProviderRequest = exports.TestIdentityProviderRequest || (exports.TestIdentityProviderRequest = {}));
var TestIdentityProviderResponse;
(function (TestIdentityProviderResponse) {
    /**
     * @internal
     */
    TestIdentityProviderResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestIdentityProviderResponse = exports.TestIdentityProviderResponse || (exports.TestIdentityProviderResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UpdateAccessRequest;
(function (UpdateAccessRequest) {
    /**
     * @internal
     */
    UpdateAccessRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccessRequest = exports.UpdateAccessRequest || (exports.UpdateAccessRequest = {}));
var UpdateAccessResponse;
(function (UpdateAccessResponse) {
    /**
     * @internal
     */
    UpdateAccessResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAccessResponse = exports.UpdateAccessResponse || (exports.UpdateAccessResponse = {}));
var UpdateServerRequest;
(function (UpdateServerRequest) {
    /**
     * @internal
     */
    UpdateServerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.HostKey && { HostKey: smithy_client_1.SENSITIVE_STRING }),
    });
})(UpdateServerRequest = exports.UpdateServerRequest || (exports.UpdateServerRequest = {}));
var UpdateServerResponse;
(function (UpdateServerResponse) {
    /**
     * @internal
     */
    UpdateServerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServerResponse = exports.UpdateServerResponse || (exports.UpdateServerResponse = {}));
var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = (obj) => ({
        ...obj,
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