import { __assign } from "tslib";
export var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AccessDeniedException || (AccessDeniedException = {}));
export var LambdaConfiguration;
(function (LambdaConfiguration) {
    /**
     * @internal
     */
    LambdaConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaConfiguration || (LambdaConfiguration = {}));
export var SNSConfiguration;
(function (SNSConfiguration) {
    /**
     * @internal
     */
    SNSConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SNSConfiguration || (SNSConfiguration = {}));
export var Action;
(function (Action) {
    /**
     * @internal
     */
    Action.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Action || (Action = {}));
export var ActivateAnomalyDetectorRequest;
(function (ActivateAnomalyDetectorRequest) {
    /**
     * @internal
     */
    ActivateAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateAnomalyDetectorRequest || (ActivateAnomalyDetectorRequest = {}));
export var ActivateAnomalyDetectorResponse;
(function (ActivateAnomalyDetectorResponse) {
    /**
     * @internal
     */
    ActivateAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateAnomalyDetectorResponse || (ActivateAnomalyDetectorResponse = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
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
export var TooManyRequestsException;
(function (TooManyRequestsException) {
    /**
     * @internal
     */
    TooManyRequestsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyRequestsException || (TooManyRequestsException = {}));
export var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationExceptionField || (ValidationExceptionField = {}));
export var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason || (ValidationExceptionReason = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AggregationFunction;
(function (AggregationFunction) {
    AggregationFunction["AVG"] = "AVG";
    AggregationFunction["SUM"] = "SUM";
})(AggregationFunction || (AggregationFunction = {}));
export var AlertStatus;
(function (AlertStatus) {
    AlertStatus["ACTIVE"] = "ACTIVE";
    AlertStatus["INACTIVE"] = "INACTIVE";
})(AlertStatus || (AlertStatus = {}));
export var AlertType;
(function (AlertType) {
    AlertType["LAMBDA"] = "LAMBDA";
    AlertType["SNS"] = "SNS";
})(AlertType || (AlertType = {}));
export var Alert;
(function (Alert) {
    /**
     * @internal
     */
    Alert.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alert || (Alert = {}));
export var AlertSummary;
(function (AlertSummary) {
    /**
     * @internal
     */
    AlertSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AlertSummary || (AlertSummary = {}));
export var AnomalyDetectionTaskStatus;
(function (AnomalyDetectionTaskStatus) {
    AnomalyDetectionTaskStatus["COMPLETED"] = "COMPLETED";
    AnomalyDetectionTaskStatus["FAILED"] = "FAILED";
    AnomalyDetectionTaskStatus["FAILED_TO_SCHEDULE"] = "FAILED_TO_SCHEDULE";
    AnomalyDetectionTaskStatus["IN_PROGRESS"] = "IN_PROGRESS";
    AnomalyDetectionTaskStatus["PENDING"] = "PENDING";
})(AnomalyDetectionTaskStatus || (AnomalyDetectionTaskStatus = {}));
export var Frequency;
(function (Frequency) {
    Frequency["P1D"] = "P1D";
    Frequency["PT10M"] = "PT10M";
    Frequency["PT1H"] = "PT1H";
    Frequency["PT5M"] = "PT5M";
})(Frequency || (Frequency = {}));
export var AnomalyDetectorConfig;
(function (AnomalyDetectorConfig) {
    /**
     * @internal
     */
    AnomalyDetectorConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyDetectorConfig || (AnomalyDetectorConfig = {}));
export var AnomalyDetectorConfigSummary;
(function (AnomalyDetectorConfigSummary) {
    /**
     * @internal
     */
    AnomalyDetectorConfigSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyDetectorConfigSummary || (AnomalyDetectorConfigSummary = {}));
export var AnomalyDetectorStatus;
(function (AnomalyDetectorStatus) {
    AnomalyDetectorStatus["ACTIVATING"] = "ACTIVATING";
    AnomalyDetectorStatus["ACTIVE"] = "ACTIVE";
    AnomalyDetectorStatus["BACK_TEST_ACTIVATING"] = "BACK_TEST_ACTIVATING";
    AnomalyDetectorStatus["BACK_TEST_ACTIVE"] = "BACK_TEST_ACTIVE";
    AnomalyDetectorStatus["BACK_TEST_COMPLETE"] = "BACK_TEST_COMPLETE";
    AnomalyDetectorStatus["DELETING"] = "DELETING";
    AnomalyDetectorStatus["FAILED"] = "FAILED";
    AnomalyDetectorStatus["INACTIVE"] = "INACTIVE";
})(AnomalyDetectorStatus || (AnomalyDetectorStatus = {}));
export var AnomalyDetectorSummary;
(function (AnomalyDetectorSummary) {
    /**
     * @internal
     */
    AnomalyDetectorSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyDetectorSummary || (AnomalyDetectorSummary = {}));
export var DimensionValueContribution;
(function (DimensionValueContribution) {
    /**
     * @internal
     */
    DimensionValueContribution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DimensionValueContribution || (DimensionValueContribution = {}));
export var DimensionContribution;
(function (DimensionContribution) {
    /**
     * @internal
     */
    DimensionContribution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DimensionContribution || (DimensionContribution = {}));
export var ContributionMatrix;
(function (ContributionMatrix) {
    /**
     * @internal
     */
    ContributionMatrix.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContributionMatrix || (ContributionMatrix = {}));
export var MetricLevelImpact;
(function (MetricLevelImpact) {
    /**
     * @internal
     */
    MetricLevelImpact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricLevelImpact || (MetricLevelImpact = {}));
export var AnomalyGroup;
(function (AnomalyGroup) {
    /**
     * @internal
     */
    AnomalyGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyGroup || (AnomalyGroup = {}));
export var ItemizedMetricStats;
(function (ItemizedMetricStats) {
    /**
     * @internal
     */
    ItemizedMetricStats.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ItemizedMetricStats || (ItemizedMetricStats = {}));
export var AnomalyGroupStatistics;
(function (AnomalyGroupStatistics) {
    /**
     * @internal
     */
    AnomalyGroupStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyGroupStatistics || (AnomalyGroupStatistics = {}));
export var AnomalyGroupSummary;
(function (AnomalyGroupSummary) {
    /**
     * @internal
     */
    AnomalyGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyGroupSummary || (AnomalyGroupSummary = {}));
export var AnomalyGroupTimeSeries;
(function (AnomalyGroupTimeSeries) {
    /**
     * @internal
     */
    AnomalyGroupTimeSeries.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyGroupTimeSeries || (AnomalyGroupTimeSeries = {}));
export var AnomalyGroupTimeSeriesFeedback;
(function (AnomalyGroupTimeSeriesFeedback) {
    /**
     * @internal
     */
    AnomalyGroupTimeSeriesFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyGroupTimeSeriesFeedback || (AnomalyGroupTimeSeriesFeedback = {}));
export var AppFlowConfig;
(function (AppFlowConfig) {
    /**
     * @internal
     */
    AppFlowConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AppFlowConfig || (AppFlowConfig = {}));
export var BackTestAnomalyDetectorRequest;
(function (BackTestAnomalyDetectorRequest) {
    /**
     * @internal
     */
    BackTestAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackTestAnomalyDetectorRequest || (BackTestAnomalyDetectorRequest = {}));
export var BackTestAnomalyDetectorResponse;
(function (BackTestAnomalyDetectorResponse) {
    /**
     * @internal
     */
    BackTestAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackTestAnomalyDetectorResponse || (BackTestAnomalyDetectorResponse = {}));
export var CloudWatchConfig;
(function (CloudWatchConfig) {
    /**
     * @internal
     */
    CloudWatchConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CloudWatchConfig || (CloudWatchConfig = {}));
export var CreateAlertRequest;
(function (CreateAlertRequest) {
    /**
     * @internal
     */
    CreateAlertRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAlertRequest || (CreateAlertRequest = {}));
export var CreateAlertResponse;
(function (CreateAlertResponse) {
    /**
     * @internal
     */
    CreateAlertResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAlertResponse || (CreateAlertResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var CreateAnomalyDetectorRequest;
(function (CreateAnomalyDetectorRequest) {
    /**
     * @internal
     */
    CreateAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalyDetectorRequest || (CreateAnomalyDetectorRequest = {}));
export var CreateAnomalyDetectorResponse;
(function (CreateAnomalyDetectorResponse) {
    /**
     * @internal
     */
    CreateAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalyDetectorResponse || (CreateAnomalyDetectorResponse = {}));
export var Metric;
(function (Metric) {
    /**
     * @internal
     */
    Metric.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Metric || (Metric = {}));
export var VpcConfiguration;
(function (VpcConfiguration) {
    /**
     * @internal
     */
    VpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VpcConfiguration || (VpcConfiguration = {}));
export var RDSSourceConfig;
(function (RDSSourceConfig) {
    /**
     * @internal
     */
    RDSSourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSSourceConfig || (RDSSourceConfig = {}));
export var RedshiftSourceConfig;
(function (RedshiftSourceConfig) {
    /**
     * @internal
     */
    RedshiftSourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftSourceConfig || (RedshiftSourceConfig = {}));
export var CSVFileCompression;
(function (CSVFileCompression) {
    CSVFileCompression["GZIP"] = "GZIP";
    CSVFileCompression["NONE"] = "NONE";
})(CSVFileCompression || (CSVFileCompression = {}));
export var CsvFormatDescriptor;
(function (CsvFormatDescriptor) {
    /**
     * @internal
     */
    CsvFormatDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CsvFormatDescriptor || (CsvFormatDescriptor = {}));
export var JsonFileCompression;
(function (JsonFileCompression) {
    JsonFileCompression["GZIP"] = "GZIP";
    JsonFileCompression["NONE"] = "NONE";
})(JsonFileCompression || (JsonFileCompression = {}));
export var JsonFormatDescriptor;
(function (JsonFormatDescriptor) {
    /**
     * @internal
     */
    JsonFormatDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JsonFormatDescriptor || (JsonFormatDescriptor = {}));
export var FileFormatDescriptor;
(function (FileFormatDescriptor) {
    /**
     * @internal
     */
    FileFormatDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FileFormatDescriptor || (FileFormatDescriptor = {}));
export var S3SourceConfig;
(function (S3SourceConfig) {
    /**
     * @internal
     */
    S3SourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3SourceConfig || (S3SourceConfig = {}));
export var MetricSource;
(function (MetricSource) {
    /**
     * @internal
     */
    MetricSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricSource || (MetricSource = {}));
export var TimestampColumn;
(function (TimestampColumn) {
    /**
     * @internal
     */
    TimestampColumn.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimestampColumn || (TimestampColumn = {}));
export var CreateMetricSetRequest;
(function (CreateMetricSetRequest) {
    /**
     * @internal
     */
    CreateMetricSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMetricSetRequest || (CreateMetricSetRequest = {}));
export var CreateMetricSetResponse;
(function (CreateMetricSetResponse) {
    /**
     * @internal
     */
    CreateMetricSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateMetricSetResponse || (CreateMetricSetResponse = {}));
export var DeleteAlertRequest;
(function (DeleteAlertRequest) {
    /**
     * @internal
     */
    DeleteAlertRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAlertRequest || (DeleteAlertRequest = {}));
export var DeleteAlertResponse;
(function (DeleteAlertResponse) {
    /**
     * @internal
     */
    DeleteAlertResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAlertResponse || (DeleteAlertResponse = {}));
export var DeleteAnomalyDetectorRequest;
(function (DeleteAnomalyDetectorRequest) {
    /**
     * @internal
     */
    DeleteAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalyDetectorRequest || (DeleteAnomalyDetectorRequest = {}));
export var DeleteAnomalyDetectorResponse;
(function (DeleteAnomalyDetectorResponse) {
    /**
     * @internal
     */
    DeleteAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalyDetectorResponse || (DeleteAnomalyDetectorResponse = {}));
export var DescribeAlertRequest;
(function (DescribeAlertRequest) {
    /**
     * @internal
     */
    DescribeAlertRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAlertRequest || (DescribeAlertRequest = {}));
export var DescribeAlertResponse;
(function (DescribeAlertResponse) {
    /**
     * @internal
     */
    DescribeAlertResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAlertResponse || (DescribeAlertResponse = {}));
export var DescribeAnomalyDetectionExecutionsRequest;
(function (DescribeAnomalyDetectionExecutionsRequest) {
    /**
     * @internal
     */
    DescribeAnomalyDetectionExecutionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAnomalyDetectionExecutionsRequest || (DescribeAnomalyDetectionExecutionsRequest = {}));
export var ExecutionStatus;
(function (ExecutionStatus) {
    /**
     * @internal
     */
    ExecutionStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionStatus || (ExecutionStatus = {}));
export var DescribeAnomalyDetectionExecutionsResponse;
(function (DescribeAnomalyDetectionExecutionsResponse) {
    /**
     * @internal
     */
    DescribeAnomalyDetectionExecutionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAnomalyDetectionExecutionsResponse || (DescribeAnomalyDetectionExecutionsResponse = {}));
export var DescribeAnomalyDetectorRequest;
(function (DescribeAnomalyDetectorRequest) {
    /**
     * @internal
     */
    DescribeAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAnomalyDetectorRequest || (DescribeAnomalyDetectorRequest = {}));
export var DescribeAnomalyDetectorResponse;
(function (DescribeAnomalyDetectorResponse) {
    /**
     * @internal
     */
    DescribeAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAnomalyDetectorResponse || (DescribeAnomalyDetectorResponse = {}));
export var DescribeMetricSetRequest;
(function (DescribeMetricSetRequest) {
    /**
     * @internal
     */
    DescribeMetricSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMetricSetRequest || (DescribeMetricSetRequest = {}));
export var DescribeMetricSetResponse;
(function (DescribeMetricSetResponse) {
    /**
     * @internal
     */
    DescribeMetricSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeMetricSetResponse || (DescribeMetricSetResponse = {}));
export var DimensionNameValue;
(function (DimensionNameValue) {
    /**
     * @internal
     */
    DimensionNameValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DimensionNameValue || (DimensionNameValue = {}));
export var GetAnomalyGroupRequest;
(function (GetAnomalyGroupRequest) {
    /**
     * @internal
     */
    GetAnomalyGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalyGroupRequest || (GetAnomalyGroupRequest = {}));
export var GetAnomalyGroupResponse;
(function (GetAnomalyGroupResponse) {
    /**
     * @internal
     */
    GetAnomalyGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalyGroupResponse || (GetAnomalyGroupResponse = {}));
export var GetFeedbackRequest;
(function (GetFeedbackRequest) {
    /**
     * @internal
     */
    GetFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFeedbackRequest || (GetFeedbackRequest = {}));
export var TimeSeriesFeedback;
(function (TimeSeriesFeedback) {
    /**
     * @internal
     */
    TimeSeriesFeedback.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeSeriesFeedback || (TimeSeriesFeedback = {}));
export var GetFeedbackResponse;
(function (GetFeedbackResponse) {
    /**
     * @internal
     */
    GetFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetFeedbackResponse || (GetFeedbackResponse = {}));
export var SampleDataS3SourceConfig;
(function (SampleDataS3SourceConfig) {
    /**
     * @internal
     */
    SampleDataS3SourceConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SampleDataS3SourceConfig || (SampleDataS3SourceConfig = {}));
export var GetSampleDataRequest;
(function (GetSampleDataRequest) {
    /**
     * @internal
     */
    GetSampleDataRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSampleDataRequest || (GetSampleDataRequest = {}));
export var GetSampleDataResponse;
(function (GetSampleDataResponse) {
    /**
     * @internal
     */
    GetSampleDataResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSampleDataResponse || (GetSampleDataResponse = {}));
export var ListAlertsRequest;
(function (ListAlertsRequest) {
    /**
     * @internal
     */
    ListAlertsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAlertsRequest || (ListAlertsRequest = {}));
export var ListAlertsResponse;
(function (ListAlertsResponse) {
    /**
     * @internal
     */
    ListAlertsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAlertsResponse || (ListAlertsResponse = {}));
export var ListAnomalyDetectorsRequest;
(function (ListAnomalyDetectorsRequest) {
    /**
     * @internal
     */
    ListAnomalyDetectorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyDetectorsRequest || (ListAnomalyDetectorsRequest = {}));
export var ListAnomalyDetectorsResponse;
(function (ListAnomalyDetectorsResponse) {
    /**
     * @internal
     */
    ListAnomalyDetectorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyDetectorsResponse || (ListAnomalyDetectorsResponse = {}));
export var ListAnomalyGroupSummariesRequest;
(function (ListAnomalyGroupSummariesRequest) {
    /**
     * @internal
     */
    ListAnomalyGroupSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyGroupSummariesRequest || (ListAnomalyGroupSummariesRequest = {}));
export var ListAnomalyGroupSummariesResponse;
(function (ListAnomalyGroupSummariesResponse) {
    /**
     * @internal
     */
    ListAnomalyGroupSummariesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyGroupSummariesResponse || (ListAnomalyGroupSummariesResponse = {}));
export var ListAnomalyGroupTimeSeriesRequest;
(function (ListAnomalyGroupTimeSeriesRequest) {
    /**
     * @internal
     */
    ListAnomalyGroupTimeSeriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyGroupTimeSeriesRequest || (ListAnomalyGroupTimeSeriesRequest = {}));
export var TimeSeries;
(function (TimeSeries) {
    /**
     * @internal
     */
    TimeSeries.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeSeries || (TimeSeries = {}));
export var ListAnomalyGroupTimeSeriesResponse;
(function (ListAnomalyGroupTimeSeriesResponse) {
    /**
     * @internal
     */
    ListAnomalyGroupTimeSeriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAnomalyGroupTimeSeriesResponse || (ListAnomalyGroupTimeSeriesResponse = {}));
export var ListMetricSetsRequest;
(function (ListMetricSetsRequest) {
    /**
     * @internal
     */
    ListMetricSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMetricSetsRequest || (ListMetricSetsRequest = {}));
export var MetricSetSummary;
(function (MetricSetSummary) {
    /**
     * @internal
     */
    MetricSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricSetSummary || (MetricSetSummary = {}));
export var ListMetricSetsResponse;
(function (ListMetricSetsResponse) {
    /**
     * @internal
     */
    ListMetricSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListMetricSetsResponse || (ListMetricSetsResponse = {}));
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
export var PutFeedbackRequest;
(function (PutFeedbackRequest) {
    /**
     * @internal
     */
    PutFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutFeedbackRequest || (PutFeedbackRequest = {}));
export var PutFeedbackResponse;
(function (PutFeedbackResponse) {
    /**
     * @internal
     */
    PutFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutFeedbackResponse || (PutFeedbackResponse = {}));
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
export var UpdateAnomalyDetectorRequest;
(function (UpdateAnomalyDetectorRequest) {
    /**
     * @internal
     */
    UpdateAnomalyDetectorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalyDetectorRequest || (UpdateAnomalyDetectorRequest = {}));
export var UpdateAnomalyDetectorResponse;
(function (UpdateAnomalyDetectorResponse) {
    /**
     * @internal
     */
    UpdateAnomalyDetectorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalyDetectorResponse || (UpdateAnomalyDetectorResponse = {}));
export var UpdateMetricSetRequest;
(function (UpdateMetricSetRequest) {
    /**
     * @internal
     */
    UpdateMetricSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMetricSetRequest || (UpdateMetricSetRequest = {}));
export var UpdateMetricSetResponse;
(function (UpdateMetricSetResponse) {
    /**
     * @internal
     */
    UpdateMetricSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateMetricSetResponse || (UpdateMetricSetResponse = {}));
//# sourceMappingURL=models_0.js.map