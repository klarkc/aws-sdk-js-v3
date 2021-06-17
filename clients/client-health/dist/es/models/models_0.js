import { __assign } from "tslib";
export var EntityStatusCode;
(function (EntityStatusCode) {
    EntityStatusCode["IMPAIRED"] = "IMPAIRED";
    EntityStatusCode["UNIMPAIRED"] = "UNIMPAIRED";
    EntityStatusCode["UNKNOWN"] = "UNKNOWN";
})(EntityStatusCode || (EntityStatusCode = {}));
export var AffectedEntity;
(function (AffectedEntity) {
    /**
     * @internal
     */
    AffectedEntity.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AffectedEntity || (AffectedEntity = {}));
export var DescribeAffectedAccountsForOrganizationRequest;
(function (DescribeAffectedAccountsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeAffectedAccountsForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedAccountsForOrganizationRequest || (DescribeAffectedAccountsForOrganizationRequest = {}));
export var EventScopeCode;
(function (EventScopeCode) {
    EventScopeCode["ACCOUNT_SPECIFIC"] = "ACCOUNT_SPECIFIC";
    EventScopeCode["NONE"] = "NONE";
    EventScopeCode["PUBLIC"] = "PUBLIC";
})(EventScopeCode || (EventScopeCode = {}));
export var DescribeAffectedAccountsForOrganizationResponse;
(function (DescribeAffectedAccountsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeAffectedAccountsForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedAccountsForOrganizationResponse || (DescribeAffectedAccountsForOrganizationResponse = {}));
export var InvalidPaginationToken;
(function (InvalidPaginationToken) {
    /**
     * @internal
     */
    InvalidPaginationToken.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidPaginationToken || (InvalidPaginationToken = {}));
export var DateTimeRange;
(function (DateTimeRange) {
    /**
     * @internal
     */
    DateTimeRange.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DateTimeRange || (DateTimeRange = {}));
export var EntityFilter;
(function (EntityFilter) {
    /**
     * @internal
     */
    EntityFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityFilter || (EntityFilter = {}));
export var DescribeAffectedEntitiesRequest;
(function (DescribeAffectedEntitiesRequest) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedEntitiesRequest || (DescribeAffectedEntitiesRequest = {}));
export var DescribeAffectedEntitiesResponse;
(function (DescribeAffectedEntitiesResponse) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedEntitiesResponse || (DescribeAffectedEntitiesResponse = {}));
export var UnsupportedLocale;
(function (UnsupportedLocale) {
    /**
     * @internal
     */
    UnsupportedLocale.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UnsupportedLocale || (UnsupportedLocale = {}));
export var EventAccountFilter;
(function (EventAccountFilter) {
    /**
     * @internal
     */
    EventAccountFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventAccountFilter || (EventAccountFilter = {}));
export var DescribeAffectedEntitiesForOrganizationRequest;
(function (DescribeAffectedEntitiesForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedEntitiesForOrganizationRequest || (DescribeAffectedEntitiesForOrganizationRequest = {}));
export var OrganizationAffectedEntitiesErrorItem;
(function (OrganizationAffectedEntitiesErrorItem) {
    /**
     * @internal
     */
    OrganizationAffectedEntitiesErrorItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationAffectedEntitiesErrorItem || (OrganizationAffectedEntitiesErrorItem = {}));
export var DescribeAffectedEntitiesForOrganizationResponse;
(function (DescribeAffectedEntitiesForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeAffectedEntitiesForOrganizationResponse || (DescribeAffectedEntitiesForOrganizationResponse = {}));
export var DescribeEntityAggregatesRequest;
(function (DescribeEntityAggregatesRequest) {
    /**
     * @internal
     */
    DescribeEntityAggregatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEntityAggregatesRequest || (DescribeEntityAggregatesRequest = {}));
export var EntityAggregate;
(function (EntityAggregate) {
    /**
     * @internal
     */
    EntityAggregate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EntityAggregate || (EntityAggregate = {}));
export var DescribeEntityAggregatesResponse;
(function (DescribeEntityAggregatesResponse) {
    /**
     * @internal
     */
    DescribeEntityAggregatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEntityAggregatesResponse || (DescribeEntityAggregatesResponse = {}));
export var EventAggregateField;
(function (EventAggregateField) {
    EventAggregateField["EventTypeCategory"] = "eventTypeCategory";
})(EventAggregateField || (EventAggregateField = {}));
export var EventStatusCode;
(function (EventStatusCode) {
    EventStatusCode["CLOSED"] = "closed";
    EventStatusCode["OPEN"] = "open";
    EventStatusCode["UPCOMING"] = "upcoming";
})(EventStatusCode || (EventStatusCode = {}));
export var EventTypeCategory;
(function (EventTypeCategory) {
    EventTypeCategory["ACCOUNT_NOTIFICATION"] = "accountNotification";
    EventTypeCategory["INVESTIGATION"] = "investigation";
    EventTypeCategory["ISSUE"] = "issue";
    EventTypeCategory["SCHEDULED_CHANGE"] = "scheduledChange";
})(EventTypeCategory || (EventTypeCategory = {}));
export var EventFilter;
(function (EventFilter) {
    /**
     * @internal
     */
    EventFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventFilter || (EventFilter = {}));
export var DescribeEventAggregatesRequest;
(function (DescribeEventAggregatesRequest) {
    /**
     * @internal
     */
    DescribeEventAggregatesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventAggregatesRequest || (DescribeEventAggregatesRequest = {}));
export var EventAggregate;
(function (EventAggregate) {
    /**
     * @internal
     */
    EventAggregate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventAggregate || (EventAggregate = {}));
export var DescribeEventAggregatesResponse;
(function (DescribeEventAggregatesResponse) {
    /**
     * @internal
     */
    DescribeEventAggregatesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventAggregatesResponse || (DescribeEventAggregatesResponse = {}));
export var DescribeEventDetailsRequest;
(function (DescribeEventDetailsRequest) {
    /**
     * @internal
     */
    DescribeEventDetailsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventDetailsRequest || (DescribeEventDetailsRequest = {}));
export var EventDetailsErrorItem;
(function (EventDetailsErrorItem) {
    /**
     * @internal
     */
    EventDetailsErrorItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDetailsErrorItem || (EventDetailsErrorItem = {}));
export var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Event || (Event = {}));
export var EventDescription;
(function (EventDescription) {
    /**
     * @internal
     */
    EventDescription.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDescription || (EventDescription = {}));
export var EventDetails;
(function (EventDetails) {
    /**
     * @internal
     */
    EventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventDetails || (EventDetails = {}));
export var DescribeEventDetailsResponse;
(function (DescribeEventDetailsResponse) {
    /**
     * @internal
     */
    DescribeEventDetailsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventDetailsResponse || (DescribeEventDetailsResponse = {}));
export var DescribeEventDetailsForOrganizationRequest;
(function (DescribeEventDetailsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeEventDetailsForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventDetailsForOrganizationRequest || (DescribeEventDetailsForOrganizationRequest = {}));
export var OrganizationEventDetailsErrorItem;
(function (OrganizationEventDetailsErrorItem) {
    /**
     * @internal
     */
    OrganizationEventDetailsErrorItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationEventDetailsErrorItem || (OrganizationEventDetailsErrorItem = {}));
export var OrganizationEventDetails;
(function (OrganizationEventDetails) {
    /**
     * @internal
     */
    OrganizationEventDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationEventDetails || (OrganizationEventDetails = {}));
export var DescribeEventDetailsForOrganizationResponse;
(function (DescribeEventDetailsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeEventDetailsForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventDetailsForOrganizationResponse || (DescribeEventDetailsForOrganizationResponse = {}));
export var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    /**
     * @internal
     */
    DescribeEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsRequest || (DescribeEventsRequest = {}));
export var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsResponse || (DescribeEventsResponse = {}));
export var OrganizationEventFilter;
(function (OrganizationEventFilter) {
    /**
     * @internal
     */
    OrganizationEventFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationEventFilter || (OrganizationEventFilter = {}));
export var DescribeEventsForOrganizationRequest;
(function (DescribeEventsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeEventsForOrganizationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsForOrganizationRequest || (DescribeEventsForOrganizationRequest = {}));
export var OrganizationEvent;
(function (OrganizationEvent) {
    /**
     * @internal
     */
    OrganizationEvent.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrganizationEvent || (OrganizationEvent = {}));
export var DescribeEventsForOrganizationResponse;
(function (DescribeEventsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeEventsForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventsForOrganizationResponse || (DescribeEventsForOrganizationResponse = {}));
export var EventTypeFilter;
(function (EventTypeFilter) {
    /**
     * @internal
     */
    EventTypeFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventTypeFilter || (EventTypeFilter = {}));
export var DescribeEventTypesRequest;
(function (DescribeEventTypesRequest) {
    /**
     * @internal
     */
    DescribeEventTypesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventTypesRequest || (DescribeEventTypesRequest = {}));
export var EventType;
(function (EventType) {
    /**
     * @internal
     */
    EventType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventType || (EventType = {}));
export var DescribeEventTypesResponse;
(function (DescribeEventTypesResponse) {
    /**
     * @internal
     */
    DescribeEventTypesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventTypesResponse || (DescribeEventTypesResponse = {}));
export var DescribeHealthServiceStatusForOrganizationResponse;
(function (DescribeHealthServiceStatusForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeHealthServiceStatusForOrganizationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeHealthServiceStatusForOrganizationResponse || (DescribeHealthServiceStatusForOrganizationResponse = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
//# sourceMappingURL=models_0.js.map