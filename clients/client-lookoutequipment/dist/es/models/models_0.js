import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var DatasetSchema;
(function (DatasetSchema) {
    /**
     * @internal
     */
    DatasetSchema.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetSchema || (DatasetSchema = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetRequest || (CreateDatasetRequest = {}));
export var DatasetStatus;
(function (DatasetStatus) {
    DatasetStatus["ACTIVE"] = "ACTIVE";
    DatasetStatus["CREATED"] = "CREATED";
    DatasetStatus["INGESTION_IN_PROGRESS"] = "INGESTION_IN_PROGRESS";
})(DatasetStatus || (DatasetStatus = {}));
export var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetResponse || (CreateDatasetResponse = {}));
export var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerException || (InternalServerException = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var InferenceInputNameConfiguration;
(function (InferenceInputNameConfiguration) {
    /**
     * @internal
     */
    InferenceInputNameConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceInputNameConfiguration || (InferenceInputNameConfiguration = {}));
export var InferenceS3InputConfiguration;
(function (InferenceS3InputConfiguration) {
    /**
     * @internal
     */
    InferenceS3InputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceS3InputConfiguration || (InferenceS3InputConfiguration = {}));
export var InferenceInputConfiguration;
(function (InferenceInputConfiguration) {
    /**
     * @internal
     */
    InferenceInputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceInputConfiguration || (InferenceInputConfiguration = {}));
export var InferenceS3OutputConfiguration;
(function (InferenceS3OutputConfiguration) {
    /**
     * @internal
     */
    InferenceS3OutputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceS3OutputConfiguration || (InferenceS3OutputConfiguration = {}));
export var InferenceOutputConfiguration;
(function (InferenceOutputConfiguration) {
    /**
     * @internal
     */
    InferenceOutputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceOutputConfiguration || (InferenceOutputConfiguration = {}));
export var DataUploadFrequency;
(function (DataUploadFrequency) {
    DataUploadFrequency["PT10M"] = "PT10M";
    DataUploadFrequency["PT15M"] = "PT15M";
    DataUploadFrequency["PT1H"] = "PT1H";
    DataUploadFrequency["PT30M"] = "PT30M";
    DataUploadFrequency["PT5M"] = "PT5M";
})(DataUploadFrequency || (DataUploadFrequency = {}));
export var CreateInferenceSchedulerRequest;
(function (CreateInferenceSchedulerRequest) {
    /**
     * @internal
     */
    CreateInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInferenceSchedulerRequest || (CreateInferenceSchedulerRequest = {}));
export var InferenceSchedulerStatus;
(function (InferenceSchedulerStatus) {
    InferenceSchedulerStatus["PENDING"] = "PENDING";
    InferenceSchedulerStatus["RUNNING"] = "RUNNING";
    InferenceSchedulerStatus["STOPPED"] = "STOPPED";
    InferenceSchedulerStatus["STOPPING"] = "STOPPING";
})(InferenceSchedulerStatus || (InferenceSchedulerStatus = {}));
export var CreateInferenceSchedulerResponse;
(function (CreateInferenceSchedulerResponse) {
    /**
     * @internal
     */
    CreateInferenceSchedulerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateInferenceSchedulerResponse || (CreateInferenceSchedulerResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var TargetSamplingRate;
(function (TargetSamplingRate) {
    TargetSamplingRate["PT10M"] = "PT10M";
    TargetSamplingRate["PT10S"] = "PT10S";
    TargetSamplingRate["PT15M"] = "PT15M";
    TargetSamplingRate["PT15S"] = "PT15S";
    TargetSamplingRate["PT1H"] = "PT1H";
    TargetSamplingRate["PT1M"] = "PT1M";
    TargetSamplingRate["PT1S"] = "PT1S";
    TargetSamplingRate["PT30M"] = "PT30M";
    TargetSamplingRate["PT30S"] = "PT30S";
    TargetSamplingRate["PT5M"] = "PT5M";
    TargetSamplingRate["PT5S"] = "PT5S";
})(TargetSamplingRate || (TargetSamplingRate = {}));
export var DataPreProcessingConfiguration;
(function (DataPreProcessingConfiguration) {
    /**
     * @internal
     */
    DataPreProcessingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataPreProcessingConfiguration || (DataPreProcessingConfiguration = {}));
export var LabelsS3InputConfiguration;
(function (LabelsS3InputConfiguration) {
    /**
     * @internal
     */
    LabelsS3InputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelsS3InputConfiguration || (LabelsS3InputConfiguration = {}));
export var LabelsInputConfiguration;
(function (LabelsInputConfiguration) {
    /**
     * @internal
     */
    LabelsInputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelsInputConfiguration || (LabelsInputConfiguration = {}));
export var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelRequest || (CreateModelRequest = {}));
export var ModelStatus;
(function (ModelStatus) {
    ModelStatus["FAILED"] = "FAILED";
    ModelStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ModelStatus["SUCCESS"] = "SUCCESS";
})(ModelStatus || (ModelStatus = {}));
export var CreateModelResponse;
(function (CreateModelResponse) {
    /**
     * @internal
     */
    CreateModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelResponse || (CreateModelResponse = {}));
export var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetRequest || (DeleteDatasetRequest = {}));
export var DeleteInferenceSchedulerRequest;
(function (DeleteInferenceSchedulerRequest) {
    /**
     * @internal
     */
    DeleteInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteInferenceSchedulerRequest || (DeleteInferenceSchedulerRequest = {}));
export var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelRequest || (DeleteModelRequest = {}));
export var DescribeDataIngestionJobRequest;
(function (DescribeDataIngestionJobRequest) {
    /**
     * @internal
     */
    DescribeDataIngestionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataIngestionJobRequest || (DescribeDataIngestionJobRequest = {}));
export var IngestionS3InputConfiguration;
(function (IngestionS3InputConfiguration) {
    /**
     * @internal
     */
    IngestionS3InputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IngestionS3InputConfiguration || (IngestionS3InputConfiguration = {}));
export var IngestionInputConfiguration;
(function (IngestionInputConfiguration) {
    /**
     * @internal
     */
    IngestionInputConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IngestionInputConfiguration || (IngestionInputConfiguration = {}));
export var IngestionJobStatus;
(function (IngestionJobStatus) {
    IngestionJobStatus["FAILED"] = "FAILED";
    IngestionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    IngestionJobStatus["SUCCESS"] = "SUCCESS";
})(IngestionJobStatus || (IngestionJobStatus = {}));
export var DescribeDataIngestionJobResponse;
(function (DescribeDataIngestionJobResponse) {
    /**
     * @internal
     */
    DescribeDataIngestionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDataIngestionJobResponse || (DescribeDataIngestionJobResponse = {}));
export var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetRequest || (DescribeDatasetRequest = {}));
export var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetResponse || (DescribeDatasetResponse = {}));
export var DescribeInferenceSchedulerRequest;
(function (DescribeInferenceSchedulerRequest) {
    /**
     * @internal
     */
    DescribeInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInferenceSchedulerRequest || (DescribeInferenceSchedulerRequest = {}));
export var DescribeInferenceSchedulerResponse;
(function (DescribeInferenceSchedulerResponse) {
    /**
     * @internal
     */
    DescribeInferenceSchedulerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeInferenceSchedulerResponse || (DescribeInferenceSchedulerResponse = {}));
export var DescribeModelRequest;
(function (DescribeModelRequest) {
    /**
     * @internal
     */
    DescribeModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelRequest || (DescribeModelRequest = {}));
export var DescribeModelResponse;
(function (DescribeModelResponse) {
    /**
     * @internal
     */
    DescribeModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelResponse || (DescribeModelResponse = {}));
export var ListDataIngestionJobsRequest;
(function (ListDataIngestionJobsRequest) {
    /**
     * @internal
     */
    ListDataIngestionJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataIngestionJobsRequest || (ListDataIngestionJobsRequest = {}));
export var DataIngestionJobSummary;
(function (DataIngestionJobSummary) {
    /**
     * @internal
     */
    DataIngestionJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataIngestionJobSummary || (DataIngestionJobSummary = {}));
export var ListDataIngestionJobsResponse;
(function (ListDataIngestionJobsResponse) {
    /**
     * @internal
     */
    ListDataIngestionJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDataIngestionJobsResponse || (ListDataIngestionJobsResponse = {}));
export var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetsRequest || (ListDatasetsRequest = {}));
export var DatasetSummary;
(function (DatasetSummary) {
    /**
     * @internal
     */
    DatasetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetSummary || (DatasetSummary = {}));
export var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetsResponse || (ListDatasetsResponse = {}));
export var InferenceExecutionStatus;
(function (InferenceExecutionStatus) {
    InferenceExecutionStatus["FAILED"] = "FAILED";
    InferenceExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    InferenceExecutionStatus["SUCCESS"] = "SUCCESS";
})(InferenceExecutionStatus || (InferenceExecutionStatus = {}));
export var ListInferenceExecutionsRequest;
(function (ListInferenceExecutionsRequest) {
    /**
     * @internal
     */
    ListInferenceExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInferenceExecutionsRequest || (ListInferenceExecutionsRequest = {}));
export var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Object || (S3Object = {}));
export var InferenceExecutionSummary;
(function (InferenceExecutionSummary) {
    /**
     * @internal
     */
    InferenceExecutionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceExecutionSummary || (InferenceExecutionSummary = {}));
export var ListInferenceExecutionsResponse;
(function (ListInferenceExecutionsResponse) {
    /**
     * @internal
     */
    ListInferenceExecutionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInferenceExecutionsResponse || (ListInferenceExecutionsResponse = {}));
export var ListInferenceSchedulersRequest;
(function (ListInferenceSchedulersRequest) {
    /**
     * @internal
     */
    ListInferenceSchedulersRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInferenceSchedulersRequest || (ListInferenceSchedulersRequest = {}));
export var InferenceSchedulerSummary;
(function (InferenceSchedulerSummary) {
    /**
     * @internal
     */
    InferenceSchedulerSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InferenceSchedulerSummary || (InferenceSchedulerSummary = {}));
export var ListInferenceSchedulersResponse;
(function (ListInferenceSchedulersResponse) {
    /**
     * @internal
     */
    ListInferenceSchedulersResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListInferenceSchedulersResponse || (ListInferenceSchedulersResponse = {}));
export var ListModelsRequest;
(function (ListModelsRequest) {
    /**
     * @internal
     */
    ListModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListModelsRequest || (ListModelsRequest = {}));
export var ModelSummary;
(function (ModelSummary) {
    /**
     * @internal
     */
    ModelSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelSummary || (ModelSummary = {}));
export var ListModelsResponse;
(function (ListModelsResponse) {
    /**
     * @internal
     */
    ListModelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListModelsResponse || (ListModelsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var StartDataIngestionJobRequest;
(function (StartDataIngestionJobRequest) {
    /**
     * @internal
     */
    StartDataIngestionJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDataIngestionJobRequest || (StartDataIngestionJobRequest = {}));
export var StartDataIngestionJobResponse;
(function (StartDataIngestionJobResponse) {
    /**
     * @internal
     */
    StartDataIngestionJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartDataIngestionJobResponse || (StartDataIngestionJobResponse = {}));
export var StartInferenceSchedulerRequest;
(function (StartInferenceSchedulerRequest) {
    /**
     * @internal
     */
    StartInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartInferenceSchedulerRequest || (StartInferenceSchedulerRequest = {}));
export var StartInferenceSchedulerResponse;
(function (StartInferenceSchedulerResponse) {
    /**
     * @internal
     */
    StartInferenceSchedulerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartInferenceSchedulerResponse || (StartInferenceSchedulerResponse = {}));
export var StopInferenceSchedulerRequest;
(function (StopInferenceSchedulerRequest) {
    /**
     * @internal
     */
    StopInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopInferenceSchedulerRequest || (StopInferenceSchedulerRequest = {}));
export var StopInferenceSchedulerResponse;
(function (StopInferenceSchedulerResponse) {
    /**
     * @internal
     */
    StopInferenceSchedulerResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopInferenceSchedulerResponse || (StopInferenceSchedulerResponse = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateInferenceSchedulerRequest;
(function (UpdateInferenceSchedulerRequest) {
    /**
     * @internal
     */
    UpdateInferenceSchedulerRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateInferenceSchedulerRequest || (UpdateInferenceSchedulerRequest = {}));
//# sourceMappingURL=models_0.js.map