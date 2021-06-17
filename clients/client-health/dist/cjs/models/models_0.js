"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcurrentModificationException = exports.DescribeHealthServiceStatusForOrganizationResponse = exports.DescribeEventTypesResponse = exports.EventType = exports.DescribeEventTypesRequest = exports.EventTypeFilter = exports.DescribeEventsForOrganizationResponse = exports.OrganizationEvent = exports.DescribeEventsForOrganizationRequest = exports.OrganizationEventFilter = exports.DescribeEventsResponse = exports.DescribeEventsRequest = exports.DescribeEventDetailsForOrganizationResponse = exports.OrganizationEventDetails = exports.OrganizationEventDetailsErrorItem = exports.DescribeEventDetailsForOrganizationRequest = exports.DescribeEventDetailsResponse = exports.EventDetails = exports.EventDescription = exports.Event = exports.EventDetailsErrorItem = exports.DescribeEventDetailsRequest = exports.DescribeEventAggregatesResponse = exports.EventAggregate = exports.DescribeEventAggregatesRequest = exports.EventFilter = exports.EventTypeCategory = exports.EventStatusCode = exports.EventAggregateField = exports.DescribeEntityAggregatesResponse = exports.EntityAggregate = exports.DescribeEntityAggregatesRequest = exports.DescribeAffectedEntitiesForOrganizationResponse = exports.OrganizationAffectedEntitiesErrorItem = exports.DescribeAffectedEntitiesForOrganizationRequest = exports.EventAccountFilter = exports.UnsupportedLocale = exports.DescribeAffectedEntitiesResponse = exports.DescribeAffectedEntitiesRequest = exports.EntityFilter = exports.DateTimeRange = exports.InvalidPaginationToken = exports.DescribeAffectedAccountsForOrganizationResponse = exports.EventScopeCode = exports.DescribeAffectedAccountsForOrganizationRequest = exports.AffectedEntity = exports.EntityStatusCode = void 0;
var EntityStatusCode;
(function (EntityStatusCode) {
    EntityStatusCode["IMPAIRED"] = "IMPAIRED";
    EntityStatusCode["UNIMPAIRED"] = "UNIMPAIRED";
    EntityStatusCode["UNKNOWN"] = "UNKNOWN";
})(EntityStatusCode = exports.EntityStatusCode || (exports.EntityStatusCode = {}));
var AffectedEntity;
(function (AffectedEntity) {
    /**
     * @internal
     */
    AffectedEntity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AffectedEntity = exports.AffectedEntity || (exports.AffectedEntity = {}));
var DescribeAffectedAccountsForOrganizationRequest;
(function (DescribeAffectedAccountsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeAffectedAccountsForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedAccountsForOrganizationRequest = exports.DescribeAffectedAccountsForOrganizationRequest || (exports.DescribeAffectedAccountsForOrganizationRequest = {}));
var EventScopeCode;
(function (EventScopeCode) {
    EventScopeCode["ACCOUNT_SPECIFIC"] = "ACCOUNT_SPECIFIC";
    EventScopeCode["NONE"] = "NONE";
    EventScopeCode["PUBLIC"] = "PUBLIC";
})(EventScopeCode = exports.EventScopeCode || (exports.EventScopeCode = {}));
var DescribeAffectedAccountsForOrganizationResponse;
(function (DescribeAffectedAccountsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeAffectedAccountsForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedAccountsForOrganizationResponse = exports.DescribeAffectedAccountsForOrganizationResponse || (exports.DescribeAffectedAccountsForOrganizationResponse = {}));
var InvalidPaginationToken;
(function (InvalidPaginationToken) {
    /**
     * @internal
     */
    InvalidPaginationToken.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidPaginationToken = exports.InvalidPaginationToken || (exports.InvalidPaginationToken = {}));
var DateTimeRange;
(function (DateTimeRange) {
    /**
     * @internal
     */
    DateTimeRange.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DateTimeRange = exports.DateTimeRange || (exports.DateTimeRange = {}));
var EntityFilter;
(function (EntityFilter) {
    /**
     * @internal
     */
    EntityFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityFilter = exports.EntityFilter || (exports.EntityFilter = {}));
var DescribeAffectedEntitiesRequest;
(function (DescribeAffectedEntitiesRequest) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedEntitiesRequest = exports.DescribeAffectedEntitiesRequest || (exports.DescribeAffectedEntitiesRequest = {}));
var DescribeAffectedEntitiesResponse;
(function (DescribeAffectedEntitiesResponse) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedEntitiesResponse = exports.DescribeAffectedEntitiesResponse || (exports.DescribeAffectedEntitiesResponse = {}));
var UnsupportedLocale;
(function (UnsupportedLocale) {
    /**
     * @internal
     */
    UnsupportedLocale.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UnsupportedLocale = exports.UnsupportedLocale || (exports.UnsupportedLocale = {}));
var EventAccountFilter;
(function (EventAccountFilter) {
    /**
     * @internal
     */
    EventAccountFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventAccountFilter = exports.EventAccountFilter || (exports.EventAccountFilter = {}));
var DescribeAffectedEntitiesForOrganizationRequest;
(function (DescribeAffectedEntitiesForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedEntitiesForOrganizationRequest = exports.DescribeAffectedEntitiesForOrganizationRequest || (exports.DescribeAffectedEntitiesForOrganizationRequest = {}));
var OrganizationAffectedEntitiesErrorItem;
(function (OrganizationAffectedEntitiesErrorItem) {
    /**
     * @internal
     */
    OrganizationAffectedEntitiesErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationAffectedEntitiesErrorItem = exports.OrganizationAffectedEntitiesErrorItem || (exports.OrganizationAffectedEntitiesErrorItem = {}));
var DescribeAffectedEntitiesForOrganizationResponse;
(function (DescribeAffectedEntitiesForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeAffectedEntitiesForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeAffectedEntitiesForOrganizationResponse = exports.DescribeAffectedEntitiesForOrganizationResponse || (exports.DescribeAffectedEntitiesForOrganizationResponse = {}));
var DescribeEntityAggregatesRequest;
(function (DescribeEntityAggregatesRequest) {
    /**
     * @internal
     */
    DescribeEntityAggregatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntityAggregatesRequest = exports.DescribeEntityAggregatesRequest || (exports.DescribeEntityAggregatesRequest = {}));
var EntityAggregate;
(function (EntityAggregate) {
    /**
     * @internal
     */
    EntityAggregate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EntityAggregate = exports.EntityAggregate || (exports.EntityAggregate = {}));
var DescribeEntityAggregatesResponse;
(function (DescribeEntityAggregatesResponse) {
    /**
     * @internal
     */
    DescribeEntityAggregatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEntityAggregatesResponse = exports.DescribeEntityAggregatesResponse || (exports.DescribeEntityAggregatesResponse = {}));
var EventAggregateField;
(function (EventAggregateField) {
    EventAggregateField["EventTypeCategory"] = "eventTypeCategory";
})(EventAggregateField = exports.EventAggregateField || (exports.EventAggregateField = {}));
var EventStatusCode;
(function (EventStatusCode) {
    EventStatusCode["CLOSED"] = "closed";
    EventStatusCode["OPEN"] = "open";
    EventStatusCode["UPCOMING"] = "upcoming";
})(EventStatusCode = exports.EventStatusCode || (exports.EventStatusCode = {}));
var EventTypeCategory;
(function (EventTypeCategory) {
    EventTypeCategory["ACCOUNT_NOTIFICATION"] = "accountNotification";
    EventTypeCategory["INVESTIGATION"] = "investigation";
    EventTypeCategory["ISSUE"] = "issue";
    EventTypeCategory["SCHEDULED_CHANGE"] = "scheduledChange";
})(EventTypeCategory = exports.EventTypeCategory || (exports.EventTypeCategory = {}));
var EventFilter;
(function (EventFilter) {
    /**
     * @internal
     */
    EventFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventFilter = exports.EventFilter || (exports.EventFilter = {}));
var DescribeEventAggregatesRequest;
(function (DescribeEventAggregatesRequest) {
    /**
     * @internal
     */
    DescribeEventAggregatesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventAggregatesRequest = exports.DescribeEventAggregatesRequest || (exports.DescribeEventAggregatesRequest = {}));
var EventAggregate;
(function (EventAggregate) {
    /**
     * @internal
     */
    EventAggregate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventAggregate = exports.EventAggregate || (exports.EventAggregate = {}));
var DescribeEventAggregatesResponse;
(function (DescribeEventAggregatesResponse) {
    /**
     * @internal
     */
    DescribeEventAggregatesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventAggregatesResponse = exports.DescribeEventAggregatesResponse || (exports.DescribeEventAggregatesResponse = {}));
var DescribeEventDetailsRequest;
(function (DescribeEventDetailsRequest) {
    /**
     * @internal
     */
    DescribeEventDetailsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventDetailsRequest = exports.DescribeEventDetailsRequest || (exports.DescribeEventDetailsRequest = {}));
var EventDetailsErrorItem;
(function (EventDetailsErrorItem) {
    /**
     * @internal
     */
    EventDetailsErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDetailsErrorItem = exports.EventDetailsErrorItem || (exports.EventDetailsErrorItem = {}));
var Event;
(function (Event) {
    /**
     * @internal
     */
    Event.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Event = exports.Event || (exports.Event = {}));
var EventDescription;
(function (EventDescription) {
    /**
     * @internal
     */
    EventDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDescription = exports.EventDescription || (exports.EventDescription = {}));
var EventDetails;
(function (EventDetails) {
    /**
     * @internal
     */
    EventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventDetails = exports.EventDetails || (exports.EventDetails = {}));
var DescribeEventDetailsResponse;
(function (DescribeEventDetailsResponse) {
    /**
     * @internal
     */
    DescribeEventDetailsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventDetailsResponse = exports.DescribeEventDetailsResponse || (exports.DescribeEventDetailsResponse = {}));
var DescribeEventDetailsForOrganizationRequest;
(function (DescribeEventDetailsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeEventDetailsForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventDetailsForOrganizationRequest = exports.DescribeEventDetailsForOrganizationRequest || (exports.DescribeEventDetailsForOrganizationRequest = {}));
var OrganizationEventDetailsErrorItem;
(function (OrganizationEventDetailsErrorItem) {
    /**
     * @internal
     */
    OrganizationEventDetailsErrorItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationEventDetailsErrorItem = exports.OrganizationEventDetailsErrorItem || (exports.OrganizationEventDetailsErrorItem = {}));
var OrganizationEventDetails;
(function (OrganizationEventDetails) {
    /**
     * @internal
     */
    OrganizationEventDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationEventDetails = exports.OrganizationEventDetails || (exports.OrganizationEventDetails = {}));
var DescribeEventDetailsForOrganizationResponse;
(function (DescribeEventDetailsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeEventDetailsForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventDetailsForOrganizationResponse = exports.DescribeEventDetailsForOrganizationResponse || (exports.DescribeEventDetailsForOrganizationResponse = {}));
var DescribeEventsRequest;
(function (DescribeEventsRequest) {
    /**
     * @internal
     */
    DescribeEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsRequest = exports.DescribeEventsRequest || (exports.DescribeEventsRequest = {}));
var DescribeEventsResponse;
(function (DescribeEventsResponse) {
    /**
     * @internal
     */
    DescribeEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsResponse = exports.DescribeEventsResponse || (exports.DescribeEventsResponse = {}));
var OrganizationEventFilter;
(function (OrganizationEventFilter) {
    /**
     * @internal
     */
    OrganizationEventFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationEventFilter = exports.OrganizationEventFilter || (exports.OrganizationEventFilter = {}));
var DescribeEventsForOrganizationRequest;
(function (DescribeEventsForOrganizationRequest) {
    /**
     * @internal
     */
    DescribeEventsForOrganizationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsForOrganizationRequest = exports.DescribeEventsForOrganizationRequest || (exports.DescribeEventsForOrganizationRequest = {}));
var OrganizationEvent;
(function (OrganizationEvent) {
    /**
     * @internal
     */
    OrganizationEvent.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrganizationEvent = exports.OrganizationEvent || (exports.OrganizationEvent = {}));
var DescribeEventsForOrganizationResponse;
(function (DescribeEventsForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeEventsForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventsForOrganizationResponse = exports.DescribeEventsForOrganizationResponse || (exports.DescribeEventsForOrganizationResponse = {}));
var EventTypeFilter;
(function (EventTypeFilter) {
    /**
     * @internal
     */
    EventTypeFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventTypeFilter = exports.EventTypeFilter || (exports.EventTypeFilter = {}));
var DescribeEventTypesRequest;
(function (DescribeEventTypesRequest) {
    /**
     * @internal
     */
    DescribeEventTypesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTypesRequest = exports.DescribeEventTypesRequest || (exports.DescribeEventTypesRequest = {}));
var EventType;
(function (EventType) {
    /**
     * @internal
     */
    EventType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventType = exports.EventType || (exports.EventType = {}));
var DescribeEventTypesResponse;
(function (DescribeEventTypesResponse) {
    /**
     * @internal
     */
    DescribeEventTypesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventTypesResponse = exports.DescribeEventTypesResponse || (exports.DescribeEventTypesResponse = {}));
var DescribeHealthServiceStatusForOrganizationResponse;
(function (DescribeHealthServiceStatusForOrganizationResponse) {
    /**
     * @internal
     */
    DescribeHealthServiceStatusForOrganizationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeHealthServiceStatusForOrganizationResponse = exports.DescribeHealthServiceStatusForOrganizationResponse || (exports.DescribeHealthServiceStatusForOrganizationResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
//# sourceMappingURL=models_0.js.map