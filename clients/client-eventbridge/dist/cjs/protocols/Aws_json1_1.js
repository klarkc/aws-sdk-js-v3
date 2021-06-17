"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UpdateArchiveCommand = exports.serializeAws_json1_1UpdateApiDestinationCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TestEventPatternCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StartReplayCommand = exports.serializeAws_json1_1RemoveTargetsCommand = exports.serializeAws_json1_1RemovePermissionCommand = exports.serializeAws_json1_1PutTargetsCommand = exports.serializeAws_json1_1PutRuleCommand = exports.serializeAws_json1_1PutPermissionCommand = exports.serializeAws_json1_1PutPartnerEventsCommand = exports.serializeAws_json1_1PutEventsCommand = exports.serializeAws_json1_1ListTargetsByRuleCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListRulesCommand = exports.serializeAws_json1_1ListRuleNamesByTargetCommand = exports.serializeAws_json1_1ListReplaysCommand = exports.serializeAws_json1_1ListPartnerEventSourcesCommand = exports.serializeAws_json1_1ListPartnerEventSourceAccountsCommand = exports.serializeAws_json1_1ListEventSourcesCommand = exports.serializeAws_json1_1ListEventBusesCommand = exports.serializeAws_json1_1ListConnectionsCommand = exports.serializeAws_json1_1ListArchivesCommand = exports.serializeAws_json1_1ListApiDestinationsCommand = exports.serializeAws_json1_1EnableRuleCommand = exports.serializeAws_json1_1DisableRuleCommand = exports.serializeAws_json1_1DescribeRuleCommand = exports.serializeAws_json1_1DescribeReplayCommand = exports.serializeAws_json1_1DescribePartnerEventSourceCommand = exports.serializeAws_json1_1DescribeEventSourceCommand = exports.serializeAws_json1_1DescribeEventBusCommand = exports.serializeAws_json1_1DescribeConnectionCommand = exports.serializeAws_json1_1DescribeArchiveCommand = exports.serializeAws_json1_1DescribeApiDestinationCommand = exports.serializeAws_json1_1DeleteRuleCommand = exports.serializeAws_json1_1DeletePartnerEventSourceCommand = exports.serializeAws_json1_1DeleteEventBusCommand = exports.serializeAws_json1_1DeleteConnectionCommand = exports.serializeAws_json1_1DeleteArchiveCommand = exports.serializeAws_json1_1DeleteApiDestinationCommand = exports.serializeAws_json1_1DeauthorizeConnectionCommand = exports.serializeAws_json1_1DeactivateEventSourceCommand = exports.serializeAws_json1_1CreatePartnerEventSourceCommand = exports.serializeAws_json1_1CreateEventBusCommand = exports.serializeAws_json1_1CreateConnectionCommand = exports.serializeAws_json1_1CreateArchiveCommand = exports.serializeAws_json1_1CreateApiDestinationCommand = exports.serializeAws_json1_1CancelReplayCommand = exports.serializeAws_json1_1ActivateEventSourceCommand = void 0;
exports.deserializeAws_json1_1UpdateApiDestinationCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TestEventPatternCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StartReplayCommand = exports.deserializeAws_json1_1RemoveTargetsCommand = exports.deserializeAws_json1_1RemovePermissionCommand = exports.deserializeAws_json1_1PutTargetsCommand = exports.deserializeAws_json1_1PutRuleCommand = exports.deserializeAws_json1_1PutPermissionCommand = exports.deserializeAws_json1_1PutPartnerEventsCommand = exports.deserializeAws_json1_1PutEventsCommand = exports.deserializeAws_json1_1ListTargetsByRuleCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListRulesCommand = exports.deserializeAws_json1_1ListRuleNamesByTargetCommand = exports.deserializeAws_json1_1ListReplaysCommand = exports.deserializeAws_json1_1ListPartnerEventSourcesCommand = exports.deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = exports.deserializeAws_json1_1ListEventSourcesCommand = exports.deserializeAws_json1_1ListEventBusesCommand = exports.deserializeAws_json1_1ListConnectionsCommand = exports.deserializeAws_json1_1ListArchivesCommand = exports.deserializeAws_json1_1ListApiDestinationsCommand = exports.deserializeAws_json1_1EnableRuleCommand = exports.deserializeAws_json1_1DisableRuleCommand = exports.deserializeAws_json1_1DescribeRuleCommand = exports.deserializeAws_json1_1DescribeReplayCommand = exports.deserializeAws_json1_1DescribePartnerEventSourceCommand = exports.deserializeAws_json1_1DescribeEventSourceCommand = exports.deserializeAws_json1_1DescribeEventBusCommand = exports.deserializeAws_json1_1DescribeConnectionCommand = exports.deserializeAws_json1_1DescribeArchiveCommand = exports.deserializeAws_json1_1DescribeApiDestinationCommand = exports.deserializeAws_json1_1DeleteRuleCommand = exports.deserializeAws_json1_1DeletePartnerEventSourceCommand = exports.deserializeAws_json1_1DeleteEventBusCommand = exports.deserializeAws_json1_1DeleteConnectionCommand = exports.deserializeAws_json1_1DeleteArchiveCommand = exports.deserializeAws_json1_1DeleteApiDestinationCommand = exports.deserializeAws_json1_1DeauthorizeConnectionCommand = exports.deserializeAws_json1_1DeactivateEventSourceCommand = exports.deserializeAws_json1_1CreatePartnerEventSourceCommand = exports.deserializeAws_json1_1CreateEventBusCommand = exports.deserializeAws_json1_1CreateConnectionCommand = exports.deserializeAws_json1_1CreateArchiveCommand = exports.deserializeAws_json1_1CreateApiDestinationCommand = exports.deserializeAws_json1_1CancelReplayCommand = exports.deserializeAws_json1_1ActivateEventSourceCommand = exports.serializeAws_json1_1UpdateConnectionCommand = void 0;
exports.deserializeAws_json1_1UpdateConnectionCommand = exports.deserializeAws_json1_1UpdateArchiveCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1ActivateEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ActivateEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ActivateEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ActivateEventSourceCommand = serializeAws_json1_1ActivateEventSourceCommand;
const serializeAws_json1_1CancelReplayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CancelReplay",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelReplayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelReplayCommand = serializeAws_json1_1CancelReplayCommand;
const serializeAws_json1_1CreateApiDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CreateApiDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateApiDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateApiDestinationCommand = serializeAws_json1_1CreateApiDestinationCommand;
const serializeAws_json1_1CreateArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CreateArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateArchiveRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateArchiveCommand = serializeAws_json1_1CreateArchiveCommand;
const serializeAws_json1_1CreateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CreateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConnectionCommand = serializeAws_json1_1CreateConnectionCommand;
const serializeAws_json1_1CreateEventBusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CreateEventBus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateEventBusCommand = serializeAws_json1_1CreateEventBusCommand;
const serializeAws_json1_1CreatePartnerEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.CreatePartnerEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePartnerEventSourceCommand = serializeAws_json1_1CreatePartnerEventSourceCommand;
const serializeAws_json1_1DeactivateEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeactivateEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeactivateEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeactivateEventSourceCommand = serializeAws_json1_1DeactivateEventSourceCommand;
const serializeAws_json1_1DeauthorizeConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeauthorizeConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeauthorizeConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeauthorizeConnectionCommand = serializeAws_json1_1DeauthorizeConnectionCommand;
const serializeAws_json1_1DeleteApiDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeleteApiDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteApiDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteApiDestinationCommand = serializeAws_json1_1DeleteApiDestinationCommand;
const serializeAws_json1_1DeleteArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeleteArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteArchiveRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteArchiveCommand = serializeAws_json1_1DeleteArchiveCommand;
const serializeAws_json1_1DeleteConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeleteConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConnectionCommand = serializeAws_json1_1DeleteConnectionCommand;
const serializeAws_json1_1DeleteEventBusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeleteEventBus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteEventBusCommand = serializeAws_json1_1DeleteEventBusCommand;
const serializeAws_json1_1DeletePartnerEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeletePartnerEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePartnerEventSourceCommand = serializeAws_json1_1DeletePartnerEventSourceCommand;
const serializeAws_json1_1DeleteRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DeleteRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRuleCommand = serializeAws_json1_1DeleteRuleCommand;
const serializeAws_json1_1DescribeApiDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeApiDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeApiDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeApiDestinationCommand = serializeAws_json1_1DescribeApiDestinationCommand;
const serializeAws_json1_1DescribeArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeArchiveRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeArchiveCommand = serializeAws_json1_1DescribeArchiveCommand;
const serializeAws_json1_1DescribeConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionCommand = serializeAws_json1_1DescribeConnectionCommand;
const serializeAws_json1_1DescribeEventBusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeEventBus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventBusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventBusCommand = serializeAws_json1_1DescribeEventBusCommand;
const serializeAws_json1_1DescribeEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventSourceCommand = serializeAws_json1_1DescribeEventSourceCommand;
const serializeAws_json1_1DescribePartnerEventSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribePartnerEventSource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePartnerEventSourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePartnerEventSourceCommand = serializeAws_json1_1DescribePartnerEventSourceCommand;
const serializeAws_json1_1DescribeReplayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeReplay",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeReplayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeReplayCommand = serializeAws_json1_1DescribeReplayCommand;
const serializeAws_json1_1DescribeRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DescribeRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeRuleCommand = serializeAws_json1_1DescribeRuleCommand;
const serializeAws_json1_1DisableRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.DisableRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableRuleCommand = serializeAws_json1_1DisableRuleCommand;
const serializeAws_json1_1EnableRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.EnableRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableRuleCommand = serializeAws_json1_1EnableRuleCommand;
const serializeAws_json1_1ListApiDestinationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListApiDestinations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListApiDestinationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListApiDestinationsCommand = serializeAws_json1_1ListApiDestinationsCommand;
const serializeAws_json1_1ListArchivesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListArchives",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListArchivesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListArchivesCommand = serializeAws_json1_1ListArchivesCommand;
const serializeAws_json1_1ListConnectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListConnections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListConnectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListConnectionsCommand = serializeAws_json1_1ListConnectionsCommand;
const serializeAws_json1_1ListEventBusesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListEventBuses",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventBusesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEventBusesCommand = serializeAws_json1_1ListEventBusesCommand;
const serializeAws_json1_1ListEventSourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListEventSources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListEventSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListEventSourcesCommand = serializeAws_json1_1ListEventSourcesCommand;
const serializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListPartnerEventSourceAccounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourceAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPartnerEventSourceAccountsCommand = serializeAws_json1_1ListPartnerEventSourceAccountsCommand;
const serializeAws_json1_1ListPartnerEventSourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListPartnerEventSources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPartnerEventSourcesCommand = serializeAws_json1_1ListPartnerEventSourcesCommand;
const serializeAws_json1_1ListReplaysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListReplays",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListReplaysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListReplaysCommand = serializeAws_json1_1ListReplaysCommand;
const serializeAws_json1_1ListRuleNamesByTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListRuleNamesByTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRuleNamesByTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRuleNamesByTargetCommand = serializeAws_json1_1ListRuleNamesByTargetCommand;
const serializeAws_json1_1ListRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRulesCommand = serializeAws_json1_1ListRulesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTargetsByRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.ListTargetsByRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTargetsByRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTargetsByRuleCommand = serializeAws_json1_1ListTargetsByRuleCommand;
const serializeAws_json1_1PutEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.PutEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutEventsCommand = serializeAws_json1_1PutEventsCommand;
const serializeAws_json1_1PutPartnerEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.PutPartnerEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPartnerEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPartnerEventsCommand = serializeAws_json1_1PutPartnerEventsCommand;
const serializeAws_json1_1PutPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.PutPermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutPermissionCommand = serializeAws_json1_1PutPermissionCommand;
const serializeAws_json1_1PutRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.PutRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRuleCommand = serializeAws_json1_1PutRuleCommand;
const serializeAws_json1_1PutTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.PutTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutTargetsCommand = serializeAws_json1_1PutTargetsCommand;
const serializeAws_json1_1RemovePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.RemovePermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemovePermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemovePermissionCommand = serializeAws_json1_1RemovePermissionCommand;
const serializeAws_json1_1RemoveTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.RemoveTargets",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTargetsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTargetsCommand = serializeAws_json1_1RemoveTargetsCommand;
const serializeAws_json1_1StartReplayCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.StartReplay",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartReplayRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartReplayCommand = serializeAws_json1_1StartReplayCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1TestEventPatternCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.TestEventPattern",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TestEventPatternRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TestEventPatternCommand = serializeAws_json1_1TestEventPatternCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateApiDestinationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.UpdateApiDestination",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateApiDestinationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateApiDestinationCommand = serializeAws_json1_1UpdateApiDestinationCommand;
const serializeAws_json1_1UpdateArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.UpdateArchive",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateArchiveRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateArchiveCommand = serializeAws_json1_1UpdateArchiveCommand;
const serializeAws_json1_1UpdateConnectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSEvents.UpdateConnection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConnectionCommand = serializeAws_json1_1UpdateConnectionCommand;
const deserializeAws_json1_1ActivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ActivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ActivateEventSourceCommand = deserializeAws_json1_1ActivateEventSourceCommand;
const deserializeAws_json1_1ActivateEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CancelReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelReplayResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelReplayCommand = deserializeAws_json1_1CancelReplayCommand;
const deserializeAws_json1_1CancelReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalStatusException":
        case "com.amazonaws.eventbridge#IllegalStatusException":
            response = {
                ...(await deserializeAws_json1_1IllegalStatusExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateApiDestinationCommand = deserializeAws_json1_1CreateApiDestinationCommand;
const deserializeAws_json1_1CreateApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateArchiveCommand = deserializeAws_json1_1CreateArchiveCommand;
const deserializeAws_json1_1CreateArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConnectionCommand = deserializeAws_json1_1CreateConnectionCommand;
const deserializeAws_json1_1CreateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreateEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateEventBusCommand = deserializeAws_json1_1CreateEventBusCommand;
const deserializeAws_json1_1CreateEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1CreatePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePartnerEventSourceCommand = deserializeAws_json1_1CreatePartnerEventSourceCommand;
const deserializeAws_json1_1CreatePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeactivateEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeactivateEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeactivateEventSourceCommand = deserializeAws_json1_1DeactivateEventSourceCommand;
const deserializeAws_json1_1DeactivateEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateException":
        case "com.amazonaws.eventbridge#InvalidStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeauthorizeConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeauthorizeConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeauthorizeConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeauthorizeConnectionCommand = deserializeAws_json1_1DeauthorizeConnectionCommand;
const deserializeAws_json1_1DeauthorizeConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteApiDestinationCommand = deserializeAws_json1_1DeleteApiDestinationCommand;
const deserializeAws_json1_1DeleteApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteArchiveCommand = deserializeAws_json1_1DeleteArchiveCommand;
const deserializeAws_json1_1DeleteArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConnectionCommand = deserializeAws_json1_1DeleteConnectionCommand;
const deserializeAws_json1_1DeleteConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteEventBusCommand = deserializeAws_json1_1DeleteEventBusCommand;
const deserializeAws_json1_1DeleteEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeletePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePartnerEventSourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePartnerEventSourceCommand = deserializeAws_json1_1DeletePartnerEventSourceCommand;
const deserializeAws_json1_1DeletePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DeleteRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRuleCommand = deserializeAws_json1_1DeleteRuleCommand;
const deserializeAws_json1_1DeleteRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeApiDestinationCommand = deserializeAws_json1_1DescribeApiDestinationCommand;
const deserializeAws_json1_1DescribeApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeArchiveCommand = deserializeAws_json1_1DescribeArchiveCommand;
const deserializeAws_json1_1DescribeArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionCommand = deserializeAws_json1_1DescribeConnectionCommand;
const deserializeAws_json1_1DescribeConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEventBusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventBusCommand = deserializeAws_json1_1DescribeEventBusCommand;
const deserializeAws_json1_1DescribeEventBusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventSourceCommand = deserializeAws_json1_1DescribeEventSourceCommand;
const deserializeAws_json1_1DescribeEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribePartnerEventSourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePartnerEventSourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePartnerEventSourceCommand = deserializeAws_json1_1DescribePartnerEventSourceCommand;
const deserializeAws_json1_1DescribePartnerEventSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeReplayResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeReplayCommand = deserializeAws_json1_1DescribeReplayCommand;
const deserializeAws_json1_1DescribeReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DescribeRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeRuleCommand = deserializeAws_json1_1DescribeRuleCommand;
const deserializeAws_json1_1DescribeRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1DisableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableRuleCommand = deserializeAws_json1_1DisableRuleCommand;
const deserializeAws_json1_1DisableRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1EnableRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableRuleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableRuleCommand = deserializeAws_json1_1EnableRuleCommand;
const deserializeAws_json1_1EnableRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListApiDestinationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListApiDestinationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListApiDestinationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListApiDestinationsCommand = deserializeAws_json1_1ListApiDestinationsCommand;
const deserializeAws_json1_1ListApiDestinationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListArchivesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListArchivesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListArchivesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListArchivesCommand = deserializeAws_json1_1ListArchivesCommand;
const deserializeAws_json1_1ListArchivesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListConnectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListConnectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListConnectionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListConnectionsCommand = deserializeAws_json1_1ListConnectionsCommand;
const deserializeAws_json1_1ListConnectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListEventBusesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEventBusesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEventBusesCommand = deserializeAws_json1_1ListEventBusesCommand;
const deserializeAws_json1_1ListEventBusesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListEventSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListEventSourcesCommand = deserializeAws_json1_1ListEventSourcesCommand;
const deserializeAws_json1_1ListEventSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = deserializeAws_json1_1ListPartnerEventSourceAccountsCommand;
const deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListPartnerEventSourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPartnerEventSourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPartnerEventSourcesCommand = deserializeAws_json1_1ListPartnerEventSourcesCommand;
const deserializeAws_json1_1ListPartnerEventSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListReplaysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListReplaysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListReplaysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListReplaysCommand = deserializeAws_json1_1ListReplaysCommand;
const deserializeAws_json1_1ListReplaysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRuleNamesByTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRuleNamesByTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRuleNamesByTargetCommand = deserializeAws_json1_1ListRuleNamesByTargetCommand;
const deserializeAws_json1_1ListRuleNamesByTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRulesCommand = deserializeAws_json1_1ListRulesCommand;
const deserializeAws_json1_1ListRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ListTargetsByRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTargetsByRuleCommand = deserializeAws_json1_1ListTargetsByRuleCommand;
const deserializeAws_json1_1ListTargetsByRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutEventsCommand = deserializeAws_json1_1PutEventsCommand;
const deserializeAws_json1_1PutEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutPartnerEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPartnerEventsCommand = deserializeAws_json1_1PutPartnerEventsCommand;
const deserializeAws_json1_1PutPartnerEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutPermissionCommand = deserializeAws_json1_1PutPermissionCommand;
const deserializeAws_json1_1PutPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyLengthExceededException":
        case "com.amazonaws.eventbridge#PolicyLengthExceededException":
            response = {
                ...(await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRuleCommand = deserializeAws_json1_1PutRuleCommand;
const deserializeAws_json1_1PutRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1PutTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutTargetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutTargetsCommand = deserializeAws_json1_1PutTargetsCommand;
const deserializeAws_json1_1PutTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemovePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemovePermissionCommand = deserializeAws_json1_1RemovePermissionCommand;
const deserializeAws_json1_1RemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationDisabledException":
        case "com.amazonaws.eventbridge#OperationDisabledException":
            response = {
                ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1RemoveTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTargetsCommand = deserializeAws_json1_1RemoveTargetsCommand;
const deserializeAws_json1_1RemoveTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1StartReplayCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartReplayCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartReplayResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartReplayCommand = deserializeAws_json1_1StartReplayCommand;
const deserializeAws_json1_1StartReplayCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1TestEventPatternCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TestEventPatternCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TestEventPatternCommand = deserializeAws_json1_1TestEventPatternCommand;
const deserializeAws_json1_1TestEventPatternCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ManagedRuleException":
        case "com.amazonaws.eventbridge#ManagedRuleException":
            response = {
                ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateApiDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateApiDestinationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateApiDestinationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateApiDestinationCommand = deserializeAws_json1_1UpdateApiDestinationCommand;
const deserializeAws_json1_1UpdateApiDestinationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateArchiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateArchiveCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateArchiveResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateArchiveCommand = deserializeAws_json1_1UpdateArchiveCommand;
const deserializeAws_json1_1UpdateArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventPatternException":
        case "com.amazonaws.eventbridge#InvalidEventPatternException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1UpdateConnectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConnectionCommand = deserializeAws_json1_1UpdateConnectionCommand;
const deserializeAws_json1_1UpdateConnectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.eventbridge#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.eventbridge#InternalException":
            response = {
                ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.eventbridge#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eventbridge#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1IllegalStatusExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1IllegalStatusException(body, context);
    const contents = {
        name: "IllegalStatusException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalException(body, context);
    const contents = {
        name: "InternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventPatternException(body, context);
    const contents = {
        name: "InvalidEventPatternException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidStateException(body, context);
    const contents = {
        name: "InvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ManagedRuleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ManagedRuleException(body, context);
    const contents = {
        name: "ManagedRuleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationDisabledException(body, context);
    const contents = {
        name: "OperationDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyLengthExceededException(body, context);
    const contents = {
        name: "PolicyLengthExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ActivateEventSourceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1AwsVpcConfiguration = (input, context) => {
    return {
        ...(input.AssignPublicIp !== undefined &&
            input.AssignPublicIp !== null && { AssignPublicIp: input.AssignPublicIp }),
        ...(input.SecurityGroups !== undefined &&
            input.SecurityGroups !== null && {
            SecurityGroups: serializeAws_json1_1StringList(input.SecurityGroups, context),
        }),
        ...(input.Subnets !== undefined &&
            input.Subnets !== null && { Subnets: serializeAws_json1_1StringList(input.Subnets, context) }),
    };
};
const serializeAws_json1_1BatchArrayProperties = (input, context) => {
    return {
        ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    };
};
const serializeAws_json1_1BatchParameters = (input, context) => {
    return {
        ...(input.ArrayProperties !== undefined &&
            input.ArrayProperties !== null && {
            ArrayProperties: serializeAws_json1_1BatchArrayProperties(input.ArrayProperties, context),
        }),
        ...(input.JobDefinition !== undefined && input.JobDefinition !== null && { JobDefinition: input.JobDefinition }),
        ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
        ...(input.RetryStrategy !== undefined &&
            input.RetryStrategy !== null && {
            RetryStrategy: serializeAws_json1_1BatchRetryStrategy(input.RetryStrategy, context),
        }),
    };
};
const serializeAws_json1_1BatchRetryStrategy = (input, context) => {
    return {
        ...(input.Attempts !== undefined && input.Attempts !== null && { Attempts: input.Attempts }),
    };
};
const serializeAws_json1_1CancelReplayRequest = (input, context) => {
    return {
        ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
    };
};
const serializeAws_json1_1Condition = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ConnectionBodyParameter = (input, context) => {
    return {
        ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ConnectionBodyParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConnectionBodyParameter(entry, context);
    });
};
const serializeAws_json1_1ConnectionHeaderParameter = (input, context) => {
    return {
        ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ConnectionHeaderParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConnectionHeaderParameter(entry, context);
    });
};
const serializeAws_json1_1ConnectionHttpParameters = (input, context) => {
    return {
        ...(input.BodyParameters !== undefined &&
            input.BodyParameters !== null && {
            BodyParameters: serializeAws_json1_1ConnectionBodyParametersList(input.BodyParameters, context),
        }),
        ...(input.HeaderParameters !== undefined &&
            input.HeaderParameters !== null && {
            HeaderParameters: serializeAws_json1_1ConnectionHeaderParametersList(input.HeaderParameters, context),
        }),
        ...(input.QueryStringParameters !== undefined &&
            input.QueryStringParameters !== null && {
            QueryStringParameters: serializeAws_json1_1ConnectionQueryStringParametersList(input.QueryStringParameters, context),
        }),
    };
};
const serializeAws_json1_1ConnectionQueryStringParameter = (input, context) => {
    return {
        ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ConnectionQueryStringParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ConnectionQueryStringParameter(entry, context);
    });
};
const serializeAws_json1_1CreateApiDestinationRequest = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
        ...(input.InvocationEndpoint !== undefined &&
            input.InvocationEndpoint !== null && { InvocationEndpoint: input.InvocationEndpoint }),
        ...(input.InvocationRateLimitPerSecond !== undefined &&
            input.InvocationRateLimitPerSecond !== null && {
            InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateArchiveRequest = (input, context) => {
    return {
        ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
        ...(input.EventSourceArn !== undefined &&
            input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
        ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
    };
};
const serializeAws_json1_1CreateConnectionApiKeyAuthRequestParameters = (input, context) => {
    return {
        ...(input.ApiKeyName !== undefined && input.ApiKeyName !== null && { ApiKeyName: input.ApiKeyName }),
        ...(input.ApiKeyValue !== undefined && input.ApiKeyValue !== null && { ApiKeyValue: input.ApiKeyValue }),
    };
};
const serializeAws_json1_1CreateConnectionAuthRequestParameters = (input, context) => {
    return {
        ...(input.ApiKeyAuthParameters !== undefined &&
            input.ApiKeyAuthParameters !== null && {
            ApiKeyAuthParameters: serializeAws_json1_1CreateConnectionApiKeyAuthRequestParameters(input.ApiKeyAuthParameters, context),
        }),
        ...(input.BasicAuthParameters !== undefined &&
            input.BasicAuthParameters !== null && {
            BasicAuthParameters: serializeAws_json1_1CreateConnectionBasicAuthRequestParameters(input.BasicAuthParameters, context),
        }),
        ...(input.InvocationHttpParameters !== undefined &&
            input.InvocationHttpParameters !== null && {
            InvocationHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.InvocationHttpParameters, context),
        }),
        ...(input.OAuthParameters !== undefined &&
            input.OAuthParameters !== null && {
            OAuthParameters: serializeAws_json1_1CreateConnectionOAuthRequestParameters(input.OAuthParameters, context),
        }),
    };
};
const serializeAws_json1_1CreateConnectionBasicAuthRequestParameters = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1CreateConnectionOAuthClientRequestParameters = (input, context) => {
    return {
        ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
        ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
    };
};
const serializeAws_json1_1CreateConnectionOAuthRequestParameters = (input, context) => {
    return {
        ...(input.AuthorizationEndpoint !== undefined &&
            input.AuthorizationEndpoint !== null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
        ...(input.ClientParameters !== undefined &&
            input.ClientParameters !== null && {
            ClientParameters: serializeAws_json1_1CreateConnectionOAuthClientRequestParameters(input.ClientParameters, context),
        }),
        ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
        ...(input.OAuthHttpParameters !== undefined &&
            input.OAuthHttpParameters !== null && {
            OAuthHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.OAuthHttpParameters, context),
        }),
    };
};
const serializeAws_json1_1CreateConnectionRequest = (input, context) => {
    return {
        ...(input.AuthParameters !== undefined &&
            input.AuthParameters !== null && {
            AuthParameters: serializeAws_json1_1CreateConnectionAuthRequestParameters(input.AuthParameters, context),
        }),
        ...(input.AuthorizationType !== undefined &&
            input.AuthorizationType !== null && { AuthorizationType: input.AuthorizationType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1CreateEventBusRequest = (input, context) => {
    return {
        ...(input.EventSourceName !== undefined &&
            input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreatePartnerEventSourceRequest = (input, context) => {
    return {
        ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeactivateEventSourceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeadLetterConfig = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_json1_1DeauthorizeConnectionRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteApiDestinationRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteArchiveRequest = (input, context) => {
    return {
        ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    };
};
const serializeAws_json1_1DeleteConnectionRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteEventBusRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeletePartnerEventSourceRequest = (input, context) => {
    return {
        ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DeleteRuleRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeApiDestinationRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeArchiveRequest = (input, context) => {
    return {
        ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    };
};
const serializeAws_json1_1DescribeConnectionRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeEventBusRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeEventSourceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribePartnerEventSourceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeReplayRequest = (input, context) => {
    return {
        ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
    };
};
const serializeAws_json1_1DescribeRuleRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DisableRuleRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1EcsParameters = (input, context) => {
    return {
        ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
        ...(input.LaunchType !== undefined && input.LaunchType !== null && { LaunchType: input.LaunchType }),
        ...(input.NetworkConfiguration !== undefined &&
            input.NetworkConfiguration !== null && {
            NetworkConfiguration: serializeAws_json1_1NetworkConfiguration(input.NetworkConfiguration, context),
        }),
        ...(input.PlatformVersion !== undefined &&
            input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
        ...(input.TaskCount !== undefined && input.TaskCount !== null && { TaskCount: input.TaskCount }),
        ...(input.TaskDefinitionArn !== undefined &&
            input.TaskDefinitionArn !== null && { TaskDefinitionArn: input.TaskDefinitionArn }),
    };
};
const serializeAws_json1_1EnableRuleRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1EventResourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1HeaderParametersMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1HttpParameters = (input, context) => {
    return {
        ...(input.HeaderParameters !== undefined &&
            input.HeaderParameters !== null && {
            HeaderParameters: serializeAws_json1_1HeaderParametersMap(input.HeaderParameters, context),
        }),
        ...(input.PathParameterValues !== undefined &&
            input.PathParameterValues !== null && {
            PathParameterValues: serializeAws_json1_1PathParameterList(input.PathParameterValues, context),
        }),
        ...(input.QueryStringParameters !== undefined &&
            input.QueryStringParameters !== null && {
            QueryStringParameters: serializeAws_json1_1QueryStringParametersMap(input.QueryStringParameters, context),
        }),
    };
};
const serializeAws_json1_1InputTransformer = (input, context) => {
    return {
        ...(input.InputPathsMap !== undefined &&
            input.InputPathsMap !== null && {
            InputPathsMap: serializeAws_json1_1TransformerPaths(input.InputPathsMap, context),
        }),
        ...(input.InputTemplate !== undefined && input.InputTemplate !== null && { InputTemplate: input.InputTemplate }),
    };
};
const serializeAws_json1_1KinesisParameters = (input, context) => {
    return {
        ...(input.PartitionKeyPath !== undefined &&
            input.PartitionKeyPath !== null && { PartitionKeyPath: input.PartitionKeyPath }),
    };
};
const serializeAws_json1_1ListApiDestinationsRequest = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListArchivesRequest = (input, context) => {
    return {
        ...(input.EventSourceArn !== undefined &&
            input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_json1_1ListConnectionsRequest = (input, context) => {
    return {
        ...(input.ConnectionState !== undefined &&
            input.ConnectionState !== null && { ConnectionState: input.ConnectionState }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListEventBusesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListEventSourcesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (input, context) => {
    return {
        ...(input.EventSourceName !== undefined &&
            input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPartnerEventSourcesRequest = (input, context) => {
    return {
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListReplaysRequest = (input, context) => {
    return {
        ...(input.EventSourceArn !== undefined &&
            input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
    };
};
const serializeAws_json1_1ListRuleNamesByTargetRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
    };
};
const serializeAws_json1_1ListRulesRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListTargetsByRuleRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
    };
};
const serializeAws_json1_1NetworkConfiguration = (input, context) => {
    return {
        ...(input.awsvpcConfiguration !== undefined &&
            input.awsvpcConfiguration !== null && {
            awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
        }),
    };
};
const serializeAws_json1_1PathParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutEventsRequest = (input, context) => {
    return {
        ...(input.Entries !== undefined &&
            input.Entries !== null && { Entries: serializeAws_json1_1PutEventsRequestEntryList(input.Entries, context) }),
    };
};
const serializeAws_json1_1PutEventsRequestEntry = (input, context) => {
    return {
        ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
        ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
        ...(input.TraceHeader !== undefined && input.TraceHeader !== null && { TraceHeader: input.TraceHeader }),
    };
};
const serializeAws_json1_1PutEventsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PutEventsRequestEntry(entry, context);
    });
};
const serializeAws_json1_1PutPartnerEventsRequest = (input, context) => {
    return {
        ...(input.Entries !== undefined &&
            input.Entries !== null && {
            Entries: serializeAws_json1_1PutPartnerEventsRequestEntryList(input.Entries, context),
        }),
    };
};
const serializeAws_json1_1PutPartnerEventsRequestEntry = (input, context) => {
    return {
        ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
        ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
        ...(input.Resources !== undefined &&
            input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
        ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
        ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
    };
};
const serializeAws_json1_1PutPartnerEventsRequestEntryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context);
    });
};
const serializeAws_json1_1PutPermissionRequest = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Condition !== undefined &&
            input.Condition !== null && { Condition: serializeAws_json1_1Condition(input.Condition, context) }),
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
        ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
        ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
    };
};
const serializeAws_json1_1PutRuleRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.ScheduleExpression !== undefined &&
            input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1PutTargetsRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
        ...(input.Targets !== undefined &&
            input.Targets !== null && { Targets: serializeAws_json1_1TargetList(input.Targets, context) }),
    };
};
const serializeAws_json1_1QueryStringParametersMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1RedshiftDataParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
        ...(input.SecretManagerArn !== undefined &&
            input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
        ...(input.Sql !== undefined && input.Sql !== null && { Sql: input.Sql }),
        ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
        ...(input.WithEvent !== undefined && input.WithEvent !== null && { WithEvent: input.WithEvent }),
    };
};
const serializeAws_json1_1RemovePermissionRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.RemoveAllPermissions !== undefined &&
            input.RemoveAllPermissions !== null && { RemoveAllPermissions: input.RemoveAllPermissions }),
        ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
    };
};
const serializeAws_json1_1RemoveTargetsRequest = (input, context) => {
    return {
        ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
        ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
        ...(input.Ids !== undefined && input.Ids !== null && { Ids: serializeAws_json1_1TargetIdList(input.Ids, context) }),
        ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
    };
};
const serializeAws_json1_1ReplayDestination = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.FilterArns !== undefined &&
            input.FilterArns !== null && {
            FilterArns: serializeAws_json1_1ReplayDestinationFilters(input.FilterArns, context),
        }),
    };
};
const serializeAws_json1_1ReplayDestinationFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RetryPolicy = (input, context) => {
    return {
        ...(input.MaximumEventAgeInSeconds !== undefined &&
            input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
        ...(input.MaximumRetryAttempts !== undefined &&
            input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
    };
};
const serializeAws_json1_1RunCommandParameters = (input, context) => {
    return {
        ...(input.RunCommandTargets !== undefined &&
            input.RunCommandTargets !== null && {
            RunCommandTargets: serializeAws_json1_1RunCommandTargets(input.RunCommandTargets, context),
        }),
    };
};
const serializeAws_json1_1RunCommandTarget = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1RunCommandTargetValues(input.Values, context) }),
    };
};
const serializeAws_json1_1RunCommandTargets = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RunCommandTarget(entry, context);
    });
};
const serializeAws_json1_1RunCommandTargetValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1SageMakerPipelineParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1SageMakerPipelineParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1SageMakerPipelineParameter(entry, context);
    });
};
const serializeAws_json1_1SageMakerPipelineParameters = (input, context) => {
    return {
        ...(input.PipelineParameterList !== undefined &&
            input.PipelineParameterList !== null && {
            PipelineParameterList: serializeAws_json1_1SageMakerPipelineParameterList(input.PipelineParameterList, context),
        }),
    };
};
const serializeAws_json1_1SqsParameters = (input, context) => {
    return {
        ...(input.MessageGroupId !== undefined &&
            input.MessageGroupId !== null && { MessageGroupId: input.MessageGroupId }),
    };
};
const serializeAws_json1_1StartReplayRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Destination !== undefined &&
            input.Destination !== null && { Destination: serializeAws_json1_1ReplayDestination(input.Destination, context) }),
        ...(input.EventEndTime !== undefined &&
            input.EventEndTime !== null && { EventEndTime: Math.round(input.EventEndTime.getTime() / 1000) }),
        ...(input.EventSourceArn !== undefined &&
            input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
        ...(input.EventStartTime !== undefined &&
            input.EventStartTime !== null && { EventStartTime: Math.round(input.EventStartTime.getTime() / 1000) }),
        ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
    };
};
const serializeAws_json1_1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1Target = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.BatchParameters !== undefined &&
            input.BatchParameters !== null && {
            BatchParameters: serializeAws_json1_1BatchParameters(input.BatchParameters, context),
        }),
        ...(input.DeadLetterConfig !== undefined &&
            input.DeadLetterConfig !== null && {
            DeadLetterConfig: serializeAws_json1_1DeadLetterConfig(input.DeadLetterConfig, context),
        }),
        ...(input.EcsParameters !== undefined &&
            input.EcsParameters !== null && {
            EcsParameters: serializeAws_json1_1EcsParameters(input.EcsParameters, context),
        }),
        ...(input.HttpParameters !== undefined &&
            input.HttpParameters !== null && {
            HttpParameters: serializeAws_json1_1HttpParameters(input.HttpParameters, context),
        }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Input !== undefined && input.Input !== null && { Input: input.Input }),
        ...(input.InputPath !== undefined && input.InputPath !== null && { InputPath: input.InputPath }),
        ...(input.InputTransformer !== undefined &&
            input.InputTransformer !== null && {
            InputTransformer: serializeAws_json1_1InputTransformer(input.InputTransformer, context),
        }),
        ...(input.KinesisParameters !== undefined &&
            input.KinesisParameters !== null && {
            KinesisParameters: serializeAws_json1_1KinesisParameters(input.KinesisParameters, context),
        }),
        ...(input.RedshiftDataParameters !== undefined &&
            input.RedshiftDataParameters !== null && {
            RedshiftDataParameters: serializeAws_json1_1RedshiftDataParameters(input.RedshiftDataParameters, context),
        }),
        ...(input.RetryPolicy !== undefined &&
            input.RetryPolicy !== null && { RetryPolicy: serializeAws_json1_1RetryPolicy(input.RetryPolicy, context) }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.RunCommandParameters !== undefined &&
            input.RunCommandParameters !== null && {
            RunCommandParameters: serializeAws_json1_1RunCommandParameters(input.RunCommandParameters, context),
        }),
        ...(input.SageMakerPipelineParameters !== undefined &&
            input.SageMakerPipelineParameters !== null && {
            SageMakerPipelineParameters: serializeAws_json1_1SageMakerPipelineParameters(input.SageMakerPipelineParameters, context),
        }),
        ...(input.SqsParameters !== undefined &&
            input.SqsParameters !== null && {
            SqsParameters: serializeAws_json1_1SqsParameters(input.SqsParameters, context),
        }),
    };
};
const serializeAws_json1_1TargetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TargetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Target(entry, context);
    });
};
const serializeAws_json1_1TestEventPatternRequest = (input, context) => {
    return {
        ...(input.Event !== undefined && input.Event !== null && { Event: input.Event }),
        ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    };
};
const serializeAws_json1_1TransformerPaths = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateApiDestinationRequest = (input, context) => {
    return {
        ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
        ...(input.InvocationEndpoint !== undefined &&
            input.InvocationEndpoint !== null && { InvocationEndpoint: input.InvocationEndpoint }),
        ...(input.InvocationRateLimitPerSecond !== undefined &&
            input.InvocationRateLimitPerSecond !== null && {
            InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1UpdateArchiveRequest = (input, context) => {
    return {
        ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
        ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
    };
};
const serializeAws_json1_1UpdateConnectionApiKeyAuthRequestParameters = (input, context) => {
    return {
        ...(input.ApiKeyName !== undefined && input.ApiKeyName !== null && { ApiKeyName: input.ApiKeyName }),
        ...(input.ApiKeyValue !== undefined && input.ApiKeyValue !== null && { ApiKeyValue: input.ApiKeyValue }),
    };
};
const serializeAws_json1_1UpdateConnectionAuthRequestParameters = (input, context) => {
    return {
        ...(input.ApiKeyAuthParameters !== undefined &&
            input.ApiKeyAuthParameters !== null && {
            ApiKeyAuthParameters: serializeAws_json1_1UpdateConnectionApiKeyAuthRequestParameters(input.ApiKeyAuthParameters, context),
        }),
        ...(input.BasicAuthParameters !== undefined &&
            input.BasicAuthParameters !== null && {
            BasicAuthParameters: serializeAws_json1_1UpdateConnectionBasicAuthRequestParameters(input.BasicAuthParameters, context),
        }),
        ...(input.InvocationHttpParameters !== undefined &&
            input.InvocationHttpParameters !== null && {
            InvocationHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.InvocationHttpParameters, context),
        }),
        ...(input.OAuthParameters !== undefined &&
            input.OAuthParameters !== null && {
            OAuthParameters: serializeAws_json1_1UpdateConnectionOAuthRequestParameters(input.OAuthParameters, context),
        }),
    };
};
const serializeAws_json1_1UpdateConnectionBasicAuthRequestParameters = (input, context) => {
    return {
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_json1_1UpdateConnectionOAuthClientRequestParameters = (input, context) => {
    return {
        ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
        ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
    };
};
const serializeAws_json1_1UpdateConnectionOAuthRequestParameters = (input, context) => {
    return {
        ...(input.AuthorizationEndpoint !== undefined &&
            input.AuthorizationEndpoint !== null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
        ...(input.ClientParameters !== undefined &&
            input.ClientParameters !== null && {
            ClientParameters: serializeAws_json1_1UpdateConnectionOAuthClientRequestParameters(input.ClientParameters, context),
        }),
        ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
        ...(input.OAuthHttpParameters !== undefined &&
            input.OAuthHttpParameters !== null && {
            OAuthHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.OAuthHttpParameters, context),
        }),
    };
};
const serializeAws_json1_1UpdateConnectionRequest = (input, context) => {
    return {
        ...(input.AuthParameters !== undefined &&
            input.AuthParameters !== null && {
            AuthParameters: serializeAws_json1_1UpdateConnectionAuthRequestParameters(input.AuthParameters, context),
        }),
        ...(input.AuthorizationType !== undefined &&
            input.AuthorizationType !== null && { AuthorizationType: input.AuthorizationType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const deserializeAws_json1_1ApiDestination = (output, context) => {
    return {
        ApiDestinationArn: output.ApiDestinationArn !== undefined && output.ApiDestinationArn !== null
            ? output.ApiDestinationArn
            : undefined,
        ApiDestinationState: output.ApiDestinationState !== undefined && output.ApiDestinationState !== null
            ? output.ApiDestinationState
            : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        InvocationEndpoint: output.InvocationEndpoint !== undefined && output.InvocationEndpoint !== null
            ? output.InvocationEndpoint
            : undefined,
        InvocationRateLimitPerSecond: output.InvocationRateLimitPerSecond !== undefined && output.InvocationRateLimitPerSecond !== null
            ? output.InvocationRateLimitPerSecond
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ApiDestinationResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ApiDestination(entry, context);
    });
};
const deserializeAws_json1_1Archive = (output, context) => {
    return {
        ArchiveName: output.ArchiveName !== undefined && output.ArchiveName !== null ? output.ArchiveName : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        EventCount: output.EventCount !== undefined && output.EventCount !== null ? output.EventCount : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        RetentionDays: output.RetentionDays !== undefined && output.RetentionDays !== null ? output.RetentionDays : undefined,
        SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1ArchiveResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Archive(entry, context);
    });
};
const deserializeAws_json1_1AwsVpcConfiguration = (output, context) => {
    return {
        AssignPublicIp: output.AssignPublicIp !== undefined && output.AssignPublicIp !== null ? output.AssignPublicIp : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_json1_1StringList(output.SecurityGroups, context)
            : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_json1_1StringList(output.Subnets, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchArrayProperties = (output, context) => {
    return {
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    };
};
const deserializeAws_json1_1BatchParameters = (output, context) => {
    return {
        ArrayProperties: output.ArrayProperties !== undefined && output.ArrayProperties !== null
            ? deserializeAws_json1_1BatchArrayProperties(output.ArrayProperties, context)
            : undefined,
        JobDefinition: output.JobDefinition !== undefined && output.JobDefinition !== null ? output.JobDefinition : undefined,
        JobName: output.JobName !== undefined && output.JobName !== null ? output.JobName : undefined,
        RetryStrategy: output.RetryStrategy !== undefined && output.RetryStrategy !== null
            ? deserializeAws_json1_1BatchRetryStrategy(output.RetryStrategy, context)
            : undefined,
    };
};
const deserializeAws_json1_1BatchRetryStrategy = (output, context) => {
    return {
        Attempts: output.Attempts !== undefined && output.Attempts !== null ? output.Attempts : undefined,
    };
};
const deserializeAws_json1_1CancelReplayResponse = (output, context) => {
    return {
        ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Connection = (output, context) => {
    return {
        AuthorizationType: output.AuthorizationType !== undefined && output.AuthorizationType !== null
            ? output.AuthorizationType
            : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastAuthorizedTime: output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
            ? new Date(Math.round(output.LastAuthorizedTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1ConnectionApiKeyAuthResponseParameters = (output, context) => {
    return {
        ApiKeyName: output.ApiKeyName !== undefined && output.ApiKeyName !== null ? output.ApiKeyName : undefined,
    };
};
const deserializeAws_json1_1ConnectionAuthResponseParameters = (output, context) => {
    return {
        ApiKeyAuthParameters: output.ApiKeyAuthParameters !== undefined && output.ApiKeyAuthParameters !== null
            ? deserializeAws_json1_1ConnectionApiKeyAuthResponseParameters(output.ApiKeyAuthParameters, context)
            : undefined,
        BasicAuthParameters: output.BasicAuthParameters !== undefined && output.BasicAuthParameters !== null
            ? deserializeAws_json1_1ConnectionBasicAuthResponseParameters(output.BasicAuthParameters, context)
            : undefined,
        InvocationHttpParameters: output.InvocationHttpParameters !== undefined && output.InvocationHttpParameters !== null
            ? deserializeAws_json1_1ConnectionHttpParameters(output.InvocationHttpParameters, context)
            : undefined,
        OAuthParameters: output.OAuthParameters !== undefined && output.OAuthParameters !== null
            ? deserializeAws_json1_1ConnectionOAuthResponseParameters(output.OAuthParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConnectionBasicAuthResponseParameters = (output, context) => {
    return {
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1ConnectionBodyParameter = (output, context) => {
    return {
        IsValueSecret: output.IsValueSecret !== undefined && output.IsValueSecret !== null ? output.IsValueSecret : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ConnectionBodyParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionBodyParameter(entry, context);
    });
};
const deserializeAws_json1_1ConnectionHeaderParameter = (output, context) => {
    return {
        IsValueSecret: output.IsValueSecret !== undefined && output.IsValueSecret !== null ? output.IsValueSecret : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ConnectionHeaderParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionHeaderParameter(entry, context);
    });
};
const deserializeAws_json1_1ConnectionHttpParameters = (output, context) => {
    return {
        BodyParameters: output.BodyParameters !== undefined && output.BodyParameters !== null
            ? deserializeAws_json1_1ConnectionBodyParametersList(output.BodyParameters, context)
            : undefined,
        HeaderParameters: output.HeaderParameters !== undefined && output.HeaderParameters !== null
            ? deserializeAws_json1_1ConnectionHeaderParametersList(output.HeaderParameters, context)
            : undefined,
        QueryStringParameters: output.QueryStringParameters !== undefined && output.QueryStringParameters !== null
            ? deserializeAws_json1_1ConnectionQueryStringParametersList(output.QueryStringParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConnectionOAuthClientResponseParameters = (output, context) => {
    return {
        ClientID: output.ClientID !== undefined && output.ClientID !== null ? output.ClientID : undefined,
    };
};
const deserializeAws_json1_1ConnectionOAuthResponseParameters = (output, context) => {
    return {
        AuthorizationEndpoint: output.AuthorizationEndpoint !== undefined && output.AuthorizationEndpoint !== null
            ? output.AuthorizationEndpoint
            : undefined,
        ClientParameters: output.ClientParameters !== undefined && output.ClientParameters !== null
            ? deserializeAws_json1_1ConnectionOAuthClientResponseParameters(output.ClientParameters, context)
            : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        OAuthHttpParameters: output.OAuthHttpParameters !== undefined && output.OAuthHttpParameters !== null
            ? deserializeAws_json1_1ConnectionHttpParameters(output.OAuthHttpParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConnectionQueryStringParameter = (output, context) => {
    return {
        IsValueSecret: output.IsValueSecret !== undefined && output.IsValueSecret !== null ? output.IsValueSecret : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ConnectionQueryStringParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionQueryStringParameter(entry, context);
    });
};
const deserializeAws_json1_1ConnectionResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Connection(entry, context);
    });
};
const deserializeAws_json1_1CreateApiDestinationResponse = (output, context) => {
    return {
        ApiDestinationArn: output.ApiDestinationArn !== undefined && output.ApiDestinationArn !== null
            ? output.ApiDestinationArn
            : undefined,
        ApiDestinationState: output.ApiDestinationState !== undefined && output.ApiDestinationState !== null
            ? output.ApiDestinationState
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1CreateArchiveResponse = (output, context) => {
    return {
        ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1CreateConnectionResponse = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1CreateEventBusResponse = (output, context) => {
    return {
        EventBusArn: output.EventBusArn !== undefined && output.EventBusArn !== null ? output.EventBusArn : undefined,
    };
};
const deserializeAws_json1_1CreatePartnerEventSourceResponse = (output, context) => {
    return {
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
    };
};
const deserializeAws_json1_1DeadLetterConfig = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    };
};
const deserializeAws_json1_1DeauthorizeConnectionResponse = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastAuthorizedTime: output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
            ? new Date(Math.round(output.LastAuthorizedTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DeleteApiDestinationResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteArchiveResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteConnectionResponse = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastAuthorizedTime: output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
            ? new Date(Math.round(output.LastAuthorizedTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1DescribeApiDestinationResponse = (output, context) => {
    return {
        ApiDestinationArn: output.ApiDestinationArn !== undefined && output.ApiDestinationArn !== null
            ? output.ApiDestinationArn
            : undefined,
        ApiDestinationState: output.ApiDestinationState !== undefined && output.ApiDestinationState !== null
            ? output.ApiDestinationState
            : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        InvocationEndpoint: output.InvocationEndpoint !== undefined && output.InvocationEndpoint !== null
            ? output.InvocationEndpoint
            : undefined,
        InvocationRateLimitPerSecond: output.InvocationRateLimitPerSecond !== undefined && output.InvocationRateLimitPerSecond !== null
            ? output.InvocationRateLimitPerSecond
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DescribeArchiveResponse = (output, context) => {
    return {
        ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
        ArchiveName: output.ArchiveName !== undefined && output.ArchiveName !== null ? output.ArchiveName : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EventCount: output.EventCount !== undefined && output.EventCount !== null ? output.EventCount : undefined,
        EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        RetentionDays: output.RetentionDays !== undefined && output.RetentionDays !== null ? output.RetentionDays : undefined,
        SizeBytes: output.SizeBytes !== undefined && output.SizeBytes !== null ? output.SizeBytes : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1DescribeConnectionResponse = (output, context) => {
    return {
        AuthParameters: output.AuthParameters !== undefined && output.AuthParameters !== null
            ? deserializeAws_json1_1ConnectionAuthResponseParameters(output.AuthParameters, context)
            : undefined,
        AuthorizationType: output.AuthorizationType !== undefined && output.AuthorizationType !== null
            ? output.AuthorizationType
            : undefined,
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastAuthorizedTime: output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
            ? new Date(Math.round(output.LastAuthorizedTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SecretArn: output.SecretArn !== undefined && output.SecretArn !== null ? output.SecretArn : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1DescribeEventBusResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1DescribeEventSourceResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DescribePartnerEventSourceResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1DescribeReplayResponse = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_json1_1ReplayDestination(output.Destination, context)
            : undefined,
        EventEndTime: output.EventEndTime !== undefined && output.EventEndTime !== null
            ? new Date(Math.round(output.EventEndTime * 1000))
            : undefined,
        EventLastReplayedTime: output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
            ? new Date(Math.round(output.EventLastReplayedTime * 1000))
            : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        EventStartTime: output.EventStartTime !== undefined && output.EventStartTime !== null
            ? new Date(Math.round(output.EventStartTime * 1000))
            : undefined,
        ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
        ReplayEndTime: output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
            ? new Date(Math.round(output.ReplayEndTime * 1000))
            : undefined,
        ReplayName: output.ReplayName !== undefined && output.ReplayName !== null ? output.ReplayName : undefined,
        ReplayStartTime: output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
            ? new Date(Math.round(output.ReplayStartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1DescribeRuleResponse = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EventBusName: output.EventBusName !== undefined && output.EventBusName !== null ? output.EventBusName : undefined,
        EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
        ManagedBy: output.ManagedBy !== undefined && output.ManagedBy !== null ? output.ManagedBy : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        ScheduleExpression: output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
            ? output.ScheduleExpression
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1EcsParameters = (output, context) => {
    return {
        Group: output.Group !== undefined && output.Group !== null ? output.Group : undefined,
        LaunchType: output.LaunchType !== undefined && output.LaunchType !== null ? output.LaunchType : undefined,
        NetworkConfiguration: output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
            ? deserializeAws_json1_1NetworkConfiguration(output.NetworkConfiguration, context)
            : undefined,
        PlatformVersion: output.PlatformVersion !== undefined && output.PlatformVersion !== null ? output.PlatformVersion : undefined,
        TaskCount: output.TaskCount !== undefined && output.TaskCount !== null ? output.TaskCount : undefined,
        TaskDefinitionArn: output.TaskDefinitionArn !== undefined && output.TaskDefinitionArn !== null
            ? output.TaskDefinitionArn
            : undefined,
    };
};
const deserializeAws_json1_1EventBus = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_json1_1EventBusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventBus(entry, context);
    });
};
const deserializeAws_json1_1EventSource = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedBy: output.CreatedBy !== undefined && output.CreatedBy !== null ? output.CreatedBy : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1EventSourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSource(entry, context);
    });
};
const deserializeAws_json1_1HeaderParametersMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1HttpParameters = (output, context) => {
    return {
        HeaderParameters: output.HeaderParameters !== undefined && output.HeaderParameters !== null
            ? deserializeAws_json1_1HeaderParametersMap(output.HeaderParameters, context)
            : undefined,
        PathParameterValues: output.PathParameterValues !== undefined && output.PathParameterValues !== null
            ? deserializeAws_json1_1PathParameterList(output.PathParameterValues, context)
            : undefined,
        QueryStringParameters: output.QueryStringParameters !== undefined && output.QueryStringParameters !== null
            ? deserializeAws_json1_1QueryStringParametersMap(output.QueryStringParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1IllegalStatusException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InputTransformer = (output, context) => {
    return {
        InputPathsMap: output.InputPathsMap !== undefined && output.InputPathsMap !== null
            ? deserializeAws_json1_1TransformerPaths(output.InputPathsMap, context)
            : undefined,
        InputTemplate: output.InputTemplate !== undefined && output.InputTemplate !== null ? output.InputTemplate : undefined,
    };
};
const deserializeAws_json1_1InternalException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidEventPatternException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1KinesisParameters = (output, context) => {
    return {
        PartitionKeyPath: output.PartitionKeyPath !== undefined && output.PartitionKeyPath !== null ? output.PartitionKeyPath : undefined,
    };
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListApiDestinationsResponse = (output, context) => {
    return {
        ApiDestinations: output.ApiDestinations !== undefined && output.ApiDestinations !== null
            ? deserializeAws_json1_1ApiDestinationResponseList(output.ApiDestinations, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListArchivesResponse = (output, context) => {
    return {
        Archives: output.Archives !== undefined && output.Archives !== null
            ? deserializeAws_json1_1ArchiveResponseList(output.Archives, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListConnectionsResponse = (output, context) => {
    return {
        Connections: output.Connections !== undefined && output.Connections !== null
            ? deserializeAws_json1_1ConnectionResponseList(output.Connections, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListEventBusesResponse = (output, context) => {
    return {
        EventBuses: output.EventBuses !== undefined && output.EventBuses !== null
            ? deserializeAws_json1_1EventBusList(output.EventBuses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListEventSourcesResponse = (output, context) => {
    return {
        EventSources: output.EventSources !== undefined && output.EventSources !== null
            ? deserializeAws_json1_1EventSourceList(output.EventSources, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PartnerEventSourceAccounts: output.PartnerEventSourceAccounts !== undefined && output.PartnerEventSourceAccounts !== null
            ? deserializeAws_json1_1PartnerEventSourceAccountList(output.PartnerEventSourceAccounts, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPartnerEventSourcesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PartnerEventSources: output.PartnerEventSources !== undefined && output.PartnerEventSources !== null
            ? deserializeAws_json1_1PartnerEventSourceList(output.PartnerEventSources, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListReplaysResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Replays: output.Replays !== undefined && output.Replays !== null
            ? deserializeAws_json1_1ReplayList(output.Replays, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRuleNamesByTargetResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        RuleNames: output.RuleNames !== undefined && output.RuleNames !== null
            ? deserializeAws_json1_1RuleNameList(output.RuleNames, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRulesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1RuleResponseList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTargetsByRuleResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1TargetList(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1ManagedRuleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1NetworkConfiguration = (output, context) => {
    return {
        awsvpcConfiguration: output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
            ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
            : undefined,
    };
};
const deserializeAws_json1_1OperationDisabledException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PartnerEventSource = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1PartnerEventSourceAccount = (output, context) => {
    return {
        Account: output.Account !== undefined && output.Account !== null ? output.Account : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        ExpirationTime: output.ExpirationTime !== undefined && output.ExpirationTime !== null
            ? new Date(Math.round(output.ExpirationTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1PartnerEventSourceAccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartnerEventSourceAccount(entry, context);
    });
};
const deserializeAws_json1_1PartnerEventSourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PartnerEventSource(entry, context);
    });
};
const deserializeAws_json1_1PathParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PolicyLengthExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1PutEventsResponse = (output, context) => {
    return {
        Entries: output.Entries !== undefined && output.Entries !== null
            ? deserializeAws_json1_1PutEventsResultEntryList(output.Entries, context)
            : undefined,
        FailedEntryCount: output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
    };
};
const deserializeAws_json1_1PutEventsResultEntry = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
    };
};
const deserializeAws_json1_1PutEventsResultEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PutEventsResultEntry(entry, context);
    });
};
const deserializeAws_json1_1PutPartnerEventsResponse = (output, context) => {
    return {
        Entries: output.Entries !== undefined && output.Entries !== null
            ? deserializeAws_json1_1PutPartnerEventsResultEntryList(output.Entries, context)
            : undefined,
        FailedEntryCount: output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
    };
};
const deserializeAws_json1_1PutPartnerEventsResultEntry = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
    };
};
const deserializeAws_json1_1PutPartnerEventsResultEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context);
    });
};
const deserializeAws_json1_1PutRuleResponse = (output, context) => {
    return {
        RuleArn: output.RuleArn !== undefined && output.RuleArn !== null ? output.RuleArn : undefined,
    };
};
const deserializeAws_json1_1PutTargetsResponse = (output, context) => {
    return {
        FailedEntries: output.FailedEntries !== undefined && output.FailedEntries !== null
            ? deserializeAws_json1_1PutTargetsResultEntryList(output.FailedEntries, context)
            : undefined,
        FailedEntryCount: output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
    };
};
const deserializeAws_json1_1PutTargetsResultEntry = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
    };
};
const deserializeAws_json1_1PutTargetsResultEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PutTargetsResultEntry(entry, context);
    });
};
const deserializeAws_json1_1QueryStringParametersMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1RedshiftDataParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        DbUser: output.DbUser !== undefined && output.DbUser !== null ? output.DbUser : undefined,
        SecretManagerArn: output.SecretManagerArn !== undefined && output.SecretManagerArn !== null ? output.SecretManagerArn : undefined,
        Sql: output.Sql !== undefined && output.Sql !== null ? output.Sql : undefined,
        StatementName: output.StatementName !== undefined && output.StatementName !== null ? output.StatementName : undefined,
        WithEvent: output.WithEvent !== undefined && output.WithEvent !== null ? output.WithEvent : undefined,
    };
};
const deserializeAws_json1_1RemoveTargetsResponse = (output, context) => {
    return {
        FailedEntries: output.FailedEntries !== undefined && output.FailedEntries !== null
            ? deserializeAws_json1_1RemoveTargetsResultEntryList(output.FailedEntries, context)
            : undefined,
        FailedEntryCount: output.FailedEntryCount !== undefined && output.FailedEntryCount !== null ? output.FailedEntryCount : undefined,
    };
};
const deserializeAws_json1_1RemoveTargetsResultEntry = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
    };
};
const deserializeAws_json1_1RemoveTargetsResultEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RemoveTargetsResultEntry(entry, context);
    });
};
const deserializeAws_json1_1Replay = (output, context) => {
    return {
        EventEndTime: output.EventEndTime !== undefined && output.EventEndTime !== null
            ? new Date(Math.round(output.EventEndTime * 1000))
            : undefined,
        EventLastReplayedTime: output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
            ? new Date(Math.round(output.EventLastReplayedTime * 1000))
            : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        EventStartTime: output.EventStartTime !== undefined && output.EventStartTime !== null
            ? new Date(Math.round(output.EventStartTime * 1000))
            : undefined,
        ReplayEndTime: output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
            ? new Date(Math.round(output.ReplayEndTime * 1000))
            : undefined,
        ReplayName: output.ReplayName !== undefined && output.ReplayName !== null ? output.ReplayName : undefined,
        ReplayStartTime: output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
            ? new Date(Math.round(output.ReplayStartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1ReplayDestination = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        FilterArns: output.FilterArns !== undefined && output.FilterArns !== null
            ? deserializeAws_json1_1ReplayDestinationFilters(output.FilterArns, context)
            : undefined,
    };
};
const deserializeAws_json1_1ReplayDestinationFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ReplayList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Replay(entry, context);
    });
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RetryPolicy = (output, context) => {
    return {
        MaximumEventAgeInSeconds: output.MaximumEventAgeInSeconds !== undefined && output.MaximumEventAgeInSeconds !== null
            ? output.MaximumEventAgeInSeconds
            : undefined,
        MaximumRetryAttempts: output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
            ? output.MaximumRetryAttempts
            : undefined,
    };
};
const deserializeAws_json1_1Rule = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EventBusName: output.EventBusName !== undefined && output.EventBusName !== null ? output.EventBusName : undefined,
        EventPattern: output.EventPattern !== undefined && output.EventPattern !== null ? output.EventPattern : undefined,
        ManagedBy: output.ManagedBy !== undefined && output.ManagedBy !== null ? output.ManagedBy : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        ScheduleExpression: output.ScheduleExpression !== undefined && output.ScheduleExpression !== null
            ? output.ScheduleExpression
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1RuleNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1RuleResponseList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Rule(entry, context);
    });
};
const deserializeAws_json1_1RunCommandParameters = (output, context) => {
    return {
        RunCommandTargets: output.RunCommandTargets !== undefined && output.RunCommandTargets !== null
            ? deserializeAws_json1_1RunCommandTargets(output.RunCommandTargets, context)
            : undefined,
    };
};
const deserializeAws_json1_1RunCommandTarget = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1RunCommandTargetValues(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1RunCommandTargets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1RunCommandTarget(entry, context);
    });
};
const deserializeAws_json1_1RunCommandTargetValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1SageMakerPipelineParameter = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1SageMakerPipelineParameterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SageMakerPipelineParameter(entry, context);
    });
};
const deserializeAws_json1_1SageMakerPipelineParameters = (output, context) => {
    return {
        PipelineParameterList: output.PipelineParameterList !== undefined && output.PipelineParameterList !== null
            ? deserializeAws_json1_1SageMakerPipelineParameterList(output.PipelineParameterList, context)
            : undefined,
    };
};
const deserializeAws_json1_1SqsParameters = (output, context) => {
    return {
        MessageGroupId: output.MessageGroupId !== undefined && output.MessageGroupId !== null ? output.MessageGroupId : undefined,
    };
};
const deserializeAws_json1_1StartReplayResponse = (output, context) => {
    return {
        ReplayArn: output.ReplayArn !== undefined && output.ReplayArn !== null ? output.ReplayArn : undefined,
        ReplayStartTime: output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
            ? new Date(Math.round(output.ReplayStartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Target = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        BatchParameters: output.BatchParameters !== undefined && output.BatchParameters !== null
            ? deserializeAws_json1_1BatchParameters(output.BatchParameters, context)
            : undefined,
        DeadLetterConfig: output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
            ? deserializeAws_json1_1DeadLetterConfig(output.DeadLetterConfig, context)
            : undefined,
        EcsParameters: output.EcsParameters !== undefined && output.EcsParameters !== null
            ? deserializeAws_json1_1EcsParameters(output.EcsParameters, context)
            : undefined,
        HttpParameters: output.HttpParameters !== undefined && output.HttpParameters !== null
            ? deserializeAws_json1_1HttpParameters(output.HttpParameters, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Input: output.Input !== undefined && output.Input !== null ? output.Input : undefined,
        InputPath: output.InputPath !== undefined && output.InputPath !== null ? output.InputPath : undefined,
        InputTransformer: output.InputTransformer !== undefined && output.InputTransformer !== null
            ? deserializeAws_json1_1InputTransformer(output.InputTransformer, context)
            : undefined,
        KinesisParameters: output.KinesisParameters !== undefined && output.KinesisParameters !== null
            ? deserializeAws_json1_1KinesisParameters(output.KinesisParameters, context)
            : undefined,
        RedshiftDataParameters: output.RedshiftDataParameters !== undefined && output.RedshiftDataParameters !== null
            ? deserializeAws_json1_1RedshiftDataParameters(output.RedshiftDataParameters, context)
            : undefined,
        RetryPolicy: output.RetryPolicy !== undefined && output.RetryPolicy !== null
            ? deserializeAws_json1_1RetryPolicy(output.RetryPolicy, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        RunCommandParameters: output.RunCommandParameters !== undefined && output.RunCommandParameters !== null
            ? deserializeAws_json1_1RunCommandParameters(output.RunCommandParameters, context)
            : undefined,
        SageMakerPipelineParameters: output.SageMakerPipelineParameters !== undefined && output.SageMakerPipelineParameters !== null
            ? deserializeAws_json1_1SageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
            : undefined,
        SqsParameters: output.SqsParameters !== undefined && output.SqsParameters !== null
            ? deserializeAws_json1_1SqsParameters(output.SqsParameters, context)
            : undefined,
    };
};
const deserializeAws_json1_1TargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Target(entry, context);
    });
};
const deserializeAws_json1_1TestEventPatternResponse = (output, context) => {
    return {
        Result: output.Result !== undefined && output.Result !== null ? output.Result : undefined,
    };
};
const deserializeAws_json1_1TransformerPaths = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateApiDestinationResponse = (output, context) => {
    return {
        ApiDestinationArn: output.ApiDestinationArn !== undefined && output.ApiDestinationArn !== null
            ? output.ApiDestinationArn
            : undefined,
        ApiDestinationState: output.ApiDestinationState !== undefined && output.ApiDestinationState !== null
            ? output.ApiDestinationState
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1UpdateArchiveResponse = (output, context) => {
    return {
        ArchiveArn: output.ArchiveArn !== undefined && output.ArchiveArn !== null ? output.ArchiveArn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
    };
};
const deserializeAws_json1_1UpdateConnectionResponse = (output, context) => {
    return {
        ConnectionArn: output.ConnectionArn !== undefined && output.ConnectionArn !== null ? output.ConnectionArn : undefined,
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastAuthorizedTime: output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
            ? new Date(Math.round(output.LastAuthorizedTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
    };
};
const deserializeMetadata = (output) => {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_1.HttpRequest(contents);
};
const parseBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
        return JSON.parse(encoded);
    }
    return {};
});
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_1.js.map