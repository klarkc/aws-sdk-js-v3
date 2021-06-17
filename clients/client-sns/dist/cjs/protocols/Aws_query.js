"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryDeleteTopicCommand = exports.deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand = exports.deserializeAws_queryDeletePlatformApplicationCommand = exports.deserializeAws_queryDeleteEndpointCommand = exports.deserializeAws_queryCreateTopicCommand = exports.deserializeAws_queryCreateSMSSandboxPhoneNumberCommand = exports.deserializeAws_queryCreatePlatformEndpointCommand = exports.deserializeAws_queryCreatePlatformApplicationCommand = exports.deserializeAws_queryConfirmSubscriptionCommand = exports.deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = exports.deserializeAws_queryAddPermissionCommand = exports.serializeAws_queryVerifySMSSandboxPhoneNumberCommand = exports.serializeAws_queryUntagResourceCommand = exports.serializeAws_queryUnsubscribeCommand = exports.serializeAws_queryTagResourceCommand = exports.serializeAws_querySubscribeCommand = exports.serializeAws_querySetTopicAttributesCommand = exports.serializeAws_querySetSubscriptionAttributesCommand = exports.serializeAws_querySetSMSAttributesCommand = exports.serializeAws_querySetPlatformApplicationAttributesCommand = exports.serializeAws_querySetEndpointAttributesCommand = exports.serializeAws_queryRemovePermissionCommand = exports.serializeAws_queryPublishCommand = exports.serializeAws_queryOptInPhoneNumberCommand = exports.serializeAws_queryListTopicsCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryListSubscriptionsByTopicCommand = exports.serializeAws_queryListSubscriptionsCommand = exports.serializeAws_queryListSMSSandboxPhoneNumbersCommand = exports.serializeAws_queryListPlatformApplicationsCommand = exports.serializeAws_queryListPhoneNumbersOptedOutCommand = exports.serializeAws_queryListOriginationNumbersCommand = exports.serializeAws_queryListEndpointsByPlatformApplicationCommand = exports.serializeAws_queryGetTopicAttributesCommand = exports.serializeAws_queryGetSubscriptionAttributesCommand = exports.serializeAws_queryGetSMSSandboxAccountStatusCommand = exports.serializeAws_queryGetSMSAttributesCommand = exports.serializeAws_queryGetPlatformApplicationAttributesCommand = exports.serializeAws_queryGetEndpointAttributesCommand = exports.serializeAws_queryDeleteTopicCommand = exports.serializeAws_queryDeleteSMSSandboxPhoneNumberCommand = exports.serializeAws_queryDeletePlatformApplicationCommand = exports.serializeAws_queryDeleteEndpointCommand = exports.serializeAws_queryCreateTopicCommand = exports.serializeAws_queryCreateSMSSandboxPhoneNumberCommand = exports.serializeAws_queryCreatePlatformEndpointCommand = exports.serializeAws_queryCreatePlatformApplicationCommand = exports.serializeAws_queryConfirmSubscriptionCommand = exports.serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = exports.serializeAws_queryAddPermissionCommand = void 0;
exports.deserializeAws_queryVerifySMSSandboxPhoneNumberCommand = exports.deserializeAws_queryUntagResourceCommand = exports.deserializeAws_queryUnsubscribeCommand = exports.deserializeAws_queryTagResourceCommand = exports.deserializeAws_querySubscribeCommand = exports.deserializeAws_querySetTopicAttributesCommand = exports.deserializeAws_querySetSubscriptionAttributesCommand = exports.deserializeAws_querySetSMSAttributesCommand = exports.deserializeAws_querySetPlatformApplicationAttributesCommand = exports.deserializeAws_querySetEndpointAttributesCommand = exports.deserializeAws_queryRemovePermissionCommand = exports.deserializeAws_queryPublishCommand = exports.deserializeAws_queryOptInPhoneNumberCommand = exports.deserializeAws_queryListTopicsCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryListSubscriptionsByTopicCommand = exports.deserializeAws_queryListSubscriptionsCommand = exports.deserializeAws_queryListSMSSandboxPhoneNumbersCommand = exports.deserializeAws_queryListPlatformApplicationsCommand = exports.deserializeAws_queryListPhoneNumbersOptedOutCommand = exports.deserializeAws_queryListOriginationNumbersCommand = exports.deserializeAws_queryListEndpointsByPlatformApplicationCommand = exports.deserializeAws_queryGetTopicAttributesCommand = exports.deserializeAws_queryGetSubscriptionAttributesCommand = exports.deserializeAws_queryGetSMSSandboxAccountStatusCommand = exports.deserializeAws_queryGetSMSAttributesCommand = exports.deserializeAws_queryGetPlatformApplicationAttributesCommand = exports.deserializeAws_queryGetEndpointAttributesCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddPermissionInput(input, context),
        Action: "AddPermission",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddPermissionCommand = serializeAws_queryAddPermissionCommand;
const serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCheckIfPhoneNumberIsOptedOutInput(input, context),
        Action: "CheckIfPhoneNumberIsOptedOut",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = serializeAws_queryCheckIfPhoneNumberIsOptedOutCommand;
const serializeAws_queryConfirmSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryConfirmSubscriptionInput(input, context),
        Action: "ConfirmSubscription",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryConfirmSubscriptionCommand = serializeAws_queryConfirmSubscriptionCommand;
const serializeAws_queryCreatePlatformApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreatePlatformApplicationInput(input, context),
        Action: "CreatePlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreatePlatformApplicationCommand = serializeAws_queryCreatePlatformApplicationCommand;
const serializeAws_queryCreatePlatformEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreatePlatformEndpointInput(input, context),
        Action: "CreatePlatformEndpoint",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreatePlatformEndpointCommand = serializeAws_queryCreatePlatformEndpointCommand;
const serializeAws_queryCreateSMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateSMSSandboxPhoneNumberInput(input, context),
        Action: "CreateSMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateSMSSandboxPhoneNumberCommand = serializeAws_queryCreateSMSSandboxPhoneNumberCommand;
