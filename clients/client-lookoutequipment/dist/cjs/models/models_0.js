"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInferenceExecutionsRequest = exports.InferenceExecutionStatus = exports.ListDatasetsResponse = exports.DatasetSummary = exports.ListDatasetsRequest = exports.ListDataIngestionJobsResponse = exports.DataIngestionJobSummary = exports.ListDataIngestionJobsRequest = exports.DescribeModelResponse = exports.DescribeModelRequest = exports.DescribeInferenceSchedulerResponse = exports.DescribeInferenceSchedulerRequest = exports.DescribeDatasetResponse = exports.DescribeDatasetRequest = exports.DescribeDataIngestionJobResponse = exports.IngestionJobStatus = exports.IngestionInputConfiguration = exports.IngestionS3InputConfiguration = exports.DescribeDataIngestionJobRequest = exports.DeleteModelRequest = exports.DeleteInferenceSchedulerRequest = exports.DeleteDatasetRequest = exports.CreateModelResponse = exports.ModelStatus = exports.CreateModelRequest = exports.LabelsInputConfiguration = exports.LabelsS3InputConfiguration = exports.DataPreProcessingConfiguration = exports.TargetSamplingRate = exports.ResourceNotFoundException = exports.CreateInferenceSchedulerResponse = exports.InferenceSchedulerStatus = exports.CreateInferenceSchedulerRequest = exports.DataUploadFrequency = exports.InferenceOutputConfiguration = exports.InferenceS3OutputConfiguration = exports.InferenceInputConfiguration = exports.InferenceS3InputConfiguration = exports.InferenceInputNameConfiguration = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.InternalServerException = exports.CreateDatasetResponse = exports.DatasetStatus = exports.CreateDatasetRequest = exports.Tag = exports.DatasetSchema = exports.ConflictException = exports.AccessDeniedException = void 0;
exports.UpdateInferenceSchedulerRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopInferenceSchedulerResponse = exports.StopInferenceSchedulerRequest = exports.StartInferenceSchedulerResponse = exports.StartInferenceSchedulerRequest = exports.StartDataIngestionJobResponse = exports.StartDataIngestionJobRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListModelsResponse = exports.ModelSummary = exports.ListModelsRequest = exports.ListInferenceSchedulersResponse = exports.InferenceSchedulerSummary = exports.ListInferenceSchedulersRequest = exports.ListInferenceExecutionsResponse = exports.InferenceExecutionSummary = exports.S3Object = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var DatasetSchema;
(function (DatasetSchema) {
    /**
     * @internal
     */
    DatasetSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSchema = exports.DatasetSchema || (exports.DatasetSchema = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetRequest = exports.CreateDatasetRequest || (exports.CreateDatasetRequest = {}));
var DatasetStatus;
(function (DatasetStatus) {
    DatasetStatus["ACTIVE"] = "ACTIVE";
    DatasetStatus["CREATED"] = "CREATED";
    DatasetStatus["INGESTION_IN_PROGRESS"] = "INGESTION_IN_PROGRESS";
})(DatasetStatus = exports.DatasetStatus || (exports.DatasetStatus = {}));
var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetResponse = exports.CreateDatasetResponse || (exports.CreateDatasetResponse = {}));
var InternalServerException;
(function (InternalServerException) {
    /**
     * @internal
     */
    InternalServerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerException = exports.InternalServerException || (exports.InternalServerException = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
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
var InferenceInputNameConfiguration;
(function (InferenceInputNameConfiguration) {
    /**
     * @internal
     */
    InferenceInputNameConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceInputNameConfiguration = exports.InferenceInputNameConfiguration || (exports.InferenceInputNameConfiguration = {}));
var InferenceS3InputConfiguration;
(function (InferenceS3InputConfiguration) {
    /**
     * @internal
     */
    InferenceS3InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceS3InputConfiguration = exports.InferenceS3InputConfiguration || (exports.InferenceS3InputConfiguration = {}));
var InferenceInputConfiguration;
(function (InferenceInputConfiguration) {
    /**
     * @internal
     */
    InferenceInputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceInputConfiguration = exports.InferenceInputConfiguration || (exports.InferenceInputConfiguration = {}));
var InferenceS3OutputConfiguration;
(function (InferenceS3OutputConfiguration) {
    /**
     * @internal
     */
    InferenceS3OutputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceS3OutputConfiguration = exports.InferenceS3OutputConfiguration || (exports.InferenceS3OutputConfiguration = {}));
var InferenceOutputConfiguration;
(function (InferenceOutputConfiguration) {
    /**
     * @internal
     */
    InferenceOutputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceOutputConfiguration = exports.InferenceOutputConfiguration || (exports.InferenceOutputConfiguration = {}));
var DataUploadFrequency;
(function (DataUploadFrequency) {
    DataUploadFrequency["PT10M"] = "PT10M";
    DataUploadFrequency["PT15M"] = "PT15M";
    DataUploadFrequency["PT1H"] = "PT1H";
    DataUploadFrequency["PT30M"] = "PT30M";
    DataUploadFrequency["PT5M"] = "PT5M";
})(DataUploadFrequency = exports.DataUploadFrequency || (exports.DataUploadFrequency = {}));
var CreateInferenceSchedulerRequest;
(function (CreateInferenceSchedulerRequest) {
    /**
     * @internal
     */
    CreateInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInferenceSchedulerRequest = exports.CreateInferenceSchedulerRequest || (exports.CreateInferenceSchedulerRequest = {}));
var InferenceSchedulerStatus;
(function (InferenceSchedulerStatus) {
    InferenceSchedulerStatus["PENDING"] = "PENDING";
    InferenceSchedulerStatus["RUNNING"] = "RUNNING";
    InferenceSchedulerStatus["STOPPED"] = "STOPPED";
    InferenceSchedulerStatus["STOPPING"] = "STOPPING";
})(InferenceSchedulerStatus = exports.InferenceSchedulerStatus || (exports.InferenceSchedulerStatus = {}));
var CreateInferenceSchedulerResponse;
(function (CreateInferenceSchedulerResponse) {
    /**
     * @internal
     */
    CreateInferenceSchedulerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateInferenceSchedulerResponse = exports.CreateInferenceSchedulerResponse || (exports.CreateInferenceSchedulerResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var TargetSamplingRate;
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
})(TargetSamplingRate = exports.TargetSamplingRate || (exports.TargetSamplingRate = {}));
var DataPreProcessingConfiguration;
(function (DataPreProcessingConfiguration) {
    /**
     * @internal
     */
    DataPreProcessingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataPreProcessingConfiguration = exports.DataPreProcessingConfiguration || (exports.DataPreProcessingConfiguration = {}));
var LabelsS3InputConfiguration;
(function (LabelsS3InputConfiguration) {
    /**
     * @internal
     */
    LabelsS3InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelsS3InputConfiguration = exports.LabelsS3InputConfiguration || (exports.LabelsS3InputConfiguration = {}));
var LabelsInputConfiguration;
(function (LabelsInputConfiguration) {
    /**
     * @internal
     */
    LabelsInputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelsInputConfiguration = exports.LabelsInputConfiguration || (exports.LabelsInputConfiguration = {}));
var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelRequest = exports.CreateModelRequest || (exports.CreateModelRequest = {}));
var ModelStatus;
(function (ModelStatus) {
    ModelStatus["FAILED"] = "FAILED";
    ModelStatus["IN_PROGRESS"] = "IN_PROGRESS";
    ModelStatus["SUCCESS"] = "SUCCESS";
})(ModelStatus = exports.ModelStatus || (exports.ModelStatus = {}));
var CreateModelResponse;
(function (CreateModelResponse) {
    /**
     * @internal
     */
    CreateModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelResponse = exports.CreateModelResponse || (exports.CreateModelResponse = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteInferenceSchedulerRequest;
(function (DeleteInferenceSchedulerRequest) {
    /**
     * @internal
     */
    DeleteInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInferenceSchedulerRequest = exports.DeleteInferenceSchedulerRequest || (exports.DeleteInferenceSchedulerRequest = {}));
var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelRequest = exports.DeleteModelRequest || (exports.DeleteModelRequest = {}));
var DescribeDataIngestionJobRequest;
(function (DescribeDataIngestionJobRequest) {
    /**
     * @internal
     */
    DescribeDataIngestionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataIngestionJobRequest = exports.DescribeDataIngestionJobRequest || (exports.DescribeDataIngestionJobRequest = {}));
var IngestionS3InputConfiguration;
(function (IngestionS3InputConfiguration) {
    /**
     * @internal
     */
    IngestionS3InputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IngestionS3InputConfiguration = exports.IngestionS3InputConfiguration || (exports.IngestionS3InputConfiguration = {}));
var IngestionInputConfiguration;
(function (IngestionInputConfiguration) {
    /**
     * @internal
     */
    IngestionInputConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IngestionInputConfiguration = exports.IngestionInputConfiguration || (exports.IngestionInputConfiguration = {}));
var IngestionJobStatus;
(function (IngestionJobStatus) {
    IngestionJobStatus["FAILED"] = "FAILED";
    IngestionJobStatus["IN_PROGRESS"] = "IN_PROGRESS";
    IngestionJobStatus["SUCCESS"] = "SUCCESS";
})(IngestionJobStatus = exports.IngestionJobStatus || (exports.IngestionJobStatus = {}));
var DescribeDataIngestionJobResponse;
(function (DescribeDataIngestionJobResponse) {
    /**
     * @internal
     */
    DescribeDataIngestionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDataIngestionJobResponse = exports.DescribeDataIngestionJobResponse || (exports.DescribeDataIngestionJobResponse = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeInferenceSchedulerRequest;
(function (DescribeInferenceSchedulerRequest) {
    /**
     * @internal
     */
    DescribeInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInferenceSchedulerRequest = exports.DescribeInferenceSchedulerRequest || (exports.DescribeInferenceSchedulerRequest = {}));
var DescribeInferenceSchedulerResponse;
(function (DescribeInferenceSchedulerResponse) {
    /**
     * @internal
     */
    DescribeInferenceSchedulerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInferenceSchedulerResponse = exports.DescribeInferenceSchedulerResponse || (exports.DescribeInferenceSchedulerResponse = {}));
var DescribeModelRequest;
(function (DescribeModelRequest) {
    /**
     * @internal
     */
    DescribeModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelRequest = exports.DescribeModelRequest || (exports.DescribeModelRequest = {}));
var DescribeModelResponse;
(function (DescribeModelResponse) {
    /**
     * @internal
     */
    DescribeModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelResponse = exports.DescribeModelResponse || (exports.DescribeModelResponse = {}));
var ListDataIngestionJobsRequest;
(function (ListDataIngestionJobsRequest) {
    /**
     * @internal
     */
    ListDataIngestionJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataIngestionJobsRequest = exports.ListDataIngestionJobsRequest || (exports.ListDataIngestionJobsRequest = {}));
var DataIngestionJobSummary;
(function (DataIngestionJobSummary) {
    /**
     * @internal
     */
    DataIngestionJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataIngestionJobSummary = exports.DataIngestionJobSummary || (exports.DataIngestionJobSummary = {}));
var ListDataIngestionJobsResponse;
(function (ListDataIngestionJobsResponse) {
    /**
     * @internal
     */
    ListDataIngestionJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDataIngestionJobsResponse = exports.ListDataIngestionJobsResponse || (exports.ListDataIngestionJobsResponse = {}));
var ListDatasetsRequest;
(function (ListDatasetsRequest) {
    /**
     * @internal
     */
    ListDatasetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsRequest = exports.ListDatasetsRequest || (exports.ListDatasetsRequest = {}));
var DatasetSummary;
(function (DatasetSummary) {
    /**
     * @internal
     */
    DatasetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSummary = exports.DatasetSummary || (exports.DatasetSummary = {}));
var ListDatasetsResponse;
(function (ListDatasetsResponse) {
    /**
     * @internal
     */
    ListDatasetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetsResponse = exports.ListDatasetsResponse || (exports.ListDatasetsResponse = {}));
var InferenceExecutionStatus;
(function (InferenceExecutionStatus) {
    InferenceExecutionStatus["FAILED"] = "FAILED";
    InferenceExecutionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    InferenceExecutionStatus["SUCCESS"] = "SUCCESS";
})(InferenceExecutionStatus = exports.InferenceExecutionStatus || (exports.InferenceExecutionStatus = {}));
var ListInferenceExecutionsRequest;
(function (ListInferenceExecutionsRequest) {
    /**
     * @internal
     */
    ListInferenceExecutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInferenceExecutionsRequest = exports.ListInferenceExecutionsRequest || (exports.ListInferenceExecutionsRequest = {}));
var S3Object;
(function (S3Object) {
    /**
     * @internal
     */
    S3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Object = exports.S3Object || (exports.S3Object = {}));
var InferenceExecutionSummary;
(function (InferenceExecutionSummary) {
    /**
     * @internal
     */
    InferenceExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceExecutionSummary = exports.InferenceExecutionSummary || (exports.InferenceExecutionSummary = {}));
var ListInferenceExecutionsResponse;
(function (ListInferenceExecutionsResponse) {
    /**
     * @internal
     */
    ListInferenceExecutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInferenceExecutionsResponse = exports.ListInferenceExecutionsResponse || (exports.ListInferenceExecutionsResponse = {}));
var ListInferenceSchedulersRequest;
(function (ListInferenceSchedulersRequest) {
    /**
     * @internal
     */
    ListInferenceSchedulersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInferenceSchedulersRequest = exports.ListInferenceSchedulersRequest || (exports.ListInferenceSchedulersRequest = {}));
var InferenceSchedulerSummary;
(function (InferenceSchedulerSummary) {
    /**
     * @internal
     */
    InferenceSchedulerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InferenceSchedulerSummary = exports.InferenceSchedulerSummary || (exports.InferenceSchedulerSummary = {}));
var ListInferenceSchedulersResponse;
(function (ListInferenceSchedulersResponse) {
    /**
     * @internal
     */
    ListInferenceSchedulersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInferenceSchedulersResponse = exports.ListInferenceSchedulersResponse || (exports.ListInferenceSchedulersResponse = {}));
var ListModelsRequest;
(function (ListModelsRequest) {
    /**
     * @internal
     */
    ListModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsRequest = exports.ListModelsRequest || (exports.ListModelsRequest = {}));
var ModelSummary;
(function (ModelSummary) {
    /**
     * @internal
     */
    ModelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelSummary = exports.ModelSummary || (exports.ModelSummary = {}));
var ListModelsResponse;
(function (ListModelsResponse) {
    /**
     * @internal
     */
    ListModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsResponse = exports.ListModelsResponse || (exports.ListModelsResponse = {}));
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
var StartDataIngestionJobRequest;
(function (StartDataIngestionJobRequest) {
    /**
     * @internal
     */
    StartDataIngestionJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDataIngestionJobRequest = exports.StartDataIngestionJobRequest || (exports.StartDataIngestionJobRequest = {}));
var StartDataIngestionJobResponse;
(function (StartDataIngestionJobResponse) {
    /**
     * @internal
     */
    StartDataIngestionJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartDataIngestionJobResponse = exports.StartDataIngestionJobResponse || (exports.StartDataIngestionJobResponse = {}));
var StartInferenceSchedulerRequest;
(function (StartInferenceSchedulerRequest) {
    /**
     * @internal
     */
    StartInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInferenceSchedulerRequest = exports.StartInferenceSchedulerRequest || (exports.StartInferenceSchedulerRequest = {}));
var StartInferenceSchedulerResponse;
(function (StartInferenceSchedulerResponse) {
    /**
     * @internal
     */
    StartInferenceSchedulerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartInferenceSchedulerResponse = exports.StartInferenceSchedulerResponse || (exports.StartInferenceSchedulerResponse = {}));
var StopInferenceSchedulerRequest;
(function (StopInferenceSchedulerRequest) {
    /**
     * @internal
     */
    StopInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInferenceSchedulerRequest = exports.StopInferenceSchedulerRequest || (exports.StopInferenceSchedulerRequest = {}));
var StopInferenceSchedulerResponse;
(function (StopInferenceSchedulerResponse) {
    /**
     * @internal
     */
    StopInferenceSchedulerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopInferenceSchedulerResponse = exports.StopInferenceSchedulerResponse || (exports.StopInferenceSchedulerResponse = {}));
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
var UpdateInferenceSchedulerRequest;
(function (UpdateInferenceSchedulerRequest) {
    /**
     * @internal
     */
    UpdateInferenceSchedulerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateInferenceSchedulerRequest = exports.UpdateInferenceSchedulerRequest || (exports.UpdateInferenceSchedulerRequest = {}));
//# sourceMappingURL=models_0.js.map