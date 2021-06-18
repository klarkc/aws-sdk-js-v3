"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntagResourceResponse =
  exports.UntagResourceRequest =
  exports.TagResourceResponse =
  exports.TagResourceRequest =
  exports.SearchQuantumTasksResponse =
  exports.QuantumTaskSummary =
  exports.SearchQuantumTasksRequest =
  exports.SearchQuantumTasksFilter =
  exports.SearchQuantumTasksFilterOperator =
  exports.GetQuantumTaskResponse =
  exports.QuantumTaskStatus =
  exports.GetQuantumTaskRequest =
  exports.ServiceQuotaExceededException =
  exports.CreateQuantumTaskResponse =
  exports.CreateQuantumTaskRequest =
  exports.ConflictException =
  exports.CancelQuantumTaskResponse =
  exports.CancellationStatus =
  exports.CancelQuantumTaskRequest =
  exports.ListTagsForResourceResponse =
  exports.ListTagsForResourceRequest =
  exports.SearchDevicesResponse =
  exports.DeviceSummary =
  exports.SearchDevicesRequest =
  exports.SearchDevicesFilter =
  exports.ValidationException =
  exports.ThrottlingException =
  exports.ResourceNotFoundException =
  exports.InternalServiceException =
  exports.GetDeviceResponse =
  exports.DeviceType =
  exports.DeviceStatus =
  exports.GetDeviceRequest =
  exports.DeviceRetiredException =
  exports.DeviceOfflineException =
  exports.AccessDeniedException =
    void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {})));
var DeviceOfflineException;
(function (DeviceOfflineException) {
  /**
   * @internal
   */
  DeviceOfflineException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceOfflineException = exports.DeviceOfflineException || (exports.DeviceOfflineException = {})));
var DeviceRetiredException;
(function (DeviceRetiredException) {
  /**
   * @internal
   */
  DeviceRetiredException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceRetiredException = exports.DeviceRetiredException || (exports.DeviceRetiredException = {})));
var GetDeviceRequest;
(function (GetDeviceRequest) {
  /**
   * @internal
   */
  GetDeviceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeviceRequest = exports.GetDeviceRequest || (exports.GetDeviceRequest = {})));
var DeviceStatus;
(function (DeviceStatus) {
  DeviceStatus["OFFLINE"] = "OFFLINE";
  DeviceStatus["ONLINE"] = "ONLINE";
  DeviceStatus["RETIRED"] = "RETIRED";
})((DeviceStatus = exports.DeviceStatus || (exports.DeviceStatus = {})));
var DeviceType;
(function (DeviceType) {
  DeviceType["QPU"] = "QPU";
  DeviceType["SIMULATOR"] = "SIMULATOR";
})((DeviceType = exports.DeviceType || (exports.DeviceType = {})));
var GetDeviceResponse;
(function (GetDeviceResponse) {
  /**
   * @internal
   */
  GetDeviceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDeviceResponse = exports.GetDeviceResponse || (exports.GetDeviceResponse = {})));
var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InternalServiceException = exports.InternalServiceException || (exports.InternalServiceException = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {})));
var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidationException = exports.ValidationException || (exports.ValidationException = {})));
var SearchDevicesFilter;
(function (SearchDevicesFilter) {
  /**
   * @internal
   */
  SearchDevicesFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchDevicesFilter = exports.SearchDevicesFilter || (exports.SearchDevicesFilter = {})));
var SearchDevicesRequest;
(function (SearchDevicesRequest) {
  /**
   * @internal
   */
  SearchDevicesRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchDevicesRequest = exports.SearchDevicesRequest || (exports.SearchDevicesRequest = {})));
var DeviceSummary;
(function (DeviceSummary) {
  /**
   * @internal
   */
  DeviceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeviceSummary = exports.DeviceSummary || (exports.DeviceSummary = {})));
var SearchDevicesResponse;
(function (SearchDevicesResponse) {
  /**
   * @internal
   */
  SearchDevicesResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchDevicesResponse = exports.SearchDevicesResponse || (exports.SearchDevicesResponse = {})));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {})));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {})));
var CancelQuantumTaskRequest;
(function (CancelQuantumTaskRequest) {
  /**
   * @internal
   */
  CancelQuantumTaskRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelQuantumTaskRequest = exports.CancelQuantumTaskRequest || (exports.CancelQuantumTaskRequest = {})));
