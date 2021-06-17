"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnomalySubscriptionsResponse = exports.GetAnomalySubscriptionsRequest = exports.GetAnomalyMonitorsRequest = exports.InvalidNextTokenException = exports.GetAnomaliesResponse = exports.GetAnomaliesRequest = exports.TotalImpactFilter = exports.NumericOperator = exports.CostCategoryProcessingStatus = exports.CostCategoryStatus = exports.CostCategoryStatusComponent = exports.DescribeCostCategoryDefinitionRequest = exports.ResourceNotFoundException = exports.DeleteCostCategoryDefinitionResponse = exports.DeleteCostCategoryDefinitionRequest = exports.UnknownSubscriptionException = exports.DeleteAnomalySubscriptionResponse = exports.DeleteAnomalySubscriptionRequest = exports.DeleteAnomalyMonitorResponse = exports.DeleteAnomalyMonitorRequest = exports.ServiceQuotaExceededException = exports.CreateCostCategoryDefinitionResponse = exports.CostCategoryRuleVersion = exports.CostCategoryRuleType = exports.CostCategoryInheritedValueDimension = exports.CostCategoryInheritedValueDimensionName = exports.UnknownMonitorException = exports.CreateAnomalySubscriptionResponse = exports.CreateAnomalySubscriptionRequest = exports.LimitExceededException = exports.CreateAnomalyMonitorResponse = exports.AnomalySubscription = exports.Subscriber = exports.SubscriberType = exports.SubscriberStatus = exports.AnomalySubscriptionFrequency = exports.MonitorType = exports.TagValues = exports.DimensionValues = exports.Dimension = exports.CostCategoryValues = exports.MatchOption = exports.MonitorDimension = exports.AnomalyDateInterval = exports.Anomaly = exports.RootCause = exports.Impact = exports.AnomalyFeedbackType = exports.AnomalyScore = exports.AccountScope = void 0;
exports.RecommendationTarget = exports.GetReservationUtilizationResponse = exports.UtilizationByTime = exports.ReservationUtilizationGroup = exports.ReservationAggregates = exports.GetReservationPurchaseRecommendationResponse = exports.ReservationPurchaseRecommendation = exports.ReservationPurchaseRecommendationSummary = exports.ReservationPurchaseRecommendationDetail = exports.InstanceDetails = exports.RedshiftInstanceDetails = exports.RDSInstanceDetails = exports.ESInstanceDetails = exports.ElastiCacheInstanceDetails = exports.EC2InstanceDetails = exports.ReservationPurchaseRecommendationMetadata = exports.TermInYears = exports.ServiceSpecification = exports.EC2Specification = exports.OfferingClass = exports.PaymentOption = exports.LookbackPeriodInDays = exports.GetReservationCoverageResponse = exports.CoverageByTime = exports.ReservationCoverageGroup = exports.Coverage = exports.CoverageNormalizedUnits = exports.CoverageHours = exports.CoverageCost = exports.GetDimensionValuesResponse = exports.Context = exports.GetCostForecastResponse = exports.ForecastResult = exports.Metric = exports.GetCostCategoriesResponse = exports.SortDefinition = exports.SortOrder = exports.GetCostAndUsageWithResourcesResponse = exports.RequestChangedException = exports.GetCostAndUsageResponse = exports.ResultByTime = exports.Group = exports.MetricValue = exports.DimensionValuesWithAttributes = exports.DateInterval = exports.GroupDefinition = exports.GroupDefinitionType = exports.Granularity = exports.DataUnavailableException = exports.BillExpirationException = void 0;
exports.UpdateAnomalySubscriptionResponse = exports.UpdateAnomalySubscriptionRequest = exports.UpdateAnomalyMonitorResponse = exports.UpdateAnomalyMonitorRequest = exports.ProvideAnomalyFeedbackResponse = exports.ProvideAnomalyFeedbackRequest = exports.ListCostCategoryDefinitionsResponse = exports.CostCategoryReference = exports.ListCostCategoryDefinitionsRequest = exports.UnresolvableUsageUnitException = exports.GetUsageForecastResponse = exports.GetTagsResponse = exports.GetSavingsPlansUtilizationDetailsResponse = exports.SavingsPlansUtilizationDetail = exports.SavingsPlansDataType = exports.GetSavingsPlansUtilizationResponse = exports.SavingsPlansUtilizationAggregates = exports.SavingsPlansUtilizationByTime = exports.SavingsPlansUtilization = exports.SavingsPlansSavings = exports.SavingsPlansAmortizedCommitment = exports.GetSavingsPlansPurchaseRecommendationResponse = exports.SavingsPlansPurchaseRecommendation = exports.SavingsPlansPurchaseRecommendationSummary = exports.SavingsPlansPurchaseRecommendationDetail = exports.SavingsPlansDetails = exports.SavingsPlansPurchaseRecommendationMetadata = exports.SupportedSavingsPlansType = exports.GetSavingsPlansCoverageResponse = exports.SavingsPlansCoverage = exports.SavingsPlansCoverageData = exports.GetRightsizingRecommendationResponse = exports.RightsizingRecommendationSummary = exports.RightsizingRecommendation = exports.TerminateRecommendationDetail = exports.RightsizingType = exports.ModifyRecommendationDetail = exports.TargetInstance = exports.PlatformDifference = exports.FindingReasonCode = exports.CurrentInstance = exports.ResourceUtilization = exports.EC2ResourceUtilization = exports.NetworkResourceUtilization = exports.EBSResourceUtilization = exports.DiskResourceUtilization = exports.ResourceDetails = exports.EC2ResourceDetails = exports.RightsizingRecommendationMetadata = exports.RightsizingRecommendationConfiguration = void 0;
exports.DescribeCostCategoryDefinitionResponse = exports.UpdateCostCategoryDefinitionRequest = exports.GetAnomalyMonitorsResponse = exports.CreateCostCategoryDefinitionRequest = exports.CostCategory = exports.CreateAnomalyMonitorRequest = exports.GetUsageForecastRequest = exports.GetTagsRequest = exports.GetSavingsPlansUtilizationRequest = exports.GetSavingsPlansUtilizationDetailsRequest = exports.GetSavingsPlansPurchaseRecommendationRequest = exports.GetSavingsPlansCoverageRequest = exports.GetRightsizingRecommendationRequest = exports.GetReservationUtilizationRequest = exports.GetReservationPurchaseRecommendationRequest = exports.GetReservationCoverageRequest = exports.GetDimensionValuesRequest = exports.GetCostForecastRequest = exports.GetCostCategoriesRequest = exports.GetCostAndUsageWithResourcesRequest = exports.GetCostAndUsageRequest = exports.CostCategoryRule = exports.AnomalyMonitor = exports.Expression = exports.UpdateCostCategoryDefinitionResponse = void 0;
var AccountScope;
(function (AccountScope) {
    AccountScope["LINKED"] = "LINKED";
    AccountScope["PAYER"] = "PAYER";
})(AccountScope = exports.AccountScope || (exports.AccountScope = {}));
var AnomalyScore;
(function (AnomalyScore) {
    /**
     * @internal
     */
    AnomalyScore.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyScore = exports.AnomalyScore || (exports.AnomalyScore = {}));
var AnomalyFeedbackType;
(function (AnomalyFeedbackType) {
    AnomalyFeedbackType["NO"] = "NO";
    AnomalyFeedbackType["PLANNED_ACTIVITY"] = "PLANNED_ACTIVITY";
    AnomalyFeedbackType["YES"] = "YES";
})(AnomalyFeedbackType = exports.AnomalyFeedbackType || (exports.AnomalyFeedbackType = {}));
var Impact;
(function (Impact) {
    /**
     * @internal
     */
    Impact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Impact = exports.Impact || (exports.Impact = {}));
var RootCause;
(function (RootCause) {
    /**
     * @internal
     */
    RootCause.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RootCause = exports.RootCause || (exports.RootCause = {}));
var Anomaly;
(function (Anomaly) {
    /**
     * @internal
     */
    Anomaly.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Anomaly = exports.Anomaly || (exports.Anomaly = {}));
var AnomalyDateInterval;
(function (AnomalyDateInterval) {
    /**
     * @internal
     */
    AnomalyDateInterval.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyDateInterval = exports.AnomalyDateInterval || (exports.AnomalyDateInterval = {}));
var MonitorDimension;
(function (MonitorDimension) {
    MonitorDimension["SERVICE"] = "SERVICE";
})(MonitorDimension = exports.MonitorDimension || (exports.MonitorDimension = {}));
var MatchOption;
(function (MatchOption) {
    MatchOption["ABSENT"] = "ABSENT";
    MatchOption["CASE_INSENSITIVE"] = "CASE_INSENSITIVE";
    MatchOption["CASE_SENSITIVE"] = "CASE_SENSITIVE";
    MatchOption["CONTAINS"] = "CONTAINS";
    MatchOption["ENDS_WITH"] = "ENDS_WITH";
    MatchOption["EQUALS"] = "EQUALS";
    MatchOption["STARTS_WITH"] = "STARTS_WITH";
})(MatchOption = exports.MatchOption || (exports.MatchOption = {}));
var CostCategoryValues;
(function (CostCategoryValues) {
    /**
     * @internal
     */
    CostCategoryValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategoryValues = exports.CostCategoryValues || (exports.CostCategoryValues = {}));
var Dimension;
(function (Dimension) {
    Dimension["AGREEMENT_END_DATE_TIME_AFTER"] = "AGREEMENT_END_DATE_TIME_AFTER";
    Dimension["AGREEMENT_END_DATE_TIME_BEFORE"] = "AGREEMENT_END_DATE_TIME_BEFORE";
    Dimension["AZ"] = "AZ";
    Dimension["BILLING_ENTITY"] = "BILLING_ENTITY";
    Dimension["CACHE_ENGINE"] = "CACHE_ENGINE";
    Dimension["DATABASE_ENGINE"] = "DATABASE_ENGINE";
    Dimension["DEPLOYMENT_OPTION"] = "DEPLOYMENT_OPTION";
    Dimension["INSTANCE_TYPE"] = "INSTANCE_TYPE";
    Dimension["INSTANCE_TYPE_FAMILY"] = "INSTANCE_TYPE_FAMILY";
    Dimension["LEGAL_ENTITY_NAME"] = "LEGAL_ENTITY_NAME";
    Dimension["LINKED_ACCOUNT"] = "LINKED_ACCOUNT";
    Dimension["LINKED_ACCOUNT_NAME"] = "LINKED_ACCOUNT_NAME";
    Dimension["OPERATING_SYSTEM"] = "OPERATING_SYSTEM";
    Dimension["OPERATION"] = "OPERATION";
    Dimension["PAYMENT_OPTION"] = "PAYMENT_OPTION";
    Dimension["PLATFORM"] = "PLATFORM";
    Dimension["PURCHASE_TYPE"] = "PURCHASE_TYPE";
    Dimension["RECORD_TYPE"] = "RECORD_TYPE";
    Dimension["REGION"] = "REGION";
    Dimension["RESERVATION_ID"] = "RESERVATION_ID";
    Dimension["RESOURCE_ID"] = "RESOURCE_ID";
    Dimension["RIGHTSIZING_TYPE"] = "RIGHTSIZING_TYPE";
    Dimension["SAVINGS_PLANS_TYPE"] = "SAVINGS_PLANS_TYPE";
    Dimension["SAVINGS_PLAN_ARN"] = "SAVINGS_PLAN_ARN";
    Dimension["SCOPE"] = "SCOPE";
    Dimension["SERVICE"] = "SERVICE";
    Dimension["SERVICE_CODE"] = "SERVICE_CODE";
    Dimension["SUBSCRIPTION_ID"] = "SUBSCRIPTION_ID";
    Dimension["TENANCY"] = "TENANCY";
    Dimension["USAGE_TYPE"] = "USAGE_TYPE";
    Dimension["USAGE_TYPE_GROUP"] = "USAGE_TYPE_GROUP";
})(Dimension = exports.Dimension || (exports.Dimension = {}));
var DimensionValues;
(function (DimensionValues) {
    /**
     * @internal
     */
    DimensionValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DimensionValues = exports.DimensionValues || (exports.DimensionValues = {}));
var TagValues;
(function (TagValues) {
    /**
     * @internal
     */
    TagValues.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagValues = exports.TagValues || (exports.TagValues = {}));
var MonitorType;
(function (MonitorType) {
    MonitorType["CUSTOM"] = "CUSTOM";
    MonitorType["DIMENSIONAL"] = "DIMENSIONAL";
})(MonitorType = exports.MonitorType || (exports.MonitorType = {}));
var AnomalySubscriptionFrequency;
(function (AnomalySubscriptionFrequency) {
    AnomalySubscriptionFrequency["DAILY"] = "DAILY";
    AnomalySubscriptionFrequency["IMMEDIATE"] = "IMMEDIATE";
    AnomalySubscriptionFrequency["WEEKLY"] = "WEEKLY";
})(AnomalySubscriptionFrequency = exports.AnomalySubscriptionFrequency || (exports.AnomalySubscriptionFrequency = {}));
var SubscriberStatus;
(function (SubscriberStatus) {
    SubscriberStatus["CONFIRMED"] = "CONFIRMED";
    SubscriberStatus["DECLINED"] = "DECLINED";
})(SubscriberStatus = exports.SubscriberStatus || (exports.SubscriberStatus = {}));
var SubscriberType;
(function (SubscriberType) {
    SubscriberType["EMAIL"] = "EMAIL";
    SubscriberType["SNS"] = "SNS";
})(SubscriberType = exports.SubscriberType || (exports.SubscriberType = {}));
var Subscriber;
(function (Subscriber) {
    /**
     * @internal
     */
    Subscriber.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Subscriber = exports.Subscriber || (exports.Subscriber = {}));
var AnomalySubscription;
(function (AnomalySubscription) {
    /**
     * @internal
     */
    AnomalySubscription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalySubscription = exports.AnomalySubscription || (exports.AnomalySubscription = {}));
var CreateAnomalyMonitorResponse;
(function (CreateAnomalyMonitorResponse) {
    /**
     * @internal
     */
    CreateAnomalyMonitorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnomalyMonitorResponse = exports.CreateAnomalyMonitorResponse || (exports.CreateAnomalyMonitorResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var CreateAnomalySubscriptionRequest;
(function (CreateAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    CreateAnomalySubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnomalySubscriptionRequest = exports.CreateAnomalySubscriptionRequest || (exports.CreateAnomalySubscriptionRequest = {}));
var CreateAnomalySubscriptionResponse;
(function (CreateAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    CreateAnomalySubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnomalySubscriptionResponse = exports.CreateAnomalySubscriptionResponse || (exports.CreateAnomalySubscriptionResponse = {}));
var UnknownMonitorException;
(function (UnknownMonitorException) {
    /**
     * @internal
     */
    UnknownMonitorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownMonitorException = exports.UnknownMonitorException || (exports.UnknownMonitorException = {}));
var CostCategoryInheritedValueDimensionName;
(function (CostCategoryInheritedValueDimensionName) {
    CostCategoryInheritedValueDimensionName["LINKED_ACCOUNT_NAME"] = "LINKED_ACCOUNT_NAME";
    CostCategoryInheritedValueDimensionName["TAG"] = "TAG";
})(CostCategoryInheritedValueDimensionName = exports.CostCategoryInheritedValueDimensionName || (exports.CostCategoryInheritedValueDimensionName = {}));
var CostCategoryInheritedValueDimension;
(function (CostCategoryInheritedValueDimension) {
    /**
     * @internal
     */
    CostCategoryInheritedValueDimension.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategoryInheritedValueDimension = exports.CostCategoryInheritedValueDimension || (exports.CostCategoryInheritedValueDimension = {}));
var CostCategoryRuleType;
(function (CostCategoryRuleType) {
    CostCategoryRuleType["INHERITED_VALUE"] = "INHERITED_VALUE";
    CostCategoryRuleType["REGULAR"] = "REGULAR";
})(CostCategoryRuleType = exports.CostCategoryRuleType || (exports.CostCategoryRuleType = {}));
var CostCategoryRuleVersion;
(function (CostCategoryRuleVersion) {
    CostCategoryRuleVersion["CostCategoryExpressionV1"] = "CostCategoryExpression.v1";
})(CostCategoryRuleVersion = exports.CostCategoryRuleVersion || (exports.CostCategoryRuleVersion = {}));
var CreateCostCategoryDefinitionResponse;
(function (CreateCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    CreateCostCategoryDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCostCategoryDefinitionResponse = exports.CreateCostCategoryDefinitionResponse || (exports.CreateCostCategoryDefinitionResponse = {}));
var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceQuotaExceededException = exports.ServiceQuotaExceededException || (exports.ServiceQuotaExceededException = {}));
var DeleteAnomalyMonitorRequest;
(function (DeleteAnomalyMonitorRequest) {
    /**
     * @internal
     */
    DeleteAnomalyMonitorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalyMonitorRequest = exports.DeleteAnomalyMonitorRequest || (exports.DeleteAnomalyMonitorRequest = {}));
var DeleteAnomalyMonitorResponse;
(function (DeleteAnomalyMonitorResponse) {
    /**
     * @internal
     */
    DeleteAnomalyMonitorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalyMonitorResponse = exports.DeleteAnomalyMonitorResponse || (exports.DeleteAnomalyMonitorResponse = {}));
var DeleteAnomalySubscriptionRequest;
(function (DeleteAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    DeleteAnomalySubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalySubscriptionRequest = exports.DeleteAnomalySubscriptionRequest || (exports.DeleteAnomalySubscriptionRequest = {}));
var DeleteAnomalySubscriptionResponse;
(function (DeleteAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    DeleteAnomalySubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteAnomalySubscriptionResponse = exports.DeleteAnomalySubscriptionResponse || (exports.DeleteAnomalySubscriptionResponse = {}));
var UnknownSubscriptionException;
(function (UnknownSubscriptionException) {
    /**
     * @internal
     */
    UnknownSubscriptionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnknownSubscriptionException = exports.UnknownSubscriptionException || (exports.UnknownSubscriptionException = {}));
var DeleteCostCategoryDefinitionRequest;
(function (DeleteCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    DeleteCostCategoryDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCostCategoryDefinitionRequest = exports.DeleteCostCategoryDefinitionRequest || (exports.DeleteCostCategoryDefinitionRequest = {}));
var DeleteCostCategoryDefinitionResponse;
(function (DeleteCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    DeleteCostCategoryDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCostCategoryDefinitionResponse = exports.DeleteCostCategoryDefinitionResponse || (exports.DeleteCostCategoryDefinitionResponse = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var DescribeCostCategoryDefinitionRequest;
(function (DescribeCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    DescribeCostCategoryDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCostCategoryDefinitionRequest = exports.DescribeCostCategoryDefinitionRequest || (exports.DescribeCostCategoryDefinitionRequest = {}));
var CostCategoryStatusComponent;
(function (CostCategoryStatusComponent) {
    CostCategoryStatusComponent["COST_EXPLORER"] = "COST_EXPLORER";
})(CostCategoryStatusComponent = exports.CostCategoryStatusComponent || (exports.CostCategoryStatusComponent = {}));
var CostCategoryStatus;
(function (CostCategoryStatus) {
    CostCategoryStatus["APPLIED"] = "APPLIED";
    CostCategoryStatus["PROCESSING"] = "PROCESSING";
})(CostCategoryStatus = exports.CostCategoryStatus || (exports.CostCategoryStatus = {}));
var CostCategoryProcessingStatus;
(function (CostCategoryProcessingStatus) {
    /**
     * @internal
     */
    CostCategoryProcessingStatus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategoryProcessingStatus = exports.CostCategoryProcessingStatus || (exports.CostCategoryProcessingStatus = {}));
var NumericOperator;
(function (NumericOperator) {
    NumericOperator["BETWEEN"] = "BETWEEN";
    NumericOperator["EQUAL"] = "EQUAL";
    NumericOperator["GREATER_THAN"] = "GREATER_THAN";
    NumericOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    NumericOperator["LESS_THAN"] = "LESS_THAN";
    NumericOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
})(NumericOperator = exports.NumericOperator || (exports.NumericOperator = {}));
var TotalImpactFilter;
(function (TotalImpactFilter) {
    /**
     * @internal
     */
    TotalImpactFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TotalImpactFilter = exports.TotalImpactFilter || (exports.TotalImpactFilter = {}));
var GetAnomaliesRequest;
(function (GetAnomaliesRequest) {
    /**
     * @internal
     */
    GetAnomaliesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomaliesRequest = exports.GetAnomaliesRequest || (exports.GetAnomaliesRequest = {}));
var GetAnomaliesResponse;
(function (GetAnomaliesResponse) {
    /**
     * @internal
     */
    GetAnomaliesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomaliesResponse = exports.GetAnomaliesResponse || (exports.GetAnomaliesResponse = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var GetAnomalyMonitorsRequest;
(function (GetAnomalyMonitorsRequest) {
    /**
     * @internal
     */
    GetAnomalyMonitorsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomalyMonitorsRequest = exports.GetAnomalyMonitorsRequest || (exports.GetAnomalyMonitorsRequest = {}));
var GetAnomalySubscriptionsRequest;
(function (GetAnomalySubscriptionsRequest) {
    /**
     * @internal
     */
    GetAnomalySubscriptionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomalySubscriptionsRequest = exports.GetAnomalySubscriptionsRequest || (exports.GetAnomalySubscriptionsRequest = {}));
var GetAnomalySubscriptionsResponse;
(function (GetAnomalySubscriptionsResponse) {
    /**
     * @internal
     */
    GetAnomalySubscriptionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomalySubscriptionsResponse = exports.GetAnomalySubscriptionsResponse || (exports.GetAnomalySubscriptionsResponse = {}));
var BillExpirationException;
(function (BillExpirationException) {
    /**
     * @internal
     */
    BillExpirationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillExpirationException = exports.BillExpirationException || (exports.BillExpirationException = {}));
var DataUnavailableException;
(function (DataUnavailableException) {
    /**
     * @internal
     */
    DataUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DataUnavailableException = exports.DataUnavailableException || (exports.DataUnavailableException = {}));
var Granularity;
(function (Granularity) {
    Granularity["DAILY"] = "DAILY";
    Granularity["HOURLY"] = "HOURLY";
    Granularity["MONTHLY"] = "MONTHLY";
})(Granularity = exports.Granularity || (exports.Granularity = {}));
var GroupDefinitionType;
(function (GroupDefinitionType) {
    GroupDefinitionType["COST_CATEGORY"] = "COST_CATEGORY";
    GroupDefinitionType["DIMENSION"] = "DIMENSION";
    GroupDefinitionType["TAG"] = "TAG";
})(GroupDefinitionType = exports.GroupDefinitionType || (exports.GroupDefinitionType = {}));
var GroupDefinition;
(function (GroupDefinition) {
    /**
     * @internal
     */
    GroupDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GroupDefinition = exports.GroupDefinition || (exports.GroupDefinition = {}));
var DateInterval;
(function (DateInterval) {
    /**
     * @internal
     */
    DateInterval.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateInterval = exports.DateInterval || (exports.DateInterval = {}));
var DimensionValuesWithAttributes;
(function (DimensionValuesWithAttributes) {
    /**
     * @internal
     */
    DimensionValuesWithAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DimensionValuesWithAttributes = exports.DimensionValuesWithAttributes || (exports.DimensionValuesWithAttributes = {}));
var MetricValue;
(function (MetricValue) {
    /**
     * @internal
     */
    MetricValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricValue = exports.MetricValue || (exports.MetricValue = {}));
var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Group = exports.Group || (exports.Group = {}));
var ResultByTime;
(function (ResultByTime) {
    /**
     * @internal
     */
    ResultByTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResultByTime = exports.ResultByTime || (exports.ResultByTime = {}));
var GetCostAndUsageResponse;
(function (GetCostAndUsageResponse) {
    /**
     * @internal
     */
    GetCostAndUsageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostAndUsageResponse = exports.GetCostAndUsageResponse || (exports.GetCostAndUsageResponse = {}));
var RequestChangedException;
(function (RequestChangedException) {
    /**
     * @internal
     */
    RequestChangedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestChangedException = exports.RequestChangedException || (exports.RequestChangedException = {}));
var GetCostAndUsageWithResourcesResponse;
(function (GetCostAndUsageWithResourcesResponse) {
    /**
     * @internal
     */
    GetCostAndUsageWithResourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostAndUsageWithResourcesResponse = exports.GetCostAndUsageWithResourcesResponse || (exports.GetCostAndUsageWithResourcesResponse = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var SortDefinition;
(function (SortDefinition) {
    /**
     * @internal
     */
    SortDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SortDefinition = exports.SortDefinition || (exports.SortDefinition = {}));
var GetCostCategoriesResponse;
(function (GetCostCategoriesResponse) {
    /**
     * @internal
     */
    GetCostCategoriesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostCategoriesResponse = exports.GetCostCategoriesResponse || (exports.GetCostCategoriesResponse = {}));
var Metric;
(function (Metric) {
    Metric["AMORTIZED_COST"] = "AMORTIZED_COST";
    Metric["BLENDED_COST"] = "BLENDED_COST";
    Metric["NET_AMORTIZED_COST"] = "NET_AMORTIZED_COST";
    Metric["NET_UNBLENDED_COST"] = "NET_UNBLENDED_COST";
    Metric["NORMALIZED_USAGE_AMOUNT"] = "NORMALIZED_USAGE_AMOUNT";
    Metric["UNBLENDED_COST"] = "UNBLENDED_COST";
    Metric["USAGE_QUANTITY"] = "USAGE_QUANTITY";
})(Metric = exports.Metric || (exports.Metric = {}));
var ForecastResult;
(function (ForecastResult) {
    /**
     * @internal
     */
    ForecastResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForecastResult = exports.ForecastResult || (exports.ForecastResult = {}));
var GetCostForecastResponse;
(function (GetCostForecastResponse) {
    /**
     * @internal
     */
    GetCostForecastResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostForecastResponse = exports.GetCostForecastResponse || (exports.GetCostForecastResponse = {}));
var Context;
(function (Context) {
    Context["COST_AND_USAGE"] = "COST_AND_USAGE";
    Context["RESERVATIONS"] = "RESERVATIONS";
    Context["SAVINGS_PLANS"] = "SAVINGS_PLANS";
})(Context = exports.Context || (exports.Context = {}));
var GetDimensionValuesResponse;
(function (GetDimensionValuesResponse) {
    /**
     * @internal
     */
    GetDimensionValuesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDimensionValuesResponse = exports.GetDimensionValuesResponse || (exports.GetDimensionValuesResponse = {}));
var CoverageCost;
(function (CoverageCost) {
    /**
     * @internal
     */
    CoverageCost.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoverageCost = exports.CoverageCost || (exports.CoverageCost = {}));
var CoverageHours;
(function (CoverageHours) {
    /**
     * @internal
     */
    CoverageHours.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoverageHours = exports.CoverageHours || (exports.CoverageHours = {}));
var CoverageNormalizedUnits;
(function (CoverageNormalizedUnits) {
    /**
     * @internal
     */
    CoverageNormalizedUnits.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoverageNormalizedUnits = exports.CoverageNormalizedUnits || (exports.CoverageNormalizedUnits = {}));
var Coverage;
(function (Coverage) {
    /**
     * @internal
     */
    Coverage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Coverage = exports.Coverage || (exports.Coverage = {}));
var ReservationCoverageGroup;
(function (ReservationCoverageGroup) {
    /**
     * @internal
     */
    ReservationCoverageGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationCoverageGroup = exports.ReservationCoverageGroup || (exports.ReservationCoverageGroup = {}));
var CoverageByTime;
(function (CoverageByTime) {
    /**
     * @internal
     */
    CoverageByTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CoverageByTime = exports.CoverageByTime || (exports.CoverageByTime = {}));
var GetReservationCoverageResponse;
(function (GetReservationCoverageResponse) {
    /**
     * @internal
     */
    GetReservationCoverageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationCoverageResponse = exports.GetReservationCoverageResponse || (exports.GetReservationCoverageResponse = {}));
var LookbackPeriodInDays;
(function (LookbackPeriodInDays) {
    LookbackPeriodInDays["SEVEN_DAYS"] = "SEVEN_DAYS";
    LookbackPeriodInDays["SIXTY_DAYS"] = "SIXTY_DAYS";
    LookbackPeriodInDays["THIRTY_DAYS"] = "THIRTY_DAYS";
})(LookbackPeriodInDays = exports.LookbackPeriodInDays || (exports.LookbackPeriodInDays = {}));
var PaymentOption;
(function (PaymentOption) {
    PaymentOption["ALL_UPFRONT"] = "ALL_UPFRONT";
    PaymentOption["HEAVY_UTILIZATION"] = "HEAVY_UTILIZATION";
    PaymentOption["LIGHT_UTILIZATION"] = "LIGHT_UTILIZATION";
    PaymentOption["MEDIUM_UTILIZATION"] = "MEDIUM_UTILIZATION";
    PaymentOption["NO_UPFRONT"] = "NO_UPFRONT";
    PaymentOption["PARTIAL_UPFRONT"] = "PARTIAL_UPFRONT";
})(PaymentOption = exports.PaymentOption || (exports.PaymentOption = {}));
var OfferingClass;
(function (OfferingClass) {
    OfferingClass["CONVERTIBLE"] = "CONVERTIBLE";
    OfferingClass["STANDARD"] = "STANDARD";
})(OfferingClass = exports.OfferingClass || (exports.OfferingClass = {}));
var EC2Specification;
(function (EC2Specification) {
    /**
     * @internal
     */
    EC2Specification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2Specification = exports.EC2Specification || (exports.EC2Specification = {}));
var ServiceSpecification;
(function (ServiceSpecification) {
    /**
     * @internal
     */
    ServiceSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ServiceSpecification = exports.ServiceSpecification || (exports.ServiceSpecification = {}));
var TermInYears;
(function (TermInYears) {
    TermInYears["ONE_YEAR"] = "ONE_YEAR";
    TermInYears["THREE_YEARS"] = "THREE_YEARS";
})(TermInYears = exports.TermInYears || (exports.TermInYears = {}));
var ReservationPurchaseRecommendationMetadata;
(function (ReservationPurchaseRecommendationMetadata) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPurchaseRecommendationMetadata = exports.ReservationPurchaseRecommendationMetadata || (exports.ReservationPurchaseRecommendationMetadata = {}));
var EC2InstanceDetails;
(function (EC2InstanceDetails) {
    /**
     * @internal
     */
    EC2InstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2InstanceDetails = exports.EC2InstanceDetails || (exports.EC2InstanceDetails = {}));
var ElastiCacheInstanceDetails;
(function (ElastiCacheInstanceDetails) {
    /**
     * @internal
     */
    ElastiCacheInstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ElastiCacheInstanceDetails = exports.ElastiCacheInstanceDetails || (exports.ElastiCacheInstanceDetails = {}));
var ESInstanceDetails;
(function (ESInstanceDetails) {
    /**
     * @internal
     */
    ESInstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ESInstanceDetails = exports.ESInstanceDetails || (exports.ESInstanceDetails = {}));
var RDSInstanceDetails;
(function (RDSInstanceDetails) {
    /**
     * @internal
     */
    RDSInstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RDSInstanceDetails = exports.RDSInstanceDetails || (exports.RDSInstanceDetails = {}));
var RedshiftInstanceDetails;
(function (RedshiftInstanceDetails) {
    /**
     * @internal
     */
    RedshiftInstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftInstanceDetails = exports.RedshiftInstanceDetails || (exports.RedshiftInstanceDetails = {}));
var InstanceDetails;
(function (InstanceDetails) {
    /**
     * @internal
     */
    InstanceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceDetails = exports.InstanceDetails || (exports.InstanceDetails = {}));
var ReservationPurchaseRecommendationDetail;
(function (ReservationPurchaseRecommendationDetail) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPurchaseRecommendationDetail = exports.ReservationPurchaseRecommendationDetail || (exports.ReservationPurchaseRecommendationDetail = {}));
var ReservationPurchaseRecommendationSummary;
(function (ReservationPurchaseRecommendationSummary) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPurchaseRecommendationSummary = exports.ReservationPurchaseRecommendationSummary || (exports.ReservationPurchaseRecommendationSummary = {}));
var ReservationPurchaseRecommendation;
(function (ReservationPurchaseRecommendation) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationPurchaseRecommendation = exports.ReservationPurchaseRecommendation || (exports.ReservationPurchaseRecommendation = {}));
var GetReservationPurchaseRecommendationResponse;
(function (GetReservationPurchaseRecommendationResponse) {
    /**
     * @internal
     */
    GetReservationPurchaseRecommendationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationPurchaseRecommendationResponse = exports.GetReservationPurchaseRecommendationResponse || (exports.GetReservationPurchaseRecommendationResponse = {}));
var ReservationAggregates;
(function (ReservationAggregates) {
    /**
     * @internal
     */
    ReservationAggregates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationAggregates = exports.ReservationAggregates || (exports.ReservationAggregates = {}));
var ReservationUtilizationGroup;
(function (ReservationUtilizationGroup) {
    /**
     * @internal
     */
    ReservationUtilizationGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReservationUtilizationGroup = exports.ReservationUtilizationGroup || (exports.ReservationUtilizationGroup = {}));
var UtilizationByTime;
(function (UtilizationByTime) {
    /**
     * @internal
     */
    UtilizationByTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UtilizationByTime = exports.UtilizationByTime || (exports.UtilizationByTime = {}));
var GetReservationUtilizationResponse;
(function (GetReservationUtilizationResponse) {
    /**
     * @internal
     */
    GetReservationUtilizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationUtilizationResponse = exports.GetReservationUtilizationResponse || (exports.GetReservationUtilizationResponse = {}));
var RecommendationTarget;
(function (RecommendationTarget) {
    RecommendationTarget["CROSS_INSTANCE_FAMILY"] = "CROSS_INSTANCE_FAMILY";
    RecommendationTarget["SAME_INSTANCE_FAMILY"] = "SAME_INSTANCE_FAMILY";
})(RecommendationTarget = exports.RecommendationTarget || (exports.RecommendationTarget = {}));
var RightsizingRecommendationConfiguration;
(function (RightsizingRecommendationConfiguration) {
    /**
     * @internal
     */
    RightsizingRecommendationConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RightsizingRecommendationConfiguration = exports.RightsizingRecommendationConfiguration || (exports.RightsizingRecommendationConfiguration = {}));
var RightsizingRecommendationMetadata;
(function (RightsizingRecommendationMetadata) {
    /**
     * @internal
     */
    RightsizingRecommendationMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RightsizingRecommendationMetadata = exports.RightsizingRecommendationMetadata || (exports.RightsizingRecommendationMetadata = {}));
var EC2ResourceDetails;
(function (EC2ResourceDetails) {
    /**
     * @internal
     */
    EC2ResourceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2ResourceDetails = exports.EC2ResourceDetails || (exports.EC2ResourceDetails = {}));
var ResourceDetails;
(function (ResourceDetails) {
    /**
     * @internal
     */
    ResourceDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceDetails = exports.ResourceDetails || (exports.ResourceDetails = {}));
var DiskResourceUtilization;
(function (DiskResourceUtilization) {
    /**
     * @internal
     */
    DiskResourceUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DiskResourceUtilization = exports.DiskResourceUtilization || (exports.DiskResourceUtilization = {}));
var EBSResourceUtilization;
(function (EBSResourceUtilization) {
    /**
     * @internal
     */
    EBSResourceUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EBSResourceUtilization = exports.EBSResourceUtilization || (exports.EBSResourceUtilization = {}));
var NetworkResourceUtilization;
(function (NetworkResourceUtilization) {
    /**
     * @internal
     */
    NetworkResourceUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkResourceUtilization = exports.NetworkResourceUtilization || (exports.NetworkResourceUtilization = {}));
var EC2ResourceUtilization;
(function (EC2ResourceUtilization) {
    /**
     * @internal
     */
    EC2ResourceUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EC2ResourceUtilization = exports.EC2ResourceUtilization || (exports.EC2ResourceUtilization = {}));
var ResourceUtilization;
(function (ResourceUtilization) {
    /**
     * @internal
     */
    ResourceUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceUtilization = exports.ResourceUtilization || (exports.ResourceUtilization = {}));
var CurrentInstance;
(function (CurrentInstance) {
    /**
     * @internal
     */
    CurrentInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CurrentInstance = exports.CurrentInstance || (exports.CurrentInstance = {}));
var FindingReasonCode;
(function (FindingReasonCode) {
    FindingReasonCode["CPU_OVER_PROVISIONED"] = "CPU_OVER_PROVISIONED";
    FindingReasonCode["CPU_UNDER_PROVISIONED"] = "CPU_UNDER_PROVISIONED";
    FindingReasonCode["DISK_IOPS_OVER_PROVISIONED"] = "DISK_IOPS_OVER_PROVISIONED";
    FindingReasonCode["DISK_IOPS_UNDER_PROVISIONED"] = "DISK_IOPS_UNDER_PROVISIONED";
    FindingReasonCode["DISK_THROUGHPUT_OVER_PROVISIONED"] = "DISK_THROUGHPUT_OVER_PROVISIONED";
    FindingReasonCode["DISK_THROUGHPUT_UNDER_PROVISIONED"] = "DISK_THROUGHPUT_UNDER_PROVISIONED";
    FindingReasonCode["EBS_IOPS_OVER_PROVISIONED"] = "EBS_IOPS_OVER_PROVISIONED";
    FindingReasonCode["EBS_IOPS_UNDER_PROVISIONED"] = "EBS_IOPS_UNDER_PROVISIONED";
    FindingReasonCode["EBS_THROUGHPUT_OVER_PROVISIONED"] = "EBS_THROUGHPUT_OVER_PROVISIONED";
    FindingReasonCode["EBS_THROUGHPUT_UNDER_PROVISIONED"] = "EBS_THROUGHPUT_UNDER_PROVISIONED";
    FindingReasonCode["MEMORY_OVER_PROVISIONED"] = "MEMORY_OVER_PROVISIONED";
    FindingReasonCode["MEMORY_UNDER_PROVISIONED"] = "MEMORY_UNDER_PROVISIONED";
    FindingReasonCode["NETWORK_BANDWIDTH_OVER_PROVISIONED"] = "NETWORK_BANDWIDTH_OVER_PROVISIONED";
    FindingReasonCode["NETWORK_BANDWIDTH_UNDER_PROVISIONED"] = "NETWORK_BANDWIDTH_UNDER_PROVISIONED";
    FindingReasonCode["NETWORK_PPS_OVER_PROVISIONED"] = "NETWORK_PPS_OVER_PROVISIONED";
    FindingReasonCode["NETWORK_PPS_UNDER_PROVISIONED"] = "NETWORK_PPS_UNDER_PROVISIONED";
})(FindingReasonCode = exports.FindingReasonCode || (exports.FindingReasonCode = {}));
var PlatformDifference;
(function (PlatformDifference) {
    PlatformDifference["HYPERVISOR"] = "HYPERVISOR";
    PlatformDifference["INSTANCE_STORE_AVAILABILITY"] = "INSTANCE_STORE_AVAILABILITY";
    PlatformDifference["NETWORK_INTERFACE"] = "NETWORK_INTERFACE";
    PlatformDifference["STORAGE_INTERFACE"] = "STORAGE_INTERFACE";
    PlatformDifference["VIRTUALIZATION_TYPE"] = "VIRTUALIZATION_TYPE";
})(PlatformDifference = exports.PlatformDifference || (exports.PlatformDifference = {}));
var TargetInstance;
(function (TargetInstance) {
    /**
     * @internal
     */
    TargetInstance.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TargetInstance = exports.TargetInstance || (exports.TargetInstance = {}));
var ModifyRecommendationDetail;
(function (ModifyRecommendationDetail) {
    /**
     * @internal
     */
    ModifyRecommendationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ModifyRecommendationDetail = exports.ModifyRecommendationDetail || (exports.ModifyRecommendationDetail = {}));
var RightsizingType;
(function (RightsizingType) {
    RightsizingType["MODIFY"] = "MODIFY";
    RightsizingType["TERMINATE"] = "TERMINATE";
})(RightsizingType = exports.RightsizingType || (exports.RightsizingType = {}));
var TerminateRecommendationDetail;
(function (TerminateRecommendationDetail) {
    /**
     * @internal
     */
    TerminateRecommendationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TerminateRecommendationDetail = exports.TerminateRecommendationDetail || (exports.TerminateRecommendationDetail = {}));
var RightsizingRecommendation;
(function (RightsizingRecommendation) {
    /**
     * @internal
     */
    RightsizingRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RightsizingRecommendation = exports.RightsizingRecommendation || (exports.RightsizingRecommendation = {}));
var RightsizingRecommendationSummary;
(function (RightsizingRecommendationSummary) {
    /**
     * @internal
     */
    RightsizingRecommendationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RightsizingRecommendationSummary = exports.RightsizingRecommendationSummary || (exports.RightsizingRecommendationSummary = {}));
var GetRightsizingRecommendationResponse;
(function (GetRightsizingRecommendationResponse) {
    /**
     * @internal
     */
    GetRightsizingRecommendationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRightsizingRecommendationResponse = exports.GetRightsizingRecommendationResponse || (exports.GetRightsizingRecommendationResponse = {}));
var SavingsPlansCoverageData;
(function (SavingsPlansCoverageData) {
    /**
     * @internal
     */
    SavingsPlansCoverageData.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansCoverageData = exports.SavingsPlansCoverageData || (exports.SavingsPlansCoverageData = {}));
var SavingsPlansCoverage;
(function (SavingsPlansCoverage) {
    /**
     * @internal
     */
    SavingsPlansCoverage.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansCoverage = exports.SavingsPlansCoverage || (exports.SavingsPlansCoverage = {}));
var GetSavingsPlansCoverageResponse;
(function (GetSavingsPlansCoverageResponse) {
    /**
     * @internal
     */
    GetSavingsPlansCoverageResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansCoverageResponse = exports.GetSavingsPlansCoverageResponse || (exports.GetSavingsPlansCoverageResponse = {}));
var SupportedSavingsPlansType;
(function (SupportedSavingsPlansType) {
    SupportedSavingsPlansType["COMPUTE_SP"] = "COMPUTE_SP";
    SupportedSavingsPlansType["EC2_INSTANCE_SP"] = "EC2_INSTANCE_SP";
    SupportedSavingsPlansType["SAGEMAKER_SP"] = "SAGEMAKER_SP";
})(SupportedSavingsPlansType = exports.SupportedSavingsPlansType || (exports.SupportedSavingsPlansType = {}));
var SavingsPlansPurchaseRecommendationMetadata;
(function (SavingsPlansPurchaseRecommendationMetadata) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansPurchaseRecommendationMetadata = exports.SavingsPlansPurchaseRecommendationMetadata || (exports.SavingsPlansPurchaseRecommendationMetadata = {}));
var SavingsPlansDetails;
(function (SavingsPlansDetails) {
    /**
     * @internal
     */
    SavingsPlansDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansDetails = exports.SavingsPlansDetails || (exports.SavingsPlansDetails = {}));
var SavingsPlansPurchaseRecommendationDetail;
(function (SavingsPlansPurchaseRecommendationDetail) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansPurchaseRecommendationDetail = exports.SavingsPlansPurchaseRecommendationDetail || (exports.SavingsPlansPurchaseRecommendationDetail = {}));
var SavingsPlansPurchaseRecommendationSummary;
(function (SavingsPlansPurchaseRecommendationSummary) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansPurchaseRecommendationSummary = exports.SavingsPlansPurchaseRecommendationSummary || (exports.SavingsPlansPurchaseRecommendationSummary = {}));
var SavingsPlansPurchaseRecommendation;
(function (SavingsPlansPurchaseRecommendation) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansPurchaseRecommendation = exports.SavingsPlansPurchaseRecommendation || (exports.SavingsPlansPurchaseRecommendation = {}));
var GetSavingsPlansPurchaseRecommendationResponse;
(function (GetSavingsPlansPurchaseRecommendationResponse) {
    /**
     * @internal
     */
    GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansPurchaseRecommendationResponse = exports.GetSavingsPlansPurchaseRecommendationResponse || (exports.GetSavingsPlansPurchaseRecommendationResponse = {}));
var SavingsPlansAmortizedCommitment;
(function (SavingsPlansAmortizedCommitment) {
    /**
     * @internal
     */
    SavingsPlansAmortizedCommitment.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansAmortizedCommitment = exports.SavingsPlansAmortizedCommitment || (exports.SavingsPlansAmortizedCommitment = {}));
var SavingsPlansSavings;
(function (SavingsPlansSavings) {
    /**
     * @internal
     */
    SavingsPlansSavings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansSavings = exports.SavingsPlansSavings || (exports.SavingsPlansSavings = {}));
var SavingsPlansUtilization;
(function (SavingsPlansUtilization) {
    /**
     * @internal
     */
    SavingsPlansUtilization.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansUtilization = exports.SavingsPlansUtilization || (exports.SavingsPlansUtilization = {}));
var SavingsPlansUtilizationByTime;
(function (SavingsPlansUtilizationByTime) {
    /**
     * @internal
     */
    SavingsPlansUtilizationByTime.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansUtilizationByTime = exports.SavingsPlansUtilizationByTime || (exports.SavingsPlansUtilizationByTime = {}));
var SavingsPlansUtilizationAggregates;
(function (SavingsPlansUtilizationAggregates) {
    /**
     * @internal
     */
    SavingsPlansUtilizationAggregates.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansUtilizationAggregates = exports.SavingsPlansUtilizationAggregates || (exports.SavingsPlansUtilizationAggregates = {}));
var GetSavingsPlansUtilizationResponse;
(function (GetSavingsPlansUtilizationResponse) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansUtilizationResponse = exports.GetSavingsPlansUtilizationResponse || (exports.GetSavingsPlansUtilizationResponse = {}));
var SavingsPlansDataType;
(function (SavingsPlansDataType) {
    SavingsPlansDataType["AMORTIZED_COMMITMENT"] = "AMORTIZED_COMMITMENT";
    SavingsPlansDataType["ATTRIBUTES"] = "ATTRIBUTES";
    SavingsPlansDataType["SAVINGS"] = "SAVINGS";
    SavingsPlansDataType["UTILIZATION"] = "UTILIZATION";
})(SavingsPlansDataType = exports.SavingsPlansDataType || (exports.SavingsPlansDataType = {}));
var SavingsPlansUtilizationDetail;
(function (SavingsPlansUtilizationDetail) {
    /**
     * @internal
     */
    SavingsPlansUtilizationDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SavingsPlansUtilizationDetail = exports.SavingsPlansUtilizationDetail || (exports.SavingsPlansUtilizationDetail = {}));
var GetSavingsPlansUtilizationDetailsResponse;
(function (GetSavingsPlansUtilizationDetailsResponse) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansUtilizationDetailsResponse = exports.GetSavingsPlansUtilizationDetailsResponse || (exports.GetSavingsPlansUtilizationDetailsResponse = {}));
var GetTagsResponse;
(function (GetTagsResponse) {
    /**
     * @internal
     */
    GetTagsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsResponse = exports.GetTagsResponse || (exports.GetTagsResponse = {}));
var GetUsageForecastResponse;
(function (GetUsageForecastResponse) {
    /**
     * @internal
     */
    GetUsageForecastResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageForecastResponse = exports.GetUsageForecastResponse || (exports.GetUsageForecastResponse = {}));
var UnresolvableUsageUnitException;
(function (UnresolvableUsageUnitException) {
    /**
     * @internal
     */
    UnresolvableUsageUnitException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnresolvableUsageUnitException = exports.UnresolvableUsageUnitException || (exports.UnresolvableUsageUnitException = {}));
var ListCostCategoryDefinitionsRequest;
(function (ListCostCategoryDefinitionsRequest) {
    /**
     * @internal
     */
    ListCostCategoryDefinitionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCostCategoryDefinitionsRequest = exports.ListCostCategoryDefinitionsRequest || (exports.ListCostCategoryDefinitionsRequest = {}));
var CostCategoryReference;
(function (CostCategoryReference) {
    /**
     * @internal
     */
    CostCategoryReference.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategoryReference = exports.CostCategoryReference || (exports.CostCategoryReference = {}));
var ListCostCategoryDefinitionsResponse;
(function (ListCostCategoryDefinitionsResponse) {
    /**
     * @internal
     */
    ListCostCategoryDefinitionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListCostCategoryDefinitionsResponse = exports.ListCostCategoryDefinitionsResponse || (exports.ListCostCategoryDefinitionsResponse = {}));
var ProvideAnomalyFeedbackRequest;
(function (ProvideAnomalyFeedbackRequest) {
    /**
     * @internal
     */
    ProvideAnomalyFeedbackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvideAnomalyFeedbackRequest = exports.ProvideAnomalyFeedbackRequest || (exports.ProvideAnomalyFeedbackRequest = {}));
var ProvideAnomalyFeedbackResponse;
(function (ProvideAnomalyFeedbackResponse) {
    /**
     * @internal
     */
    ProvideAnomalyFeedbackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvideAnomalyFeedbackResponse = exports.ProvideAnomalyFeedbackResponse || (exports.ProvideAnomalyFeedbackResponse = {}));
var UpdateAnomalyMonitorRequest;
(function (UpdateAnomalyMonitorRequest) {
    /**
     * @internal
     */
    UpdateAnomalyMonitorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnomalyMonitorRequest = exports.UpdateAnomalyMonitorRequest || (exports.UpdateAnomalyMonitorRequest = {}));
var UpdateAnomalyMonitorResponse;
(function (UpdateAnomalyMonitorResponse) {
    /**
     * @internal
     */
    UpdateAnomalyMonitorResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnomalyMonitorResponse = exports.UpdateAnomalyMonitorResponse || (exports.UpdateAnomalyMonitorResponse = {}));
var UpdateAnomalySubscriptionRequest;
(function (UpdateAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    UpdateAnomalySubscriptionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnomalySubscriptionRequest = exports.UpdateAnomalySubscriptionRequest || (exports.UpdateAnomalySubscriptionRequest = {}));
var UpdateAnomalySubscriptionResponse;
(function (UpdateAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    UpdateAnomalySubscriptionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateAnomalySubscriptionResponse = exports.UpdateAnomalySubscriptionResponse || (exports.UpdateAnomalySubscriptionResponse = {}));
var UpdateCostCategoryDefinitionResponse;
(function (UpdateCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    UpdateCostCategoryDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCostCategoryDefinitionResponse = exports.UpdateCostCategoryDefinitionResponse || (exports.UpdateCostCategoryDefinitionResponse = {}));
var Expression;
(function (Expression) {
    /**
     * @internal
     */
    Expression.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Expression = exports.Expression || (exports.Expression = {}));
var AnomalyMonitor;
(function (AnomalyMonitor) {
    /**
     * @internal
     */
    AnomalyMonitor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AnomalyMonitor = exports.AnomalyMonitor || (exports.AnomalyMonitor = {}));
var CostCategoryRule;
(function (CostCategoryRule) {
    /**
     * @internal
     */
    CostCategoryRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategoryRule = exports.CostCategoryRule || (exports.CostCategoryRule = {}));
var GetCostAndUsageRequest;
(function (GetCostAndUsageRequest) {
    /**
     * @internal
     */
    GetCostAndUsageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostAndUsageRequest = exports.GetCostAndUsageRequest || (exports.GetCostAndUsageRequest = {}));
var GetCostAndUsageWithResourcesRequest;
(function (GetCostAndUsageWithResourcesRequest) {
    /**
     * @internal
     */
    GetCostAndUsageWithResourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostAndUsageWithResourcesRequest = exports.GetCostAndUsageWithResourcesRequest || (exports.GetCostAndUsageWithResourcesRequest = {}));
var GetCostCategoriesRequest;
(function (GetCostCategoriesRequest) {
    /**
     * @internal
     */
    GetCostCategoriesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostCategoriesRequest = exports.GetCostCategoriesRequest || (exports.GetCostCategoriesRequest = {}));
var GetCostForecastRequest;
(function (GetCostForecastRequest) {
    /**
     * @internal
     */
    GetCostForecastRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCostForecastRequest = exports.GetCostForecastRequest || (exports.GetCostForecastRequest = {}));
var GetDimensionValuesRequest;
(function (GetDimensionValuesRequest) {
    /**
     * @internal
     */
    GetDimensionValuesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetDimensionValuesRequest = exports.GetDimensionValuesRequest || (exports.GetDimensionValuesRequest = {}));
var GetReservationCoverageRequest;
(function (GetReservationCoverageRequest) {
    /**
     * @internal
     */
    GetReservationCoverageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationCoverageRequest = exports.GetReservationCoverageRequest || (exports.GetReservationCoverageRequest = {}));
var GetReservationPurchaseRecommendationRequest;
(function (GetReservationPurchaseRecommendationRequest) {
    /**
     * @internal
     */
    GetReservationPurchaseRecommendationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationPurchaseRecommendationRequest = exports.GetReservationPurchaseRecommendationRequest || (exports.GetReservationPurchaseRecommendationRequest = {}));
var GetReservationUtilizationRequest;
(function (GetReservationUtilizationRequest) {
    /**
     * @internal
     */
    GetReservationUtilizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetReservationUtilizationRequest = exports.GetReservationUtilizationRequest || (exports.GetReservationUtilizationRequest = {}));
var GetRightsizingRecommendationRequest;
(function (GetRightsizingRecommendationRequest) {
    /**
     * @internal
     */
    GetRightsizingRecommendationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRightsizingRecommendationRequest = exports.GetRightsizingRecommendationRequest || (exports.GetRightsizingRecommendationRequest = {}));
var GetSavingsPlansCoverageRequest;
(function (GetSavingsPlansCoverageRequest) {
    /**
     * @internal
     */
    GetSavingsPlansCoverageRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansCoverageRequest = exports.GetSavingsPlansCoverageRequest || (exports.GetSavingsPlansCoverageRequest = {}));
var GetSavingsPlansPurchaseRecommendationRequest;
(function (GetSavingsPlansPurchaseRecommendationRequest) {
    /**
     * @internal
     */
    GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansPurchaseRecommendationRequest = exports.GetSavingsPlansPurchaseRecommendationRequest || (exports.GetSavingsPlansPurchaseRecommendationRequest = {}));
var GetSavingsPlansUtilizationDetailsRequest;
(function (GetSavingsPlansUtilizationDetailsRequest) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansUtilizationDetailsRequest = exports.GetSavingsPlansUtilizationDetailsRequest || (exports.GetSavingsPlansUtilizationDetailsRequest = {}));
var GetSavingsPlansUtilizationRequest;
(function (GetSavingsPlansUtilizationRequest) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSavingsPlansUtilizationRequest = exports.GetSavingsPlansUtilizationRequest || (exports.GetSavingsPlansUtilizationRequest = {}));
var GetTagsRequest;
(function (GetTagsRequest) {
    /**
     * @internal
     */
    GetTagsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetTagsRequest = exports.GetTagsRequest || (exports.GetTagsRequest = {}));
var GetUsageForecastRequest;
(function (GetUsageForecastRequest) {
    /**
     * @internal
     */
    GetUsageForecastRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetUsageForecastRequest = exports.GetUsageForecastRequest || (exports.GetUsageForecastRequest = {}));
var CreateAnomalyMonitorRequest;
(function (CreateAnomalyMonitorRequest) {
    /**
     * @internal
     */
    CreateAnomalyMonitorRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateAnomalyMonitorRequest = exports.CreateAnomalyMonitorRequest || (exports.CreateAnomalyMonitorRequest = {}));
var CostCategory;
(function (CostCategory) {
    /**
     * @internal
     */
    CostCategory.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CostCategory = exports.CostCategory || (exports.CostCategory = {}));
var CreateCostCategoryDefinitionRequest;
(function (CreateCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    CreateCostCategoryDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCostCategoryDefinitionRequest = exports.CreateCostCategoryDefinitionRequest || (exports.CreateCostCategoryDefinitionRequest = {}));
var GetAnomalyMonitorsResponse;
(function (GetAnomalyMonitorsResponse) {
    /**
     * @internal
     */
    GetAnomalyMonitorsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetAnomalyMonitorsResponse = exports.GetAnomalyMonitorsResponse || (exports.GetAnomalyMonitorsResponse = {}));
var UpdateCostCategoryDefinitionRequest;
(function (UpdateCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    UpdateCostCategoryDefinitionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateCostCategoryDefinitionRequest = exports.UpdateCostCategoryDefinitionRequest || (exports.UpdateCostCategoryDefinitionRequest = {}));
var DescribeCostCategoryDefinitionResponse;
(function (DescribeCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    DescribeCostCategoryDefinitionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeCostCategoryDefinitionResponse = exports.DescribeCostCategoryDefinitionResponse || (exports.DescribeCostCategoryDefinitionResponse = {}));
//# sourceMappingURL=models_0.js.map