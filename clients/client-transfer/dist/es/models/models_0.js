import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var HomeDirectoryMapEntry;
(function (HomeDirectoryMapEntry) {
    /**
     * @internal
     */
    HomeDirectoryMapEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HomeDirectoryMapEntry || (HomeDirectoryMapEntry = {}));
export var HomeDirectoryType;
(function (HomeDirectoryType) {
    HomeDirectoryType["LOGICAL"] = "LOGICAL";
    HomeDirectoryType["PATH"] = "PATH";
})(HomeDirectoryType || (HomeDirectoryType = {}));
export var PosixProfile;
(function (PosixProfile) {
    /**
     * @internal
     */
    PosixProfile.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PosixProfile || (PosixProfile = {}));
export var CreateAccessRequest;
(function (CreateAccessRequest) {
    /**
     * @internal
     */
    CreateAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessRequest || (CreateAccessRequest = {}));
export var CreateAccessResponse;
(function (CreateAccessResponse) {
    /**
     * @internal
     */
    CreateAccessResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAccessResponse || (CreateAccessResponse = {}));
export var InternalServiceError;
(function (InternalServiceError) {
    /**
     * @internal
     */
    InternalServiceError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceError || (InternalServiceError = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ResourceExistsException;
(function (ResourceExistsException) {
    /**
     * @internal
     */
    ResourceExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceExistsException || (ResourceExistsException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ServiceUnavailableException;
(function (ServiceUnavailableException) {
    /**
     * @internal
     */
    ServiceUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceUnavailableException || (ServiceUnavailableException = {}));
export var Domain;
(function (Domain) {
    Domain["EFS"] = "EFS";
    Domain["S3"] = "S3";
})(Domain || (Domain = {}));
export var EndpointDetails;
(function (EndpointDetails) {
    /**
     * @internal
     */
    EndpointDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EndpointDetails || (EndpointDetails = {}));
export var EndpointType;
(function (EndpointType) {
    EndpointType["PUBLIC"] = "PUBLIC";
    EndpointType["VPC"] = "VPC";
    EndpointType["VPC_ENDPOINT"] = "VPC_ENDPOINT";
})(EndpointType || (EndpointType = {}));
export var IdentityProviderDetails;
(function (IdentityProviderDetails) {
    /**
     * @internal
     */
    IdentityProviderDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IdentityProviderDetails || (IdentityProviderDetails = {}));
export var IdentityProviderType;
(function (IdentityProviderType) {
    IdentityProviderType["API_GATEWAY"] = "API_GATEWAY";
    IdentityProviderType["AWS_DIRECTORY_SERVICE"] = "AWS_DIRECTORY_SERVICE";
    IdentityProviderType["SERVICE_MANAGED"] = "SERVICE_MANAGED";
})(IdentityProviderType || (IdentityProviderType = {}));
export var Protocol;
(function (Protocol) {
    Protocol["FTP"] = "FTP";
    Protocol["FTPS"] = "FTPS";
    Protocol["SFTP"] = "SFTP";
})(Protocol || (Protocol = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateServerRequest;
(function (CreateServerRequest) {
    /**
     * @internal
     */
    CreateServerRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.HostKey && { HostKey: SENSITIVE_STRING }))); };
})(CreateServerRequest || (CreateServerRequest = {}));
export var CreateServerResponse;
(function (CreateServerResponse) {
    /**
     * @internal
     */
    CreateServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateServerResponse || (CreateServerResponse = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var CreateUserRequest;
(function (CreateUserRequest) {
    /**
     * @internal
     */
    CreateUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserRequest || (CreateUserRequest = {}));
export var CreateUserResponse;
(function (CreateUserResponse) {
    /**
     * @internal
     */
    CreateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateUserResponse || (CreateUserResponse = {}));
export var DeleteAccessRequest;
(function (DeleteAccessRequest) {
    /**
     * @internal
     */
    DeleteAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAccessRequest || (DeleteAccessRequest = {}));
export var DeleteServerRequest;
(function (DeleteServerRequest) {
    /**
     * @internal
     */
    DeleteServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteServerRequest || (DeleteServerRequest = {}));
export var DeleteSshPublicKeyRequest;
(function (DeleteSshPublicKeyRequest) {
    /**
     * @internal
     */
    DeleteSshPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSshPublicKeyRequest || (DeleteSshPublicKeyRequest = {}));
export var DeleteUserRequest;
(function (DeleteUserRequest) {
    /**
     * @internal
     */
    DeleteUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteUserRequest || (DeleteUserRequest = {}));
export var DescribeAccessRequest;
(function (DescribeAccessRequest) {
    /**
     * @internal
     */
    DescribeAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccessRequest || (DescribeAccessRequest = {}));
export var DescribedAccess;
(function (DescribedAccess) {
    /**
     * @internal
     */
    DescribedAccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribedAccess || (DescribedAccess = {}));
export var DescribeAccessResponse;
(function (DescribeAccessResponse) {
    /**
     * @internal
     */
    DescribeAccessResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAccessResponse || (DescribeAccessResponse = {}));
export var DescribedSecurityPolicy;
(function (DescribedSecurityPolicy) {
    /**
     * @internal
     */
    DescribedSecurityPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribedSecurityPolicy || (DescribedSecurityPolicy = {}));
export var State;
(function (State) {
    State["OFFLINE"] = "OFFLINE";
    State["ONLINE"] = "ONLINE";
    State["STARTING"] = "STARTING";
    State["START_FAILED"] = "START_FAILED";
    State["STOPPING"] = "STOPPING";
    State["STOP_FAILED"] = "STOP_FAILED";
})(State || (State = {}));
export var DescribedServer;
(function (DescribedServer) {
    /**
     * @internal
     */
    DescribedServer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribedServer || (DescribedServer = {}));
export var SshPublicKey;
(function (SshPublicKey) {
    /**
     * @internal
     */
    SshPublicKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SshPublicKey || (SshPublicKey = {}));
export var DescribedUser;
(function (DescribedUser) {
    /**
     * @internal
     */
    DescribedUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribedUser || (DescribedUser = {}));
export var DescribeSecurityPolicyRequest;
(function (DescribeSecurityPolicyRequest) {
    /**
     * @internal
     */
    DescribeSecurityPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSecurityPolicyRequest || (DescribeSecurityPolicyRequest = {}));
export var DescribeSecurityPolicyResponse;
(function (DescribeSecurityPolicyResponse) {
    /**
     * @internal
     */
    DescribeSecurityPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeSecurityPolicyResponse || (DescribeSecurityPolicyResponse = {}));
export var DescribeServerRequest;
(function (DescribeServerRequest) {
    /**
     * @internal
     */
    DescribeServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServerRequest || (DescribeServerRequest = {}));
export var DescribeServerResponse;
(function (DescribeServerResponse) {
    /**
     * @internal
     */
    DescribeServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeServerResponse || (DescribeServerResponse = {}));
export var DescribeUserRequest;
(function (DescribeUserRequest) {
    /**
     * @internal
     */
    DescribeUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserRequest || (DescribeUserRequest = {}));
export var DescribeUserResponse;
(function (DescribeUserResponse) {
    /**
     * @internal
     */
    DescribeUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeUserResponse || (DescribeUserResponse = {}));
export var ImportSshPublicKeyRequest;
(function (ImportSshPublicKeyRequest) {
    /**
     * @internal
     */
    ImportSshPublicKeyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportSshPublicKeyRequest || (ImportSshPublicKeyRequest = {}));
export var ImportSshPublicKeyResponse;
(function (ImportSshPublicKeyResponse) {
    /**
     * @internal
     */
    ImportSshPublicKeyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImportSshPublicKeyResponse || (ImportSshPublicKeyResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListAccessesRequest;
(function (ListAccessesRequest) {
    /**
     * @internal
     */
    ListAccessesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessesRequest || (ListAccessesRequest = {}));
export var ListedAccess;
(function (ListedAccess) {
    /**
     * @internal
     */
    ListedAccess.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListedAccess || (ListedAccess = {}));
export var ListAccessesResponse;
(function (ListAccessesResponse) {
    /**
     * @internal
     */
    ListAccessesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAccessesResponse || (ListAccessesResponse = {}));
export var ListedServer;
(function (ListedServer) {
    /**
     * @internal
     */
    ListedServer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListedServer || (ListedServer = {}));
export var ListedUser;
(function (ListedUser) {
    /**
     * @internal
     */
    ListedUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListedUser || (ListedUser = {}));
export var ListSecurityPoliciesRequest;
(function (ListSecurityPoliciesRequest) {
    /**
     * @internal
     */
    ListSecurityPoliciesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityPoliciesRequest || (ListSecurityPoliciesRequest = {}));
export var ListSecurityPoliciesResponse;
(function (ListSecurityPoliciesResponse) {
    /**
     * @internal
     */
    ListSecurityPoliciesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSecurityPoliciesResponse || (ListSecurityPoliciesResponse = {}));
export var ListServersRequest;
(function (ListServersRequest) {
    /**
     * @internal
     */
    ListServersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServersRequest || (ListServersRequest = {}));
export var ListServersResponse;
(function (ListServersResponse) {
    /**
     * @internal
     */
    ListServersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListServersResponse || (ListServersResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListUsersRequest;
(function (ListUsersRequest) {
    /**
     * @internal
     */
    ListUsersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersRequest || (ListUsersRequest = {}));
export var ListUsersResponse;
(function (ListUsersResponse) {
    /**
     * @internal
     */
    ListUsersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListUsersResponse || (ListUsersResponse = {}));
export var StartServerRequest;
(function (StartServerRequest) {
    /**
     * @internal
     */
    StartServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartServerRequest || (StartServerRequest = {}));
export var StopServerRequest;
(function (StopServerRequest) {
    /**
     * @internal
     */
    StopServerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopServerRequest || (StopServerRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TestIdentityProviderRequest;
(function (TestIdentityProviderRequest) {
    /**
     * @internal
     */
    TestIdentityProviderRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.UserPassword && { UserPassword: SENSITIVE_STRING }))); };
})(TestIdentityProviderRequest || (TestIdentityProviderRequest = {}));
export var TestIdentityProviderResponse;
(function (TestIdentityProviderResponse) {
    /**
     * @internal
     */
    TestIdentityProviderResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestIdentityProviderResponse || (TestIdentityProviderResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UpdateAccessRequest;
(function (UpdateAccessRequest) {
    /**
     * @internal
     */
    UpdateAccessRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAccessRequest || (UpdateAccessRequest = {}));
export var UpdateAccessResponse;
(function (UpdateAccessResponse) {
    /**
     * @internal
     */
    UpdateAccessResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAccessResponse || (UpdateAccessResponse = {}));
export var UpdateServerRequest;
(function (UpdateServerRequest) {
    /**
     * @internal
     */
    UpdateServerRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.HostKey && { HostKey: SENSITIVE_STRING }))); };
})(UpdateServerRequest || (UpdateServerRequest = {}));
export var UpdateServerResponse;
(function (UpdateServerResponse) {
    /**
     * @internal
     */
    UpdateServerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateServerResponse || (UpdateServerResponse = {}));
export var UpdateUserRequest;
(function (UpdateUserRequest) {
    /**
     * @internal
     */
    UpdateUserRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserRequest || (UpdateUserRequest = {}));
export var UpdateUserResponse;
(function (UpdateUserResponse) {
    /**
     * @internal
     */
    UpdateUserResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateUserResponse || (UpdateUserResponse = {}));
//# sourceMappingURL=models_0.js.map