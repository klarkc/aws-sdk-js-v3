import { __assign } from "tslib";
export var AccountScope;
(function (AccountScope) {
    AccountScope["LINKED"] = "LINKED";
    AccountScope["PAYER"] = "PAYER";
})(AccountScope || (AccountScope = {}));
export var AnomalyScore;
(function (AnomalyScore) {
    /**
     * @internal
     */
    AnomalyScore.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyScore || (AnomalyScore = {}));
export var AnomalyFeedbackType;
(function (AnomalyFeedbackType) {
    AnomalyFeedbackType["NO"] = "NO";
    AnomalyFeedbackType["PLANNED_ACTIVITY"] = "PLANNED_ACTIVITY";
    AnomalyFeedbackType["YES"] = "YES";
})(AnomalyFeedbackType || (AnomalyFeedbackType = {}));
export var Impact;
(function (Impact) {
    /**
     * @internal
     */
    Impact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Impact || (Impact = {}));
export var RootCause;
(function (RootCause) {
    /**
     * @internal
     */
    RootCause.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RootCause || (RootCause = {}));
export var Anomaly;
(function (Anomaly) {
    /**
     * @internal
     */
    Anomaly.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Anomaly || (Anomaly = {}));
export var AnomalyDateInterval;
(function (AnomalyDateInterval) {
    /**
     * @internal
     */
    AnomalyDateInterval.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyDateInterval || (AnomalyDateInterval = {}));
export var MonitorDimension;
(function (MonitorDimension) {
    MonitorDimension["SERVICE"] = "SERVICE";
})(MonitorDimension || (MonitorDimension = {}));
export var MatchOption;
(function (MatchOption) {
    MatchOption["ABSENT"] = "ABSENT";
    MatchOption["CASE_INSENSITIVE"] = "CASE_INSENSITIVE";
    MatchOption["CASE_SENSITIVE"] = "CASE_SENSITIVE";
    MatchOption["CONTAINS"] = "CONTAINS";
    MatchOption["ENDS_WITH"] = "ENDS_WITH";
    MatchOption["EQUALS"] = "EQUALS";
    MatchOption["STARTS_WITH"] = "STARTS_WITH";
})(MatchOption || (MatchOption = {}));
export var CostCategoryValues;
(function (CostCategoryValues) {
    /**
     * @internal
     */
    CostCategoryValues.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategoryValues || (CostCategoryValues = {}));
export var Dimension;
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
})(Dimension || (Dimension = {}));
export var DimensionValues;
(function (DimensionValues) {
    /**
     * @internal
     */
    DimensionValues.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DimensionValues || (DimensionValues = {}));
export var TagValues;
(function (TagValues) {
    /**
     * @internal
     */
    TagValues.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagValues || (TagValues = {}));
export var MonitorType;
(function (MonitorType) {
    MonitorType["CUSTOM"] = "CUSTOM";
    MonitorType["DIMENSIONAL"] = "DIMENSIONAL";
})(MonitorType || (MonitorType = {}));
export var AnomalySubscriptionFrequency;
(function (AnomalySubscriptionFrequency) {
    AnomalySubscriptionFrequency["DAILY"] = "DAILY";
    AnomalySubscriptionFrequency["IMMEDIATE"] = "IMMEDIATE";
    AnomalySubscriptionFrequency["WEEKLY"] = "WEEKLY";
})(AnomalySubscriptionFrequency || (AnomalySubscriptionFrequency = {}));
export var SubscriberStatus;
(function (SubscriberStatus) {
    SubscriberStatus["CONFIRMED"] = "CONFIRMED";
    SubscriberStatus["DECLINED"] = "DECLINED";
})(SubscriberStatus || (SubscriberStatus = {}));
export var SubscriberType;
(function (SubscriberType) {
    SubscriberType["EMAIL"] = "EMAIL";
    SubscriberType["SNS"] = "SNS";
})(SubscriberType || (SubscriberType = {}));
export var Subscriber;
(function (Subscriber) {
    /**
     * @internal
     */
    Subscriber.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Subscriber || (Subscriber = {}));
export var AnomalySubscription;
(function (AnomalySubscription) {
    /**
     * @internal
     */
    AnomalySubscription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalySubscription || (AnomalySubscription = {}));
export var CreateAnomalyMonitorResponse;
(function (CreateAnomalyMonitorResponse) {
    /**
     * @internal
     */
    CreateAnomalyMonitorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalyMonitorResponse || (CreateAnomalyMonitorResponse = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var CreateAnomalySubscriptionRequest;
(function (CreateAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    CreateAnomalySubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalySubscriptionRequest || (CreateAnomalySubscriptionRequest = {}));
export var CreateAnomalySubscriptionResponse;
(function (CreateAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    CreateAnomalySubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalySubscriptionResponse || (CreateAnomalySubscriptionResponse = {}));
export var UnknownMonitorException;
(function (UnknownMonitorException) {
    /**
     * @internal
     */
    UnknownMonitorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnknownMonitorException || (UnknownMonitorException = {}));
export var CostCategoryInheritedValueDimensionName;
(function (CostCategoryInheritedValueDimensionName) {
    CostCategoryInheritedValueDimensionName["LINKED_ACCOUNT_NAME"] = "LINKED_ACCOUNT_NAME";
    CostCategoryInheritedValueDimensionName["TAG"] = "TAG";
})(CostCategoryInheritedValueDimensionName || (CostCategoryInheritedValueDimensionName = {}));
export var CostCategoryInheritedValueDimension;
(function (CostCategoryInheritedValueDimension) {
    /**
     * @internal
     */
    CostCategoryInheritedValueDimension.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategoryInheritedValueDimension || (CostCategoryInheritedValueDimension = {}));
export var CostCategoryRuleType;
(function (CostCategoryRuleType) {
    CostCategoryRuleType["INHERITED_VALUE"] = "INHERITED_VALUE";
    CostCategoryRuleType["REGULAR"] = "REGULAR";
})(CostCategoryRuleType || (CostCategoryRuleType = {}));
export var CostCategoryRuleVersion;
(function (CostCategoryRuleVersion) {
    CostCategoryRuleVersion["CostCategoryExpressionV1"] = "CostCategoryExpression.v1";
})(CostCategoryRuleVersion || (CostCategoryRuleVersion = {}));
export var CreateCostCategoryDefinitionResponse;
(function (CreateCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    CreateCostCategoryDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCostCategoryDefinitionResponse || (CreateCostCategoryDefinitionResponse = {}));
export var ServiceQuotaExceededException;
(function (ServiceQuotaExceededException) {
    /**
     * @internal
     */
    ServiceQuotaExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceQuotaExceededException || (ServiceQuotaExceededException = {}));
export var DeleteAnomalyMonitorRequest;
(function (DeleteAnomalyMonitorRequest) {
    /**
     * @internal
     */
    DeleteAnomalyMonitorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalyMonitorRequest || (DeleteAnomalyMonitorRequest = {}));
export var DeleteAnomalyMonitorResponse;
(function (DeleteAnomalyMonitorResponse) {
    /**
     * @internal
     */
    DeleteAnomalyMonitorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalyMonitorResponse || (DeleteAnomalyMonitorResponse = {}));
export var DeleteAnomalySubscriptionRequest;
(function (DeleteAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    DeleteAnomalySubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalySubscriptionRequest || (DeleteAnomalySubscriptionRequest = {}));
export var DeleteAnomalySubscriptionResponse;
(function (DeleteAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    DeleteAnomalySubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteAnomalySubscriptionResponse || (DeleteAnomalySubscriptionResponse = {}));
export var UnknownSubscriptionException;
(function (UnknownSubscriptionException) {
    /**
     * @internal
     */
    UnknownSubscriptionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnknownSubscriptionException || (UnknownSubscriptionException = {}));
export var DeleteCostCategoryDefinitionRequest;
(function (DeleteCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    DeleteCostCategoryDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCostCategoryDefinitionRequest || (DeleteCostCategoryDefinitionRequest = {}));
export var DeleteCostCategoryDefinitionResponse;
(function (DeleteCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    DeleteCostCategoryDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCostCategoryDefinitionResponse || (DeleteCostCategoryDefinitionResponse = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var DescribeCostCategoryDefinitionRequest;
(function (DescribeCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    DescribeCostCategoryDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCostCategoryDefinitionRequest || (DescribeCostCategoryDefinitionRequest = {}));
export var CostCategoryStatusComponent;
(function (CostCategoryStatusComponent) {
    CostCategoryStatusComponent["COST_EXPLORER"] = "COST_EXPLORER";
})(CostCategoryStatusComponent || (CostCategoryStatusComponent = {}));
export var CostCategoryStatus;
(function (CostCategoryStatus) {
    CostCategoryStatus["APPLIED"] = "APPLIED";
    CostCategoryStatus["PROCESSING"] = "PROCESSING";
})(CostCategoryStatus || (CostCategoryStatus = {}));
export var CostCategoryProcessingStatus;
(function (CostCategoryProcessingStatus) {
    /**
     * @internal
     */
    CostCategoryProcessingStatus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategoryProcessingStatus || (CostCategoryProcessingStatus = {}));
export var NumericOperator;
(function (NumericOperator) {
    NumericOperator["BETWEEN"] = "BETWEEN";
    NumericOperator["EQUAL"] = "EQUAL";
    NumericOperator["GREATER_THAN"] = "GREATER_THAN";
    NumericOperator["GREATER_THAN_OR_EQUAL"] = "GREATER_THAN_OR_EQUAL";
    NumericOperator["LESS_THAN"] = "LESS_THAN";
    NumericOperator["LESS_THAN_OR_EQUAL"] = "LESS_THAN_OR_EQUAL";
})(NumericOperator || (NumericOperator = {}));
export var TotalImpactFilter;
(function (TotalImpactFilter) {
    /**
     * @internal
     */
    TotalImpactFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TotalImpactFilter || (TotalImpactFilter = {}));
export var GetAnomaliesRequest;
(function (GetAnomaliesRequest) {
    /**
     * @internal
     */
    GetAnomaliesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomaliesRequest || (GetAnomaliesRequest = {}));
export var GetAnomaliesResponse;
(function (GetAnomaliesResponse) {
    /**
     * @internal
     */
    GetAnomaliesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomaliesResponse || (GetAnomaliesResponse = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var GetAnomalyMonitorsRequest;
(function (GetAnomalyMonitorsRequest) {
    /**
     * @internal
     */
    GetAnomalyMonitorsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalyMonitorsRequest || (GetAnomalyMonitorsRequest = {}));
export var GetAnomalySubscriptionsRequest;
(function (GetAnomalySubscriptionsRequest) {
    /**
     * @internal
     */
    GetAnomalySubscriptionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalySubscriptionsRequest || (GetAnomalySubscriptionsRequest = {}));
export var GetAnomalySubscriptionsResponse;
(function (GetAnomalySubscriptionsResponse) {
    /**
     * @internal
     */
    GetAnomalySubscriptionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalySubscriptionsResponse || (GetAnomalySubscriptionsResponse = {}));
export var BillExpirationException;
(function (BillExpirationException) {
    /**
     * @internal
     */
    BillExpirationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BillExpirationException || (BillExpirationException = {}));
export var DataUnavailableException;
(function (DataUnavailableException) {
    /**
     * @internal
     */
    DataUnavailableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DataUnavailableException || (DataUnavailableException = {}));
export var Granularity;
(function (Granularity) {
    Granularity["DAILY"] = "DAILY";
    Granularity["HOURLY"] = "HOURLY";
    Granularity["MONTHLY"] = "MONTHLY";
})(Granularity || (Granularity = {}));
export var GroupDefinitionType;
(function (GroupDefinitionType) {
    GroupDefinitionType["COST_CATEGORY"] = "COST_CATEGORY";
    GroupDefinitionType["DIMENSION"] = "DIMENSION";
    GroupDefinitionType["TAG"] = "TAG";
})(GroupDefinitionType || (GroupDefinitionType = {}));
export var GroupDefinition;
(function (GroupDefinition) {
    /**
     * @internal
     */
    GroupDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GroupDefinition || (GroupDefinition = {}));
export var DateInterval;
(function (DateInterval) {
    /**
     * @internal
     */
    DateInterval.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DateInterval || (DateInterval = {}));
export var DimensionValuesWithAttributes;
(function (DimensionValuesWithAttributes) {
    /**
     * @internal
     */
    DimensionValuesWithAttributes.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DimensionValuesWithAttributes || (DimensionValuesWithAttributes = {}));
export var MetricValue;
(function (MetricValue) {
    /**
     * @internal
     */
    MetricValue.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricValue || (MetricValue = {}));
export var Group;
(function (Group) {
    /**
     * @internal
     */
    Group.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Group || (Group = {}));
export var ResultByTime;
(function (ResultByTime) {
    /**
     * @internal
     */
    ResultByTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResultByTime || (ResultByTime = {}));
export var GetCostAndUsageResponse;
(function (GetCostAndUsageResponse) {
    /**
     * @internal
     */
    GetCostAndUsageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostAndUsageResponse || (GetCostAndUsageResponse = {}));
export var RequestChangedException;
(function (RequestChangedException) {
    /**
     * @internal
     */
    RequestChangedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestChangedException || (RequestChangedException = {}));
export var GetCostAndUsageWithResourcesResponse;
(function (GetCostAndUsageWithResourcesResponse) {
    /**
     * @internal
     */
    GetCostAndUsageWithResourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostAndUsageWithResourcesResponse || (GetCostAndUsageWithResourcesResponse = {}));
export var SortOrder;
(function (SortOrder) {
    SortOrder["ASCENDING"] = "ASCENDING";
    SortOrder["DESCENDING"] = "DESCENDING";
})(SortOrder || (SortOrder = {}));
export var SortDefinition;
(function (SortDefinition) {
    /**
     * @internal
     */
    SortDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SortDefinition || (SortDefinition = {}));
export var GetCostCategoriesResponse;
(function (GetCostCategoriesResponse) {
    /**
     * @internal
     */
    GetCostCategoriesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostCategoriesResponse || (GetCostCategoriesResponse = {}));
export var Metric;
(function (Metric) {
    Metric["AMORTIZED_COST"] = "AMORTIZED_COST";
    Metric["BLENDED_COST"] = "BLENDED_COST";
    Metric["NET_AMORTIZED_COST"] = "NET_AMORTIZED_COST";
    Metric["NET_UNBLENDED_COST"] = "NET_UNBLENDED_COST";
    Metric["NORMALIZED_USAGE_AMOUNT"] = "NORMALIZED_USAGE_AMOUNT";
    Metric["UNBLENDED_COST"] = "UNBLENDED_COST";
    Metric["USAGE_QUANTITY"] = "USAGE_QUANTITY";
})(Metric || (Metric = {}));
export var ForecastResult;
(function (ForecastResult) {
    /**
     * @internal
     */
    ForecastResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForecastResult || (ForecastResult = {}));
export var GetCostForecastResponse;
(function (GetCostForecastResponse) {
    /**
     * @internal
     */
    GetCostForecastResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostForecastResponse || (GetCostForecastResponse = {}));
export var Context;
(function (Context) {
    Context["COST_AND_USAGE"] = "COST_AND_USAGE";
    Context["RESERVATIONS"] = "RESERVATIONS";
    Context["SAVINGS_PLANS"] = "SAVINGS_PLANS";
})(Context || (Context = {}));
export var GetDimensionValuesResponse;
(function (GetDimensionValuesResponse) {
    /**
     * @internal
     */
    GetDimensionValuesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDimensionValuesResponse || (GetDimensionValuesResponse = {}));
export var CoverageCost;
(function (CoverageCost) {
    /**
     * @internal
     */
    CoverageCost.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CoverageCost || (CoverageCost = {}));
export var CoverageHours;
(function (CoverageHours) {
    /**
     * @internal
     */
    CoverageHours.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CoverageHours || (CoverageHours = {}));
export var CoverageNormalizedUnits;
(function (CoverageNormalizedUnits) {
    /**
     * @internal
     */
    CoverageNormalizedUnits.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CoverageNormalizedUnits || (CoverageNormalizedUnits = {}));
export var Coverage;
(function (Coverage) {
    /**
     * @internal
     */
    Coverage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Coverage || (Coverage = {}));
export var ReservationCoverageGroup;
(function (ReservationCoverageGroup) {
    /**
     * @internal
     */
    ReservationCoverageGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationCoverageGroup || (ReservationCoverageGroup = {}));
export var CoverageByTime;
(function (CoverageByTime) {
    /**
     * @internal
     */
    CoverageByTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CoverageByTime || (CoverageByTime = {}));
export var GetReservationCoverageResponse;
(function (GetReservationCoverageResponse) {
    /**
     * @internal
     */
    GetReservationCoverageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationCoverageResponse || (GetReservationCoverageResponse = {}));
export var LookbackPeriodInDays;
(function (LookbackPeriodInDays) {
    LookbackPeriodInDays["SEVEN_DAYS"] = "SEVEN_DAYS";
    LookbackPeriodInDays["SIXTY_DAYS"] = "SIXTY_DAYS";
    LookbackPeriodInDays["THIRTY_DAYS"] = "THIRTY_DAYS";
})(LookbackPeriodInDays || (LookbackPeriodInDays = {}));
export var PaymentOption;
(function (PaymentOption) {
    PaymentOption["ALL_UPFRONT"] = "ALL_UPFRONT";
    PaymentOption["HEAVY_UTILIZATION"] = "HEAVY_UTILIZATION";
    PaymentOption["LIGHT_UTILIZATION"] = "LIGHT_UTILIZATION";
    PaymentOption["MEDIUM_UTILIZATION"] = "MEDIUM_UTILIZATION";
    PaymentOption["NO_UPFRONT"] = "NO_UPFRONT";
    PaymentOption["PARTIAL_UPFRONT"] = "PARTIAL_UPFRONT";
})(PaymentOption || (PaymentOption = {}));
export var OfferingClass;
(function (OfferingClass) {
    OfferingClass["CONVERTIBLE"] = "CONVERTIBLE";
    OfferingClass["STANDARD"] = "STANDARD";
})(OfferingClass || (OfferingClass = {}));
export var EC2Specification;
(function (EC2Specification) {
    /**
     * @internal
     */
    EC2Specification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2Specification || (EC2Specification = {}));
export var ServiceSpecification;
(function (ServiceSpecification) {
    /**
     * @internal
     */
    ServiceSpecification.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ServiceSpecification || (ServiceSpecification = {}));
export var TermInYears;
(function (TermInYears) {
    TermInYears["ONE_YEAR"] = "ONE_YEAR";
    TermInYears["THREE_YEARS"] = "THREE_YEARS";
})(TermInYears || (TermInYears = {}));
export var ReservationPurchaseRecommendationMetadata;
(function (ReservationPurchaseRecommendationMetadata) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPurchaseRecommendationMetadata || (ReservationPurchaseRecommendationMetadata = {}));
export var EC2InstanceDetails;
(function (EC2InstanceDetails) {
    /**
     * @internal
     */
    EC2InstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2InstanceDetails || (EC2InstanceDetails = {}));
export var ElastiCacheInstanceDetails;
(function (ElastiCacheInstanceDetails) {
    /**
     * @internal
     */
    ElastiCacheInstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ElastiCacheInstanceDetails || (ElastiCacheInstanceDetails = {}));
export var ESInstanceDetails;
(function (ESInstanceDetails) {
    /**
     * @internal
     */
    ESInstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ESInstanceDetails || (ESInstanceDetails = {}));
export var RDSInstanceDetails;
(function (RDSInstanceDetails) {
    /**
     * @internal
     */
    RDSInstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RDSInstanceDetails || (RDSInstanceDetails = {}));
export var RedshiftInstanceDetails;
(function (RedshiftInstanceDetails) {
    /**
     * @internal
     */
    RedshiftInstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftInstanceDetails || (RedshiftInstanceDetails = {}));
export var InstanceDetails;
(function (InstanceDetails) {
    /**
     * @internal
     */
    InstanceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InstanceDetails || (InstanceDetails = {}));
export var ReservationPurchaseRecommendationDetail;
(function (ReservationPurchaseRecommendationDetail) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPurchaseRecommendationDetail || (ReservationPurchaseRecommendationDetail = {}));
export var ReservationPurchaseRecommendationSummary;
(function (ReservationPurchaseRecommendationSummary) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPurchaseRecommendationSummary || (ReservationPurchaseRecommendationSummary = {}));
export var ReservationPurchaseRecommendation;
(function (ReservationPurchaseRecommendation) {
    /**
     * @internal
     */
    ReservationPurchaseRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationPurchaseRecommendation || (ReservationPurchaseRecommendation = {}));
export var GetReservationPurchaseRecommendationResponse;
(function (GetReservationPurchaseRecommendationResponse) {
    /**
     * @internal
     */
    GetReservationPurchaseRecommendationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationPurchaseRecommendationResponse || (GetReservationPurchaseRecommendationResponse = {}));
export var ReservationAggregates;
(function (ReservationAggregates) {
    /**
     * @internal
     */
    ReservationAggregates.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationAggregates || (ReservationAggregates = {}));
export var ReservationUtilizationGroup;
(function (ReservationUtilizationGroup) {
    /**
     * @internal
     */
    ReservationUtilizationGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReservationUtilizationGroup || (ReservationUtilizationGroup = {}));
export var UtilizationByTime;
(function (UtilizationByTime) {
    /**
     * @internal
     */
    UtilizationByTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UtilizationByTime || (UtilizationByTime = {}));
export var GetReservationUtilizationResponse;
(function (GetReservationUtilizationResponse) {
    /**
     * @internal
     */
    GetReservationUtilizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationUtilizationResponse || (GetReservationUtilizationResponse = {}));
export var RecommendationTarget;
(function (RecommendationTarget) {
    RecommendationTarget["CROSS_INSTANCE_FAMILY"] = "CROSS_INSTANCE_FAMILY";
    RecommendationTarget["SAME_INSTANCE_FAMILY"] = "SAME_INSTANCE_FAMILY";
})(RecommendationTarget || (RecommendationTarget = {}));
export var RightsizingRecommendationConfiguration;
(function (RightsizingRecommendationConfiguration) {
    /**
     * @internal
     */
    RightsizingRecommendationConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RightsizingRecommendationConfiguration || (RightsizingRecommendationConfiguration = {}));
export var RightsizingRecommendationMetadata;
(function (RightsizingRecommendationMetadata) {
    /**
     * @internal
     */
    RightsizingRecommendationMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RightsizingRecommendationMetadata || (RightsizingRecommendationMetadata = {}));
export var EC2ResourceDetails;
(function (EC2ResourceDetails) {
    /**
     * @internal
     */
    EC2ResourceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2ResourceDetails || (EC2ResourceDetails = {}));
export var ResourceDetails;
(function (ResourceDetails) {
    /**
     * @internal
     */
    ResourceDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceDetails || (ResourceDetails = {}));
export var DiskResourceUtilization;
(function (DiskResourceUtilization) {
    /**
     * @internal
     */
    DiskResourceUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DiskResourceUtilization || (DiskResourceUtilization = {}));
export var EBSResourceUtilization;
(function (EBSResourceUtilization) {
    /**
     * @internal
     */
    EBSResourceUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EBSResourceUtilization || (EBSResourceUtilization = {}));
export var NetworkResourceUtilization;
(function (NetworkResourceUtilization) {
    /**
     * @internal
     */
    NetworkResourceUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkResourceUtilization || (NetworkResourceUtilization = {}));
export var EC2ResourceUtilization;
(function (EC2ResourceUtilization) {
    /**
     * @internal
     */
    EC2ResourceUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EC2ResourceUtilization || (EC2ResourceUtilization = {}));
export var ResourceUtilization;
(function (ResourceUtilization) {
    /**
     * @internal
     */
    ResourceUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceUtilization || (ResourceUtilization = {}));
export var CurrentInstance;
(function (CurrentInstance) {
    /**
     * @internal
     */
    CurrentInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CurrentInstance || (CurrentInstance = {}));
export var FindingReasonCode;
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
})(FindingReasonCode || (FindingReasonCode = {}));
export var PlatformDifference;
(function (PlatformDifference) {
    PlatformDifference["HYPERVISOR"] = "HYPERVISOR";
    PlatformDifference["INSTANCE_STORE_AVAILABILITY"] = "INSTANCE_STORE_AVAILABILITY";
    PlatformDifference["NETWORK_INTERFACE"] = "NETWORK_INTERFACE";
    PlatformDifference["STORAGE_INTERFACE"] = "STORAGE_INTERFACE";
    PlatformDifference["VIRTUALIZATION_TYPE"] = "VIRTUALIZATION_TYPE";
})(PlatformDifference || (PlatformDifference = {}));
export var TargetInstance;
(function (TargetInstance) {
    /**
     * @internal
     */
    TargetInstance.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TargetInstance || (TargetInstance = {}));
export var ModifyRecommendationDetail;
(function (ModifyRecommendationDetail) {
    /**
     * @internal
     */
    ModifyRecommendationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ModifyRecommendationDetail || (ModifyRecommendationDetail = {}));
export var RightsizingType;
(function (RightsizingType) {
    RightsizingType["MODIFY"] = "MODIFY";
    RightsizingType["TERMINATE"] = "TERMINATE";
})(RightsizingType || (RightsizingType = {}));
export var TerminateRecommendationDetail;
(function (TerminateRecommendationDetail) {
    /**
     * @internal
     */
    TerminateRecommendationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TerminateRecommendationDetail || (TerminateRecommendationDetail = {}));
export var RightsizingRecommendation;
(function (RightsizingRecommendation) {
    /**
     * @internal
     */
    RightsizingRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RightsizingRecommendation || (RightsizingRecommendation = {}));
export var RightsizingRecommendationSummary;
(function (RightsizingRecommendationSummary) {
    /**
     * @internal
     */
    RightsizingRecommendationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RightsizingRecommendationSummary || (RightsizingRecommendationSummary = {}));
export var GetRightsizingRecommendationResponse;
(function (GetRightsizingRecommendationResponse) {
    /**
     * @internal
     */
    GetRightsizingRecommendationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRightsizingRecommendationResponse || (GetRightsizingRecommendationResponse = {}));
export var SavingsPlansCoverageData;
(function (SavingsPlansCoverageData) {
    /**
     * @internal
     */
    SavingsPlansCoverageData.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansCoverageData || (SavingsPlansCoverageData = {}));
export var SavingsPlansCoverage;
(function (SavingsPlansCoverage) {
    /**
     * @internal
     */
    SavingsPlansCoverage.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansCoverage || (SavingsPlansCoverage = {}));
export var GetSavingsPlansCoverageResponse;
(function (GetSavingsPlansCoverageResponse) {
    /**
     * @internal
     */
    GetSavingsPlansCoverageResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansCoverageResponse || (GetSavingsPlansCoverageResponse = {}));
export var SupportedSavingsPlansType;
(function (SupportedSavingsPlansType) {
    SupportedSavingsPlansType["COMPUTE_SP"] = "COMPUTE_SP";
    SupportedSavingsPlansType["EC2_INSTANCE_SP"] = "EC2_INSTANCE_SP";
    SupportedSavingsPlansType["SAGEMAKER_SP"] = "SAGEMAKER_SP";
})(SupportedSavingsPlansType || (SupportedSavingsPlansType = {}));
export var SavingsPlansPurchaseRecommendationMetadata;
(function (SavingsPlansPurchaseRecommendationMetadata) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansPurchaseRecommendationMetadata || (SavingsPlansPurchaseRecommendationMetadata = {}));
export var SavingsPlansDetails;
(function (SavingsPlansDetails) {
    /**
     * @internal
     */
    SavingsPlansDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansDetails || (SavingsPlansDetails = {}));
export var SavingsPlansPurchaseRecommendationDetail;
(function (SavingsPlansPurchaseRecommendationDetail) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansPurchaseRecommendationDetail || (SavingsPlansPurchaseRecommendationDetail = {}));
export var SavingsPlansPurchaseRecommendationSummary;
(function (SavingsPlansPurchaseRecommendationSummary) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendationSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansPurchaseRecommendationSummary || (SavingsPlansPurchaseRecommendationSummary = {}));
export var SavingsPlansPurchaseRecommendation;
(function (SavingsPlansPurchaseRecommendation) {
    /**
     * @internal
     */
    SavingsPlansPurchaseRecommendation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansPurchaseRecommendation || (SavingsPlansPurchaseRecommendation = {}));
export var GetSavingsPlansPurchaseRecommendationResponse;
(function (GetSavingsPlansPurchaseRecommendationResponse) {
    /**
     * @internal
     */
    GetSavingsPlansPurchaseRecommendationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansPurchaseRecommendationResponse || (GetSavingsPlansPurchaseRecommendationResponse = {}));
export var SavingsPlansAmortizedCommitment;
(function (SavingsPlansAmortizedCommitment) {
    /**
     * @internal
     */
    SavingsPlansAmortizedCommitment.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansAmortizedCommitment || (SavingsPlansAmortizedCommitment = {}));
export var SavingsPlansSavings;
(function (SavingsPlansSavings) {
    /**
     * @internal
     */
    SavingsPlansSavings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansSavings || (SavingsPlansSavings = {}));
export var SavingsPlansUtilization;
(function (SavingsPlansUtilization) {
    /**
     * @internal
     */
    SavingsPlansUtilization.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansUtilization || (SavingsPlansUtilization = {}));
export var SavingsPlansUtilizationByTime;
(function (SavingsPlansUtilizationByTime) {
    /**
     * @internal
     */
    SavingsPlansUtilizationByTime.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansUtilizationByTime || (SavingsPlansUtilizationByTime = {}));
export var SavingsPlansUtilizationAggregates;
(function (SavingsPlansUtilizationAggregates) {
    /**
     * @internal
     */
    SavingsPlansUtilizationAggregates.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansUtilizationAggregates || (SavingsPlansUtilizationAggregates = {}));
export var GetSavingsPlansUtilizationResponse;
(function (GetSavingsPlansUtilizationResponse) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansUtilizationResponse || (GetSavingsPlansUtilizationResponse = {}));
export var SavingsPlansDataType;
(function (SavingsPlansDataType) {
    SavingsPlansDataType["AMORTIZED_COMMITMENT"] = "AMORTIZED_COMMITMENT";
    SavingsPlansDataType["ATTRIBUTES"] = "ATTRIBUTES";
    SavingsPlansDataType["SAVINGS"] = "SAVINGS";
    SavingsPlansDataType["UTILIZATION"] = "UTILIZATION";
})(SavingsPlansDataType || (SavingsPlansDataType = {}));
export var SavingsPlansUtilizationDetail;
(function (SavingsPlansUtilizationDetail) {
    /**
     * @internal
     */
    SavingsPlansUtilizationDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SavingsPlansUtilizationDetail || (SavingsPlansUtilizationDetail = {}));
export var GetSavingsPlansUtilizationDetailsResponse;
(function (GetSavingsPlansUtilizationDetailsResponse) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansUtilizationDetailsResponse || (GetSavingsPlansUtilizationDetailsResponse = {}));
export var GetTagsResponse;
(function (GetTagsResponse) {
    /**
     * @internal
     */
    GetTagsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTagsResponse || (GetTagsResponse = {}));
export var GetUsageForecastResponse;
(function (GetUsageForecastResponse) {
    /**
     * @internal
     */
    GetUsageForecastResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageForecastResponse || (GetUsageForecastResponse = {}));
export var UnresolvableUsageUnitException;
(function (UnresolvableUsageUnitException) {
    /**
     * @internal
     */
    UnresolvableUsageUnitException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnresolvableUsageUnitException || (UnresolvableUsageUnitException = {}));
export var ListCostCategoryDefinitionsRequest;
(function (ListCostCategoryDefinitionsRequest) {
    /**
     * @internal
     */
    ListCostCategoryDefinitionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCostCategoryDefinitionsRequest || (ListCostCategoryDefinitionsRequest = {}));
export var CostCategoryReference;
(function (CostCategoryReference) {
    /**
     * @internal
     */
    CostCategoryReference.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategoryReference || (CostCategoryReference = {}));
export var ListCostCategoryDefinitionsResponse;
(function (ListCostCategoryDefinitionsResponse) {
    /**
     * @internal
     */
    ListCostCategoryDefinitionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListCostCategoryDefinitionsResponse || (ListCostCategoryDefinitionsResponse = {}));
export var ProvideAnomalyFeedbackRequest;
(function (ProvideAnomalyFeedbackRequest) {
    /**
     * @internal
     */
    ProvideAnomalyFeedbackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvideAnomalyFeedbackRequest || (ProvideAnomalyFeedbackRequest = {}));
export var ProvideAnomalyFeedbackResponse;
(function (ProvideAnomalyFeedbackResponse) {
    /**
     * @internal
     */
    ProvideAnomalyFeedbackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ProvideAnomalyFeedbackResponse || (ProvideAnomalyFeedbackResponse = {}));
export var UpdateAnomalyMonitorRequest;
(function (UpdateAnomalyMonitorRequest) {
    /**
     * @internal
     */
    UpdateAnomalyMonitorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalyMonitorRequest || (UpdateAnomalyMonitorRequest = {}));
export var UpdateAnomalyMonitorResponse;
(function (UpdateAnomalyMonitorResponse) {
    /**
     * @internal
     */
    UpdateAnomalyMonitorResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalyMonitorResponse || (UpdateAnomalyMonitorResponse = {}));
export var UpdateAnomalySubscriptionRequest;
(function (UpdateAnomalySubscriptionRequest) {
    /**
     * @internal
     */
    UpdateAnomalySubscriptionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalySubscriptionRequest || (UpdateAnomalySubscriptionRequest = {}));
export var UpdateAnomalySubscriptionResponse;
(function (UpdateAnomalySubscriptionResponse) {
    /**
     * @internal
     */
    UpdateAnomalySubscriptionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateAnomalySubscriptionResponse || (UpdateAnomalySubscriptionResponse = {}));
export var UpdateCostCategoryDefinitionResponse;
(function (UpdateCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    UpdateCostCategoryDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCostCategoryDefinitionResponse || (UpdateCostCategoryDefinitionResponse = {}));
export var Expression;
(function (Expression) {
    /**
     * @internal
     */
    Expression.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Expression || (Expression = {}));
export var AnomalyMonitor;
(function (AnomalyMonitor) {
    /**
     * @internal
     */
    AnomalyMonitor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AnomalyMonitor || (AnomalyMonitor = {}));
export var CostCategoryRule;
(function (CostCategoryRule) {
    /**
     * @internal
     */
    CostCategoryRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategoryRule || (CostCategoryRule = {}));
export var GetCostAndUsageRequest;
(function (GetCostAndUsageRequest) {
    /**
     * @internal
     */
    GetCostAndUsageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostAndUsageRequest || (GetCostAndUsageRequest = {}));
export var GetCostAndUsageWithResourcesRequest;
(function (GetCostAndUsageWithResourcesRequest) {
    /**
     * @internal
     */
    GetCostAndUsageWithResourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostAndUsageWithResourcesRequest || (GetCostAndUsageWithResourcesRequest = {}));
export var GetCostCategoriesRequest;
(function (GetCostCategoriesRequest) {
    /**
     * @internal
     */
    GetCostCategoriesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostCategoriesRequest || (GetCostCategoriesRequest = {}));
export var GetCostForecastRequest;
(function (GetCostForecastRequest) {
    /**
     * @internal
     */
    GetCostForecastRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCostForecastRequest || (GetCostForecastRequest = {}));
export var GetDimensionValuesRequest;
(function (GetDimensionValuesRequest) {
    /**
     * @internal
     */
    GetDimensionValuesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetDimensionValuesRequest || (GetDimensionValuesRequest = {}));
export var GetReservationCoverageRequest;
(function (GetReservationCoverageRequest) {
    /**
     * @internal
     */
    GetReservationCoverageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationCoverageRequest || (GetReservationCoverageRequest = {}));
export var GetReservationPurchaseRecommendationRequest;
(function (GetReservationPurchaseRecommendationRequest) {
    /**
     * @internal
     */
    GetReservationPurchaseRecommendationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationPurchaseRecommendationRequest || (GetReservationPurchaseRecommendationRequest = {}));
export var GetReservationUtilizationRequest;
(function (GetReservationUtilizationRequest) {
    /**
     * @internal
     */
    GetReservationUtilizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetReservationUtilizationRequest || (GetReservationUtilizationRequest = {}));
export var GetRightsizingRecommendationRequest;
(function (GetRightsizingRecommendationRequest) {
    /**
     * @internal
     */
    GetRightsizingRecommendationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRightsizingRecommendationRequest || (GetRightsizingRecommendationRequest = {}));
export var GetSavingsPlansCoverageRequest;
(function (GetSavingsPlansCoverageRequest) {
    /**
     * @internal
     */
    GetSavingsPlansCoverageRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansCoverageRequest || (GetSavingsPlansCoverageRequest = {}));
export var GetSavingsPlansPurchaseRecommendationRequest;
(function (GetSavingsPlansPurchaseRecommendationRequest) {
    /**
     * @internal
     */
    GetSavingsPlansPurchaseRecommendationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansPurchaseRecommendationRequest || (GetSavingsPlansPurchaseRecommendationRequest = {}));
export var GetSavingsPlansUtilizationDetailsRequest;
(function (GetSavingsPlansUtilizationDetailsRequest) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansUtilizationDetailsRequest || (GetSavingsPlansUtilizationDetailsRequest = {}));
export var GetSavingsPlansUtilizationRequest;
(function (GetSavingsPlansUtilizationRequest) {
    /**
     * @internal
     */
    GetSavingsPlansUtilizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSavingsPlansUtilizationRequest || (GetSavingsPlansUtilizationRequest = {}));
export var GetTagsRequest;
(function (GetTagsRequest) {
    /**
     * @internal
     */
    GetTagsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetTagsRequest || (GetTagsRequest = {}));
export var GetUsageForecastRequest;
(function (GetUsageForecastRequest) {
    /**
     * @internal
     */
    GetUsageForecastRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetUsageForecastRequest || (GetUsageForecastRequest = {}));
export var CreateAnomalyMonitorRequest;
(function (CreateAnomalyMonitorRequest) {
    /**
     * @internal
     */
    CreateAnomalyMonitorRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateAnomalyMonitorRequest || (CreateAnomalyMonitorRequest = {}));
export var CostCategory;
(function (CostCategory) {
    /**
     * @internal
     */
    CostCategory.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CostCategory || (CostCategory = {}));
export var CreateCostCategoryDefinitionRequest;
(function (CreateCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    CreateCostCategoryDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCostCategoryDefinitionRequest || (CreateCostCategoryDefinitionRequest = {}));
export var GetAnomalyMonitorsResponse;
(function (GetAnomalyMonitorsResponse) {
    /**
     * @internal
     */
    GetAnomalyMonitorsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetAnomalyMonitorsResponse || (GetAnomalyMonitorsResponse = {}));
export var UpdateCostCategoryDefinitionRequest;
(function (UpdateCostCategoryDefinitionRequest) {
    /**
     * @internal
     */
    UpdateCostCategoryDefinitionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateCostCategoryDefinitionRequest || (UpdateCostCategoryDefinitionRequest = {}));
export var DescribeCostCategoryDefinitionResponse;
(function (DescribeCostCategoryDefinitionResponse) {
    /**
     * @internal
     */
    DescribeCostCategoryDefinitionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeCostCategoryDefinitionResponse || (DescribeCostCategoryDefinitionResponse = {}));
//# sourceMappingURL=models_0.js.map