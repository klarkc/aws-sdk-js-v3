import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var DatasetType;
(function (DatasetType) {
    DatasetType["ITEM_METADATA"] = "ITEM_METADATA";
    DatasetType["RELATED_TIME_SERIES"] = "RELATED_TIME_SERIES";
    DatasetType["TARGET_TIME_SERIES"] = "TARGET_TIME_SERIES";
})(DatasetType || (DatasetType = {}));
export var Domain;
(function (Domain) {
    Domain["CUSTOM"] = "CUSTOM";
    Domain["EC2_CAPACITY"] = "EC2_CAPACITY";
    Domain["INVENTORY_PLANNING"] = "INVENTORY_PLANNING";
    Domain["METRICS"] = "METRICS";
    Domain["RETAIL"] = "RETAIL";
    Domain["WEB_TRAFFIC"] = "WEB_TRAFFIC";
    Domain["WORK_FORCE"] = "WORK_FORCE";
})(Domain || (Domain = {}));
export var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfig || (EncryptionConfig = {}));
export var AttributeType;
(function (AttributeType) {
    AttributeType["FLOAT"] = "float";
    AttributeType["GEOLOCATION"] = "geolocation";
    AttributeType["INTEGER"] = "integer";
    AttributeType["STRING"] = "string";
    AttributeType["TIMESTAMP"] = "timestamp";
})(AttributeType || (AttributeType = {}));
export var SchemaAttribute;
(function (SchemaAttribute) {
    /**
     * @internal
     */
    SchemaAttribute.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SchemaAttribute || (SchemaAttribute = {}));
export var Schema;
(function (Schema) {
    /**
     * @internal
     */
    Schema.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Schema || (Schema = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign({}, obj), (obj.Key && { Key: SENSITIVE_STRING })), (obj.Value && { Value: SENSITIVE_STRING }))); };
})(Tag || (Tag = {}));
export var CreateDatasetRequest;
(function (CreateDatasetRequest) {
    /**
     * @internal
     */
    CreateDatasetRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreateDatasetRequest || (CreateDatasetRequest = {}));
export var CreateDatasetResponse;
(function (CreateDatasetResponse) {
    /**
     * @internal
     */
    CreateDatasetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetResponse || (CreateDatasetResponse = {}));
export var InvalidInputException;
(function (InvalidInputException) {
    /**
     * @internal
     */
    InvalidInputException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidInputException || (InvalidInputException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceAlreadyExistsException || (ResourceAlreadyExistsException = {}));
export var CreateDatasetGroupRequest;
(function (CreateDatasetGroupRequest) {
    /**
     * @internal
     */
    CreateDatasetGroupRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreateDatasetGroupRequest || (CreateDatasetGroupRequest = {}));
export var CreateDatasetGroupResponse;
(function (CreateDatasetGroupResponse) {
    /**
     * @internal
     */
    CreateDatasetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetGroupResponse || (CreateDatasetGroupResponse = {}));
export var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceInUseException || (ResourceInUseException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var S3Config;
(function (S3Config) {
    /**
     * @internal
     */
    S3Config.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Config || (S3Config = {}));
export var DataSource;
(function (DataSource) {
    /**
     * @internal
     */
    DataSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataSource || (DataSource = {}));
export var CreateDatasetImportJobRequest;
(function (CreateDatasetImportJobRequest) {
    /**
     * @internal
     */
    CreateDatasetImportJobRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreateDatasetImportJobRequest || (CreateDatasetImportJobRequest = {}));
export var CreateDatasetImportJobResponse;
(function (CreateDatasetImportJobResponse) {
    /**
     * @internal
     */
    CreateDatasetImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateDatasetImportJobResponse || (CreateDatasetImportJobResponse = {}));
export var CreateForecastRequest;
(function (CreateForecastRequest) {
    /**
     * @internal
     */
    CreateForecastRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreateForecastRequest || (CreateForecastRequest = {}));
export var CreateForecastResponse;
(function (CreateForecastResponse) {
    /**
     * @internal
     */
    CreateForecastResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateForecastResponse || (CreateForecastResponse = {}));
export var DataDestination;
(function (DataDestination) {
    /**
     * @internal
     */
    DataDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataDestination || (DataDestination = {}));
export var CreateForecastExportJobRequest;
(function (CreateForecastExportJobRequest) {
    /**
     * @internal
     */
    CreateForecastExportJobRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreateForecastExportJobRequest || (CreateForecastExportJobRequest = {}));
export var CreateForecastExportJobResponse;
(function (CreateForecastExportJobResponse) {
    /**
     * @internal
     */
    CreateForecastExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateForecastExportJobResponse || (CreateForecastExportJobResponse = {}));
export var AutoMLOverrideStrategy;
(function (AutoMLOverrideStrategy) {
    AutoMLOverrideStrategy["LatencyOptimized"] = "LatencyOptimized";
})(AutoMLOverrideStrategy || (AutoMLOverrideStrategy = {}));
export var EvaluationParameters;
(function (EvaluationParameters) {
    /**
     * @internal
     */
    EvaluationParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EvaluationParameters || (EvaluationParameters = {}));
export var FeaturizationMethodName;
(function (FeaturizationMethodName) {
    FeaturizationMethodName["filling"] = "filling";
})(FeaturizationMethodName || (FeaturizationMethodName = {}));
export var FeaturizationMethod;
(function (FeaturizationMethod) {
    /**
     * @internal
     */
    FeaturizationMethod.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FeaturizationMethod || (FeaturizationMethod = {}));
export var Featurization;
(function (Featurization) {
    /**
     * @internal
     */
    Featurization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Featurization || (Featurization = {}));
export var FeaturizationConfig;
(function (FeaturizationConfig) {
    /**
     * @internal
     */
    FeaturizationConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FeaturizationConfig || (FeaturizationConfig = {}));
export var CategoricalParameterRange;
(function (CategoricalParameterRange) {
    /**
     * @internal
     */
    CategoricalParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CategoricalParameterRange || (CategoricalParameterRange = {}));
export var ScalingType;
(function (ScalingType) {
    ScalingType["Auto"] = "Auto";
    ScalingType["Linear"] = "Linear";
    ScalingType["Logarithmic"] = "Logarithmic";
    ScalingType["ReverseLogarithmic"] = "ReverseLogarithmic";
})(ScalingType || (ScalingType = {}));
export var ContinuousParameterRange;
(function (ContinuousParameterRange) {
    /**
     * @internal
     */
    ContinuousParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContinuousParameterRange || (ContinuousParameterRange = {}));
export var IntegerParameterRange;
(function (IntegerParameterRange) {
    /**
     * @internal
     */
    IntegerParameterRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IntegerParameterRange || (IntegerParameterRange = {}));
export var ParameterRanges;
(function (ParameterRanges) {
    /**
     * @internal
     */
    ParameterRanges.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ParameterRanges || (ParameterRanges = {}));
export var HyperParameterTuningJobConfig;
(function (HyperParameterTuningJobConfig) {
    /**
     * @internal
     */
    HyperParameterTuningJobConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HyperParameterTuningJobConfig || (HyperParameterTuningJobConfig = {}));
export var SupplementaryFeature;
(function (SupplementaryFeature) {
    /**
     * @internal
     */
    SupplementaryFeature.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SupplementaryFeature || (SupplementaryFeature = {}));
export var InputDataConfig;
(function (InputDataConfig) {
    /**
     * @internal
     */
    InputDataConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputDataConfig || (InputDataConfig = {}));
export var CreatePredictorRequest;
(function (CreatePredictorRequest) {
    /**
     * @internal
     */
    CreatePredictorRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreatePredictorRequest || (CreatePredictorRequest = {}));
export var CreatePredictorResponse;
(function (CreatePredictorResponse) {
    /**
     * @internal
     */
    CreatePredictorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePredictorResponse || (CreatePredictorResponse = {}));
export var CreatePredictorBacktestExportJobRequest;
(function (CreatePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    CreatePredictorBacktestExportJobRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(CreatePredictorBacktestExportJobRequest || (CreatePredictorBacktestExportJobRequest = {}));
export var CreatePredictorBacktestExportJobResponse;
(function (CreatePredictorBacktestExportJobResponse) {
    /**
     * @internal
     */
    CreatePredictorBacktestExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePredictorBacktestExportJobResponse || (CreatePredictorBacktestExportJobResponse = {}));
export var DeleteDatasetRequest;
(function (DeleteDatasetRequest) {
    /**
     * @internal
     */
    DeleteDatasetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetRequest || (DeleteDatasetRequest = {}));
export var DeleteDatasetGroupRequest;
(function (DeleteDatasetGroupRequest) {
    /**
     * @internal
     */
    DeleteDatasetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetGroupRequest || (DeleteDatasetGroupRequest = {}));
export var DeleteDatasetImportJobRequest;
(function (DeleteDatasetImportJobRequest) {
    /**
     * @internal
     */
    DeleteDatasetImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteDatasetImportJobRequest || (DeleteDatasetImportJobRequest = {}));
export var DeleteForecastRequest;
(function (DeleteForecastRequest) {
    /**
     * @internal
     */
    DeleteForecastRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteForecastRequest || (DeleteForecastRequest = {}));
export var DeleteForecastExportJobRequest;
(function (DeleteForecastExportJobRequest) {
    /**
     * @internal
     */
    DeleteForecastExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteForecastExportJobRequest || (DeleteForecastExportJobRequest = {}));
export var DeletePredictorRequest;
(function (DeletePredictorRequest) {
    /**
     * @internal
     */
    DeletePredictorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePredictorRequest || (DeletePredictorRequest = {}));
export var DeletePredictorBacktestExportJobRequest;
(function (DeletePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    DeletePredictorBacktestExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePredictorBacktestExportJobRequest || (DeletePredictorBacktestExportJobRequest = {}));
export var DeleteResourceTreeRequest;
(function (DeleteResourceTreeRequest) {
    /**
     * @internal
     */
    DeleteResourceTreeRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteResourceTreeRequest || (DeleteResourceTreeRequest = {}));
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
export var DescribeDatasetGroupRequest;
(function (DescribeDatasetGroupRequest) {
    /**
     * @internal
     */
    DescribeDatasetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetGroupRequest || (DescribeDatasetGroupRequest = {}));
export var DescribeDatasetGroupResponse;
(function (DescribeDatasetGroupResponse) {
    /**
     * @internal
     */
    DescribeDatasetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetGroupResponse || (DescribeDatasetGroupResponse = {}));
export var DescribeDatasetImportJobRequest;
(function (DescribeDatasetImportJobRequest) {
    /**
     * @internal
     */
    DescribeDatasetImportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetImportJobRequest || (DescribeDatasetImportJobRequest = {}));
export var Statistics;
(function (Statistics) {
    /**
     * @internal
     */
    Statistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Statistics || (Statistics = {}));
export var DescribeDatasetImportJobResponse;
(function (DescribeDatasetImportJobResponse) {
    /**
     * @internal
     */
    DescribeDatasetImportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeDatasetImportJobResponse || (DescribeDatasetImportJobResponse = {}));
export var DescribeForecastRequest;
(function (DescribeForecastRequest) {
    /**
     * @internal
     */
    DescribeForecastRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeForecastRequest || (DescribeForecastRequest = {}));
export var DescribeForecastResponse;
(function (DescribeForecastResponse) {
    /**
     * @internal
     */
    DescribeForecastResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeForecastResponse || (DescribeForecastResponse = {}));
export var DescribeForecastExportJobRequest;
(function (DescribeForecastExportJobRequest) {
    /**
     * @internal
     */
    DescribeForecastExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeForecastExportJobRequest || (DescribeForecastExportJobRequest = {}));
export var DescribeForecastExportJobResponse;
(function (DescribeForecastExportJobResponse) {
    /**
     * @internal
     */
    DescribeForecastExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeForecastExportJobResponse || (DescribeForecastExportJobResponse = {}));
export var DescribePredictorRequest;
(function (DescribePredictorRequest) {
    /**
     * @internal
     */
    DescribePredictorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePredictorRequest || (DescribePredictorRequest = {}));
export var TestWindowSummary;
(function (TestWindowSummary) {
    /**
     * @internal
     */
    TestWindowSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestWindowSummary || (TestWindowSummary = {}));
export var PredictorExecution;
(function (PredictorExecution) {
    /**
     * @internal
     */
    PredictorExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictorExecution || (PredictorExecution = {}));
export var PredictorExecutionDetails;
(function (PredictorExecutionDetails) {
    /**
     * @internal
     */
    PredictorExecutionDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictorExecutionDetails || (PredictorExecutionDetails = {}));
export var DescribePredictorResponse;
(function (DescribePredictorResponse) {
    /**
     * @internal
     */
    DescribePredictorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePredictorResponse || (DescribePredictorResponse = {}));
export var DescribePredictorBacktestExportJobRequest;
(function (DescribePredictorBacktestExportJobRequest) {
    /**
     * @internal
     */
    DescribePredictorBacktestExportJobRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePredictorBacktestExportJobRequest || (DescribePredictorBacktestExportJobRequest = {}));
export var DescribePredictorBacktestExportJobResponse;
(function (DescribePredictorBacktestExportJobResponse) {
    /**
     * @internal
     */
    DescribePredictorBacktestExportJobResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePredictorBacktestExportJobResponse || (DescribePredictorBacktestExportJobResponse = {}));
export var GetAccuracyMetricsRequest;
(function (GetAccuracyMetricsRequest) {
    /**
     * @internal
     */
    GetAccuracyMetricsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccuracyMetricsRequest || (GetAccuracyMetricsRequest = {}));
export var EvaluationType;
(function (EvaluationType) {
    EvaluationType["COMPUTED"] = "COMPUTED";
    EvaluationType["SUMMARY"] = "SUMMARY";
})(EvaluationType || (EvaluationType = {}));
export var ErrorMetric;
(function (ErrorMetric) {
    /**
     * @internal
     */
    ErrorMetric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorMetric || (ErrorMetric = {}));
export var WeightedQuantileLoss;
(function (WeightedQuantileLoss) {
    /**
     * @internal
     */
    WeightedQuantileLoss.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WeightedQuantileLoss || (WeightedQuantileLoss = {}));
export var Metrics;
(function (Metrics) {
    /**
     * @internal
     */
    Metrics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metrics || (Metrics = {}));
export var WindowSummary;
(function (WindowSummary) {
    /**
     * @internal
     */
    WindowSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WindowSummary || (WindowSummary = {}));
export var EvaluationResult;
(function (EvaluationResult) {
    /**
     * @internal
     */
    EvaluationResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EvaluationResult || (EvaluationResult = {}));
export var GetAccuracyMetricsResponse;
(function (GetAccuracyMetricsResponse) {
    /**
     * @internal
     */
    GetAccuracyMetricsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAccuracyMetricsResponse || (GetAccuracyMetricsResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListDatasetGroupsRequest;
(function (ListDatasetGroupsRequest) {
    /**
     * @internal
     */
    ListDatasetGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetGroupsRequest || (ListDatasetGroupsRequest = {}));
export var DatasetGroupSummary;
(function (DatasetGroupSummary) {
    /**
     * @internal
     */
    DatasetGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetGroupSummary || (DatasetGroupSummary = {}));
export var ListDatasetGroupsResponse;
(function (ListDatasetGroupsResponse) {
    /**
     * @internal
     */
    ListDatasetGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetGroupsResponse || (ListDatasetGroupsResponse = {}));
export var FilterConditionString;
(function (FilterConditionString) {
    FilterConditionString["IS"] = "IS";
    FilterConditionString["IS_NOT"] = "IS_NOT";
})(FilterConditionString || (FilterConditionString = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var ListDatasetImportJobsRequest;
(function (ListDatasetImportJobsRequest) {
    /**
     * @internal
     */
    ListDatasetImportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetImportJobsRequest || (ListDatasetImportJobsRequest = {}));
export var DatasetImportJobSummary;
(function (DatasetImportJobSummary) {
    /**
     * @internal
     */
    DatasetImportJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DatasetImportJobSummary || (DatasetImportJobSummary = {}));
export var ListDatasetImportJobsResponse;
(function (ListDatasetImportJobsResponse) {
    /**
     * @internal
     */
    ListDatasetImportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListDatasetImportJobsResponse || (ListDatasetImportJobsResponse = {}));
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
export var ListForecastExportJobsRequest;
(function (ListForecastExportJobsRequest) {
    /**
     * @internal
     */
    ListForecastExportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListForecastExportJobsRequest || (ListForecastExportJobsRequest = {}));
export var ForecastExportJobSummary;
(function (ForecastExportJobSummary) {
    /**
     * @internal
     */
    ForecastExportJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForecastExportJobSummary || (ForecastExportJobSummary = {}));
export var ListForecastExportJobsResponse;
(function (ListForecastExportJobsResponse) {
    /**
     * @internal
     */
    ListForecastExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListForecastExportJobsResponse || (ListForecastExportJobsResponse = {}));
export var ListForecastsRequest;
(function (ListForecastsRequest) {
    /**
     * @internal
     */
    ListForecastsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListForecastsRequest || (ListForecastsRequest = {}));
export var ForecastSummary;
(function (ForecastSummary) {
    /**
     * @internal
     */
    ForecastSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForecastSummary || (ForecastSummary = {}));
export var ListForecastsResponse;
(function (ListForecastsResponse) {
    /**
     * @internal
     */
    ListForecastsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListForecastsResponse || (ListForecastsResponse = {}));
export var ListPredictorBacktestExportJobsRequest;
(function (ListPredictorBacktestExportJobsRequest) {
    /**
     * @internal
     */
    ListPredictorBacktestExportJobsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPredictorBacktestExportJobsRequest || (ListPredictorBacktestExportJobsRequest = {}));
export var PredictorBacktestExportJobSummary;
(function (PredictorBacktestExportJobSummary) {
    /**
     * @internal
     */
    PredictorBacktestExportJobSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictorBacktestExportJobSummary || (PredictorBacktestExportJobSummary = {}));
export var ListPredictorBacktestExportJobsResponse;
(function (ListPredictorBacktestExportJobsResponse) {
    /**
     * @internal
     */
    ListPredictorBacktestExportJobsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPredictorBacktestExportJobsResponse || (ListPredictorBacktestExportJobsResponse = {}));
export var ListPredictorsRequest;
(function (ListPredictorsRequest) {
    /**
     * @internal
     */
    ListPredictorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPredictorsRequest || (ListPredictorsRequest = {}));
export var PredictorSummary;
(function (PredictorSummary) {
    /**
     * @internal
     */
    PredictorSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PredictorSummary || (PredictorSummary = {}));
export var ListPredictorsResponse;
(function (ListPredictorsResponse) {
    /**
     * @internal
     */
    ListPredictorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPredictorsResponse || (ListPredictorsResponse = {}));
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
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var StopResourceRequest;
(function (StopResourceRequest) {
    /**
     * @internal
     */
    StopResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopResourceRequest || (StopResourceRequest = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Tags && { Tags: obj.Tags.map(function (item) { return Tag.filterSensitiveLog(item); }) }))); };
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
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.TagKeys && { TagKeys: SENSITIVE_STRING }))); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateDatasetGroupRequest;
(function (UpdateDatasetGroupRequest) {
    /**
     * @internal
     */
    UpdateDatasetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetGroupRequest || (UpdateDatasetGroupRequest = {}));
export var UpdateDatasetGroupResponse;
(function (UpdateDatasetGroupResponse) {
    /**
     * @internal
     */
    UpdateDatasetGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateDatasetGroupResponse || (UpdateDatasetGroupResponse = {}));
//# sourceMappingURL=models_0.js.map