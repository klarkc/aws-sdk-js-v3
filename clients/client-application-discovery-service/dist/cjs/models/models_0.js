"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagFilter =
  exports.DescribeImportTasksResponse =
  exports.ImportTask =
  exports.ImportStatus =
  exports.DescribeImportTasksRequest =
  exports.ImportTaskFilter =
  exports.ImportTaskFilterName =
  exports.DescribeExportTasksResponse =
  exports.DescribeExportTasksRequest =
  exports.ExportFilter =
  exports.DescribeExportConfigurationsResponse =
  exports.ExportInfo =
  exports.ExportStatus =
  exports.DescribeExportConfigurationsRequest =
  exports.OperationNotPermittedException =
  exports.DescribeContinuousExportsResponse =
  exports.ContinuousExportDescription =
  exports.ContinuousExportStatus =
  exports.DataSource =
  exports.DescribeContinuousExportsRequest =
  exports.DescribeConfigurationsResponse =
  exports.DescribeConfigurationsRequest =
  exports.DescribeAgentsResponse =
  exports.DescribeAgentsRequest =
  exports.Filter =
  exports.DeleteTagsResponse =
  exports.DeleteTagsRequest =
  exports.DeleteApplicationsResponse =
  exports.DeleteApplicationsRequest =
  exports.ResourceNotFoundException =
  exports.CreateTagsResponse =
  exports.CreateTagsRequest =
  exports.Tag =
  exports.CreateApplicationResponse =
  exports.CreateApplicationRequest =
  exports.BatchDeleteImportDataResponse =
  exports.BatchDeleteImportDataError =
  exports.BatchDeleteImportDataErrorCode =
  exports.BatchDeleteImportDataRequest =
  exports.ServerInternalErrorException =
  exports.InvalidParameterValueException =
  exports.InvalidParameterException =
  exports.HomeRegionNotSetException =
  exports.AuthorizationErrorException =
  exports.AssociateConfigurationItemsToApplicationResponse =
  exports.AssociateConfigurationItemsToApplicationRequest =
  exports.AgentInfo =
  exports.AgentStatus =
  exports.AgentNetworkInfo =
  exports.AgentConfigurationStatus =
    void 0;
exports.UpdateApplicationResponse =
  exports.UpdateApplicationRequest =
  exports.StopDataCollectionByAgentIdsResponse =
  exports.StopDataCollectionByAgentIdsRequest =
  exports.StopContinuousExportResponse =
  exports.StopContinuousExportRequest =
  exports.StartImportTaskResponse =
  exports.StartImportTaskRequest =
  exports.StartExportTaskResponse =
  exports.StartExportTaskRequest =
  exports.ExportDataFormat =
  exports.StartDataCollectionByAgentIdsResponse =
  exports.StartDataCollectionByAgentIdsRequest =
  exports.StartContinuousExportResponse =
  exports.StartContinuousExportRequest =
  exports.ResourceInUseException =
  exports.ConflictErrorException =
  exports.ListServerNeighborsResponse =
  exports.NeighborConnectionDetail =
  exports.ListServerNeighborsRequest =
  exports.ListConfigurationsResponse =
  exports.ListConfigurationsRequest =
  exports.OrderByElement =
  exports.OrderString =
  exports.GetDiscoverySummaryResponse =
  exports.CustomerConnectorInfo =
  exports.CustomerAgentInfo =
  exports.GetDiscoverySummaryRequest =
  exports.ExportConfigurationsResponse =
  exports.DisassociateConfigurationItemsFromApplicationResponse =
  exports.DisassociateConfigurationItemsFromApplicationRequest =
  exports.DescribeTagsResponse =
  exports.ConfigurationTag =
  exports.ConfigurationItemType =
  exports.DescribeTagsRequest =
    void 0;
