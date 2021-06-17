"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInsightSummariesRequest = exports.GetInsightImpactGraphResult = exports.InsightImpactGraphService = exports.InsightImpactGraphEdge = exports.GetInsightImpactGraphRequest = exports.GetInsightEventsResult = exports.InsightEvent = exports.GetInsightEventsRequest = exports.GetInsightResult = exports.Insight = exports.InsightState = exports.RequestImpactStatistics = exports.InsightCategory = exports.GetInsightRequest = exports.GetGroupsResult = exports.GroupSummary = exports.GetGroupsRequest = exports.GetGroupResult = exports.GetGroupRequest = exports.GetEncryptionConfigResult = exports.EncryptionConfig = exports.EncryptionType = exports.EncryptionStatus = exports.GetEncryptionConfigRequest = exports.DeleteSamplingRuleResult = exports.DeleteSamplingRuleRequest = exports.DeleteGroupResult = exports.DeleteGroupRequest = exports.RuleLimitExceededException = exports.CreateSamplingRuleResult = exports.SamplingRuleRecord = exports.CreateSamplingRuleRequest = exports.SamplingRule = exports.CreateGroupResult = exports.Group = exports.CreateGroupRequest = exports.Tag = exports.InsightsConfiguration = exports.ThrottledException = exports.InvalidRequestException = exports.BatchGetTracesResult = exports.Trace = exports.Segment = exports.BatchGetTracesRequest = exports.AvailabilityZoneDetail = exports.AnomalousService = exports.ValueWithServiceIds = exports.ServiceId = exports.AnnotationValue = exports.Alias = void 0;
exports.ResourceNotFoundException = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.GetTraceSummariesResult = exports.TraceSummary = exports.TraceUser = exports.ResponseTimeRootCause = exports.ResponseTimeRootCauseService = exports.ResponseTimeRootCauseEntity = exports.ResourceARNDetail = exports.InstanceIdDetail = exports.Http = exports.FaultRootCause = exports.FaultRootCauseService = exports.FaultRootCauseEntity = exports.ErrorRootCause = exports.ErrorRootCauseService = exports.ErrorRootCauseEntity = exports.RootCauseException = exports.GetTraceSummariesRequest = exports.TimeRangeType = exports.SamplingStrategy = exports.SamplingStrategyName = exports.GetTraceGraphResult = exports.GetTraceGraphRequest = exports.GetTimeSeriesServiceStatisticsResult = exports.TimeSeriesServiceStatistics = exports.ForecastStatistics = exports.GetTimeSeriesServiceStatisticsRequest = exports.GetServiceGraphResult = exports.Service = exports.ServiceStatistics = exports.Edge = exports.EdgeStatistics = exports.FaultStatistics = exports.ErrorStatistics = exports.HistogramEntry = exports.GetServiceGraphRequest = exports.GetSamplingTargetsResult = exports.UnprocessedStatistics = exports.SamplingTargetDocument = exports.GetSamplingTargetsRequest = exports.SamplingStatisticsDocument = exports.GetSamplingStatisticSummariesResult = exports.SamplingStatisticSummary = exports.GetSamplingStatisticSummariesRequest = exports.GetSamplingRulesResult = exports.GetSamplingRulesRequest = exports.GetInsightSummariesResult = exports.InsightSummary = void 0;
exports.UpdateSamplingRuleResult = exports.UpdateSamplingRuleRequest = exports.SamplingRuleUpdate = exports.UpdateGroupResult = exports.UpdateGroupRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TooManyTagsException = exports.TagResourceResponse = exports.TagResourceRequest = exports.PutTraceSegmentsResult = exports.UnprocessedTraceSegment = exports.PutTraceSegmentsRequest = exports.PutTelemetryRecordsResult = exports.PutTelemetryRecordsRequest = exports.TelemetryRecord = exports.BackendConnectionErrors = exports.PutEncryptionConfigResult = exports.PutEncryptionConfigRequest = void 0;
var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Alias = exports.Alias || (exports.Alias = {}));
var AnnotationValue;
(function (AnnotationValue) {
    AnnotationValue.visit = (value, visitor) => {
        if (value.NumberValue !== undefined)
            return visitor.NumberValue(value.NumberValue);
        if (value.BooleanValue !== undefined)
            return visitor.BooleanValue(value.BooleanValue);
        if (value.StringValue !== undefined)
            return visitor.StringValue(value.StringValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AnnotationValue.filterSensitiveLog = (obj) => {
        if (obj.NumberValue !== undefined)
            return { NumberValue: obj.NumberValue };
        if (obj.BooleanValue !== undefined)
            return { BooleanValue: obj.BooleanValue };
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AnnotationValue = exports.AnnotationValue || (exports.AnnotationValue = {}));
var ServiceId;
(function (ServiceId) {
    /**
     * @internal
     */
    ServiceId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceId = exports.ServiceId || (exports.ServiceId = {}));
var ValueWithServiceIds;
(function (ValueWithServiceIds) {
    /**
     * @internal
     */
    ValueWithServiceIds.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AnnotationValue && { AnnotationValue: AnnotationValue.filterSensitiveLog(obj.AnnotationValue) }),
    });
})(ValueWithServiceIds = exports.ValueWithServiceIds || (exports.ValueWithServiceIds = {}));
var AnomalousService;
(function (AnomalousService) {
    /**
     * @internal
     */
    AnomalousService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalousService = exports.AnomalousService || (exports.AnomalousService = {}));
var AvailabilityZoneDetail;
(function (AvailabilityZoneDetail) {
    /**
     * @internal
     */
    AvailabilityZoneDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AvailabilityZoneDetail = exports.AvailabilityZoneDetail || (exports.AvailabilityZoneDetail = {}));
var BatchGetTracesRequest;
(function (BatchGetTracesRequest) {
    /**
     * @internal
     */
    BatchGetTracesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetTracesRequest = exports.BatchGetTracesRequest || (exports.BatchGetTracesRequest = {}));
var Segment;
(function (Segment) {
    /**
     * @internal
     */
    Segment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Segment = exports.Segment || (exports.Segment = {}));
var Trace;
(function (Trace) {
    /**
     * @internal
     */
    Trace.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Trace = exports.Trace || (exports.Trace = {}));
var BatchGetTracesResult;
(function (BatchGetTracesResult) {
    /**
     * @internal
     */
    BatchGetTracesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchGetTracesResult = exports.BatchGetTracesResult || (exports.BatchGetTracesResult = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var ThrottledException;
(function (ThrottledException) {
    /**
     * @internal
     */
    ThrottledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottledException = exports.ThrottledException || (exports.ThrottledException = {}));
var InsightsConfiguration;
(function (InsightsConfiguration) {
    /**
     * @internal
     */
    InsightsConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightsConfiguration = exports.InsightsConfiguration || (exports.InsightsConfiguration = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupRequest = exports.CreateGroupRequest || (exports.CreateGroupRequest = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var CreateGroupResult;
(function (CreateGroupResult) {
    /**
     * @internal
     */
    CreateGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGroupResult = exports.CreateGroupResult || (exports.CreateGroupResult = {}));
var SamplingRule;
(function (SamplingRule) {
    /**
     * @internal
     */
    SamplingRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingRule = exports.SamplingRule || (exports.SamplingRule = {}));
var CreateSamplingRuleRequest;
(function (CreateSamplingRuleRequest) {
    /**
     * @internal
     */
    CreateSamplingRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSamplingRuleRequest = exports.CreateSamplingRuleRequest || (exports.CreateSamplingRuleRequest = {}));
var SamplingRuleRecord;
(function (SamplingRuleRecord) {
    /**
     * @internal
     */
    SamplingRuleRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingRuleRecord = exports.SamplingRuleRecord || (exports.SamplingRuleRecord = {}));
var CreateSamplingRuleResult;
(function (CreateSamplingRuleResult) {
    /**
     * @internal
     */
    CreateSamplingRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSamplingRuleResult = exports.CreateSamplingRuleResult || (exports.CreateSamplingRuleResult = {}));
var RuleLimitExceededException;
(function (RuleLimitExceededException) {
    /**
     * @internal
     */
    RuleLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleLimitExceededException = exports.RuleLimitExceededException || (exports.RuleLimitExceededException = {}));
var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupRequest = exports.DeleteGroupRequest || (exports.DeleteGroupRequest = {}));
var DeleteGroupResult;
(function (DeleteGroupResult) {
    /**
     * @internal
     */
    DeleteGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGroupResult = exports.DeleteGroupResult || (exports.DeleteGroupResult = {}));
var DeleteSamplingRuleRequest;
(function (DeleteSamplingRuleRequest) {
    /**
     * @internal
     */
    DeleteSamplingRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSamplingRuleRequest = exports.DeleteSamplingRuleRequest || (exports.DeleteSamplingRuleRequest = {}));
var DeleteSamplingRuleResult;
(function (DeleteSamplingRuleResult) {
    /**
     * @internal
     */
    DeleteSamplingRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSamplingRuleResult = exports.DeleteSamplingRuleResult || (exports.DeleteSamplingRuleResult = {}));
var GetEncryptionConfigRequest;
(function (GetEncryptionConfigRequest) {
    /**
     * @internal
     */
    GetEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEncryptionConfigRequest = exports.GetEncryptionConfigRequest || (exports.GetEncryptionConfigRequest = {}));
var EncryptionStatus;
(function (EncryptionStatus) {
    EncryptionStatus["ACTIVE"] = "ACTIVE";
    EncryptionStatus["UPDATING"] = "UPDATING";
})(EncryptionStatus = exports.EncryptionStatus || (exports.EncryptionStatus = {}));
var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
    EncryptionType["NONE"] = "NONE";
})(EncryptionType = exports.EncryptionType || (exports.EncryptionType = {}));
var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionConfig = exports.EncryptionConfig || (exports.EncryptionConfig = {}));
var GetEncryptionConfigResult;
(function (GetEncryptionConfigResult) {
    /**
     * @internal
     */
    GetEncryptionConfigResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEncryptionConfigResult = exports.GetEncryptionConfigResult || (exports.GetEncryptionConfigResult = {}));
var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupRequest = exports.GetGroupRequest || (exports.GetGroupRequest = {}));
var GetGroupResult;
(function (GetGroupResult) {
    /**
     * @internal
     */
    GetGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupResult = exports.GetGroupResult || (exports.GetGroupResult = {}));
var GetGroupsRequest;
(function (GetGroupsRequest) {
    /**
     * @internal
     */
    GetGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupsRequest = exports.GetGroupsRequest || (exports.GetGroupsRequest = {}));
var GroupSummary;
(function (GroupSummary) {
    /**
     * @internal
     */
    GroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupSummary = exports.GroupSummary || (exports.GroupSummary = {}));
var GetGroupsResult;
(function (GetGroupsResult) {
    /**
     * @internal
     */
    GetGroupsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGroupsResult = exports.GetGroupsResult || (exports.GetGroupsResult = {}));
var GetInsightRequest;
(function (GetInsightRequest) {
    /**
     * @internal
     */
    GetInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightRequest = exports.GetInsightRequest || (exports.GetInsightRequest = {}));
var InsightCategory;
(function (InsightCategory) {
    InsightCategory["FAULT"] = "FAULT";
})(InsightCategory = exports.InsightCategory || (exports.InsightCategory = {}));
var RequestImpactStatistics;
(function (RequestImpactStatistics) {
    /**
     * @internal
     */
    RequestImpactStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestImpactStatistics = exports.RequestImpactStatistics || (exports.RequestImpactStatistics = {}));
var InsightState;
(function (InsightState) {
    InsightState["ACTIVE"] = "ACTIVE";
    InsightState["CLOSED"] = "CLOSED";
})(InsightState = exports.InsightState || (exports.InsightState = {}));
var Insight;
(function (Insight) {
    /**
     * @internal
     */
    Insight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Insight = exports.Insight || (exports.Insight = {}));
var GetInsightResult;
(function (GetInsightResult) {
    /**
     * @internal
     */
    GetInsightResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightResult = exports.GetInsightResult || (exports.GetInsightResult = {}));
var GetInsightEventsRequest;
(function (GetInsightEventsRequest) {
    /**
     * @internal
     */
    GetInsightEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightEventsRequest = exports.GetInsightEventsRequest || (exports.GetInsightEventsRequest = {}));
var InsightEvent;
(function (InsightEvent) {
    /**
     * @internal
     */
    InsightEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightEvent = exports.InsightEvent || (exports.InsightEvent = {}));
var GetInsightEventsResult;
(function (GetInsightEventsResult) {
    /**
     * @internal
     */
    GetInsightEventsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightEventsResult = exports.GetInsightEventsResult || (exports.GetInsightEventsResult = {}));
var GetInsightImpactGraphRequest;
(function (GetInsightImpactGraphRequest) {
    /**
     * @internal
     */
    GetInsightImpactGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightImpactGraphRequest = exports.GetInsightImpactGraphRequest || (exports.GetInsightImpactGraphRequest = {}));
var InsightImpactGraphEdge;
(function (InsightImpactGraphEdge) {
    /**
     * @internal
     */
    InsightImpactGraphEdge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightImpactGraphEdge = exports.InsightImpactGraphEdge || (exports.InsightImpactGraphEdge = {}));
var InsightImpactGraphService;
(function (InsightImpactGraphService) {
    /**
     * @internal
     */
    InsightImpactGraphService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightImpactGraphService = exports.InsightImpactGraphService || (exports.InsightImpactGraphService = {}));
var GetInsightImpactGraphResult;
(function (GetInsightImpactGraphResult) {
    /**
     * @internal
     */
    GetInsightImpactGraphResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightImpactGraphResult = exports.GetInsightImpactGraphResult || (exports.GetInsightImpactGraphResult = {}));
var GetInsightSummariesRequest;
(function (GetInsightSummariesRequest) {
    /**
     * @internal
     */
    GetInsightSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightSummariesRequest = exports.GetInsightSummariesRequest || (exports.GetInsightSummariesRequest = {}));
var InsightSummary;
(function (InsightSummary) {
    /**
     * @internal
     */
    InsightSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightSummary = exports.InsightSummary || (exports.InsightSummary = {}));
var GetInsightSummariesResult;
(function (GetInsightSummariesResult) {
    /**
     * @internal
     */
    GetInsightSummariesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetInsightSummariesResult = exports.GetInsightSummariesResult || (exports.GetInsightSummariesResult = {}));
var GetSamplingRulesRequest;
(function (GetSamplingRulesRequest) {
    /**
     * @internal
     */
    GetSamplingRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingRulesRequest = exports.GetSamplingRulesRequest || (exports.GetSamplingRulesRequest = {}));
var GetSamplingRulesResult;
(function (GetSamplingRulesResult) {
    /**
     * @internal
     */
    GetSamplingRulesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingRulesResult = exports.GetSamplingRulesResult || (exports.GetSamplingRulesResult = {}));
var GetSamplingStatisticSummariesRequest;
(function (GetSamplingStatisticSummariesRequest) {
    /**
     * @internal
     */
    GetSamplingStatisticSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingStatisticSummariesRequest = exports.GetSamplingStatisticSummariesRequest || (exports.GetSamplingStatisticSummariesRequest = {}));
var SamplingStatisticSummary;
(function (SamplingStatisticSummary) {
    /**
     * @internal
     */
    SamplingStatisticSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingStatisticSummary = exports.SamplingStatisticSummary || (exports.SamplingStatisticSummary = {}));
var GetSamplingStatisticSummariesResult;
(function (GetSamplingStatisticSummariesResult) {
    /**
     * @internal
     */
    GetSamplingStatisticSummariesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingStatisticSummariesResult = exports.GetSamplingStatisticSummariesResult || (exports.GetSamplingStatisticSummariesResult = {}));
var SamplingStatisticsDocument;
(function (SamplingStatisticsDocument) {
    /**
     * @internal
     */
    SamplingStatisticsDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingStatisticsDocument = exports.SamplingStatisticsDocument || (exports.SamplingStatisticsDocument = {}));
var GetSamplingTargetsRequest;
(function (GetSamplingTargetsRequest) {
    /**
     * @internal
     */
    GetSamplingTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingTargetsRequest = exports.GetSamplingTargetsRequest || (exports.GetSamplingTargetsRequest = {}));
var SamplingTargetDocument;
(function (SamplingTargetDocument) {
    /**
     * @internal
     */
    SamplingTargetDocument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingTargetDocument = exports.SamplingTargetDocument || (exports.SamplingTargetDocument = {}));
var UnprocessedStatistics;
(function (UnprocessedStatistics) {
    /**
     * @internal
     */
    UnprocessedStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedStatistics = exports.UnprocessedStatistics || (exports.UnprocessedStatistics = {}));
var GetSamplingTargetsResult;
(function (GetSamplingTargetsResult) {
    /**
     * @internal
     */
    GetSamplingTargetsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSamplingTargetsResult = exports.GetSamplingTargetsResult || (exports.GetSamplingTargetsResult = {}));
var GetServiceGraphRequest;
(function (GetServiceGraphRequest) {
    /**
     * @internal
     */
    GetServiceGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceGraphRequest = exports.GetServiceGraphRequest || (exports.GetServiceGraphRequest = {}));
var HistogramEntry;
(function (HistogramEntry) {
    /**
     * @internal
     */
    HistogramEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HistogramEntry = exports.HistogramEntry || (exports.HistogramEntry = {}));
var ErrorStatistics;
(function (ErrorStatistics) {
    /**
     * @internal
     */
    ErrorStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorStatistics = exports.ErrorStatistics || (exports.ErrorStatistics = {}));
var FaultStatistics;
(function (FaultStatistics) {
    /**
     * @internal
     */
    FaultStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaultStatistics = exports.FaultStatistics || (exports.FaultStatistics = {}));
var EdgeStatistics;
(function (EdgeStatistics) {
    /**
     * @internal
     */
    EdgeStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EdgeStatistics = exports.EdgeStatistics || (exports.EdgeStatistics = {}));
var Edge;
(function (Edge) {
    /**
     * @internal
     */
    Edge.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Edge = exports.Edge || (exports.Edge = {}));
var ServiceStatistics;
(function (ServiceStatistics) {
    /**
     * @internal
     */
    ServiceStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceStatistics = exports.ServiceStatistics || (exports.ServiceStatistics = {}));
var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Service = exports.Service || (exports.Service = {}));
var GetServiceGraphResult;
(function (GetServiceGraphResult) {
    /**
     * @internal
     */
    GetServiceGraphResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetServiceGraphResult = exports.GetServiceGraphResult || (exports.GetServiceGraphResult = {}));
var GetTimeSeriesServiceStatisticsRequest;
(function (GetTimeSeriesServiceStatisticsRequest) {
    /**
     * @internal
     */
    GetTimeSeriesServiceStatisticsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTimeSeriesServiceStatisticsRequest = exports.GetTimeSeriesServiceStatisticsRequest || (exports.GetTimeSeriesServiceStatisticsRequest = {}));
var ForecastStatistics;
(function (ForecastStatistics) {
    /**
     * @internal
     */
    ForecastStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForecastStatistics = exports.ForecastStatistics || (exports.ForecastStatistics = {}));
var TimeSeriesServiceStatistics;
(function (TimeSeriesServiceStatistics) {
    /**
     * @internal
     */
    TimeSeriesServiceStatistics.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeSeriesServiceStatistics = exports.TimeSeriesServiceStatistics || (exports.TimeSeriesServiceStatistics = {}));
var GetTimeSeriesServiceStatisticsResult;
(function (GetTimeSeriesServiceStatisticsResult) {
    /**
     * @internal
     */
    GetTimeSeriesServiceStatisticsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTimeSeriesServiceStatisticsResult = exports.GetTimeSeriesServiceStatisticsResult || (exports.GetTimeSeriesServiceStatisticsResult = {}));
var GetTraceGraphRequest;
(function (GetTraceGraphRequest) {
    /**
     * @internal
     */
    GetTraceGraphRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTraceGraphRequest = exports.GetTraceGraphRequest || (exports.GetTraceGraphRequest = {}));
var GetTraceGraphResult;
(function (GetTraceGraphResult) {
    /**
     * @internal
     */
    GetTraceGraphResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTraceGraphResult = exports.GetTraceGraphResult || (exports.GetTraceGraphResult = {}));
var SamplingStrategyName;
(function (SamplingStrategyName) {
    SamplingStrategyName["FixedRate"] = "FixedRate";
    SamplingStrategyName["PartialScan"] = "PartialScan";
})(SamplingStrategyName = exports.SamplingStrategyName || (exports.SamplingStrategyName = {}));
var SamplingStrategy;
(function (SamplingStrategy) {
    /**
     * @internal
     */
    SamplingStrategy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingStrategy = exports.SamplingStrategy || (exports.SamplingStrategy = {}));
var TimeRangeType;
(function (TimeRangeType) {
    TimeRangeType["Event"] = "Event";
    TimeRangeType["TraceId"] = "TraceId";
})(TimeRangeType = exports.TimeRangeType || (exports.TimeRangeType = {}));
var GetTraceSummariesRequest;
(function (GetTraceSummariesRequest) {
    /**
     * @internal
     */
    GetTraceSummariesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTraceSummariesRequest = exports.GetTraceSummariesRequest || (exports.GetTraceSummariesRequest = {}));
var RootCauseException;
(function (RootCauseException) {
    /**
     * @internal
     */
    RootCauseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RootCauseException = exports.RootCauseException || (exports.RootCauseException = {}));
var ErrorRootCauseEntity;
(function (ErrorRootCauseEntity) {
    /**
     * @internal
     */
    ErrorRootCauseEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorRootCauseEntity = exports.ErrorRootCauseEntity || (exports.ErrorRootCauseEntity = {}));
var ErrorRootCauseService;
(function (ErrorRootCauseService) {
    /**
     * @internal
     */
    ErrorRootCauseService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorRootCauseService = exports.ErrorRootCauseService || (exports.ErrorRootCauseService = {}));
var ErrorRootCause;
(function (ErrorRootCause) {
    /**
     * @internal
     */
    ErrorRootCause.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorRootCause = exports.ErrorRootCause || (exports.ErrorRootCause = {}));
var FaultRootCauseEntity;
(function (FaultRootCauseEntity) {
    /**
     * @internal
     */
    FaultRootCauseEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaultRootCauseEntity = exports.FaultRootCauseEntity || (exports.FaultRootCauseEntity = {}));
var FaultRootCauseService;
(function (FaultRootCauseService) {
    /**
     * @internal
     */
    FaultRootCauseService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaultRootCauseService = exports.FaultRootCauseService || (exports.FaultRootCauseService = {}));
var FaultRootCause;
(function (FaultRootCause) {
    /**
     * @internal
     */
    FaultRootCause.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FaultRootCause = exports.FaultRootCause || (exports.FaultRootCause = {}));
var Http;
(function (Http) {
    /**
     * @internal
     */
    Http.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Http = exports.Http || (exports.Http = {}));
var InstanceIdDetail;
(function (InstanceIdDetail) {
    /**
     * @internal
     */
    InstanceIdDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIdDetail = exports.InstanceIdDetail || (exports.InstanceIdDetail = {}));
var ResourceARNDetail;
(function (ResourceARNDetail) {
    /**
     * @internal
     */
    ResourceARNDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceARNDetail = exports.ResourceARNDetail || (exports.ResourceARNDetail = {}));
var ResponseTimeRootCauseEntity;
(function (ResponseTimeRootCauseEntity) {
    /**
     * @internal
     */
    ResponseTimeRootCauseEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseTimeRootCauseEntity = exports.ResponseTimeRootCauseEntity || (exports.ResponseTimeRootCauseEntity = {}));
var ResponseTimeRootCauseService;
(function (ResponseTimeRootCauseService) {
    /**
     * @internal
     */
    ResponseTimeRootCauseService.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseTimeRootCauseService = exports.ResponseTimeRootCauseService || (exports.ResponseTimeRootCauseService = {}));
var ResponseTimeRootCause;
(function (ResponseTimeRootCause) {
    /**
     * @internal
     */
    ResponseTimeRootCause.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResponseTimeRootCause = exports.ResponseTimeRootCause || (exports.ResponseTimeRootCause = {}));
var TraceUser;
(function (TraceUser) {
    /**
     * @internal
     */
    TraceUser.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TraceUser = exports.TraceUser || (exports.TraceUser = {}));
var TraceSummary;
(function (TraceSummary) {
    /**
     * @internal
     */
    TraceSummary.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Annotations && {
            Annotations: Object.entries(obj.Annotations).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => ValueWithServiceIds.filterSensitiveLog(item)),
            }), {}),
        }),
    });
})(TraceSummary = exports.TraceSummary || (exports.TraceSummary = {}));
var GetTraceSummariesResult;
(function (GetTraceSummariesResult) {
    /**
     * @internal
     */
    GetTraceSummariesResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTraceSummariesResult = exports.GetTraceSummariesResult || (exports.GetTraceSummariesResult = {}));
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
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var PutEncryptionConfigRequest;
(function (PutEncryptionConfigRequest) {
    /**
     * @internal
     */
    PutEncryptionConfigRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEncryptionConfigRequest = exports.PutEncryptionConfigRequest || (exports.PutEncryptionConfigRequest = {}));
var PutEncryptionConfigResult;
(function (PutEncryptionConfigResult) {
    /**
     * @internal
     */
    PutEncryptionConfigResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEncryptionConfigResult = exports.PutEncryptionConfigResult || (exports.PutEncryptionConfigResult = {}));
var BackendConnectionErrors;
(function (BackendConnectionErrors) {
    /**
     * @internal
     */
    BackendConnectionErrors.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackendConnectionErrors = exports.BackendConnectionErrors || (exports.BackendConnectionErrors = {}));
var TelemetryRecord;
(function (TelemetryRecord) {
    /**
     * @internal
     */
    TelemetryRecord.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TelemetryRecord = exports.TelemetryRecord || (exports.TelemetryRecord = {}));
var PutTelemetryRecordsRequest;
(function (PutTelemetryRecordsRequest) {
    /**
     * @internal
     */
    PutTelemetryRecordsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTelemetryRecordsRequest = exports.PutTelemetryRecordsRequest || (exports.PutTelemetryRecordsRequest = {}));
var PutTelemetryRecordsResult;
(function (PutTelemetryRecordsResult) {
    /**
     * @internal
     */
    PutTelemetryRecordsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTelemetryRecordsResult = exports.PutTelemetryRecordsResult || (exports.PutTelemetryRecordsResult = {}));
var PutTraceSegmentsRequest;
(function (PutTraceSegmentsRequest) {
    /**
     * @internal
     */
    PutTraceSegmentsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTraceSegmentsRequest = exports.PutTraceSegmentsRequest || (exports.PutTraceSegmentsRequest = {}));
var UnprocessedTraceSegment;
(function (UnprocessedTraceSegment) {
    /**
     * @internal
     */
    UnprocessedTraceSegment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnprocessedTraceSegment = exports.UnprocessedTraceSegment || (exports.UnprocessedTraceSegment = {}));
var PutTraceSegmentsResult;
(function (PutTraceSegmentsResult) {
    /**
     * @internal
     */
    PutTraceSegmentsResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTraceSegmentsResult = exports.PutTraceSegmentsResult || (exports.PutTraceSegmentsResult = {}));
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
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
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
var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupRequest = exports.UpdateGroupRequest || (exports.UpdateGroupRequest = {}));
var UpdateGroupResult;
(function (UpdateGroupResult) {
    /**
     * @internal
     */
    UpdateGroupResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGroupResult = exports.UpdateGroupResult || (exports.UpdateGroupResult = {}));
var SamplingRuleUpdate;
(function (SamplingRuleUpdate) {
    /**
     * @internal
     */
    SamplingRuleUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SamplingRuleUpdate = exports.SamplingRuleUpdate || (exports.SamplingRuleUpdate = {}));
var UpdateSamplingRuleRequest;
(function (UpdateSamplingRuleRequest) {
    /**
     * @internal
     */
    UpdateSamplingRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSamplingRuleRequest = exports.UpdateSamplingRuleRequest || (exports.UpdateSamplingRuleRequest = {}));
var UpdateSamplingRuleResult;
(function (UpdateSamplingRuleResult) {
    /**
     * @internal
     */
    UpdateSamplingRuleResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSamplingRuleResult = exports.UpdateSamplingRuleResult || (exports.UpdateSamplingRuleResult = {}));
//# sourceMappingURL=models_0.js.map