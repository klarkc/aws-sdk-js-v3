"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSolutionResponse = exports.CreateSolutionRequest = exports.SolutionConfig = exports.OptimizationObjective = exports.ObjectiveSensitivity = exports.HPOConfig = exports.HPOResourceConfig = exports.HPOObjective = exports.HyperParameterRanges = exports.IntegerHyperParameterRange = exports.ContinuousHyperParameterRange = exports.CategoricalHyperParameterRange = exports.AutoMLConfig = exports.CreateSchemaResponse = exports.CreateSchemaRequest = exports.CreateFilterResponse = exports.CreateFilterRequest = exports.CreateEventTrackerResponse = exports.CreateEventTrackerRequest = exports.CreateDatasetImportJobResponse = exports.CreateDatasetImportJobRequest = exports.DataSource = exports.CreateDatasetGroupResponse = exports.CreateDatasetGroupRequest = exports.CreateDatasetExportJobResponse = exports.CreateDatasetExportJobRequest = exports.DatasetExportJobOutput = exports.IngestionMode = exports.CreateDatasetResponse = exports.CreateDatasetRequest = exports.CreateCampaignResponse = exports.CreateCampaignRequest = exports.CampaignConfig = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.InvalidInputException = exports.CreateBatchInferenceJobResponse = exports.CreateBatchInferenceJobRequest = exports.BatchInferenceJobOutput = exports.BatchInferenceJobInput = exports.S3DataConfig = exports.BatchInferenceJobConfig = exports.Algorithm = exports.DefaultHyperParameterRanges = exports.DefaultIntegerHyperParameterRange = exports.DefaultContinuousHyperParameterRange = exports.DefaultCategoricalHyperParameterRange = exports.AlgorithmImage = void 0;
exports.Solution = exports.SolutionVersionSummary = exports.AutoMLResult = exports.DescribeSolutionRequest = exports.DescribeSchemaResponse = exports.DatasetSchema = exports.DescribeSchemaRequest = exports.DescribeRecipeResponse = exports.Recipe = exports.DescribeRecipeRequest = exports.DescribeFilterResponse = exports.Filter = exports.DescribeFilterRequest = exports.DescribeFeatureTransformationResponse = exports.FeatureTransformation = exports.DescribeFeatureTransformationRequest = exports.DescribeEventTrackerResponse = exports.EventTracker = exports.DescribeEventTrackerRequest = exports.DescribeDatasetImportJobResponse = exports.DatasetImportJob = exports.DescribeDatasetImportJobRequest = exports.DescribeDatasetGroupResponse = exports.DatasetGroup = exports.DescribeDatasetGroupRequest = exports.DescribeDatasetExportJobResponse = exports.DatasetExportJob = exports.DescribeDatasetExportJobRequest = exports.DescribeDatasetResponse = exports.Dataset = exports.DescribeDatasetRequest = exports.DescribeCampaignResponse = exports.Campaign = exports.CampaignUpdateSummary = exports.DescribeCampaignRequest = exports.DescribeBatchInferenceJobResponse = exports.BatchInferenceJob = exports.DescribeBatchInferenceJobRequest = exports.DescribeAlgorithmResponse = exports.DescribeAlgorithmRequest = exports.DeleteSolutionRequest = exports.DeleteSchemaRequest = exports.DeleteFilterRequest = exports.DeleteEventTrackerRequest = exports.DeleteDatasetGroupRequest = exports.DeleteDatasetRequest = exports.DeleteCampaignRequest = exports.CreateSolutionVersionResponse = exports.CreateSolutionVersionRequest = exports.TrainingMode = void 0;
exports.UpdateCampaignResponse = exports.UpdateCampaignRequest = exports.StopSolutionVersionCreationRequest = exports.ListSolutionVersionsResponse = exports.ListSolutionVersionsRequest = exports.ListSolutionsResponse = exports.SolutionSummary = exports.ListSolutionsRequest = exports.ListSchemasResponse = exports.DatasetSchemaSummary = exports.ListSchemasRequest = exports.ListRecipesResponse = exports.RecipeSummary = exports.ListRecipesRequest = exports.RecipeProvider = exports.ListFiltersResponse = exports.FilterSummary = exports.ListFiltersRequest = exports.ListEventTrackersResponse = exports.EventTrackerSummary = exports.ListEventTrackersRequest = exports.ListDatasetsResponse = exports.DatasetSummary = exports.ListDatasetsRequest = exports.ListDatasetImportJobsResponse = exports.DatasetImportJobSummary = exports.ListDatasetImportJobsRequest = exports.ListDatasetGroupsResponse = exports.DatasetGroupSummary = exports.ListDatasetGroupsRequest = exports.ListDatasetExportJobsResponse = exports.DatasetExportJobSummary = exports.ListDatasetExportJobsRequest = exports.ListCampaignsResponse = exports.CampaignSummary = exports.ListCampaignsRequest = exports.ListBatchInferenceJobsResponse = exports.BatchInferenceJobSummary = exports.ListBatchInferenceJobsRequest = exports.InvalidNextTokenException = exports.GetSolutionMetricsResponse = exports.GetSolutionMetricsRequest = exports.DescribeSolutionVersionResponse = exports.SolutionVersion = exports.TunedHPOParams = exports.DescribeSolutionVersionRequest = exports.DescribeSolutionResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AlgorithmImage;
(function (AlgorithmImage) {
    /**
     * @internal
     */
    AlgorithmImage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlgorithmImage = exports.AlgorithmImage || (exports.AlgorithmImage = {}));
var DefaultCategoricalHyperParameterRange;
(function (DefaultCategoricalHyperParameterRange) {
    /**
     * @internal
     */
    DefaultCategoricalHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultCategoricalHyperParameterRange = exports.DefaultCategoricalHyperParameterRange || (exports.DefaultCategoricalHyperParameterRange = {}));
var DefaultContinuousHyperParameterRange;
(function (DefaultContinuousHyperParameterRange) {
    /**
     * @internal
     */
    DefaultContinuousHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultContinuousHyperParameterRange = exports.DefaultContinuousHyperParameterRange || (exports.DefaultContinuousHyperParameterRange = {}));
var DefaultIntegerHyperParameterRange;
(function (DefaultIntegerHyperParameterRange) {
    /**
     * @internal
     */
    DefaultIntegerHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultIntegerHyperParameterRange = exports.DefaultIntegerHyperParameterRange || (exports.DefaultIntegerHyperParameterRange = {}));
var DefaultHyperParameterRanges;
(function (DefaultHyperParameterRanges) {
    /**
     * @internal
     */
    DefaultHyperParameterRanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultHyperParameterRanges = exports.DefaultHyperParameterRanges || (exports.DefaultHyperParameterRanges = {}));
var Algorithm;
(function (Algorithm) {
    /**
     * @internal
     */
    Algorithm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Algorithm = exports.Algorithm || (exports.Algorithm = {}));
var BatchInferenceJobConfig;
(function (BatchInferenceJobConfig) {
    /**
     * @internal
     */
    BatchInferenceJobConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchInferenceJobConfig = exports.BatchInferenceJobConfig || (exports.BatchInferenceJobConfig = {}));
var S3DataConfig;
(function (S3DataConfig) {
    /**
     * @internal
     */
    S3DataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3DataConfig = exports.S3DataConfig || (exports.S3DataConfig = {}));
var BatchInferenceJobInput;
(function (BatchInferenceJobInput) {
    /**
     * @internal
     */
    BatchInferenceJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchInferenceJobInput = exports.BatchInferenceJobInput || (exports.BatchInferenceJobInput = {}));
var BatchInferenceJobOutput;
(function (BatchInferenceJobOutput) {
    /**
     * @internal
     */
    BatchInferenceJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchInferenceJobOutput = exports.BatchInferenceJobOutput || (exports.BatchInferenceJobOutput = {}));
var CreateBatchInferenceJobRequest;
(function (CreateBatchInferenceJobRequest) {
    /**
     * @internal
     */
    CreateBatchInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchInferenceJobRequest = exports.CreateBatchInferenceJobRequest || (exports.CreateBatchInferenceJobRequest = {}));
var CreateBatchInferenceJobResponse;
(function (CreateBatchInferenceJobResponse) {
    /**
     * @internal
     */
    CreateBatchInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBatchInferenceJobResponse = exports.CreateBatchInferenceJobResponse || (exports.CreateBatchInferenceJobResponse = {}));
var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidInputException = exports.InvalidInputException || (exports.InvalidInputException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
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
var CampaignConfig;
(function (CampaignConfig) {
    /**
     * @internal
     */
    CampaignConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignConfig = exports.CampaignConfig || (exports.CampaignConfig = {}));
var CreateCampaignRequest;
(function (CreateCampaignRequest) {
    /**
     * @internal
     */
    CreateCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCampaignRequest = exports.CreateCampaignRequest || (exports.CreateCampaignRequest = {}));
var CreateCampaignResponse;
(function (CreateCampaignResponse) {
    /**
     * @internal
     */
    CreateCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCampaignResponse = exports.CreateCampaignResponse || (exports.CreateCampaignResponse = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetRequest = exports.CreateDatasetRequest || (exports.CreateDatasetRequest = {}));
var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetResponse = exports.CreateDatasetResponse || (exports.CreateDatasetResponse = {}));
var IngestionMode;
(function (IngestionMode) {
    IngestionMode["ALL"] = "ALL";
    IngestionMode["BULK"] = "BULK";
    IngestionMode["PUT"] = "PUT";
})(IngestionMode = exports.IngestionMode || (exports.IngestionMode = {}));
var DatasetExportJobOutput;
(function (DatasetExportJobOutput) {
    /**
     * @internal
     */
    DatasetExportJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetExportJobOutput = exports.DatasetExportJobOutput || (exports.DatasetExportJobOutput = {}));
var CreateDatasetExportJobRequest;
(function (CreateDatasetExportJobRequest) {
    /**
     * @internal
     */
    CreateDatasetExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetExportJobRequest = exports.CreateDatasetExportJobRequest || (exports.CreateDatasetExportJobRequest = {}));
var CreateDatasetExportJobResponse;
(function (CreateDatasetExportJobResponse) {
    /**
     * @internal
     */
    CreateDatasetExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetExportJobResponse = exports.CreateDatasetExportJobResponse || (exports.CreateDatasetExportJobResponse = {}));
var CreateDatasetGroupRequest;
(function (CreateDatasetGroupRequest) {
    /**
     * @internal
     */
    CreateDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetGroupRequest = exports.CreateDatasetGroupRequest || (exports.CreateDatasetGroupRequest = {}));
var CreateDatasetGroupResponse;
(function (CreateDatasetGroupResponse) {
    /**
     * @internal
     */
    CreateDatasetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetGroupResponse = exports.CreateDatasetGroupResponse || (exports.CreateDatasetGroupResponse = {}));
var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataSource = exports.DataSource || (exports.DataSource = {}));
var CreateDatasetImportJobRequest;
(function (CreateDatasetImportJobRequest) {
    /**
     * @internal
     */
    CreateDatasetImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetImportJobRequest = exports.CreateDatasetImportJobRequest || (exports.CreateDatasetImportJobRequest = {}));
var CreateDatasetImportJobResponse;
(function (CreateDatasetImportJobResponse) {
    /**
     * @internal
     */
    CreateDatasetImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateDatasetImportJobResponse = exports.CreateDatasetImportJobResponse || (exports.CreateDatasetImportJobResponse = {}));
var CreateEventTrackerRequest;
(function (CreateEventTrackerRequest) {
    /**
     * @internal
     */
    CreateEventTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventTrackerRequest = exports.CreateEventTrackerRequest || (exports.CreateEventTrackerRequest = {}));
var CreateEventTrackerResponse;
(function (CreateEventTrackerResponse) {
    /**
     * @internal
     */
    CreateEventTrackerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventTrackerResponse = exports.CreateEventTrackerResponse || (exports.CreateEventTrackerResponse = {}));
var CreateFilterRequest;
(function (CreateFilterRequest) {
    /**
     * @internal
     */
    CreateFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filterExpression && { filterExpression: smithy_client_1.SENSITIVE_STRING }),
    });
})(CreateFilterRequest = exports.CreateFilterRequest || (exports.CreateFilterRequest = {}));
var CreateFilterResponse;
(function (CreateFilterResponse) {
    /**
     * @internal
     */
    CreateFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateFilterResponse = exports.CreateFilterResponse || (exports.CreateFilterResponse = {}));
var CreateSchemaRequest;
(function (CreateSchemaRequest) {
    /**
     * @internal
     */
    CreateSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaRequest = exports.CreateSchemaRequest || (exports.CreateSchemaRequest = {}));
var CreateSchemaResponse;
(function (CreateSchemaResponse) {
    /**
     * @internal
     */
    CreateSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSchemaResponse = exports.CreateSchemaResponse || (exports.CreateSchemaResponse = {}));
var AutoMLConfig;
(function (AutoMLConfig) {
    /**
     * @internal
     */
    AutoMLConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLConfig = exports.AutoMLConfig || (exports.AutoMLConfig = {}));
var CategoricalHyperParameterRange;
(function (CategoricalHyperParameterRange) {
    /**
     * @internal
     */
    CategoricalHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CategoricalHyperParameterRange = exports.CategoricalHyperParameterRange || (exports.CategoricalHyperParameterRange = {}));
var ContinuousHyperParameterRange;
(function (ContinuousHyperParameterRange) {
    /**
     * @internal
     */
    ContinuousHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousHyperParameterRange = exports.ContinuousHyperParameterRange || (exports.ContinuousHyperParameterRange = {}));
var IntegerHyperParameterRange;
(function (IntegerHyperParameterRange) {
    /**
     * @internal
     */
    IntegerHyperParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegerHyperParameterRange = exports.IntegerHyperParameterRange || (exports.IntegerHyperParameterRange = {}));
var HyperParameterRanges;
(function (HyperParameterRanges) {
    /**
     * @internal
     */
    HyperParameterRanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterRanges = exports.HyperParameterRanges || (exports.HyperParameterRanges = {}));
var HPOObjective;
(function (HPOObjective) {
    /**
     * @internal
     */
    HPOObjective.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HPOObjective = exports.HPOObjective || (exports.HPOObjective = {}));
var HPOResourceConfig;
(function (HPOResourceConfig) {
    /**
     * @internal
     */
    HPOResourceConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HPOResourceConfig = exports.HPOResourceConfig || (exports.HPOResourceConfig = {}));
var HPOConfig;
(function (HPOConfig) {
    /**
     * @internal
     */
    HPOConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HPOConfig = exports.HPOConfig || (exports.HPOConfig = {}));
var ObjectiveSensitivity;
(function (ObjectiveSensitivity) {
    ObjectiveSensitivity["HIGH"] = "HIGH";
    ObjectiveSensitivity["LOW"] = "LOW";
    ObjectiveSensitivity["MEDIUM"] = "MEDIUM";
    ObjectiveSensitivity["OFF"] = "OFF";
})(ObjectiveSensitivity = exports.ObjectiveSensitivity || (exports.ObjectiveSensitivity = {}));
var OptimizationObjective;
(function (OptimizationObjective) {
    /**
     * @internal
     */
    OptimizationObjective.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OptimizationObjective = exports.OptimizationObjective || (exports.OptimizationObjective = {}));
var SolutionConfig;
(function (SolutionConfig) {
    /**
     * @internal
     */
    SolutionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SolutionConfig = exports.SolutionConfig || (exports.SolutionConfig = {}));
var CreateSolutionRequest;
(function (CreateSolutionRequest) {
    /**
     * @internal
     */
    CreateSolutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSolutionRequest = exports.CreateSolutionRequest || (exports.CreateSolutionRequest = {}));
var CreateSolutionResponse;
(function (CreateSolutionResponse) {
    /**
     * @internal
     */
    CreateSolutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSolutionResponse = exports.CreateSolutionResponse || (exports.CreateSolutionResponse = {}));
var TrainingMode;
(function (TrainingMode) {
    TrainingMode["FULL"] = "FULL";
    TrainingMode["UPDATE"] = "UPDATE";
})(TrainingMode = exports.TrainingMode || (exports.TrainingMode = {}));
var CreateSolutionVersionRequest;
(function (CreateSolutionVersionRequest) {
    /**
     * @internal
     */
    CreateSolutionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSolutionVersionRequest = exports.CreateSolutionVersionRequest || (exports.CreateSolutionVersionRequest = {}));
var CreateSolutionVersionResponse;
(function (CreateSolutionVersionResponse) {
    /**
     * @internal
     */
    CreateSolutionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSolutionVersionResponse = exports.CreateSolutionVersionResponse || (exports.CreateSolutionVersionResponse = {}));
var DeleteCampaignRequest;
(function (DeleteCampaignRequest) {
    /**
     * @internal
     */
    DeleteCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCampaignRequest = exports.DeleteCampaignRequest || (exports.DeleteCampaignRequest = {}));
var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetRequest = exports.DeleteDatasetRequest || (exports.DeleteDatasetRequest = {}));
var DeleteDatasetGroupRequest;
(function (DeleteDatasetGroupRequest) {
    /**
     * @internal
     */
    DeleteDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetGroupRequest = exports.DeleteDatasetGroupRequest || (exports.DeleteDatasetGroupRequest = {}));
var DeleteEventTrackerRequest;
(function (DeleteEventTrackerRequest) {
    /**
     * @internal
     */
    DeleteEventTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventTrackerRequest = exports.DeleteEventTrackerRequest || (exports.DeleteEventTrackerRequest = {}));
var DeleteFilterRequest;
(function (DeleteFilterRequest) {
    /**
     * @internal
     */
    DeleteFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFilterRequest = exports.DeleteFilterRequest || (exports.DeleteFilterRequest = {}));
var DeleteSchemaRequest;
(function (DeleteSchemaRequest) {
    /**
     * @internal
     */
    DeleteSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSchemaRequest = exports.DeleteSchemaRequest || (exports.DeleteSchemaRequest = {}));
var DeleteSolutionRequest;
(function (DeleteSolutionRequest) {
    /**
     * @internal
     */
    DeleteSolutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSolutionRequest = exports.DeleteSolutionRequest || (exports.DeleteSolutionRequest = {}));
var DescribeAlgorithmRequest;
(function (DescribeAlgorithmRequest) {
    /**
     * @internal
     */
    DescribeAlgorithmRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlgorithmRequest = exports.DescribeAlgorithmRequest || (exports.DescribeAlgorithmRequest = {}));
var DescribeAlgorithmResponse;
(function (DescribeAlgorithmResponse) {
    /**
     * @internal
     */
    DescribeAlgorithmResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlgorithmResponse = exports.DescribeAlgorithmResponse || (exports.DescribeAlgorithmResponse = {}));
var DescribeBatchInferenceJobRequest;
(function (DescribeBatchInferenceJobRequest) {
    /**
     * @internal
     */
    DescribeBatchInferenceJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBatchInferenceJobRequest = exports.DescribeBatchInferenceJobRequest || (exports.DescribeBatchInferenceJobRequest = {}));
var BatchInferenceJob;
(function (BatchInferenceJob) {
    /**
     * @internal
     */
    BatchInferenceJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchInferenceJob = exports.BatchInferenceJob || (exports.BatchInferenceJob = {}));
var DescribeBatchInferenceJobResponse;
(function (DescribeBatchInferenceJobResponse) {
    /**
     * @internal
     */
    DescribeBatchInferenceJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBatchInferenceJobResponse = exports.DescribeBatchInferenceJobResponse || (exports.DescribeBatchInferenceJobResponse = {}));
var DescribeCampaignRequest;
(function (DescribeCampaignRequest) {
    /**
     * @internal
     */
    DescribeCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCampaignRequest = exports.DescribeCampaignRequest || (exports.DescribeCampaignRequest = {}));
var CampaignUpdateSummary;
(function (CampaignUpdateSummary) {
    /**
     * @internal
     */
    CampaignUpdateSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignUpdateSummary = exports.CampaignUpdateSummary || (exports.CampaignUpdateSummary = {}));
var Campaign;
(function (Campaign) {
    /**
     * @internal
     */
    Campaign.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Campaign = exports.Campaign || (exports.Campaign = {}));
var DescribeCampaignResponse;
(function (DescribeCampaignResponse) {
    /**
     * @internal
     */
    DescribeCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCampaignResponse = exports.DescribeCampaignResponse || (exports.DescribeCampaignResponse = {}));
var DescribeDatasetRequest;
(function (DescribeDatasetRequest) {
    /**
     * @internal
     */
    DescribeDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetRequest = exports.DescribeDatasetRequest || (exports.DescribeDatasetRequest = {}));
var Dataset;
(function (Dataset) {
    /**
     * @internal
     */
    Dataset.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dataset = exports.Dataset || (exports.Dataset = {}));
var DescribeDatasetResponse;
(function (DescribeDatasetResponse) {
    /**
     * @internal
     */
    DescribeDatasetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetResponse = exports.DescribeDatasetResponse || (exports.DescribeDatasetResponse = {}));
var DescribeDatasetExportJobRequest;
(function (DescribeDatasetExportJobRequest) {
    /**
     * @internal
     */
    DescribeDatasetExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetExportJobRequest = exports.DescribeDatasetExportJobRequest || (exports.DescribeDatasetExportJobRequest = {}));
var DatasetExportJob;
(function (DatasetExportJob) {
    /**
     * @internal
     */
    DatasetExportJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetExportJob = exports.DatasetExportJob || (exports.DatasetExportJob = {}));
var DescribeDatasetExportJobResponse;
(function (DescribeDatasetExportJobResponse) {
    /**
     * @internal
     */
    DescribeDatasetExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetExportJobResponse = exports.DescribeDatasetExportJobResponse || (exports.DescribeDatasetExportJobResponse = {}));
var DescribeDatasetGroupRequest;
(function (DescribeDatasetGroupRequest) {
    /**
     * @internal
     */
    DescribeDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetGroupRequest = exports.DescribeDatasetGroupRequest || (exports.DescribeDatasetGroupRequest = {}));
var DatasetGroup;
(function (DatasetGroup) {
    /**
     * @internal
     */
    DatasetGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetGroup = exports.DatasetGroup || (exports.DatasetGroup = {}));
var DescribeDatasetGroupResponse;
(function (DescribeDatasetGroupResponse) {
    /**
     * @internal
     */
    DescribeDatasetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetGroupResponse = exports.DescribeDatasetGroupResponse || (exports.DescribeDatasetGroupResponse = {}));
var DescribeDatasetImportJobRequest;
(function (DescribeDatasetImportJobRequest) {
    /**
     * @internal
     */
    DescribeDatasetImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetImportJobRequest = exports.DescribeDatasetImportJobRequest || (exports.DescribeDatasetImportJobRequest = {}));
var DatasetImportJob;
(function (DatasetImportJob) {
    /**
     * @internal
     */
    DatasetImportJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetImportJob = exports.DatasetImportJob || (exports.DatasetImportJob = {}));
var DescribeDatasetImportJobResponse;
(function (DescribeDatasetImportJobResponse) {
    /**
     * @internal
     */
    DescribeDatasetImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetImportJobResponse = exports.DescribeDatasetImportJobResponse || (exports.DescribeDatasetImportJobResponse = {}));
var DescribeEventTrackerRequest;
(function (DescribeEventTrackerRequest) {
    /**
     * @internal
     */
    DescribeEventTrackerRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTrackerRequest = exports.DescribeEventTrackerRequest || (exports.DescribeEventTrackerRequest = {}));
var EventTracker;
(function (EventTracker) {
    /**
     * @internal
     */
    EventTracker.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTracker = exports.EventTracker || (exports.EventTracker = {}));
var DescribeEventTrackerResponse;
(function (DescribeEventTrackerResponse) {
    /**
     * @internal
     */
    DescribeEventTrackerResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTrackerResponse = exports.DescribeEventTrackerResponse || (exports.DescribeEventTrackerResponse = {}));
var DescribeFeatureTransformationRequest;
(function (DescribeFeatureTransformationRequest) {
    /**
     * @internal
     */
    DescribeFeatureTransformationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeatureTransformationRequest = exports.DescribeFeatureTransformationRequest || (exports.DescribeFeatureTransformationRequest = {}));
var FeatureTransformation;
(function (FeatureTransformation) {
    /**
     * @internal
     */
    FeatureTransformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeatureTransformation = exports.FeatureTransformation || (exports.FeatureTransformation = {}));
var DescribeFeatureTransformationResponse;
(function (DescribeFeatureTransformationResponse) {
    /**
     * @internal
     */
    DescribeFeatureTransformationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeatureTransformationResponse = exports.DescribeFeatureTransformationResponse || (exports.DescribeFeatureTransformationResponse = {}));
var DescribeFilterRequest;
(function (DescribeFilterRequest) {
    /**
     * @internal
     */
    DescribeFilterRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFilterRequest = exports.DescribeFilterRequest || (exports.DescribeFilterRequest = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filterExpression && { filterExpression: smithy_client_1.SENSITIVE_STRING }),
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var DescribeFilterResponse;
(function (DescribeFilterResponse) {
    /**
     * @internal
     */
    DescribeFilterResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.filter && { filter: Filter.filterSensitiveLog(obj.filter) }),
    });
})(DescribeFilterResponse = exports.DescribeFilterResponse || (exports.DescribeFilterResponse = {}));
var DescribeRecipeRequest;
(function (DescribeRecipeRequest) {
    /**
     * @internal
     */
    DescribeRecipeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecipeRequest = exports.DescribeRecipeRequest || (exports.DescribeRecipeRequest = {}));
var Recipe;
(function (Recipe) {
    /**
     * @internal
     */
    Recipe.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recipe = exports.Recipe || (exports.Recipe = {}));
var DescribeRecipeResponse;
(function (DescribeRecipeResponse) {
    /**
     * @internal
     */
    DescribeRecipeResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRecipeResponse = exports.DescribeRecipeResponse || (exports.DescribeRecipeResponse = {}));
var DescribeSchemaRequest;
(function (DescribeSchemaRequest) {
    /**
     * @internal
     */
    DescribeSchemaRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemaRequest = exports.DescribeSchemaRequest || (exports.DescribeSchemaRequest = {}));
var DatasetSchema;
(function (DatasetSchema) {
    /**
     * @internal
     */
    DatasetSchema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSchema = exports.DatasetSchema || (exports.DatasetSchema = {}));
var DescribeSchemaResponse;
(function (DescribeSchemaResponse) {
    /**
     * @internal
     */
    DescribeSchemaResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSchemaResponse = exports.DescribeSchemaResponse || (exports.DescribeSchemaResponse = {}));
var DescribeSolutionRequest;
(function (DescribeSolutionRequest) {
    /**
     * @internal
     */
    DescribeSolutionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSolutionRequest = exports.DescribeSolutionRequest || (exports.DescribeSolutionRequest = {}));
var AutoMLResult;
(function (AutoMLResult) {
    /**
     * @internal
     */
    AutoMLResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoMLResult = exports.AutoMLResult || (exports.AutoMLResult = {}));
var SolutionVersionSummary;
(function (SolutionVersionSummary) {
    /**
     * @internal
     */
    SolutionVersionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SolutionVersionSummary = exports.SolutionVersionSummary || (exports.SolutionVersionSummary = {}));
var Solution;
(function (Solution) {
    /**
     * @internal
     */
    Solution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Solution = exports.Solution || (exports.Solution = {}));
var DescribeSolutionResponse;
(function (DescribeSolutionResponse) {
    /**
     * @internal
     */
    DescribeSolutionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSolutionResponse = exports.DescribeSolutionResponse || (exports.DescribeSolutionResponse = {}));
var DescribeSolutionVersionRequest;
(function (DescribeSolutionVersionRequest) {
    /**
     * @internal
     */
    DescribeSolutionVersionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSolutionVersionRequest = exports.DescribeSolutionVersionRequest || (exports.DescribeSolutionVersionRequest = {}));
var TunedHPOParams;
(function (TunedHPOParams) {
    /**
     * @internal
     */
    TunedHPOParams.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TunedHPOParams = exports.TunedHPOParams || (exports.TunedHPOParams = {}));
var SolutionVersion;
(function (SolutionVersion) {
    /**
     * @internal
     */
    SolutionVersion.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SolutionVersion = exports.SolutionVersion || (exports.SolutionVersion = {}));
var DescribeSolutionVersionResponse;
(function (DescribeSolutionVersionResponse) {
    /**
     * @internal
     */
    DescribeSolutionVersionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeSolutionVersionResponse = exports.DescribeSolutionVersionResponse || (exports.DescribeSolutionVersionResponse = {}));
var GetSolutionMetricsRequest;
(function (GetSolutionMetricsRequest) {
    /**
     * @internal
     */
    GetSolutionMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSolutionMetricsRequest = exports.GetSolutionMetricsRequest || (exports.GetSolutionMetricsRequest = {}));
var GetSolutionMetricsResponse;
(function (GetSolutionMetricsResponse) {
    /**
     * @internal
     */
    GetSolutionMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSolutionMetricsResponse = exports.GetSolutionMetricsResponse || (exports.GetSolutionMetricsResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListBatchInferenceJobsRequest;
(function (ListBatchInferenceJobsRequest) {
    /**
     * @internal
     */
    ListBatchInferenceJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBatchInferenceJobsRequest = exports.ListBatchInferenceJobsRequest || (exports.ListBatchInferenceJobsRequest = {}));
var BatchInferenceJobSummary;
(function (BatchInferenceJobSummary) {
    /**
     * @internal
     */
    BatchInferenceJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchInferenceJobSummary = exports.BatchInferenceJobSummary || (exports.BatchInferenceJobSummary = {}));
var ListBatchInferenceJobsResponse;
(function (ListBatchInferenceJobsResponse) {
    /**
     * @internal
     */
    ListBatchInferenceJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBatchInferenceJobsResponse = exports.ListBatchInferenceJobsResponse || (exports.ListBatchInferenceJobsResponse = {}));
var ListCampaignsRequest;
(function (ListCampaignsRequest) {
    /**
     * @internal
     */
    ListCampaignsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCampaignsRequest = exports.ListCampaignsRequest || (exports.ListCampaignsRequest = {}));
var CampaignSummary;
(function (CampaignSummary) {
    /**
     * @internal
     */
    CampaignSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CampaignSummary = exports.CampaignSummary || (exports.CampaignSummary = {}));
var ListCampaignsResponse;
(function (ListCampaignsResponse) {
    /**
     * @internal
     */
    ListCampaignsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCampaignsResponse = exports.ListCampaignsResponse || (exports.ListCampaignsResponse = {}));
var ListDatasetExportJobsRequest;
(function (ListDatasetExportJobsRequest) {
    /**
     * @internal
     */
    ListDatasetExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetExportJobsRequest = exports.ListDatasetExportJobsRequest || (exports.ListDatasetExportJobsRequest = {}));
var DatasetExportJobSummary;
(function (DatasetExportJobSummary) {
    /**
     * @internal
     */
    DatasetExportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetExportJobSummary = exports.DatasetExportJobSummary || (exports.DatasetExportJobSummary = {}));
var ListDatasetExportJobsResponse;
(function (ListDatasetExportJobsResponse) {
    /**
     * @internal
     */
    ListDatasetExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetExportJobsResponse = exports.ListDatasetExportJobsResponse || (exports.ListDatasetExportJobsResponse = {}));
var ListDatasetGroupsRequest;
(function (ListDatasetGroupsRequest) {
    /**
     * @internal
     */
    ListDatasetGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetGroupsRequest = exports.ListDatasetGroupsRequest || (exports.ListDatasetGroupsRequest = {}));
var DatasetGroupSummary;
(function (DatasetGroupSummary) {
    /**
     * @internal
     */
    DatasetGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetGroupSummary = exports.DatasetGroupSummary || (exports.DatasetGroupSummary = {}));
var ListDatasetGroupsResponse;
(function (ListDatasetGroupsResponse) {
    /**
     * @internal
     */
    ListDatasetGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetGroupsResponse = exports.ListDatasetGroupsResponse || (exports.ListDatasetGroupsResponse = {}));
var ListDatasetImportJobsRequest;
(function (ListDatasetImportJobsRequest) {
    /**
     * @internal
     */
    ListDatasetImportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetImportJobsRequest = exports.ListDatasetImportJobsRequest || (exports.ListDatasetImportJobsRequest = {}));
var DatasetImportJobSummary;
(function (DatasetImportJobSummary) {
    /**
     * @internal
     */
    DatasetImportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetImportJobSummary = exports.DatasetImportJobSummary || (exports.DatasetImportJobSummary = {}));
var ListDatasetImportJobsResponse;
(function (ListDatasetImportJobsResponse) {
    /**
     * @internal
     */
    ListDatasetImportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDatasetImportJobsResponse = exports.ListDatasetImportJobsResponse || (exports.ListDatasetImportJobsResponse = {}));
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
var ListEventTrackersRequest;
(function (ListEventTrackersRequest) {
    /**
     * @internal
     */
    ListEventTrackersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventTrackersRequest = exports.ListEventTrackersRequest || (exports.ListEventTrackersRequest = {}));
var EventTrackerSummary;
(function (EventTrackerSummary) {
    /**
     * @internal
     */
    EventTrackerSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTrackerSummary = exports.EventTrackerSummary || (exports.EventTrackerSummary = {}));
var ListEventTrackersResponse;
(function (ListEventTrackersResponse) {
    /**
     * @internal
     */
    ListEventTrackersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventTrackersResponse = exports.ListEventTrackersResponse || (exports.ListEventTrackersResponse = {}));
var ListFiltersRequest;
(function (ListFiltersRequest) {
    /**
     * @internal
     */
    ListFiltersRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFiltersRequest = exports.ListFiltersRequest || (exports.ListFiltersRequest = {}));
var FilterSummary;
(function (FilterSummary) {
    /**
     * @internal
     */
    FilterSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FilterSummary = exports.FilterSummary || (exports.FilterSummary = {}));
var ListFiltersResponse;
(function (ListFiltersResponse) {
    /**
     * @internal
     */
    ListFiltersResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListFiltersResponse = exports.ListFiltersResponse || (exports.ListFiltersResponse = {}));
var RecipeProvider;
(function (RecipeProvider) {
    RecipeProvider["SERVICE"] = "SERVICE";
})(RecipeProvider = exports.RecipeProvider || (exports.RecipeProvider = {}));
var ListRecipesRequest;
(function (ListRecipesRequest) {
    /**
     * @internal
     */
    ListRecipesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipesRequest = exports.ListRecipesRequest || (exports.ListRecipesRequest = {}));
var RecipeSummary;
(function (RecipeSummary) {
    /**
     * @internal
     */
    RecipeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecipeSummary = exports.RecipeSummary || (exports.RecipeSummary = {}));
var ListRecipesResponse;
(function (ListRecipesResponse) {
    /**
     * @internal
     */
    ListRecipesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecipesResponse = exports.ListRecipesResponse || (exports.ListRecipesResponse = {}));
var ListSchemasRequest;
(function (ListSchemasRequest) {
    /**
     * @internal
     */
    ListSchemasRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasRequest = exports.ListSchemasRequest || (exports.ListSchemasRequest = {}));
var DatasetSchemaSummary;
(function (DatasetSchemaSummary) {
    /**
     * @internal
     */
    DatasetSchemaSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DatasetSchemaSummary = exports.DatasetSchemaSummary || (exports.DatasetSchemaSummary = {}));
var ListSchemasResponse;
(function (ListSchemasResponse) {
    /**
     * @internal
     */
    ListSchemasResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSchemasResponse = exports.ListSchemasResponse || (exports.ListSchemasResponse = {}));
var ListSolutionsRequest;
(function (ListSolutionsRequest) {
    /**
     * @internal
     */
    ListSolutionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSolutionsRequest = exports.ListSolutionsRequest || (exports.ListSolutionsRequest = {}));
var SolutionSummary;
(function (SolutionSummary) {
    /**
     * @internal
     */
    SolutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SolutionSummary = exports.SolutionSummary || (exports.SolutionSummary = {}));
var ListSolutionsResponse;
(function (ListSolutionsResponse) {
    /**
     * @internal
     */
    ListSolutionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSolutionsResponse = exports.ListSolutionsResponse || (exports.ListSolutionsResponse = {}));
var ListSolutionVersionsRequest;
(function (ListSolutionVersionsRequest) {
    /**
     * @internal
     */
    ListSolutionVersionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSolutionVersionsRequest = exports.ListSolutionVersionsRequest || (exports.ListSolutionVersionsRequest = {}));
var ListSolutionVersionsResponse;
(function (ListSolutionVersionsResponse) {
    /**
     * @internal
     */
    ListSolutionVersionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSolutionVersionsResponse = exports.ListSolutionVersionsResponse || (exports.ListSolutionVersionsResponse = {}));
var StopSolutionVersionCreationRequest;
(function (StopSolutionVersionCreationRequest) {
    /**
     * @internal
     */
    StopSolutionVersionCreationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopSolutionVersionCreationRequest = exports.StopSolutionVersionCreationRequest || (exports.StopSolutionVersionCreationRequest = {}));
var UpdateCampaignRequest;
(function (UpdateCampaignRequest) {
    /**
     * @internal
     */
    UpdateCampaignRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCampaignRequest = exports.UpdateCampaignRequest || (exports.UpdateCampaignRequest = {}));
var UpdateCampaignResponse;
(function (UpdateCampaignResponse) {
    /**
     * @internal
     */
    UpdateCampaignResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCampaignResponse = exports.UpdateCampaignResponse || (exports.UpdateCampaignResponse = {}));
//# sourceMappingURL=models_0.js.map