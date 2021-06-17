"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModelsRequest = exports.ListDatasetEntriesResponse = exports.ListDatasetEntriesRequest = exports.DetectAnomaliesResponse = exports.DetectAnomalyResult = exports.ImageSource = exports.DetectAnomaliesRequest = exports.DescribeProjectResponse = exports.ProjectDescription = exports.DescribeProjectRequest = exports.DescribeModelResponse = exports.ModelDescription = exports.OutputS3Object = exports.DescribeModelRequest = exports.DescribeDatasetResponse = exports.DescribeDatasetRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.DeleteModelResponse = exports.DeleteModelRequest = exports.DeleteDatasetResponse = exports.DeleteDatasetRequest = exports.DatasetDescription = exports.DatasetImageStats = exports.CreateProjectResponse = exports.ProjectMetadata = exports.CreateProjectRequest = exports.CreateModelResponse = exports.ModelMetadata = exports.ModelStatus = exports.ModelPerformance = exports.CreateModelRequest = exports.Tag = exports.OutputConfig = exports.S3Location = exports.ValidationException = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.CreateDatasetResponse = exports.DatasetMetadata = exports.DatasetStatus = exports.CreateDatasetRequest = exports.DatasetSource = exports.DatasetGroundTruthManifest = exports.InputS3Object = exports.ConflictException = exports.ResourceType = exports.AccessDeniedException = void 0;
exports.UpdateDatasetEntriesResponse = exports.UpdateDatasetEntriesRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopModelResponse = exports.StopModelRequest = exports.StartModelResponse = exports.ModelHostingStatus = exports.StartModelRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListProjectsResponse = exports.ListProjectsRequest = exports.ListModelsResponse = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["DATASET"] = "DATASET";
    ResourceType["MODEL"] = "MODEL";
    ResourceType["PROJECT"] = "PROJECT";
    ResourceType["TRIAL"] = "TRIAL";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var InputS3Object;
