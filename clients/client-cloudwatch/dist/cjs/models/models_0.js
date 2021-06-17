"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableInsightRulesInput = exports.EnableAlarmActionsInput = exports.DisableInsightRulesOutput = exports.DisableInsightRulesInput = exports.DisableAlarmActionsInput = exports.DimensionFilter = exports.DescribeInsightRulesOutput = exports.InsightRule = exports.DescribeInsightRulesInput = exports.DescribeAnomalyDetectorsOutput = exports.DescribeAnomalyDetectorsInput = exports.DescribeAlarmsForMetricOutput = exports.DescribeAlarmsForMetricInput = exports.DescribeAlarmsOutput = exports.MetricAlarm = exports.MetricDataQuery = exports.MetricStat = exports.Metric = exports.DescribeAlarmsInput = exports.InvalidNextToken = exports.DescribeAlarmHistoryOutput = exports.DescribeAlarmHistoryInput = exports.ScanBy = exports.DeleteMetricStreamOutput = exports.DeleteMetricStreamInput = exports.DeleteInsightRulesOutput = exports.DeleteInsightRulesInput = exports.DeleteDashboardsOutput = exports.DeleteDashboardsInput = exports.ResourceNotFoundException = exports.MissingRequiredParameterException = exports.InvalidParameterValueException = exports.InternalServiceFault = exports.DeleteAnomalyDetectorOutput = exports.DeleteAnomalyDetectorInput = exports.ResourceNotFound = exports.DeleteAlarmsInput = exports.Datapoint = exports.DashboardNotFoundError = exports.DashboardInvalidInputError = exports.DashboardValidationMessage = exports.DashboardEntry = exports.ConcurrentModificationException = exports.CompositeAlarm = exports.PartialFailure = exports.AnomalyDetector = exports.Dimension = exports.AnomalyDetectorConfiguration = exports.Range = exports.AlarmHistoryItem = void 0;
exports.InvalidFormatFault = exports.PutMetricStreamOutput = exports.PutMetricStreamInput = exports.PutMetricDataInput = exports.MetricDatum = exports.StatisticSet = exports.PutMetricAlarmInput = exports.PutInsightRuleOutput = exports.PutInsightRuleInput = exports.PutDashboardOutput = exports.PutDashboardInput = exports.PutCompositeAlarmInput = exports.LimitExceededFault = exports.PutAnomalyDetectorOutput = exports.PutAnomalyDetectorInput = exports.ListTagsForResourceOutput = exports.Tag = exports.ListTagsForResourceInput = exports.ListMetricStreamsOutput = exports.MetricStreamEntry = exports.ListMetricStreamsInput = exports.ListMetricsOutput = exports.ListMetricsInput = exports.RecentlyActive = exports.ListDashboardsOutput = exports.ListDashboardsInput = exports.GetMetricWidgetImageOutput = exports.GetMetricWidgetImageInput = exports.GetMetricStreamOutput = exports.MetricStreamOutputFormat = exports.MetricStreamFilter = exports.GetMetricStreamInput = exports.InvalidParameterCombinationException = exports.GetMetricStatisticsOutput = exports.GetMetricStatisticsInput = exports.GetMetricDataOutput = exports.MetricDataResult = exports.StatusCode = exports.MessageData = exports.GetMetricDataInput = exports.LabelOptions = exports.GetInsightRuleReportOutput = exports.InsightRuleMetricDatapoint = exports.InsightRuleContributor = exports.InsightRuleContributorDatapoint = exports.GetInsightRuleReportInput = exports.GetDashboardOutput = exports.GetDashboardInput = exports.LimitExceededException = exports.EnableInsightRulesOutput = void 0;
exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.StopMetricStreamsOutput = exports.StopMetricStreamsInput = exports.StartMetricStreamsOutput = exports.StartMetricStreamsInput = exports.SetAlarmStateInput = void 0;
var AlarmHistoryItem;
(function (AlarmHistoryItem) {
    /**
     * @internal
     */
    AlarmHistoryItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AlarmHistoryItem = exports.AlarmHistoryItem || (exports.AlarmHistoryItem = {}));
var Range;
(function (Range) {
    /**
     * @internal
     */
    Range.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Range = exports.Range || (exports.Range = {}));
var AnomalyDetectorConfiguration;
(function (AnomalyDetectorConfiguration) {
    /**
     * @internal
     */
    AnomalyDetectorConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyDetectorConfiguration = exports.AnomalyDetectorConfiguration || (exports.AnomalyDetectorConfiguration = {}));
var Dimension;
(function (Dimension) {
    /**
     * @internal
     */
    Dimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var AnomalyDetector;
(function (AnomalyDetector) {
    /**
     * @internal
     */
    AnomalyDetector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyDetector = exports.AnomalyDetector || (exports.AnomalyDetector = {}));
var PartialFailure;
(function (PartialFailure) {
    /**
     * @internal
     */
    PartialFailure.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartialFailure = exports.PartialFailure || (exports.PartialFailure = {}));
var CompositeAlarm;
(function (CompositeAlarm) {
    /**
     * @internal
     */
    CompositeAlarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CompositeAlarm = exports.CompositeAlarm || (exports.CompositeAlarm = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var DashboardEntry;
(function (DashboardEntry) {
    /**
     * @internal
     */
    DashboardEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardEntry = exports.DashboardEntry || (exports.DashboardEntry = {}));
var DashboardValidationMessage;
(function (DashboardValidationMessage) {
    /**
     * @internal
     */
    DashboardValidationMessage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardValidationMessage = exports.DashboardValidationMessage || (exports.DashboardValidationMessage = {}));
var DashboardInvalidInputError;
(function (DashboardInvalidInputError) {
    /**
     * @internal
     */
    DashboardInvalidInputError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardInvalidInputError = exports.DashboardInvalidInputError || (exports.DashboardInvalidInputError = {}));
var DashboardNotFoundError;
(function (DashboardNotFoundError) {
    /**
     * @internal
     */
    DashboardNotFoundError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DashboardNotFoundError = exports.DashboardNotFoundError || (exports.DashboardNotFoundError = {}));
var Datapoint;
(function (Datapoint) {
    /**
     * @internal
     */
    Datapoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Datapoint = exports.Datapoint || (exports.Datapoint = {}));
var DeleteAlarmsInput;
(function (DeleteAlarmsInput) {
    /**
     * @internal
     */
    DeleteAlarmsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAlarmsInput = exports.DeleteAlarmsInput || (exports.DeleteAlarmsInput = {}));
var ResourceNotFound;
(function (ResourceNotFound) {
    /**
     * @internal
     */
    ResourceNotFound.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFound = exports.ResourceNotFound || (exports.ResourceNotFound = {}));
var DeleteAnomalyDetectorInput;
(function (DeleteAnomalyDetectorInput) {
    /**
     * @internal
     */
    DeleteAnomalyDetectorInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalyDetectorInput = exports.DeleteAnomalyDetectorInput || (exports.DeleteAnomalyDetectorInput = {}));
var DeleteAnomalyDetectorOutput;
(function (DeleteAnomalyDetectorOutput) {
    /**
     * @internal
     */
    DeleteAnomalyDetectorOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalyDetectorOutput = exports.DeleteAnomalyDetectorOutput || (exports.DeleteAnomalyDetectorOutput = {}));
var InternalServiceFault;
(function (InternalServiceFault) {
    /**
     * @internal
     */
    InternalServiceFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceFault = exports.InternalServiceFault || (exports.InternalServiceFault = {}));
var InvalidParameterValueException;
(function (InvalidParameterValueException) {
    /**
     * @internal
     */
    InvalidParameterValueException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterValueException = exports.InvalidParameterValueException || (exports.InvalidParameterValueException = {}));
var MissingRequiredParameterException;
(function (MissingRequiredParameterException) {
    /**
     * @internal
     */
    MissingRequiredParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MissingRequiredParameterException = exports.MissingRequiredParameterException || (exports.MissingRequiredParameterException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DeleteDashboardsInput;
(function (DeleteDashboardsInput) {
    /**
     * @internal
     */
    DeleteDashboardsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardsInput = exports.DeleteDashboardsInput || (exports.DeleteDashboardsInput = {}));
var DeleteDashboardsOutput;
(function (DeleteDashboardsOutput) {
    /**
     * @internal
     */
    DeleteDashboardsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteDashboardsOutput = exports.DeleteDashboardsOutput || (exports.DeleteDashboardsOutput = {}));
var DeleteInsightRulesInput;
(function (DeleteInsightRulesInput) {
    /**
     * @internal
     */
    DeleteInsightRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInsightRulesInput = exports.DeleteInsightRulesInput || (exports.DeleteInsightRulesInput = {}));
var DeleteInsightRulesOutput;
(function (DeleteInsightRulesOutput) {
    /**
     * @internal
     */
    DeleteInsightRulesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteInsightRulesOutput = exports.DeleteInsightRulesOutput || (exports.DeleteInsightRulesOutput = {}));
var DeleteMetricStreamInput;
(function (DeleteMetricStreamInput) {
    /**
     * @internal
     */
    DeleteMetricStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMetricStreamInput = exports.DeleteMetricStreamInput || (exports.DeleteMetricStreamInput = {}));
var DeleteMetricStreamOutput;
(function (DeleteMetricStreamOutput) {
    /**
     * @internal
     */
    DeleteMetricStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMetricStreamOutput = exports.DeleteMetricStreamOutput || (exports.DeleteMetricStreamOutput = {}));
var ScanBy;
(function (ScanBy) {
    ScanBy["TIMESTAMP_ASCENDING"] = "TimestampAscending";
    ScanBy["TIMESTAMP_DESCENDING"] = "TimestampDescending";
})(ScanBy = exports.ScanBy || (exports.ScanBy = {}));
var DescribeAlarmHistoryInput;
(function (DescribeAlarmHistoryInput) {
    /**
     * @internal
     */
    DescribeAlarmHistoryInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmHistoryInput = exports.DescribeAlarmHistoryInput || (exports.DescribeAlarmHistoryInput = {}));
var DescribeAlarmHistoryOutput;
(function (DescribeAlarmHistoryOutput) {
    /**
     * @internal
     */
    DescribeAlarmHistoryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmHistoryOutput = exports.DescribeAlarmHistoryOutput || (exports.DescribeAlarmHistoryOutput = {}));
var InvalidNextToken;
(function (InvalidNextToken) {
    /**
     * @internal
     */
    InvalidNextToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextToken = exports.InvalidNextToken || (exports.InvalidNextToken = {}));
var DescribeAlarmsInput;
(function (DescribeAlarmsInput) {
    /**
     * @internal
     */
    DescribeAlarmsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmsInput = exports.DescribeAlarmsInput || (exports.DescribeAlarmsInput = {}));
var Metric;
(function (Metric) {
    /**
     * @internal
     */
    Metric.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Metric = exports.Metric || (exports.Metric = {}));
var MetricStat;
(function (MetricStat) {
    /**
     * @internal
     */
    MetricStat.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricStat = exports.MetricStat || (exports.MetricStat = {}));
var MetricDataQuery;
(function (MetricDataQuery) {
    /**
     * @internal
     */
    MetricDataQuery.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDataQuery = exports.MetricDataQuery || (exports.MetricDataQuery = {}));
var MetricAlarm;
(function (MetricAlarm) {
    /**
     * @internal
     */
    MetricAlarm.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricAlarm = exports.MetricAlarm || (exports.MetricAlarm = {}));
var DescribeAlarmsOutput;
(function (DescribeAlarmsOutput) {
    /**
     * @internal
     */
    DescribeAlarmsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmsOutput = exports.DescribeAlarmsOutput || (exports.DescribeAlarmsOutput = {}));
var DescribeAlarmsForMetricInput;
(function (DescribeAlarmsForMetricInput) {
    /**
     * @internal
     */
    DescribeAlarmsForMetricInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmsForMetricInput = exports.DescribeAlarmsForMetricInput || (exports.DescribeAlarmsForMetricInput = {}));
var DescribeAlarmsForMetricOutput;
(function (DescribeAlarmsForMetricOutput) {
    /**
     * @internal
     */
    DescribeAlarmsForMetricOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAlarmsForMetricOutput = exports.DescribeAlarmsForMetricOutput || (exports.DescribeAlarmsForMetricOutput = {}));
var DescribeAnomalyDetectorsInput;
(function (DescribeAnomalyDetectorsInput) {
    /**
     * @internal
     */
    DescribeAnomalyDetectorsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnomalyDetectorsInput = exports.DescribeAnomalyDetectorsInput || (exports.DescribeAnomalyDetectorsInput = {}));
var DescribeAnomalyDetectorsOutput;
(function (DescribeAnomalyDetectorsOutput) {
    /**
     * @internal
     */
    DescribeAnomalyDetectorsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnomalyDetectorsOutput = exports.DescribeAnomalyDetectorsOutput || (exports.DescribeAnomalyDetectorsOutput = {}));
var DescribeInsightRulesInput;
(function (DescribeInsightRulesInput) {
    /**
     * @internal
     */
    DescribeInsightRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInsightRulesInput = exports.DescribeInsightRulesInput || (exports.DescribeInsightRulesInput = {}));
var InsightRule;
(function (InsightRule) {
    /**
     * @internal
     */
    InsightRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightRule = exports.InsightRule || (exports.InsightRule = {}));
var DescribeInsightRulesOutput;
(function (DescribeInsightRulesOutput) {
    /**
     * @internal
     */
    DescribeInsightRulesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInsightRulesOutput = exports.DescribeInsightRulesOutput || (exports.DescribeInsightRulesOutput = {}));
var DimensionFilter;
(function (DimensionFilter) {
    /**
     * @internal
     */
    DimensionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DimensionFilter = exports.DimensionFilter || (exports.DimensionFilter = {}));
var DisableAlarmActionsInput;
(function (DisableAlarmActionsInput) {
    /**
     * @internal
     */
    DisableAlarmActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableAlarmActionsInput = exports.DisableAlarmActionsInput || (exports.DisableAlarmActionsInput = {}));
var DisableInsightRulesInput;
(function (DisableInsightRulesInput) {
    /**
     * @internal
     */
    DisableInsightRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableInsightRulesInput = exports.DisableInsightRulesInput || (exports.DisableInsightRulesInput = {}));
var DisableInsightRulesOutput;
(function (DisableInsightRulesOutput) {
    /**
     * @internal
     */
    DisableInsightRulesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableInsightRulesOutput = exports.DisableInsightRulesOutput || (exports.DisableInsightRulesOutput = {}));
var EnableAlarmActionsInput;
(function (EnableAlarmActionsInput) {
    /**
     * @internal
     */
    EnableAlarmActionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableAlarmActionsInput = exports.EnableAlarmActionsInput || (exports.EnableAlarmActionsInput = {}));
var EnableInsightRulesInput;
(function (EnableInsightRulesInput) {
    /**
     * @internal
     */
    EnableInsightRulesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableInsightRulesInput = exports.EnableInsightRulesInput || (exports.EnableInsightRulesInput = {}));
var EnableInsightRulesOutput;
(function (EnableInsightRulesOutput) {
    /**
     * @internal
     */
    EnableInsightRulesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableInsightRulesOutput = exports.EnableInsightRulesOutput || (exports.EnableInsightRulesOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var GetDashboardInput;
(function (GetDashboardInput) {
    /**
     * @internal
     */
    GetDashboardInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDashboardInput = exports.GetDashboardInput || (exports.GetDashboardInput = {}));
var GetDashboardOutput;
(function (GetDashboardOutput) {
    /**
     * @internal
     */
    GetDashboardOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDashboardOutput = exports.GetDashboardOutput || (exports.GetDashboardOutput = {}));
var GetInsightRuleReportInput;
(function (GetInsightRuleReportInput) {
    /**
     * @internal
     */
    GetInsightRuleReportInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightRuleReportInput = exports.GetInsightRuleReportInput || (exports.GetInsightRuleReportInput = {}));
var InsightRuleContributorDatapoint;
(function (InsightRuleContributorDatapoint) {
    /**
     * @internal
     */
    InsightRuleContributorDatapoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightRuleContributorDatapoint = exports.InsightRuleContributorDatapoint || (exports.InsightRuleContributorDatapoint = {}));
var InsightRuleContributor;
(function (InsightRuleContributor) {
    /**
     * @internal
     */
    InsightRuleContributor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightRuleContributor = exports.InsightRuleContributor || (exports.InsightRuleContributor = {}));
var InsightRuleMetricDatapoint;
(function (InsightRuleMetricDatapoint) {
    /**
     * @internal
     */
    InsightRuleMetricDatapoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightRuleMetricDatapoint = exports.InsightRuleMetricDatapoint || (exports.InsightRuleMetricDatapoint = {}));
var GetInsightRuleReportOutput;
(function (GetInsightRuleReportOutput) {
    /**
     * @internal
     */
    GetInsightRuleReportOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightRuleReportOutput = exports.GetInsightRuleReportOutput || (exports.GetInsightRuleReportOutput = {}));
var LabelOptions;
(function (LabelOptions) {
    /**
     * @internal
     */
    LabelOptions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelOptions = exports.LabelOptions || (exports.LabelOptions = {}));
var GetMetricDataInput;
(function (GetMetricDataInput) {
    /**
     * @internal
     */
    GetMetricDataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricDataInput = exports.GetMetricDataInput || (exports.GetMetricDataInput = {}));
var MessageData;
(function (MessageData) {
    /**
     * @internal
     */
    MessageData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MessageData = exports.MessageData || (exports.MessageData = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode["COMPLETE"] = "Complete";
    StatusCode["INTERNAL_ERROR"] = "InternalError";
    StatusCode["PARTIAL_DATA"] = "PartialData";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
var MetricDataResult;
(function (MetricDataResult) {
    /**
     * @internal
     */
    MetricDataResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDataResult = exports.MetricDataResult || (exports.MetricDataResult = {}));
var GetMetricDataOutput;
(function (GetMetricDataOutput) {
    /**
     * @internal
     */
    GetMetricDataOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricDataOutput = exports.GetMetricDataOutput || (exports.GetMetricDataOutput = {}));
var GetMetricStatisticsInput;
(function (GetMetricStatisticsInput) {
    /**
     * @internal
     */
    GetMetricStatisticsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricStatisticsInput = exports.GetMetricStatisticsInput || (exports.GetMetricStatisticsInput = {}));
var GetMetricStatisticsOutput;
(function (GetMetricStatisticsOutput) {
    /**
     * @internal
     */
    GetMetricStatisticsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricStatisticsOutput = exports.GetMetricStatisticsOutput || (exports.GetMetricStatisticsOutput = {}));
var InvalidParameterCombinationException;
(function (InvalidParameterCombinationException) {
    /**
     * @internal
     */
    InvalidParameterCombinationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterCombinationException = exports.InvalidParameterCombinationException || (exports.InvalidParameterCombinationException = {}));
var GetMetricStreamInput;
(function (GetMetricStreamInput) {
    /**
     * @internal
     */
    GetMetricStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricStreamInput = exports.GetMetricStreamInput || (exports.GetMetricStreamInput = {}));
var MetricStreamFilter;
(function (MetricStreamFilter) {
    /**
     * @internal
     */
    MetricStreamFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricStreamFilter = exports.MetricStreamFilter || (exports.MetricStreamFilter = {}));
var MetricStreamOutputFormat;
(function (MetricStreamOutputFormat) {
    MetricStreamOutputFormat["JSON"] = "json";
    MetricStreamOutputFormat["OPEN_TELEMETRY_0_7"] = "opentelemetry0.7";
})(MetricStreamOutputFormat = exports.MetricStreamOutputFormat || (exports.MetricStreamOutputFormat = {}));
var GetMetricStreamOutput;
(function (GetMetricStreamOutput) {
    /**
     * @internal
     */
    GetMetricStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricStreamOutput = exports.GetMetricStreamOutput || (exports.GetMetricStreamOutput = {}));
var GetMetricWidgetImageInput;
(function (GetMetricWidgetImageInput) {
    /**
     * @internal
     */
    GetMetricWidgetImageInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricWidgetImageInput = exports.GetMetricWidgetImageInput || (exports.GetMetricWidgetImageInput = {}));
var GetMetricWidgetImageOutput;
(function (GetMetricWidgetImageOutput) {
    /**
     * @internal
     */
    GetMetricWidgetImageOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricWidgetImageOutput = exports.GetMetricWidgetImageOutput || (exports.GetMetricWidgetImageOutput = {}));
var ListDashboardsInput;
(function (ListDashboardsInput) {
    /**
     * @internal
     */
    ListDashboardsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsInput = exports.ListDashboardsInput || (exports.ListDashboardsInput = {}));
var ListDashboardsOutput;
(function (ListDashboardsOutput) {
    /**
     * @internal
     */
    ListDashboardsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListDashboardsOutput = exports.ListDashboardsOutput || (exports.ListDashboardsOutput = {}));
var RecentlyActive;
(function (RecentlyActive) {
    RecentlyActive["PT3H"] = "PT3H";
})(RecentlyActive = exports.RecentlyActive || (exports.RecentlyActive = {}));
var ListMetricsInput;
(function (ListMetricsInput) {
    /**
     * @internal
     */
    ListMetricsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMetricsInput = exports.ListMetricsInput || (exports.ListMetricsInput = {}));
var ListMetricsOutput;
(function (ListMetricsOutput) {
    /**
     * @internal
     */
    ListMetricsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMetricsOutput = exports.ListMetricsOutput || (exports.ListMetricsOutput = {}));
var ListMetricStreamsInput;
(function (ListMetricStreamsInput) {
    /**
     * @internal
     */
    ListMetricStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMetricStreamsInput = exports.ListMetricStreamsInput || (exports.ListMetricStreamsInput = {}));
var MetricStreamEntry;
(function (MetricStreamEntry) {
    /**
     * @internal
     */
    MetricStreamEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricStreamEntry = exports.MetricStreamEntry || (exports.MetricStreamEntry = {}));
var ListMetricStreamsOutput;
(function (ListMetricStreamsOutput) {
    /**
     * @internal
     */
    ListMetricStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListMetricStreamsOutput = exports.ListMetricStreamsOutput || (exports.ListMetricStreamsOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var PutAnomalyDetectorInput;
(function (PutAnomalyDetectorInput) {
    /**
     * @internal
     */
    PutAnomalyDetectorInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAnomalyDetectorInput = exports.PutAnomalyDetectorInput || (exports.PutAnomalyDetectorInput = {}));
var PutAnomalyDetectorOutput;
(function (PutAnomalyDetectorOutput) {
    /**
     * @internal
     */
    PutAnomalyDetectorOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutAnomalyDetectorOutput = exports.PutAnomalyDetectorOutput || (exports.PutAnomalyDetectorOutput = {}));
var LimitExceededFault;
(function (LimitExceededFault) {
    /**
     * @internal
     */
    LimitExceededFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededFault = exports.LimitExceededFault || (exports.LimitExceededFault = {}));
var PutCompositeAlarmInput;
(function (PutCompositeAlarmInput) {
    /**
     * @internal
     */
    PutCompositeAlarmInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCompositeAlarmInput = exports.PutCompositeAlarmInput || (exports.PutCompositeAlarmInput = {}));
var PutDashboardInput;
(function (PutDashboardInput) {
    /**
     * @internal
     */
    PutDashboardInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDashboardInput = exports.PutDashboardInput || (exports.PutDashboardInput = {}));
var PutDashboardOutput;
(function (PutDashboardOutput) {
    /**
     * @internal
     */
    PutDashboardOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutDashboardOutput = exports.PutDashboardOutput || (exports.PutDashboardOutput = {}));
var PutInsightRuleInput;
(function (PutInsightRuleInput) {
    /**
     * @internal
     */
    PutInsightRuleInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInsightRuleInput = exports.PutInsightRuleInput || (exports.PutInsightRuleInput = {}));
var PutInsightRuleOutput;
(function (PutInsightRuleOutput) {
    /**
     * @internal
     */
    PutInsightRuleOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutInsightRuleOutput = exports.PutInsightRuleOutput || (exports.PutInsightRuleOutput = {}));
var PutMetricAlarmInput;
(function (PutMetricAlarmInput) {
    /**
     * @internal
     */
    PutMetricAlarmInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricAlarmInput = exports.PutMetricAlarmInput || (exports.PutMetricAlarmInput = {}));
var StatisticSet;
(function (StatisticSet) {
    /**
     * @internal
     */
    StatisticSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StatisticSet = exports.StatisticSet || (exports.StatisticSet = {}));
var MetricDatum;
(function (MetricDatum) {
    /**
     * @internal
     */
    MetricDatum.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricDatum = exports.MetricDatum || (exports.MetricDatum = {}));
var PutMetricDataInput;
(function (PutMetricDataInput) {
    /**
     * @internal
     */
    PutMetricDataInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricDataInput = exports.PutMetricDataInput || (exports.PutMetricDataInput = {}));
var PutMetricStreamInput;
(function (PutMetricStreamInput) {
    /**
     * @internal
     */
    PutMetricStreamInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricStreamInput = exports.PutMetricStreamInput || (exports.PutMetricStreamInput = {}));
var PutMetricStreamOutput;
(function (PutMetricStreamOutput) {
    /**
     * @internal
     */
    PutMetricStreamOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricStreamOutput = exports.PutMetricStreamOutput || (exports.PutMetricStreamOutput = {}));
var InvalidFormatFault;
(function (InvalidFormatFault) {
    /**
     * @internal
     */
    InvalidFormatFault.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidFormatFault = exports.InvalidFormatFault || (exports.InvalidFormatFault = {}));
var SetAlarmStateInput;
(function (SetAlarmStateInput) {
    /**
     * @internal
     */
    SetAlarmStateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetAlarmStateInput = exports.SetAlarmStateInput || (exports.SetAlarmStateInput = {}));
var StartMetricStreamsInput;
(function (StartMetricStreamsInput) {
    /**
     * @internal
     */
    StartMetricStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMetricStreamsInput = exports.StartMetricStreamsInput || (exports.StartMetricStreamsInput = {}));
var StartMetricStreamsOutput;
(function (StartMetricStreamsOutput) {
    /**
     * @internal
     */
    StartMetricStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartMetricStreamsOutput = exports.StartMetricStreamsOutput || (exports.StartMetricStreamsOutput = {}));
var StopMetricStreamsInput;
(function (StopMetricStreamsInput) {
    /**
     * @internal
     */
    StopMetricStreamsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMetricStreamsInput = exports.StopMetricStreamsInput || (exports.StopMetricStreamsInput = {}));
var StopMetricStreamsOutput;
(function (StopMetricStreamsOutput) {
    /**
     * @internal
     */
    StopMetricStreamsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopMetricStreamsOutput = exports.StopMetricStreamsOutput || (exports.StopMetricStreamsOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
//# sourceMappingURL=models_0.js.map