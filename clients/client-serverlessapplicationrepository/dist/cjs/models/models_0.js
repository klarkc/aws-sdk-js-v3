"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplicationResponse = exports.UpdateApplicationRequest = exports.UnshareApplicationRequest = exports.PutApplicationPolicyResponse = exports.PutApplicationPolicyRequest = exports.ListApplicationVersionsResponse = exports.ListApplicationVersionsRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.ListApplicationDependenciesResponse = exports.ListApplicationDependenciesRequest = exports.GetCloudFormationTemplateResponse = exports.GetCloudFormationTemplateRequest = exports.GetApplicationPolicyResponse = exports.GetApplicationPolicyRequest = exports.GetApplicationResponse = exports.GetApplicationRequest = exports.DeleteApplicationRequest = exports.NotFoundException = exports.CreateCloudFormationTemplateResponse = exports.Status = exports.CreateCloudFormationTemplateRequest = exports.CreateCloudFormationChangeSetResponse = exports.CreateCloudFormationChangeSetRequest = exports.RollbackConfiguration = exports.CreateApplicationVersionResponse = exports.CreateApplicationVersionRequest = exports.TooManyRequestsException = exports.InternalServerErrorException = exports.ForbiddenException = exports.CreateApplicationResponse = exports.Version = exports.CreateApplicationRequest = exports.ConflictException = exports.BadRequestException = exports.VersionSummary = exports.Tag = exports.RollbackTrigger = exports.ParameterValue = exports.ParameterDefinition = exports.Capability = exports.ApplicationSummary = exports.ApplicationPolicyStatement = exports.ApplicationDependencySummary = void 0;
var ApplicationDependencySummary;
(function (ApplicationDependencySummary) {
    /**
     * @internal
     */
    ApplicationDependencySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationDependencySummary = exports.ApplicationDependencySummary || (exports.ApplicationDependencySummary = {}));
var ApplicationPolicyStatement;
(function (ApplicationPolicyStatement) {
    /**
     * @internal
     */
    ApplicationPolicyStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationPolicyStatement = exports.ApplicationPolicyStatement || (exports.ApplicationPolicyStatement = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    /**
     * @internal
     */
    ApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var Capability;
(function (Capability) {
    Capability["CAPABILITY_AUTO_EXPAND"] = "CAPABILITY_AUTO_EXPAND";
    Capability["CAPABILITY_IAM"] = "CAPABILITY_IAM";
    Capability["CAPABILITY_NAMED_IAM"] = "CAPABILITY_NAMED_IAM";
    Capability["CAPABILITY_RESOURCE_POLICY"] = "CAPABILITY_RESOURCE_POLICY";
})(Capability = exports.Capability || (exports.Capability = {}));
var ParameterDefinition;
(function (ParameterDefinition) {
    /**
     * @internal
     */
    ParameterDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterDefinition = exports.ParameterDefinition || (exports.ParameterDefinition = {}));
var ParameterValue;
(function (ParameterValue) {
    /**
     * @internal
     */
    ParameterValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterValue = exports.ParameterValue || (exports.ParameterValue = {}));
var RollbackTrigger;
(function (RollbackTrigger) {
    /**
     * @internal
     */
    RollbackTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackTrigger = exports.RollbackTrigger || (exports.RollbackTrigger = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var VersionSummary;
(function (VersionSummary) {
    /**
     * @internal
     */
    VersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionSummary = exports.VersionSummary || (exports.VersionSummary = {}));
var BadRequestException;
(function (BadRequestException) {
    /**
     * @internal
     */
    BadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BadRequestException = exports.BadRequestException || (exports.BadRequestException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var Version;
(function (Version) {
    /**
     * @internal
     */
    Version.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Version = exports.Version || (exports.Version = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    /**
     * @internal
     */
    CreateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var ForbiddenException;
(function (ForbiddenException) {
    /**
     * @internal
     */
    ForbiddenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForbiddenException = exports.ForbiddenException || (exports.ForbiddenException = {}));
var InternalServerErrorException;
(function (InternalServerErrorException) {
    /**
     * @internal
     */
    InternalServerErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerErrorException = exports.InternalServerErrorException || (exports.InternalServerErrorException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var CreateApplicationVersionRequest;
(function (CreateApplicationVersionRequest) {
    /**
     * @internal
     */
    CreateApplicationVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationVersionRequest = exports.CreateApplicationVersionRequest || (exports.CreateApplicationVersionRequest = {}));
var CreateApplicationVersionResponse;
(function (CreateApplicationVersionResponse) {
    /**
     * @internal
     */
    CreateApplicationVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationVersionResponse = exports.CreateApplicationVersionResponse || (exports.CreateApplicationVersionResponse = {}));
var RollbackConfiguration;
(function (RollbackConfiguration) {
    /**
     * @internal
     */
    RollbackConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RollbackConfiguration = exports.RollbackConfiguration || (exports.RollbackConfiguration = {}));
var CreateCloudFormationChangeSetRequest;
(function (CreateCloudFormationChangeSetRequest) {
    /**
     * @internal
     */
    CreateCloudFormationChangeSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationChangeSetRequest = exports.CreateCloudFormationChangeSetRequest || (exports.CreateCloudFormationChangeSetRequest = {}));
var CreateCloudFormationChangeSetResponse;
(function (CreateCloudFormationChangeSetResponse) {
    /**
     * @internal
     */
    CreateCloudFormationChangeSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationChangeSetResponse = exports.CreateCloudFormationChangeSetResponse || (exports.CreateCloudFormationChangeSetResponse = {}));
var CreateCloudFormationTemplateRequest;
(function (CreateCloudFormationTemplateRequest) {
    /**
     * @internal
     */
    CreateCloudFormationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationTemplateRequest = exports.CreateCloudFormationTemplateRequest || (exports.CreateCloudFormationTemplateRequest = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["EXPIRED"] = "EXPIRED";
    Status["PREPARING"] = "PREPARING";
})(Status = exports.Status || (exports.Status = {}));
var CreateCloudFormationTemplateResponse;
(function (CreateCloudFormationTemplateResponse) {
    /**
     * @internal
     */
    CreateCloudFormationTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCloudFormationTemplateResponse = exports.CreateCloudFormationTemplateResponse || (exports.CreateCloudFormationTemplateResponse = {}));
var NotFoundException;
(function (NotFoundException) {
    /**
     * @internal
     */
    NotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    /**
     * @internal
     */
    DeleteApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var GetApplicationRequest;
(function (GetApplicationRequest) {
    /**
     * @internal
     */
    GetApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationRequest = exports.GetApplicationRequest || (exports.GetApplicationRequest = {}));
var GetApplicationResponse;
(function (GetApplicationResponse) {
    /**
     * @internal
     */
    GetApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationResponse = exports.GetApplicationResponse || (exports.GetApplicationResponse = {}));
var GetApplicationPolicyRequest;
(function (GetApplicationPolicyRequest) {
    /**
     * @internal
     */
    GetApplicationPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationPolicyRequest = exports.GetApplicationPolicyRequest || (exports.GetApplicationPolicyRequest = {}));
var GetApplicationPolicyResponse;
(function (GetApplicationPolicyResponse) {
    /**
     * @internal
     */
    GetApplicationPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetApplicationPolicyResponse = exports.GetApplicationPolicyResponse || (exports.GetApplicationPolicyResponse = {}));
var GetCloudFormationTemplateRequest;
(function (GetCloudFormationTemplateRequest) {
    /**
     * @internal
     */
    GetCloudFormationTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCloudFormationTemplateRequest = exports.GetCloudFormationTemplateRequest || (exports.GetCloudFormationTemplateRequest = {}));
var GetCloudFormationTemplateResponse;
(function (GetCloudFormationTemplateResponse) {
    /**
     * @internal
     */
    GetCloudFormationTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCloudFormationTemplateResponse = exports.GetCloudFormationTemplateResponse || (exports.GetCloudFormationTemplateResponse = {}));
var ListApplicationDependenciesRequest;
(function (ListApplicationDependenciesRequest) {
    /**
     * @internal
     */
    ListApplicationDependenciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationDependenciesRequest = exports.ListApplicationDependenciesRequest || (exports.ListApplicationDependenciesRequest = {}));
var ListApplicationDependenciesResponse;
(function (ListApplicationDependenciesResponse) {
    /**
     * @internal
     */
    ListApplicationDependenciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationDependenciesResponse = exports.ListApplicationDependenciesResponse || (exports.ListApplicationDependenciesResponse = {}));
var ListApplicationsRequest;
(function (ListApplicationsRequest) {
    /**
     * @internal
     */
    ListApplicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsRequest = exports.ListApplicationsRequest || (exports.ListApplicationsRequest = {}));
var ListApplicationsResponse;
(function (ListApplicationsResponse) {
    /**
     * @internal
     */
    ListApplicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationsResponse = exports.ListApplicationsResponse || (exports.ListApplicationsResponse = {}));
var ListApplicationVersionsRequest;
(function (ListApplicationVersionsRequest) {
    /**
     * @internal
     */
    ListApplicationVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationVersionsRequest = exports.ListApplicationVersionsRequest || (exports.ListApplicationVersionsRequest = {}));
var ListApplicationVersionsResponse;
(function (ListApplicationVersionsResponse) {
    /**
     * @internal
     */
    ListApplicationVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApplicationVersionsResponse = exports.ListApplicationVersionsResponse || (exports.ListApplicationVersionsResponse = {}));
var PutApplicationPolicyRequest;
(function (PutApplicationPolicyRequest) {
    /**
     * @internal
     */
    PutApplicationPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutApplicationPolicyRequest = exports.PutApplicationPolicyRequest || (exports.PutApplicationPolicyRequest = {}));
var PutApplicationPolicyResponse;
(function (PutApplicationPolicyResponse) {
    /**
     * @internal
     */
    PutApplicationPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutApplicationPolicyResponse = exports.PutApplicationPolicyResponse || (exports.PutApplicationPolicyResponse = {}));
var UnshareApplicationRequest;
(function (UnshareApplicationRequest) {
    /**
     * @internal
     */
    UnshareApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnshareApplicationRequest = exports.UnshareApplicationRequest || (exports.UnshareApplicationRequest = {}));
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
    /**
     * @internal
     */
    UpdateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {}));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
    /**
     * @internal
     */
    UpdateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {}));
//# sourceMappingURL=models_0.js.map