(function (InputS3Object) {
    /**
     * @internal
     */
    InputS3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputS3Object = exports.InputS3Object || (exports.InputS3Object = {}));
var DatasetGroundTruthManifest;
(function (DatasetGroundTruthManifest) {
    /**
     * @internal
     */
    DatasetGroundTruthManifest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetGroundTruthManifest = exports.DatasetGroundTruthManifest || (exports.DatasetGroundTruthManifest = {}));
var DatasetSource;
(function (DatasetSource) {
    /**
     * @internal
     */
    DatasetSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSource = exports.DatasetSource || (exports.DatasetSource = {}));
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
    DatasetStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
    DatasetStatus["CREATE_FAILED"] = "CREATE_FAILED";
    DatasetStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
    DatasetStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
    DatasetStatus["DELETE_FAILED"] = "DELETE_FAILED";
    DatasetStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
    DatasetStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
    DatasetStatus["UPDATE_FAILED_ROLLBACK_COMPLETE"] = "UPDATE_FAILED_ROLLBACK_COMPLETE";
    DatasetStatus["UPDATE_FAILED_ROLLBACK_IN_PROGRESS"] = "UPDATE_FAILED_ROLLBACK_IN_PROGRESS";
    DatasetStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})(DatasetStatus = exports.DatasetStatus || (exports.DatasetStatus = {}));
var DatasetMetadata;
(function (DatasetMetadata) {
    /**
     * @internal
     */
    DatasetMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetMetadata = exports.DatasetMetadata || (exports.DatasetMetadata = {}));
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
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
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
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputConfig = exports.OutputConfig || (exports.OutputConfig = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelRequest = exports.CreateModelRequest || (exports.CreateModelRequest = {}));
var ModelPerformance;
(function (ModelPerformance) {
    /**
     * @internal
     */
    ModelPerformance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelPerformance = exports.ModelPerformance || (exports.ModelPerformance = {}));
var ModelStatus;
(function (ModelStatus) {
    ModelStatus["DELETING"] = "DELETING";
    ModelStatus["HOSTED"] = "HOSTED";
    ModelStatus["HOSTING_FAILED"] = "HOSTING_FAILED";
    ModelStatus["STARTING_HOSTING"] = "STARTING_HOSTING";
    ModelStatus["STOPPING_HOSTING"] = "STOPPING_HOSTING";
    ModelStatus["SYSTEM_UPDATING"] = "SYSTEM_UPDATING";
    ModelStatus["TRAINED"] = "TRAINED";
    ModelStatus["TRAINING"] = "TRAINING";
    ModelStatus["TRAINING_FAILED"] = "TRAINING_FAILED";
})(ModelStatus = exports.ModelStatus || (exports.ModelStatus = {}));
var ModelMetadata;
(function (ModelMetadata) {
    /**
     * @internal
     */
    ModelMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelMetadata = exports.ModelMetadata || (exports.ModelMetadata = {}));
var CreateModelResponse;
(function (CreateModelResponse) {
    /**
     * @internal
     */
    CreateModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateModelResponse = exports.CreateModelResponse || (exports.CreateModelResponse = {}));
var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectRequest = exports.CreateProjectRequest || (exports.CreateProjectRequest = {}));
var ProjectMetadata;
(function (ProjectMetadata) {
    /**
     * @internal
     */
    ProjectMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectMetadata = exports.ProjectMetadata || (exports.ProjectMetadata = {}));
var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateProjectResponse = exports.CreateProjectResponse || (exports.CreateProjectResponse = {}));
var DatasetImageStats;
(function (DatasetImageStats) {
    /**
     * @internal
     */
    DatasetImageStats.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetImageStats = exports.DatasetImageStats || (exports.DatasetImageStats = {}));
var DatasetDescription;
(function (DatasetDescription) {
    /**
     * @internal
     */
    DatasetDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetDescription = exports.DatasetDescription || (exports.DatasetDescription = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteDatasetResponse;
(function (DeleteDatasetResponse) {
    /**
     * @internal
     */
    DeleteDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetResponse = exports.DeleteDatasetResponse || (exports.DeleteDatasetResponse = {}));
var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelRequest = exports.DeleteModelRequest || (exports.DeleteModelRequest = {}));
var DeleteModelResponse;
(function (DeleteModelResponse) {
    /**
     * @internal
     */
    DeleteModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteModelResponse = exports.DeleteModelResponse || (exports.DeleteModelResponse = {}));
var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectRequest = exports.DeleteProjectRequest || (exports.DeleteProjectRequest = {}));
var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteProjectResponse = exports.DeleteProjectResponse || (exports.DeleteProjectResponse = {}));
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
var DescribeModelRequest;
(function (DescribeModelRequest) {
    /**
     * @internal
     */
    DescribeModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelRequest = exports.DescribeModelRequest || (exports.DescribeModelRequest = {}));
var OutputS3Object;
(function (OutputS3Object) {
    /**
     * @internal
     */
    OutputS3Object.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputS3Object = exports.OutputS3Object || (exports.OutputS3Object = {}));
var ModelDescription;
(function (ModelDescription) {
    /**
     * @internal
     */
    ModelDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModelDescription = exports.ModelDescription || (exports.ModelDescription = {}));
var DescribeModelResponse;
(function (DescribeModelResponse) {
    /**
     * @internal
     */
    DescribeModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeModelResponse = exports.DescribeModelResponse || (exports.DescribeModelResponse = {}));
var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectRequest = exports.DescribeProjectRequest || (exports.DescribeProjectRequest = {}));
var ProjectDescription;
(function (ProjectDescription) {
    /**
     * @internal
     */
    ProjectDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProjectDescription = exports.ProjectDescription || (exports.ProjectDescription = {}));
var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeProjectResponse = exports.DescribeProjectResponse || (exports.DescribeProjectResponse = {}));
var DetectAnomaliesRequest;
(function (DetectAnomaliesRequest) {
    /**
     * @internal
     */
    DetectAnomaliesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectAnomaliesRequest = exports.DetectAnomaliesRequest || (exports.DetectAnomaliesRequest = {}));
var ImageSource;
(function (ImageSource) {
    /**
     * @internal
     */
    ImageSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ImageSource = exports.ImageSource || (exports.ImageSource = {}));
var DetectAnomalyResult;
(function (DetectAnomalyResult) {
    /**
     * @internal
     */
    DetectAnomalyResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectAnomalyResult = exports.DetectAnomalyResult || (exports.DetectAnomalyResult = {}));
var DetectAnomaliesResponse;
(function (DetectAnomaliesResponse) {
    /**
     * @internal
     */
    DetectAnomaliesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DetectAnomaliesResponse = exports.DetectAnomaliesResponse || (exports.DetectAnomaliesResponse = {}));
var ListDatasetEntriesRequest;
(function (ListDatasetEntriesRequest) {
    /**
     * @internal
     */
    ListDatasetEntriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetEntriesRequest = exports.ListDatasetEntriesRequest || (exports.ListDatasetEntriesRequest = {}));
var ListDatasetEntriesResponse;
(function (ListDatasetEntriesResponse) {
    /**
     * @internal
     */
    ListDatasetEntriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetEntriesResponse = exports.ListDatasetEntriesResponse || (exports.ListDatasetEntriesResponse = {}));
var ListModelsRequest;
(function (ListModelsRequest) {
    /**
     * @internal
     */
    ListModelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsRequest = exports.ListModelsRequest || (exports.ListModelsRequest = {}));
var ListModelsResponse;
(function (ListModelsResponse) {
    /**
     * @internal
     */
    ListModelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListModelsResponse = exports.ListModelsResponse || (exports.ListModelsResponse = {}));
var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsRequest = exports.ListProjectsRequest || (exports.ListProjectsRequest = {}));
var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListProjectsResponse = exports.ListProjectsResponse || (exports.ListProjectsResponse = {}));
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
var StartModelRequest;
(function (StartModelRequest) {
    /**
     * @internal
     */
    StartModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartModelRequest = exports.StartModelRequest || (exports.StartModelRequest = {}));
var ModelHostingStatus;
(function (ModelHostingStatus) {
    ModelHostingStatus["HOSTED"] = "HOSTED";
    ModelHostingStatus["HOSTING_FAILED"] = "HOSTING_FAILED";
    ModelHostingStatus["STARTING_HOSTING"] = "STARTING_HOSTING";
    ModelHostingStatus["STOPPING_HOSTING"] = "STOPPING_HOSTING";
    ModelHostingStatus["SYSTEM_UPDATING"] = "SYSTEM_UPDATING";
})(ModelHostingStatus = exports.ModelHostingStatus || (exports.ModelHostingStatus = {}));
var StartModelResponse;
(function (StartModelResponse) {
    /**
     * @internal
     */
    StartModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartModelResponse = exports.StartModelResponse || (exports.StartModelResponse = {}));
var StopModelRequest;
(function (StopModelRequest) {
    /**
     * @internal
     */
    StopModelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopModelRequest = exports.StopModelRequest || (exports.StopModelRequest = {}));
var StopModelResponse;
(function (StopModelResponse) {
    /**
     * @internal
     */
    StopModelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopModelResponse = exports.StopModelResponse || (exports.StopModelResponse = {}));
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
var UpdateDatasetEntriesRequest;
(function (UpdateDatasetEntriesRequest) {
    /**
     * @internal
     */
    UpdateDatasetEntriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetEntriesRequest = exports.UpdateDatasetEntriesRequest || (exports.UpdateDatasetEntriesRequest = {}));
var UpdateDatasetEntriesResponse;
(function (UpdateDatasetEntriesResponse) {
    /**
     * @internal
     */
    UpdateDatasetEntriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetEntriesResponse = exports.UpdateDatasetEntriesResponse || (exports.UpdateDatasetEntriesResponse = {}));
//# sourceMappingURL=models_0.js.map