var AgentConfigurationStatus;
(function (AgentConfigurationStatus) {
  /**
   * @internal
   */
  AgentConfigurationStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AgentConfigurationStatus = exports.AgentConfigurationStatus || (exports.AgentConfigurationStatus = {})));
var AgentNetworkInfo;
(function (AgentNetworkInfo) {
  /**
   * @internal
   */
  AgentNetworkInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AgentNetworkInfo = exports.AgentNetworkInfo || (exports.AgentNetworkInfo = {})));
var AgentStatus;
(function (AgentStatus) {
  AgentStatus["BLACKLISTED"] = "BLACKLISTED";
  AgentStatus["HEALTHY"] = "HEALTHY";
  AgentStatus["RUNNING"] = "RUNNING";
  AgentStatus["SHUTDOWN"] = "SHUTDOWN";
  AgentStatus["UNHEALTHY"] = "UNHEALTHY";
  AgentStatus["UNKNOWN"] = "UNKNOWN";
})((AgentStatus = exports.AgentStatus || (exports.AgentStatus = {})));
var AgentInfo;
(function (AgentInfo) {
  /**
   * @internal
   */
  AgentInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AgentInfo = exports.AgentInfo || (exports.AgentInfo = {})));
var AssociateConfigurationItemsToApplicationRequest;
(function (AssociateConfigurationItemsToApplicationRequest) {
  /**
   * @internal
   */
  AssociateConfigurationItemsToApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateConfigurationItemsToApplicationRequest =
    exports.AssociateConfigurationItemsToApplicationRequest ||
    (exports.AssociateConfigurationItemsToApplicationRequest = {}))
);
var AssociateConfigurationItemsToApplicationResponse;
(function (AssociateConfigurationItemsToApplicationResponse) {
  /**
   * @internal
   */
  AssociateConfigurationItemsToApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (AssociateConfigurationItemsToApplicationResponse =
    exports.AssociateConfigurationItemsToApplicationResponse ||
    (exports.AssociateConfigurationItemsToApplicationResponse = {}))
);
var AuthorizationErrorException;
(function (AuthorizationErrorException) {
  /**
   * @internal
   */
  AuthorizationErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AuthorizationErrorException = exports.AuthorizationErrorException || (exports.AuthorizationErrorException = {})));
var HomeRegionNotSetException;
(function (HomeRegionNotSetException) {
  /**
   * @internal
   */
  HomeRegionNotSetException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((HomeRegionNotSetException = exports.HomeRegionNotSetException || (exports.HomeRegionNotSetException = {})));
var InvalidParameterException;
(function (InvalidParameterException) {
  /**
   * @internal
   */
  InvalidParameterException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {})));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
  /**
   * @internal
   */
  InvalidParameterValueException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidParameterValueException =
    exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}))
);
var ServerInternalErrorException;
(function (ServerInternalErrorException) {
  /**
   * @internal
   */
  ServerInternalErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ServerInternalErrorException = exports.ServerInternalErrorException || (exports.ServerInternalErrorException = {}))
);
var BatchDeleteImportDataRequest;
(function (BatchDeleteImportDataRequest) {
  /**
   * @internal
   */
  BatchDeleteImportDataRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteImportDataRequest = exports.BatchDeleteImportDataRequest || (exports.BatchDeleteImportDataRequest = {}))
);
var BatchDeleteImportDataErrorCode;
(function (BatchDeleteImportDataErrorCode) {
  BatchDeleteImportDataErrorCode["INTERNAL_SERVER_ERROR"] = "INTERNAL_SERVER_ERROR";
  BatchDeleteImportDataErrorCode["NOT_FOUND"] = "NOT_FOUND";
  BatchDeleteImportDataErrorCode["OVER_LIMIT"] = "OVER_LIMIT";
})(
  (BatchDeleteImportDataErrorCode =
    exports.BatchDeleteImportDataErrorCode || (exports.BatchDeleteImportDataErrorCode = {}))
);
var BatchDeleteImportDataError;
(function (BatchDeleteImportDataError) {
  /**
   * @internal
   */
  BatchDeleteImportDataError.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((BatchDeleteImportDataError = exports.BatchDeleteImportDataError || (exports.BatchDeleteImportDataError = {})));
var BatchDeleteImportDataResponse;
(function (BatchDeleteImportDataResponse) {
  /**
   * @internal
   */
  BatchDeleteImportDataResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (BatchDeleteImportDataResponse =
    exports.BatchDeleteImportDataResponse || (exports.BatchDeleteImportDataResponse = {}))
);
var CreateApplicationRequest;
(function (CreateApplicationRequest) {
  /**
   * @internal
   */
  CreateApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApplicationRequest = exports.CreateApplicationRequest || (exports.CreateApplicationRequest = {})));
var CreateApplicationResponse;
(function (CreateApplicationResponse) {
  /**
   * @internal
   */
  CreateApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateApplicationResponse = exports.CreateApplicationResponse || (exports.CreateApplicationResponse = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateTagsRequest;
(function (CreateTagsRequest) {
  /**
   * @internal
   */
  CreateTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTagsRequest = exports.CreateTagsRequest || (exports.CreateTagsRequest = {})));
var CreateTagsResponse;
(function (CreateTagsResponse) {
  /**
   * @internal
   */
  CreateTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateTagsResponse = exports.CreateTagsResponse || (exports.CreateTagsResponse = {})));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
  /**
   * @internal
   */
  ResourceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {})));
var DeleteApplicationsRequest;
(function (DeleteApplicationsRequest) {
  /**
   * @internal
   */
  DeleteApplicationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApplicationsRequest = exports.DeleteApplicationsRequest || (exports.DeleteApplicationsRequest = {})));
var DeleteApplicationsResponse;
(function (DeleteApplicationsResponse) {
  /**
   * @internal
   */
  DeleteApplicationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteApplicationsResponse = exports.DeleteApplicationsResponse || (exports.DeleteApplicationsResponse = {})));
var DeleteTagsRequest;
(function (DeleteTagsRequest) {
  /**
   * @internal
   */
  DeleteTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTagsRequest = exports.DeleteTagsRequest || (exports.DeleteTagsRequest = {})));
var DeleteTagsResponse;
(function (DeleteTagsResponse) {
  /**
   * @internal
   */
  DeleteTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteTagsResponse = exports.DeleteTagsResponse || (exports.DeleteTagsResponse = {})));
var Filter;
(function (Filter) {
  /**
   * @internal
   */
  Filter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Filter = exports.Filter || (exports.Filter = {})));
var DescribeAgentsRequest;
(function (DescribeAgentsRequest) {
  /**
   * @internal
   */
  DescribeAgentsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAgentsRequest = exports.DescribeAgentsRequest || (exports.DescribeAgentsRequest = {})));
var DescribeAgentsResponse;
(function (DescribeAgentsResponse) {
  /**
   * @internal
   */
  DescribeAgentsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAgentsResponse = exports.DescribeAgentsResponse || (exports.DescribeAgentsResponse = {})));
var DescribeConfigurationsRequest;
(function (DescribeConfigurationsRequest) {
  /**
   * @internal
   */
  DescribeConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConfigurationsRequest =
    exports.DescribeConfigurationsRequest || (exports.DescribeConfigurationsRequest = {}))
);
var DescribeConfigurationsResponse;
(function (DescribeConfigurationsResponse) {
  /**
   * @internal
   */
  DescribeConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeConfigurationsResponse =
    exports.DescribeConfigurationsResponse || (exports.DescribeConfigurationsResponse = {}))
);
var DescribeContinuousExportsRequest;
(function (DescribeContinuousExportsRequest) {
  /**
   * @internal
   */
  DescribeContinuousExportsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeContinuousExportsRequest =
    exports.DescribeContinuousExportsRequest || (exports.DescribeContinuousExportsRequest = {}))
);
var DataSource;
(function (DataSource) {
  DataSource["AGENT"] = "AGENT";
})((DataSource = exports.DataSource || (exports.DataSource = {})));
var ContinuousExportStatus;
(function (ContinuousExportStatus) {
  ContinuousExportStatus["ACTIVE"] = "ACTIVE";
  ContinuousExportStatus["ERROR"] = "ERROR";
  ContinuousExportStatus["INACTIVE"] = "INACTIVE";
  ContinuousExportStatus["START_FAILED"] = "START_FAILED";
  ContinuousExportStatus["START_IN_PROGRESS"] = "START_IN_PROGRESS";
  ContinuousExportStatus["STOP_FAILED"] = "STOP_FAILED";
  ContinuousExportStatus["STOP_IN_PROGRESS"] = "STOP_IN_PROGRESS";
})((ContinuousExportStatus = exports.ContinuousExportStatus || (exports.ContinuousExportStatus = {})));
var ContinuousExportDescription;
(function (ContinuousExportDescription) {
  /**
   * @internal
   */
  ContinuousExportDescription.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContinuousExportDescription = exports.ContinuousExportDescription || (exports.ContinuousExportDescription = {})));
var DescribeContinuousExportsResponse;
(function (DescribeContinuousExportsResponse) {
  /**
   * @internal
   */
  DescribeContinuousExportsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeContinuousExportsResponse =
    exports.DescribeContinuousExportsResponse || (exports.DescribeContinuousExportsResponse = {}))
);
var OperationNotPermittedException;
(function (OperationNotPermittedException) {
  /**
   * @internal
   */
  OperationNotPermittedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OperationNotPermittedException =
    exports.OperationNotPermittedException || (exports.OperationNotPermittedException = {}))
);
var DescribeExportConfigurationsRequest;
(function (DescribeExportConfigurationsRequest) {
  /**
   * @internal
   */
  DescribeExportConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeExportConfigurationsRequest =
    exports.DescribeExportConfigurationsRequest || (exports.DescribeExportConfigurationsRequest = {}))
);
var ExportStatus;
(function (ExportStatus) {
  ExportStatus["FAILED"] = "FAILED";
  ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
  ExportStatus["SUCCEEDED"] = "SUCCEEDED";
})((ExportStatus = exports.ExportStatus || (exports.ExportStatus = {})));
var ExportInfo;
(function (ExportInfo) {
  /**
   * @internal
   */
  ExportInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExportInfo = exports.ExportInfo || (exports.ExportInfo = {})));
var DescribeExportConfigurationsResponse;
(function (DescribeExportConfigurationsResponse) {
  /**
   * @internal
   */
  DescribeExportConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeExportConfigurationsResponse =
    exports.DescribeExportConfigurationsResponse || (exports.DescribeExportConfigurationsResponse = {}))
);
var ExportFilter;
(function (ExportFilter) {
  /**
   * @internal
   */
  ExportFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExportFilter = exports.ExportFilter || (exports.ExportFilter = {})));
var DescribeExportTasksRequest;
(function (DescribeExportTasksRequest) {
  /**
   * @internal
   */
  DescribeExportTasksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeExportTasksRequest = exports.DescribeExportTasksRequest || (exports.DescribeExportTasksRequest = {})));
var DescribeExportTasksResponse;
(function (DescribeExportTasksResponse) {
  /**
   * @internal
   */
  DescribeExportTasksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeExportTasksResponse = exports.DescribeExportTasksResponse || (exports.DescribeExportTasksResponse = {})));
var ImportTaskFilterName;
(function (ImportTaskFilterName) {
  ImportTaskFilterName["IMPORT_TASK_ID"] = "IMPORT_TASK_ID";
  ImportTaskFilterName["NAME"] = "NAME";
  ImportTaskFilterName["STATUS"] = "STATUS";
})((ImportTaskFilterName = exports.ImportTaskFilterName || (exports.ImportTaskFilterName = {})));
var ImportTaskFilter;
(function (ImportTaskFilter) {
  /**
   * @internal
   */
  ImportTaskFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportTaskFilter = exports.ImportTaskFilter || (exports.ImportTaskFilter = {})));
var DescribeImportTasksRequest;
(function (DescribeImportTasksRequest) {
  /**
   * @internal
   */
  DescribeImportTasksRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeImportTasksRequest = exports.DescribeImportTasksRequest || (exports.DescribeImportTasksRequest = {})));
var ImportStatus;
(function (ImportStatus) {
  ImportStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
  ImportStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ImportStatus["DELETE_FAILED_LIMIT_EXCEEDED"] = "DELETE_FAILED_LIMIT_EXCEEDED";
  ImportStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  ImportStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
  ImportStatus["IMPORT_COMPLETE_WITH_ERRORS"] = "IMPORT_COMPLETE_WITH_ERRORS";
  ImportStatus["IMPORT_FAILED"] = "IMPORT_FAILED";
  ImportStatus["IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"] = "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED";
  ImportStatus["IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"] = "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED";
  ImportStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
  ImportStatus["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})((ImportStatus = exports.ImportStatus || (exports.ImportStatus = {})));
var ImportTask;
(function (ImportTask) {
  /**
   * @internal
   */
  ImportTask.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ImportTask = exports.ImportTask || (exports.ImportTask = {})));
var DescribeImportTasksResponse;
(function (DescribeImportTasksResponse) {
  /**
   * @internal
   */
  DescribeImportTasksResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeImportTasksResponse = exports.DescribeImportTasksResponse || (exports.DescribeImportTasksResponse = {})));
var TagFilter;
(function (TagFilter) {
  /**
   * @internal
   */
  TagFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TagFilter = exports.TagFilter || (exports.TagFilter = {})));
var DescribeTagsRequest;
(function (DescribeTagsRequest) {
  /**
   * @internal
   */
  DescribeTagsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeTagsRequest = exports.DescribeTagsRequest || (exports.DescribeTagsRequest = {})));
var ConfigurationItemType;
(function (ConfigurationItemType) {
  ConfigurationItemType["APPLICATION"] = "APPLICATION";
  ConfigurationItemType["CONNECTIONS"] = "CONNECTION";
  ConfigurationItemType["PROCESS"] = "PROCESS";
  ConfigurationItemType["SERVER"] = "SERVER";
})((ConfigurationItemType = exports.ConfigurationItemType || (exports.ConfigurationItemType = {})));
var ConfigurationTag;
(function (ConfigurationTag) {
  /**
   * @internal
   */
  ConfigurationTag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConfigurationTag = exports.ConfigurationTag || (exports.ConfigurationTag = {})));
var DescribeTagsResponse;
(function (DescribeTagsResponse) {
  /**
   * @internal
   */
  DescribeTagsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeTagsResponse = exports.DescribeTagsResponse || (exports.DescribeTagsResponse = {})));
var DisassociateConfigurationItemsFromApplicationRequest;
(function (DisassociateConfigurationItemsFromApplicationRequest) {
  /**
   * @internal
   */
  DisassociateConfigurationItemsFromApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateConfigurationItemsFromApplicationRequest =
    exports.DisassociateConfigurationItemsFromApplicationRequest ||
    (exports.DisassociateConfigurationItemsFromApplicationRequest = {}))
);
var DisassociateConfigurationItemsFromApplicationResponse;
(function (DisassociateConfigurationItemsFromApplicationResponse) {
  /**
   * @internal
   */
  DisassociateConfigurationItemsFromApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DisassociateConfigurationItemsFromApplicationResponse =
    exports.DisassociateConfigurationItemsFromApplicationResponse ||
    (exports.DisassociateConfigurationItemsFromApplicationResponse = {}))
);
var ExportConfigurationsResponse;
(function (ExportConfigurationsResponse) {
  /**
   * @internal
   */
  ExportConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ExportConfigurationsResponse = exports.ExportConfigurationsResponse || (exports.ExportConfigurationsResponse = {}))
);
var GetDiscoverySummaryRequest;
(function (GetDiscoverySummaryRequest) {
  /**
   * @internal
   */
  GetDiscoverySummaryRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDiscoverySummaryRequest = exports.GetDiscoverySummaryRequest || (exports.GetDiscoverySummaryRequest = {})));
var CustomerAgentInfo;
(function (CustomerAgentInfo) {
  /**
   * @internal
   */
  CustomerAgentInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomerAgentInfo = exports.CustomerAgentInfo || (exports.CustomerAgentInfo = {})));
var CustomerConnectorInfo;
(function (CustomerConnectorInfo) {
  /**
   * @internal
   */
  CustomerConnectorInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CustomerConnectorInfo = exports.CustomerConnectorInfo || (exports.CustomerConnectorInfo = {})));
var GetDiscoverySummaryResponse;
(function (GetDiscoverySummaryResponse) {
  /**
   * @internal
   */
  GetDiscoverySummaryResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetDiscoverySummaryResponse = exports.GetDiscoverySummaryResponse || (exports.GetDiscoverySummaryResponse = {})));
var OrderString;
(function (OrderString) {
  OrderString["ASC"] = "ASC";
  OrderString["DESC"] = "DESC";
})((OrderString = exports.OrderString || (exports.OrderString = {})));
var OrderByElement;
(function (OrderByElement) {
  /**
   * @internal
   */
  OrderByElement.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OrderByElement = exports.OrderByElement || (exports.OrderByElement = {})));
var ListConfigurationsRequest;
(function (ListConfigurationsRequest) {
  /**
   * @internal
   */
  ListConfigurationsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListConfigurationsRequest = exports.ListConfigurationsRequest || (exports.ListConfigurationsRequest = {})));
var ListConfigurationsResponse;
(function (ListConfigurationsResponse) {
  /**
   * @internal
   */
  ListConfigurationsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListConfigurationsResponse = exports.ListConfigurationsResponse || (exports.ListConfigurationsResponse = {})));
var ListServerNeighborsRequest;
(function (ListServerNeighborsRequest) {
  /**
   * @internal
   */
  ListServerNeighborsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListServerNeighborsRequest = exports.ListServerNeighborsRequest || (exports.ListServerNeighborsRequest = {})));
var NeighborConnectionDetail;
(function (NeighborConnectionDetail) {
  /**
   * @internal
   */
  NeighborConnectionDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NeighborConnectionDetail = exports.NeighborConnectionDetail || (exports.NeighborConnectionDetail = {})));
var ListServerNeighborsResponse;
(function (ListServerNeighborsResponse) {
  /**
   * @internal
   */
  ListServerNeighborsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListServerNeighborsResponse = exports.ListServerNeighborsResponse || (exports.ListServerNeighborsResponse = {})));
var ConflictErrorException;
(function (ConflictErrorException) {
  /**
   * @internal
   */
  ConflictErrorException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ConflictErrorException = exports.ConflictErrorException || (exports.ConflictErrorException = {})));
var ResourceInUseException;
(function (ResourceInUseException) {
  /**
   * @internal
   */
  ResourceInUseException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {})));
var StartContinuousExportRequest;
(function (StartContinuousExportRequest) {
  /**
   * @internal
   */
  StartContinuousExportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartContinuousExportRequest = exports.StartContinuousExportRequest || (exports.StartContinuousExportRequest = {}))
);
var StartContinuousExportResponse;
(function (StartContinuousExportResponse) {
  /**
   * @internal
   */
  StartContinuousExportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartContinuousExportResponse =
    exports.StartContinuousExportResponse || (exports.StartContinuousExportResponse = {}))
);
var StartDataCollectionByAgentIdsRequest;
(function (StartDataCollectionByAgentIdsRequest) {
  /**
   * @internal
   */
  StartDataCollectionByAgentIdsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartDataCollectionByAgentIdsRequest =
    exports.StartDataCollectionByAgentIdsRequest || (exports.StartDataCollectionByAgentIdsRequest = {}))
);
var StartDataCollectionByAgentIdsResponse;
(function (StartDataCollectionByAgentIdsResponse) {
  /**
   * @internal
   */
  StartDataCollectionByAgentIdsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StartDataCollectionByAgentIdsResponse =
    exports.StartDataCollectionByAgentIdsResponse || (exports.StartDataCollectionByAgentIdsResponse = {}))
);
var ExportDataFormat;
(function (ExportDataFormat) {
  ExportDataFormat["CSV"] = "CSV";
  ExportDataFormat["GRAPHML"] = "GRAPHML";
})((ExportDataFormat = exports.ExportDataFormat || (exports.ExportDataFormat = {})));
var StartExportTaskRequest;
(function (StartExportTaskRequest) {
  /**
   * @internal
   */
  StartExportTaskRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartExportTaskRequest = exports.StartExportTaskRequest || (exports.StartExportTaskRequest = {})));
var StartExportTaskResponse;
(function (StartExportTaskResponse) {
  /**
   * @internal
   */
  StartExportTaskResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartExportTaskResponse = exports.StartExportTaskResponse || (exports.StartExportTaskResponse = {})));
var StartImportTaskRequest;
(function (StartImportTaskRequest) {
  /**
   * @internal
   */
  StartImportTaskRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartImportTaskRequest = exports.StartImportTaskRequest || (exports.StartImportTaskRequest = {})));
var StartImportTaskResponse;
(function (StartImportTaskResponse) {
  /**
   * @internal
   */
  StartImportTaskResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StartImportTaskResponse = exports.StartImportTaskResponse || (exports.StartImportTaskResponse = {})));
var StopContinuousExportRequest;
(function (StopContinuousExportRequest) {
  /**
   * @internal
   */
  StopContinuousExportRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopContinuousExportRequest = exports.StopContinuousExportRequest || (exports.StopContinuousExportRequest = {})));
var StopContinuousExportResponse;
(function (StopContinuousExportResponse) {
  /**
   * @internal
   */
  StopContinuousExportResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StopContinuousExportResponse = exports.StopContinuousExportResponse || (exports.StopContinuousExportResponse = {}))
);
var StopDataCollectionByAgentIdsRequest;
(function (StopDataCollectionByAgentIdsRequest) {
  /**
   * @internal
   */
  StopDataCollectionByAgentIdsRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StopDataCollectionByAgentIdsRequest =
    exports.StopDataCollectionByAgentIdsRequest || (exports.StopDataCollectionByAgentIdsRequest = {}))
);
var StopDataCollectionByAgentIdsResponse;
(function (StopDataCollectionByAgentIdsResponse) {
  /**
   * @internal
   */
  StopDataCollectionByAgentIdsResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StopDataCollectionByAgentIdsResponse =
    exports.StopDataCollectionByAgentIdsResponse || (exports.StopDataCollectionByAgentIdsResponse = {}))
);
var UpdateApplicationRequest;
(function (UpdateApplicationRequest) {
  /**
   * @internal
   */
  UpdateApplicationRequest.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApplicationRequest = exports.UpdateApplicationRequest || (exports.UpdateApplicationRequest = {})));
var UpdateApplicationResponse;
(function (UpdateApplicationResponse) {
  /**
   * @internal
   */
  UpdateApplicationResponse.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateApplicationResponse = exports.UpdateApplicationResponse || (exports.UpdateApplicationResponse = {})));
//# sourceMappingURL=models_0.js.map
