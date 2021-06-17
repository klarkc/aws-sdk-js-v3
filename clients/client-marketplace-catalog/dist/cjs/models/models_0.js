"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartChangeSetResponse = exports.StartChangeSetRequest = exports.Change = exports.ServiceQuotaExceededException = exports.ListEntitiesResponse = exports.EntitySummary = exports.ListEntitiesRequest = exports.ListChangeSetsResponse = exports.ChangeSetSummaryListItem = exports.ListChangeSetsRequest = exports.Sort = exports.SortOrder = exports.Filter = exports.ResourceNotSupportedException = exports.DescribeEntityResponse = exports.DescribeEntityRequest = exports.DescribeChangeSetResponse = exports.ChangeStatus = exports.FailureCode = exports.ChangeSummary = exports.ErrorDetail = exports.Entity = exports.DescribeChangeSetRequest = exports.ValidationException = exports.ThrottlingException = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.InternalServiceException = exports.CancelChangeSetResponse = exports.CancelChangeSetRequest = exports.AccessDeniedException = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var CancelChangeSetRequest;
(function (CancelChangeSetRequest) {
    /**
     * @internal
     */
    CancelChangeSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelChangeSetRequest = exports.CancelChangeSetRequest || (exports.CancelChangeSetRequest = {}));
var CancelChangeSetResponse;
(function (CancelChangeSetResponse) {
    /**
     * @internal
     */
    CancelChangeSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelChangeSetResponse = exports.CancelChangeSetResponse || (exports.CancelChangeSetResponse = {}));
var InternalServiceException;
(function (InternalServiceException) {
    /**
     * @internal
     */
    InternalServiceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var DescribeChangeSetRequest;
(function (DescribeChangeSetRequest) {
    /**
     * @internal
     */
    DescribeChangeSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChangeSetRequest = exports.DescribeChangeSetRequest || (exports.DescribeChangeSetRequest = {}));
var Entity;
(function (Entity) {
    /**
     * @internal
     */
    Entity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Entity = exports.Entity || (exports.Entity = {}));
var ErrorDetail;
(function (ErrorDetail) {
    /**
     * @internal
     */
    ErrorDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetail = exports.ErrorDetail || (exports.ErrorDetail = {}));
var ChangeSummary;
(function (ChangeSummary) {
    /**
     * @internal
     */
    ChangeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeSummary = exports.ChangeSummary || (exports.ChangeSummary = {}));
var FailureCode;
(function (FailureCode) {
    FailureCode["ClientError"] = "CLIENT_ERROR";
    FailureCode["ServerFault"] = "SERVER_FAULT";
})(FailureCode = exports.FailureCode || (exports.FailureCode = {}));
var ChangeStatus;
(function (ChangeStatus) {
    ChangeStatus["APPLYING"] = "APPLYING";
    ChangeStatus["CANCELLED"] = "CANCELLED";
    ChangeStatus["FAILED"] = "FAILED";
    ChangeStatus["PREPARING"] = "PREPARING";
    ChangeStatus["SUCCEEDED"] = "SUCCEEDED";
})(ChangeStatus = exports.ChangeStatus || (exports.ChangeStatus = {}));
var DescribeChangeSetResponse;
(function (DescribeChangeSetResponse) {
    /**
     * @internal
     */
    DescribeChangeSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeChangeSetResponse = exports.DescribeChangeSetResponse || (exports.DescribeChangeSetResponse = {}));
var DescribeEntityRequest;
(function (DescribeEntityRequest) {
    /**
     * @internal
     */
    DescribeEntityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntityRequest = exports.DescribeEntityRequest || (exports.DescribeEntityRequest = {}));
var DescribeEntityResponse;
(function (DescribeEntityResponse) {
    /**
     * @internal
     */
    DescribeEntityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntityResponse = exports.DescribeEntityResponse || (exports.DescribeEntityResponse = {}));
var ResourceNotSupportedException;
(function (ResourceNotSupportedException) {
    /**
     * @internal
     */
    ResourceNotSupportedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotSupportedException = exports.ResourceNotSupportedException || (exports.ResourceNotSupportedException = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var Sort;
(function (Sort) {
    /**
     * @internal
     */
    Sort.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Sort = exports.Sort || (exports.Sort = {}));
var ListChangeSetsRequest;
(function (ListChangeSetsRequest) {
    /**
     * @internal
     */
    ListChangeSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChangeSetsRequest = exports.ListChangeSetsRequest || (exports.ListChangeSetsRequest = {}));
var ChangeSetSummaryListItem;
(function (ChangeSetSummaryListItem) {
    /**
     * @internal
     */
    ChangeSetSummaryListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ChangeSetSummaryListItem = exports.ChangeSetSummaryListItem || (exports.ChangeSetSummaryListItem = {}));
var ListChangeSetsResponse;
(function (ListChangeSetsResponse) {
    /**
     * @internal
     */
    ListChangeSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListChangeSetsResponse = exports.ListChangeSetsResponse || (exports.ListChangeSetsResponse = {}));
var ListEntitiesRequest;
(function (ListEntitiesRequest) {
    /**
     * @internal
     */
    ListEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesRequest = exports.ListEntitiesRequest || (exports.ListEntitiesRequest = {}));
var EntitySummary;
(function (EntitySummary) {
    /**
     * @internal
     */
    EntitySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntitySummary = exports.EntitySummary || (exports.EntitySummary = {}));
var ListEntitiesResponse;
(function (ListEntitiesResponse) {
    /**
     * @internal
     */
    ListEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEntitiesResponse = exports.ListEntitiesResponse || (exports.ListEntitiesResponse = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var Change;
(function (Change) {
    /**
     * @internal
     */
    Change.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Change = exports.Change || (exports.Change = {}));
var StartChangeSetRequest;
(function (StartChangeSetRequest) {
    /**
     * @internal
     */
    StartChangeSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChangeSetRequest = exports.StartChangeSetRequest || (exports.StartChangeSetRequest = {}));
var StartChangeSetResponse;
(function (StartChangeSetResponse) {
    /**
     * @internal
     */
    StartChangeSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartChangeSetResponse = exports.StartChangeSetResponse || (exports.StartChangeSetResponse = {}));
//# sourceMappingURL=models_0.js.map