"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourcesOutput = exports.UntagResourcesInput = exports.TagResourcesOutput = exports.TagResourcesInput = exports.StartReportCreationOutput = exports.StartReportCreationInput = exports.GetTagValuesOutput = exports.GetTagValuesInput = exports.GetTagKeysOutput = exports.GetTagKeysInput = exports.PaginationTokenExpiredException = exports.GetResourcesOutput = exports.ResourceTagMapping = exports.Tag = exports.GetResourcesInput = exports.TagFilter = exports.GetComplianceSummaryOutput = exports.Summary = exports.TargetIdType = exports.GetComplianceSummaryInput = exports.GroupByAttribute = exports.FailureInfo = exports.ErrorCode = exports.ThrottledException = exports.InvalidParameterException = exports.InternalServiceException = exports.DescribeReportCreationOutput = exports.DescribeReportCreationInput = exports.ConstraintViolationException = exports.ConcurrentModificationException = exports.ComplianceDetails = void 0;
var ComplianceDetails;
(function (ComplianceDetails) {
    /**
     * @internal
     */
    ComplianceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ComplianceDetails = exports.ComplianceDetails || (exports.ComplianceDetails = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var ConstraintViolationException;
(function (ConstraintViolationException) {
    /**
     * @internal
     */
    ConstraintViolationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConstraintViolationException = exports.ConstraintViolationException || (exports.ConstraintViolationException = {}));
var DescribeReportCreationInput;
(function (DescribeReportCreationInput) {
    /**
     * @internal
     */
    DescribeReportCreationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReportCreationInput = exports.DescribeReportCreationInput || (exports.DescribeReportCreationInput = {}));
var DescribeReportCreationOutput;
(function (DescribeReportCreationOutput) {
    /**
     * @internal
     */
    DescribeReportCreationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReportCreationOutput = exports.DescribeReportCreationOutput || (exports.DescribeReportCreationOutput = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ThrottledException;
(function (ThrottledException) {
    /**
     * @internal
     */
    ThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottledException = exports.ThrottledException || (exports.ThrottledException = {}));
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["INTERNAL_SERVICE_EXCEPTION"] = "InternalServiceException";
    ErrorCode["INVALID_PARAMETER_EXCEPTION"] = "InvalidParameterException";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var FailureInfo;
(function (FailureInfo) {
    /**
     * @internal
     */
    FailureInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureInfo = exports.FailureInfo || (exports.FailureInfo = {}));
var GroupByAttribute;
(function (GroupByAttribute) {
    GroupByAttribute["REGION"] = "REGION";
    GroupByAttribute["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    GroupByAttribute["TARGET_ID"] = "TARGET_ID";
})(GroupByAttribute = exports.GroupByAttribute || (exports.GroupByAttribute = {}));
var GetComplianceSummaryInput;
(function (GetComplianceSummaryInput) {
    /**
     * @internal
     */
    GetComplianceSummaryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceSummaryInput = exports.GetComplianceSummaryInput || (exports.GetComplianceSummaryInput = {}));
var TargetIdType;
(function (TargetIdType) {
    TargetIdType["ACCOUNT"] = "ACCOUNT";
    TargetIdType["OU"] = "OU";
    TargetIdType["ROOT"] = "ROOT";
})(TargetIdType = exports.TargetIdType || (exports.TargetIdType = {}));
var Summary;
(function (Summary) {
    /**
     * @internal
     */
    Summary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Summary = exports.Summary || (exports.Summary = {}));
var GetComplianceSummaryOutput;
(function (GetComplianceSummaryOutput) {
    /**
     * @internal
     */
    GetComplianceSummaryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetComplianceSummaryOutput = exports.GetComplianceSummaryOutput || (exports.GetComplianceSummaryOutput = {}));
var TagFilter;
(function (TagFilter) {
    /**
     * @internal
     */
    TagFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagFilter = exports.TagFilter || (exports.TagFilter = {}));
var GetResourcesInput;
(function (GetResourcesInput) {
    /**
     * @internal
     */
    GetResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcesInput = exports.GetResourcesInput || (exports.GetResourcesInput = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ResourceTagMapping;
(function (ResourceTagMapping) {
    /**
     * @internal
     */
    ResourceTagMapping.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceTagMapping = exports.ResourceTagMapping || (exports.ResourceTagMapping = {}));
var GetResourcesOutput;
(function (GetResourcesOutput) {
    /**
     * @internal
     */
    GetResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcesOutput = exports.GetResourcesOutput || (exports.GetResourcesOutput = {}));
var PaginationTokenExpiredException;
(function (PaginationTokenExpiredException) {
    /**
     * @internal
     */
    PaginationTokenExpiredException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PaginationTokenExpiredException = exports.PaginationTokenExpiredException || (exports.PaginationTokenExpiredException = {}));
var GetTagKeysInput;
(function (GetTagKeysInput) {
    /**
     * @internal
     */
    GetTagKeysInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagKeysInput = exports.GetTagKeysInput || (exports.GetTagKeysInput = {}));
var GetTagKeysOutput;
(function (GetTagKeysOutput) {
    /**
     * @internal
     */
    GetTagKeysOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagKeysOutput = exports.GetTagKeysOutput || (exports.GetTagKeysOutput = {}));
var GetTagValuesInput;
(function (GetTagValuesInput) {
    /**
     * @internal
     */
    GetTagValuesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagValuesInput = exports.GetTagValuesInput || (exports.GetTagValuesInput = {}));
var GetTagValuesOutput;
(function (GetTagValuesOutput) {
    /**
     * @internal
     */
    GetTagValuesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagValuesOutput = exports.GetTagValuesOutput || (exports.GetTagValuesOutput = {}));
var StartReportCreationInput;
(function (StartReportCreationInput) {
    /**
     * @internal
     */
    StartReportCreationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReportCreationInput = exports.StartReportCreationInput || (exports.StartReportCreationInput = {}));
var StartReportCreationOutput;
(function (StartReportCreationOutput) {
    /**
     * @internal
     */
    StartReportCreationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReportCreationOutput = exports.StartReportCreationOutput || (exports.StartReportCreationOutput = {}));
var TagResourcesInput;
(function (TagResourcesInput) {
    /**
     * @internal
     */
    TagResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourcesInput = exports.TagResourcesInput || (exports.TagResourcesInput = {}));
var TagResourcesOutput;
(function (TagResourcesOutput) {
    /**
     * @internal
     */
    TagResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourcesOutput = exports.TagResourcesOutput || (exports.TagResourcesOutput = {}));
var UntagResourcesInput;
(function (UntagResourcesInput) {
    /**
     * @internal
     */
    UntagResourcesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourcesInput = exports.UntagResourcesInput || (exports.UntagResourcesInput = {}));
var UntagResourcesOutput;
(function (UntagResourcesOutput) {
    /**
     * @internal
     */
    UntagResourcesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourcesOutput = exports.UntagResourcesOutput || (exports.UntagResourcesOutput = {}));
//# sourceMappingURL=models_0.js.map