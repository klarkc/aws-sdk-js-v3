"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeResourceCollectionHealthResponse = exports.ServiceHealth = exports.ServiceName = exports.ServiceInsightHealth = exports.CloudFormationHealth = exports.InsightHealth = exports.DescribeResourceCollectionHealthRequest = exports.ResourceCollectionType = exports.DescribeInsightResponse = exports.ReactiveInsight = exports.ProactiveInsight = exports.InsightStatus = exports.InsightSeverity = exports.InsightTimeRange = exports.DescribeInsightRequest = exports.DescribeFeedbackResponse = exports.InsightFeedback = exports.InsightFeedbackOption = exports.DescribeFeedbackRequest = exports.DescribeAnomalyResponse = exports.ReactiveAnomaly = exports.ProactiveAnomaly = exports.ResourceCollection = exports.CloudFormationCollection = exports.PredictionTimeRange = exports.DescribeAnomalyRequest = exports.DescribeAccountOverviewResponse = exports.DescribeAccountOverviewRequest = exports.DescribeAccountHealthResponse = exports.DescribeAccountHealthRequest = exports.AnomalyTimeRange = exports.AnomalyStatus = exports.AnomalySourceDetails = exports.CloudWatchMetricsDetail = exports.CloudWatchMetricsStat = exports.CloudWatchMetricsDimension = exports.AnomalySeverity = exports.ValidationException = exports.ValidationExceptionReason = exports.ValidationExceptionField = exports.ThrottlingException = exports.ServiceQuotaExceededException = exports.ResourceNotFoundException = exports.InternalServerException = exports.ConflictException = exports.AddNotificationChannelResponse = exports.AddNotificationChannelRequest = exports.NotificationChannelConfig = exports.SnsChannelConfig = exports.AccessDeniedException = void 0;
exports.RecommendationRelatedAnomaly = exports.RecommendationRelatedAnomalySourceDetail = exports.RecommendationRelatedCloudWatchMetricsSourceDetail = exports.RecommendationRelatedAnomalyResource = exports.ListRecommendationsRequest = exports.Locale = exports.ListNotificationChannelsResponse = exports.NotificationChannel = exports.ListNotificationChannelsRequest = exports.ListInsightsResponse = exports.ReactiveInsightSummary = exports.ProactiveInsightSummary = exports.ServiceCollection = exports.ListInsightsRequest = exports.ListInsightsStatusFilter = exports.ListInsightsOngoingStatusFilter = exports.ListInsightsClosedStatusFilter = exports.EndTimeRange = exports.ListInsightsAnyStatusFilter = exports.InsightType = exports.ListEventsResponse = exports.Event = exports.EventResource = exports.ListEventsRequest = exports.ListEventsFilters = exports.EventTimeRange = exports.EventClass = exports.EventDataSource = exports.ListAnomaliesForInsightResponse = exports.ReactiveAnomalySummary = exports.ProactiveAnomalySummary = exports.ListAnomaliesForInsightRequest = exports.StartTimeRange = exports.GetResourceCollectionResponse = exports.ResourceCollectionFilter = exports.CloudFormationCollectionFilter = exports.GetResourceCollectionRequest = exports.GetCostEstimationResponse = exports.CostEstimationTimeRange = exports.CostEstimationStatus = exports.CostEstimationResourceCollectionFilter = exports.CloudFormationCostEstimationResourceCollectionFilter = exports.ServiceResourceCost = exports.CostEstimationServiceResourceState = exports.GetCostEstimationRequest = exports.DescribeServiceIntegrationResponse = exports.ServiceIntegrationConfig = exports.OpsCenterIntegration = exports.OptInStatus = exports.DescribeServiceIntegrationRequest = void 0;
exports.UpdateServiceIntegrationResponse = exports.UpdateServiceIntegrationRequest = exports.UpdateServiceIntegrationConfig = exports.OpsCenterIntegrationConfig = exports.UpdateResourceCollectionResponse = exports.UpdateResourceCollectionRequest = exports.UpdateResourceCollectionFilter = exports.UpdateCloudFormationCollectionFilter = exports.UpdateResourceCollectionAction = exports.StartCostEstimationResponse = exports.StartCostEstimationRequest = exports.SearchInsightsResponse = exports.SearchInsightsRequest = exports.SearchInsightsFilters = exports.RemoveNotificationChannelResponse = exports.RemoveNotificationChannelRequest = exports.PutFeedbackResponse = exports.PutFeedbackRequest = exports.ListRecommendationsResponse = exports.Recommendation = exports.RecommendationRelatedEvent = exports.RecommendationRelatedEventResource = void 0;
var AccessDeniedException;
(function (AccessDeniedException) {
    /**
     * @internal
     */
    AccessDeniedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var SnsChannelConfig;
(function (SnsChannelConfig) {
    /**
     * @internal
     */
    SnsChannelConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SnsChannelConfig = exports.SnsChannelConfig || (exports.SnsChannelConfig = {}));
var NotificationChannelConfig;
(function (NotificationChannelConfig) {
    /**
     * @internal
     */
    NotificationChannelConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationChannelConfig = exports.NotificationChannelConfig || (exports.NotificationChannelConfig = {}));
var AddNotificationChannelRequest;
(function (AddNotificationChannelRequest) {
    /**
     * @internal
     */
    AddNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddNotificationChannelRequest = exports.AddNotificationChannelRequest || (exports.AddNotificationChannelRequest = {}));
var AddNotificationChannelResponse;
(function (AddNotificationChannelResponse) {
    /**
     * @internal
     */
    AddNotificationChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddNotificationChannelResponse = exports.AddNotificationChannelResponse || (exports.AddNotificationChannelResponse = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
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
var ValidationExceptionField;
(function (ValidationExceptionField) {
    /**
     * @internal
     */
    ValidationExceptionField.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationExceptionField = exports.ValidationExceptionField || (exports.ValidationExceptionField = {}));
var ValidationExceptionReason;
(function (ValidationExceptionReason) {
    ValidationExceptionReason["CANNOT_PARSE"] = "CANNOT_PARSE";
    ValidationExceptionReason["FIELD_VALIDATION_FAILED"] = "FIELD_VALIDATION_FAILED";
    ValidationExceptionReason["OTHER"] = "OTHER";
    ValidationExceptionReason["UNKNOWN_OPERATION"] = "UNKNOWN_OPERATION";
})(ValidationExceptionReason = exports.ValidationExceptionReason || (exports.ValidationExceptionReason = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AnomalySeverity;
(function (AnomalySeverity) {
    AnomalySeverity["HIGH"] = "HIGH";
    AnomalySeverity["LOW"] = "LOW";
    AnomalySeverity["MEDIUM"] = "MEDIUM";
})(AnomalySeverity = exports.AnomalySeverity || (exports.AnomalySeverity = {}));
var CloudWatchMetricsDimension;
(function (CloudWatchMetricsDimension) {
    /**
     * @internal
     */
    CloudWatchMetricsDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchMetricsDimension = exports.CloudWatchMetricsDimension || (exports.CloudWatchMetricsDimension = {}));
var CloudWatchMetricsStat;
(function (CloudWatchMetricsStat) {
    CloudWatchMetricsStat["AVERAGE"] = "Average";
    CloudWatchMetricsStat["MAXIMUM"] = "Maximum";
    CloudWatchMetricsStat["MINIMUM"] = "Minimum";
    CloudWatchMetricsStat["P50"] = "p50";
    CloudWatchMetricsStat["P90"] = "p90";
    CloudWatchMetricsStat["P99"] = "p99";
    CloudWatchMetricsStat["SAMPLE_COUNT"] = "SampleCount";
    CloudWatchMetricsStat["SUM"] = "Sum";
})(CloudWatchMetricsStat = exports.CloudWatchMetricsStat || (exports.CloudWatchMetricsStat = {}));
var CloudWatchMetricsDetail;
(function (CloudWatchMetricsDetail) {
    /**
     * @internal
     */
    CloudWatchMetricsDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudWatchMetricsDetail = exports.CloudWatchMetricsDetail || (exports.CloudWatchMetricsDetail = {}));
var AnomalySourceDetails;
(function (AnomalySourceDetails) {
    /**
     * @internal
     */
    AnomalySourceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalySourceDetails = exports.AnomalySourceDetails || (exports.AnomalySourceDetails = {}));
var AnomalyStatus;
(function (AnomalyStatus) {
    AnomalyStatus["CLOSED"] = "CLOSED";
    AnomalyStatus["ONGOING"] = "ONGOING";
})(AnomalyStatus = exports.AnomalyStatus || (exports.AnomalyStatus = {}));
var AnomalyTimeRange;
(function (AnomalyTimeRange) {
    /**
     * @internal
     */
    AnomalyTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyTimeRange = exports.AnomalyTimeRange || (exports.AnomalyTimeRange = {}));
var DescribeAccountHealthRequest;
(function (DescribeAccountHealthRequest) {
    /**
     * @internal
     */
    DescribeAccountHealthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountHealthRequest = exports.DescribeAccountHealthRequest || (exports.DescribeAccountHealthRequest = {}));
var DescribeAccountHealthResponse;
(function (DescribeAccountHealthResponse) {
    /**
     * @internal
     */
    DescribeAccountHealthResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountHealthResponse = exports.DescribeAccountHealthResponse || (exports.DescribeAccountHealthResponse = {}));
var DescribeAccountOverviewRequest;
(function (DescribeAccountOverviewRequest) {
    /**
     * @internal
     */
    DescribeAccountOverviewRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountOverviewRequest = exports.DescribeAccountOverviewRequest || (exports.DescribeAccountOverviewRequest = {}));
var DescribeAccountOverviewResponse;
(function (DescribeAccountOverviewResponse) {
    /**
     * @internal
     */
    DescribeAccountOverviewResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAccountOverviewResponse = exports.DescribeAccountOverviewResponse || (exports.DescribeAccountOverviewResponse = {}));
var DescribeAnomalyRequest;
(function (DescribeAnomalyRequest) {
    /**
     * @internal
     */
    DescribeAnomalyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnomalyRequest = exports.DescribeAnomalyRequest || (exports.DescribeAnomalyRequest = {}));
var PredictionTimeRange;
(function (PredictionTimeRange) {
    /**
     * @internal
     */
    PredictionTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PredictionTimeRange = exports.PredictionTimeRange || (exports.PredictionTimeRange = {}));
var CloudFormationCollection;
(function (CloudFormationCollection) {
    /**
     * @internal
     */
    CloudFormationCollection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationCollection = exports.CloudFormationCollection || (exports.CloudFormationCollection = {}));
var ResourceCollection;
(function (ResourceCollection) {
    /**
     * @internal
     */
    ResourceCollection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCollection = exports.ResourceCollection || (exports.ResourceCollection = {}));
var ProactiveAnomaly;
(function (ProactiveAnomaly) {
    /**
     * @internal
     */
    ProactiveAnomaly.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProactiveAnomaly = exports.ProactiveAnomaly || (exports.ProactiveAnomaly = {}));
var ReactiveAnomaly;
(function (ReactiveAnomaly) {
    /**
     * @internal
     */
    ReactiveAnomaly.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactiveAnomaly = exports.ReactiveAnomaly || (exports.ReactiveAnomaly = {}));
var DescribeAnomalyResponse;
(function (DescribeAnomalyResponse) {
    /**
     * @internal
     */
    DescribeAnomalyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAnomalyResponse = exports.DescribeAnomalyResponse || (exports.DescribeAnomalyResponse = {}));
var DescribeFeedbackRequest;
(function (DescribeFeedbackRequest) {
    /**
     * @internal
     */
    DescribeFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeedbackRequest = exports.DescribeFeedbackRequest || (exports.DescribeFeedbackRequest = {}));
var InsightFeedbackOption;
(function (InsightFeedbackOption) {
    InsightFeedbackOption["ALERT_TOO_SENSITIVE"] = "ALERT_TOO_SENSITIVE";
    InsightFeedbackOption["DATA_INCORRECT"] = "DATA_INCORRECT";
    InsightFeedbackOption["DATA_NOISY_ANOMALY"] = "DATA_NOISY_ANOMALY";
    InsightFeedbackOption["RECOMMENDATION_USEFUL"] = "RECOMMENDATION_USEFUL";
    InsightFeedbackOption["VALID_COLLECTION"] = "VALID_COLLECTION";
})(InsightFeedbackOption = exports.InsightFeedbackOption || (exports.InsightFeedbackOption = {}));
var InsightFeedback;
(function (InsightFeedback) {
    /**
     * @internal
     */
    InsightFeedback.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightFeedback = exports.InsightFeedback || (exports.InsightFeedback = {}));
var DescribeFeedbackResponse;
(function (DescribeFeedbackResponse) {
    /**
     * @internal
     */
    DescribeFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeFeedbackResponse = exports.DescribeFeedbackResponse || (exports.DescribeFeedbackResponse = {}));
var DescribeInsightRequest;
(function (DescribeInsightRequest) {
    /**
     * @internal
     */
    DescribeInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInsightRequest = exports.DescribeInsightRequest || (exports.DescribeInsightRequest = {}));
var InsightTimeRange;
(function (InsightTimeRange) {
    /**
     * @internal
     */
    InsightTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightTimeRange = exports.InsightTimeRange || (exports.InsightTimeRange = {}));
var InsightSeverity;
(function (InsightSeverity) {
    InsightSeverity["HIGH"] = "HIGH";
    InsightSeverity["LOW"] = "LOW";
    InsightSeverity["MEDIUM"] = "MEDIUM";
})(InsightSeverity = exports.InsightSeverity || (exports.InsightSeverity = {}));
var InsightStatus;
(function (InsightStatus) {
    InsightStatus["CLOSED"] = "CLOSED";
    InsightStatus["ONGOING"] = "ONGOING";
})(InsightStatus = exports.InsightStatus || (exports.InsightStatus = {}));
var ProactiveInsight;
(function (ProactiveInsight) {
    /**
     * @internal
     */
    ProactiveInsight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProactiveInsight = exports.ProactiveInsight || (exports.ProactiveInsight = {}));
var ReactiveInsight;
(function (ReactiveInsight) {
    /**
     * @internal
     */
    ReactiveInsight.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactiveInsight = exports.ReactiveInsight || (exports.ReactiveInsight = {}));
var DescribeInsightResponse;
(function (DescribeInsightResponse) {
    /**
     * @internal
     */
    DescribeInsightResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeInsightResponse = exports.DescribeInsightResponse || (exports.DescribeInsightResponse = {}));
var ResourceCollectionType;
(function (ResourceCollectionType) {
    ResourceCollectionType["AWS_CLOUD_FORMATION"] = "AWS_CLOUD_FORMATION";
    ResourceCollectionType["AWS_SERVICE"] = "AWS_SERVICE";
})(ResourceCollectionType = exports.ResourceCollectionType || (exports.ResourceCollectionType = {}));
var DescribeResourceCollectionHealthRequest;
(function (DescribeResourceCollectionHealthRequest) {
    /**
     * @internal
     */
    DescribeResourceCollectionHealthRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceCollectionHealthRequest = exports.DescribeResourceCollectionHealthRequest || (exports.DescribeResourceCollectionHealthRequest = {}));
var InsightHealth;
(function (InsightHealth) {
    /**
     * @internal
     */
    InsightHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InsightHealth = exports.InsightHealth || (exports.InsightHealth = {}));
var CloudFormationHealth;
(function (CloudFormationHealth) {
    /**
     * @internal
     */
    CloudFormationHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationHealth = exports.CloudFormationHealth || (exports.CloudFormationHealth = {}));
var ServiceInsightHealth;
(function (ServiceInsightHealth) {
    /**
     * @internal
     */
    ServiceInsightHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceInsightHealth = exports.ServiceInsightHealth || (exports.ServiceInsightHealth = {}));
var ServiceName;
(function (ServiceName) {
    ServiceName["API_GATEWAY"] = "API_GATEWAY";
    ServiceName["APPLICATION_ELB"] = "APPLICATION_ELB";
    ServiceName["AUTO_SCALING_GROUP"] = "AUTO_SCALING_GROUP";
    ServiceName["CLOUD_FRONT"] = "CLOUD_FRONT";
    ServiceName["DYNAMO_DB"] = "DYNAMO_DB";
    ServiceName["EC2"] = "EC2";
    ServiceName["ECS"] = "ECS";
    ServiceName["EKS"] = "EKS";
    ServiceName["ELASTIC_BEANSTALK"] = "ELASTIC_BEANSTALK";
    ServiceName["ELASTI_CACHE"] = "ELASTI_CACHE";
    ServiceName["ELB"] = "ELB";
    ServiceName["ES"] = "ES";
    ServiceName["KINESIS"] = "KINESIS";
    ServiceName["LAMBDA"] = "LAMBDA";
    ServiceName["NAT_GATEWAY"] = "NAT_GATEWAY";
    ServiceName["NETWORK_ELB"] = "NETWORK_ELB";
    ServiceName["RDS"] = "RDS";
    ServiceName["REDSHIFT"] = "REDSHIFT";
    ServiceName["ROUTE_53"] = "ROUTE_53";
    ServiceName["S3"] = "S3";
    ServiceName["SAGE_MAKER"] = "SAGE_MAKER";
    ServiceName["SNS"] = "SNS";
    ServiceName["SQS"] = "SQS";
    ServiceName["STEP_FUNCTIONS"] = "STEP_FUNCTIONS";
    ServiceName["SWF"] = "SWF";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));
var ServiceHealth;
(function (ServiceHealth) {
    /**
     * @internal
     */
    ServiceHealth.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceHealth = exports.ServiceHealth || (exports.ServiceHealth = {}));
var DescribeResourceCollectionHealthResponse;
(function (DescribeResourceCollectionHealthResponse) {
    /**
     * @internal
     */
    DescribeResourceCollectionHealthResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeResourceCollectionHealthResponse = exports.DescribeResourceCollectionHealthResponse || (exports.DescribeResourceCollectionHealthResponse = {}));
var DescribeServiceIntegrationRequest;
(function (DescribeServiceIntegrationRequest) {
    /**
     * @internal
     */
    DescribeServiceIntegrationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceIntegrationRequest = exports.DescribeServiceIntegrationRequest || (exports.DescribeServiceIntegrationRequest = {}));
var OptInStatus;
(function (OptInStatus) {
    OptInStatus["DISABLED"] = "DISABLED";
    OptInStatus["ENABLED"] = "ENABLED";
})(OptInStatus = exports.OptInStatus || (exports.OptInStatus = {}));
var OpsCenterIntegration;
(function (OpsCenterIntegration) {
    /**
     * @internal
     */
    OpsCenterIntegration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsCenterIntegration = exports.OpsCenterIntegration || (exports.OpsCenterIntegration = {}));
var ServiceIntegrationConfig;
(function (ServiceIntegrationConfig) {
    /**
     * @internal
     */
    ServiceIntegrationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceIntegrationConfig = exports.ServiceIntegrationConfig || (exports.ServiceIntegrationConfig = {}));
var DescribeServiceIntegrationResponse;
(function (DescribeServiceIntegrationResponse) {
    /**
     * @internal
     */
    DescribeServiceIntegrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeServiceIntegrationResponse = exports.DescribeServiceIntegrationResponse || (exports.DescribeServiceIntegrationResponse = {}));
var GetCostEstimationRequest;
(function (GetCostEstimationRequest) {
    /**
     * @internal
     */
    GetCostEstimationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostEstimationRequest = exports.GetCostEstimationRequest || (exports.GetCostEstimationRequest = {}));
var CostEstimationServiceResourceState;
(function (CostEstimationServiceResourceState) {
    CostEstimationServiceResourceState["ACTIVE"] = "ACTIVE";
    CostEstimationServiceResourceState["INACTIVE"] = "INACTIVE";
})(CostEstimationServiceResourceState = exports.CostEstimationServiceResourceState || (exports.CostEstimationServiceResourceState = {}));
var ServiceResourceCost;
(function (ServiceResourceCost) {
    /**
     * @internal
     */
    ServiceResourceCost.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceResourceCost = exports.ServiceResourceCost || (exports.ServiceResourceCost = {}));
var CloudFormationCostEstimationResourceCollectionFilter;
(function (CloudFormationCostEstimationResourceCollectionFilter) {
    /**
     * @internal
     */
    CloudFormationCostEstimationResourceCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationCostEstimationResourceCollectionFilter = exports.CloudFormationCostEstimationResourceCollectionFilter || (exports.CloudFormationCostEstimationResourceCollectionFilter = {}));
var CostEstimationResourceCollectionFilter;
(function (CostEstimationResourceCollectionFilter) {
    /**
     * @internal
     */
    CostEstimationResourceCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostEstimationResourceCollectionFilter = exports.CostEstimationResourceCollectionFilter || (exports.CostEstimationResourceCollectionFilter = {}));
var CostEstimationStatus;
(function (CostEstimationStatus) {
    CostEstimationStatus["COMPLETED"] = "COMPLETED";
    CostEstimationStatus["ONGOING"] = "ONGOING";
})(CostEstimationStatus = exports.CostEstimationStatus || (exports.CostEstimationStatus = {}));
var CostEstimationTimeRange;
(function (CostEstimationTimeRange) {
    /**
     * @internal
     */
    CostEstimationTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostEstimationTimeRange = exports.CostEstimationTimeRange || (exports.CostEstimationTimeRange = {}));
var GetCostEstimationResponse;
(function (GetCostEstimationResponse) {
    /**
     * @internal
     */
    GetCostEstimationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostEstimationResponse = exports.GetCostEstimationResponse || (exports.GetCostEstimationResponse = {}));
var GetResourceCollectionRequest;
(function (GetResourceCollectionRequest) {
    /**
     * @internal
     */
    GetResourceCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceCollectionRequest = exports.GetResourceCollectionRequest || (exports.GetResourceCollectionRequest = {}));
var CloudFormationCollectionFilter;
(function (CloudFormationCollectionFilter) {
    /**
     * @internal
     */
    CloudFormationCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CloudFormationCollectionFilter = exports.CloudFormationCollectionFilter || (exports.CloudFormationCollectionFilter = {}));
var ResourceCollectionFilter;
(function (ResourceCollectionFilter) {
    /**
     * @internal
     */
    ResourceCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceCollectionFilter = exports.ResourceCollectionFilter || (exports.ResourceCollectionFilter = {}));
var GetResourceCollectionResponse;
(function (GetResourceCollectionResponse) {
    /**
     * @internal
     */
    GetResourceCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetResourceCollectionResponse = exports.GetResourceCollectionResponse || (exports.GetResourceCollectionResponse = {}));
var StartTimeRange;
(function (StartTimeRange) {
    /**
     * @internal
     */
    StartTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartTimeRange = exports.StartTimeRange || (exports.StartTimeRange = {}));
var ListAnomaliesForInsightRequest;
(function (ListAnomaliesForInsightRequest) {
    /**
     * @internal
     */
    ListAnomaliesForInsightRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnomaliesForInsightRequest = exports.ListAnomaliesForInsightRequest || (exports.ListAnomaliesForInsightRequest = {}));
var ProactiveAnomalySummary;
(function (ProactiveAnomalySummary) {
    /**
     * @internal
     */
    ProactiveAnomalySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProactiveAnomalySummary = exports.ProactiveAnomalySummary || (exports.ProactiveAnomalySummary = {}));
var ReactiveAnomalySummary;
(function (ReactiveAnomalySummary) {
    /**
     * @internal
     */
    ReactiveAnomalySummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactiveAnomalySummary = exports.ReactiveAnomalySummary || (exports.ReactiveAnomalySummary = {}));
var ListAnomaliesForInsightResponse;
(function (ListAnomaliesForInsightResponse) {
    /**
     * @internal
     */
    ListAnomaliesForInsightResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAnomaliesForInsightResponse = exports.ListAnomaliesForInsightResponse || (exports.ListAnomaliesForInsightResponse = {}));
var EventDataSource;
(function (EventDataSource) {
    EventDataSource["AWS_CLOUD_TRAIL"] = "AWS_CLOUD_TRAIL";
    EventDataSource["AWS_CODE_DEPLOY"] = "AWS_CODE_DEPLOY";
})(EventDataSource = exports.EventDataSource || (exports.EventDataSource = {}));
var EventClass;
(function (EventClass) {
    EventClass["CONFIG_CHANGE"] = "CONFIG_CHANGE";
    EventClass["DEPLOYMENT"] = "DEPLOYMENT";
    EventClass["INFRASTRUCTURE"] = "INFRASTRUCTURE";
    EventClass["SCHEMA_CHANGE"] = "SCHEMA_CHANGE";
    EventClass["SECURITY_CHANGE"] = "SECURITY_CHANGE";
})(EventClass = exports.EventClass || (exports.EventClass = {}));
var EventTimeRange;
(function (EventTimeRange) {
    /**
     * @internal
     */
    EventTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTimeRange = exports.EventTimeRange || (exports.EventTimeRange = {}));
var ListEventsFilters;
(function (ListEventsFilters) {
    /**
     * @internal
     */
    ListEventsFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventsFilters = exports.ListEventsFilters || (exports.ListEventsFilters = {}));
var ListEventsRequest;
(function (ListEventsRequest) {
    /**
     * @internal
     */
    ListEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventsRequest = exports.ListEventsRequest || (exports.ListEventsRequest = {}));
var EventResource;
(function (EventResource) {
    /**
     * @internal
     */
    EventResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventResource = exports.EventResource || (exports.EventResource = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var ListEventsResponse;
(function (ListEventsResponse) {
    /**
     * @internal
     */
    ListEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventsResponse = exports.ListEventsResponse || (exports.ListEventsResponse = {}));
var InsightType;
(function (InsightType) {
    InsightType["PROACTIVE"] = "PROACTIVE";
    InsightType["REACTIVE"] = "REACTIVE";
})(InsightType = exports.InsightType || (exports.InsightType = {}));
var ListInsightsAnyStatusFilter;
(function (ListInsightsAnyStatusFilter) {
    /**
     * @internal
     */
    ListInsightsAnyStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsAnyStatusFilter = exports.ListInsightsAnyStatusFilter || (exports.ListInsightsAnyStatusFilter = {}));
var EndTimeRange;
(function (EndTimeRange) {
    /**
     * @internal
     */
    EndTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EndTimeRange = exports.EndTimeRange || (exports.EndTimeRange = {}));
var ListInsightsClosedStatusFilter;
(function (ListInsightsClosedStatusFilter) {
    /**
     * @internal
     */
    ListInsightsClosedStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsClosedStatusFilter = exports.ListInsightsClosedStatusFilter || (exports.ListInsightsClosedStatusFilter = {}));
var ListInsightsOngoingStatusFilter;
(function (ListInsightsOngoingStatusFilter) {
    /**
     * @internal
     */
    ListInsightsOngoingStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsOngoingStatusFilter = exports.ListInsightsOngoingStatusFilter || (exports.ListInsightsOngoingStatusFilter = {}));
var ListInsightsStatusFilter;
(function (ListInsightsStatusFilter) {
    /**
     * @internal
     */
    ListInsightsStatusFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsStatusFilter = exports.ListInsightsStatusFilter || (exports.ListInsightsStatusFilter = {}));
var ListInsightsRequest;
(function (ListInsightsRequest) {
    /**
     * @internal
     */
    ListInsightsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsRequest = exports.ListInsightsRequest || (exports.ListInsightsRequest = {}));
var ServiceCollection;
(function (ServiceCollection) {
    /**
     * @internal
     */
    ServiceCollection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceCollection = exports.ServiceCollection || (exports.ServiceCollection = {}));
var ProactiveInsightSummary;
(function (ProactiveInsightSummary) {
    /**
     * @internal
     */
    ProactiveInsightSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProactiveInsightSummary = exports.ProactiveInsightSummary || (exports.ProactiveInsightSummary = {}));
var ReactiveInsightSummary;
(function (ReactiveInsightSummary) {
    /**
     * @internal
     */
    ReactiveInsightSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReactiveInsightSummary = exports.ReactiveInsightSummary || (exports.ReactiveInsightSummary = {}));
var ListInsightsResponse;
(function (ListInsightsResponse) {
    /**
     * @internal
     */
    ListInsightsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListInsightsResponse = exports.ListInsightsResponse || (exports.ListInsightsResponse = {}));
var ListNotificationChannelsRequest;
(function (ListNotificationChannelsRequest) {
    /**
     * @internal
     */
    ListNotificationChannelsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationChannelsRequest = exports.ListNotificationChannelsRequest || (exports.ListNotificationChannelsRequest = {}));
var NotificationChannel;
(function (NotificationChannel) {
    /**
     * @internal
     */
    NotificationChannel.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotificationChannel = exports.NotificationChannel || (exports.NotificationChannel = {}));
var ListNotificationChannelsResponse;
(function (ListNotificationChannelsResponse) {
    /**
     * @internal
     */
    ListNotificationChannelsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListNotificationChannelsResponse = exports.ListNotificationChannelsResponse || (exports.ListNotificationChannelsResponse = {}));
var Locale;
(function (Locale) {
    Locale["DE_DE"] = "DE_DE";
    Locale["EN_GB"] = "EN_GB";
    Locale["EN_US"] = "EN_US";
    Locale["ES_ES"] = "ES_ES";
    Locale["FR_FR"] = "FR_FR";
    Locale["IT_IT"] = "IT_IT";
    Locale["JA_JP"] = "JA_JP";
    Locale["KO_KR"] = "KO_KR";
    Locale["PT_BR"] = "PT_BR";
    Locale["ZH_CN"] = "ZH_CN";
    Locale["ZH_TW"] = "ZH_TW";
})(Locale = exports.Locale || (exports.Locale = {}));
var ListRecommendationsRequest;
(function (ListRecommendationsRequest) {
    /**
     * @internal
     */
    ListRecommendationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationsRequest = exports.ListRecommendationsRequest || (exports.ListRecommendationsRequest = {}));
var RecommendationRelatedAnomalyResource;
(function (RecommendationRelatedAnomalyResource) {
    /**
     * @internal
     */
    RecommendationRelatedAnomalyResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedAnomalyResource = exports.RecommendationRelatedAnomalyResource || (exports.RecommendationRelatedAnomalyResource = {}));
var RecommendationRelatedCloudWatchMetricsSourceDetail;
(function (RecommendationRelatedCloudWatchMetricsSourceDetail) {
    /**
     * @internal
     */
    RecommendationRelatedCloudWatchMetricsSourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedCloudWatchMetricsSourceDetail = exports.RecommendationRelatedCloudWatchMetricsSourceDetail || (exports.RecommendationRelatedCloudWatchMetricsSourceDetail = {}));
var RecommendationRelatedAnomalySourceDetail;
(function (RecommendationRelatedAnomalySourceDetail) {
    /**
     * @internal
     */
    RecommendationRelatedAnomalySourceDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedAnomalySourceDetail = exports.RecommendationRelatedAnomalySourceDetail || (exports.RecommendationRelatedAnomalySourceDetail = {}));
var RecommendationRelatedAnomaly;
(function (RecommendationRelatedAnomaly) {
    /**
     * @internal
     */
    RecommendationRelatedAnomaly.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedAnomaly = exports.RecommendationRelatedAnomaly || (exports.RecommendationRelatedAnomaly = {}));
var RecommendationRelatedEventResource;
(function (RecommendationRelatedEventResource) {
    /**
     * @internal
     */
    RecommendationRelatedEventResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedEventResource = exports.RecommendationRelatedEventResource || (exports.RecommendationRelatedEventResource = {}));
var RecommendationRelatedEvent;
(function (RecommendationRelatedEvent) {
    /**
     * @internal
     */
    RecommendationRelatedEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RecommendationRelatedEvent = exports.RecommendationRelatedEvent || (exports.RecommendationRelatedEvent = {}));
var Recommendation;
(function (Recommendation) {
    /**
     * @internal
     */
    Recommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Recommendation = exports.Recommendation || (exports.Recommendation = {}));
var ListRecommendationsResponse;
(function (ListRecommendationsResponse) {
    /**
     * @internal
     */
    ListRecommendationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRecommendationsResponse = exports.ListRecommendationsResponse || (exports.ListRecommendationsResponse = {}));
var PutFeedbackRequest;
(function (PutFeedbackRequest) {
    /**
     * @internal
     */
    PutFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFeedbackRequest = exports.PutFeedbackRequest || (exports.PutFeedbackRequest = {}));
var PutFeedbackResponse;
(function (PutFeedbackResponse) {
    /**
     * @internal
     */
    PutFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutFeedbackResponse = exports.PutFeedbackResponse || (exports.PutFeedbackResponse = {}));
var RemoveNotificationChannelRequest;
(function (RemoveNotificationChannelRequest) {
    /**
     * @internal
     */
    RemoveNotificationChannelRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveNotificationChannelRequest = exports.RemoveNotificationChannelRequest || (exports.RemoveNotificationChannelRequest = {}));
var RemoveNotificationChannelResponse;
(function (RemoveNotificationChannelResponse) {
    /**
     * @internal
     */
    RemoveNotificationChannelResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveNotificationChannelResponse = exports.RemoveNotificationChannelResponse || (exports.RemoveNotificationChannelResponse = {}));
var SearchInsightsFilters;
(function (SearchInsightsFilters) {
    /**
     * @internal
     */
    SearchInsightsFilters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchInsightsFilters = exports.SearchInsightsFilters || (exports.SearchInsightsFilters = {}));
var SearchInsightsRequest;
(function (SearchInsightsRequest) {
    /**
     * @internal
     */
    SearchInsightsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchInsightsRequest = exports.SearchInsightsRequest || (exports.SearchInsightsRequest = {}));
var SearchInsightsResponse;
(function (SearchInsightsResponse) {
    /**
     * @internal
     */
    SearchInsightsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SearchInsightsResponse = exports.SearchInsightsResponse || (exports.SearchInsightsResponse = {}));
var StartCostEstimationRequest;
(function (StartCostEstimationRequest) {
    /**
     * @internal
     */
    StartCostEstimationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCostEstimationRequest = exports.StartCostEstimationRequest || (exports.StartCostEstimationRequest = {}));
var StartCostEstimationResponse;
(function (StartCostEstimationResponse) {
    /**
     * @internal
     */
    StartCostEstimationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartCostEstimationResponse = exports.StartCostEstimationResponse || (exports.StartCostEstimationResponse = {}));
var UpdateResourceCollectionAction;
(function (UpdateResourceCollectionAction) {
    UpdateResourceCollectionAction["ADD"] = "ADD";
    UpdateResourceCollectionAction["REMOVE"] = "REMOVE";
})(UpdateResourceCollectionAction = exports.UpdateResourceCollectionAction || (exports.UpdateResourceCollectionAction = {}));
var UpdateCloudFormationCollectionFilter;
(function (UpdateCloudFormationCollectionFilter) {
    /**
     * @internal
     */
    UpdateCloudFormationCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCloudFormationCollectionFilter = exports.UpdateCloudFormationCollectionFilter || (exports.UpdateCloudFormationCollectionFilter = {}));
var UpdateResourceCollectionFilter;
(function (UpdateResourceCollectionFilter) {
    /**
     * @internal
     */
    UpdateResourceCollectionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceCollectionFilter = exports.UpdateResourceCollectionFilter || (exports.UpdateResourceCollectionFilter = {}));
var UpdateResourceCollectionRequest;
(function (UpdateResourceCollectionRequest) {
    /**
     * @internal
     */
    UpdateResourceCollectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceCollectionRequest = exports.UpdateResourceCollectionRequest || (exports.UpdateResourceCollectionRequest = {}));
var UpdateResourceCollectionResponse;
(function (UpdateResourceCollectionResponse) {
    /**
     * @internal
     */
    UpdateResourceCollectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateResourceCollectionResponse = exports.UpdateResourceCollectionResponse || (exports.UpdateResourceCollectionResponse = {}));
var OpsCenterIntegrationConfig;
(function (OpsCenterIntegrationConfig) {
    /**
     * @internal
     */
    OpsCenterIntegrationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OpsCenterIntegrationConfig = exports.OpsCenterIntegrationConfig || (exports.OpsCenterIntegrationConfig = {}));
var UpdateServiceIntegrationConfig;
(function (UpdateServiceIntegrationConfig) {
    /**
     * @internal
     */
    UpdateServiceIntegrationConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceIntegrationConfig = exports.UpdateServiceIntegrationConfig || (exports.UpdateServiceIntegrationConfig = {}));
var UpdateServiceIntegrationRequest;
(function (UpdateServiceIntegrationRequest) {
    /**
     * @internal
     */
    UpdateServiceIntegrationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceIntegrationRequest = exports.UpdateServiceIntegrationRequest || (exports.UpdateServiceIntegrationRequest = {}));
var UpdateServiceIntegrationResponse;
(function (UpdateServiceIntegrationResponse) {
    /**
     * @internal
     */
    UpdateServiceIntegrationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateServiceIntegrationResponse = exports.UpdateServiceIntegrationResponse || (exports.UpdateServiceIntegrationResponse = {}));
//# sourceMappingURL=models_0.js.map