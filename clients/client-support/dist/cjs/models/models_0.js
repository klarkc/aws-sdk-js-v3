"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTrustedAdvisorCheckRequest = exports.DescribeTrustedAdvisorCheckSummariesResponse = exports.TrustedAdvisorCheckSummary = exports.DescribeTrustedAdvisorCheckSummariesRequest = exports.DescribeTrustedAdvisorChecksResponse = exports.TrustedAdvisorCheckDescription = exports.DescribeTrustedAdvisorChecksRequest = exports.DescribeTrustedAdvisorCheckResultResponse = exports.TrustedAdvisorCheckResult = exports.TrustedAdvisorResourcesSummary = exports.TrustedAdvisorResourceDetail = exports.TrustedAdvisorCategorySpecificSummary = exports.TrustedAdvisorCostOptimizingSummary = exports.DescribeTrustedAdvisorCheckResultRequest = exports.DescribeTrustedAdvisorCheckRefreshStatusesResponse = exports.TrustedAdvisorCheckRefreshStatus = exports.DescribeTrustedAdvisorCheckRefreshStatusesRequest = exports.DescribeSeverityLevelsResponse = exports.SeverityLevel = exports.DescribeSeverityLevelsRequest = exports.DescribeServicesResponse = exports.Service = exports.Category = exports.DescribeServicesRequest = exports.DescribeCommunicationsResponse = exports.DescribeCommunicationsRequest = exports.DescribeCasesResponse = exports.CaseDetails = exports.RecentCaseCommunications = exports.Communication = exports.DescribeCasesRequest = exports.DescribeAttachmentResponse = exports.DescribeAttachmentRequest = exports.DescribeAttachmentLimitExceeded = exports.CreateCaseResponse = exports.CreateCaseRequest = exports.CaseCreationLimitExceeded = exports.AttachmentIdNotFound = exports.AttachmentDetails = exports.CaseIdNotFound = exports.AddCommunicationToCaseResponse = exports.AddCommunicationToCaseRequest = exports.InternalServerError = exports.AttachmentSetSizeLimitExceeded = exports.AttachmentSetIdNotFound = exports.AttachmentSetExpired = exports.AttachmentLimitExceeded = exports.AddAttachmentsToSetResponse = exports.AddAttachmentsToSetRequest = exports.Attachment = void 0;
exports.ResolveCaseResponse = exports.ResolveCaseRequest = exports.RefreshTrustedAdvisorCheckResponse = void 0;
var Attachment;
(function (Attachment) {
    /**
     * @internal
     */
    Attachment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Attachment = exports.Attachment || (exports.Attachment = {}));
var AddAttachmentsToSetRequest;
(function (AddAttachmentsToSetRequest) {
    /**
     * @internal
     */
    AddAttachmentsToSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAttachmentsToSetRequest = exports.AddAttachmentsToSetRequest || (exports.AddAttachmentsToSetRequest = {}));
var AddAttachmentsToSetResponse;
(function (AddAttachmentsToSetResponse) {
    /**
     * @internal
     */
    AddAttachmentsToSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddAttachmentsToSetResponse = exports.AddAttachmentsToSetResponse || (exports.AddAttachmentsToSetResponse = {}));
var AttachmentLimitExceeded;
(function (AttachmentLimitExceeded) {
    /**
     * @internal
     */
    AttachmentLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentLimitExceeded = exports.AttachmentLimitExceeded || (exports.AttachmentLimitExceeded = {}));
var AttachmentSetExpired;
(function (AttachmentSetExpired) {
    /**
     * @internal
     */
    AttachmentSetExpired.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentSetExpired = exports.AttachmentSetExpired || (exports.AttachmentSetExpired = {}));
var AttachmentSetIdNotFound;
(function (AttachmentSetIdNotFound) {
    /**
     * @internal
     */
    AttachmentSetIdNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentSetIdNotFound = exports.AttachmentSetIdNotFound || (exports.AttachmentSetIdNotFound = {}));
var AttachmentSetSizeLimitExceeded;
(function (AttachmentSetSizeLimitExceeded) {
    /**
     * @internal
     */
    AttachmentSetSizeLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentSetSizeLimitExceeded = exports.AttachmentSetSizeLimitExceeded || (exports.AttachmentSetSizeLimitExceeded = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var AddCommunicationToCaseRequest;
(function (AddCommunicationToCaseRequest) {
    /**
     * @internal
     */
    AddCommunicationToCaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCommunicationToCaseRequest = exports.AddCommunicationToCaseRequest || (exports.AddCommunicationToCaseRequest = {}));
var AddCommunicationToCaseResponse;
(function (AddCommunicationToCaseResponse) {
    /**
     * @internal
     */
    AddCommunicationToCaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddCommunicationToCaseResponse = exports.AddCommunicationToCaseResponse || (exports.AddCommunicationToCaseResponse = {}));
var CaseIdNotFound;
(function (CaseIdNotFound) {
    /**
     * @internal
     */
    CaseIdNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaseIdNotFound = exports.CaseIdNotFound || (exports.CaseIdNotFound = {}));
var AttachmentDetails;
(function (AttachmentDetails) {
    /**
     * @internal
     */
    AttachmentDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentDetails = exports.AttachmentDetails || (exports.AttachmentDetails = {}));
var AttachmentIdNotFound;
(function (AttachmentIdNotFound) {
    /**
     * @internal
     */
    AttachmentIdNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttachmentIdNotFound = exports.AttachmentIdNotFound || (exports.AttachmentIdNotFound = {}));
var CaseCreationLimitExceeded;
(function (CaseCreationLimitExceeded) {
    /**
     * @internal
     */
    CaseCreationLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaseCreationLimitExceeded = exports.CaseCreationLimitExceeded || (exports.CaseCreationLimitExceeded = {}));
var CreateCaseRequest;
(function (CreateCaseRequest) {
    /**
     * @internal
     */
    CreateCaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCaseRequest = exports.CreateCaseRequest || (exports.CreateCaseRequest = {}));
var CreateCaseResponse;
(function (CreateCaseResponse) {
    /**
     * @internal
     */
    CreateCaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCaseResponse = exports.CreateCaseResponse || (exports.CreateCaseResponse = {}));
var DescribeAttachmentLimitExceeded;
(function (DescribeAttachmentLimitExceeded) {
    /**
     * @internal
     */
    DescribeAttachmentLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttachmentLimitExceeded = exports.DescribeAttachmentLimitExceeded || (exports.DescribeAttachmentLimitExceeded = {}));
var DescribeAttachmentRequest;
(function (DescribeAttachmentRequest) {
    /**
     * @internal
     */
    DescribeAttachmentRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttachmentRequest = exports.DescribeAttachmentRequest || (exports.DescribeAttachmentRequest = {}));
var DescribeAttachmentResponse;
(function (DescribeAttachmentResponse) {
    /**
     * @internal
     */
    DescribeAttachmentResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAttachmentResponse = exports.DescribeAttachmentResponse || (exports.DescribeAttachmentResponse = {}));
var DescribeCasesRequest;
(function (DescribeCasesRequest) {
    /**
     * @internal
     */
    DescribeCasesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCasesRequest = exports.DescribeCasesRequest || (exports.DescribeCasesRequest = {}));
var Communication;
(function (Communication) {
    /**
     * @internal
     */
    Communication.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Communication = exports.Communication || (exports.Communication = {}));
var RecentCaseCommunications;
(function (RecentCaseCommunications) {
    /**
     * @internal
     */
    RecentCaseCommunications.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecentCaseCommunications = exports.RecentCaseCommunications || (exports.RecentCaseCommunications = {}));
var CaseDetails;
(function (CaseDetails) {
    /**
     * @internal
     */
    CaseDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CaseDetails = exports.CaseDetails || (exports.CaseDetails = {}));
var DescribeCasesResponse;
(function (DescribeCasesResponse) {
    /**
     * @internal
     */
    DescribeCasesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCasesResponse = exports.DescribeCasesResponse || (exports.DescribeCasesResponse = {}));
var DescribeCommunicationsRequest;
(function (DescribeCommunicationsRequest) {
    /**
     * @internal
     */
    DescribeCommunicationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCommunicationsRequest = exports.DescribeCommunicationsRequest || (exports.DescribeCommunicationsRequest = {}));
var DescribeCommunicationsResponse;
(function (DescribeCommunicationsResponse) {
    /**
     * @internal
     */
    DescribeCommunicationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCommunicationsResponse = exports.DescribeCommunicationsResponse || (exports.DescribeCommunicationsResponse = {}));
var DescribeServicesRequest;
(function (DescribeServicesRequest) {
    /**
     * @internal
     */
    DescribeServicesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServicesRequest = exports.DescribeServicesRequest || (exports.DescribeServicesRequest = {}));
var Category;
(function (Category) {
    /**
     * @internal
     */
    Category.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Category = exports.Category || (exports.Category = {}));
var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Service = exports.Service || (exports.Service = {}));
var DescribeServicesResponse;
(function (DescribeServicesResponse) {
    /**
     * @internal
     */
    DescribeServicesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServicesResponse = exports.DescribeServicesResponse || (exports.DescribeServicesResponse = {}));
var DescribeSeverityLevelsRequest;
(function (DescribeSeverityLevelsRequest) {
    /**
     * @internal
     */
    DescribeSeverityLevelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSeverityLevelsRequest = exports.DescribeSeverityLevelsRequest || (exports.DescribeSeverityLevelsRequest = {}));
var SeverityLevel;
(function (SeverityLevel) {
    /**
     * @internal
     */
    SeverityLevel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SeverityLevel = exports.SeverityLevel || (exports.SeverityLevel = {}));
var DescribeSeverityLevelsResponse;
(function (DescribeSeverityLevelsResponse) {
    /**
     * @internal
     */
    DescribeSeverityLevelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSeverityLevelsResponse = exports.DescribeSeverityLevelsResponse || (exports.DescribeSeverityLevelsResponse = {}));
var DescribeTrustedAdvisorCheckRefreshStatusesRequest;
(function (DescribeTrustedAdvisorCheckRefreshStatusesRequest) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckRefreshStatusesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckRefreshStatusesRequest = exports.DescribeTrustedAdvisorCheckRefreshStatusesRequest || (exports.DescribeTrustedAdvisorCheckRefreshStatusesRequest = {}));
var TrustedAdvisorCheckRefreshStatus;
(function (TrustedAdvisorCheckRefreshStatus) {
    /**
     * @internal
     */
    TrustedAdvisorCheckRefreshStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCheckRefreshStatus = exports.TrustedAdvisorCheckRefreshStatus || (exports.TrustedAdvisorCheckRefreshStatus = {}));
var DescribeTrustedAdvisorCheckRefreshStatusesResponse;
(function (DescribeTrustedAdvisorCheckRefreshStatusesResponse) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckRefreshStatusesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckRefreshStatusesResponse = exports.DescribeTrustedAdvisorCheckRefreshStatusesResponse || (exports.DescribeTrustedAdvisorCheckRefreshStatusesResponse = {}));
var DescribeTrustedAdvisorCheckResultRequest;
(function (DescribeTrustedAdvisorCheckResultRequest) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckResultRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckResultRequest = exports.DescribeTrustedAdvisorCheckResultRequest || (exports.DescribeTrustedAdvisorCheckResultRequest = {}));
var TrustedAdvisorCostOptimizingSummary;
(function (TrustedAdvisorCostOptimizingSummary) {
    /**
     * @internal
     */
    TrustedAdvisorCostOptimizingSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCostOptimizingSummary = exports.TrustedAdvisorCostOptimizingSummary || (exports.TrustedAdvisorCostOptimizingSummary = {}));
var TrustedAdvisorCategorySpecificSummary;
(function (TrustedAdvisorCategorySpecificSummary) {
    /**
     * @internal
     */
    TrustedAdvisorCategorySpecificSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCategorySpecificSummary = exports.TrustedAdvisorCategorySpecificSummary || (exports.TrustedAdvisorCategorySpecificSummary = {}));
var TrustedAdvisorResourceDetail;
(function (TrustedAdvisorResourceDetail) {
    /**
     * @internal
     */
    TrustedAdvisorResourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorResourceDetail = exports.TrustedAdvisorResourceDetail || (exports.TrustedAdvisorResourceDetail = {}));
var TrustedAdvisorResourcesSummary;
(function (TrustedAdvisorResourcesSummary) {
    /**
     * @internal
     */
    TrustedAdvisorResourcesSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorResourcesSummary = exports.TrustedAdvisorResourcesSummary || (exports.TrustedAdvisorResourcesSummary = {}));
var TrustedAdvisorCheckResult;
(function (TrustedAdvisorCheckResult) {
    /**
     * @internal
     */
    TrustedAdvisorCheckResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCheckResult = exports.TrustedAdvisorCheckResult || (exports.TrustedAdvisorCheckResult = {}));
var DescribeTrustedAdvisorCheckResultResponse;
(function (DescribeTrustedAdvisorCheckResultResponse) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckResultResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckResultResponse = exports.DescribeTrustedAdvisorCheckResultResponse || (exports.DescribeTrustedAdvisorCheckResultResponse = {}));
var DescribeTrustedAdvisorChecksRequest;
(function (DescribeTrustedAdvisorChecksRequest) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorChecksRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorChecksRequest = exports.DescribeTrustedAdvisorChecksRequest || (exports.DescribeTrustedAdvisorChecksRequest = {}));
var TrustedAdvisorCheckDescription;
(function (TrustedAdvisorCheckDescription) {
    /**
     * @internal
     */
    TrustedAdvisorCheckDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCheckDescription = exports.TrustedAdvisorCheckDescription || (exports.TrustedAdvisorCheckDescription = {}));
var DescribeTrustedAdvisorChecksResponse;
(function (DescribeTrustedAdvisorChecksResponse) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorChecksResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorChecksResponse = exports.DescribeTrustedAdvisorChecksResponse || (exports.DescribeTrustedAdvisorChecksResponse = {}));
var DescribeTrustedAdvisorCheckSummariesRequest;
(function (DescribeTrustedAdvisorCheckSummariesRequest) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckSummariesRequest = exports.DescribeTrustedAdvisorCheckSummariesRequest || (exports.DescribeTrustedAdvisorCheckSummariesRequest = {}));
var TrustedAdvisorCheckSummary;
(function (TrustedAdvisorCheckSummary) {
    /**
     * @internal
     */
    TrustedAdvisorCheckSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TrustedAdvisorCheckSummary = exports.TrustedAdvisorCheckSummary || (exports.TrustedAdvisorCheckSummary = {}));
var DescribeTrustedAdvisorCheckSummariesResponse;
(function (DescribeTrustedAdvisorCheckSummariesResponse) {
    /**
     * @internal
     */
    DescribeTrustedAdvisorCheckSummariesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTrustedAdvisorCheckSummariesResponse = exports.DescribeTrustedAdvisorCheckSummariesResponse || (exports.DescribeTrustedAdvisorCheckSummariesResponse = {}));
var RefreshTrustedAdvisorCheckRequest;
(function (RefreshTrustedAdvisorCheckRequest) {
    /**
     * @internal
     */
    RefreshTrustedAdvisorCheckRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshTrustedAdvisorCheckRequest = exports.RefreshTrustedAdvisorCheckRequest || (exports.RefreshTrustedAdvisorCheckRequest = {}));
var RefreshTrustedAdvisorCheckResponse;
(function (RefreshTrustedAdvisorCheckResponse) {
    /**
     * @internal
     */
    RefreshTrustedAdvisorCheckResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RefreshTrustedAdvisorCheckResponse = exports.RefreshTrustedAdvisorCheckResponse || (exports.RefreshTrustedAdvisorCheckResponse = {}));
var ResolveCaseRequest;
(function (ResolveCaseRequest) {
    /**
     * @internal
     */
    ResolveCaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveCaseRequest = exports.ResolveCaseRequest || (exports.ResolveCaseRequest = {}));
var ResolveCaseResponse;
(function (ResolveCaseResponse) {
    /**
     * @internal
     */
    ResolveCaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResolveCaseResponse = exports.ResolveCaseResponse || (exports.ResolveCaseResponse = {}));
//# sourceMappingURL=models_0.js.map