const serializeAws_queryCreateTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateTopicInput(input, context),
        Action: "CreateTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateTopicCommand = serializeAws_queryCreateTopicCommand;
const serializeAws_queryDeleteEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteEndpointInput(input, context),
        Action: "DeleteEndpoint",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteEndpointCommand = serializeAws_queryDeleteEndpointCommand;
const serializeAws_queryDeletePlatformApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeletePlatformApplicationInput(input, context),
        Action: "DeletePlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePlatformApplicationCommand = serializeAws_queryDeletePlatformApplicationCommand;
const serializeAws_queryDeleteSMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSMSSandboxPhoneNumberInput(input, context),
        Action: "DeleteSMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSMSSandboxPhoneNumberCommand = serializeAws_queryDeleteSMSSandboxPhoneNumberCommand;
const serializeAws_queryDeleteTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteTopicInput(input, context),
        Action: "DeleteTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteTopicCommand = serializeAws_queryDeleteTopicCommand;
const serializeAws_queryGetEndpointAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetEndpointAttributesInput(input, context),
        Action: "GetEndpointAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetEndpointAttributesCommand = serializeAws_queryGetEndpointAttributesCommand;
const serializeAws_queryGetPlatformApplicationAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetPlatformApplicationAttributesInput(input, context),
        Action: "GetPlatformApplicationAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetPlatformApplicationAttributesCommand = serializeAws_queryGetPlatformApplicationAttributesCommand;
const serializeAws_queryGetSMSAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSMSAttributesInput(input, context),
        Action: "GetSMSAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSMSAttributesCommand = serializeAws_queryGetSMSAttributesCommand;
const serializeAws_queryGetSMSSandboxAccountStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSMSSandboxAccountStatusInput(input, context),
        Action: "GetSMSSandboxAccountStatus",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSMSSandboxAccountStatusCommand = serializeAws_queryGetSMSSandboxAccountStatusCommand;
const serializeAws_queryGetSubscriptionAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetSubscriptionAttributesInput(input, context),
        Action: "GetSubscriptionAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetSubscriptionAttributesCommand = serializeAws_queryGetSubscriptionAttributesCommand;
const serializeAws_queryGetTopicAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetTopicAttributesInput(input, context),
        Action: "GetTopicAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetTopicAttributesCommand = serializeAws_queryGetTopicAttributesCommand;
const serializeAws_queryListEndpointsByPlatformApplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListEndpointsByPlatformApplicationInput(input, context),
        Action: "ListEndpointsByPlatformApplication",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListEndpointsByPlatformApplicationCommand = serializeAws_queryListEndpointsByPlatformApplicationCommand;
const serializeAws_queryListOriginationNumbersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListOriginationNumbersRequest(input, context),
        Action: "ListOriginationNumbers",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListOriginationNumbersCommand = serializeAws_queryListOriginationNumbersCommand;
const serializeAws_queryListPhoneNumbersOptedOutCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPhoneNumbersOptedOutInput(input, context),
        Action: "ListPhoneNumbersOptedOut",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPhoneNumbersOptedOutCommand = serializeAws_queryListPhoneNumbersOptedOutCommand;
const serializeAws_queryListPlatformApplicationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListPlatformApplicationsInput(input, context),
        Action: "ListPlatformApplications",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListPlatformApplicationsCommand = serializeAws_queryListPlatformApplicationsCommand;
const serializeAws_queryListSMSSandboxPhoneNumbersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSMSSandboxPhoneNumbersInput(input, context),
        Action: "ListSMSSandboxPhoneNumbers",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSMSSandboxPhoneNumbersCommand = serializeAws_queryListSMSSandboxPhoneNumbersCommand;
const serializeAws_queryListSubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSubscriptionsInput(input, context),
        Action: "ListSubscriptions",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSubscriptionsCommand = serializeAws_queryListSubscriptionsCommand;
const serializeAws_queryListSubscriptionsByTopicCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListSubscriptionsByTopicInput(input, context),
        Action: "ListSubscriptionsByTopic",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListSubscriptionsByTopicCommand = serializeAws_queryListSubscriptionsByTopicCommand;
const serializeAws_queryListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTagsForResourceRequest(input, context),
        Action: "ListTagsForResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
const serializeAws_queryListTopicsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTopicsInput(input, context),
        Action: "ListTopics",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTopicsCommand = serializeAws_queryListTopicsCommand;
const serializeAws_queryOptInPhoneNumberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryOptInPhoneNumberInput(input, context),
        Action: "OptInPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryOptInPhoneNumberCommand = serializeAws_queryOptInPhoneNumberCommand;
const serializeAws_queryPublishCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPublishInput(input, context),
        Action: "Publish",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPublishCommand = serializeAws_queryPublishCommand;
const serializeAws_queryRemovePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemovePermissionInput(input, context),
        Action: "RemovePermission",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemovePermissionCommand = serializeAws_queryRemovePermissionCommand;
const serializeAws_querySetEndpointAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetEndpointAttributesInput(input, context),
        Action: "SetEndpointAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetEndpointAttributesCommand = serializeAws_querySetEndpointAttributesCommand;
const serializeAws_querySetPlatformApplicationAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetPlatformApplicationAttributesInput(input, context),
        Action: "SetPlatformApplicationAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetPlatformApplicationAttributesCommand = serializeAws_querySetPlatformApplicationAttributesCommand;
const serializeAws_querySetSMSAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetSMSAttributesInput(input, context),
        Action: "SetSMSAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetSMSAttributesCommand = serializeAws_querySetSMSAttributesCommand;
const serializeAws_querySetSubscriptionAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetSubscriptionAttributesInput(input, context),
        Action: "SetSubscriptionAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetSubscriptionAttributesCommand = serializeAws_querySetSubscriptionAttributesCommand;
const serializeAws_querySetTopicAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySetTopicAttributesInput(input, context),
        Action: "SetTopicAttributes",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySetTopicAttributesCommand = serializeAws_querySetTopicAttributesCommand;
const serializeAws_querySubscribeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_querySubscribeInput(input, context),
        Action: "Subscribe",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_querySubscribeCommand = serializeAws_querySubscribeCommand;
