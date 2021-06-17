"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteConnectionRequest = exports.DeleteArchiveResponse = exports.DeleteArchiveRequest = exports.DeleteApiDestinationResponse = exports.DeleteApiDestinationRequest = exports.DeauthorizeConnectionResponse = exports.DeauthorizeConnectionRequest = exports.DeactivateEventSourceRequest = exports.CreatePartnerEventSourceResponse = exports.CreatePartnerEventSourceRequest = exports.CreateEventBusResponse = exports.CreateEventBusRequest = exports.Tag = exports.CreateConnectionResponse = exports.ConnectionState = exports.CreateConnectionRequest = exports.CreateConnectionAuthRequestParameters = exports.CreateConnectionOAuthRequestParameters = exports.ConnectionOAuthHttpMethod = exports.CreateConnectionOAuthClientRequestParameters = exports.ConnectionHttpParameters = exports.ConnectionQueryStringParameter = exports.ConnectionHeaderParameter = exports.ConnectionBodyParameter = exports.CreateConnectionBasicAuthRequestParameters = exports.CreateConnectionApiKeyAuthRequestParameters = exports.ConnectionAuthorizationType = exports.InvalidEventPatternException = exports.CreateArchiveResponse = exports.CreateArchiveRequest = exports.ResourceAlreadyExistsException = exports.LimitExceededException = exports.CreateApiDestinationResponse = exports.CreateApiDestinationRequest = exports.IllegalStatusException = exports.CancelReplayResponse = exports.ReplayState = exports.CancelReplayRequest = exports.AssignPublicIp = exports.Archive = exports.ArchiveState = exports.ApiDestination = exports.ApiDestinationHttpMethod = exports.ApiDestinationState = exports.ResourceNotFoundException = exports.OperationDisabledException = exports.InvalidStateException = exports.InternalException = exports.ConcurrentModificationException = exports.ActivateEventSourceRequest = void 0;
exports.ListPartnerEventSourcesResponse = exports.PartnerEventSource = exports.ListPartnerEventSourcesRequest = exports.ListPartnerEventSourceAccountsResponse = exports.PartnerEventSourceAccount = exports.ListPartnerEventSourceAccountsRequest = exports.ListEventSourcesResponse = exports.EventSource = exports.ListEventSourcesRequest = exports.ListEventBusesResponse = exports.EventBus = exports.ListEventBusesRequest = exports.ListConnectionsResponse = exports.Connection = exports.ListConnectionsRequest = exports.ListArchivesResponse = exports.ListArchivesRequest = exports.ListApiDestinationsResponse = exports.ListApiDestinationsRequest = exports.EnableRuleRequest = exports.DisableRuleRequest = exports.DescribeRuleResponse = exports.RuleState = exports.DescribeRuleRequest = exports.DescribeReplayResponse = exports.ReplayDestination = exports.DescribeReplayRequest = exports.DescribePartnerEventSourceResponse = exports.DescribePartnerEventSourceRequest = exports.DescribeEventSourceResponse = exports.EventSourceState = exports.DescribeEventSourceRequest = exports.DescribeEventBusResponse = exports.DescribeEventBusRequest = exports.DescribeConnectionResponse = exports.ConnectionAuthResponseParameters = exports.ConnectionOAuthResponseParameters = exports.ConnectionOAuthClientResponseParameters = exports.ConnectionBasicAuthResponseParameters = exports.ConnectionApiKeyAuthResponseParameters = exports.DescribeConnectionRequest = exports.DescribeArchiveResponse = exports.DescribeArchiveRequest = exports.DescribeApiDestinationResponse = exports.DescribeApiDestinationRequest = exports.ManagedRuleException = exports.DeleteRuleRequest = exports.DeletePartnerEventSourceRequest = exports.DeleteEventBusRequest = exports.DeleteConnectionResponse = void 0;
exports.RemoveTargetsResultEntry = exports.RemoveTargetsRequest = exports.RemovePermissionRequest = exports.PutTargetsResponse = exports.PutTargetsResultEntry = exports.PutTargetsRequest = exports.PutRuleResponse = exports.PutRuleRequest = exports.PutPermissionRequest = exports.Condition = exports.PolicyLengthExceededException = exports.PutPartnerEventsResponse = exports.PutPartnerEventsResultEntry = exports.PutPartnerEventsRequest = exports.PutPartnerEventsRequestEntry = exports.PutEventsResponse = exports.PutEventsResultEntry = exports.PutEventsRequest = exports.PutEventsRequestEntry = exports.ListTargetsByRuleResponse = exports.Target = exports.SqsParameters = exports.SageMakerPipelineParameters = exports.SageMakerPipelineParameter = exports.RunCommandParameters = exports.RunCommandTarget = exports.RetryPolicy = exports.RedshiftDataParameters = exports.KinesisParameters = exports.InputTransformer = exports.HttpParameters = exports.EcsParameters = exports.NetworkConfiguration = exports.AwsVpcConfiguration = exports.LaunchType = exports.DeadLetterConfig = exports.BatchParameters = exports.BatchRetryStrategy = exports.BatchArrayProperties = exports.ListTargetsByRuleRequest = exports.ListTagsForResourceResponse = exports.ListTagsForResourceRequest = exports.ListRulesResponse = exports.Rule = exports.ListRulesRequest = exports.ListRuleNamesByTargetResponse = exports.ListRuleNamesByTargetRequest = exports.ListReplaysResponse = exports.Replay = exports.ListReplaysRequest = void 0;
exports.UpdateConnectionResponse = exports.UpdateConnectionRequest = exports.UpdateConnectionAuthRequestParameters = exports.UpdateConnectionOAuthRequestParameters = exports.UpdateConnectionOAuthClientRequestParameters = exports.UpdateConnectionBasicAuthRequestParameters = exports.UpdateConnectionApiKeyAuthRequestParameters = exports.UpdateArchiveResponse = exports.UpdateArchiveRequest = exports.UpdateApiDestinationResponse = exports.UpdateApiDestinationRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TestEventPatternResponse = exports.TestEventPatternRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.StartReplayResponse = exports.StartReplayRequest = exports.RemoveTargetsResponse = void 0;
var ActivateEventSourceRequest;
(function (ActivateEventSourceRequest) {
    /**
     * @internal
     */
    ActivateEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivateEventSourceRequest = exports.ActivateEventSourceRequest || (exports.ActivateEventSourceRequest = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var InternalException;
(function (InternalException) {
    /**
     * @internal
     */
    InternalException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidStateException;
(function (InvalidStateException) {
    /**
     * @internal
     */
    InvalidStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var OperationDisabledException;
(function (OperationDisabledException) {
    /**
     * @internal
     */
    OperationDisabledException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OperationDisabledException = exports.OperationDisabledException || (exports.OperationDisabledException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ApiDestinationState;
(function (ApiDestinationState) {
    ApiDestinationState["ACTIVE"] = "ACTIVE";
    ApiDestinationState["INACTIVE"] = "INACTIVE";
})(ApiDestinationState = exports.ApiDestinationState || (exports.ApiDestinationState = {}));
var ApiDestinationHttpMethod;
(function (ApiDestinationHttpMethod) {
    ApiDestinationHttpMethod["DELETE"] = "DELETE";
    ApiDestinationHttpMethod["GET"] = "GET";
    ApiDestinationHttpMethod["HEAD"] = "HEAD";
    ApiDestinationHttpMethod["OPTIONS"] = "OPTIONS";
    ApiDestinationHttpMethod["PATCH"] = "PATCH";
    ApiDestinationHttpMethod["POST"] = "POST";
    ApiDestinationHttpMethod["PUT"] = "PUT";
})(ApiDestinationHttpMethod = exports.ApiDestinationHttpMethod || (exports.ApiDestinationHttpMethod = {}));
var ApiDestination;
(function (ApiDestination) {
    /**
     * @internal
     */
    ApiDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApiDestination = exports.ApiDestination || (exports.ApiDestination = {}));
var ArchiveState;
(function (ArchiveState) {
    ArchiveState["CREATE_FAILED"] = "CREATE_FAILED";
    ArchiveState["CREATING"] = "CREATING";
    ArchiveState["DISABLED"] = "DISABLED";
    ArchiveState["ENABLED"] = "ENABLED";
    ArchiveState["UPDATE_FAILED"] = "UPDATE_FAILED";
    ArchiveState["UPDATING"] = "UPDATING";
})(ArchiveState = exports.ArchiveState || (exports.ArchiveState = {}));
var Archive;
(function (Archive) {
    /**
     * @internal
     */
    Archive.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Archive = exports.Archive || (exports.Archive = {}));
var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp = exports.AssignPublicIp || (exports.AssignPublicIp = {}));
var CancelReplayRequest;
(function (CancelReplayRequest) {
    /**
     * @internal
     */
    CancelReplayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReplayRequest = exports.CancelReplayRequest || (exports.CancelReplayRequest = {}));
var ReplayState;
(function (ReplayState) {
    ReplayState["CANCELLED"] = "CANCELLED";
    ReplayState["CANCELLING"] = "CANCELLING";
    ReplayState["COMPLETED"] = "COMPLETED";
    ReplayState["FAILED"] = "FAILED";
    ReplayState["RUNNING"] = "RUNNING";
    ReplayState["STARTING"] = "STARTING";
})(ReplayState = exports.ReplayState || (exports.ReplayState = {}));
var CancelReplayResponse;
(function (CancelReplayResponse) {
    /**
     * @internal
     */
    CancelReplayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CancelReplayResponse = exports.CancelReplayResponse || (exports.CancelReplayResponse = {}));
var IllegalStatusException;
(function (IllegalStatusException) {
    /**
     * @internal
     */
    IllegalStatusException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IllegalStatusException = exports.IllegalStatusException || (exports.IllegalStatusException = {}));
var CreateApiDestinationRequest;
(function (CreateApiDestinationRequest) {
    /**
     * @internal
     */
    CreateApiDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApiDestinationRequest = exports.CreateApiDestinationRequest || (exports.CreateApiDestinationRequest = {}));
var CreateApiDestinationResponse;
(function (CreateApiDestinationResponse) {
    /**
     * @internal
     */
    CreateApiDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateApiDestinationResponse = exports.CreateApiDestinationResponse || (exports.CreateApiDestinationResponse = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    /**
     * @internal
     */
    ResourceAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var CreateArchiveRequest;
(function (CreateArchiveRequest) {
    /**
     * @internal
     */
    CreateArchiveRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateArchiveRequest = exports.CreateArchiveRequest || (exports.CreateArchiveRequest = {}));
var CreateArchiveResponse;
(function (CreateArchiveResponse) {
    /**
     * @internal
     */
    CreateArchiveResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateArchiveResponse = exports.CreateArchiveResponse || (exports.CreateArchiveResponse = {}));
var InvalidEventPatternException;
(function (InvalidEventPatternException) {
    /**
     * @internal
     */
    InvalidEventPatternException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEventPatternException = exports.InvalidEventPatternException || (exports.InvalidEventPatternException = {}));
var ConnectionAuthorizationType;
(function (ConnectionAuthorizationType) {
    ConnectionAuthorizationType["API_KEY"] = "API_KEY";
    ConnectionAuthorizationType["BASIC"] = "BASIC";
    ConnectionAuthorizationType["OAUTH_CLIENT_CREDENTIALS"] = "OAUTH_CLIENT_CREDENTIALS";
})(ConnectionAuthorizationType = exports.ConnectionAuthorizationType || (exports.ConnectionAuthorizationType = {}));
var CreateConnectionApiKeyAuthRequestParameters;
(function (CreateConnectionApiKeyAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionApiKeyAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionApiKeyAuthRequestParameters = exports.CreateConnectionApiKeyAuthRequestParameters || (exports.CreateConnectionApiKeyAuthRequestParameters = {}));
var CreateConnectionBasicAuthRequestParameters;
(function (CreateConnectionBasicAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionBasicAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionBasicAuthRequestParameters = exports.CreateConnectionBasicAuthRequestParameters || (exports.CreateConnectionBasicAuthRequestParameters = {}));
var ConnectionBodyParameter;
(function (ConnectionBodyParameter) {
    /**
     * @internal
     */
    ConnectionBodyParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionBodyParameter = exports.ConnectionBodyParameter || (exports.ConnectionBodyParameter = {}));
var ConnectionHeaderParameter;
(function (ConnectionHeaderParameter) {
    /**
     * @internal
     */
    ConnectionHeaderParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionHeaderParameter = exports.ConnectionHeaderParameter || (exports.ConnectionHeaderParameter = {}));
var ConnectionQueryStringParameter;
(function (ConnectionQueryStringParameter) {
    /**
     * @internal
     */
    ConnectionQueryStringParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionQueryStringParameter = exports.ConnectionQueryStringParameter || (exports.ConnectionQueryStringParameter = {}));
var ConnectionHttpParameters;
(function (ConnectionHttpParameters) {
    /**
     * @internal
     */
    ConnectionHttpParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionHttpParameters = exports.ConnectionHttpParameters || (exports.ConnectionHttpParameters = {}));
var CreateConnectionOAuthClientRequestParameters;
(function (CreateConnectionOAuthClientRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionOAuthClientRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionOAuthClientRequestParameters = exports.CreateConnectionOAuthClientRequestParameters || (exports.CreateConnectionOAuthClientRequestParameters = {}));
var ConnectionOAuthHttpMethod;
(function (ConnectionOAuthHttpMethod) {
    ConnectionOAuthHttpMethod["GET"] = "GET";
    ConnectionOAuthHttpMethod["POST"] = "POST";
    ConnectionOAuthHttpMethod["PUT"] = "PUT";
})(ConnectionOAuthHttpMethod = exports.ConnectionOAuthHttpMethod || (exports.ConnectionOAuthHttpMethod = {}));
var CreateConnectionOAuthRequestParameters;
(function (CreateConnectionOAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionOAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionOAuthRequestParameters = exports.CreateConnectionOAuthRequestParameters || (exports.CreateConnectionOAuthRequestParameters = {}));
var CreateConnectionAuthRequestParameters;
(function (CreateConnectionAuthRequestParameters) {
    /**
     * @internal
     */
    CreateConnectionAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionAuthRequestParameters = exports.CreateConnectionAuthRequestParameters || (exports.CreateConnectionAuthRequestParameters = {}));
var CreateConnectionRequest;
(function (CreateConnectionRequest) {
    /**
     * @internal
     */
    CreateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionRequest = exports.CreateConnectionRequest || (exports.CreateConnectionRequest = {}));
var ConnectionState;
(function (ConnectionState) {
    ConnectionState["AUTHORIZED"] = "AUTHORIZED";
    ConnectionState["AUTHORIZING"] = "AUTHORIZING";
    ConnectionState["CREATING"] = "CREATING";
    ConnectionState["DEAUTHORIZED"] = "DEAUTHORIZED";
    ConnectionState["DEAUTHORIZING"] = "DEAUTHORIZING";
    ConnectionState["DELETING"] = "DELETING";
    ConnectionState["UPDATING"] = "UPDATING";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
var CreateConnectionResponse;
(function (CreateConnectionResponse) {
    /**
     * @internal
     */
    CreateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateConnectionResponse = exports.CreateConnectionResponse || (exports.CreateConnectionResponse = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateEventBusRequest;
(function (CreateEventBusRequest) {
    /**
     * @internal
     */
    CreateEventBusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventBusRequest = exports.CreateEventBusRequest || (exports.CreateEventBusRequest = {}));
var CreateEventBusResponse;
(function (CreateEventBusResponse) {
    /**
     * @internal
     */
    CreateEventBusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateEventBusResponse = exports.CreateEventBusResponse || (exports.CreateEventBusResponse = {}));
var CreatePartnerEventSourceRequest;
(function (CreatePartnerEventSourceRequest) {
    /**
     * @internal
     */
    CreatePartnerEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartnerEventSourceRequest = exports.CreatePartnerEventSourceRequest || (exports.CreatePartnerEventSourceRequest = {}));
var CreatePartnerEventSourceResponse;
(function (CreatePartnerEventSourceResponse) {
    /**
     * @internal
     */
    CreatePartnerEventSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePartnerEventSourceResponse = exports.CreatePartnerEventSourceResponse || (exports.CreatePartnerEventSourceResponse = {}));
var DeactivateEventSourceRequest;
(function (DeactivateEventSourceRequest) {
    /**
     * @internal
     */
    DeactivateEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivateEventSourceRequest = exports.DeactivateEventSourceRequest || (exports.DeactivateEventSourceRequest = {}));
var DeauthorizeConnectionRequest;
(function (DeauthorizeConnectionRequest) {
    /**
     * @internal
     */
    DeauthorizeConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeauthorizeConnectionRequest = exports.DeauthorizeConnectionRequest || (exports.DeauthorizeConnectionRequest = {}));
var DeauthorizeConnectionResponse;
(function (DeauthorizeConnectionResponse) {
    /**
     * @internal
     */
    DeauthorizeConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeauthorizeConnectionResponse = exports.DeauthorizeConnectionResponse || (exports.DeauthorizeConnectionResponse = {}));
var DeleteApiDestinationRequest;
(function (DeleteApiDestinationRequest) {
    /**
     * @internal
     */
    DeleteApiDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApiDestinationRequest = exports.DeleteApiDestinationRequest || (exports.DeleteApiDestinationRequest = {}));
var DeleteApiDestinationResponse;
(function (DeleteApiDestinationResponse) {
    /**
     * @internal
     */
    DeleteApiDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteApiDestinationResponse = exports.DeleteApiDestinationResponse || (exports.DeleteApiDestinationResponse = {}));
var DeleteArchiveRequest;
(function (DeleteArchiveRequest) {
    /**
     * @internal
     */
    DeleteArchiveRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteArchiveRequest = exports.DeleteArchiveRequest || (exports.DeleteArchiveRequest = {}));
var DeleteArchiveResponse;
(function (DeleteArchiveResponse) {
    /**
     * @internal
     */
    DeleteArchiveResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteArchiveResponse = exports.DeleteArchiveResponse || (exports.DeleteArchiveResponse = {}));
var DeleteConnectionRequest;
(function (DeleteConnectionRequest) {
    /**
     * @internal
     */
    DeleteConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionRequest = exports.DeleteConnectionRequest || (exports.DeleteConnectionRequest = {}));
var DeleteConnectionResponse;
(function (DeleteConnectionResponse) {
    /**
     * @internal
     */
    DeleteConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteConnectionResponse = exports.DeleteConnectionResponse || (exports.DeleteConnectionResponse = {}));
var DeleteEventBusRequest;
(function (DeleteEventBusRequest) {
    /**
     * @internal
     */
    DeleteEventBusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteEventBusRequest = exports.DeleteEventBusRequest || (exports.DeleteEventBusRequest = {}));
var DeletePartnerEventSourceRequest;
(function (DeletePartnerEventSourceRequest) {
    /**
     * @internal
     */
    DeletePartnerEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePartnerEventSourceRequest = exports.DeletePartnerEventSourceRequest || (exports.DeletePartnerEventSourceRequest = {}));
var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleRequest = exports.DeleteRuleRequest || (exports.DeleteRuleRequest = {}));
var ManagedRuleException;
(function (ManagedRuleException) {
    /**
     * @internal
     */
    ManagedRuleException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedRuleException = exports.ManagedRuleException || (exports.ManagedRuleException = {}));
var DescribeApiDestinationRequest;
(function (DescribeApiDestinationRequest) {
    /**
     * @internal
     */
    DescribeApiDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApiDestinationRequest = exports.DescribeApiDestinationRequest || (exports.DescribeApiDestinationRequest = {}));
var DescribeApiDestinationResponse;
(function (DescribeApiDestinationResponse) {
    /**
     * @internal
     */
    DescribeApiDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeApiDestinationResponse = exports.DescribeApiDestinationResponse || (exports.DescribeApiDestinationResponse = {}));
var DescribeArchiveRequest;
(function (DescribeArchiveRequest) {
    /**
     * @internal
     */
    DescribeArchiveRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeArchiveRequest = exports.DescribeArchiveRequest || (exports.DescribeArchiveRequest = {}));
var DescribeArchiveResponse;
(function (DescribeArchiveResponse) {
    /**
     * @internal
     */
    DescribeArchiveResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeArchiveResponse = exports.DescribeArchiveResponse || (exports.DescribeArchiveResponse = {}));
var DescribeConnectionRequest;
(function (DescribeConnectionRequest) {
    /**
     * @internal
     */
    DescribeConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionRequest = exports.DescribeConnectionRequest || (exports.DescribeConnectionRequest = {}));
var ConnectionApiKeyAuthResponseParameters;
(function (ConnectionApiKeyAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionApiKeyAuthResponseParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionApiKeyAuthResponseParameters = exports.ConnectionApiKeyAuthResponseParameters || (exports.ConnectionApiKeyAuthResponseParameters = {}));
var ConnectionBasicAuthResponseParameters;
(function (ConnectionBasicAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionBasicAuthResponseParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionBasicAuthResponseParameters = exports.ConnectionBasicAuthResponseParameters || (exports.ConnectionBasicAuthResponseParameters = {}));
var ConnectionOAuthClientResponseParameters;
(function (ConnectionOAuthClientResponseParameters) {
    /**
     * @internal
     */
    ConnectionOAuthClientResponseParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionOAuthClientResponseParameters = exports.ConnectionOAuthClientResponseParameters || (exports.ConnectionOAuthClientResponseParameters = {}));
var ConnectionOAuthResponseParameters;
(function (ConnectionOAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionOAuthResponseParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionOAuthResponseParameters = exports.ConnectionOAuthResponseParameters || (exports.ConnectionOAuthResponseParameters = {}));
var ConnectionAuthResponseParameters;
(function (ConnectionAuthResponseParameters) {
    /**
     * @internal
     */
    ConnectionAuthResponseParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConnectionAuthResponseParameters = exports.ConnectionAuthResponseParameters || (exports.ConnectionAuthResponseParameters = {}));
var DescribeConnectionResponse;
(function (DescribeConnectionResponse) {
    /**
     * @internal
     */
    DescribeConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeConnectionResponse = exports.DescribeConnectionResponse || (exports.DescribeConnectionResponse = {}));
var DescribeEventBusRequest;
(function (DescribeEventBusRequest) {
    /**
     * @internal
     */
    DescribeEventBusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventBusRequest = exports.DescribeEventBusRequest || (exports.DescribeEventBusRequest = {}));
var DescribeEventBusResponse;
(function (DescribeEventBusResponse) {
    /**
     * @internal
     */
    DescribeEventBusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventBusResponse = exports.DescribeEventBusResponse || (exports.DescribeEventBusResponse = {}));
var DescribeEventSourceRequest;
(function (DescribeEventSourceRequest) {
    /**
     * @internal
     */
    DescribeEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventSourceRequest = exports.DescribeEventSourceRequest || (exports.DescribeEventSourceRequest = {}));
var EventSourceState;
(function (EventSourceState) {
    EventSourceState["ACTIVE"] = "ACTIVE";
    EventSourceState["DELETED"] = "DELETED";
    EventSourceState["PENDING"] = "PENDING";
})(EventSourceState = exports.EventSourceState || (exports.EventSourceState = {}));
var DescribeEventSourceResponse;
(function (DescribeEventSourceResponse) {
    /**
     * @internal
     */
    DescribeEventSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEventSourceResponse = exports.DescribeEventSourceResponse || (exports.DescribeEventSourceResponse = {}));
var DescribePartnerEventSourceRequest;
(function (DescribePartnerEventSourceRequest) {
    /**
     * @internal
     */
    DescribePartnerEventSourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePartnerEventSourceRequest = exports.DescribePartnerEventSourceRequest || (exports.DescribePartnerEventSourceRequest = {}));
var DescribePartnerEventSourceResponse;
(function (DescribePartnerEventSourceResponse) {
    /**
     * @internal
     */
    DescribePartnerEventSourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePartnerEventSourceResponse = exports.DescribePartnerEventSourceResponse || (exports.DescribePartnerEventSourceResponse = {}));
var DescribeReplayRequest;
(function (DescribeReplayRequest) {
    /**
     * @internal
     */
    DescribeReplayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplayRequest = exports.DescribeReplayRequest || (exports.DescribeReplayRequest = {}));
var ReplayDestination;
(function (ReplayDestination) {
    /**
     * @internal
     */
    ReplayDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplayDestination = exports.ReplayDestination || (exports.ReplayDestination = {}));
var DescribeReplayResponse;
(function (DescribeReplayResponse) {
    /**
     * @internal
     */
    DescribeReplayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeReplayResponse = exports.DescribeReplayResponse || (exports.DescribeReplayResponse = {}));
var DescribeRuleRequest;
(function (DescribeRuleRequest) {
    /**
     * @internal
     */
    DescribeRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuleRequest = exports.DescribeRuleRequest || (exports.DescribeRuleRequest = {}));
var RuleState;
(function (RuleState) {
    RuleState["DISABLED"] = "DISABLED";
    RuleState["ENABLED"] = "ENABLED";
})(RuleState = exports.RuleState || (exports.RuleState = {}));
var DescribeRuleResponse;
(function (DescribeRuleResponse) {
    /**
     * @internal
     */
    DescribeRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeRuleResponse = exports.DescribeRuleResponse || (exports.DescribeRuleResponse = {}));
var DisableRuleRequest;
(function (DisableRuleRequest) {
    /**
     * @internal
     */
    DisableRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableRuleRequest = exports.DisableRuleRequest || (exports.DisableRuleRequest = {}));
var EnableRuleRequest;
(function (EnableRuleRequest) {
    /**
     * @internal
     */
    EnableRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableRuleRequest = exports.EnableRuleRequest || (exports.EnableRuleRequest = {}));
var ListApiDestinationsRequest;
(function (ListApiDestinationsRequest) {
    /**
     * @internal
     */
    ListApiDestinationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApiDestinationsRequest = exports.ListApiDestinationsRequest || (exports.ListApiDestinationsRequest = {}));
var ListApiDestinationsResponse;
(function (ListApiDestinationsResponse) {
    /**
     * @internal
     */
    ListApiDestinationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListApiDestinationsResponse = exports.ListApiDestinationsResponse || (exports.ListApiDestinationsResponse = {}));
var ListArchivesRequest;
(function (ListArchivesRequest) {
    /**
     * @internal
     */
    ListArchivesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArchivesRequest = exports.ListArchivesRequest || (exports.ListArchivesRequest = {}));
var ListArchivesResponse;
(function (ListArchivesResponse) {
    /**
     * @internal
     */
    ListArchivesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListArchivesResponse = exports.ListArchivesResponse || (exports.ListArchivesResponse = {}));
var ListConnectionsRequest;
(function (ListConnectionsRequest) {
    /**
     * @internal
     */
    ListConnectionsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectionsRequest = exports.ListConnectionsRequest || (exports.ListConnectionsRequest = {}));
var Connection;
(function (Connection) {
    /**
     * @internal
     */
    Connection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Connection = exports.Connection || (exports.Connection = {}));
var ListConnectionsResponse;
(function (ListConnectionsResponse) {
    /**
     * @internal
     */
    ListConnectionsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListConnectionsResponse = exports.ListConnectionsResponse || (exports.ListConnectionsResponse = {}));
var ListEventBusesRequest;
(function (ListEventBusesRequest) {
    /**
     * @internal
     */
    ListEventBusesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventBusesRequest = exports.ListEventBusesRequest || (exports.ListEventBusesRequest = {}));
var EventBus;
(function (EventBus) {
    /**
     * @internal
     */
    EventBus.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventBus = exports.EventBus || (exports.EventBus = {}));
var ListEventBusesResponse;
(function (ListEventBusesResponse) {
    /**
     * @internal
     */
    ListEventBusesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventBusesResponse = exports.ListEventBusesResponse || (exports.ListEventBusesResponse = {}));
var ListEventSourcesRequest;
(function (ListEventSourcesRequest) {
    /**
     * @internal
     */
    ListEventSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSourcesRequest = exports.ListEventSourcesRequest || (exports.ListEventSourcesRequest = {}));
var EventSource;
(function (EventSource) {
    /**
     * @internal
     */
    EventSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EventSource = exports.EventSource || (exports.EventSource = {}));
var ListEventSourcesResponse;
(function (ListEventSourcesResponse) {
    /**
     * @internal
     */
    ListEventSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListEventSourcesResponse = exports.ListEventSourcesResponse || (exports.ListEventSourcesResponse = {}));
var ListPartnerEventSourceAccountsRequest;
(function (ListPartnerEventSourceAccountsRequest) {
    /**
     * @internal
     */
    ListPartnerEventSourceAccountsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartnerEventSourceAccountsRequest = exports.ListPartnerEventSourceAccountsRequest || (exports.ListPartnerEventSourceAccountsRequest = {}));
var PartnerEventSourceAccount;
(function (PartnerEventSourceAccount) {
    /**
     * @internal
     */
    PartnerEventSourceAccount.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerEventSourceAccount = exports.PartnerEventSourceAccount || (exports.PartnerEventSourceAccount = {}));
var ListPartnerEventSourceAccountsResponse;
(function (ListPartnerEventSourceAccountsResponse) {
    /**
     * @internal
     */
    ListPartnerEventSourceAccountsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartnerEventSourceAccountsResponse = exports.ListPartnerEventSourceAccountsResponse || (exports.ListPartnerEventSourceAccountsResponse = {}));
var ListPartnerEventSourcesRequest;
(function (ListPartnerEventSourcesRequest) {
    /**
     * @internal
     */
    ListPartnerEventSourcesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartnerEventSourcesRequest = exports.ListPartnerEventSourcesRequest || (exports.ListPartnerEventSourcesRequest = {}));
var PartnerEventSource;
(function (PartnerEventSource) {
    /**
     * @internal
     */
    PartnerEventSource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PartnerEventSource = exports.PartnerEventSource || (exports.PartnerEventSource = {}));
var ListPartnerEventSourcesResponse;
(function (ListPartnerEventSourcesResponse) {
    /**
     * @internal
     */
    ListPartnerEventSourcesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPartnerEventSourcesResponse = exports.ListPartnerEventSourcesResponse || (exports.ListPartnerEventSourcesResponse = {}));
var ListReplaysRequest;
(function (ListReplaysRequest) {
    /**
     * @internal
     */
    ListReplaysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReplaysRequest = exports.ListReplaysRequest || (exports.ListReplaysRequest = {}));
var Replay;
(function (Replay) {
    /**
     * @internal
     */
    Replay.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Replay = exports.Replay || (exports.Replay = {}));
var ListReplaysResponse;
(function (ListReplaysResponse) {
    /**
     * @internal
     */
    ListReplaysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListReplaysResponse = exports.ListReplaysResponse || (exports.ListReplaysResponse = {}));
var ListRuleNamesByTargetRequest;
(function (ListRuleNamesByTargetRequest) {
    /**
     * @internal
     */
    ListRuleNamesByTargetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleNamesByTargetRequest = exports.ListRuleNamesByTargetRequest || (exports.ListRuleNamesByTargetRequest = {}));
var ListRuleNamesByTargetResponse;
(function (ListRuleNamesByTargetResponse) {
    /**
     * @internal
     */
    ListRuleNamesByTargetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleNamesByTargetResponse = exports.ListRuleNamesByTargetResponse || (exports.ListRuleNamesByTargetResponse = {}));
var ListRulesRequest;
(function (ListRulesRequest) {
    /**
     * @internal
     */
    ListRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesRequest = exports.ListRulesRequest || (exports.ListRulesRequest = {}));
var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rule = exports.Rule || (exports.Rule = {}));
var ListRulesResponse;
(function (ListRulesResponse) {
    /**
     * @internal
     */
    ListRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesResponse = exports.ListRulesResponse || (exports.ListRulesResponse = {}));
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
var ListTargetsByRuleRequest;
(function (ListTargetsByRuleRequest) {
    /**
     * @internal
     */
    ListTargetsByRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsByRuleRequest = exports.ListTargetsByRuleRequest || (exports.ListTargetsByRuleRequest = {}));
var BatchArrayProperties;
(function (BatchArrayProperties) {
    /**
     * @internal
     */
    BatchArrayProperties.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchArrayProperties = exports.BatchArrayProperties || (exports.BatchArrayProperties = {}));
var BatchRetryStrategy;
(function (BatchRetryStrategy) {
    /**
     * @internal
     */
    BatchRetryStrategy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchRetryStrategy = exports.BatchRetryStrategy || (exports.BatchRetryStrategy = {}));
var BatchParameters;
(function (BatchParameters) {
    /**
     * @internal
     */
    BatchParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchParameters = exports.BatchParameters || (exports.BatchParameters = {}));
var DeadLetterConfig;
(function (DeadLetterConfig) {
    /**
     * @internal
     */
    DeadLetterConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeadLetterConfig = exports.DeadLetterConfig || (exports.DeadLetterConfig = {}));
var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType = exports.LaunchType || (exports.LaunchType = {}));
var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    /**
     * @internal
     */
    AwsVpcConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AwsVpcConfiguration = exports.AwsVpcConfiguration || (exports.AwsVpcConfiguration = {}));
var NetworkConfiguration;
(function (NetworkConfiguration) {
    /**
     * @internal
     */
    NetworkConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {}));
var EcsParameters;
(function (EcsParameters) {
    /**
     * @internal
     */
    EcsParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EcsParameters = exports.EcsParameters || (exports.EcsParameters = {}));
var HttpParameters;
(function (HttpParameters) {
    /**
     * @internal
     */
    HttpParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HttpParameters = exports.HttpParameters || (exports.HttpParameters = {}));
var InputTransformer;
(function (InputTransformer) {
    /**
     * @internal
     */
    InputTransformer.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputTransformer = exports.InputTransformer || (exports.InputTransformer = {}));
var KinesisParameters;
(function (KinesisParameters) {
    /**
     * @internal
     */
    KinesisParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisParameters = exports.KinesisParameters || (exports.KinesisParameters = {}));
var RedshiftDataParameters;
(function (RedshiftDataParameters) {
    /**
     * @internal
     */
    RedshiftDataParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RedshiftDataParameters = exports.RedshiftDataParameters || (exports.RedshiftDataParameters = {}));
var RetryPolicy;
(function (RetryPolicy) {
    /**
     * @internal
     */
    RetryPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryPolicy = exports.RetryPolicy || (exports.RetryPolicy = {}));
var RunCommandTarget;
(function (RunCommandTarget) {
    /**
     * @internal
     */
    RunCommandTarget.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunCommandTarget = exports.RunCommandTarget || (exports.RunCommandTarget = {}));
var RunCommandParameters;
(function (RunCommandParameters) {
    /**
     * @internal
     */
    RunCommandParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RunCommandParameters = exports.RunCommandParameters || (exports.RunCommandParameters = {}));
var SageMakerPipelineParameter;
(function (SageMakerPipelineParameter) {
    /**
     * @internal
     */
    SageMakerPipelineParameter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SageMakerPipelineParameter = exports.SageMakerPipelineParameter || (exports.SageMakerPipelineParameter = {}));
var SageMakerPipelineParameters;
(function (SageMakerPipelineParameters) {
    /**
     * @internal
     */
    SageMakerPipelineParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SageMakerPipelineParameters = exports.SageMakerPipelineParameters || (exports.SageMakerPipelineParameters = {}));
var SqsParameters;
(function (SqsParameters) {
    /**
     * @internal
     */
    SqsParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqsParameters = exports.SqsParameters || (exports.SqsParameters = {}));
var Target;
(function (Target) {
    /**
     * @internal
     */
    Target.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Target = exports.Target || (exports.Target = {}));
var ListTargetsByRuleResponse;
(function (ListTargetsByRuleResponse) {
    /**
     * @internal
     */
    ListTargetsByRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTargetsByRuleResponse = exports.ListTargetsByRuleResponse || (exports.ListTargetsByRuleResponse = {}));
var PutEventsRequestEntry;
(function (PutEventsRequestEntry) {
    /**
     * @internal
     */
    PutEventsRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsRequestEntry = exports.PutEventsRequestEntry || (exports.PutEventsRequestEntry = {}));
var PutEventsRequest;
(function (PutEventsRequest) {
    /**
     * @internal
     */
    PutEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsRequest = exports.PutEventsRequest || (exports.PutEventsRequest = {}));
var PutEventsResultEntry;
(function (PutEventsResultEntry) {
    /**
     * @internal
     */
    PutEventsResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsResultEntry = exports.PutEventsResultEntry || (exports.PutEventsResultEntry = {}));
var PutEventsResponse;
(function (PutEventsResponse) {
    /**
     * @internal
     */
    PutEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutEventsResponse = exports.PutEventsResponse || (exports.PutEventsResponse = {}));
var PutPartnerEventsRequestEntry;
(function (PutPartnerEventsRequestEntry) {
    /**
     * @internal
     */
    PutPartnerEventsRequestEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPartnerEventsRequestEntry = exports.PutPartnerEventsRequestEntry || (exports.PutPartnerEventsRequestEntry = {}));
var PutPartnerEventsRequest;
(function (PutPartnerEventsRequest) {
    /**
     * @internal
     */
    PutPartnerEventsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPartnerEventsRequest = exports.PutPartnerEventsRequest || (exports.PutPartnerEventsRequest = {}));
var PutPartnerEventsResultEntry;
(function (PutPartnerEventsResultEntry) {
    /**
     * @internal
     */
    PutPartnerEventsResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPartnerEventsResultEntry = exports.PutPartnerEventsResultEntry || (exports.PutPartnerEventsResultEntry = {}));
var PutPartnerEventsResponse;
(function (PutPartnerEventsResponse) {
    /**
     * @internal
     */
    PutPartnerEventsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPartnerEventsResponse = exports.PutPartnerEventsResponse || (exports.PutPartnerEventsResponse = {}));
var PolicyLengthExceededException;
(function (PolicyLengthExceededException) {
    /**
     * @internal
     */
    PolicyLengthExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyLengthExceededException = exports.PolicyLengthExceededException || (exports.PolicyLengthExceededException = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var PutPermissionRequest;
(function (PutPermissionRequest) {
    /**
     * @internal
     */
    PutPermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPermissionRequest = exports.PutPermissionRequest || (exports.PutPermissionRequest = {}));
var PutRuleRequest;
(function (PutRuleRequest) {
    /**
     * @internal
     */
    PutRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRuleRequest = exports.PutRuleRequest || (exports.PutRuleRequest = {}));
var PutRuleResponse;
(function (PutRuleResponse) {
    /**
     * @internal
     */
    PutRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutRuleResponse = exports.PutRuleResponse || (exports.PutRuleResponse = {}));
var PutTargetsRequest;
(function (PutTargetsRequest) {
    /**
     * @internal
     */
    PutTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTargetsRequest = exports.PutTargetsRequest || (exports.PutTargetsRequest = {}));
var PutTargetsResultEntry;
(function (PutTargetsResultEntry) {
    /**
     * @internal
     */
    PutTargetsResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTargetsResultEntry = exports.PutTargetsResultEntry || (exports.PutTargetsResultEntry = {}));
var PutTargetsResponse;
(function (PutTargetsResponse) {
    /**
     * @internal
     */
    PutTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutTargetsResponse = exports.PutTargetsResponse || (exports.PutTargetsResponse = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    /**
     * @internal
     */
    RemovePermissionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemovePermissionRequest = exports.RemovePermissionRequest || (exports.RemovePermissionRequest = {}));
var RemoveTargetsRequest;
(function (RemoveTargetsRequest) {
    /**
     * @internal
     */
    RemoveTargetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTargetsRequest = exports.RemoveTargetsRequest || (exports.RemoveTargetsRequest = {}));
var RemoveTargetsResultEntry;
(function (RemoveTargetsResultEntry) {
    /**
     * @internal
     */
    RemoveTargetsResultEntry.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTargetsResultEntry = exports.RemoveTargetsResultEntry || (exports.RemoveTargetsResultEntry = {}));
var RemoveTargetsResponse;
(function (RemoveTargetsResponse) {
    /**
     * @internal
     */
    RemoveTargetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTargetsResponse = exports.RemoveTargetsResponse || (exports.RemoveTargetsResponse = {}));
var StartReplayRequest;
(function (StartReplayRequest) {
    /**
     * @internal
     */
    StartReplayRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplayRequest = exports.StartReplayRequest || (exports.StartReplayRequest = {}));
var StartReplayResponse;
(function (StartReplayResponse) {
    /**
     * @internal
     */
    StartReplayResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartReplayResponse = exports.StartReplayResponse || (exports.StartReplayResponse = {}));
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
var TestEventPatternRequest;
(function (TestEventPatternRequest) {
    /**
     * @internal
     */
    TestEventPatternRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestEventPatternRequest = exports.TestEventPatternRequest || (exports.TestEventPatternRequest = {}));
var TestEventPatternResponse;
(function (TestEventPatternResponse) {
    /**
     * @internal
     */
    TestEventPatternResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TestEventPatternResponse = exports.TestEventPatternResponse || (exports.TestEventPatternResponse = {}));
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
var UpdateApiDestinationRequest;
(function (UpdateApiDestinationRequest) {
    /**
     * @internal
     */
    UpdateApiDestinationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApiDestinationRequest = exports.UpdateApiDestinationRequest || (exports.UpdateApiDestinationRequest = {}));
var UpdateApiDestinationResponse;
(function (UpdateApiDestinationResponse) {
    /**
     * @internal
     */
    UpdateApiDestinationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateApiDestinationResponse = exports.UpdateApiDestinationResponse || (exports.UpdateApiDestinationResponse = {}));
var UpdateArchiveRequest;
(function (UpdateArchiveRequest) {
    /**
     * @internal
     */
    UpdateArchiveRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateArchiveRequest = exports.UpdateArchiveRequest || (exports.UpdateArchiveRequest = {}));
var UpdateArchiveResponse;
(function (UpdateArchiveResponse) {
    /**
     * @internal
     */
    UpdateArchiveResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateArchiveResponse = exports.UpdateArchiveResponse || (exports.UpdateArchiveResponse = {}));
var UpdateConnectionApiKeyAuthRequestParameters;
(function (UpdateConnectionApiKeyAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionApiKeyAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionApiKeyAuthRequestParameters = exports.UpdateConnectionApiKeyAuthRequestParameters || (exports.UpdateConnectionApiKeyAuthRequestParameters = {}));
var UpdateConnectionBasicAuthRequestParameters;
(function (UpdateConnectionBasicAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionBasicAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionBasicAuthRequestParameters = exports.UpdateConnectionBasicAuthRequestParameters || (exports.UpdateConnectionBasicAuthRequestParameters = {}));
var UpdateConnectionOAuthClientRequestParameters;
(function (UpdateConnectionOAuthClientRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionOAuthClientRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionOAuthClientRequestParameters = exports.UpdateConnectionOAuthClientRequestParameters || (exports.UpdateConnectionOAuthClientRequestParameters = {}));
var UpdateConnectionOAuthRequestParameters;
(function (UpdateConnectionOAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionOAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionOAuthRequestParameters = exports.UpdateConnectionOAuthRequestParameters || (exports.UpdateConnectionOAuthRequestParameters = {}));
var UpdateConnectionAuthRequestParameters;
(function (UpdateConnectionAuthRequestParameters) {
    /**
     * @internal
     */
    UpdateConnectionAuthRequestParameters.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionAuthRequestParameters = exports.UpdateConnectionAuthRequestParameters || (exports.UpdateConnectionAuthRequestParameters = {}));
var UpdateConnectionRequest;
(function (UpdateConnectionRequest) {
    /**
     * @internal
     */
    UpdateConnectionRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionRequest = exports.UpdateConnectionRequest || (exports.UpdateConnectionRequest = {}));
var UpdateConnectionResponse;
(function (UpdateConnectionResponse) {
    /**
     * @internal
     */
    UpdateConnectionResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateConnectionResponse = exports.UpdateConnectionResponse || (exports.UpdateConnectionResponse = {}));
//# sourceMappingURL=models_0.js.map