var CancellationStatus;
(function (CancellationStatus) {
  CancellationStatus["CANCELLED"] = "CANCELLED";
  CancellationStatus["CANCELLING"] = "CANCELLING";
})((CancellationStatus = exports.CancellationStatus || (exports.CancellationStatus = {})));
var CancelQuantumTaskResponse;
(function (CancelQuantumTaskResponse) {
  /**
   * @internal
   */
  CancelQuantumTaskResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelQuantumTaskResponse = exports.CancelQuantumTaskResponse || (exports.CancelQuantumTaskResponse = {})));
var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictException = exports.ConflictException || (exports.ConflictException = {})));
var CreateQuantumTaskRequest;
(function (CreateQuantumTaskRequest) {
  /**
   * @internal
   */
  CreateQuantumTaskRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateQuantumTaskRequest = exports.CreateQuantumTaskRequest || (exports.CreateQuantumTaskRequest = {})));
var CreateQuantumTaskResponse;
(function (CreateQuantumTaskResponse) {
  /**
   * @internal
   */
  CreateQuantumTaskResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateQuantumTaskResponse = exports.CreateQuantumTaskResponse || (exports.CreateQuantumTaskResponse = {})));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServiceQuotaExceededException =
    exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}))
);
var GetQuantumTaskRequest;
(function (GetQuantumTaskRequest) {
  /**
   * @internal
   */
  GetQuantumTaskRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQuantumTaskRequest = exports.GetQuantumTaskRequest || (exports.GetQuantumTaskRequest = {})));
var QuantumTaskStatus;
(function (QuantumTaskStatus) {
  QuantumTaskStatus["CANCELLED"] = "CANCELLED";
  QuantumTaskStatus["CANCELLING"] = "CANCELLING";
  QuantumTaskStatus["COMPLETED"] = "COMPLETED";
  QuantumTaskStatus["CREATED"] = "CREATED";
  QuantumTaskStatus["FAILED"] = "FAILED";
  QuantumTaskStatus["QUEUED"] = "QUEUED";
  QuantumTaskStatus["RUNNING"] = "RUNNING";
})((QuantumTaskStatus = exports.QuantumTaskStatus || (exports.QuantumTaskStatus = {})));
var GetQuantumTaskResponse;
(function (GetQuantumTaskResponse) {
  /**
   * @internal
   */
  GetQuantumTaskResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetQuantumTaskResponse = exports.GetQuantumTaskResponse || (exports.GetQuantumTaskResponse = {})));
var SearchQuantumTasksFilterOperator;
(function (SearchQuantumTasksFilterOperator) {
  SearchQuantumTasksFilterOperator["BETWEEN"] = "BETWEEN";
  SearchQuantumTasksFilterOperator["EQUAL"] = "EQUAL";
  SearchQuantumTasksFilterOperator["GT"] = "GT";
  SearchQuantumTasksFilterOperator["GTE"] = "GTE";
  SearchQuantumTasksFilterOperator["LT"] = "LT";
  SearchQuantumTasksFilterOperator["LTE"] = "LTE";
})(
  (SearchQuantumTasksFilterOperator =
    exports.SearchQuantumTasksFilterOperator || (exports.SearchQuantumTasksFilterOperator = {}))
);
var SearchQuantumTasksFilter;
(function (SearchQuantumTasksFilter) {
  /**
   * @internal
   */
  SearchQuantumTasksFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchQuantumTasksFilter = exports.SearchQuantumTasksFilter || (exports.SearchQuantumTasksFilter = {})));
var SearchQuantumTasksRequest;
(function (SearchQuantumTasksRequest) {
  /**
   * @internal
   */
  SearchQuantumTasksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchQuantumTasksRequest = exports.SearchQuantumTasksRequest || (exports.SearchQuantumTasksRequest = {})));
var QuantumTaskSummary;
(function (QuantumTaskSummary) {
  /**
   * @internal
   */
  QuantumTaskSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((QuantumTaskSummary = exports.QuantumTaskSummary || (exports.QuantumTaskSummary = {})));
var SearchQuantumTasksResponse;
(function (SearchQuantumTasksResponse) {
  /**
   * @internal
   */
  SearchQuantumTasksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SearchQuantumTasksResponse = exports.SearchQuantumTasksResponse || (exports.SearchQuantumTasksResponse = {})));
var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {})));
var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {})));
var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {})));
var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {})));
//# sourceMappingURL=models_0.js.map
