"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPartitionIndexesResponse = exports.PartitionIndexDescriptor = exports.KeySchemaElement = exports.PartitionIndexStatus = exports.BackfillError = exports.BackfillErrorCode = exports.GetPartitionIndexesRequest = exports.GetPartitionResponse = exports.GetPartitionRequest = exports.GetMLTransformsResponse = exports.MLTransform = exports.GetMLTransformsRequest = exports.TransformSortCriteria = exports.TransformSortColumnType = exports.TransformFilterCriteria = exports.GetMLTransformResponse = exports.TransformStatusType = exports.SchemaColumn = exports.EvaluationMetrics = exports.FindMatchesMetrics = exports.ConfusionMatrix = exports.ColumnImportance = exports.GetMLTransformRequest = exports.GetMLTaskRunsResponse = exports.TaskRun = exports.GetMLTaskRunsRequest = exports.TaskRunSortCriteria = exports.SortDirectionType = exports.TaskRunSortColumnType = exports.TaskRunFilterCriteria = exports.GetMLTaskRunResponse = exports.TaskRunProperties = exports.TaskType = exports.LabelingSetGenerationTaskRunProperties = exports.ImportLabelsTaskRunProperties = exports.FindMatchesTaskRunProperties = exports.ExportLabelsTaskRunProperties = exports.GetMLTaskRunRequest = exports.GetMappingResponse = exports.MappingEntry = exports.GetMappingRequest = exports.CatalogEntry = exports.Location = exports.GetJobsResponse = exports.GetJobsRequest = exports.GetJobRunsResponse = exports.GetJobRunsRequest = exports.GetJobRunResponse = exports.GetJobRunRequest = exports.GetJobBookmarkResponse = void 0;
exports.GetWorkflowResponse = exports.GetWorkflowRequest = exports.GetUserDefinedFunctionsResponse = exports.GetUserDefinedFunctionsRequest = exports.GetUserDefinedFunctionResponse = exports.UserDefinedFunction = exports.GetUserDefinedFunctionRequest = exports.GetTriggersResponse = exports.GetTriggersRequest = exports.GetTriggerResponse = exports.GetTriggerRequest = exports.GetTagsResponse = exports.GetTagsRequest = exports.GetTableVersionsResponse = exports.GetTableVersionsRequest = exports.GetTableVersionResponse = exports.TableVersion = exports.GetTableVersionRequest = exports.GetTablesResponse = exports.GetTablesRequest = exports.GetTableResponse = exports.Table = exports.GetTableRequest = exports.GetSecurityConfigurationsResponse = exports.GetSecurityConfigurationsRequest = exports.GetSecurityConfigurationResponse = exports.SecurityConfiguration = exports.GetSecurityConfigurationRequest = exports.GetSchemaVersionsDiffResponse = exports.GetSchemaVersionsDiffInput = exports.SchemaDiffType = exports.GetSchemaVersionResponse = exports.GetSchemaVersionInput = exports.SchemaVersionNumber = exports.GetSchemaByDefinitionResponse = exports.GetSchemaByDefinitionInput = exports.GetSchemaResponse = exports.GetSchemaInput = exports.GetResourcePolicyResponse = exports.GetResourcePolicyRequest = exports.GetResourcePoliciesResponse = exports.GluePolicy = exports.GetResourcePoliciesRequest = exports.GetRegistryResponse = exports.GetRegistryInput = exports.GetPlanResponse = exports.GetPlanRequest = exports.GetPartitionsResponse = exports.GetPartitionsRequest = exports.Segment = void 0;
exports.ResetJobBookmarkResponse = exports.ResetJobBookmarkRequest = exports.RemoveSchemaVersionMetadataResponse = exports.RemoveSchemaVersionMetadataInput = exports.RegisterSchemaVersionResponse = exports.RegisterSchemaVersionInput = exports.QuerySchemaVersionMetadataResponse = exports.MetadataInfo = exports.OtherMetadataValueListItem = exports.QuerySchemaVersionMetadataInput = exports.PutWorkflowRunPropertiesResponse = exports.PutWorkflowRunPropertiesRequest = exports.PutSchemaVersionMetadataResponse = exports.PutSchemaVersionMetadataInput = exports.MetadataKeyValuePair = exports.PutResourcePolicyResponse = exports.PutResourcePolicyRequest = exports.ExistCondition = exports.EnableHybridValues = exports.PutDataCatalogEncryptionSettingsResponse = exports.PutDataCatalogEncryptionSettingsRequest = exports.ListWorkflowsResponse = exports.ListWorkflowsRequest = exports.ListTriggersResponse = exports.ListTriggersRequest = exports.ListSchemaVersionsResponse = exports.SchemaVersionListItem = exports.ListSchemaVersionsInput = exports.ListSchemasResponse = exports.SchemaListItem = exports.ListSchemasInput = exports.ListRegistriesResponse = exports.RegistryListItem = exports.ListRegistriesInput = exports.ListMLTransformsResponse = exports.ListMLTransformsRequest = exports.ListJobsResponse = exports.ListJobsRequest = exports.ListDevEndpointsResponse = exports.ListDevEndpointsRequest = exports.ListCrawlersResponse = exports.ListCrawlersRequest = exports.ImportCatalogToGlueResponse = exports.ImportCatalogToGlueRequest = exports.GetWorkflowRunsResponse = exports.GetWorkflowRunsRequest = exports.GetWorkflowRunPropertiesResponse = exports.GetWorkflowRunPropertiesRequest = exports.GetWorkflowRunResponse = exports.GetWorkflowRunRequest = void 0;
exports.UpdateXMLClassifierRequest = exports.UpdateJsonClassifierRequest = exports.UpdateGrokClassifierRequest = exports.UpdateCsvClassifierRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopWorkflowRunResponse = exports.StopWorkflowRunRequest = exports.StopTriggerResponse = exports.StopTriggerRequest = exports.StopCrawlerScheduleResponse = exports.StopCrawlerScheduleRequest = exports.SchedulerNotRunningException = exports.StopCrawlerResponse = exports.StopCrawlerRequest = exports.CrawlerStoppingException = exports.CrawlerNotRunningException = exports.StartWorkflowRunResponse = exports.StartWorkflowRunRequest = exports.StartTriggerResponse = exports.StartTriggerRequest = exports.StartMLLabelingSetGenerationTaskRunResponse = exports.StartMLLabelingSetGenerationTaskRunRequest = exports.StartMLEvaluationTaskRunResponse = exports.StartMLEvaluationTaskRunRequest = exports.MLTransformNotReadyException = exports.StartJobRunResponse = exports.StartJobRunRequest = exports.StartImportLabelsTaskRunResponse = exports.StartImportLabelsTaskRunRequest = exports.StartExportLabelsTaskRunResponse = exports.StartExportLabelsTaskRunRequest = exports.StartCrawlerScheduleResponse = exports.StartCrawlerScheduleRequest = exports.SchedulerRunningException = exports.NoScheduleException = exports.StartCrawlerResponse = exports.StartCrawlerRequest = exports.SearchTablesResponse = exports.SearchTablesRequest = exports.SortCriterion = exports.Sort = exports.PropertyPredicate = exports.Comparator = exports.ResumeWorkflowRunResponse = exports.ResumeWorkflowRunRequest = exports.IllegalWorkflowStateException = exports.ConcurrentRunsExceededException = void 0;
exports.UpdateWorkflowResponse = exports.UpdateWorkflowRequest = exports.UpdateUserDefinedFunctionResponse = exports.UpdateUserDefinedFunctionRequest = exports.UpdateTriggerResponse = exports.UpdateTriggerRequest = exports.TriggerUpdate = exports.UpdateTableResponse = exports.UpdateTableRequest = exports.UpdateSchemaResponse = exports.UpdateSchemaInput = exports.UpdateRegistryResponse = exports.UpdateRegistryInput = exports.UpdatePartitionResponse = exports.UpdatePartitionRequest = exports.UpdateMLTransformResponse = exports.UpdateMLTransformRequest = exports.UpdateJobResponse = exports.UpdateJobRequest = exports.JobUpdate = exports.UpdateDevEndpointResponse = exports.UpdateDevEndpointRequest = exports.DevEndpointCustomLibraries = exports.UpdateDatabaseResponse = exports.UpdateDatabaseRequest = exports.UpdateCrawlerScheduleResponse = exports.UpdateCrawlerScheduleRequest = exports.UpdateCrawlerResponse = exports.UpdateCrawlerRequest = exports.UpdateConnectionResponse = exports.UpdateConnectionRequest = exports.UpdateColumnStatisticsForTableResponse = exports.UpdateColumnStatisticsForTableRequest = exports.UpdateColumnStatisticsForPartitionResponse = exports.ColumnStatisticsError = exports.UpdateColumnStatisticsForPartitionRequest = exports.VersionMismatchException = exports.UpdateClassifierResponse = exports.UpdateClassifierRequest = void 0;
var GetJobBookmarkResponse;
(function (GetJobBookmarkResponse) {
    /**
     * @internal
     */
    GetJobBookmarkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobBookmarkResponse = exports.GetJobBookmarkResponse || (exports.GetJobBookmarkResponse = {}));
var GetJobRunRequest;
(function (GetJobRunRequest) {
    /**
     * @internal
     */
    GetJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRunRequest = exports.GetJobRunRequest || (exports.GetJobRunRequest = {}));
var GetJobRunResponse;
(function (GetJobRunResponse) {
    /**
     * @internal
     */
    GetJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRunResponse = exports.GetJobRunResponse || (exports.GetJobRunResponse = {}));
var GetJobRunsRequest;
(function (GetJobRunsRequest) {
    /**
     * @internal
     */
    GetJobRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRunsRequest = exports.GetJobRunsRequest || (exports.GetJobRunsRequest = {}));
var GetJobRunsResponse;
(function (GetJobRunsResponse) {
    /**
     * @internal
     */
    GetJobRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobRunsResponse = exports.GetJobRunsResponse || (exports.GetJobRunsResponse = {}));
var GetJobsRequest;
(function (GetJobsRequest) {
    /**
     * @internal
     */
    GetJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobsRequest = exports.GetJobsRequest || (exports.GetJobsRequest = {}));
var GetJobsResponse;
(function (GetJobsResponse) {
    /**
     * @internal
     */
    GetJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobsResponse = exports.GetJobsResponse || (exports.GetJobsResponse = {}));
var Location;
(function (Location) {
    /**
     * @internal
     */
    Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Location = exports.Location || (exports.Location = {}));
var CatalogEntry;
(function (CatalogEntry) {
    /**
     * @internal
     */
    CatalogEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CatalogEntry = exports.CatalogEntry || (exports.CatalogEntry = {}));
var GetMappingRequest;
(function (GetMappingRequest) {
    /**
     * @internal
     */
    GetMappingRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMappingRequest = exports.GetMappingRequest || (exports.GetMappingRequest = {}));
var MappingEntry;
(function (MappingEntry) {
    /**
     * @internal
     */
    MappingEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MappingEntry = exports.MappingEntry || (exports.MappingEntry = {}));
var GetMappingResponse;
(function (GetMappingResponse) {
    /**
     * @internal
     */
    GetMappingResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMappingResponse = exports.GetMappingResponse || (exports.GetMappingResponse = {}));
var GetMLTaskRunRequest;
(function (GetMLTaskRunRequest) {
    /**
     * @internal
     */
    GetMLTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTaskRunRequest = exports.GetMLTaskRunRequest || (exports.GetMLTaskRunRequest = {}));
var ExportLabelsTaskRunProperties;
(function (ExportLabelsTaskRunProperties) {
    /**
     * @internal
     */
    ExportLabelsTaskRunProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportLabelsTaskRunProperties = exports.ExportLabelsTaskRunProperties || (exports.ExportLabelsTaskRunProperties = {}));
var FindMatchesTaskRunProperties;
(function (FindMatchesTaskRunProperties) {
    /**
     * @internal
     */
    FindMatchesTaskRunProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindMatchesTaskRunProperties = exports.FindMatchesTaskRunProperties || (exports.FindMatchesTaskRunProperties = {}));
var ImportLabelsTaskRunProperties;
(function (ImportLabelsTaskRunProperties) {
    /**
     * @internal
     */
    ImportLabelsTaskRunProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportLabelsTaskRunProperties = exports.ImportLabelsTaskRunProperties || (exports.ImportLabelsTaskRunProperties = {}));
var LabelingSetGenerationTaskRunProperties;
(function (LabelingSetGenerationTaskRunProperties) {
    /**
     * @internal
     */
    LabelingSetGenerationTaskRunProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelingSetGenerationTaskRunProperties = exports.LabelingSetGenerationTaskRunProperties || (exports.LabelingSetGenerationTaskRunProperties = {}));
var TaskType;
(function (TaskType) {
    TaskType["EVALUATION"] = "EVALUATION";
    TaskType["EXPORT_LABELS"] = "EXPORT_LABELS";
    TaskType["FIND_MATCHES"] = "FIND_MATCHES";
    TaskType["IMPORT_LABELS"] = "IMPORT_LABELS";
    TaskType["LABELING_SET_GENERATION"] = "LABELING_SET_GENERATION";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var TaskRunProperties;
(function (TaskRunProperties) {
    /**
     * @internal
     */
    TaskRunProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskRunProperties = exports.TaskRunProperties || (exports.TaskRunProperties = {}));
var GetMLTaskRunResponse;
(function (GetMLTaskRunResponse) {
    /**
     * @internal
     */
    GetMLTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTaskRunResponse = exports.GetMLTaskRunResponse || (exports.GetMLTaskRunResponse = {}));
var TaskRunFilterCriteria;
(function (TaskRunFilterCriteria) {
    /**
     * @internal
     */
    TaskRunFilterCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskRunFilterCriteria = exports.TaskRunFilterCriteria || (exports.TaskRunFilterCriteria = {}));
var TaskRunSortColumnType;
(function (TaskRunSortColumnType) {
    TaskRunSortColumnType["STARTED"] = "STARTED";
    TaskRunSortColumnType["STATUS"] = "STATUS";
    TaskRunSortColumnType["TASK_RUN_TYPE"] = "TASK_RUN_TYPE";
})(TaskRunSortColumnType = exports.TaskRunSortColumnType || (exports.TaskRunSortColumnType = {}));
var SortDirectionType;
(function (SortDirectionType) {
    SortDirectionType["ASCENDING"] = "ASCENDING";
    SortDirectionType["DESCENDING"] = "DESCENDING";
})(SortDirectionType = exports.SortDirectionType || (exports.SortDirectionType = {}));
var TaskRunSortCriteria;
(function (TaskRunSortCriteria) {
    /**
     * @internal
     */
    TaskRunSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskRunSortCriteria = exports.TaskRunSortCriteria || (exports.TaskRunSortCriteria = {}));
var GetMLTaskRunsRequest;
(function (GetMLTaskRunsRequest) {
    /**
     * @internal
     */
    GetMLTaskRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTaskRunsRequest = exports.GetMLTaskRunsRequest || (exports.GetMLTaskRunsRequest = {}));
var TaskRun;
(function (TaskRun) {
    /**
     * @internal
     */
    TaskRun.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskRun = exports.TaskRun || (exports.TaskRun = {}));
var GetMLTaskRunsResponse;
(function (GetMLTaskRunsResponse) {
    /**
     * @internal
     */
    GetMLTaskRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTaskRunsResponse = exports.GetMLTaskRunsResponse || (exports.GetMLTaskRunsResponse = {}));
var GetMLTransformRequest;
(function (GetMLTransformRequest) {
    /**
     * @internal
     */
    GetMLTransformRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTransformRequest = exports.GetMLTransformRequest || (exports.GetMLTransformRequest = {}));
var ColumnImportance;
(function (ColumnImportance) {
    /**
     * @internal
     */
    ColumnImportance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnImportance = exports.ColumnImportance || (exports.ColumnImportance = {}));
var ConfusionMatrix;
(function (ConfusionMatrix) {
    /**
     * @internal
     */
    ConfusionMatrix.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConfusionMatrix = exports.ConfusionMatrix || (exports.ConfusionMatrix = {}));
var FindMatchesMetrics;
(function (FindMatchesMetrics) {
    /**
     * @internal
     */
    FindMatchesMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FindMatchesMetrics = exports.FindMatchesMetrics || (exports.FindMatchesMetrics = {}));
var EvaluationMetrics;
(function (EvaluationMetrics) {
    /**
     * @internal
     */
    EvaluationMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationMetrics = exports.EvaluationMetrics || (exports.EvaluationMetrics = {}));
var SchemaColumn;
(function (SchemaColumn) {
    /**
     * @internal
     */
    SchemaColumn.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaColumn = exports.SchemaColumn || (exports.SchemaColumn = {}));
var TransformStatusType;
(function (TransformStatusType) {
    TransformStatusType["DELETING"] = "DELETING";
    TransformStatusType["NOT_READY"] = "NOT_READY";
    TransformStatusType["READY"] = "READY";
})(TransformStatusType = exports.TransformStatusType || (exports.TransformStatusType = {}));
var GetMLTransformResponse;
(function (GetMLTransformResponse) {
    /**
     * @internal
     */
    GetMLTransformResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTransformResponse = exports.GetMLTransformResponse || (exports.GetMLTransformResponse = {}));
var TransformFilterCriteria;
(function (TransformFilterCriteria) {
    /**
     * @internal
     */
    TransformFilterCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformFilterCriteria = exports.TransformFilterCriteria || (exports.TransformFilterCriteria = {}));
var TransformSortColumnType;
(function (TransformSortColumnType) {
    TransformSortColumnType["CREATED"] = "CREATED";
    TransformSortColumnType["LAST_MODIFIED"] = "LAST_MODIFIED";
    TransformSortColumnType["NAME"] = "NAME";
    TransformSortColumnType["STATUS"] = "STATUS";
    TransformSortColumnType["TRANSFORM_TYPE"] = "TRANSFORM_TYPE";
})(TransformSortColumnType = exports.TransformSortColumnType || (exports.TransformSortColumnType = {}));
var TransformSortCriteria;
(function (TransformSortCriteria) {
    /**
     * @internal
     */
    TransformSortCriteria.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransformSortCriteria = exports.TransformSortCriteria || (exports.TransformSortCriteria = {}));
var GetMLTransformsRequest;
(function (GetMLTransformsRequest) {
    /**
     * @internal
     */
    GetMLTransformsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTransformsRequest = exports.GetMLTransformsRequest || (exports.GetMLTransformsRequest = {}));
var MLTransform;
(function (MLTransform) {
    /**
     * @internal
     */
    MLTransform.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MLTransform = exports.MLTransform || (exports.MLTransform = {}));
var GetMLTransformsResponse;
(function (GetMLTransformsResponse) {
    /**
     * @internal
     */
    GetMLTransformsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMLTransformsResponse = exports.GetMLTransformsResponse || (exports.GetMLTransformsResponse = {}));
var GetPartitionRequest;
(function (GetPartitionRequest) {
    /**
     * @internal
     */
    GetPartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionRequest = exports.GetPartitionRequest || (exports.GetPartitionRequest = {}));
var GetPartitionResponse;
(function (GetPartitionResponse) {
    /**
     * @internal
     */
    GetPartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionResponse = exports.GetPartitionResponse || (exports.GetPartitionResponse = {}));
var GetPartitionIndexesRequest;
(function (GetPartitionIndexesRequest) {
    /**
     * @internal
     */
    GetPartitionIndexesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionIndexesRequest = exports.GetPartitionIndexesRequest || (exports.GetPartitionIndexesRequest = {}));
var BackfillErrorCode;
(function (BackfillErrorCode) {
    BackfillErrorCode["ENCRYPTED_PARTITION_ERROR"] = "ENCRYPTED_PARTITION_ERROR";
    BackfillErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
    BackfillErrorCode["INVALID_PARTITION_TYPE_DATA_ERROR"] = "INVALID_PARTITION_TYPE_DATA_ERROR";
    BackfillErrorCode["MISSING_PARTITION_VALUE_ERROR"] = "MISSING_PARTITION_VALUE_ERROR";
    BackfillErrorCode["UNSUPPORTED_PARTITION_CHARACTER_ERROR"] = "UNSUPPORTED_PARTITION_CHARACTER_ERROR";
})(BackfillErrorCode = exports.BackfillErrorCode || (exports.BackfillErrorCode = {}));
var BackfillError;
(function (BackfillError) {
    /**
     * @internal
     */
    BackfillError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackfillError = exports.BackfillError || (exports.BackfillError = {}));
var PartitionIndexStatus;
(function (PartitionIndexStatus) {
    PartitionIndexStatus["ACTIVE"] = "ACTIVE";
    PartitionIndexStatus["CREATING"] = "CREATING";
    PartitionIndexStatus["DELETING"] = "DELETING";
    PartitionIndexStatus["FAILED"] = "FAILED";
})(PartitionIndexStatus = exports.PartitionIndexStatus || (exports.PartitionIndexStatus = {}));
var KeySchemaElement;
(function (KeySchemaElement) {
    /**
     * @internal
     */
    KeySchemaElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySchemaElement = exports.KeySchemaElement || (exports.KeySchemaElement = {}));
var PartitionIndexDescriptor;
(function (PartitionIndexDescriptor) {
    /**
     * @internal
     */
    PartitionIndexDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartitionIndexDescriptor = exports.PartitionIndexDescriptor || (exports.PartitionIndexDescriptor = {}));
var GetPartitionIndexesResponse;
(function (GetPartitionIndexesResponse) {
    /**
     * @internal
     */
    GetPartitionIndexesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionIndexesResponse = exports.GetPartitionIndexesResponse || (exports.GetPartitionIndexesResponse = {}));
var Segment;
(function (Segment) {
    /**
     * @internal
     */
    Segment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Segment = exports.Segment || (exports.Segment = {}));
var GetPartitionsRequest;
(function (GetPartitionsRequest) {
    /**
     * @internal
     */
    GetPartitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionsRequest = exports.GetPartitionsRequest || (exports.GetPartitionsRequest = {}));
var GetPartitionsResponse;
(function (GetPartitionsResponse) {
    /**
     * @internal
     */
    GetPartitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPartitionsResponse = exports.GetPartitionsResponse || (exports.GetPartitionsResponse = {}));
var GetPlanRequest;
(function (GetPlanRequest) {
    /**
     * @internal
     */
    GetPlanRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlanRequest = exports.GetPlanRequest || (exports.GetPlanRequest = {}));
var GetPlanResponse;
(function (GetPlanResponse) {
    /**
     * @internal
     */
    GetPlanResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPlanResponse = exports.GetPlanResponse || (exports.GetPlanResponse = {}));
var GetRegistryInput;
(function (GetRegistryInput) {
    /**
     * @internal
     */
    GetRegistryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryInput = exports.GetRegistryInput || (exports.GetRegistryInput = {}));
var GetRegistryResponse;
(function (GetRegistryResponse) {
    /**
     * @internal
     */
    GetRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegistryResponse = exports.GetRegistryResponse || (exports.GetRegistryResponse = {}));
var GetResourcePoliciesRequest;
(function (GetResourcePoliciesRequest) {
    /**
     * @internal
     */
    GetResourcePoliciesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesRequest = exports.GetResourcePoliciesRequest || (exports.GetResourcePoliciesRequest = {}));
var GluePolicy;
(function (GluePolicy) {
    /**
     * @internal
     */
    GluePolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GluePolicy = exports.GluePolicy || (exports.GluePolicy = {}));
var GetResourcePoliciesResponse;
(function (GetResourcePoliciesResponse) {
    /**
     * @internal
     */
    GetResourcePoliciesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePoliciesResponse = exports.GetResourcePoliciesResponse || (exports.GetResourcePoliciesResponse = {}));
var GetResourcePolicyRequest;
(function (GetResourcePolicyRequest) {
    /**
     * @internal
     */
    GetResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyRequest = exports.GetResourcePolicyRequest || (exports.GetResourcePolicyRequest = {}));
var GetResourcePolicyResponse;
(function (GetResourcePolicyResponse) {
    /**
     * @internal
     */
    GetResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourcePolicyResponse = exports.GetResourcePolicyResponse || (exports.GetResourcePolicyResponse = {}));
var GetSchemaInput;
(function (GetSchemaInput) {
    /**
     * @internal
     */
    GetSchemaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaInput = exports.GetSchemaInput || (exports.GetSchemaInput = {}));
var GetSchemaResponse;
(function (GetSchemaResponse) {
    /**
     * @internal
     */
    GetSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaResponse = exports.GetSchemaResponse || (exports.GetSchemaResponse = {}));
var GetSchemaByDefinitionInput;
(function (GetSchemaByDefinitionInput) {
    /**
     * @internal
     */
    GetSchemaByDefinitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaByDefinitionInput = exports.GetSchemaByDefinitionInput || (exports.GetSchemaByDefinitionInput = {}));
var GetSchemaByDefinitionResponse;
(function (GetSchemaByDefinitionResponse) {
    /**
     * @internal
     */
    GetSchemaByDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaByDefinitionResponse = exports.GetSchemaByDefinitionResponse || (exports.GetSchemaByDefinitionResponse = {}));
var SchemaVersionNumber;
(function (SchemaVersionNumber) {
    /**
     * @internal
     */
    SchemaVersionNumber.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaVersionNumber = exports.SchemaVersionNumber || (exports.SchemaVersionNumber = {}));
var GetSchemaVersionInput;
(function (GetSchemaVersionInput) {
    /**
     * @internal
     */
    GetSchemaVersionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaVersionInput = exports.GetSchemaVersionInput || (exports.GetSchemaVersionInput = {}));
var GetSchemaVersionResponse;
(function (GetSchemaVersionResponse) {
    /**
     * @internal
     */
    GetSchemaVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaVersionResponse = exports.GetSchemaVersionResponse || (exports.GetSchemaVersionResponse = {}));
var SchemaDiffType;
(function (SchemaDiffType) {
    SchemaDiffType["SYNTAX_DIFF"] = "SYNTAX_DIFF";
})(SchemaDiffType = exports.SchemaDiffType || (exports.SchemaDiffType = {}));
var GetSchemaVersionsDiffInput;
(function (GetSchemaVersionsDiffInput) {
    /**
     * @internal
     */
    GetSchemaVersionsDiffInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaVersionsDiffInput = exports.GetSchemaVersionsDiffInput || (exports.GetSchemaVersionsDiffInput = {}));
var GetSchemaVersionsDiffResponse;
(function (GetSchemaVersionsDiffResponse) {
    /**
     * @internal
     */
    GetSchemaVersionsDiffResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSchemaVersionsDiffResponse = exports.GetSchemaVersionsDiffResponse || (exports.GetSchemaVersionsDiffResponse = {}));
var GetSecurityConfigurationRequest;
(function (GetSecurityConfigurationRequest) {
    /**
     * @internal
     */
    GetSecurityConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSecurityConfigurationRequest = exports.GetSecurityConfigurationRequest || (exports.GetSecurityConfigurationRequest = {}));
var SecurityConfiguration;
(function (SecurityConfiguration) {
    /**
     * @internal
     */
    SecurityConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SecurityConfiguration = exports.SecurityConfiguration || (exports.SecurityConfiguration = {}));
var GetSecurityConfigurationResponse;
(function (GetSecurityConfigurationResponse) {
    /**
     * @internal
     */
    GetSecurityConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSecurityConfigurationResponse = exports.GetSecurityConfigurationResponse || (exports.GetSecurityConfigurationResponse = {}));
var GetSecurityConfigurationsRequest;
(function (GetSecurityConfigurationsRequest) {
    /**
     * @internal
     */
    GetSecurityConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSecurityConfigurationsRequest = exports.GetSecurityConfigurationsRequest || (exports.GetSecurityConfigurationsRequest = {}));
var GetSecurityConfigurationsResponse;
(function (GetSecurityConfigurationsResponse) {
    /**
     * @internal
     */
    GetSecurityConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSecurityConfigurationsResponse = exports.GetSecurityConfigurationsResponse || (exports.GetSecurityConfigurationsResponse = {}));
var GetTableRequest;
(function (GetTableRequest) {
    /**
     * @internal
     */
    GetTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableRequest = exports.GetTableRequest || (exports.GetTableRequest = {}));
var Table;
(function (Table) {
    /**
     * @internal
     */
    Table.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Table = exports.Table || (exports.Table = {}));
var GetTableResponse;
(function (GetTableResponse) {
    /**
     * @internal
     */
    GetTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableResponse = exports.GetTableResponse || (exports.GetTableResponse = {}));
var GetTablesRequest;
(function (GetTablesRequest) {
    /**
     * @internal
     */
    GetTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTablesRequest = exports.GetTablesRequest || (exports.GetTablesRequest = {}));
var GetTablesResponse;
(function (GetTablesResponse) {
    /**
     * @internal
     */
    GetTablesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTablesResponse = exports.GetTablesResponse || (exports.GetTablesResponse = {}));
var GetTableVersionRequest;
(function (GetTableVersionRequest) {
    /**
     * @internal
     */
    GetTableVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableVersionRequest = exports.GetTableVersionRequest || (exports.GetTableVersionRequest = {}));
var TableVersion;
(function (TableVersion) {
    /**
     * @internal
     */
    TableVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableVersion = exports.TableVersion || (exports.TableVersion = {}));
var GetTableVersionResponse;
(function (GetTableVersionResponse) {
    /**
     * @internal
     */
    GetTableVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableVersionResponse = exports.GetTableVersionResponse || (exports.GetTableVersionResponse = {}));
var GetTableVersionsRequest;
(function (GetTableVersionsRequest) {
    /**
     * @internal
     */
    GetTableVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableVersionsRequest = exports.GetTableVersionsRequest || (exports.GetTableVersionsRequest = {}));
var GetTableVersionsResponse;
(function (GetTableVersionsResponse) {
    /**
     * @internal
     */
    GetTableVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTableVersionsResponse = exports.GetTableVersionsResponse || (exports.GetTableVersionsResponse = {}));
var GetTagsRequest;
(function (GetTagsRequest) {
    /**
     * @internal
     */
    GetTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {}));
var GetTagsResponse;
(function (GetTagsResponse) {
    /**
     * @internal
     */
    GetTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsResponse = exports.GetTagsResponse || (exports.GetTagsResponse = {}));
var GetTriggerRequest;
(function (GetTriggerRequest) {
    /**
     * @internal
     */
    GetTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTriggerRequest = exports.GetTriggerRequest || (exports.GetTriggerRequest = {}));
var GetTriggerResponse;
(function (GetTriggerResponse) {
    /**
     * @internal
     */
    GetTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTriggerResponse = exports.GetTriggerResponse || (exports.GetTriggerResponse = {}));
var GetTriggersRequest;
(function (GetTriggersRequest) {
    /**
     * @internal
     */
    GetTriggersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTriggersRequest = exports.GetTriggersRequest || (exports.GetTriggersRequest = {}));
var GetTriggersResponse;
(function (GetTriggersResponse) {
    /**
     * @internal
     */
    GetTriggersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTriggersResponse = exports.GetTriggersResponse || (exports.GetTriggersResponse = {}));
var GetUserDefinedFunctionRequest;
(function (GetUserDefinedFunctionRequest) {
    /**
     * @internal
     */
    GetUserDefinedFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserDefinedFunctionRequest = exports.GetUserDefinedFunctionRequest || (exports.GetUserDefinedFunctionRequest = {}));
var UserDefinedFunction;
(function (UserDefinedFunction) {
    /**
     * @internal
     */
    UserDefinedFunction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UserDefinedFunction = exports.UserDefinedFunction || (exports.UserDefinedFunction = {}));
var GetUserDefinedFunctionResponse;
(function (GetUserDefinedFunctionResponse) {
    /**
     * @internal
     */
    GetUserDefinedFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserDefinedFunctionResponse = exports.GetUserDefinedFunctionResponse || (exports.GetUserDefinedFunctionResponse = {}));
var GetUserDefinedFunctionsRequest;
(function (GetUserDefinedFunctionsRequest) {
    /**
     * @internal
     */
    GetUserDefinedFunctionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserDefinedFunctionsRequest = exports.GetUserDefinedFunctionsRequest || (exports.GetUserDefinedFunctionsRequest = {}));
var GetUserDefinedFunctionsResponse;
(function (GetUserDefinedFunctionsResponse) {
    /**
     * @internal
     */
    GetUserDefinedFunctionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUserDefinedFunctionsResponse = exports.GetUserDefinedFunctionsResponse || (exports.GetUserDefinedFunctionsResponse = {}));
var GetWorkflowRequest;
(function (GetWorkflowRequest) {
    /**
     * @internal
     */
    GetWorkflowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRequest = exports.GetWorkflowRequest || (exports.GetWorkflowRequest = {}));
var GetWorkflowResponse;
(function (GetWorkflowResponse) {
    /**
     * @internal
     */
    GetWorkflowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowResponse = exports.GetWorkflowResponse || (exports.GetWorkflowResponse = {}));
var GetWorkflowRunRequest;
(function (GetWorkflowRunRequest) {
    /**
     * @internal
     */
    GetWorkflowRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunRequest = exports.GetWorkflowRunRequest || (exports.GetWorkflowRunRequest = {}));
var GetWorkflowRunResponse;
(function (GetWorkflowRunResponse) {
    /**
     * @internal
     */
    GetWorkflowRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunResponse = exports.GetWorkflowRunResponse || (exports.GetWorkflowRunResponse = {}));
var GetWorkflowRunPropertiesRequest;
(function (GetWorkflowRunPropertiesRequest) {
    /**
     * @internal
     */
    GetWorkflowRunPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunPropertiesRequest = exports.GetWorkflowRunPropertiesRequest || (exports.GetWorkflowRunPropertiesRequest = {}));
var GetWorkflowRunPropertiesResponse;
(function (GetWorkflowRunPropertiesResponse) {
    /**
     * @internal
     */
    GetWorkflowRunPropertiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunPropertiesResponse = exports.GetWorkflowRunPropertiesResponse || (exports.GetWorkflowRunPropertiesResponse = {}));
var GetWorkflowRunsRequest;
(function (GetWorkflowRunsRequest) {
    /**
     * @internal
     */
    GetWorkflowRunsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunsRequest = exports.GetWorkflowRunsRequest || (exports.GetWorkflowRunsRequest = {}));
var GetWorkflowRunsResponse;
(function (GetWorkflowRunsResponse) {
    /**
     * @internal
     */
    GetWorkflowRunsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWorkflowRunsResponse = exports.GetWorkflowRunsResponse || (exports.GetWorkflowRunsResponse = {}));
var ImportCatalogToGlueRequest;
(function (ImportCatalogToGlueRequest) {
    /**
     * @internal
     */
    ImportCatalogToGlueRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportCatalogToGlueRequest = exports.ImportCatalogToGlueRequest || (exports.ImportCatalogToGlueRequest = {}));
var ImportCatalogToGlueResponse;
(function (ImportCatalogToGlueResponse) {
    /**
     * @internal
     */
    ImportCatalogToGlueResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImportCatalogToGlueResponse = exports.ImportCatalogToGlueResponse || (exports.ImportCatalogToGlueResponse = {}));
var ListCrawlersRequest;
(function (ListCrawlersRequest) {
    /**
     * @internal
     */
    ListCrawlersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCrawlersRequest = exports.ListCrawlersRequest || (exports.ListCrawlersRequest = {}));
var ListCrawlersResponse;
(function (ListCrawlersResponse) {
    /**
     * @internal
     */
    ListCrawlersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCrawlersResponse = exports.ListCrawlersResponse || (exports.ListCrawlersResponse = {}));
var ListDevEndpointsRequest;
(function (ListDevEndpointsRequest) {
    /**
     * @internal
     */
    ListDevEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevEndpointsRequest = exports.ListDevEndpointsRequest || (exports.ListDevEndpointsRequest = {}));
var ListDevEndpointsResponse;
(function (ListDevEndpointsResponse) {
    /**
     * @internal
     */
    ListDevEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDevEndpointsResponse = exports.ListDevEndpointsResponse || (exports.ListDevEndpointsResponse = {}));
var ListJobsRequest;
(function (ListJobsRequest) {
    /**
     * @internal
     */
    ListJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsRequest = exports.ListJobsRequest || (exports.ListJobsRequest = {}));
var ListJobsResponse;
(function (ListJobsResponse) {
    /**
     * @internal
     */
    ListJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListJobsResponse = exports.ListJobsResponse || (exports.ListJobsResponse = {}));
var ListMLTransformsRequest;
(function (ListMLTransformsRequest) {
    /**
     * @internal
     */
    ListMLTransformsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMLTransformsRequest = exports.ListMLTransformsRequest || (exports.ListMLTransformsRequest = {}));
var ListMLTransformsResponse;
(function (ListMLTransformsResponse) {
    /**
     * @internal
     */
    ListMLTransformsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMLTransformsResponse = exports.ListMLTransformsResponse || (exports.ListMLTransformsResponse = {}));
var ListRegistriesInput;
(function (ListRegistriesInput) {
    /**
     * @internal
     */
    ListRegistriesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegistriesInput = exports.ListRegistriesInput || (exports.ListRegistriesInput = {}));
var RegistryListItem;
(function (RegistryListItem) {
    /**
     * @internal
     */
    RegistryListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegistryListItem = exports.RegistryListItem || (exports.RegistryListItem = {}));
var ListRegistriesResponse;
(function (ListRegistriesResponse) {
    /**
     * @internal
     */
    ListRegistriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegistriesResponse = exports.ListRegistriesResponse || (exports.ListRegistriesResponse = {}));
var ListSchemasInput;
(function (ListSchemasInput) {
    /**
     * @internal
     */
    ListSchemasInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasInput = exports.ListSchemasInput || (exports.ListSchemasInput = {}));
var SchemaListItem;
(function (SchemaListItem) {
    /**
     * @internal
     */
    SchemaListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaListItem = exports.SchemaListItem || (exports.SchemaListItem = {}));
var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasResponse = exports.ListSchemasResponse || (exports.ListSchemasResponse = {}));
var ListSchemaVersionsInput;
(function (ListSchemaVersionsInput) {
    /**
     * @internal
     */
    ListSchemaVersionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaVersionsInput = exports.ListSchemaVersionsInput || (exports.ListSchemaVersionsInput = {}));
var SchemaVersionListItem;
(function (SchemaVersionListItem) {
    /**
     * @internal
     */
    SchemaVersionListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaVersionListItem = exports.SchemaVersionListItem || (exports.SchemaVersionListItem = {}));
var ListSchemaVersionsResponse;
(function (ListSchemaVersionsResponse) {
    /**
     * @internal
     */
    ListSchemaVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemaVersionsResponse = exports.ListSchemaVersionsResponse || (exports.ListSchemaVersionsResponse = {}));
var ListTriggersRequest;
(function (ListTriggersRequest) {
    /**
     * @internal
     */
    ListTriggersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTriggersRequest = exports.ListTriggersRequest || (exports.ListTriggersRequest = {}));
var ListTriggersResponse;
(function (ListTriggersResponse) {
    /**
     * @internal
     */
    ListTriggersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTriggersResponse = exports.ListTriggersResponse || (exports.ListTriggersResponse = {}));
var ListWorkflowsRequest;
(function (ListWorkflowsRequest) {
    /**
     * @internal
     */
    ListWorkflowsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkflowsRequest = exports.ListWorkflowsRequest || (exports.ListWorkflowsRequest = {}));
var ListWorkflowsResponse;
(function (ListWorkflowsResponse) {
    /**
     * @internal
     */
    ListWorkflowsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWorkflowsResponse = exports.ListWorkflowsResponse || (exports.ListWorkflowsResponse = {}));
var PutDataCatalogEncryptionSettingsRequest;
(function (PutDataCatalogEncryptionSettingsRequest) {
    /**
     * @internal
     */
    PutDataCatalogEncryptionSettingsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDataCatalogEncryptionSettingsRequest = exports.PutDataCatalogEncryptionSettingsRequest || (exports.PutDataCatalogEncryptionSettingsRequest = {}));
var PutDataCatalogEncryptionSettingsResponse;
(function (PutDataCatalogEncryptionSettingsResponse) {
    /**
     * @internal
     */
    PutDataCatalogEncryptionSettingsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDataCatalogEncryptionSettingsResponse = exports.PutDataCatalogEncryptionSettingsResponse || (exports.PutDataCatalogEncryptionSettingsResponse = {}));
var EnableHybridValues;
(function (EnableHybridValues) {
    EnableHybridValues["FALSE"] = "FALSE";
    EnableHybridValues["TRUE"] = "TRUE";
})(EnableHybridValues = exports.EnableHybridValues || (exports.EnableHybridValues = {}));
var ExistCondition;
(function (ExistCondition) {
    ExistCondition["MUST_EXIST"] = "MUST_EXIST";
    ExistCondition["NONE"] = "NONE";
    ExistCondition["NOT_EXIST"] = "NOT_EXIST";
})(ExistCondition = exports.ExistCondition || (exports.ExistCondition = {}));
var PutResourcePolicyRequest;
(function (PutResourcePolicyRequest) {
    /**
     * @internal
     */
    PutResourcePolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyRequest = exports.PutResourcePolicyRequest || (exports.PutResourcePolicyRequest = {}));
var PutResourcePolicyResponse;
(function (PutResourcePolicyResponse) {
    /**
     * @internal
     */
    PutResourcePolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutResourcePolicyResponse = exports.PutResourcePolicyResponse || (exports.PutResourcePolicyResponse = {}));
var MetadataKeyValuePair;
(function (MetadataKeyValuePair) {
    /**
     * @internal
     */
    MetadataKeyValuePair.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetadataKeyValuePair = exports.MetadataKeyValuePair || (exports.MetadataKeyValuePair = {}));
var PutSchemaVersionMetadataInput;
(function (PutSchemaVersionMetadataInput) {
    /**
     * @internal
     */
    PutSchemaVersionMetadataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSchemaVersionMetadataInput = exports.PutSchemaVersionMetadataInput || (exports.PutSchemaVersionMetadataInput = {}));
var PutSchemaVersionMetadataResponse;
(function (PutSchemaVersionMetadataResponse) {
    /**
     * @internal
     */
    PutSchemaVersionMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutSchemaVersionMetadataResponse = exports.PutSchemaVersionMetadataResponse || (exports.PutSchemaVersionMetadataResponse = {}));
var PutWorkflowRunPropertiesRequest;
(function (PutWorkflowRunPropertiesRequest) {
    /**
     * @internal
     */
    PutWorkflowRunPropertiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutWorkflowRunPropertiesRequest = exports.PutWorkflowRunPropertiesRequest || (exports.PutWorkflowRunPropertiesRequest = {}));
var PutWorkflowRunPropertiesResponse;
(function (PutWorkflowRunPropertiesResponse) {
    /**
     * @internal
     */
    PutWorkflowRunPropertiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutWorkflowRunPropertiesResponse = exports.PutWorkflowRunPropertiesResponse || (exports.PutWorkflowRunPropertiesResponse = {}));
var QuerySchemaVersionMetadataInput;
(function (QuerySchemaVersionMetadataInput) {
    /**
     * @internal
     */
    QuerySchemaVersionMetadataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuerySchemaVersionMetadataInput = exports.QuerySchemaVersionMetadataInput || (exports.QuerySchemaVersionMetadataInput = {}));
var OtherMetadataValueListItem;
(function (OtherMetadataValueListItem) {
    /**
     * @internal
     */
    OtherMetadataValueListItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OtherMetadataValueListItem = exports.OtherMetadataValueListItem || (exports.OtherMetadataValueListItem = {}));
var MetadataInfo;
(function (MetadataInfo) {
    /**
     * @internal
     */
    MetadataInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetadataInfo = exports.MetadataInfo || (exports.MetadataInfo = {}));
var QuerySchemaVersionMetadataResponse;
(function (QuerySchemaVersionMetadataResponse) {
    /**
     * @internal
     */
    QuerySchemaVersionMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QuerySchemaVersionMetadataResponse = exports.QuerySchemaVersionMetadataResponse || (exports.QuerySchemaVersionMetadataResponse = {}));
var RegisterSchemaVersionInput;
(function (RegisterSchemaVersionInput) {
    /**
     * @internal
     */
    RegisterSchemaVersionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterSchemaVersionInput = exports.RegisterSchemaVersionInput || (exports.RegisterSchemaVersionInput = {}));
var RegisterSchemaVersionResponse;
(function (RegisterSchemaVersionResponse) {
    /**
     * @internal
     */
    RegisterSchemaVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterSchemaVersionResponse = exports.RegisterSchemaVersionResponse || (exports.RegisterSchemaVersionResponse = {}));
var RemoveSchemaVersionMetadataInput;
(function (RemoveSchemaVersionMetadataInput) {
    /**
     * @internal
     */
    RemoveSchemaVersionMetadataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveSchemaVersionMetadataInput = exports.RemoveSchemaVersionMetadataInput || (exports.RemoveSchemaVersionMetadataInput = {}));
var RemoveSchemaVersionMetadataResponse;
(function (RemoveSchemaVersionMetadataResponse) {
    /**
     * @internal
     */
    RemoveSchemaVersionMetadataResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveSchemaVersionMetadataResponse = exports.RemoveSchemaVersionMetadataResponse || (exports.RemoveSchemaVersionMetadataResponse = {}));
var ResetJobBookmarkRequest;
(function (ResetJobBookmarkRequest) {
    /**
     * @internal
     */
    ResetJobBookmarkRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetJobBookmarkRequest = exports.ResetJobBookmarkRequest || (exports.ResetJobBookmarkRequest = {}));
var ResetJobBookmarkResponse;
(function (ResetJobBookmarkResponse) {
    /**
     * @internal
     */
    ResetJobBookmarkResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResetJobBookmarkResponse = exports.ResetJobBookmarkResponse || (exports.ResetJobBookmarkResponse = {}));
var ConcurrentRunsExceededException;
(function (ConcurrentRunsExceededException) {
    /**
     * @internal
     */
    ConcurrentRunsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentRunsExceededException = exports.ConcurrentRunsExceededException || (exports.ConcurrentRunsExceededException = {}));
var IllegalWorkflowStateException;
(function (IllegalWorkflowStateException) {
    /**
     * @internal
     */
    IllegalWorkflowStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IllegalWorkflowStateException = exports.IllegalWorkflowStateException || (exports.IllegalWorkflowStateException = {}));
var ResumeWorkflowRunRequest;
(function (ResumeWorkflowRunRequest) {
    /**
     * @internal
     */
    ResumeWorkflowRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeWorkflowRunRequest = exports.ResumeWorkflowRunRequest || (exports.ResumeWorkflowRunRequest = {}));
var ResumeWorkflowRunResponse;
(function (ResumeWorkflowRunResponse) {
    /**
     * @internal
     */
    ResumeWorkflowRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResumeWorkflowRunResponse = exports.ResumeWorkflowRunResponse || (exports.ResumeWorkflowRunResponse = {}));
var Comparator;
(function (Comparator) {
    Comparator["EQUALS"] = "EQUALS";
    Comparator["GREATER_THAN"] = "GREATER_THAN";
    Comparator["GREATER_THAN_EQUALS"] = "GREATER_THAN_EQUALS";
    Comparator["LESS_THAN"] = "LESS_THAN";
    Comparator["LESS_THAN_EQUALS"] = "LESS_THAN_EQUALS";
})(Comparator = exports.Comparator || (exports.Comparator = {}));
var PropertyPredicate;
(function (PropertyPredicate) {
    /**
     * @internal
     */
    PropertyPredicate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PropertyPredicate = exports.PropertyPredicate || (exports.PropertyPredicate = {}));
var Sort;
(function (Sort) {
    Sort["ASCENDING"] = "ASC";
    Sort["DESCENDING"] = "DESC";
})(Sort = exports.Sort || (exports.Sort = {}));
var SortCriterion;
(function (SortCriterion) {
    /**
     * @internal
     */
    SortCriterion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortCriterion = exports.SortCriterion || (exports.SortCriterion = {}));
var SearchTablesRequest;
(function (SearchTablesRequest) {
    /**
     * @internal
     */
    SearchTablesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTablesRequest = exports.SearchTablesRequest || (exports.SearchTablesRequest = {}));
var SearchTablesResponse;
(function (SearchTablesResponse) {
    /**
     * @internal
     */
    SearchTablesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchTablesResponse = exports.SearchTablesResponse || (exports.SearchTablesResponse = {}));
var StartCrawlerRequest;
(function (StartCrawlerRequest) {
    /**
     * @internal
     */
    StartCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCrawlerRequest = exports.StartCrawlerRequest || (exports.StartCrawlerRequest = {}));
var StartCrawlerResponse;
(function (StartCrawlerResponse) {
    /**
     * @internal
     */
    StartCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCrawlerResponse = exports.StartCrawlerResponse || (exports.StartCrawlerResponse = {}));
var NoScheduleException;
(function (NoScheduleException) {
    /**
     * @internal
     */
    NoScheduleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoScheduleException = exports.NoScheduleException || (exports.NoScheduleException = {}));
var SchedulerRunningException;
(function (SchedulerRunningException) {
    /**
     * @internal
     */
    SchedulerRunningException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchedulerRunningException = exports.SchedulerRunningException || (exports.SchedulerRunningException = {}));
var StartCrawlerScheduleRequest;
(function (StartCrawlerScheduleRequest) {
    /**
     * @internal
     */
    StartCrawlerScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCrawlerScheduleRequest = exports.StartCrawlerScheduleRequest || (exports.StartCrawlerScheduleRequest = {}));
var StartCrawlerScheduleResponse;
(function (StartCrawlerScheduleResponse) {
    /**
     * @internal
     */
    StartCrawlerScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCrawlerScheduleResponse = exports.StartCrawlerScheduleResponse || (exports.StartCrawlerScheduleResponse = {}));
var StartExportLabelsTaskRunRequest;
(function (StartExportLabelsTaskRunRequest) {
    /**
     * @internal
     */
    StartExportLabelsTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExportLabelsTaskRunRequest = exports.StartExportLabelsTaskRunRequest || (exports.StartExportLabelsTaskRunRequest = {}));
var StartExportLabelsTaskRunResponse;
(function (StartExportLabelsTaskRunResponse) {
    /**
     * @internal
     */
    StartExportLabelsTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartExportLabelsTaskRunResponse = exports.StartExportLabelsTaskRunResponse || (exports.StartExportLabelsTaskRunResponse = {}));
var StartImportLabelsTaskRunRequest;
(function (StartImportLabelsTaskRunRequest) {
    /**
     * @internal
     */
    StartImportLabelsTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImportLabelsTaskRunRequest = exports.StartImportLabelsTaskRunRequest || (exports.StartImportLabelsTaskRunRequest = {}));
var StartImportLabelsTaskRunResponse;
(function (StartImportLabelsTaskRunResponse) {
    /**
     * @internal
     */
    StartImportLabelsTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartImportLabelsTaskRunResponse = exports.StartImportLabelsTaskRunResponse || (exports.StartImportLabelsTaskRunResponse = {}));
var StartJobRunRequest;
(function (StartJobRunRequest) {
    /**
     * @internal
     */
    StartJobRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRunRequest = exports.StartJobRunRequest || (exports.StartJobRunRequest = {}));
var StartJobRunResponse;
(function (StartJobRunResponse) {
    /**
     * @internal
     */
    StartJobRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartJobRunResponse = exports.StartJobRunResponse || (exports.StartJobRunResponse = {}));
var MLTransformNotReadyException;
(function (MLTransformNotReadyException) {
    /**
     * @internal
     */
    MLTransformNotReadyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MLTransformNotReadyException = exports.MLTransformNotReadyException || (exports.MLTransformNotReadyException = {}));
var StartMLEvaluationTaskRunRequest;
(function (StartMLEvaluationTaskRunRequest) {
    /**
     * @internal
     */
    StartMLEvaluationTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMLEvaluationTaskRunRequest = exports.StartMLEvaluationTaskRunRequest || (exports.StartMLEvaluationTaskRunRequest = {}));
var StartMLEvaluationTaskRunResponse;
(function (StartMLEvaluationTaskRunResponse) {
    /**
     * @internal
     */
    StartMLEvaluationTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMLEvaluationTaskRunResponse = exports.StartMLEvaluationTaskRunResponse || (exports.StartMLEvaluationTaskRunResponse = {}));
var StartMLLabelingSetGenerationTaskRunRequest;
(function (StartMLLabelingSetGenerationTaskRunRequest) {
    /**
     * @internal
     */
    StartMLLabelingSetGenerationTaskRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMLLabelingSetGenerationTaskRunRequest = exports.StartMLLabelingSetGenerationTaskRunRequest || (exports.StartMLLabelingSetGenerationTaskRunRequest = {}));
var StartMLLabelingSetGenerationTaskRunResponse;
(function (StartMLLabelingSetGenerationTaskRunResponse) {
    /**
     * @internal
     */
    StartMLLabelingSetGenerationTaskRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMLLabelingSetGenerationTaskRunResponse = exports.StartMLLabelingSetGenerationTaskRunResponse || (exports.StartMLLabelingSetGenerationTaskRunResponse = {}));
var StartTriggerRequest;
(function (StartTriggerRequest) {
    /**
     * @internal
     */
    StartTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTriggerRequest = exports.StartTriggerRequest || (exports.StartTriggerRequest = {}));
var StartTriggerResponse;
(function (StartTriggerResponse) {
    /**
     * @internal
     */
    StartTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTriggerResponse = exports.StartTriggerResponse || (exports.StartTriggerResponse = {}));
var StartWorkflowRunRequest;
(function (StartWorkflowRunRequest) {
    /**
     * @internal
     */
    StartWorkflowRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartWorkflowRunRequest = exports.StartWorkflowRunRequest || (exports.StartWorkflowRunRequest = {}));
var StartWorkflowRunResponse;
(function (StartWorkflowRunResponse) {
    /**
     * @internal
     */
    StartWorkflowRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartWorkflowRunResponse = exports.StartWorkflowRunResponse || (exports.StartWorkflowRunResponse = {}));
var CrawlerNotRunningException;
(function (CrawlerNotRunningException) {
    /**
     * @internal
     */
    CrawlerNotRunningException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerNotRunningException = exports.CrawlerNotRunningException || (exports.CrawlerNotRunningException = {}));
var CrawlerStoppingException;
(function (CrawlerStoppingException) {
    /**
     * @internal
     */
    CrawlerStoppingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CrawlerStoppingException = exports.CrawlerStoppingException || (exports.CrawlerStoppingException = {}));
var StopCrawlerRequest;
(function (StopCrawlerRequest) {
    /**
     * @internal
     */
    StopCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCrawlerRequest = exports.StopCrawlerRequest || (exports.StopCrawlerRequest = {}));
var StopCrawlerResponse;
(function (StopCrawlerResponse) {
    /**
     * @internal
     */
    StopCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCrawlerResponse = exports.StopCrawlerResponse || (exports.StopCrawlerResponse = {}));
var SchedulerNotRunningException;
(function (SchedulerNotRunningException) {
    /**
     * @internal
     */
    SchedulerNotRunningException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchedulerNotRunningException = exports.SchedulerNotRunningException || (exports.SchedulerNotRunningException = {}));
var StopCrawlerScheduleRequest;
(function (StopCrawlerScheduleRequest) {
    /**
     * @internal
     */
    StopCrawlerScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCrawlerScheduleRequest = exports.StopCrawlerScheduleRequest || (exports.StopCrawlerScheduleRequest = {}));
var StopCrawlerScheduleResponse;
(function (StopCrawlerScheduleResponse) {
    /**
     * @internal
     */
    StopCrawlerScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopCrawlerScheduleResponse = exports.StopCrawlerScheduleResponse || (exports.StopCrawlerScheduleResponse = {}));
var StopTriggerRequest;
(function (StopTriggerRequest) {
    /**
     * @internal
     */
    StopTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTriggerRequest = exports.StopTriggerRequest || (exports.StopTriggerRequest = {}));
var StopTriggerResponse;
(function (StopTriggerResponse) {
    /**
     * @internal
     */
    StopTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopTriggerResponse = exports.StopTriggerResponse || (exports.StopTriggerResponse = {}));
var StopWorkflowRunRequest;
(function (StopWorkflowRunRequest) {
    /**
     * @internal
     */
    StopWorkflowRunRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopWorkflowRunRequest = exports.StopWorkflowRunRequest || (exports.StopWorkflowRunRequest = {}));
var StopWorkflowRunResponse;
(function (StopWorkflowRunResponse) {
    /**
     * @internal
     */
    StopWorkflowRunResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopWorkflowRunResponse = exports.StopWorkflowRunResponse || (exports.StopWorkflowRunResponse = {}));
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
var UpdateCsvClassifierRequest;
(function (UpdateCsvClassifierRequest) {
    /**
     * @internal
     */
    UpdateCsvClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCsvClassifierRequest = exports.UpdateCsvClassifierRequest || (exports.UpdateCsvClassifierRequest = {}));
var UpdateGrokClassifierRequest;
(function (UpdateGrokClassifierRequest) {
    /**
     * @internal
     */
    UpdateGrokClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGrokClassifierRequest = exports.UpdateGrokClassifierRequest || (exports.UpdateGrokClassifierRequest = {}));
var UpdateJsonClassifierRequest;
(function (UpdateJsonClassifierRequest) {
    /**
     * @internal
     */
    UpdateJsonClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJsonClassifierRequest = exports.UpdateJsonClassifierRequest || (exports.UpdateJsonClassifierRequest = {}));
var UpdateXMLClassifierRequest;
(function (UpdateXMLClassifierRequest) {
    /**
     * @internal
     */
    UpdateXMLClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateXMLClassifierRequest = exports.UpdateXMLClassifierRequest || (exports.UpdateXMLClassifierRequest = {}));
var UpdateClassifierRequest;
(function (UpdateClassifierRequest) {
    /**
     * @internal
     */
    UpdateClassifierRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClassifierRequest = exports.UpdateClassifierRequest || (exports.UpdateClassifierRequest = {}));
var UpdateClassifierResponse;
(function (UpdateClassifierResponse) {
    /**
     * @internal
     */
    UpdateClassifierResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateClassifierResponse = exports.UpdateClassifierResponse || (exports.UpdateClassifierResponse = {}));
var VersionMismatchException;
(function (VersionMismatchException) {
    /**
     * @internal
     */
    VersionMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VersionMismatchException = exports.VersionMismatchException || (exports.VersionMismatchException = {}));
var UpdateColumnStatisticsForPartitionRequest;
(function (UpdateColumnStatisticsForPartitionRequest) {
    /**
     * @internal
     */
    UpdateColumnStatisticsForPartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateColumnStatisticsForPartitionRequest = exports.UpdateColumnStatisticsForPartitionRequest || (exports.UpdateColumnStatisticsForPartitionRequest = {}));
var ColumnStatisticsError;
(function (ColumnStatisticsError) {
    /**
     * @internal
     */
    ColumnStatisticsError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ColumnStatisticsError = exports.ColumnStatisticsError || (exports.ColumnStatisticsError = {}));
var UpdateColumnStatisticsForPartitionResponse;
(function (UpdateColumnStatisticsForPartitionResponse) {
    /**
     * @internal
     */
    UpdateColumnStatisticsForPartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateColumnStatisticsForPartitionResponse = exports.UpdateColumnStatisticsForPartitionResponse || (exports.UpdateColumnStatisticsForPartitionResponse = {}));
var UpdateColumnStatisticsForTableRequest;
(function (UpdateColumnStatisticsForTableRequest) {
    /**
     * @internal
     */
    UpdateColumnStatisticsForTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateColumnStatisticsForTableRequest = exports.UpdateColumnStatisticsForTableRequest || (exports.UpdateColumnStatisticsForTableRequest = {}));
var UpdateColumnStatisticsForTableResponse;
(function (UpdateColumnStatisticsForTableResponse) {
    /**
     * @internal
     */
    UpdateColumnStatisticsForTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateColumnStatisticsForTableResponse = exports.UpdateColumnStatisticsForTableResponse || (exports.UpdateColumnStatisticsForTableResponse = {}));
var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionRequest = exports.UpdateConnectionRequest || (exports.UpdateConnectionRequest = {}));
var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    /**
     * @internal
     */
    UpdateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionResponse = exports.UpdateConnectionResponse || (exports.UpdateConnectionResponse = {}));
var UpdateCrawlerRequest;
(function (UpdateCrawlerRequest) {
    /**
     * @internal
     */
    UpdateCrawlerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCrawlerRequest = exports.UpdateCrawlerRequest || (exports.UpdateCrawlerRequest = {}));
var UpdateCrawlerResponse;
(function (UpdateCrawlerResponse) {
    /**
     * @internal
     */
    UpdateCrawlerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCrawlerResponse = exports.UpdateCrawlerResponse || (exports.UpdateCrawlerResponse = {}));
var UpdateCrawlerScheduleRequest;
(function (UpdateCrawlerScheduleRequest) {
    /**
     * @internal
     */
    UpdateCrawlerScheduleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCrawlerScheduleRequest = exports.UpdateCrawlerScheduleRequest || (exports.UpdateCrawlerScheduleRequest = {}));
var UpdateCrawlerScheduleResponse;
(function (UpdateCrawlerScheduleResponse) {
    /**
     * @internal
     */
    UpdateCrawlerScheduleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCrawlerScheduleResponse = exports.UpdateCrawlerScheduleResponse || (exports.UpdateCrawlerScheduleResponse = {}));
var UpdateDatabaseRequest;
(function (UpdateDatabaseRequest) {
    /**
     * @internal
     */
    UpdateDatabaseRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatabaseRequest = exports.UpdateDatabaseRequest || (exports.UpdateDatabaseRequest = {}));
var UpdateDatabaseResponse;
(function (UpdateDatabaseResponse) {
    /**
     * @internal
     */
    UpdateDatabaseResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatabaseResponse = exports.UpdateDatabaseResponse || (exports.UpdateDatabaseResponse = {}));
var DevEndpointCustomLibraries;
(function (DevEndpointCustomLibraries) {
    /**
     * @internal
     */
    DevEndpointCustomLibraries.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DevEndpointCustomLibraries = exports.DevEndpointCustomLibraries || (exports.DevEndpointCustomLibraries = {}));
var UpdateDevEndpointRequest;
(function (UpdateDevEndpointRequest) {
    /**
     * @internal
     */
    UpdateDevEndpointRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevEndpointRequest = exports.UpdateDevEndpointRequest || (exports.UpdateDevEndpointRequest = {}));
var UpdateDevEndpointResponse;
(function (UpdateDevEndpointResponse) {
    /**
     * @internal
     */
    UpdateDevEndpointResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDevEndpointResponse = exports.UpdateDevEndpointResponse || (exports.UpdateDevEndpointResponse = {}));
var JobUpdate;
(function (JobUpdate) {
    /**
     * @internal
     */
    JobUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobUpdate = exports.JobUpdate || (exports.JobUpdate = {}));
var UpdateJobRequest;
(function (UpdateJobRequest) {
    /**
     * @internal
     */
    UpdateJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobRequest = exports.UpdateJobRequest || (exports.UpdateJobRequest = {}));
var UpdateJobResponse;
(function (UpdateJobResponse) {
    /**
     * @internal
     */
    UpdateJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateJobResponse = exports.UpdateJobResponse || (exports.UpdateJobResponse = {}));
var UpdateMLTransformRequest;
(function (UpdateMLTransformRequest) {
    /**
     * @internal
     */
    UpdateMLTransformRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMLTransformRequest = exports.UpdateMLTransformRequest || (exports.UpdateMLTransformRequest = {}));
var UpdateMLTransformResponse;
(function (UpdateMLTransformResponse) {
    /**
     * @internal
     */
    UpdateMLTransformResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateMLTransformResponse = exports.UpdateMLTransformResponse || (exports.UpdateMLTransformResponse = {}));
var UpdatePartitionRequest;
(function (UpdatePartitionRequest) {
    /**
     * @internal
     */
    UpdatePartitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePartitionRequest = exports.UpdatePartitionRequest || (exports.UpdatePartitionRequest = {}));
var UpdatePartitionResponse;
(function (UpdatePartitionResponse) {
    /**
     * @internal
     */
    UpdatePartitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePartitionResponse = exports.UpdatePartitionResponse || (exports.UpdatePartitionResponse = {}));
var UpdateRegistryInput;
(function (UpdateRegistryInput) {
    /**
     * @internal
     */
    UpdateRegistryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegistryInput = exports.UpdateRegistryInput || (exports.UpdateRegistryInput = {}));
var UpdateRegistryResponse;
(function (UpdateRegistryResponse) {
    /**
     * @internal
     */
    UpdateRegistryResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegistryResponse = exports.UpdateRegistryResponse || (exports.UpdateRegistryResponse = {}));
var UpdateSchemaInput;
(function (UpdateSchemaInput) {
    /**
     * @internal
     */
    UpdateSchemaInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSchemaInput = exports.UpdateSchemaInput || (exports.UpdateSchemaInput = {}));
var UpdateSchemaResponse;
(function (UpdateSchemaResponse) {
    /**
     * @internal
     */
    UpdateSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSchemaResponse = exports.UpdateSchemaResponse || (exports.UpdateSchemaResponse = {}));
var UpdateTableRequest;
(function (UpdateTableRequest) {
    /**
     * @internal
     */
    UpdateTableRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableRequest = exports.UpdateTableRequest || (exports.UpdateTableRequest = {}));
var UpdateTableResponse;
(function (UpdateTableResponse) {
    /**
     * @internal
     */
    UpdateTableResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableResponse = exports.UpdateTableResponse || (exports.UpdateTableResponse = {}));
var TriggerUpdate;
(function (TriggerUpdate) {
    /**
     * @internal
     */
    TriggerUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TriggerUpdate = exports.TriggerUpdate || (exports.TriggerUpdate = {}));
var UpdateTriggerRequest;
(function (UpdateTriggerRequest) {
    /**
     * @internal
     */
    UpdateTriggerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTriggerRequest = exports.UpdateTriggerRequest || (exports.UpdateTriggerRequest = {}));
var UpdateTriggerResponse;
(function (UpdateTriggerResponse) {
    /**
     * @internal
     */
    UpdateTriggerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTriggerResponse = exports.UpdateTriggerResponse || (exports.UpdateTriggerResponse = {}));
var UpdateUserDefinedFunctionRequest;
(function (UpdateUserDefinedFunctionRequest) {
    /**
     * @internal
     */
    UpdateUserDefinedFunctionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserDefinedFunctionRequest = exports.UpdateUserDefinedFunctionRequest || (exports.UpdateUserDefinedFunctionRequest = {}));
var UpdateUserDefinedFunctionResponse;
(function (UpdateUserDefinedFunctionResponse) {
    /**
     * @internal
     */
    UpdateUserDefinedFunctionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateUserDefinedFunctionResponse = exports.UpdateUserDefinedFunctionResponse || (exports.UpdateUserDefinedFunctionResponse = {}));
var UpdateWorkflowRequest;
(function (UpdateWorkflowRequest) {
    /**
     * @internal
     */
    UpdateWorkflowRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkflowRequest = exports.UpdateWorkflowRequest || (exports.UpdateWorkflowRequest = {}));
var UpdateWorkflowResponse;
(function (UpdateWorkflowResponse) {
    /**
     * @internal
     */
    UpdateWorkflowResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWorkflowResponse = exports.UpdateWorkflowResponse || (exports.UpdateWorkflowResponse = {}));
//# sourceMappingURL=models_1.js.map