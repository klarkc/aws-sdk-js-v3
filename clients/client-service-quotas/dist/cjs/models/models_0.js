"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListServiceQuotasResponse = exports.ListServiceQuotasRequest = exports.ListServiceQuotaIncreaseRequestsInTemplateResponse = exports.ListServiceQuotaIncreaseRequestsInTemplateRequest = exports.ListRequestedServiceQuotaChangeHistoryByQuotaResponse = exports.ListRequestedServiceQuotaChangeHistoryByQuotaRequest = exports.ListRequestedServiceQuotaChangeHistoryResponse = exports.ListRequestedServiceQuotaChangeHistoryRequest = exports.ListAWSDefaultServiceQuotasResponse = exports.ListAWSDefaultServiceQuotasRequest = exports.InvalidResourceStateException = exports.InvalidPaginationTokenException = exports.Tag = exports.GetServiceQuotaIncreaseRequestFromTemplateResponse = exports.ServiceQuotaIncreaseRequestInTemplate = exports.GetServiceQuotaIncreaseRequestFromTemplateRequest = exports.GetServiceQuotaResponse = exports.GetServiceQuotaRequest = exports.GetRequestedServiceQuotaChangeResponse = exports.RequestedServiceQuotaChange = exports.RequestStatus = exports.GetRequestedServiceQuotaChangeRequest = exports.GetAWSDefaultServiceQuotaResponse = exports.ServiceQuota = exports.MetricInfo = exports.QuotaPeriod = exports.PeriodUnit = exports.GetAWSDefaultServiceQuotaRequest = exports.GetAssociationForServiceQuotaTemplateResponse = exports.ServiceQuotaTemplateAssociationStatus = exports.GetAssociationForServiceQuotaTemplateRequest = exports.ErrorReason = exports.ErrorCode = exports.ServiceQuotaTemplateNotInUseException = exports.DisassociateServiceQuotaTemplateResponse = exports.DisassociateServiceQuotaTemplateRequest = exports.NoSuchResourceException = exports.IllegalArgumentException = exports.DeleteServiceQuotaIncreaseRequestFromTemplateResponse = exports.DeleteServiceQuotaIncreaseRequestFromTemplateRequest = exports.TooManyRequestsException = exports.TemplatesNotAvailableInRegionException = exports.ServiceException = exports.OrganizationNotInAllFeaturesModeException = exports.NoAvailableOrganizationException = exports.DependencyAccessDeniedException = exports.AWSServiceAccessNotEnabledException = exports.AssociateServiceQuotaTemplateResponse = exports.AssociateServiceQuotaTemplateRequest = exports.AccessDeniedException = void 0;
exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.TagPolicyViolationException = exports.ResourceAlreadyExistsException = exports.RequestServiceQuotaIncreaseResponse = exports.RequestServiceQuotaIncreaseRequest = exports.QuotaExceededException = exports.PutServiceQuotaIncreaseRequestIntoTemplateResponse = exports.PutServiceQuotaIncreaseRequestIntoTemplateRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListServicesResponse = exports.ServiceInfo = exports.ListServicesRequest = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var AssociateServiceQuotaTemplateRequest;
(function (AssociateServiceQuotaTemplateRequest) {
    /**
     * @internal
     */
    AssociateServiceQuotaTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceQuotaTemplateRequest = exports.AssociateServiceQuotaTemplateRequest || (exports.AssociateServiceQuotaTemplateRequest = {}));
var AssociateServiceQuotaTemplateResponse;
(function (AssociateServiceQuotaTemplateResponse) {
    /**
     * @internal
     */
    AssociateServiceQuotaTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateServiceQuotaTemplateResponse = exports.AssociateServiceQuotaTemplateResponse || (exports.AssociateServiceQuotaTemplateResponse = {}));
var AWSServiceAccessNotEnabledException;
(function (AWSServiceAccessNotEnabledException) {
    /**
     * @internal
     */
    AWSServiceAccessNotEnabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AWSServiceAccessNotEnabledException = exports.AWSServiceAccessNotEnabledException || (exports.AWSServiceAccessNotEnabledException = {}));
var DependencyAccessDeniedException;
(function (DependencyAccessDeniedException) {
    /**
     * @internal
     */
    DependencyAccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DependencyAccessDeniedException = exports.DependencyAccessDeniedException || (exports.DependencyAccessDeniedException = {}));
var NoAvailableOrganizationException;
(function (NoAvailableOrganizationException) {
    /**
     * @internal
     */
    NoAvailableOrganizationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoAvailableOrganizationException = exports.NoAvailableOrganizationException || (exports.NoAvailableOrganizationException = {}));
var OrganizationNotInAllFeaturesModeException;
(function (OrganizationNotInAllFeaturesModeException) {
    /**
     * @internal
     */
    OrganizationNotInAllFeaturesModeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationNotInAllFeaturesModeException = exports.OrganizationNotInAllFeaturesModeException || (exports.OrganizationNotInAllFeaturesModeException = {}));
var ServiceException;
(function (ServiceException) {
    /**
     * @internal
     */
    ServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceException = exports.ServiceException || (exports.ServiceException = {}));
var TemplatesNotAvailableInRegionException;
(function (TemplatesNotAvailableInRegionException) {
    /**
     * @internal
     */
    TemplatesNotAvailableInRegionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TemplatesNotAvailableInRegionException = exports.TemplatesNotAvailableInRegionException || (exports.TemplatesNotAvailableInRegionException = {}));
var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyRequestsException = exports.TooManyRequestsException || (exports.TooManyRequestsException = {}));
var DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
(function (DeleteServiceQuotaIncreaseRequestFromTemplateRequest) {
    /**
     * @internal
     */
    DeleteServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceQuotaIncreaseRequestFromTemplateRequest = exports.DeleteServiceQuotaIncreaseRequestFromTemplateRequest || (exports.DeleteServiceQuotaIncreaseRequestFromTemplateRequest = {}));
var DeleteServiceQuotaIncreaseRequestFromTemplateResponse;
(function (DeleteServiceQuotaIncreaseRequestFromTemplateResponse) {
    /**
     * @internal
     */
    DeleteServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteServiceQuotaIncreaseRequestFromTemplateResponse = exports.DeleteServiceQuotaIncreaseRequestFromTemplateResponse || (exports.DeleteServiceQuotaIncreaseRequestFromTemplateResponse = {}));
var IllegalArgumentException;
(function (IllegalArgumentException) {
    /**
     * @internal
     */
    IllegalArgumentException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IllegalArgumentException = exports.IllegalArgumentException || (exports.IllegalArgumentException = {}));
var NoSuchResourceException;
(function (NoSuchResourceException) {
    /**
     * @internal
     */
    NoSuchResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoSuchResourceException = exports.NoSuchResourceException || (exports.NoSuchResourceException = {}));
var DisassociateServiceQuotaTemplateRequest;
(function (DisassociateServiceQuotaTemplateRequest) {
    /**
     * @internal
     */
    DisassociateServiceQuotaTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceQuotaTemplateRequest = exports.DisassociateServiceQuotaTemplateRequest || (exports.DisassociateServiceQuotaTemplateRequest = {}));
var DisassociateServiceQuotaTemplateResponse;
(function (DisassociateServiceQuotaTemplateResponse) {
    /**
     * @internal
     */
    DisassociateServiceQuotaTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateServiceQuotaTemplateResponse = exports.DisassociateServiceQuotaTemplateResponse || (exports.DisassociateServiceQuotaTemplateResponse = {}));
var ServiceQuotaTemplateNotInUseException;
(function (ServiceQuotaTemplateNotInUseException) {
    /**
     * @internal
     */
    ServiceQuotaTemplateNotInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaTemplateNotInUseException = exports.ServiceQuotaTemplateNotInUseException || (exports.ServiceQuotaTemplateNotInUseException = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["DEPENDENCY_ACCESS_DENIED_ERROR"] = "DEPENDENCY_ACCESS_DENIED_ERROR";
    ErrorCode["DEPENDENCY_SERVICE_ERROR"] = "DEPENDENCY_SERVICE_ERROR";
    ErrorCode["DEPENDENCY_THROTTLING_ERROR"] = "DEPENDENCY_THROTTLING_ERROR";
    ErrorCode["SERVICE_QUOTA_NOT_AVAILABLE_ERROR"] = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var ErrorReason;
(function (ErrorReason) {
    /**
     * @internal
     */
    ErrorReason.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorReason = exports.ErrorReason || (exports.ErrorReason = {}));
var GetAssociationForServiceQuotaTemplateRequest;
(function (GetAssociationForServiceQuotaTemplateRequest) {
    /**
     * @internal
     */
    GetAssociationForServiceQuotaTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociationForServiceQuotaTemplateRequest = exports.GetAssociationForServiceQuotaTemplateRequest || (exports.GetAssociationForServiceQuotaTemplateRequest = {}));
var ServiceQuotaTemplateAssociationStatus;
(function (ServiceQuotaTemplateAssociationStatus) {
    ServiceQuotaTemplateAssociationStatus["ASSOCIATED"] = "ASSOCIATED";
    ServiceQuotaTemplateAssociationStatus["DISASSOCIATED"] = "DISASSOCIATED";
})(ServiceQuotaTemplateAssociationStatus = exports.ServiceQuotaTemplateAssociationStatus || (exports.ServiceQuotaTemplateAssociationStatus = {}));
var GetAssociationForServiceQuotaTemplateResponse;
(function (GetAssociationForServiceQuotaTemplateResponse) {
    /**
     * @internal
     */
    GetAssociationForServiceQuotaTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAssociationForServiceQuotaTemplateResponse = exports.GetAssociationForServiceQuotaTemplateResponse || (exports.GetAssociationForServiceQuotaTemplateResponse = {}));
var GetAWSDefaultServiceQuotaRequest;
(function (GetAWSDefaultServiceQuotaRequest) {
    /**
     * @internal
     */
    GetAWSDefaultServiceQuotaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAWSDefaultServiceQuotaRequest = exports.GetAWSDefaultServiceQuotaRequest || (exports.GetAWSDefaultServiceQuotaRequest = {}));
var PeriodUnit;
(function (PeriodUnit) {
    PeriodUnit["DAY"] = "DAY";
    PeriodUnit["HOUR"] = "HOUR";
    PeriodUnit["MICROSECOND"] = "MICROSECOND";
    PeriodUnit["MILLISECOND"] = "MILLISECOND";
    PeriodUnit["MINUTE"] = "MINUTE";
    PeriodUnit["SECOND"] = "SECOND";
    PeriodUnit["WEEK"] = "WEEK";
})(PeriodUnit = exports.PeriodUnit || (exports.PeriodUnit = {}));
var QuotaPeriod;
(function (QuotaPeriod) {
    /**
     * @internal
     */
    QuotaPeriod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuotaPeriod = exports.QuotaPeriod || (exports.QuotaPeriod = {}));
var MetricInfo;
(function (MetricInfo) {
    /**
     * @internal
     */
    MetricInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricInfo = exports.MetricInfo || (exports.MetricInfo = {}));
var ServiceQuota;
(function (ServiceQuota) {
    /**
     * @internal
     */
    ServiceQuota.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuota = exports.ServiceQuota || (exports.ServiceQuota = {}));
var GetAWSDefaultServiceQuotaResponse;
(function (GetAWSDefaultServiceQuotaResponse) {
    /**
     * @internal
     */
    GetAWSDefaultServiceQuotaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAWSDefaultServiceQuotaResponse = exports.GetAWSDefaultServiceQuotaResponse || (exports.GetAWSDefaultServiceQuotaResponse = {}));
var GetRequestedServiceQuotaChangeRequest;
(function (GetRequestedServiceQuotaChangeRequest) {
    /**
     * @internal
     */
    GetRequestedServiceQuotaChangeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRequestedServiceQuotaChangeRequest = exports.GetRequestedServiceQuotaChangeRequest || (exports.GetRequestedServiceQuotaChangeRequest = {}));
var RequestStatus;
(function (RequestStatus) {
    RequestStatus["APPROVED"] = "APPROVED";
    RequestStatus["CASE_CLOSED"] = "CASE_CLOSED";
    RequestStatus["CASE_OPENED"] = "CASE_OPENED";
    RequestStatus["DENIED"] = "DENIED";
    RequestStatus["PENDING"] = "PENDING";
})(RequestStatus = exports.RequestStatus || (exports.RequestStatus = {}));
var RequestedServiceQuotaChange;
(function (RequestedServiceQuotaChange) {
    /**
     * @internal
     */
    RequestedServiceQuotaChange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestedServiceQuotaChange = exports.RequestedServiceQuotaChange || (exports.RequestedServiceQuotaChange = {}));
var GetRequestedServiceQuotaChangeResponse;
(function (GetRequestedServiceQuotaChangeResponse) {
    /**
     * @internal
     */
    GetRequestedServiceQuotaChangeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRequestedServiceQuotaChangeResponse = exports.GetRequestedServiceQuotaChangeResponse || (exports.GetRequestedServiceQuotaChangeResponse = {}));
var GetServiceQuotaRequest;
(function (GetServiceQuotaRequest) {
    /**
     * @internal
     */
    GetServiceQuotaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceQuotaRequest = exports.GetServiceQuotaRequest || (exports.GetServiceQuotaRequest = {}));
var GetServiceQuotaResponse;
(function (GetServiceQuotaResponse) {
    /**
     * @internal
     */
    GetServiceQuotaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceQuotaResponse = exports.GetServiceQuotaResponse || (exports.GetServiceQuotaResponse = {}));
var GetServiceQuotaIncreaseRequestFromTemplateRequest;
(function (GetServiceQuotaIncreaseRequestFromTemplateRequest) {
    /**
     * @internal
     */
    GetServiceQuotaIncreaseRequestFromTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceQuotaIncreaseRequestFromTemplateRequest = exports.GetServiceQuotaIncreaseRequestFromTemplateRequest || (exports.GetServiceQuotaIncreaseRequestFromTemplateRequest = {}));
var ServiceQuotaIncreaseRequestInTemplate;
(function (ServiceQuotaIncreaseRequestInTemplate) {
    /**
     * @internal
     */
    ServiceQuotaIncreaseRequestInTemplate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaIncreaseRequestInTemplate = exports.ServiceQuotaIncreaseRequestInTemplate || (exports.ServiceQuotaIncreaseRequestInTemplate = {}));
var GetServiceQuotaIncreaseRequestFromTemplateResponse;
(function (GetServiceQuotaIncreaseRequestFromTemplateResponse) {
    /**
     * @internal
     */
    GetServiceQuotaIncreaseRequestFromTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceQuotaIncreaseRequestFromTemplateResponse = exports.GetServiceQuotaIncreaseRequestFromTemplateResponse || (exports.GetServiceQuotaIncreaseRequestFromTemplateResponse = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var InvalidPaginationTokenException;
(function (InvalidPaginationTokenException) {
    /**
     * @internal
     */
    InvalidPaginationTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationTokenException = exports.InvalidPaginationTokenException || (exports.InvalidPaginationTokenException = {}));
var InvalidResourceStateException;
(function (InvalidResourceStateException) {
    /**
     * @internal
     */
    InvalidResourceStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidResourceStateException = exports.InvalidResourceStateException || (exports.InvalidResourceStateException = {}));
var ListAWSDefaultServiceQuotasRequest;
(function (ListAWSDefaultServiceQuotasRequest) {
    /**
     * @internal
     */
    ListAWSDefaultServiceQuotasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAWSDefaultServiceQuotasRequest = exports.ListAWSDefaultServiceQuotasRequest || (exports.ListAWSDefaultServiceQuotasRequest = {}));
var ListAWSDefaultServiceQuotasResponse;
(function (ListAWSDefaultServiceQuotasResponse) {
    /**
     * @internal
     */
    ListAWSDefaultServiceQuotasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAWSDefaultServiceQuotasResponse = exports.ListAWSDefaultServiceQuotasResponse || (exports.ListAWSDefaultServiceQuotasResponse = {}));
var ListRequestedServiceQuotaChangeHistoryRequest;
(function (ListRequestedServiceQuotaChangeHistoryRequest) {
    /**
     * @internal
     */
    ListRequestedServiceQuotaChangeHistoryRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRequestedServiceQuotaChangeHistoryRequest = exports.ListRequestedServiceQuotaChangeHistoryRequest || (exports.ListRequestedServiceQuotaChangeHistoryRequest = {}));
var ListRequestedServiceQuotaChangeHistoryResponse;
(function (ListRequestedServiceQuotaChangeHistoryResponse) {
    /**
     * @internal
     */
    ListRequestedServiceQuotaChangeHistoryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRequestedServiceQuotaChangeHistoryResponse = exports.ListRequestedServiceQuotaChangeHistoryResponse || (exports.ListRequestedServiceQuotaChangeHistoryResponse = {}));
var ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
(function (ListRequestedServiceQuotaChangeHistoryByQuotaRequest) {
    /**
     * @internal
     */
    ListRequestedServiceQuotaChangeHistoryByQuotaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRequestedServiceQuotaChangeHistoryByQuotaRequest = exports.ListRequestedServiceQuotaChangeHistoryByQuotaRequest || (exports.ListRequestedServiceQuotaChangeHistoryByQuotaRequest = {}));
var ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
(function (ListRequestedServiceQuotaChangeHistoryByQuotaResponse) {
    /**
     * @internal
     */
    ListRequestedServiceQuotaChangeHistoryByQuotaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRequestedServiceQuotaChangeHistoryByQuotaResponse = exports.ListRequestedServiceQuotaChangeHistoryByQuotaResponse || (exports.ListRequestedServiceQuotaChangeHistoryByQuotaResponse = {}));
var ListServiceQuotaIncreaseRequestsInTemplateRequest;
(function (ListServiceQuotaIncreaseRequestsInTemplateRequest) {
    /**
     * @internal
     */
    ListServiceQuotaIncreaseRequestsInTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceQuotaIncreaseRequestsInTemplateRequest = exports.ListServiceQuotaIncreaseRequestsInTemplateRequest || (exports.ListServiceQuotaIncreaseRequestsInTemplateRequest = {}));
var ListServiceQuotaIncreaseRequestsInTemplateResponse;
(function (ListServiceQuotaIncreaseRequestsInTemplateResponse) {
    /**
     * @internal
     */
    ListServiceQuotaIncreaseRequestsInTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceQuotaIncreaseRequestsInTemplateResponse = exports.ListServiceQuotaIncreaseRequestsInTemplateResponse || (exports.ListServiceQuotaIncreaseRequestsInTemplateResponse = {}));
var ListServiceQuotasRequest;
(function (ListServiceQuotasRequest) {
    /**
     * @internal
     */
    ListServiceQuotasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceQuotasRequest = exports.ListServiceQuotasRequest || (exports.ListServiceQuotasRequest = {}));
var ListServiceQuotasResponse;
(function (ListServiceQuotasResponse) {
    /**
     * @internal
     */
    ListServiceQuotasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServiceQuotasResponse = exports.ListServiceQuotasResponse || (exports.ListServiceQuotasResponse = {}));
var ListServicesRequest;
(function (ListServicesRequest) {
    /**
     * @internal
     */
    ListServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesRequest = exports.ListServicesRequest || (exports.ListServicesRequest = {}));
var ServiceInfo;
(function (ServiceInfo) {
    /**
     * @internal
     */
    ServiceInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceInfo = exports.ServiceInfo || (exports.ServiceInfo = {}));
var ListServicesResponse;
(function (ListServicesResponse) {
    /**
     * @internal
     */
    ListServicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListServicesResponse = exports.ListServicesResponse || (exports.ListServicesResponse = {}));
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
var PutServiceQuotaIncreaseRequestIntoTemplateRequest;
(function (PutServiceQuotaIncreaseRequestIntoTemplateRequest) {
    /**
     * @internal
     */
    PutServiceQuotaIncreaseRequestIntoTemplateRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutServiceQuotaIncreaseRequestIntoTemplateRequest = exports.PutServiceQuotaIncreaseRequestIntoTemplateRequest || (exports.PutServiceQuotaIncreaseRequestIntoTemplateRequest = {}));
var PutServiceQuotaIncreaseRequestIntoTemplateResponse;
(function (PutServiceQuotaIncreaseRequestIntoTemplateResponse) {
    /**
     * @internal
     */
    PutServiceQuotaIncreaseRequestIntoTemplateResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutServiceQuotaIncreaseRequestIntoTemplateResponse = exports.PutServiceQuotaIncreaseRequestIntoTemplateResponse || (exports.PutServiceQuotaIncreaseRequestIntoTemplateResponse = {}));
var QuotaExceededException;
(function (QuotaExceededException) {
    /**
     * @internal
     */
    QuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuotaExceededException = exports.QuotaExceededException || (exports.QuotaExceededException = {}));
var RequestServiceQuotaIncreaseRequest;
(function (RequestServiceQuotaIncreaseRequest) {
    /**
     * @internal
     */
    RequestServiceQuotaIncreaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestServiceQuotaIncreaseRequest = exports.RequestServiceQuotaIncreaseRequest || (exports.RequestServiceQuotaIncreaseRequest = {}));
var RequestServiceQuotaIncreaseResponse;
(function (RequestServiceQuotaIncreaseResponse) {
    /**
     * @internal
     */
    RequestServiceQuotaIncreaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestServiceQuotaIncreaseResponse = exports.RequestServiceQuotaIncreaseResponse || (exports.RequestServiceQuotaIncreaseResponse = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var TagPolicyViolationException;
(function (TagPolicyViolationException) {
    /**
     * @internal
     */
    TagPolicyViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagPolicyViolationException = exports.TagPolicyViolationException || (exports.TagPolicyViolationException = {}));
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
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
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
//# sourceMappingURL=models_0.js.map