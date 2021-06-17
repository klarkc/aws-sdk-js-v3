"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePredictorBacktestExportJobRequest = exports.DeletePredictorRequest = exports.DeleteForecastExportJobRequest = exports.DeleteForecastRequest = exports.DeleteDatasetImportJobRequest = exports.DeleteDatasetGroupRequest = exports.DeleteDatasetRequest = exports.CreatePredictorBacktestExportJobResponse = exports.CreatePredictorBacktestExportJobRequest = exports.CreatePredictorResponse = exports.CreatePredictorRequest = exports.InputDataConfig = exports.SupplementaryFeature = exports.HyperParameterTuningJobConfig = exports.ParameterRanges = exports.IntegerParameterRange = exports.ContinuousParameterRange = exports.ScalingType = exports.CategoricalParameterRange = exports.FeaturizationConfig = exports.Featurization = exports.FeaturizationMethod = exports.FeaturizationMethodName = exports.EvaluationParameters = exports.AutoMLOverrideStrategy = exports.CreateForecastExportJobResponse = exports.CreateForecastExportJobRequest = exports.DataDestination = exports.CreateForecastResponse = exports.CreateForecastRequest = exports.CreateDatasetImportJobResponse = exports.CreateDatasetImportJobRequest = exports.DataSource = exports.S3Config = exports.ResourceNotFoundException = exports.ResourceInUseException = exports.CreateDatasetGroupResponse = exports.CreateDatasetGroupRequest = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.InvalidInputException = exports.CreateDatasetResponse = exports.CreateDatasetRequest = exports.Tag = exports.Schema = exports.SchemaAttribute = exports.AttributeType = exports.EncryptionConfig = exports.Domain = exports.DatasetType = void 0;
exports.PredictorSummary = exports.ListPredictorsRequest = exports.ListPredictorBacktestExportJobsResponse = exports.PredictorBacktestExportJobSummary = exports.ListPredictorBacktestExportJobsRequest = exports.ListForecastsResponse = exports.ForecastSummary = exports.ListForecastsRequest = exports.ListForecastExportJobsResponse = exports.ForecastExportJobSummary = exports.ListForecastExportJobsRequest = exports.ListDatasetsResponse = exports.DatasetSummary = exports.ListDatasetsRequest = exports.ListDatasetImportJobsResponse = exports.DatasetImportJobSummary = exports.ListDatasetImportJobsRequest = exports.Filter = exports.FilterConditionString = exports.ListDatasetGroupsResponse = exports.DatasetGroupSummary = exports.ListDatasetGroupsRequest = exports.InvalidNextTokenException = exports.GetAccuracyMetricsResponse = exports.EvaluationResult = exports.WindowSummary = exports.Metrics = exports.WeightedQuantileLoss = exports.ErrorMetric = exports.EvaluationType = exports.GetAccuracyMetricsRequest = exports.DescribePredictorBacktestExportJobResponse = exports.DescribePredictorBacktestExportJobRequest = exports.DescribePredictorResponse = exports.PredictorExecutionDetails = exports.PredictorExecution = exports.TestWindowSummary = exports.DescribePredictorRequest = exports.DescribeForecastExportJobResponse = exports.DescribeForecastExportJobRequest = exports.DescribeForecastResponse = exports.DescribeForecastRequest = exports.DescribeDatasetImportJobResponse = exports.Statistics = exports.DescribeDatasetImportJobRequest = exports.DescribeDatasetGroupResponse = exports.DescribeDatasetGroupRequest = exports.DescribeDatasetResponse = exports.DescribeDatasetRequest = exports.DeleteResourceTreeRequest = void 0;
exports.UpdateDatasetGroupResponse = exports.UpdateDatasetGroupRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StopResourceRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListPredictorsResponse = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var DatasetType;
(function (DatasetType) {
    DatasetType["ITEM_METADATA"] = "ITEM_METADATA";
    DatasetType["RELATED_TIME_SERIES"] = "RELATED_TIME_SERIES";
    DatasetType["TARGET_TIME_SERIES"] = "TARGET_TIME_SERIES";
})(DatasetType = exports.DatasetType || (exports.DatasetType = {}));
var Domain;
(function (Domain) {
    Domain["CUSTOM"] = "CUSTOM";
    Domain["EC2_CAPACITY"] = "EC2_CAPACITY";
    Domain["INVENTORY_PLANNING"] = "INVENTORY_PLANNING";
    Domain["METRICS"] = "METRICS";
    Domain["RETAIL"] = "RETAIL";
    Domain["WEB_TRAFFIC"] = "WEB_TRAFFIC";
    Domain["WORK_FORCE"] = "WORK_FORCE";
})(Domain = exports.Domain || (exports.Domain = {}));
var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfig = exports.EncryptionConfig || (exports.EncryptionConfig = {}));
var AttributeType;
(function (AttributeType) {
    AttributeType["FLOAT"] = "float";
    AttributeType["GEOLOCATION"] = "geolocation";
    AttributeType["INTEGER"] = "integer";
    AttributeType["STRING"] = "string";
    AttributeType["TIMESTAMP"] = "timestamp";
})(AttributeType = exports.AttributeType || (exports.AttributeType = {}));
var SchemaAttribute;
(function (SchemaAttribute) {
    /**
     * @internal
     */
    SchemaAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SchemaAttribute = exports.SchemaAttribute || (exports.SchemaAttribute = {}));
var Schema;
(function (Schema) {
    /**
     * @internal
     */
    Schema.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Schema = exports.Schema || (exports.Schema = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && { Key: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.Value && { Value: smithy_client_1.SENSITIVE_STRING }),
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
var CreateDatasetGroupRequest;
(function (CreateDatasetGroupRequest) {
    /**
     * @internal
     */
    CreateDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Config = exports.S3Config || (exports.S3Config = {}));
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
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
var CreateForecastRequest;
(function (CreateForecastRequest) {
    /**
     * @internal
     */
    CreateForecastRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    });
})(CreateForecastRequest = exports.CreateForecastRequest || (exports.CreateForecastRequest = {}));
var CreateForecastResponse;
(function (CreateForecastResponse) {
    /**
     * @internal
     */
    CreateForecastResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateForecastResponse = exports.CreateForecastResponse || (exports.CreateForecastResponse = {}));
var DataDestination;
(function (DataDestination) {
    /**
     * @internal
     */
    DataDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataDestination = exports.DataDestination || (exports.DataDestination = {}));
var CreateForecastExportJobRequest;
(function (CreateForecastExportJobRequest) {
    /**
     * @internal
     */
    CreateForecastExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    });
})(CreateForecastExportJobRequest = exports.CreateForecastExportJobRequest || (exports.CreateForecastExportJobRequest = {}));
var CreateForecastExportJobResponse;
(function (CreateForecastExportJobResponse) {
    /**
     * @internal
     */
    CreateForecastExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateForecastExportJobResponse = exports.CreateForecastExportJobResponse || (exports.CreateForecastExportJobResponse = {}));
var AutoMLOverrideStrategy;
(function (AutoMLOverrideStrategy) {
    AutoMLOverrideStrategy["LatencyOptimized"] = "LatencyOptimized";
})(AutoMLOverrideStrategy = exports.AutoMLOverrideStrategy || (exports.AutoMLOverrideStrategy = {}));
var EvaluationParameters;
(function (EvaluationParameters) {
    /**
     * @internal
     */
    EvaluationParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationParameters = exports.EvaluationParameters || (exports.EvaluationParameters = {}));
var FeaturizationMethodName;
(function (FeaturizationMethodName) {
    FeaturizationMethodName["filling"] = "filling";
})(FeaturizationMethodName = exports.FeaturizationMethodName || (exports.FeaturizationMethodName = {}));
var FeaturizationMethod;
(function (FeaturizationMethod) {
    /**
     * @internal
     */
    FeaturizationMethod.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeaturizationMethod = exports.FeaturizationMethod || (exports.FeaturizationMethod = {}));
var Featurization;
(function (Featurization) {
    /**
     * @internal
     */
    Featurization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Featurization = exports.Featurization || (exports.Featurization = {}));
var FeaturizationConfig;
(function (FeaturizationConfig) {
    /**
     * @internal
     */
    FeaturizationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FeaturizationConfig = exports.FeaturizationConfig || (exports.FeaturizationConfig = {}));
var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    /**
     * @internal
     */
    CategoricalParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CategoricalParameterRange = exports.CategoricalParameterRange || (exports.CategoricalParameterRange = {}));
var ScalingType;
(function (ScalingType) {
    ScalingType["Auto"] = "Auto";
    ScalingType["Linear"] = "Linear";
    ScalingType["Logarithmic"] = "Logarithmic";
    ScalingType["ReverseLogarithmic"] = "ReverseLogarithmic";
})(ScalingType = exports.ScalingType || (exports.ScalingType = {}));
var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    /**
     * @internal
     */
    ContinuousParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousParameterRange = exports.ContinuousParameterRange || (exports.ContinuousParameterRange = {}));
var IntegerParameterRange;
(function (IntegerParameterRange) {
    /**
     * @internal
     */
    IntegerParameterRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IntegerParameterRange = exports.IntegerParameterRange || (exports.IntegerParameterRange = {}));
var ParameterRanges;
(function (ParameterRanges) {
    /**
     * @internal
     */
    ParameterRanges.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterRanges = exports.ParameterRanges || (exports.ParameterRanges = {}));
var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HyperParameterTuningJobConfig = exports.HyperParameterTuningJobConfig || (exports.HyperParameterTuningJobConfig = {}));
var SupplementaryFeature;
(function (SupplementaryFeature) {
    /**
     * @internal
     */
    SupplementaryFeature.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SupplementaryFeature = exports.SupplementaryFeature || (exports.SupplementaryFeature = {}));
var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputDataConfig = exports.InputDataConfig || (exports.InputDataConfig = {}));
var CreatePredictorRequest;
(function (CreatePredictorRequest) {
    /**
     * @internal
     */
    CreatePredictorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    });
})(CreatePredictorRequest = exports.CreatePredictorRequest || (exports.CreatePredictorRequest = {}));
var CreatePredictorResponse;
(function (CreatePredictorResponse) {
    /**
     * @internal
     */
    CreatePredictorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePredictorResponse = exports.CreatePredictorResponse || (exports.CreatePredictorResponse = {}));
var CreatePredictorBacktestExportJobRequest;
(function (CreatePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    CreatePredictorBacktestExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    });
})(CreatePredictorBacktestExportJobRequest = exports.CreatePredictorBacktestExportJobRequest || (exports.CreatePredictorBacktestExportJobRequest = {}));
var CreatePredictorBacktestExportJobResponse;
(function (CreatePredictorBacktestExportJobResponse) {
    /**
     * @internal
     */
    CreatePredictorBacktestExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePredictorBacktestExportJobResponse = exports.CreatePredictorBacktestExportJobResponse || (exports.CreatePredictorBacktestExportJobResponse = {}));
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
var DeleteDatasetImportJobRequest;
(function (DeleteDatasetImportJobRequest) {
    /**
     * @internal
     */
    DeleteDatasetImportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDatasetImportJobRequest = exports.DeleteDatasetImportJobRequest || (exports.DeleteDatasetImportJobRequest = {}));
var DeleteForecastRequest;
(function (DeleteForecastRequest) {
    /**
     * @internal
     */
    DeleteForecastRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteForecastRequest = exports.DeleteForecastRequest || (exports.DeleteForecastRequest = {}));
var DeleteForecastExportJobRequest;
(function (DeleteForecastExportJobRequest) {
    /**
     * @internal
     */
    DeleteForecastExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteForecastExportJobRequest = exports.DeleteForecastExportJobRequest || (exports.DeleteForecastExportJobRequest = {}));
var DeletePredictorRequest;
(function (DeletePredictorRequest) {
    /**
     * @internal
     */
    DeletePredictorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePredictorRequest = exports.DeletePredictorRequest || (exports.DeletePredictorRequest = {}));
var DeletePredictorBacktestExportJobRequest;
(function (DeletePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    DeletePredictorBacktestExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePredictorBacktestExportJobRequest = exports.DeletePredictorBacktestExportJobRequest || (exports.DeletePredictorBacktestExportJobRequest = {}));
var DeleteResourceTreeRequest;
(function (DeleteResourceTreeRequest) {
    /**
     * @internal
     */
    DeleteResourceTreeRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteResourceTreeRequest = exports.DeleteResourceTreeRequest || (exports.DeleteResourceTreeRequest = {}));
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
var DescribeDatasetGroupRequest;
(function (DescribeDatasetGroupRequest) {
    /**
     * @internal
     */
    DescribeDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetGroupRequest = exports.DescribeDatasetGroupRequest || (exports.DescribeDatasetGroupRequest = {}));
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
var Statistics;
(function (Statistics) {
    /**
     * @internal
     */
    Statistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statistics = exports.Statistics || (exports.Statistics = {}));
var DescribeDatasetImportJobResponse;
(function (DescribeDatasetImportJobResponse) {
    /**
     * @internal
     */
    DescribeDatasetImportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeDatasetImportJobResponse = exports.DescribeDatasetImportJobResponse || (exports.DescribeDatasetImportJobResponse = {}));
var DescribeForecastRequest;
(function (DescribeForecastRequest) {
    /**
     * @internal
     */
    DescribeForecastRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeForecastRequest = exports.DescribeForecastRequest || (exports.DescribeForecastRequest = {}));
var DescribeForecastResponse;
(function (DescribeForecastResponse) {
    /**
     * @internal
     */
    DescribeForecastResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeForecastResponse = exports.DescribeForecastResponse || (exports.DescribeForecastResponse = {}));
var DescribeForecastExportJobRequest;
(function (DescribeForecastExportJobRequest) {
    /**
     * @internal
     */
    DescribeForecastExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeForecastExportJobRequest = exports.DescribeForecastExportJobRequest || (exports.DescribeForecastExportJobRequest = {}));
var DescribeForecastExportJobResponse;
(function (DescribeForecastExportJobResponse) {
    /**
     * @internal
     */
    DescribeForecastExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeForecastExportJobResponse = exports.DescribeForecastExportJobResponse || (exports.DescribeForecastExportJobResponse = {}));
var DescribePredictorRequest;
(function (DescribePredictorRequest) {
    /**
     * @internal
     */
    DescribePredictorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePredictorRequest = exports.DescribePredictorRequest || (exports.DescribePredictorRequest = {}));
var TestWindowSummary;
(function (TestWindowSummary) {
    /**
     * @internal
     */
    TestWindowSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestWindowSummary = exports.TestWindowSummary || (exports.TestWindowSummary = {}));
var PredictorExecution;
(function (PredictorExecution) {
    /**
     * @internal
     */
    PredictorExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictorExecution = exports.PredictorExecution || (exports.PredictorExecution = {}));
var PredictorExecutionDetails;
(function (PredictorExecutionDetails) {
    /**
     * @internal
     */
    PredictorExecutionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictorExecutionDetails = exports.PredictorExecutionDetails || (exports.PredictorExecutionDetails = {}));
var DescribePredictorResponse;
(function (DescribePredictorResponse) {
    /**
     * @internal
     */
    DescribePredictorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePredictorResponse = exports.DescribePredictorResponse || (exports.DescribePredictorResponse = {}));
var DescribePredictorBacktestExportJobRequest;
(function (DescribePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    DescribePredictorBacktestExportJobRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePredictorBacktestExportJobRequest = exports.DescribePredictorBacktestExportJobRequest || (exports.DescribePredictorBacktestExportJobRequest = {}));
var DescribePredictorBacktestExportJobResponse;
(function (DescribePredictorBacktestExportJobResponse) {
    /**
     * @internal
     */
    DescribePredictorBacktestExportJobResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePredictorBacktestExportJobResponse = exports.DescribePredictorBacktestExportJobResponse || (exports.DescribePredictorBacktestExportJobResponse = {}));
var GetAccuracyMetricsRequest;
(function (GetAccuracyMetricsRequest) {
    /**
     * @internal
     */
    GetAccuracyMetricsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccuracyMetricsRequest = exports.GetAccuracyMetricsRequest || (exports.GetAccuracyMetricsRequest = {}));
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["COMPUTED"] = "COMPUTED";
    EvaluationType["SUMMARY"] = "SUMMARY";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var ErrorMetric;
(function (ErrorMetric) {
    /**
     * @internal
     */
    ErrorMetric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorMetric = exports.ErrorMetric || (exports.ErrorMetric = {}));
var WeightedQuantileLoss;
(function (WeightedQuantileLoss) {
    /**
     * @internal
     */
    WeightedQuantileLoss.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WeightedQuantileLoss = exports.WeightedQuantileLoss || (exports.WeightedQuantileLoss = {}));
var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metrics = exports.Metrics || (exports.Metrics = {}));
var WindowSummary;
(function (WindowSummary) {
    /**
     * @internal
     */
    WindowSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WindowSummary = exports.WindowSummary || (exports.WindowSummary = {}));
var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluationResult = exports.EvaluationResult || (exports.EvaluationResult = {}));
var GetAccuracyMetricsResponse;
(function (GetAccuracyMetricsResponse) {
    /**
     * @internal
     */
    GetAccuracyMetricsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAccuracyMetricsResponse = exports.GetAccuracyMetricsResponse || (exports.GetAccuracyMetricsResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
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
var FilterConditionString;
(function (FilterConditionString) {
    FilterConditionString["IS"] = "IS";
    FilterConditionString["IS_NOT"] = "IS_NOT";
})(FilterConditionString = exports.FilterConditionString || (exports.FilterConditionString = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
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
var ListForecastExportJobsRequest;
(function (ListForecastExportJobsRequest) {
    /**
     * @internal
     */
    ListForecastExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListForecastExportJobsRequest = exports.ListForecastExportJobsRequest || (exports.ListForecastExportJobsRequest = {}));
var ForecastExportJobSummary;
(function (ForecastExportJobSummary) {
    /**
     * @internal
     */
    ForecastExportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForecastExportJobSummary = exports.ForecastExportJobSummary || (exports.ForecastExportJobSummary = {}));
var ListForecastExportJobsResponse;
(function (ListForecastExportJobsResponse) {
    /**
     * @internal
     */
    ListForecastExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListForecastExportJobsResponse = exports.ListForecastExportJobsResponse || (exports.ListForecastExportJobsResponse = {}));
var ListForecastsRequest;
(function (ListForecastsRequest) {
    /**
     * @internal
     */
    ListForecastsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListForecastsRequest = exports.ListForecastsRequest || (exports.ListForecastsRequest = {}));
var ForecastSummary;
(function (ForecastSummary) {
    /**
     * @internal
     */
    ForecastSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForecastSummary = exports.ForecastSummary || (exports.ForecastSummary = {}));
var ListForecastsResponse;
(function (ListForecastsResponse) {
    /**
     * @internal
     */
    ListForecastsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListForecastsResponse = exports.ListForecastsResponse || (exports.ListForecastsResponse = {}));
var ListPredictorBacktestExportJobsRequest;
(function (ListPredictorBacktestExportJobsRequest) {
    /**
     * @internal
     */
    ListPredictorBacktestExportJobsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPredictorBacktestExportJobsRequest = exports.ListPredictorBacktestExportJobsRequest || (exports.ListPredictorBacktestExportJobsRequest = {}));
var PredictorBacktestExportJobSummary;
(function (PredictorBacktestExportJobSummary) {
    /**
     * @internal
     */
    PredictorBacktestExportJobSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictorBacktestExportJobSummary = exports.PredictorBacktestExportJobSummary || (exports.PredictorBacktestExportJobSummary = {}));
var ListPredictorBacktestExportJobsResponse;
(function (ListPredictorBacktestExportJobsResponse) {
    /**
     * @internal
     */
    ListPredictorBacktestExportJobsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPredictorBacktestExportJobsResponse = exports.ListPredictorBacktestExportJobsResponse || (exports.ListPredictorBacktestExportJobsResponse = {}));
var ListPredictorsRequest;
(function (ListPredictorsRequest) {
    /**
     * @internal
     */
    ListPredictorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPredictorsRequest = exports.ListPredictorsRequest || (exports.ListPredictorsRequest = {}));
var PredictorSummary;
(function (PredictorSummary) {
    /**
     * @internal
     */
    PredictorSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictorSummary = exports.PredictorSummary || (exports.PredictorSummary = {}));
var ListPredictorsResponse;
(function (ListPredictorsResponse) {
    /**
     * @internal
     */
    ListPredictorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPredictorsResponse = exports.ListPredictorsResponse || (exports.ListPredictorsResponse = {}));
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
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var StopResourceRequest;
(function (StopResourceRequest) {
    /**
     * @internal
     */
    StopResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopResourceRequest = exports.StopResourceRequest || (exports.StopResourceRequest = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
        ...(obj.TagKeys && { TagKeys: smithy_client_1.SENSITIVE_STRING }),
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
var UpdateDatasetGroupRequest;
(function (UpdateDatasetGroupRequest) {
    /**
     * @internal
     */
    UpdateDatasetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetGroupRequest = exports.UpdateDatasetGroupRequest || (exports.UpdateDatasetGroupRequest = {}));
var UpdateDatasetGroupResponse;
(function (UpdateDatasetGroupResponse) {
    /**
     * @internal
     */
    UpdateDatasetGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateDatasetGroupResponse = exports.UpdateDatasetGroupResponse || (exports.UpdateDatasetGroupResponse = {}));
//# sourceMappingURL=models_0.js.map