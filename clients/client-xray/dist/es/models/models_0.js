import { __assign, __read } from "tslib";
export var Alias;
(function (Alias) {
    /**
     * @internal
     */
    Alias.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Alias || (Alias = {}));
export var AnnotationValue;
(function (AnnotationValue) {
    AnnotationValue.visit = function (value, visitor) {
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
    AnnotationValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.NumberValue !== undefined)
            return { NumberValue: obj.NumberValue };
        if (obj.BooleanValue !== undefined)
            return { BooleanValue: obj.BooleanValue };
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(AnnotationValue || (AnnotationValue = {}));
export var ServiceId;
(function (ServiceId) {
    /**
     * @internal
     */
    ServiceId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceId || (ServiceId = {}));
export var ValueWithServiceIds;
(function (ValueWithServiceIds) {
    /**
     * @internal
     */
    ValueWithServiceIds.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.AnnotationValue && { AnnotationValue: AnnotationValue.filterSensitiveLog(obj.AnnotationValue) }))); };
})(ValueWithServiceIds || (ValueWithServiceIds = {}));
export var AnomalousService;
(function (AnomalousService) {
    /**
     * @internal
     */
    AnomalousService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalousService || (AnomalousService = {}));
export var AvailabilityZoneDetail;
(function (AvailabilityZoneDetail) {
    /**
     * @internal
     */
    AvailabilityZoneDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AvailabilityZoneDetail || (AvailabilityZoneDetail = {}));
export var BatchGetTracesRequest;
(function (BatchGetTracesRequest) {
    /**
     * @internal
     */
    BatchGetTracesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetTracesRequest || (BatchGetTracesRequest = {}));
export var Segment;
(function (Segment) {
    /**
     * @internal
     */
    Segment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Segment || (Segment = {}));
export var Trace;
(function (Trace) {
    /**
     * @internal
     */
    Trace.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Trace || (Trace = {}));
export var BatchGetTracesResult;
(function (BatchGetTracesResult) {
    /**
     * @internal
     */
    BatchGetTracesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchGetTracesResult || (BatchGetTracesResult = {}));
export var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidRequestException || (InvalidRequestException = {}));
export var ThrottledException;
(function (ThrottledException) {
    /**
     * @internal
     */
    ThrottledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottledException || (ThrottledException = {}));
export var InsightsConfiguration;
(function (InsightsConfiguration) {
    /**
     * @internal
     */
    InsightsConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsightsConfiguration || (InsightsConfiguration = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateGroupRequest;
(function (CreateGroupRequest) {
    /**
     * @internal
     */
    CreateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupRequest || (CreateGroupRequest = {}));
export var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Group || (Group = {}));
export var CreateGroupResult;
(function (CreateGroupResult) {
    /**
     * @internal
     */
    CreateGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGroupResult || (CreateGroupResult = {}));
export var SamplingRule;
(function (SamplingRule) {
    /**
     * @internal
     */
    SamplingRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingRule || (SamplingRule = {}));
export var CreateSamplingRuleRequest;
(function (CreateSamplingRuleRequest) {
    /**
     * @internal
     */
    CreateSamplingRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSamplingRuleRequest || (CreateSamplingRuleRequest = {}));
export var SamplingRuleRecord;
(function (SamplingRuleRecord) {
    /**
     * @internal
     */
    SamplingRuleRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingRuleRecord || (SamplingRuleRecord = {}));
export var CreateSamplingRuleResult;
(function (CreateSamplingRuleResult) {
    /**
     * @internal
     */
    CreateSamplingRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSamplingRuleResult || (CreateSamplingRuleResult = {}));
export var RuleLimitExceededException;
(function (RuleLimitExceededException) {
    /**
     * @internal
     */
    RuleLimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleLimitExceededException || (RuleLimitExceededException = {}));
export var DeleteGroupRequest;
(function (DeleteGroupRequest) {
    /**
     * @internal
     */
    DeleteGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGroupRequest || (DeleteGroupRequest = {}));
export var DeleteGroupResult;
(function (DeleteGroupResult) {
    /**
     * @internal
     */
    DeleteGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGroupResult || (DeleteGroupResult = {}));
export var DeleteSamplingRuleRequest;
(function (DeleteSamplingRuleRequest) {
    /**
     * @internal
     */
    DeleteSamplingRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSamplingRuleRequest || (DeleteSamplingRuleRequest = {}));
export var DeleteSamplingRuleResult;
(function (DeleteSamplingRuleResult) {
    /**
     * @internal
     */
    DeleteSamplingRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSamplingRuleResult || (DeleteSamplingRuleResult = {}));
export var GetEncryptionConfigRequest;
(function (GetEncryptionConfigRequest) {
    /**
     * @internal
     */
    GetEncryptionConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEncryptionConfigRequest || (GetEncryptionConfigRequest = {}));
export var EncryptionStatus;
(function (EncryptionStatus) {
    EncryptionStatus["ACTIVE"] = "ACTIVE";
    EncryptionStatus["UPDATING"] = "UPDATING";
})(EncryptionStatus || (EncryptionStatus = {}));
export var EncryptionType;
(function (EncryptionType) {
    EncryptionType["KMS"] = "KMS";
    EncryptionType["NONE"] = "NONE";
})(EncryptionType || (EncryptionType = {}));
export var EncryptionConfig;
(function (EncryptionConfig) {
    /**
     * @internal
     */
    EncryptionConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionConfig || (EncryptionConfig = {}));
export var GetEncryptionConfigResult;
(function (GetEncryptionConfigResult) {
    /**
     * @internal
     */
    GetEncryptionConfigResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEncryptionConfigResult || (GetEncryptionConfigResult = {}));
export var GetGroupRequest;
(function (GetGroupRequest) {
    /**
     * @internal
     */
    GetGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupRequest || (GetGroupRequest = {}));
export var GetGroupResult;
(function (GetGroupResult) {
    /**
     * @internal
     */
    GetGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupResult || (GetGroupResult = {}));
export var GetGroupsRequest;
(function (GetGroupsRequest) {
    /**
     * @internal
     */
    GetGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupsRequest || (GetGroupsRequest = {}));
export var GroupSummary;
(function (GroupSummary) {
    /**
     * @internal
     */
    GroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupSummary || (GroupSummary = {}));
export var GetGroupsResult;
(function (GetGroupsResult) {
    /**
     * @internal
     */
    GetGroupsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGroupsResult || (GetGroupsResult = {}));
export var GetInsightRequest;
(function (GetInsightRequest) {
    /**
     * @internal
     */
    GetInsightRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightRequest || (GetInsightRequest = {}));
export var InsightCategory;
(function (InsightCategory) {
    InsightCategory["FAULT"] = "FAULT";
})(InsightCategory || (InsightCategory = {}));
export var RequestImpactStatistics;
(function (RequestImpactStatistics) {
    /**
     * @internal
     */
    RequestImpactStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestImpactStatistics || (RequestImpactStatistics = {}));
export var InsightState;
(function (InsightState) {
    InsightState["ACTIVE"] = "ACTIVE";
    InsightState["CLOSED"] = "CLOSED";
})(InsightState || (InsightState = {}));
export var Insight;
(function (Insight) {
    /**
     * @internal
     */
    Insight.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Insight || (Insight = {}));
export var GetInsightResult;
(function (GetInsightResult) {
    /**
     * @internal
     */
    GetInsightResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightResult || (GetInsightResult = {}));
export var GetInsightEventsRequest;
(function (GetInsightEventsRequest) {
    /**
     * @internal
     */
    GetInsightEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightEventsRequest || (GetInsightEventsRequest = {}));
export var InsightEvent;
(function (InsightEvent) {
    /**
     * @internal
     */
    InsightEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsightEvent || (InsightEvent = {}));
export var GetInsightEventsResult;
(function (GetInsightEventsResult) {
    /**
     * @internal
     */
    GetInsightEventsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightEventsResult || (GetInsightEventsResult = {}));
export var GetInsightImpactGraphRequest;
(function (GetInsightImpactGraphRequest) {
    /**
     * @internal
     */
    GetInsightImpactGraphRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightImpactGraphRequest || (GetInsightImpactGraphRequest = {}));
export var InsightImpactGraphEdge;
(function (InsightImpactGraphEdge) {
    /**
     * @internal
     */
    InsightImpactGraphEdge.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsightImpactGraphEdge || (InsightImpactGraphEdge = {}));
export var InsightImpactGraphService;
(function (InsightImpactGraphService) {
    /**
     * @internal
     */
    InsightImpactGraphService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsightImpactGraphService || (InsightImpactGraphService = {}));
export var GetInsightImpactGraphResult;
(function (GetInsightImpactGraphResult) {
    /**
     * @internal
     */
    GetInsightImpactGraphResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightImpactGraphResult || (GetInsightImpactGraphResult = {}));
export var GetInsightSummariesRequest;
(function (GetInsightSummariesRequest) {
    /**
     * @internal
     */
    GetInsightSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightSummariesRequest || (GetInsightSummariesRequest = {}));
export var InsightSummary;
(function (InsightSummary) {
    /**
     * @internal
     */
    InsightSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InsightSummary || (InsightSummary = {}));
export var GetInsightSummariesResult;
(function (GetInsightSummariesResult) {
    /**
     * @internal
     */
    GetInsightSummariesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetInsightSummariesResult || (GetInsightSummariesResult = {}));
export var GetSamplingRulesRequest;
(function (GetSamplingRulesRequest) {
    /**
     * @internal
     */
    GetSamplingRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingRulesRequest || (GetSamplingRulesRequest = {}));
export var GetSamplingRulesResult;
(function (GetSamplingRulesResult) {
    /**
     * @internal
     */
    GetSamplingRulesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingRulesResult || (GetSamplingRulesResult = {}));
export var GetSamplingStatisticSummariesRequest;
(function (GetSamplingStatisticSummariesRequest) {
    /**
     * @internal
     */
    GetSamplingStatisticSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingStatisticSummariesRequest || (GetSamplingStatisticSummariesRequest = {}));
export var SamplingStatisticSummary;
(function (SamplingStatisticSummary) {
    /**
     * @internal
     */
    SamplingStatisticSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingStatisticSummary || (SamplingStatisticSummary = {}));
export var GetSamplingStatisticSummariesResult;
(function (GetSamplingStatisticSummariesResult) {
    /**
     * @internal
     */
    GetSamplingStatisticSummariesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingStatisticSummariesResult || (GetSamplingStatisticSummariesResult = {}));
export var SamplingStatisticsDocument;
(function (SamplingStatisticsDocument) {
    /**
     * @internal
     */
    SamplingStatisticsDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingStatisticsDocument || (SamplingStatisticsDocument = {}));
export var GetSamplingTargetsRequest;
(function (GetSamplingTargetsRequest) {
    /**
     * @internal
     */
    GetSamplingTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingTargetsRequest || (GetSamplingTargetsRequest = {}));
export var SamplingTargetDocument;
(function (SamplingTargetDocument) {
    /**
     * @internal
     */
    SamplingTargetDocument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingTargetDocument || (SamplingTargetDocument = {}));
export var UnprocessedStatistics;
(function (UnprocessedStatistics) {
    /**
     * @internal
     */
    UnprocessedStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnprocessedStatistics || (UnprocessedStatistics = {}));
export var GetSamplingTargetsResult;
(function (GetSamplingTargetsResult) {
    /**
     * @internal
     */
    GetSamplingTargetsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSamplingTargetsResult || (GetSamplingTargetsResult = {}));
export var GetServiceGraphRequest;
(function (GetServiceGraphRequest) {
    /**
     * @internal
     */
    GetServiceGraphRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceGraphRequest || (GetServiceGraphRequest = {}));
export var HistogramEntry;
(function (HistogramEntry) {
    /**
     * @internal
     */
    HistogramEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HistogramEntry || (HistogramEntry = {}));
export var ErrorStatistics;
(function (ErrorStatistics) {
    /**
     * @internal
     */
    ErrorStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorStatistics || (ErrorStatistics = {}));
export var FaultStatistics;
(function (FaultStatistics) {
    /**
     * @internal
     */
    FaultStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaultStatistics || (FaultStatistics = {}));
export var EdgeStatistics;
(function (EdgeStatistics) {
    /**
     * @internal
     */
    EdgeStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EdgeStatistics || (EdgeStatistics = {}));
export var Edge;
(function (Edge) {
    /**
     * @internal
     */
    Edge.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Edge || (Edge = {}));
export var ServiceStatistics;
(function (ServiceStatistics) {
    /**
     * @internal
     */
    ServiceStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceStatistics || (ServiceStatistics = {}));
export var Service;
(function (Service) {
    /**
     * @internal
     */
    Service.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Service || (Service = {}));
export var GetServiceGraphResult;
(function (GetServiceGraphResult) {
    /**
     * @internal
     */
    GetServiceGraphResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetServiceGraphResult || (GetServiceGraphResult = {}));
export var GetTimeSeriesServiceStatisticsRequest;
(function (GetTimeSeriesServiceStatisticsRequest) {
    /**
     * @internal
     */
    GetTimeSeriesServiceStatisticsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTimeSeriesServiceStatisticsRequest || (GetTimeSeriesServiceStatisticsRequest = {}));
export var ForecastStatistics;
(function (ForecastStatistics) {
    /**
     * @internal
     */
    ForecastStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForecastStatistics || (ForecastStatistics = {}));
export var TimeSeriesServiceStatistics;
(function (TimeSeriesServiceStatistics) {
    /**
     * @internal
     */
    TimeSeriesServiceStatistics.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeSeriesServiceStatistics || (TimeSeriesServiceStatistics = {}));
export var GetTimeSeriesServiceStatisticsResult;
(function (GetTimeSeriesServiceStatisticsResult) {
    /**
     * @internal
     */
    GetTimeSeriesServiceStatisticsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTimeSeriesServiceStatisticsResult || (GetTimeSeriesServiceStatisticsResult = {}));
export var GetTraceGraphRequest;
(function (GetTraceGraphRequest) {
    /**
     * @internal
     */
    GetTraceGraphRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTraceGraphRequest || (GetTraceGraphRequest = {}));
export var GetTraceGraphResult;
(function (GetTraceGraphResult) {
    /**
     * @internal
     */
    GetTraceGraphResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTraceGraphResult || (GetTraceGraphResult = {}));
export var SamplingStrategyName;
(function (SamplingStrategyName) {
    SamplingStrategyName["FixedRate"] = "FixedRate";
    SamplingStrategyName["PartialScan"] = "PartialScan";
})(SamplingStrategyName || (SamplingStrategyName = {}));
export var SamplingStrategy;
(function (SamplingStrategy) {
    /**
     * @internal
     */
    SamplingStrategy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingStrategy || (SamplingStrategy = {}));
export var TimeRangeType;
(function (TimeRangeType) {
    TimeRangeType["Event"] = "Event";
    TimeRangeType["TraceId"] = "TraceId";
})(TimeRangeType || (TimeRangeType = {}));
export var GetTraceSummariesRequest;
(function (GetTraceSummariesRequest) {
    /**
     * @internal
     */
    GetTraceSummariesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTraceSummariesRequest || (GetTraceSummariesRequest = {}));
export var RootCauseException;
(function (RootCauseException) {
    /**
     * @internal
     */
    RootCauseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RootCauseException || (RootCauseException = {}));
export var ErrorRootCauseEntity;
(function (ErrorRootCauseEntity) {
    /**
     * @internal
     */
    ErrorRootCauseEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorRootCauseEntity || (ErrorRootCauseEntity = {}));
export var ErrorRootCauseService;
(function (ErrorRootCauseService) {
    /**
     * @internal
     */
    ErrorRootCauseService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorRootCauseService || (ErrorRootCauseService = {}));
export var ErrorRootCause;
(function (ErrorRootCause) {
    /**
     * @internal
     */
    ErrorRootCause.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorRootCause || (ErrorRootCause = {}));
export var FaultRootCauseEntity;
(function (FaultRootCauseEntity) {
    /**
     * @internal
     */
    FaultRootCauseEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaultRootCauseEntity || (FaultRootCauseEntity = {}));
export var FaultRootCauseService;
(function (FaultRootCauseService) {
    /**
     * @internal
     */
    FaultRootCauseService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaultRootCauseService || (FaultRootCauseService = {}));
export var FaultRootCause;
(function (FaultRootCause) {
    /**
     * @internal
     */
    FaultRootCause.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FaultRootCause || (FaultRootCause = {}));
export var Http;
(function (Http) {
    /**
     * @internal
     */
    Http.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Http || (Http = {}));
export var InstanceIdDetail;
(function (InstanceIdDetail) {
    /**
     * @internal
     */
    InstanceIdDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceIdDetail || (InstanceIdDetail = {}));
export var ResourceARNDetail;
(function (ResourceARNDetail) {
    /**
     * @internal
     */
    ResourceARNDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceARNDetail || (ResourceARNDetail = {}));
export var ResponseTimeRootCauseEntity;
(function (ResponseTimeRootCauseEntity) {
    /**
     * @internal
     */
    ResponseTimeRootCauseEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseTimeRootCauseEntity || (ResponseTimeRootCauseEntity = {}));
export var ResponseTimeRootCauseService;
(function (ResponseTimeRootCauseService) {
    /**
     * @internal
     */
    ResponseTimeRootCauseService.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseTimeRootCauseService || (ResponseTimeRootCauseService = {}));
export var ResponseTimeRootCause;
(function (ResponseTimeRootCause) {
    /**
     * @internal
     */
    ResponseTimeRootCause.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResponseTimeRootCause || (ResponseTimeRootCause = {}));
export var TraceUser;
(function (TraceUser) {
    /**
     * @internal
     */
    TraceUser.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TraceUser || (TraceUser = {}));
export var TraceSummary;
(function (TraceSummary) {
    /**
     * @internal
     */
    TraceSummary.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Annotations && {
        Annotations: Object.entries(obj.Annotations).reduce(function (acc, _a) {
            var _b;
            var _c = __read(_a, 2), key = _c[0], value = _c[1];
            return (__assign(__assign({}, acc), (_b = {}, _b[key] = value.map(function (item) { return ValueWithServiceIds.filterSensitiveLog(item); }), _b)));
        }, {}),
    }))); };
})(TraceSummary || (TraceSummary = {}));
export var GetTraceSummariesResult;
(function (GetTraceSummariesResult) {
    /**
     * @internal
     */
    GetTraceSummariesResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTraceSummariesResult || (GetTraceSummariesResult = {}));
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
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var PutEncryptionConfigRequest;
(function (PutEncryptionConfigRequest) {
    /**
     * @internal
     */
    PutEncryptionConfigRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEncryptionConfigRequest || (PutEncryptionConfigRequest = {}));
export var PutEncryptionConfigResult;
(function (PutEncryptionConfigResult) {
    /**
     * @internal
     */
    PutEncryptionConfigResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEncryptionConfigResult || (PutEncryptionConfigResult = {}));
export var BackendConnectionErrors;
(function (BackendConnectionErrors) {
    /**
     * @internal
     */
    BackendConnectionErrors.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BackendConnectionErrors || (BackendConnectionErrors = {}));
export var TelemetryRecord;
(function (TelemetryRecord) {
    /**
     * @internal
     */
    TelemetryRecord.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TelemetryRecord || (TelemetryRecord = {}));
export var PutTelemetryRecordsRequest;
(function (PutTelemetryRecordsRequest) {
    /**
     * @internal
     */
    PutTelemetryRecordsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTelemetryRecordsRequest || (PutTelemetryRecordsRequest = {}));
export var PutTelemetryRecordsResult;
(function (PutTelemetryRecordsResult) {
    /**
     * @internal
     */
    PutTelemetryRecordsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTelemetryRecordsResult || (PutTelemetryRecordsResult = {}));
export var PutTraceSegmentsRequest;
(function (PutTraceSegmentsRequest) {
    /**
     * @internal
     */
    PutTraceSegmentsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTraceSegmentsRequest || (PutTraceSegmentsRequest = {}));
export var UnprocessedTraceSegment;
(function (UnprocessedTraceSegment) {
    /**
     * @internal
     */
    UnprocessedTraceSegment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnprocessedTraceSegment || (UnprocessedTraceSegment = {}));
export var PutTraceSegmentsResult;
(function (PutTraceSegmentsResult) {
    /**
     * @internal
     */
    PutTraceSegmentsResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTraceSegmentsResult || (PutTraceSegmentsResult = {}));
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
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
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
export var UpdateGroupRequest;
(function (UpdateGroupRequest) {
    /**
     * @internal
     */
    UpdateGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGroupRequest || (UpdateGroupRequest = {}));
export var UpdateGroupResult;
(function (UpdateGroupResult) {
    /**
     * @internal
     */
    UpdateGroupResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGroupResult || (UpdateGroupResult = {}));
export var SamplingRuleUpdate;
(function (SamplingRuleUpdate) {
    /**
     * @internal
     */
    SamplingRuleUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SamplingRuleUpdate || (SamplingRuleUpdate = {}));
export var UpdateSamplingRuleRequest;
(function (UpdateSamplingRuleRequest) {
    /**
     * @internal
     */
    UpdateSamplingRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSamplingRuleRequest || (UpdateSamplingRuleRequest = {}));
export var UpdateSamplingRuleResult;
(function (UpdateSamplingRuleResult) {
    /**
     * @internal
     */
    UpdateSamplingRuleResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSamplingRuleResult || (UpdateSamplingRuleResult = {}));
//# sourceMappingURL=models_0.js.map