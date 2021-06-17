import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["DATASET"] = "DATASET";
    ResourceType["MODEL"] = "MODEL";
    ResourceType["PROJECT"] = "PROJECT";
    ResourceType["TRIAL"] = "TRIAL";
})(ResourceType || (ResourceType = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var InputS3Object;
(function (InputS3Object) {
    /**
     * @internal
     */
    InputS3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputS3Object || (InputS3Object = {}));
export var DatasetGroundTruthManifest;
(function (DatasetGroundTruthManifest) {
    /**
     * @internal
     */
    DatasetGroundTruthManifest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetGroundTruthManifest || (DatasetGroundTruthManifest = {}));
export var DatasetSource;
(function (DatasetSource) {
    /**
     * @internal
     */
    DatasetSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetSource || (DatasetSource = {}));
export var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetRequest || (CreateDatasetRequest = {}));
export var DatasetStatus;
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
})(DatasetStatus || (DatasetStatus = {}));
export var DatasetMetadata;
(function (DatasetMetadata) {
    /**
     * @internal
     */
    DatasetMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetMetadata || (DatasetMetadata = {}));
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
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
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
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var OutputConfig;
(function (OutputConfig) {
    /**
     * @internal
     */
    OutputConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputConfig || (OutputConfig = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateModelRequest;
(function (CreateModelRequest) {
    /**
     * @internal
     */
    CreateModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelRequest || (CreateModelRequest = {}));
export var ModelPerformance;
(function (ModelPerformance) {
    /**
     * @internal
     */
    ModelPerformance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelPerformance || (ModelPerformance = {}));
export var ModelStatus;
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
})(ModelStatus || (ModelStatus = {}));
export var ModelMetadata;
(function (ModelMetadata) {
    /**
     * @internal
     */
    ModelMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelMetadata || (ModelMetadata = {}));
export var CreateModelResponse;
(function (CreateModelResponse) {
    /**
     * @internal
     */
    CreateModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateModelResponse || (CreateModelResponse = {}));
export var CreateProjectRequest;
(function (CreateProjectRequest) {
    /**
     * @internal
     */
    CreateProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectRequest || (CreateProjectRequest = {}));
export var ProjectMetadata;
(function (ProjectMetadata) {
    /**
     * @internal
     */
    ProjectMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectMetadata || (ProjectMetadata = {}));
export var CreateProjectResponse;
(function (CreateProjectResponse) {
    /**
     * @internal
     */
    CreateProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateProjectResponse || (CreateProjectResponse = {}));
export var DatasetImageStats;
(function (DatasetImageStats) {
    /**
     * @internal
     */
    DatasetImageStats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetImageStats || (DatasetImageStats = {}));
export var DatasetDescription;
(function (DatasetDescription) {
    /**
     * @internal
     */
    DatasetDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetDescription || (DatasetDescription = {}));
export var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetRequest || (DeleteDatasetRequest = {}));
export var DeleteDatasetResponse;
(function (DeleteDatasetResponse) {
    /**
     * @internal
     */
    DeleteDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetResponse || (DeleteDatasetResponse = {}));
export var DeleteModelRequest;
(function (DeleteModelRequest) {
    /**
     * @internal
     */
    DeleteModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelRequest || (DeleteModelRequest = {}));
export var DeleteModelResponse;
(function (DeleteModelResponse) {
    /**
     * @internal
     */
    DeleteModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteModelResponse || (DeleteModelResponse = {}));
export var DeleteProjectRequest;
(function (DeleteProjectRequest) {
    /**
     * @internal
     */
    DeleteProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectRequest || (DeleteProjectRequest = {}));
export var DeleteProjectResponse;
(function (DeleteProjectResponse) {
    /**
     * @internal
     */
    DeleteProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteProjectResponse || (DeleteProjectResponse = {}));
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
export var DescribeModelRequest;
(function (DescribeModelRequest) {
    /**
     * @internal
     */
    DescribeModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelRequest || (DescribeModelRequest = {}));
export var OutputS3Object;
(function (OutputS3Object) {
    /**
     * @internal
     */
    OutputS3Object.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputS3Object || (OutputS3Object = {}));
export var ModelDescription;
(function (ModelDescription) {
    /**
     * @internal
     */
    ModelDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModelDescription || (ModelDescription = {}));
export var DescribeModelResponse;
(function (DescribeModelResponse) {
    /**
     * @internal
     */
    DescribeModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeModelResponse || (DescribeModelResponse = {}));
export var DescribeProjectRequest;
(function (DescribeProjectRequest) {
    /**
     * @internal
     */
    DescribeProjectRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectRequest || (DescribeProjectRequest = {}));
export var ProjectDescription;
(function (ProjectDescription) {
    /**
     * @internal
     */
    ProjectDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProjectDescription || (ProjectDescription = {}));
export var DescribeProjectResponse;
(function (DescribeProjectResponse) {
    /**
     * @internal
     */
    DescribeProjectResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeProjectResponse || (DescribeProjectResponse = {}));
export var DetectAnomaliesRequest;
(function (DetectAnomaliesRequest) {
    /**
     * @internal
     */
    DetectAnomaliesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectAnomaliesRequest || (DetectAnomaliesRequest = {}));
export var ImageSource;
(function (ImageSource) {
    /**
     * @internal
     */
    ImageSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ImageSource || (ImageSource = {}));
export var DetectAnomalyResult;
(function (DetectAnomalyResult) {
    /**
     * @internal
     */
    DetectAnomalyResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectAnomalyResult || (DetectAnomalyResult = {}));
export var DetectAnomaliesResponse;
(function (DetectAnomaliesResponse) {
    /**
     * @internal
     */
    DetectAnomaliesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DetectAnomaliesResponse || (DetectAnomaliesResponse = {}));
export var ListDatasetEntriesRequest;
(function (ListDatasetEntriesRequest) {
    /**
     * @internal
     */
    ListDatasetEntriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetEntriesRequest || (ListDatasetEntriesRequest = {}));
export var ListDatasetEntriesResponse;
(function (ListDatasetEntriesResponse) {
    /**
     * @internal
     */
    ListDatasetEntriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetEntriesResponse || (ListDatasetEntriesResponse = {}));
export var ListModelsRequest;
(function (ListModelsRequest) {
    /**
     * @internal
     */
    ListModelsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListModelsRequest || (ListModelsRequest = {}));
export var ListModelsResponse;
(function (ListModelsResponse) {
    /**
     * @internal
     */
    ListModelsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListModelsResponse || (ListModelsResponse = {}));
export var ListProjectsRequest;
(function (ListProjectsRequest) {
    /**
     * @internal
     */
    ListProjectsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsRequest || (ListProjectsRequest = {}));
export var ListProjectsResponse;
(function (ListProjectsResponse) {
    /**
     * @internal
     */
    ListProjectsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListProjectsResponse || (ListProjectsResponse = {}));
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
export var StartModelRequest;
(function (StartModelRequest) {
    /**
     * @internal
     */
    StartModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartModelRequest || (StartModelRequest = {}));
export var ModelHostingStatus;
(function (ModelHostingStatus) {
    ModelHostingStatus["HOSTED"] = "HOSTED";
    ModelHostingStatus["HOSTING_FAILED"] = "HOSTING_FAILED";
    ModelHostingStatus["STARTING_HOSTING"] = "STARTING_HOSTING";
    ModelHostingStatus["STOPPING_HOSTING"] = "STOPPING_HOSTING";
    ModelHostingStatus["SYSTEM_UPDATING"] = "SYSTEM_UPDATING";
})(ModelHostingStatus || (ModelHostingStatus = {}));
export var StartModelResponse;
(function (StartModelResponse) {
    /**
     * @internal
     */
    StartModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartModelResponse || (StartModelResponse = {}));
export var StopModelRequest;
(function (StopModelRequest) {
    /**
     * @internal
     */
    StopModelRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopModelRequest || (StopModelRequest = {}));
export var StopModelResponse;
(function (StopModelResponse) {
    /**
     * @internal
     */
    StopModelResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopModelResponse || (StopModelResponse = {}));
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
export var UpdateDatasetEntriesRequest;
(function (UpdateDatasetEntriesRequest) {
    /**
     * @internal
     */
    UpdateDatasetEntriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetEntriesRequest || (UpdateDatasetEntriesRequest = {}));
export var UpdateDatasetEntriesResponse;
(function (UpdateDatasetEntriesResponse) {
    /**
     * @internal
     */
    UpdateDatasetEntriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetEntriesResponse || (UpdateDatasetEntriesResponse = {}));
//# sourceMappingURL=models_0.js.map