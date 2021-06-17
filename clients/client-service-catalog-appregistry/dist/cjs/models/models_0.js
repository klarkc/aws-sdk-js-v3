"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateApplicationResponse = exports.UpdateApplicationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.SyncResourceResponse = exports.SyncAction = exports.SyncResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListAttributeGroupsResponse = exports.ListAttributeGroupsRequest = exports.ListAssociatedResourcesResponse = exports.ResourceInfo = exports.ListAssociatedResourcesRequest = exports.ListAssociatedAttributeGroupsResponse = exports.ListAssociatedAttributeGroupsRequest = exports.ListApplicationsResponse = exports.ListApplicationsRequest = exports.GetAttributeGroupResponse = exports.GetAttributeGroupRequest = exports.GetApplicationResponse = exports.GetApplicationRequest = exports.DisassociateResourceResponse = exports.DisassociateResourceRequest = exports.DisassociateAttributeGroupResponse = exports.DisassociateAttributeGroupRequest = exports.DeleteAttributeGroupResponse = exports.DeleteAttributeGroupRequest = exports.DeleteApplicationResponse = exports.DeleteApplicationRequest = exports.CreateAttributeGroupResponse = exports.CreateAttributeGroupRequest = exports.CreateApplicationResponse = exports.CreateApplicationRequest = exports.AttributeGroupSummary = exports.AttributeGroup = exports.ConflictException = exports.AssociateResourceResponse = exports.AssociateResourceRequest = exports.ResourceType = exports.ValidationException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.AssociateAttributeGroupResponse = exports.AssociateAttributeGroupRequest = exports.ApplicationSummary = exports.Application = void 0;
exports.UpdateAttributeGroupResponse = exports.UpdateAttributeGroupRequest = void 0;
var Application;
(function (Application) {
    /**
     * @internal
     */
    Application.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Application = exports.Application || (exports.Application = {}));
var ApplicationSummary;
(function (ApplicationSummary) {
    /**
     * @internal
     */
    ApplicationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApplicationSummary = exports.ApplicationSummary || (exports.ApplicationSummary = {}));
var AssociateAttributeGroupRequest;
(function (AssociateAttributeGroupRequest) {
    /**
     * @internal
     */
    AssociateAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAttributeGroupRequest = exports.AssociateAttributeGroupRequest || (exports.AssociateAttributeGroupRequest = {}));
var AssociateAttributeGroupResponse;
(function (AssociateAttributeGroupResponse) {
    /**
     * @internal
     */
    AssociateAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateAttributeGroupResponse = exports.AssociateAttributeGroupResponse || (exports.AssociateAttributeGroupResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["CFN_STACK"] = "CFN_STACK";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var AssociateResourceRequest;
(function (AssociateResourceRequest) {
    /**
     * @internal
     */
    AssociateResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceRequest = exports.AssociateResourceRequest || (exports.AssociateResourceRequest = {}));
var AssociateResourceResponse;
(function (AssociateResourceResponse) {
    /**
     * @internal
     */
    AssociateResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateResourceResponse = exports.AssociateResourceResponse || (exports.AssociateResourceResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var AttributeGroup;
(function (AttributeGroup) {
    /**
     * @internal
     */
    AttributeGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeGroup = exports.AttributeGroup || (exports.AttributeGroup = {}));
var AttributeGroupSummary;
(function (AttributeGroupSummary) {
    /**
     * @internal
     */
    AttributeGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeGroupSummary = exports.AttributeGroupSummary || (exports.AttributeGroupSummary = {}));
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
    /**
     * @internal
     */
    CreateApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {}));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
    /**
     * @internal
     */
    CreateApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {}));
var CreateAttributeGroupRequest;
(function (CreateAttributeGroupRequest) {
    /**
     * @internal
     */
    CreateAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAttributeGroupRequest = exports.CreateAttributeGroupRequest || (exports.CreateAttributeGroupRequest = {}));
var CreateAttributeGroupResponse;
(function (CreateAttributeGroupResponse) {
    /**
     * @internal
     */
    CreateAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAttributeGroupResponse = exports.CreateAttributeGroupResponse || (exports.CreateAttributeGroupResponse = {}));
var DeleteApplicationRequest;
(function (DeleteApplicationRequest) {
    /**
     * @internal
     */
    DeleteApplicationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationRequest = exports.DeleteApplicationRequest || (exports.DeleteApplicationRequest = {}));
var DeleteApplicationResponse;
(function (DeleteApplicationResponse) {
    /**
     * @internal
     */
    DeleteApplicationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApplicationResponse = exports.DeleteApplicationResponse || (exports.DeleteApplicationResponse = {}));
var DeleteAttributeGroupRequest;
(function (DeleteAttributeGroupRequest) {
    /**
     * @internal
     */
    DeleteAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAttributeGroupRequest = exports.DeleteAttributeGroupRequest || (exports.DeleteAttributeGroupRequest = {}));
var DeleteAttributeGroupResponse;
(function (DeleteAttributeGroupResponse) {
    /**
     * @internal
     */
    DeleteAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAttributeGroupResponse = exports.DeleteAttributeGroupResponse || (exports.DeleteAttributeGroupResponse = {}));
var DisassociateAttributeGroupRequest;
(function (DisassociateAttributeGroupRequest) {
    /**
     * @internal
     */
    DisassociateAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAttributeGroupRequest = exports.DisassociateAttributeGroupRequest || (exports.DisassociateAttributeGroupRequest = {}));
var DisassociateAttributeGroupResponse;
(function (DisassociateAttributeGroupResponse) {
    /**
     * @internal
     */
    DisassociateAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateAttributeGroupResponse = exports.DisassociateAttributeGroupResponse || (exports.DisassociateAttributeGroupResponse = {}));
var DisassociateResourceRequest;
(function (DisassociateResourceRequest) {
    /**
     * @internal
     */
    DisassociateResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceRequest = exports.DisassociateResourceRequest || (exports.DisassociateResourceRequest = {}));
var DisassociateResourceResponse;
(function (DisassociateResourceResponse) {
    /**
     * @internal
     */
    DisassociateResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateResourceResponse = exports.DisassociateResourceResponse || (exports.DisassociateResourceResponse = {}));
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
var GetAttributeGroupRequest;
(function (GetAttributeGroupRequest) {
    /**
     * @internal
     */
    GetAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAttributeGroupRequest = exports.GetAttributeGroupRequest || (exports.GetAttributeGroupRequest = {}));
var GetAttributeGroupResponse;
(function (GetAttributeGroupResponse) {
    /**
     * @internal
     */
    GetAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAttributeGroupResponse = exports.GetAttributeGroupResponse || (exports.GetAttributeGroupResponse = {}));
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
var ListAssociatedAttributeGroupsRequest;
(function (ListAssociatedAttributeGroupsRequest) {
    /**
     * @internal
     */
    ListAssociatedAttributeGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedAttributeGroupsRequest = exports.ListAssociatedAttributeGroupsRequest || (exports.ListAssociatedAttributeGroupsRequest = {}));
var ListAssociatedAttributeGroupsResponse;
(function (ListAssociatedAttributeGroupsResponse) {
    /**
     * @internal
     */
    ListAssociatedAttributeGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedAttributeGroupsResponse = exports.ListAssociatedAttributeGroupsResponse || (exports.ListAssociatedAttributeGroupsResponse = {}));
var ListAssociatedResourcesRequest;
(function (ListAssociatedResourcesRequest) {
    /**
     * @internal
     */
    ListAssociatedResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedResourcesRequest = exports.ListAssociatedResourcesRequest || (exports.ListAssociatedResourcesRequest = {}));
var ResourceInfo;
(function (ResourceInfo) {
    /**
     * @internal
     */
    ResourceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInfo = exports.ResourceInfo || (exports.ResourceInfo = {}));
var ListAssociatedResourcesResponse;
(function (ListAssociatedResourcesResponse) {
    /**
     * @internal
     */
    ListAssociatedResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAssociatedResourcesResponse = exports.ListAssociatedResourcesResponse || (exports.ListAssociatedResourcesResponse = {}));
var ListAttributeGroupsRequest;
(function (ListAttributeGroupsRequest) {
    /**
     * @internal
     */
    ListAttributeGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttributeGroupsRequest = exports.ListAttributeGroupsRequest || (exports.ListAttributeGroupsRequest = {}));
var ListAttributeGroupsResponse;
(function (ListAttributeGroupsResponse) {
    /**
     * @internal
     */
    ListAttributeGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAttributeGroupsResponse = exports.ListAttributeGroupsResponse || (exports.ListAttributeGroupsResponse = {}));
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
var SyncResourceRequest;
(function (SyncResourceRequest) {
    /**
     * @internal
     */
    SyncResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyncResourceRequest = exports.SyncResourceRequest || (exports.SyncResourceRequest = {}));
var SyncAction;
(function (SyncAction) {
    SyncAction["NO_ACTION"] = "NO_ACTION";
    SyncAction["START_SYNC"] = "START_SYNC";
})(SyncAction = exports.SyncAction || (exports.SyncAction = {}));
var SyncResourceResponse;
(function (SyncResourceResponse) {
    /**
     * @internal
     */
    SyncResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SyncResourceResponse = exports.SyncResourceResponse || (exports.SyncResourceResponse = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
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
var UpdateAttributeGroupRequest;
(function (UpdateAttributeGroupRequest) {
    /**
     * @internal
     */
    UpdateAttributeGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAttributeGroupRequest = exports.UpdateAttributeGroupRequest || (exports.UpdateAttributeGroupRequest = {}));
var UpdateAttributeGroupResponse;
(function (UpdateAttributeGroupResponse) {
    /**
     * @internal
     */
    UpdateAttributeGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAttributeGroupResponse = exports.UpdateAttributeGroupResponse || (exports.UpdateAttributeGroupResponse = {}));
//# sourceMappingURL=models_0.js.map