const serializeAws_queryTagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTagResourceRequest(input, context),
        Action: "TagResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTagResourceCommand = serializeAws_queryTagResourceCommand;
const serializeAws_queryUnsubscribeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUnsubscribeInput(input, context),
        Action: "Unsubscribe",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUnsubscribeCommand = serializeAws_queryUnsubscribeCommand;
const serializeAws_queryUntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUntagResourceRequest(input, context),
        Action: "UntagResource",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUntagResourceCommand = serializeAws_queryUntagResourceCommand;
const serializeAws_queryVerifySMSSandboxPhoneNumberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryVerifySMSSandboxPhoneNumberInput(input, context),
        Action: "VerifySMSSandboxPhoneNumber",
        Version: "2010-03-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryVerifySMSSandboxPhoneNumberCommand = serializeAws_queryVerifySMSSandboxPhoneNumberCommand;
const deserializeAws_queryAddPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddPermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddPermissionCommand = deserializeAws_queryAddPermissionCommand;
const deserializeAws_queryAddPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse(data.CheckIfPhoneNumberIsOptedOutResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand = deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommand;
const deserializeAws_queryCheckIfPhoneNumberIsOptedOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryConfirmSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryConfirmSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryConfirmSubscriptionResponse(data.ConfirmSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryConfirmSubscriptionCommand = deserializeAws_queryConfirmSubscriptionCommand;
const deserializeAws_queryConfirmSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            response = {
                ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionLimitExceededException":
        case "com.amazonaws.sns#SubscriptionLimitExceededException":
            response = {
                ...(await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreatePlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreatePlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreatePlatformApplicationResponse(data.CreatePlatformApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreatePlatformApplicationCommand = deserializeAws_queryCreatePlatformApplicationCommand;
const deserializeAws_queryCreatePlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreatePlatformEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreatePlatformEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateEndpointResponse(data.CreatePlatformEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreatePlatformEndpointCommand = deserializeAws_queryCreatePlatformEndpointCommand;
const deserializeAws_queryCreatePlatformEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateSMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateSMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSMSSandboxPhoneNumberResult(data.CreateSMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateSMSSandboxPhoneNumberCommand = deserializeAws_queryCreateSMSSandboxPhoneNumberCommand;
const deserializeAws_queryCreateSMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptedOutException":
        case "com.amazonaws.sns#OptedOutException":
            response = {
                ...(await deserializeAws_queryOptedOutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserErrorException":
        case "com.amazonaws.sns#UserErrorException":
            response = {
                ...(await deserializeAws_queryUserErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateTopicResponse(data.CreateTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateTopicCommand = deserializeAws_queryCreateTopicCommand;
const deserializeAws_queryCreateTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentAccessException":
        case "com.amazonaws.sns#ConcurrentAccessException":
            response = {
                ...(await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StaleTagException":
        case "com.amazonaws.sns#StaleTagException":
            response = {
                ...(await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.sns#TagLimitExceededException":
            response = {
                ...(await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.sns#TagPolicyException":
            response = {
                ...(await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TopicLimitExceededException":
        case "com.amazonaws.sns#TopicLimitExceededException":
            response = {
                ...(await deserializeAws_queryTopicLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteEndpointCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteEndpointCommand = deserializeAws_queryDeleteEndpointCommand;
const deserializeAws_queryDeleteEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeletePlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeletePlatformApplicationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePlatformApplicationCommand = deserializeAws_queryDeletePlatformApplicationCommand;
const deserializeAws_queryDeletePlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteSMSSandboxPhoneNumberResult(data.DeleteSMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand = deserializeAws_queryDeleteSMSSandboxPhoneNumberCommand;
const deserializeAws_queryDeleteSMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserErrorException":
        case "com.amazonaws.sns#UserErrorException":
            response = {
                ...(await deserializeAws_queryUserErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteTopicCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteTopicCommand = deserializeAws_queryDeleteTopicCommand;
const deserializeAws_queryDeleteTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentAccessException":
        case "com.amazonaws.sns#ConcurrentAccessException":
            response = {
                ...(await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StaleTagException":
        case "com.amazonaws.sns#StaleTagException":
            response = {
                ...(await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.sns#TagPolicyException":
            response = {
                ...(await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetEndpointAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetEndpointAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetEndpointAttributesResponse(data.GetEndpointAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetEndpointAttributesCommand = deserializeAws_queryGetEndpointAttributesCommand;
const deserializeAws_queryGetEndpointAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetPlatformApplicationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetPlatformApplicationAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetPlatformApplicationAttributesResponse(data.GetPlatformApplicationAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetPlatformApplicationAttributesCommand = deserializeAws_queryGetPlatformApplicationAttributesCommand;
const deserializeAws_queryGetPlatformApplicationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSMSAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSMSAttributesResponse(data.GetSMSAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSMSAttributesCommand = deserializeAws_queryGetSMSAttributesCommand;
const deserializeAws_queryGetSMSAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSMSSandboxAccountStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSMSSandboxAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSMSSandboxAccountStatusResult(data.GetSMSSandboxAccountStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSMSSandboxAccountStatusCommand = deserializeAws_queryGetSMSSandboxAccountStatusCommand;
const deserializeAws_queryGetSMSSandboxAccountStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetSubscriptionAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetSubscriptionAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetSubscriptionAttributesResponse(data.GetSubscriptionAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetSubscriptionAttributesCommand = deserializeAws_queryGetSubscriptionAttributesCommand;
const deserializeAws_queryGetSubscriptionAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryGetTopicAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetTopicAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetTopicAttributesResponse(data.GetTopicAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetTopicAttributesCommand = deserializeAws_queryGetTopicAttributesCommand;
const deserializeAws_queryGetTopicAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListEndpointsByPlatformApplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListEndpointsByPlatformApplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListEndpointsByPlatformApplicationResponse(data.ListEndpointsByPlatformApplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListEndpointsByPlatformApplicationCommand = deserializeAws_queryListEndpointsByPlatformApplicationCommand;
const deserializeAws_queryListEndpointsByPlatformApplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListOriginationNumbersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListOriginationNumbersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListOriginationNumbersResult(data.ListOriginationNumbersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListOriginationNumbersCommand = deserializeAws_queryListOriginationNumbersCommand;
const deserializeAws_queryListOriginationNumbersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.sns#ValidationException":
            response = {
                ...(await deserializeAws_queryValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPhoneNumbersOptedOutCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPhoneNumbersOptedOutCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPhoneNumbersOptedOutResponse(data.ListPhoneNumbersOptedOutResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPhoneNumbersOptedOutCommand = deserializeAws_queryListPhoneNumbersOptedOutCommand;
const deserializeAws_queryListPhoneNumbersOptedOutCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListPlatformApplicationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListPlatformApplicationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListPlatformApplicationsResponse(data.ListPlatformApplicationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListPlatformApplicationsCommand = deserializeAws_queryListPlatformApplicationsCommand;
const deserializeAws_queryListPlatformApplicationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSMSSandboxPhoneNumbersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSMSSandboxPhoneNumbersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSMSSandboxPhoneNumbersResult(data.ListSMSSandboxPhoneNumbersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSMSSandboxPhoneNumbersCommand = deserializeAws_queryListSMSSandboxPhoneNumbersCommand;
const deserializeAws_queryListSMSSandboxPhoneNumbersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSubscriptionsResponse(data.ListSubscriptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSubscriptionsCommand = deserializeAws_queryListSubscriptionsCommand;
const deserializeAws_queryListSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListSubscriptionsByTopicCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListSubscriptionsByTopicCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListSubscriptionsByTopicResponse(data.ListSubscriptionsByTopicResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListSubscriptionsByTopicCommand = deserializeAws_queryListSubscriptionsByTopicCommand;
const deserializeAws_queryListSubscriptionsByTopicCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTagsForResourceResponse(data.ListTagsForResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
const deserializeAws_queryListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentAccessException":
        case "com.amazonaws.sns#ConcurrentAccessException":
            response = {
                ...(await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.sns#TagPolicyException":
            response = {
                ...(await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListTopicsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTopicsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListTopicsResponse(data.ListTopicsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTopicsCommand = deserializeAws_queryListTopicsCommand;
const deserializeAws_queryListTopicsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryOptInPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryOptInPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptInPhoneNumberResponse(data.OptInPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryOptInPhoneNumberCommand = deserializeAws_queryOptInPhoneNumberCommand;
const deserializeAws_queryOptInPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPublishCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPublishCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPublishResponse(data.PublishResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPublishCommand = deserializeAws_queryPublishCommand;
const deserializeAws_queryPublishCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointDisabledException":
        case "com.amazonaws.sns#EndpointDisabledException":
            response = {
                ...(await deserializeAws_queryEndpointDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.sns#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSAccessDeniedException":
        case "com.amazonaws.sns#KMSAccessDeniedException":
            response = {
                ...(await deserializeAws_queryKMSAccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSDisabledException":
        case "com.amazonaws.sns#KMSDisabledException":
            response = {
                ...(await deserializeAws_queryKMSDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSInvalidStateException":
        case "com.amazonaws.sns#KMSInvalidStateException":
            response = {
                ...(await deserializeAws_queryKMSInvalidStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSNotFoundException":
        case "com.amazonaws.sns#KMSNotFoundException":
            response = {
                ...(await deserializeAws_queryKMSNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSOptInRequired":
        case "com.amazonaws.sns#KMSOptInRequired":
            response = {
                ...(await deserializeAws_queryKMSOptInRequiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSThrottlingException":
        case "com.amazonaws.sns#KMSThrottlingException":
            response = {
                ...(await deserializeAws_queryKMSThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PlatformApplicationDisabledException":
        case "com.amazonaws.sns#PlatformApplicationDisabledException":
            response = {
                ...(await deserializeAws_queryPlatformApplicationDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemovePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemovePermissionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemovePermissionCommand = deserializeAws_queryRemovePermissionCommand;
const deserializeAws_queryRemovePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetEndpointAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetEndpointAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetEndpointAttributesCommand = deserializeAws_querySetEndpointAttributesCommand;
const deserializeAws_querySetEndpointAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetPlatformApplicationAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetPlatformApplicationAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetPlatformApplicationAttributesCommand = deserializeAws_querySetPlatformApplicationAttributesCommand;
const deserializeAws_querySetPlatformApplicationAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetSMSAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetSMSAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySetSMSAttributesResponse(data.SetSMSAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetSMSAttributesCommand = deserializeAws_querySetSMSAttributesCommand;
const deserializeAws_querySetSMSAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetSubscriptionAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetSubscriptionAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetSubscriptionAttributesCommand = deserializeAws_querySetSubscriptionAttributesCommand;
const deserializeAws_querySetSubscriptionAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            response = {
                ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySetTopicAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySetTopicAttributesCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySetTopicAttributesCommand = deserializeAws_querySetTopicAttributesCommand;
const deserializeAws_querySetTopicAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_querySubscribeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_querySubscribeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySubscribeResponse(data.SubscribeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_querySubscribeCommand = deserializeAws_querySubscribeCommand;
const deserializeAws_querySubscribeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FilterPolicyLimitExceededException":
        case "com.amazonaws.sns#FilterPolicyLimitExceededException":
            response = {
                ...(await deserializeAws_queryFilterPolicyLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionLimitExceededException":
        case "com.amazonaws.sns#SubscriptionLimitExceededException":
            response = {
                ...(await deserializeAws_querySubscriptionLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagResourceResponse(data.TagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTagResourceCommand = deserializeAws_queryTagResourceCommand;
const deserializeAws_queryTagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentAccessException":
        case "com.amazonaws.sns#ConcurrentAccessException":
            response = {
                ...(await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StaleTagException":
        case "com.amazonaws.sns#StaleTagException":
            response = {
                ...(await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.sns#TagLimitExceededException":
            response = {
                ...(await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.sns#TagPolicyException":
            response = {
                ...(await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUnsubscribeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUnsubscribeCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUnsubscribeCommand = deserializeAws_queryUnsubscribeCommand;
const deserializeAws_queryUnsubscribeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSecurityException":
        case "com.amazonaws.sns#InvalidSecurityException":
            response = {
                ...(await deserializeAws_queryInvalidSecurityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.sns#NotFoundException":
            response = {
                ...(await deserializeAws_queryNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryUntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUntagResourceResponse(data.UntagResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUntagResourceCommand = deserializeAws_queryUntagResourceCommand;
const deserializeAws_queryUntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentAccessException":
        case "com.amazonaws.sns#ConcurrentAccessException":
            response = {
                ...(await deserializeAws_queryConcurrentAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StaleTagException":
        case "com.amazonaws.sns#StaleTagException":
            response = {
                ...(await deserializeAws_queryStaleTagExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.sns#TagLimitExceededException":
            response = {
                ...(await deserializeAws_queryTagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyException":
        case "com.amazonaws.sns#TagPolicyException":
            response = {
                ...(await deserializeAws_queryTagPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryVerifySMSSandboxPhoneNumberCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryVerifySMSSandboxPhoneNumberCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryVerifySMSSandboxPhoneNumberResult(data.VerifySMSSandboxPhoneNumberResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryVerifySMSSandboxPhoneNumberCommand = deserializeAws_queryVerifySMSSandboxPhoneNumberCommand;
const deserializeAws_queryVerifySMSSandboxPhoneNumberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationErrorException":
        case "com.amazonaws.sns#AuthorizationErrorException":
            response = {
                ...(await deserializeAws_queryAuthorizationErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.sns#InternalErrorException":
            response = {
                ...(await deserializeAws_queryInternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.sns#InvalidParameterException":
            response = {
                ...(await deserializeAws_queryInvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.sns#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottledException":
        case "com.amazonaws.sns#ThrottledException":
            response = {
                ...(await deserializeAws_queryThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "VerificationException":
        case "com.amazonaws.sns#VerificationException":
            response = {
                ...(await deserializeAws_queryVerificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAuthorizationErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationErrorException(body.Error, context);
    const contents = {
        name: "AuthorizationErrorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryConcurrentAccessExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryConcurrentAccessException(body.Error, context);
    const contents = {
        name: "ConcurrentAccessException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointDisabledException(body.Error, context);
    const contents = {
        name: "EndpointDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryFilterPolicyLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryFilterPolicyLimitExceededException(body.Error, context);
    const contents = {
        name: "FilterPolicyLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalErrorException(body.Error, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterException(body.Error, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSecurityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSecurityException(body.Error, context);
    const contents = {
        name: "InvalidSecurityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSAccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSAccessDeniedException(body.Error, context);
    const contents = {
        name: "KMSAccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSDisabledException(body.Error, context);
    const contents = {
        name: "KMSDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSInvalidStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSInvalidStateException(body.Error, context);
    const contents = {
        name: "KMSInvalidStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSNotFoundException(body.Error, context);
    const contents = {
        name: "KMSNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSOptInRequiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSOptInRequired(body.Error, context);
    const contents = {
        name: "KMSOptInRequired",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryKMSThrottlingExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSThrottlingException(body.Error, context);
    const contents = {
        name: "KMSThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNotFoundException(body.Error, context);
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryOptedOutExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptedOutException(body.Error, context);
    const contents = {
        name: "OptedOutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPlatformApplicationDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPlatformApplicationDisabledException(body.Error, context);
    const contents = {
        name: "PlatformApplicationDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundException(body.Error, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryStaleTagExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStaleTagException(body.Error, context);
    const contents = {
        name: "StaleTagException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubscriptionLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionLimitExceededException(body.Error, context);
    const contents = {
        name: "SubscriptionLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagLimitExceededException(body.Error, context);
    const contents = {
        name: "TagLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTagPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagPolicyException(body.Error, context);
    const contents = {
        name: "TagPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryThrottledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryThrottledException(body.Error, context);
    const contents = {
        name: "ThrottledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTopicLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTopicLimitExceededException(body.Error, context);
    const contents = {
        name: "TopicLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserErrorException(body.Error, context);
    const contents = {
        name: "UserErrorException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryValidationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryValidationException(body.Error, context);
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryVerificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryVerificationException(body.Error, context);
    const contents = {
        name: "VerificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryActionsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAddPermissionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    if (input.AWSAccountId !== undefined && input.AWSAccountId !== null) {
        const memberEntries = serializeAws_queryDelegatesList(input.AWSAccountId, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AWSAccountId.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ActionName !== undefined && input.ActionName !== null) {
        const memberEntries = serializeAws_queryActionsList(input.ActionName, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ActionName.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCheckIfPhoneNumberIsOptedOutInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber !== undefined && input.phoneNumber !== null) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const serializeAws_queryConfirmSubscriptionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Token !== undefined && input.Token !== null) {
        entries["Token"] = input.Token;
    }
    if (input.AuthenticateOnUnsubscribe !== undefined && input.AuthenticateOnUnsubscribe !== null) {
        entries["AuthenticateOnUnsubscribe"] = input.AuthenticateOnUnsubscribe;
    }
    return entries;
};
const serializeAws_queryCreatePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Platform !== undefined && input.Platform !== null) {
        entries["Platform"] = input.Platform;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreatePlatformEndpointInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined && input.PlatformApplicationArn !== null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.Token !== undefined && input.Token !== null) {
        entries["Token"] = input.Token;
    }
    if (input.CustomUserData !== undefined && input.CustomUserData !== null) {
        entries["CustomUserData"] = input.CustomUserData;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateSMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber !== undefined && input.PhoneNumber !== null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.LanguageCode !== undefined && input.LanguageCode !== null) {
        entries["LanguageCode"] = input.LanguageCode;
    }
    return entries;
};
const serializeAws_queryCreateTopicInput = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryTopicAttributesMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDelegatesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteEndpointInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn !== undefined && input.EndpointArn !== null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const serializeAws_queryDeletePlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined && input.PlatformApplicationArn !== null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_queryDeleteSMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber !== undefined && input.PhoneNumber !== null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    return entries;
};
const serializeAws_queryDeleteTopicInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryGetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn !== undefined && input.EndpointArn !== null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    return entries;
};
const serializeAws_queryGetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined && input.PlatformApplicationArn !== null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    return entries;
};
const serializeAws_queryGetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes !== undefined && input.attributes !== null) {
        const memberEntries = serializeAws_queryListString(input.attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetSMSSandboxAccountStatusInput = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryGetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn !== undefined && input.SubscriptionArn !== null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const serializeAws_queryGetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    return entries;
};
const serializeAws_queryListEndpointsByPlatformApplicationInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined && input.PlatformApplicationArn !== null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListOriginationNumbersRequest = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const serializeAws_queryListPhoneNumbersOptedOutInput = (input, context) => {
    const entries = {};
    if (input.nextToken !== undefined && input.nextToken !== null) {
        entries["nextToken"] = input.nextToken;
    }
    return entries;
};
const serializeAws_queryListPlatformApplicationsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListSMSSandboxPhoneNumbersInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    if (input.MaxResults !== undefined && input.MaxResults !== null) {
        entries["MaxResults"] = input.MaxResults;
    }
    return entries;
};
const serializeAws_queryListString = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryListSubscriptionsByTopicInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListSubscriptionsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    return entries;
};
const serializeAws_queryListTopicsInput = (input, context) => {
    const entries = {};
    if (input.NextToken !== undefined && input.NextToken !== null) {
        entries["NextToken"] = input.NextToken;
    }
    return entries;
};
const serializeAws_queryMapStringToString = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageAttributeMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.Name`] = key;
        const memberEntries = serializeAws_queryMessageAttributeValue(input[key], context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`entry.${counter}.Value.${key}`] = value;
        });
        counter++;
    });
    return entries;
};
const serializeAws_queryMessageAttributeValue = (input, context) => {
    const entries = {};
    if (input.DataType !== undefined && input.DataType !== null) {
        entries["DataType"] = input.DataType;
    }
    if (input.StringValue !== undefined && input.StringValue !== null) {
        entries["StringValue"] = input.StringValue;
    }
    if (input.BinaryValue !== undefined && input.BinaryValue !== null) {
        entries["BinaryValue"] = context.base64Encoder(input.BinaryValue);
    }
    return entries;
};
const serializeAws_queryOptInPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.phoneNumber !== undefined && input.phoneNumber !== null) {
        entries["phoneNumber"] = input.phoneNumber;
    }
    return entries;
};
const serializeAws_queryPublishInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.TargetArn !== undefined && input.TargetArn !== null) {
        entries["TargetArn"] = input.TargetArn;
    }
    if (input.PhoneNumber !== undefined && input.PhoneNumber !== null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.Message !== undefined && input.Message !== null) {
        entries["Message"] = input.Message;
    }
    if (input.Subject !== undefined && input.Subject !== null) {
        entries["Subject"] = input.Subject;
    }
    if (input.MessageStructure !== undefined && input.MessageStructure !== null) {
        entries["MessageStructure"] = input.MessageStructure;
    }
    if (input.MessageAttributes !== undefined && input.MessageAttributes !== null) {
        const memberEntries = serializeAws_queryMessageAttributeMap(input.MessageAttributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `MessageAttributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.MessageDeduplicationId !== undefined && input.MessageDeduplicationId !== null) {
        entries["MessageDeduplicationId"] = input.MessageDeduplicationId;
    }
    if (input.MessageGroupId !== undefined && input.MessageGroupId !== null) {
        entries["MessageGroupId"] = input.MessageGroupId;
    }
    return entries;
};
const serializeAws_queryRemovePermissionInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Label !== undefined && input.Label !== null) {
        entries["Label"] = input.Label;
    }
    return entries;
};
const serializeAws_querySetEndpointAttributesInput = (input, context) => {
    const entries = {};
    if (input.EndpointArn !== undefined && input.EndpointArn !== null) {
        entries["EndpointArn"] = input.EndpointArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetPlatformApplicationAttributesInput = (input, context) => {
    const entries = {};
    if (input.PlatformApplicationArn !== undefined && input.PlatformApplicationArn !== null) {
        entries["PlatformApplicationArn"] = input.PlatformApplicationArn;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_queryMapStringToString(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetSMSAttributesInput = (input, context) => {
    const entries = {};
    if (input.attributes !== undefined && input.attributes !== null) {
        const memberEntries = serializeAws_queryMapStringToString(input.attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `attributes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySetSubscriptionAttributesInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn !== undefined && input.SubscriptionArn !== null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined && input.AttributeValue !== null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const serializeAws_querySetTopicAttributesInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.AttributeValue !== undefined && input.AttributeValue !== null) {
        entries["AttributeValue"] = input.AttributeValue;
    }
    return entries;
};
const serializeAws_querySubscribeInput = (input, context) => {
    const entries = {};
    if (input.TopicArn !== undefined && input.TopicArn !== null) {
        entries["TopicArn"] = input.TopicArn;
    }
    if (input.Protocol !== undefined && input.Protocol !== null) {
        entries["Protocol"] = input.Protocol;
    }
    if (input.Endpoint !== undefined && input.Endpoint !== null) {
        entries["Endpoint"] = input.Endpoint;
    }
    if (input.Attributes !== undefined && input.Attributes !== null) {
        const memberEntries = serializeAws_querySubscriptionAttributesMap(input.Attributes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Attributes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReturnSubscriptionArn !== undefined && input.ReturnSubscriptionArn !== null) {
        entries["ReturnSubscriptionArn"] = input.ReturnSubscriptionArn;
    }
    return entries;
};
const serializeAws_querySubscriptionAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTopicAttributesMap = (input, context) => {
    const entries = {};
    let counter = 1;
    Object.keys(input)
        .filter((key) => input[key] != null)
        .forEach((key) => {
        entries[`entry.${counter}.key`] = key;
        entries[`entry.${counter}.value`] = input[key];
        counter++;
    });
    return entries;
};
const serializeAws_queryUnsubscribeInput = (input, context) => {
    const entries = {};
    if (input.SubscriptionArn !== undefined && input.SubscriptionArn !== null) {
        entries["SubscriptionArn"] = input.SubscriptionArn;
    }
    return entries;
};
const serializeAws_queryUntagResourceRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryVerifySMSSandboxPhoneNumberInput = (input, context) => {
    const entries = {};
    if (input.PhoneNumber !== undefined && input.PhoneNumber !== null) {
        entries["PhoneNumber"] = input.PhoneNumber;
    }
    if (input.OneTimePassword !== undefined && input.OneTimePassword !== null) {
        entries["OneTimePassword"] = input.OneTimePassword;
    }
    return entries;
};
const deserializeAws_queryAuthorizationErrorException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCheckIfPhoneNumberIsOptedOutResponse = (output, context) => {
    let contents = {
        isOptedOut: undefined,
    };
    if (output["isOptedOut"] !== undefined) {
        contents.isOptedOut = output["isOptedOut"] == "true";
    }
    return contents;
};
const deserializeAws_queryConcurrentAccessException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryConfirmSubscriptionResponse = (output, context) => {
    let contents = {
        SubscriptionArn: undefined,
    };
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    return contents;
};
const deserializeAws_queryCreateEndpointResponse = (output, context) => {
    let contents = {
        EndpointArn: undefined,
    };
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = output["EndpointArn"];
    }
    return contents;
};
const deserializeAws_queryCreatePlatformApplicationResponse = (output, context) => {
    let contents = {
        PlatformApplicationArn: undefined,
    };
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = output["PlatformApplicationArn"];
    }
    return contents;
};
const deserializeAws_queryCreateSMSSandboxPhoneNumberResult = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryCreateTopicResponse = (output, context) => {
    let contents = {
        TopicArn: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryDeleteSMSSandboxPhoneNumberResult = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
        EndpointArn: undefined,
        Attributes: undefined,
    };
    if (output["EndpointArn"] !== undefined) {
        contents.EndpointArn = output["EndpointArn"];
    }
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_queryMapStringToString(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryEndpointDisabledException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryFilterPolicyLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGetEndpointAttributesResponse = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_queryMapStringToString(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetPlatformApplicationAttributesResponse = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_queryMapStringToString(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetSMSAttributesResponse = (output, context) => {
    let contents = {
        attributes: undefined,
    };
    if (output.attributes === "") {
        contents.attributes = {};
    }
    if (output["attributes"] !== undefined && output["attributes"]["entry"] !== undefined) {
        contents.attributes = deserializeAws_queryMapStringToString(smithy_client_1.getArrayIfSingleItem(output["attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetSMSSandboxAccountStatusResult = (output, context) => {
    let contents = {
        IsInSandbox: undefined,
    };
    if (output["IsInSandbox"] !== undefined) {
        contents.IsInSandbox = output["IsInSandbox"] == "true";
    }
    return contents;
};
const deserializeAws_queryGetSubscriptionAttributesResponse = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_querySubscriptionAttributesMap(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryGetTopicAttributesResponse = (output, context) => {
    let contents = {
        Attributes: undefined,
    };
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_queryTopicAttributesMap(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryInternalErrorException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterValueException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSecurityException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSAccessDeniedException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSDisabledException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSInvalidStateException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSNotFoundException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSOptInRequired = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSThrottlingException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryListEndpointsByPlatformApplicationResponse = (output, context) => {
    let contents = {
        Endpoints: undefined,
        NextToken: undefined,
    };
    if (output.Endpoints === "") {
        contents.Endpoints = [];
    }
    if (output["Endpoints"] !== undefined && output["Endpoints"]["member"] !== undefined) {
        contents.Endpoints = deserializeAws_queryListOfEndpoints(smithy_client_1.getArrayIfSingleItem(output["Endpoints"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListOfEndpoints = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEndpoint(entry, context);
    });
};
const deserializeAws_queryListOfPlatformApplications = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPlatformApplication(entry, context);
    });
};
const deserializeAws_queryListOriginationNumbersResult = (output, context) => {
    let contents = {
        NextToken: undefined,
        PhoneNumbers: undefined,
    };
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    if (output.PhoneNumbers === "") {
        contents.PhoneNumbers = [];
    }
    if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
        contents.PhoneNumbers = deserializeAws_queryPhoneNumberInformationList(smithy_client_1.getArrayIfSingleItem(output["PhoneNumbers"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListPhoneNumbersOptedOutResponse = (output, context) => {
    let contents = {
        phoneNumbers: undefined,
        nextToken: undefined,
    };
    if (output.phoneNumbers === "") {
        contents.phoneNumbers = [];
    }
    if (output["phoneNumbers"] !== undefined && output["phoneNumbers"]["member"] !== undefined) {
        contents.phoneNumbers = deserializeAws_queryPhoneNumberList(smithy_client_1.getArrayIfSingleItem(output["phoneNumbers"]["member"]), context);
    }
    if (output["nextToken"] !== undefined) {
        contents.nextToken = output["nextToken"];
    }
    return contents;
};
const deserializeAws_queryListPlatformApplicationsResponse = (output, context) => {
    let contents = {
        PlatformApplications: undefined,
        NextToken: undefined,
    };
    if (output.PlatformApplications === "") {
        contents.PlatformApplications = [];
    }
    if (output["PlatformApplications"] !== undefined && output["PlatformApplications"]["member"] !== undefined) {
        contents.PlatformApplications = deserializeAws_queryListOfPlatformApplications(smithy_client_1.getArrayIfSingleItem(output["PlatformApplications"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListSMSSandboxPhoneNumbersResult = (output, context) => {
    let contents = {
        PhoneNumbers: undefined,
        NextToken: undefined,
    };
    if (output.PhoneNumbers === "") {
        contents.PhoneNumbers = [];
    }
    if (output["PhoneNumbers"] !== undefined && output["PhoneNumbers"]["member"] !== undefined) {
        contents.PhoneNumbers = deserializeAws_querySMSSandboxPhoneNumberList(smithy_client_1.getArrayIfSingleItem(output["PhoneNumbers"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListSubscriptionsByTopicResponse = (output, context) => {
    let contents = {
        Subscriptions: undefined,
        NextToken: undefined,
    };
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
        contents.Subscriptions = deserializeAws_querySubscriptionsList(smithy_client_1.getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListSubscriptionsResponse = (output, context) => {
    let contents = {
        Subscriptions: undefined,
        NextToken: undefined,
    };
    if (output.Subscriptions === "") {
        contents.Subscriptions = [];
    }
    if (output["Subscriptions"] !== undefined && output["Subscriptions"]["member"] !== undefined) {
        contents.Subscriptions = deserializeAws_querySubscriptionsList(smithy_client_1.getArrayIfSingleItem(output["Subscriptions"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryListTagsForResourceResponse = (output, context) => {
    let contents = {
        Tags: undefined,
    };
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryListTopicsResponse = (output, context) => {
    let contents = {
        Topics: undefined,
        NextToken: undefined,
    };
    if (output.Topics === "") {
        contents.Topics = [];
    }
    if (output["Topics"] !== undefined && output["Topics"]["member"] !== undefined) {
        contents.Topics = deserializeAws_queryTopicsList(smithy_client_1.getArrayIfSingleItem(output["Topics"]["member"]), context);
    }
    if (output["NextToken"] !== undefined) {
        contents.NextToken = output["NextToken"];
    }
    return contents;
};
const deserializeAws_queryMapStringToString = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryNotFoundException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNumberCapabilityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryOptedOutException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptInPhoneNumberResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryPhoneNumberInformation = (output, context) => {
    let contents = {
        CreatedAt: undefined,
        PhoneNumber: undefined,
        Status: undefined,
        Iso2CountryCode: undefined,
        RouteType: undefined,
        NumberCapabilities: undefined,
    };
    if (output["CreatedAt"] !== undefined) {
        contents.CreatedAt = new Date(output["CreatedAt"]);
    }
    if (output["PhoneNumber"] !== undefined) {
        contents.PhoneNumber = output["PhoneNumber"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Iso2CountryCode"] !== undefined) {
        contents.Iso2CountryCode = output["Iso2CountryCode"];
    }
    if (output["RouteType"] !== undefined) {
        contents.RouteType = output["RouteType"];
    }
    if (output.NumberCapabilities === "") {
        contents.NumberCapabilities = [];
    }
    if (output["NumberCapabilities"] !== undefined && output["NumberCapabilities"]["member"] !== undefined) {
        contents.NumberCapabilities = deserializeAws_queryNumberCapabilityList(smithy_client_1.getArrayIfSingleItem(output["NumberCapabilities"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPhoneNumberInformationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPhoneNumberInformation(entry, context);
    });
};
const deserializeAws_queryPhoneNumberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryPlatformApplication = (output, context) => {
    let contents = {
        PlatformApplicationArn: undefined,
        Attributes: undefined,
    };
    if (output["PlatformApplicationArn"] !== undefined) {
        contents.PlatformApplicationArn = output["PlatformApplicationArn"];
    }
    if (output.Attributes === "") {
        contents.Attributes = {};
    }
    if (output["Attributes"] !== undefined && output["Attributes"]["entry"] !== undefined) {
        contents.Attributes = deserializeAws_queryMapStringToString(smithy_client_1.getArrayIfSingleItem(output["Attributes"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryPlatformApplicationDisabledException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPublishResponse = (output, context) => {
    let contents = {
        MessageId: undefined,
        SequenceNumber: undefined,
    };
    if (output["MessageId"] !== undefined) {
        contents.MessageId = output["MessageId"];
    }
    if (output["SequenceNumber"] !== undefined) {
        contents.SequenceNumber = output["SequenceNumber"];
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySetSMSAttributesResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_querySMSSandboxPhoneNumber = (output, context) => {
    let contents = {
        PhoneNumber: undefined,
        Status: undefined,
    };
    if (output["PhoneNumber"] !== undefined) {
        contents.PhoneNumber = output["PhoneNumber"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_querySMSSandboxPhoneNumberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySMSSandboxPhoneNumber(entry, context);
    });
};
const deserializeAws_queryStaleTagException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscribeResponse = (output, context) => {
    let contents = {
        SubscriptionArn: undefined,
    };
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    return contents;
};
const deserializeAws_querySubscription = (output, context) => {
    let contents = {
        SubscriptionArn: undefined,
        Owner: undefined,
        Protocol: undefined,
        Endpoint: undefined,
        TopicArn: undefined,
    };
    if (output["SubscriptionArn"] !== undefined) {
        contents.SubscriptionArn = output["SubscriptionArn"];
    }
    if (output["Owner"] !== undefined) {
        contents.Owner = output["Owner"];
    }
    if (output["Protocol"] !== undefined) {
        contents.Protocol = output["Protocol"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_querySubscriptionAttributesMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_querySubscriptionLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySubscription(entry, context);
    });
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
        Key: undefined,
        Value: undefined,
    };
    if (output["Key"] !== undefined) {
        contents.Key = output["Key"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryTagLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTagPolicyException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagResourceResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryThrottledException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTopic = (output, context) => {
    let contents = {
        TopicArn: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    return contents;
};
const deserializeAws_queryTopicAttributesMap = (output, context) => {
    return output.reduce((acc, pair) => {
        if (pair["value"] === null) {
            return acc;
        }
        return {
            ...acc,
            [pair["key"]]: pair["value"],
        };
    }, {});
};
const deserializeAws_queryTopicLimitExceededException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTopicsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTopic(entry, context);
    });
};
const deserializeAws_queryUntagResourceResponse = (output, context) => {
    let contents = {};
    return contents;
};
const deserializeAws_queryUserErrorException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryValidationException = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryVerificationException = (output, context) => {
    let contents = {
        Message: undefined,
        Status: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryVerifySMSSandboxPhoneNumberResult = (output, context) => {
    let contents = {};
    return contents;
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
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map