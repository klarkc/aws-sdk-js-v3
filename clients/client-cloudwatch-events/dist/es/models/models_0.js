import { __assign } from "tslib";
export var ActivateEventSourceRequest;
(function (ActivateEventSourceRequest) {
    /**
     * @internal
     */
    ActivateEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivateEventSourceRequest || (ActivateEventSourceRequest = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalException || (InternalException = {}));
export var InvalidStateException;
(function (InvalidStateException) {
    /**
     * @internal
     */
    InvalidStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidStateException || (InvalidStateException = {}));
export var OperationDisabledException;
(function (OperationDisabledException) {
    /**
     * @internal
     */
    OperationDisabledException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OperationDisabledException || (OperationDisabledException = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ApiDestinationState;
(function (ApiDestinationState) {
    ApiDestinationState["ACTIVE"] = "ACTIVE";
    ApiDestinationState["INACTIVE"] = "INACTIVE";
})(ApiDestinationState || (ApiDestinationState = {}));
export var ApiDestinationHttpMethod;
(function (ApiDestinationHttpMethod) {
    ApiDestinationHttpMethod["DELETE"] = "DELETE";
    ApiDestinationHttpMethod["GET"] = "GET";
    ApiDestinationHttpMethod["HEAD"] = "HEAD";
    ApiDestinationHttpMethod["OPTIONS"] = "OPTIONS";
    ApiDestinationHttpMethod["PATCH"] = "PATCH";
    ApiDestinationHttpMethod["POST"] = "POST";
    ApiDestinationHttpMethod["PUT"] = "PUT";
})(ApiDestinationHttpMethod || (ApiDestinationHttpMethod = {}));
export var ApiDestination;
(function (ApiDestination) {
    /**
     * @internal
     */
    ApiDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApiDestination || (ApiDestination = {}));
export var ArchiveState;
(function (ArchiveState) {
    ArchiveState["CREATE_FAILED"] = "CREATE_FAILED";
    ArchiveState["CREATING"] = "CREATING";
    ArchiveState["DISABLED"] = "DISABLED";
    ArchiveState["ENABLED"] = "ENABLED";
    ArchiveState["UPDATE_FAILED"] = "UPDATE_FAILED";
    ArchiveState["UPDATING"] = "UPDATING";
})(ArchiveState || (ArchiveState = {}));
export var Archive;
(function (Archive) {
    /**
     * @internal
     */
    Archive.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Archive || (Archive = {}));
export var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp || (AssignPublicIp = {}));
export var CancelReplayRequest;
(function (CancelReplayRequest) {
    /**
     * @internal
     */
    CancelReplayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelReplayRequest || (CancelReplayRequest = {}));
export var ReplayState;
(function (ReplayState) {
    ReplayState["CANCELLED"] = "CANCELLED";
    ReplayState["CANCELLING"] = "CANCELLING";
    ReplayState["COMPLETED"] = "COMPLETED";
    ReplayState["FAILED"] = "FAILED";
    ReplayState["RUNNING"] = "RUNNING";
    ReplayState["STARTING"] = "STARTING";
})(ReplayState || (ReplayState = {}));
export var CancelReplayResponse;
(function (CancelReplayResponse) {
    /**
     * @internal
     */
    CancelReplayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CancelReplayResponse || (CancelReplayResponse = {}));
export var IllegalStatusException;
(function (IllegalStatusException) {
    /**
     * @internal
     */
    IllegalStatusException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IllegalStatusException || (IllegalStatusException = {}));
export var CreateApiDestinationRequest;
(function (CreateApiDestinationRequest) {
    /**
     * @internal
     */
    CreateApiDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateApiDestinationRequest || (CreateApiDestinationRequest = {}));
export var CreateApiDestinationResponse;
(function (CreateApiDestinationResponse) {
    /**
     * @internal
     */
    CreateApiDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateApiDestinationResponse || (CreateApiDestinationResponse = {}));
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
export var CreateArchiveRequest;
(function (CreateArchiveRequest) {
    /**
     * @internal
     */
    CreateArchiveRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateArchiveRequest || (CreateArchiveRequest = {}));
export var CreateArchiveResponse;
(function (CreateArchiveResponse) {
    /**
     * @internal
     */
    CreateArchiveResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateArchiveResponse || (CreateArchiveResponse = {}));
export var InvalidEventPatternException;
(function (InvalidEventPatternException) {
    /**
     * @internal
     */
    InvalidEventPatternException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidEventPatternException || (InvalidEventPatternException = {}));
export var ConnectionAuthorizationType;
(function (ConnectionAuthorizationType) {
    ConnectionAuthorizationType["API_KEY"] = "API_KEY";
    ConnectionAuthorizationType["BASIC"] = "BASIC";
    ConnectionAuthorizationType["OAUTH_CLIENT_CREDENTIALS"] = "OAUTH_CLIENT_CREDENTIALS";
})(ConnectionAuthorizationType || (ConnectionAuthorizationType = {}));
export var CreateConnectionApiKeyAuthRequestParameters;
(function (CreateConnectionApiKeyAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionApiKeyAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionApiKeyAuthRequestParameters || (CreateConnectionApiKeyAuthRequestParameters = {}));
export var CreateConnectionBasicAuthRequestParameters;
(function (CreateConnectionBasicAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionBasicAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionBasicAuthRequestParameters || (CreateConnectionBasicAuthRequestParameters = {}));
export var ConnectionBodyParameter;
(function (ConnectionBodyParameter) {
    /**
     * @internal
     */
    ConnectionBodyParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionBodyParameter || (ConnectionBodyParameter = {}));
export var ConnectionHeaderParameter;
(function (ConnectionHeaderParameter) {
    /**
     * @internal
     */
    ConnectionHeaderParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionHeaderParameter || (ConnectionHeaderParameter = {}));
export var ConnectionQueryStringParameter;
(function (ConnectionQueryStringParameter) {
    /**
     * @internal
     */
    ConnectionQueryStringParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionQueryStringParameter || (ConnectionQueryStringParameter = {}));
export var ConnectionHttpParameters;
(function (ConnectionHttpParameters) {
    /**
     * @internal
     */
    ConnectionHttpParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionHttpParameters || (ConnectionHttpParameters = {}));
export var CreateConnectionOAuthClientRequestParameters;
(function (CreateConnectionOAuthClientRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionOAuthClientRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionOAuthClientRequestParameters || (CreateConnectionOAuthClientRequestParameters = {}));
export var ConnectionOAuthHttpMethod;
(function (ConnectionOAuthHttpMethod) {
    ConnectionOAuthHttpMethod["GET"] = "GET";
    ConnectionOAuthHttpMethod["POST"] = "POST";
    ConnectionOAuthHttpMethod["PUT"] = "PUT";
})(ConnectionOAuthHttpMethod || (ConnectionOAuthHttpMethod = {}));
export var CreateConnectionOAuthRequestParameters;
(function (CreateConnectionOAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionOAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionOAuthRequestParameters || (CreateConnectionOAuthRequestParameters = {}));
export var CreateConnectionAuthRequestParameters;
(function (CreateConnectionAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionAuthRequestParameters || (CreateConnectionAuthRequestParameters = {}));
export var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionRequest || (CreateConnectionRequest = {}));
export var ConnectionState;
(function (ConnectionState) {
    ConnectionState["AUTHORIZED"] = "AUTHORIZED";
    ConnectionState["AUTHORIZING"] = "AUTHORIZING";
    ConnectionState["CREATING"] = "CREATING";
    ConnectionState["DEAUTHORIZED"] = "DEAUTHORIZED";
    ConnectionState["DEAUTHORIZING"] = "DEAUTHORIZING";
    ConnectionState["DELETING"] = "DELETING";
    ConnectionState["UPDATING"] = "UPDATING";
})(ConnectionState || (ConnectionState = {}));
export var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    /**
     * @internal
     */
    CreateConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateConnectionResponse || (CreateConnectionResponse = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateEventBusRequest;
(function (CreateEventBusRequest) {
    /**
     * @internal
     */
    CreateEventBusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEventBusRequest || (CreateEventBusRequest = {}));
export var CreateEventBusResponse;
(function (CreateEventBusResponse) {
    /**
     * @internal
     */
    CreateEventBusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateEventBusResponse || (CreateEventBusResponse = {}));
export var CreatePartnerEventSourceRequest;
(function (CreatePartnerEventSourceRequest) {
    /**
     * @internal
     */
    CreatePartnerEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePartnerEventSourceRequest || (CreatePartnerEventSourceRequest = {}));
export var CreatePartnerEventSourceResponse;
(function (CreatePartnerEventSourceResponse) {
    /**
     * @internal
     */
    CreatePartnerEventSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePartnerEventSourceResponse || (CreatePartnerEventSourceResponse = {}));
export var DeactivateEventSourceRequest;
(function (DeactivateEventSourceRequest) {
    /**
     * @internal
     */
    DeactivateEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeactivateEventSourceRequest || (DeactivateEventSourceRequest = {}));
export var DeauthorizeConnectionRequest;
(function (DeauthorizeConnectionRequest) {
    /**
     * @internal
     */
    DeauthorizeConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeauthorizeConnectionRequest || (DeauthorizeConnectionRequest = {}));
export var DeauthorizeConnectionResponse;
(function (DeauthorizeConnectionResponse) {
    /**
     * @internal
     */
    DeauthorizeConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeauthorizeConnectionResponse || (DeauthorizeConnectionResponse = {}));
export var DeleteApiDestinationRequest;
(function (DeleteApiDestinationRequest) {
    /**
     * @internal
     */
    DeleteApiDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApiDestinationRequest || (DeleteApiDestinationRequest = {}));
export var DeleteApiDestinationResponse;
(function (DeleteApiDestinationResponse) {
    /**
     * @internal
     */
    DeleteApiDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteApiDestinationResponse || (DeleteApiDestinationResponse = {}));
export var DeleteArchiveRequest;
(function (DeleteArchiveRequest) {
    /**
     * @internal
     */
    DeleteArchiveRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteArchiveRequest || (DeleteArchiveRequest = {}));
export var DeleteArchiveResponse;
(function (DeleteArchiveResponse) {
    /**
     * @internal
     */
    DeleteArchiveResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteArchiveResponse || (DeleteArchiveResponse = {}));
export var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionRequest || (DeleteConnectionRequest = {}));
export var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteConnectionResponse || (DeleteConnectionResponse = {}));
export var DeleteEventBusRequest;
(function (DeleteEventBusRequest) {
    /**
     * @internal
     */
    DeleteEventBusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteEventBusRequest || (DeleteEventBusRequest = {}));
export var DeletePartnerEventSourceRequest;
(function (DeletePartnerEventSourceRequest) {
    /**
     * @internal
     */
    DeletePartnerEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePartnerEventSourceRequest || (DeletePartnerEventSourceRequest = {}));
export var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleRequest || (DeleteRuleRequest = {}));
export var ManagedRuleException;
(function (ManagedRuleException) {
    /**
     * @internal
     */
    ManagedRuleException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedRuleException || (ManagedRuleException = {}));
export var DescribeApiDestinationRequest;
(function (DescribeApiDestinationRequest) {
    /**
     * @internal
     */
    DescribeApiDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeApiDestinationRequest || (DescribeApiDestinationRequest = {}));
export var DescribeApiDestinationResponse;
(function (DescribeApiDestinationResponse) {
    /**
     * @internal
     */
    DescribeApiDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeApiDestinationResponse || (DescribeApiDestinationResponse = {}));
export var DescribeArchiveRequest;
(function (DescribeArchiveRequest) {
    /**
     * @internal
     */
    DescribeArchiveRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeArchiveRequest || (DescribeArchiveRequest = {}));
export var DescribeArchiveResponse;
(function (DescribeArchiveResponse) {
    /**
     * @internal
     */
    DescribeArchiveResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeArchiveResponse || (DescribeArchiveResponse = {}));
export var DescribeConnectionRequest;
(function (DescribeConnectionRequest) {
    /**
     * @internal
     */
    DescribeConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConnectionRequest || (DescribeConnectionRequest = {}));
export var ConnectionApiKeyAuthResponseParameters;
(function (ConnectionApiKeyAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionApiKeyAuthResponseParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionApiKeyAuthResponseParameters || (ConnectionApiKeyAuthResponseParameters = {}));
export var ConnectionBasicAuthResponseParameters;
(function (ConnectionBasicAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionBasicAuthResponseParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionBasicAuthResponseParameters || (ConnectionBasicAuthResponseParameters = {}));
export var ConnectionOAuthClientResponseParameters;
(function (ConnectionOAuthClientResponseParameters) {
    /**
     * @internal
     */
    ConnectionOAuthClientResponseParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionOAuthClientResponseParameters || (ConnectionOAuthClientResponseParameters = {}));
export var ConnectionOAuthResponseParameters;
(function (ConnectionOAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionOAuthResponseParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionOAuthResponseParameters || (ConnectionOAuthResponseParameters = {}));
export var ConnectionAuthResponseParameters;
(function (ConnectionAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionAuthResponseParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConnectionAuthResponseParameters || (ConnectionAuthResponseParameters = {}));
export var DescribeConnectionResponse;
(function (DescribeConnectionResponse) {
    /**
     * @internal
     */
    DescribeConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeConnectionResponse || (DescribeConnectionResponse = {}));
export var DescribeEventBusRequest;
(function (DescribeEventBusRequest) {
    /**
     * @internal
     */
    DescribeEventBusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventBusRequest || (DescribeEventBusRequest = {}));
export var DescribeEventBusResponse;
(function (DescribeEventBusResponse) {
    /**
     * @internal
     */
    DescribeEventBusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventBusResponse || (DescribeEventBusResponse = {}));
export var DescribeEventSourceRequest;
(function (DescribeEventSourceRequest) {
    /**
     * @internal
     */
    DescribeEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventSourceRequest || (DescribeEventSourceRequest = {}));
export var EventSourceState;
(function (EventSourceState) {
    EventSourceState["ACTIVE"] = "ACTIVE";
    EventSourceState["DELETED"] = "DELETED";
    EventSourceState["PENDING"] = "PENDING";
})(EventSourceState || (EventSourceState = {}));
export var DescribeEventSourceResponse;
(function (DescribeEventSourceResponse) {
    /**
     * @internal
     */
    DescribeEventSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeEventSourceResponse || (DescribeEventSourceResponse = {}));
export var DescribePartnerEventSourceRequest;
(function (DescribePartnerEventSourceRequest) {
    /**
     * @internal
     */
    DescribePartnerEventSourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePartnerEventSourceRequest || (DescribePartnerEventSourceRequest = {}));
export var DescribePartnerEventSourceResponse;
(function (DescribePartnerEventSourceResponse) {
    /**
     * @internal
     */
    DescribePartnerEventSourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribePartnerEventSourceResponse || (DescribePartnerEventSourceResponse = {}));
export var DescribeReplayRequest;
(function (DescribeReplayRequest) {
    /**
     * @internal
     */
    DescribeReplayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplayRequest || (DescribeReplayRequest = {}));
export var ReplayDestination;
(function (ReplayDestination) {
    /**
     * @internal
     */
    ReplayDestination.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ReplayDestination || (ReplayDestination = {}));
export var DescribeReplayResponse;
(function (DescribeReplayResponse) {
    /**
     * @internal
     */
    DescribeReplayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeReplayResponse || (DescribeReplayResponse = {}));
export var DescribeRuleRequest;
(function (DescribeRuleRequest) {
    /**
     * @internal
     */
    DescribeRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRuleRequest || (DescribeRuleRequest = {}));
export var RuleState;
(function (RuleState) {
    RuleState["DISABLED"] = "DISABLED";
    RuleState["ENABLED"] = "ENABLED";
})(RuleState || (RuleState = {}));
export var DescribeRuleResponse;
(function (DescribeRuleResponse) {
    /**
     * @internal
     */
    DescribeRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeRuleResponse || (DescribeRuleResponse = {}));
export var DisableRuleRequest;
(function (DisableRuleRequest) {
    /**
     * @internal
     */
    DisableRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableRuleRequest || (DisableRuleRequest = {}));
export var EnableRuleRequest;
(function (EnableRuleRequest) {
    /**
     * @internal
     */
    EnableRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableRuleRequest || (EnableRuleRequest = {}));
export var ListApiDestinationsRequest;
(function (ListApiDestinationsRequest) {
    /**
     * @internal
     */
    ListApiDestinationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListApiDestinationsRequest || (ListApiDestinationsRequest = {}));
export var ListApiDestinationsResponse;
(function (ListApiDestinationsResponse) {
    /**
     * @internal
     */
    ListApiDestinationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListApiDestinationsResponse || (ListApiDestinationsResponse = {}));
export var ListArchivesRequest;
(function (ListArchivesRequest) {
    /**
     * @internal
     */
    ListArchivesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListArchivesRequest || (ListArchivesRequest = {}));
export var ListArchivesResponse;
(function (ListArchivesResponse) {
    /**
     * @internal
     */
    ListArchivesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListArchivesResponse || (ListArchivesResponse = {}));
export var ListConnectionsRequest;
(function (ListConnectionsRequest) {
    /**
     * @internal
     */
    ListConnectionsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConnectionsRequest || (ListConnectionsRequest = {}));
export var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Connection || (Connection = {}));
export var ListConnectionsResponse;
(function (ListConnectionsResponse) {
    /**
     * @internal
     */
    ListConnectionsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListConnectionsResponse || (ListConnectionsResponse = {}));
export var ListEventBusesRequest;
(function (ListEventBusesRequest) {
    /**
     * @internal
     */
    ListEventBusesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventBusesRequest || (ListEventBusesRequest = {}));
export var EventBus;
(function (EventBus) {
    /**
     * @internal
     */
    EventBus.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventBus || (EventBus = {}));
export var ListEventBusesResponse;
(function (ListEventBusesResponse) {
    /**
     * @internal
     */
    ListEventBusesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventBusesResponse || (ListEventBusesResponse = {}));
export var ListEventSourcesRequest;
(function (ListEventSourcesRequest) {
    /**
     * @internal
     */
    ListEventSourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventSourcesRequest || (ListEventSourcesRequest = {}));
export var EventSource;
(function (EventSource) {
    /**
     * @internal
     */
    EventSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EventSource || (EventSource = {}));
export var ListEventSourcesResponse;
(function (ListEventSourcesResponse) {
    /**
     * @internal
     */
    ListEventSourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListEventSourcesResponse || (ListEventSourcesResponse = {}));
export var ListPartnerEventSourceAccountsRequest;
(function (ListPartnerEventSourceAccountsRequest) {
    /**
     * @internal
     */
    ListPartnerEventSourceAccountsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartnerEventSourceAccountsRequest || (ListPartnerEventSourceAccountsRequest = {}));
export var PartnerEventSourceAccount;
(function (PartnerEventSourceAccount) {
    /**
     * @internal
     */
    PartnerEventSourceAccount.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartnerEventSourceAccount || (PartnerEventSourceAccount = {}));
export var ListPartnerEventSourceAccountsResponse;
(function (ListPartnerEventSourceAccountsResponse) {
    /**
     * @internal
     */
    ListPartnerEventSourceAccountsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartnerEventSourceAccountsResponse || (ListPartnerEventSourceAccountsResponse = {}));
export var ListPartnerEventSourcesRequest;
(function (ListPartnerEventSourcesRequest) {
    /**
     * @internal
     */
    ListPartnerEventSourcesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartnerEventSourcesRequest || (ListPartnerEventSourcesRequest = {}));
export var PartnerEventSource;
(function (PartnerEventSource) {
    /**
     * @internal
     */
    PartnerEventSource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PartnerEventSource || (PartnerEventSource = {}));
export var ListPartnerEventSourcesResponse;
(function (ListPartnerEventSourcesResponse) {
    /**
     * @internal
     */
    ListPartnerEventSourcesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPartnerEventSourcesResponse || (ListPartnerEventSourcesResponse = {}));
export var ListReplaysRequest;
(function (ListReplaysRequest) {
    /**
     * @internal
     */
    ListReplaysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReplaysRequest || (ListReplaysRequest = {}));
export var Replay;
(function (Replay) {
    /**
     * @internal
     */
    Replay.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Replay || (Replay = {}));
export var ListReplaysResponse;
(function (ListReplaysResponse) {
    /**
     * @internal
     */
    ListReplaysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListReplaysResponse || (ListReplaysResponse = {}));
export var ListRuleNamesByTargetRequest;
(function (ListRuleNamesByTargetRequest) {
    /**
     * @internal
     */
    ListRuleNamesByTargetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRuleNamesByTargetRequest || (ListRuleNamesByTargetRequest = {}));
export var ListRuleNamesByTargetResponse;
(function (ListRuleNamesByTargetResponse) {
    /**
     * @internal
     */
    ListRuleNamesByTargetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRuleNamesByTargetResponse || (ListRuleNamesByTargetResponse = {}));
export var ListRulesRequest;
(function (ListRulesRequest) {
    /**
     * @internal
     */
    ListRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesRequest || (ListRulesRequest = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var ListRulesResponse;
(function (ListRulesResponse) {
    /**
     * @internal
     */
    ListRulesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesResponse || (ListRulesResponse = {}));
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
export var ListTargetsByRuleRequest;
(function (ListTargetsByRuleRequest) {
    /**
     * @internal
     */
    ListTargetsByRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsByRuleRequest || (ListTargetsByRuleRequest = {}));
export var BatchArrayProperties;
(function (BatchArrayProperties) {
    /**
     * @internal
     */
    BatchArrayProperties.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchArrayProperties || (BatchArrayProperties = {}));
export var BatchRetryStrategy;
(function (BatchRetryStrategy) {
    /**
     * @internal
     */
    BatchRetryStrategy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchRetryStrategy || (BatchRetryStrategy = {}));
export var BatchParameters;
(function (BatchParameters) {
    /**
     * @internal
     */
    BatchParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BatchParameters || (BatchParameters = {}));
export var DeadLetterConfig;
(function (DeadLetterConfig) {
    /**
     * @internal
     */
    DeadLetterConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeadLetterConfig || (DeadLetterConfig = {}));
export var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType || (LaunchType = {}));
export var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    /**
     * @internal
     */
    AwsVpcConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AwsVpcConfiguration || (AwsVpcConfiguration = {}));
export var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NetworkConfiguration || (NetworkConfiguration = {}));
export var EcsParameters;
(function (EcsParameters) {
    /**
     * @internal
     */
    EcsParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EcsParameters || (EcsParameters = {}));
export var HttpParameters;
(function (HttpParameters) {
    /**
     * @internal
     */
    HttpParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HttpParameters || (HttpParameters = {}));
export var InputTransformer;
(function (InputTransformer) {
    /**
     * @internal
     */
    InputTransformer.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputTransformer || (InputTransformer = {}));
export var KinesisParameters;
(function (KinesisParameters) {
    /**
     * @internal
     */
    KinesisParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(KinesisParameters || (KinesisParameters = {}));
export var RedshiftDataParameters;
(function (RedshiftDataParameters) {
    /**
     * @internal
     */
    RedshiftDataParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RedshiftDataParameters || (RedshiftDataParameters = {}));
export var RetryPolicy;
(function (RetryPolicy) {
    /**
     * @internal
     */
    RetryPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryPolicy || (RetryPolicy = {}));
export var RunCommandTarget;
(function (RunCommandTarget) {
    /**
     * @internal
     */
    RunCommandTarget.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunCommandTarget || (RunCommandTarget = {}));
export var RunCommandParameters;
(function (RunCommandParameters) {
    /**
     * @internal
     */
    RunCommandParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RunCommandParameters || (RunCommandParameters = {}));
export var SageMakerPipelineParameter;
(function (SageMakerPipelineParameter) {
    /**
     * @internal
     */
    SageMakerPipelineParameter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SageMakerPipelineParameter || (SageMakerPipelineParameter = {}));
export var SageMakerPipelineParameters;
(function (SageMakerPipelineParameters) {
    /**
     * @internal
     */
    SageMakerPipelineParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SageMakerPipelineParameters || (SageMakerPipelineParameters = {}));
export var SqsParameters;
(function (SqsParameters) {
    /**
     * @internal
     */
    SqsParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqsParameters || (SqsParameters = {}));
export var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Target || (Target = {}));
export var ListTargetsByRuleResponse;
(function (ListTargetsByRuleResponse) {
    /**
     * @internal
     */
    ListTargetsByRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTargetsByRuleResponse || (ListTargetsByRuleResponse = {}));
export var PutEventsRequestEntry;
(function (PutEventsRequestEntry) {
    /**
     * @internal
     */
    PutEventsRequestEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventsRequestEntry || (PutEventsRequestEntry = {}));
export var PutEventsRequest;
(function (PutEventsRequest) {
    /**
     * @internal
     */
    PutEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventsRequest || (PutEventsRequest = {}));
export var PutEventsResultEntry;
(function (PutEventsResultEntry) {
    /**
     * @internal
     */
    PutEventsResultEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventsResultEntry || (PutEventsResultEntry = {}));
export var PutEventsResponse;
(function (PutEventsResponse) {
    /**
     * @internal
     */
    PutEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutEventsResponse || (PutEventsResponse = {}));
export var PutPartnerEventsRequestEntry;
(function (PutPartnerEventsRequestEntry) {
    /**
     * @internal
     */
    PutPartnerEventsRequestEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPartnerEventsRequestEntry || (PutPartnerEventsRequestEntry = {}));
export var PutPartnerEventsRequest;
(function (PutPartnerEventsRequest) {
    /**
     * @internal
     */
    PutPartnerEventsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPartnerEventsRequest || (PutPartnerEventsRequest = {}));
export var PutPartnerEventsResultEntry;
(function (PutPartnerEventsResultEntry) {
    /**
     * @internal
     */
    PutPartnerEventsResultEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPartnerEventsResultEntry || (PutPartnerEventsResultEntry = {}));
export var PutPartnerEventsResponse;
(function (PutPartnerEventsResponse) {
    /**
     * @internal
     */
    PutPartnerEventsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPartnerEventsResponse || (PutPartnerEventsResponse = {}));
export var PolicyLengthExceededException;
(function (PolicyLengthExceededException) {
    /**
     * @internal
     */
    PolicyLengthExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyLengthExceededException || (PolicyLengthExceededException = {}));
export var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Condition || (Condition = {}));
export var PutPermissionRequest;
(function (PutPermissionRequest) {
    /**
     * @internal
     */
    PutPermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPermissionRequest || (PutPermissionRequest = {}));
export var PutRuleRequest;
(function (PutRuleRequest) {
    /**
     * @internal
     */
    PutRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRuleRequest || (PutRuleRequest = {}));
export var PutRuleResponse;
(function (PutRuleResponse) {
    /**
     * @internal
     */
    PutRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutRuleResponse || (PutRuleResponse = {}));
export var PutTargetsRequest;
(function (PutTargetsRequest) {
    /**
     * @internal
     */
    PutTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTargetsRequest || (PutTargetsRequest = {}));
export var PutTargetsResultEntry;
(function (PutTargetsResultEntry) {
    /**
     * @internal
     */
    PutTargetsResultEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTargetsResultEntry || (PutTargetsResultEntry = {}));
export var PutTargetsResponse;
(function (PutTargetsResponse) {
    /**
     * @internal
     */
    PutTargetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutTargetsResponse || (PutTargetsResponse = {}));
export var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemovePermissionRequest || (RemovePermissionRequest = {}));
export var RemoveTargetsRequest;
(function (RemoveTargetsRequest) {
    /**
     * @internal
     */
    RemoveTargetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTargetsRequest || (RemoveTargetsRequest = {}));
export var RemoveTargetsResultEntry;
(function (RemoveTargetsResultEntry) {
    /**
     * @internal
     */
    RemoveTargetsResultEntry.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTargetsResultEntry || (RemoveTargetsResultEntry = {}));
export var RemoveTargetsResponse;
(function (RemoveTargetsResponse) {
    /**
     * @internal
     */
    RemoveTargetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RemoveTargetsResponse || (RemoveTargetsResponse = {}));
export var StartReplayRequest;
(function (StartReplayRequest) {
    /**
     * @internal
     */
    StartReplayRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplayRequest || (StartReplayRequest = {}));
export var StartReplayResponse;
(function (StartReplayResponse) {
    /**
     * @internal
     */
    StartReplayResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartReplayResponse || (StartReplayResponse = {}));
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
export var TestEventPatternRequest;
(function (TestEventPatternRequest) {
    /**
     * @internal
     */
    TestEventPatternRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestEventPatternRequest || (TestEventPatternRequest = {}));
export var TestEventPatternResponse;
(function (TestEventPatternResponse) {
    /**
     * @internal
     */
    TestEventPatternResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TestEventPatternResponse || (TestEventPatternResponse = {}));
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
export var UpdateApiDestinationRequest;
(function (UpdateApiDestinationRequest) {
    /**
     * @internal
     */
    UpdateApiDestinationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateApiDestinationRequest || (UpdateApiDestinationRequest = {}));
export var UpdateApiDestinationResponse;
(function (UpdateApiDestinationResponse) {
    /**
     * @internal
     */
    UpdateApiDestinationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateApiDestinationResponse || (UpdateApiDestinationResponse = {}));
export var UpdateArchiveRequest;
(function (UpdateArchiveRequest) {
    /**
     * @internal
     */
    UpdateArchiveRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateArchiveRequest || (UpdateArchiveRequest = {}));
export var UpdateArchiveResponse;
(function (UpdateArchiveResponse) {
    /**
     * @internal
     */
    UpdateArchiveResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateArchiveResponse || (UpdateArchiveResponse = {}));
export var UpdateConnectionApiKeyAuthRequestParameters;
(function (UpdateConnectionApiKeyAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionApiKeyAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionApiKeyAuthRequestParameters || (UpdateConnectionApiKeyAuthRequestParameters = {}));
export var UpdateConnectionBasicAuthRequestParameters;
(function (UpdateConnectionBasicAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionBasicAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionBasicAuthRequestParameters || (UpdateConnectionBasicAuthRequestParameters = {}));
export var UpdateConnectionOAuthClientRequestParameters;
(function (UpdateConnectionOAuthClientRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionOAuthClientRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionOAuthClientRequestParameters || (UpdateConnectionOAuthClientRequestParameters = {}));
export var UpdateConnectionOAuthRequestParameters;
(function (UpdateConnectionOAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionOAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionOAuthRequestParameters || (UpdateConnectionOAuthRequestParameters = {}));
export var UpdateConnectionAuthRequestParameters;
(function (UpdateConnectionAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionAuthRequestParameters.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionAuthRequestParameters || (UpdateConnectionAuthRequestParameters = {}));
export var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionRequest || (UpdateConnectionRequest = {}));
export var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    /**
     * @internal
     */
    UpdateConnectionResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateConnectionResponse || (UpdateConnectionResponse = {}));
//# sourceMappingURL=models_0.js.map