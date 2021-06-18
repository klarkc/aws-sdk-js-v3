import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
  /**
   * @internal
   */
  AccessDeniedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccessDeniedException || (AccessDeniedException = {}));
export var DeviceOfflineException;
(function (DeviceOfflineException) {
  /**
   * @internal
   */
  DeviceOfflineException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeviceOfflineException || (DeviceOfflineException = {}));
export var DeviceRetiredException;
(function (DeviceRetiredException) {
  /**
   * @internal
   */
  DeviceRetiredException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeviceRetiredException || (DeviceRetiredException = {}));
export var GetDeviceRequest;
(function (GetDeviceRequest) {
  /**
   * @internal
   */
  GetDeviceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeviceRequest || (GetDeviceRequest = {}));
export var DeviceStatus;
(function (DeviceStatus) {
  DeviceStatus["OFFLINE"] = "OFFLINE";
  DeviceStatus["ONLINE"] = "ONLINE";
  DeviceStatus["RETIRED"] = "RETIRED";
})(DeviceStatus || (DeviceStatus = {}));
export var DeviceType;
(function (DeviceType) {
  DeviceType["QPU"] = "QPU";
  DeviceType["SIMULATOR"] = "SIMULATOR";
})(DeviceType || (DeviceType = {}));
export var GetDeviceResponse;
(function (GetDeviceResponse) {
  /**
   * @internal
   */
  GetDeviceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetDeviceResponse || (GetDeviceResponse = {}));
export var InternalServiceException;
(function (InternalServiceException) {
  /**
   * @internal
   */
  InternalServiceException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InternalServiceException || (InternalServiceException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
  /**
   * @internal
   */
  ThrottlingException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
  /**
   * @internal
   */
  ValidationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidationException || (ValidationException = {}));
export var SearchDevicesFilter;
(function (SearchDevicesFilter) {
  /**
   * @internal
   */
  SearchDevicesFilter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchDevicesFilter || (SearchDevicesFilter = {}));
export var SearchDevicesRequest;
(function (SearchDevicesRequest) {
  /**
   * @internal
   */
  SearchDevicesRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchDevicesRequest || (SearchDevicesRequest = {}));
export var DeviceSummary;
(function (DeviceSummary) {
  /**
   * @internal
   */
  DeviceSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeviceSummary || (DeviceSummary = {}));
export var SearchDevicesResponse;
(function (SearchDevicesResponse) {
  /**
   * @internal
   */
  SearchDevicesResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchDevicesResponse || (SearchDevicesResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
  /**
   * @internal
   */
  ListTagsForResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
  /**
   * @internal
   */
  ListTagsForResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var CancelQuantumTaskRequest;
(function (CancelQuantumTaskRequest) {
  /**
   * @internal
   */
  CancelQuantumTaskRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CancelQuantumTaskRequest || (CancelQuantumTaskRequest = {}));
export var CancellationStatus;
(function (CancellationStatus) {
  CancellationStatus["CANCELLED"] = "CANCELLED";
  CancellationStatus["CANCELLING"] = "CANCELLING";
})(CancellationStatus || (CancellationStatus = {}));
export var CancelQuantumTaskResponse;
(function (CancelQuantumTaskResponse) {
  /**
   * @internal
   */
  CancelQuantumTaskResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CancelQuantumTaskResponse || (CancelQuantumTaskResponse = {}));
export var ConflictException;
(function (ConflictException) {
  /**
   * @internal
   */
  ConflictException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ConflictException || (ConflictException = {}));
export var CreateQuantumTaskRequest;
(function (CreateQuantumTaskRequest) {
  /**
   * @internal
   */
  CreateQuantumTaskRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateQuantumTaskRequest || (CreateQuantumTaskRequest = {}));
export var CreateQuantumTaskResponse;
(function (CreateQuantumTaskResponse) {
  /**
   * @internal
   */
  CreateQuantumTaskResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateQuantumTaskResponse || (CreateQuantumTaskResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
  /**
   * @internal
   */
  ServiceQuotaExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var GetQuantumTaskRequest;
(function (GetQuantumTaskRequest) {
  /**
   * @internal
   */
  GetQuantumTaskRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetQuantumTaskRequest || (GetQuantumTaskRequest = {}));
export var QuantumTaskStatus;
(function (QuantumTaskStatus) {
  QuantumTaskStatus["CANCELLED"] = "CANCELLED";
  QuantumTaskStatus["CANCELLING"] = "CANCELLING";
  QuantumTaskStatus["COMPLETED"] = "COMPLETED";
  QuantumTaskStatus["CREATED"] = "CREATED";
  QuantumTaskStatus["FAILED"] = "FAILED";
  QuantumTaskStatus["QUEUED"] = "QUEUED";
  QuantumTaskStatus["RUNNING"] = "RUNNING";
})(QuantumTaskStatus || (QuantumTaskStatus = {}));
export var GetQuantumTaskResponse;
(function (GetQuantumTaskResponse) {
  /**
   * @internal
   */
  GetQuantumTaskResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetQuantumTaskResponse || (GetQuantumTaskResponse = {}));
export var SearchQuantumTasksFilterOperator;
(function (SearchQuantumTasksFilterOperator) {
  SearchQuantumTasksFilterOperator["BETWEEN"] = "BETWEEN";
  SearchQuantumTasksFilterOperator["EQUAL"] = "EQUAL";
  SearchQuantumTasksFilterOperator["GT"] = "GT";
  SearchQuantumTasksFilterOperator["GTE"] = "GTE";
  SearchQuantumTasksFilterOperator["LT"] = "LT";
  SearchQuantumTasksFilterOperator["LTE"] = "LTE";
})(SearchQuantumTasksFilterOperator || (SearchQuantumTasksFilterOperator = {}));
export var SearchQuantumTasksFilter;
(function (SearchQuantumTasksFilter) {
  /**
   * @internal
   */
  SearchQuantumTasksFilter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchQuantumTasksFilter || (SearchQuantumTasksFilter = {}));
export var SearchQuantumTasksRequest;
(function (SearchQuantumTasksRequest) {
  /**
   * @internal
   */
  SearchQuantumTasksRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchQuantumTasksRequest || (SearchQuantumTasksRequest = {}));
export var QuantumTaskSummary;
(function (QuantumTaskSummary) {
  /**
   * @internal
   */
  QuantumTaskSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(QuantumTaskSummary || (QuantumTaskSummary = {}));
export var SearchQuantumTasksResponse;
(function (SearchQuantumTasksResponse) {
  /**
   * @internal
   */
  SearchQuantumTasksResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SearchQuantumTasksResponse || (SearchQuantumTasksResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
  /**
   * @internal
   */
  TagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
  /**
   * @internal
   */
  TagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
  /**
   * @internal
   */
  UntagResourceRequest.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
  /**
   * @internal
   */
  UntagResourceResponse.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UntagResourceResponse || (UntagResourceResponse = {}));
//# sourceMappingURL=models_0.js.map
