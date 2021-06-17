"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1DescribeSubscriptionCommand = exports.deserializeAws_json1_1DescribeProtectionGroupCommand = exports.deserializeAws_json1_1DescribeProtectionCommand = exports.deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = exports.deserializeAws_json1_1DescribeDRTAccessCommand = exports.deserializeAws_json1_1DescribeAttackStatisticsCommand = exports.deserializeAws_json1_1DescribeAttackCommand = exports.deserializeAws_json1_1DeleteSubscriptionCommand = exports.deserializeAws_json1_1DeleteProtectionGroupCommand = exports.deserializeAws_json1_1DeleteProtectionCommand = exports.deserializeAws_json1_1CreateSubscriptionCommand = exports.deserializeAws_json1_1CreateProtectionGroupCommand = exports.deserializeAws_json1_1CreateProtectionCommand = exports.deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand = exports.deserializeAws_json1_1AssociateHealthCheckCommand = exports.deserializeAws_json1_1AssociateDRTRoleCommand = exports.deserializeAws_json1_1AssociateDRTLogBucketCommand = exports.serializeAws_json1_1UpdateSubscriptionCommand = exports.serializeAws_json1_1UpdateProtectionGroupCommand = exports.serializeAws_json1_1UpdateEmergencyContactSettingsCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListResourcesInProtectionGroupCommand = exports.serializeAws_json1_1ListProtectionsCommand = exports.serializeAws_json1_1ListProtectionGroupsCommand = exports.serializeAws_json1_1ListAttacksCommand = exports.serializeAws_json1_1GetSubscriptionStateCommand = exports.serializeAws_json1_1EnableProactiveEngagementCommand = exports.serializeAws_json1_1DisassociateHealthCheckCommand = exports.serializeAws_json1_1DisassociateDRTRoleCommand = exports.serializeAws_json1_1DisassociateDRTLogBucketCommand = exports.serializeAws_json1_1DisableProactiveEngagementCommand = exports.serializeAws_json1_1DescribeSubscriptionCommand = exports.serializeAws_json1_1DescribeProtectionGroupCommand = exports.serializeAws_json1_1DescribeProtectionCommand = exports.serializeAws_json1_1DescribeEmergencyContactSettingsCommand = exports.serializeAws_json1_1DescribeDRTAccessCommand = exports.serializeAws_json1_1DescribeAttackStatisticsCommand = exports.serializeAws_json1_1DescribeAttackCommand = exports.serializeAws_json1_1DeleteSubscriptionCommand = exports.serializeAws_json1_1DeleteProtectionGroupCommand = exports.serializeAws_json1_1DeleteProtectionCommand = exports.serializeAws_json1_1CreateSubscriptionCommand = exports.serializeAws_json1_1CreateProtectionGroupCommand = exports.serializeAws_json1_1CreateProtectionCommand = exports.serializeAws_json1_1AssociateProactiveEngagementDetailsCommand = exports.serializeAws_json1_1AssociateHealthCheckCommand = exports.serializeAws_json1_1AssociateDRTRoleCommand = exports.serializeAws_json1_1AssociateDRTLogBucketCommand = void 0;
exports.deserializeAws_json1_1UpdateSubscriptionCommand = exports.deserializeAws_json1_1UpdateProtectionGroupCommand = exports.deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResourcesInProtectionGroupCommand = exports.deserializeAws_json1_1ListProtectionsCommand = exports.deserializeAws_json1_1ListProtectionGroupsCommand = exports.deserializeAws_json1_1ListAttacksCommand = exports.deserializeAws_json1_1GetSubscriptionStateCommand = exports.deserializeAws_json1_1EnableProactiveEngagementCommand = exports.deserializeAws_json1_1DisassociateHealthCheckCommand = exports.deserializeAws_json1_1DisassociateDRTRoleCommand = exports.deserializeAws_json1_1DisassociateDRTLogBucketCommand = exports.deserializeAws_json1_1DisableProactiveEngagementCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateDRTLogBucketCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.AssociateDRTLogBucket",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDRTLogBucketRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDRTLogBucketCommand = serializeAws_json1_1AssociateDRTLogBucketCommand;
const serializeAws_json1_1AssociateDRTRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.AssociateDRTRole",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDRTRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDRTRoleCommand = serializeAws_json1_1AssociateDRTRoleCommand;
const serializeAws_json1_1AssociateHealthCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.AssociateHealthCheck",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateHealthCheckRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateHealthCheckCommand = serializeAws_json1_1AssociateHealthCheckCommand;
const serializeAws_json1_1AssociateProactiveEngagementDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.AssociateProactiveEngagementDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateProactiveEngagementDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateProactiveEngagementDetailsCommand = serializeAws_json1_1AssociateProactiveEngagementDetailsCommand;
const serializeAws_json1_1CreateProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.CreateProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProtectionCommand = serializeAws_json1_1CreateProtectionCommand;
const serializeAws_json1_1CreateProtectionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.CreateProtectionGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateProtectionGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateProtectionGroupCommand = serializeAws_json1_1CreateProtectionGroupCommand;
const serializeAws_json1_1CreateSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.CreateSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateSubscriptionCommand = serializeAws_json1_1CreateSubscriptionCommand;
const serializeAws_json1_1DeleteProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DeleteProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProtectionCommand = serializeAws_json1_1DeleteProtectionCommand;
const serializeAws_json1_1DeleteProtectionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DeleteProtectionGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteProtectionGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteProtectionGroupCommand = serializeAws_json1_1DeleteProtectionGroupCommand;
const serializeAws_json1_1DeleteSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DeleteSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteSubscriptionCommand = serializeAws_json1_1DeleteSubscriptionCommand;
const serializeAws_json1_1DescribeAttackCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeAttack",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAttackRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAttackCommand = serializeAws_json1_1DescribeAttackCommand;
const serializeAws_json1_1DescribeAttackStatisticsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeAttackStatistics",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAttackStatisticsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAttackStatisticsCommand = serializeAws_json1_1DescribeAttackStatisticsCommand;
const serializeAws_json1_1DescribeDRTAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeDRTAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeDRTAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeDRTAccessCommand = serializeAws_json1_1DescribeDRTAccessCommand;
const serializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeEmergencyContactSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEmergencyContactSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEmergencyContactSettingsCommand = serializeAws_json1_1DescribeEmergencyContactSettingsCommand;
const serializeAws_json1_1DescribeProtectionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeProtection",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProtectionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProtectionCommand = serializeAws_json1_1DescribeProtectionCommand;
const serializeAws_json1_1DescribeProtectionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeProtectionGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeProtectionGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeProtectionGroupCommand = serializeAws_json1_1DescribeProtectionGroupCommand;
const serializeAws_json1_1DescribeSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DescribeSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeSubscriptionCommand = serializeAws_json1_1DescribeSubscriptionCommand;
const serializeAws_json1_1DisableProactiveEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DisableProactiveEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableProactiveEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableProactiveEngagementCommand = serializeAws_json1_1DisableProactiveEngagementCommand;
const serializeAws_json1_1DisassociateDRTLogBucketCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DisassociateDRTLogBucket",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDRTLogBucketRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateDRTLogBucketCommand = serializeAws_json1_1DisassociateDRTLogBucketCommand;
const serializeAws_json1_1DisassociateDRTRoleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DisassociateDRTRole",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDRTRoleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateDRTRoleCommand = serializeAws_json1_1DisassociateDRTRoleCommand;
const serializeAws_json1_1DisassociateHealthCheckCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.DisassociateHealthCheck",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateHealthCheckRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateHealthCheckCommand = serializeAws_json1_1DisassociateHealthCheckCommand;
const serializeAws_json1_1EnableProactiveEngagementCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.EnableProactiveEngagement",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableProactiveEngagementRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableProactiveEngagementCommand = serializeAws_json1_1EnableProactiveEngagementCommand;
const serializeAws_json1_1GetSubscriptionStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.GetSubscriptionState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetSubscriptionStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetSubscriptionStateCommand = serializeAws_json1_1GetSubscriptionStateCommand;
const serializeAws_json1_1ListAttacksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.ListAttacks",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAttacksRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAttacksCommand = serializeAws_json1_1ListAttacksCommand;
const serializeAws_json1_1ListProtectionGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.ListProtectionGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProtectionGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProtectionGroupsCommand = serializeAws_json1_1ListProtectionGroupsCommand;
const serializeAws_json1_1ListProtectionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.ListProtections",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListProtectionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListProtectionsCommand = serializeAws_json1_1ListProtectionsCommand;
const serializeAws_json1_1ListResourcesInProtectionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.ListResourcesInProtectionGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesInProtectionGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesInProtectionGroupCommand = serializeAws_json1_1ListResourcesInProtectionGroupCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.UpdateEmergencyContactSettings",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateEmergencyContactSettingsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateEmergencyContactSettingsCommand = serializeAws_json1_1UpdateEmergencyContactSettingsCommand;
const serializeAws_json1_1UpdateProtectionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.UpdateProtectionGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateProtectionGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateProtectionGroupCommand = serializeAws_json1_1UpdateProtectionGroupCommand;
const serializeAws_json1_1UpdateSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSShield_20160616.UpdateSubscription",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateSubscriptionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateSubscriptionCommand = serializeAws_json1_1UpdateSubscriptionCommand;
const deserializeAws_json1_1AssociateDRTLogBucketCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateDRTLogBucketCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDRTLogBucketResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDRTLogBucketCommand = deserializeAws_json1_1AssociateDRTLogBucketCommand;
const deserializeAws_json1_1AssociateDRTLogBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.shield#AccessDeniedForDependencyException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceededException":
        case "com.amazonaws.shield#LimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAssociatedRoleException":
        case "com.amazonaws.shield#NoAssociatedRoleException":
            response = {
                ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1AssociateDRTRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateDRTRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDRTRoleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDRTRoleCommand = deserializeAws_json1_1AssociateDRTRoleCommand;
const deserializeAws_json1_1AssociateDRTRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.shield#AccessDeniedForDependencyException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1AssociateHealthCheckCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateHealthCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateHealthCheckResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateHealthCheckCommand = deserializeAws_json1_1AssociateHealthCheckCommand;
const deserializeAws_json1_1AssociateHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceededException":
        case "com.amazonaws.shield#LimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateProactiveEngagementDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateProactiveEngagementDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand = deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand;
const deserializeAws_json1_1AssociateProactiveEngagementDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProtectionCommand = deserializeAws_json1_1CreateProtectionCommand;
const deserializeAws_json1_1CreateProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.shield#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceededException":
        case "com.amazonaws.shield#LimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.shield#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateProtectionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateProtectionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateProtectionGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateProtectionGroupCommand = deserializeAws_json1_1CreateProtectionGroupCommand;
const deserializeAws_json1_1CreateProtectionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitsExceededException":
        case "com.amazonaws.shield#LimitsExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.shield#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1CreateSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateSubscriptionCommand = deserializeAws_json1_1CreateSubscriptionCommand;
const deserializeAws_json1_1CreateSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.shield#ResourceAlreadyExistsException":
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
const deserializeAws_json1_1DeleteProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProtectionCommand = deserializeAws_json1_1DeleteProtectionCommand;
const deserializeAws_json1_1DeleteProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteProtectionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteProtectionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteProtectionGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteProtectionGroupCommand = deserializeAws_json1_1DeleteProtectionGroupCommand;
const deserializeAws_json1_1DeleteProtectionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DeleteSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteSubscriptionCommand = deserializeAws_json1_1DeleteSubscriptionCommand;
const deserializeAws_json1_1DeleteSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LockedSubscriptionException":
        case "com.amazonaws.shield#LockedSubscriptionException":
            response = {
                ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeAttackCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAttackCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAttackResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAttackCommand = deserializeAws_json1_1DescribeAttackCommand;
const deserializeAws_json1_1DescribeAttackCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.shield#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAttackStatisticsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAttackStatisticsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAttackStatisticsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAttackStatisticsCommand = deserializeAws_json1_1DescribeAttackStatisticsCommand;
const deserializeAws_json1_1DescribeAttackStatisticsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeDRTAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeDRTAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeDRTAccessResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeDRTAccessCommand = deserializeAws_json1_1DescribeDRTAccessCommand;
const deserializeAws_json1_1DescribeDRTAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEmergencyContactSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = deserializeAws_json1_1DescribeEmergencyContactSettingsCommand;
const deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeProtectionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProtectionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProtectionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProtectionCommand = deserializeAws_json1_1DescribeProtectionCommand;
const deserializeAws_json1_1DescribeProtectionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeProtectionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeProtectionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeProtectionGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeProtectionGroupCommand = deserializeAws_json1_1DescribeProtectionGroupCommand;
const deserializeAws_json1_1DescribeProtectionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DescribeSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeSubscriptionCommand = deserializeAws_json1_1DescribeSubscriptionCommand;
const deserializeAws_json1_1DescribeSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DisableProactiveEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableProactiveEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableProactiveEngagementResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableProactiveEngagementCommand = deserializeAws_json1_1DisableProactiveEngagementCommand;
const deserializeAws_json1_1DisableProactiveEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DisassociateDRTLogBucketCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateDRTLogBucketCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDRTLogBucketResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateDRTLogBucketCommand = deserializeAws_json1_1DisassociateDRTLogBucketCommand;
const deserializeAws_json1_1DisassociateDRTLogBucketCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.shield#AccessDeniedForDependencyException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoAssociatedRoleException":
        case "com.amazonaws.shield#NoAssociatedRoleException":
            response = {
                ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DisassociateDRTRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateDRTRoleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDRTRoleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateDRTRoleCommand = deserializeAws_json1_1DisassociateDRTRoleCommand;
const deserializeAws_json1_1DisassociateDRTRoleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1DisassociateHealthCheckCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateHealthCheckCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateHealthCheckResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateHealthCheckCommand = deserializeAws_json1_1DisassociateHealthCheckCommand;
const deserializeAws_json1_1DisassociateHealthCheckCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1EnableProactiveEngagementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableProactiveEngagementCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableProactiveEngagementResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableProactiveEngagementCommand = deserializeAws_json1_1EnableProactiveEngagementCommand;
const deserializeAws_json1_1EnableProactiveEngagementCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1GetSubscriptionStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetSubscriptionStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetSubscriptionStateResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetSubscriptionStateCommand = deserializeAws_json1_1GetSubscriptionStateCommand;
const deserializeAws_json1_1GetSubscriptionStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAttacksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAttacksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAttacksResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAttacksCommand = deserializeAws_json1_1ListAttacksCommand;
const deserializeAws_json1_1ListAttacksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.shield#InvalidOperationException":
            response = {
                ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListProtectionGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProtectionGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProtectionGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProtectionGroupsCommand = deserializeAws_json1_1ListProtectionGroupsCommand;
const deserializeAws_json1_1ListProtectionGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.shield#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1ListProtectionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListProtectionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListProtectionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListProtectionsCommand = deserializeAws_json1_1ListProtectionsCommand;
const deserializeAws_json1_1ListProtectionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.shield#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1ListResourcesInProtectionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesInProtectionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesInProtectionGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesInProtectionGroupCommand = deserializeAws_json1_1ListResourcesInProtectionGroupCommand;
const deserializeAws_json1_1ListResourcesInProtectionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.shield#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.shield#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.shield#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceException":
        case "com.amazonaws.shield#InvalidResourceException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateEmergencyContactSettingsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = deserializeAws_json1_1UpdateEmergencyContactSettingsCommand;
const deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateProtectionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateProtectionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateProtectionGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateProtectionGroupCommand = deserializeAws_json1_1UpdateProtectionGroupCommand;
const deserializeAws_json1_1UpdateProtectionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateSubscriptionResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateSubscriptionCommand = deserializeAws_json1_1UpdateSubscriptionCommand;
const deserializeAws_json1_1UpdateSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.shield#InternalErrorException":
            response = {
                ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.shield#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LockedSubscriptionException":
        case "com.amazonaws.shield#LockedSubscriptionException":
            response = {
                ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptimisticLockException":
        case "com.amazonaws.shield#OptimisticLockException":
            response = {
                ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.shield#ResourceNotFoundException":
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
    const contents = {
        name: "AccessDeniedForDependencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InternalErrorException(body, context);
    const contents = {
        name: "InternalErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidOperationException(body, context);
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationTokenException(body, context);
    const contents = {
        name: "InvalidPaginationTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceException(body, context);
    const contents = {
        name: "InvalidResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitsExceededException(body, context);
    const contents = {
        name: "LimitsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LockedSubscriptionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LockedSubscriptionException(body, context);
    const contents = {
        name: "LockedSubscriptionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NoAssociatedRoleExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NoAssociatedRoleException(body, context);
    const contents = {
        name: "NoAssociatedRoleException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OptimisticLockExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OptimisticLockException(body, context);
    const contents = {
        name: "OptimisticLockException",
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
const serializeAws_json1_1AssociateDRTLogBucketRequest = (input, context) => {
    return {
        ...(input.LogBucket !== undefined && input.LogBucket !== null && { LogBucket: input.LogBucket }),
    };
};
const serializeAws_json1_1AssociateDRTRoleRequest = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_json1_1AssociateHealthCheckRequest = (input, context) => {
    return {
        ...(input.HealthCheckArn !== undefined &&
            input.HealthCheckArn !== null && { HealthCheckArn: input.HealthCheckArn }),
        ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
    };
};
const serializeAws_json1_1AssociateProactiveEngagementDetailsRequest = (input, context) => {
    return {
        ...(input.EmergencyContactList !== undefined &&
            input.EmergencyContactList !== null && {
            EmergencyContactList: serializeAws_json1_1EmergencyContactList(input.EmergencyContactList, context),
        }),
    };
};
const serializeAws_json1_1CreateProtectionGroupRequest = (input, context) => {
    return {
        ...(input.Aggregation !== undefined && input.Aggregation !== null && { Aggregation: input.Aggregation }),
        ...(input.Members !== undefined &&
            input.Members !== null && { Members: serializeAws_json1_1ProtectionGroupMembers(input.Members, context) }),
        ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
        ...(input.ProtectionGroupId !== undefined &&
            input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateProtectionRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateSubscriptionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DeleteProtectionGroupRequest = (input, context) => {
    return {
        ...(input.ProtectionGroupId !== undefined &&
            input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
    };
};
const serializeAws_json1_1DeleteProtectionRequest = (input, context) => {
    return {
        ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
    };
};
const serializeAws_json1_1DeleteSubscriptionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeAttackRequest = (input, context) => {
    return {
        ...(input.AttackId !== undefined && input.AttackId !== null && { AttackId: input.AttackId }),
    };
};
const serializeAws_json1_1DescribeAttackStatisticsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeDRTAccessRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeEmergencyContactSettingsRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeProtectionGroupRequest = (input, context) => {
    return {
        ...(input.ProtectionGroupId !== undefined &&
            input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
    };
};
const serializeAws_json1_1DescribeProtectionRequest = (input, context) => {
    return {
        ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
        ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    };
};
const serializeAws_json1_1DescribeSubscriptionRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DisableProactiveEngagementRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DisassociateDRTLogBucketRequest = (input, context) => {
    return {
        ...(input.LogBucket !== undefined && input.LogBucket !== null && { LogBucket: input.LogBucket }),
    };
};
const serializeAws_json1_1DisassociateDRTRoleRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DisassociateHealthCheckRequest = (input, context) => {
    return {
        ...(input.HealthCheckArn !== undefined &&
            input.HealthCheckArn !== null && { HealthCheckArn: input.HealthCheckArn }),
        ...(input.ProtectionId !== undefined && input.ProtectionId !== null && { ProtectionId: input.ProtectionId }),
    };
};
const serializeAws_json1_1EmergencyContact = (input, context) => {
    return {
        ...(input.ContactNotes !== undefined && input.ContactNotes !== null && { ContactNotes: input.ContactNotes }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
    };
};
const serializeAws_json1_1EmergencyContactList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EmergencyContact(entry, context);
    });
};
const serializeAws_json1_1EnableProactiveEngagementRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1GetSubscriptionStateRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1ListAttacksRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: serializeAws_json1_1TimeRange(input.EndTime, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceArns !== undefined &&
            input.ResourceArns !== null && {
            ResourceArns: serializeAws_json1_1ResourceArnFilterList(input.ResourceArns, context),
        }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: serializeAws_json1_1TimeRange(input.StartTime, context) }),
    };
};
const serializeAws_json1_1ListProtectionGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListProtectionsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResourcesInProtectionGroupRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ProtectionGroupId !== undefined &&
            input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ProtectionGroupMembers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ResourceArnFilterList = (input, context) => {
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
const serializeAws_json1_1TimeRange = (input, context) => {
    return {
        ...(input.FromInclusive !== undefined &&
            input.FromInclusive !== null && { FromInclusive: Math.round(input.FromInclusive.getTime() / 1000) }),
        ...(input.ToExclusive !== undefined &&
            input.ToExclusive !== null && { ToExclusive: Math.round(input.ToExclusive.getTime() / 1000) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateEmergencyContactSettingsRequest = (input, context) => {
    return {
        ...(input.EmergencyContactList !== undefined &&
            input.EmergencyContactList !== null && {
            EmergencyContactList: serializeAws_json1_1EmergencyContactList(input.EmergencyContactList, context),
        }),
    };
};
const serializeAws_json1_1UpdateProtectionGroupRequest = (input, context) => {
    return {
        ...(input.Aggregation !== undefined && input.Aggregation !== null && { Aggregation: input.Aggregation }),
        ...(input.Members !== undefined &&
            input.Members !== null && { Members: serializeAws_json1_1ProtectionGroupMembers(input.Members, context) }),
        ...(input.Pattern !== undefined && input.Pattern !== null && { Pattern: input.Pattern }),
        ...(input.ProtectionGroupId !== undefined &&
            input.ProtectionGroupId !== null && { ProtectionGroupId: input.ProtectionGroupId }),
        ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    };
};
const serializeAws_json1_1UpdateSubscriptionRequest = (input, context) => {
    return {
        ...(input.AutoRenew !== undefined && input.AutoRenew !== null && { AutoRenew: input.AutoRenew }),
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedForDependencyException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AssociateDRTLogBucketResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateDRTRoleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateHealthCheckResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateProactiveEngagementDetailsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AttackDetail = (output, context) => {
    return {
        AttackCounters: output.AttackCounters !== undefined && output.AttackCounters !== null
            ? deserializeAws_json1_1SummarizedCounterList(output.AttackCounters, context)
            : undefined,
        AttackId: output.AttackId !== undefined && output.AttackId !== null ? output.AttackId : undefined,
        AttackProperties: output.AttackProperties !== undefined && output.AttackProperties !== null
            ? deserializeAws_json1_1AttackProperties(output.AttackProperties, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        Mitigations: output.Mitigations !== undefined && output.Mitigations !== null
            ? deserializeAws_json1_1MitigationList(output.Mitigations, context)
            : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        SubResources: output.SubResources !== undefined && output.SubResources !== null
            ? deserializeAws_json1_1SubResourceSummaryList(output.SubResources, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttackProperties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttackProperty(entry, context);
    });
};
const deserializeAws_json1_1AttackProperty = (output, context) => {
    return {
        AttackLayer: output.AttackLayer !== undefined && output.AttackLayer !== null ? output.AttackLayer : undefined,
        AttackPropertyIdentifier: output.AttackPropertyIdentifier !== undefined && output.AttackPropertyIdentifier !== null
            ? output.AttackPropertyIdentifier
            : undefined,
        TopContributors: output.TopContributors !== undefined && output.TopContributors !== null
            ? deserializeAws_json1_1TopContributors(output.TopContributors, context)
            : undefined,
        Total: output.Total !== undefined && output.Total !== null ? output.Total : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1AttackStatisticsDataItem = (output, context) => {
    return {
        AttackCount: output.AttackCount !== undefined && output.AttackCount !== null ? output.AttackCount : undefined,
        AttackVolume: output.AttackVolume !== undefined && output.AttackVolume !== null
            ? deserializeAws_json1_1AttackVolume(output.AttackVolume, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttackStatisticsDataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttackStatisticsDataItem(entry, context);
    });
};
const deserializeAws_json1_1AttackSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttackSummary(entry, context);
    });
};
const deserializeAws_json1_1AttackSummary = (output, context) => {
    return {
        AttackId: output.AttackId !== undefined && output.AttackId !== null ? output.AttackId : undefined,
        AttackVectors: output.AttackVectors !== undefined && output.AttackVectors !== null
            ? deserializeAws_json1_1AttackVectorDescriptionList(output.AttackVectors, context)
            : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1AttackVectorDescription = (output, context) => {
    return {
        VectorType: output.VectorType !== undefined && output.VectorType !== null ? output.VectorType : undefined,
    };
};
const deserializeAws_json1_1AttackVectorDescriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AttackVectorDescription(entry, context);
    });
};
const deserializeAws_json1_1AttackVolume = (output, context) => {
    return {
        BitsPerSecond: output.BitsPerSecond !== undefined && output.BitsPerSecond !== null
            ? deserializeAws_json1_1AttackVolumeStatistics(output.BitsPerSecond, context)
            : undefined,
        PacketsPerSecond: output.PacketsPerSecond !== undefined && output.PacketsPerSecond !== null
            ? deserializeAws_json1_1AttackVolumeStatistics(output.PacketsPerSecond, context)
            : undefined,
        RequestsPerSecond: output.RequestsPerSecond !== undefined && output.RequestsPerSecond !== null
            ? deserializeAws_json1_1AttackVolumeStatistics(output.RequestsPerSecond, context)
            : undefined,
    };
};
const deserializeAws_json1_1AttackVolumeStatistics = (output, context) => {
    return {
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
    };
};
const deserializeAws_json1_1Contributor = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1CreateProtectionGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateProtectionResponse = (output, context) => {
    return {
        ProtectionId: output.ProtectionId !== undefined && output.ProtectionId !== null ? output.ProtectionId : undefined,
    };
};
const deserializeAws_json1_1CreateSubscriptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProtectionGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteProtectionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteSubscriptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeAttackResponse = (output, context) => {
    return {
        Attack: output.Attack !== undefined && output.Attack !== null
            ? deserializeAws_json1_1AttackDetail(output.Attack, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeAttackStatisticsResponse = (output, context) => {
    return {
        DataItems: output.DataItems !== undefined && output.DataItems !== null
            ? deserializeAws_json1_1AttackStatisticsDataList(output.DataItems, context)
            : undefined,
        TimeRange: output.TimeRange !== undefined && output.TimeRange !== null
            ? deserializeAws_json1_1TimeRange(output.TimeRange, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeDRTAccessResponse = (output, context) => {
    return {
        LogBucketList: output.LogBucketList !== undefined && output.LogBucketList !== null
            ? deserializeAws_json1_1LogBucketList(output.LogBucketList, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_json1_1DescribeEmergencyContactSettingsResponse = (output, context) => {
    return {
        EmergencyContactList: output.EmergencyContactList !== undefined && output.EmergencyContactList !== null
            ? deserializeAws_json1_1EmergencyContactList(output.EmergencyContactList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProtectionGroupResponse = (output, context) => {
    return {
        ProtectionGroup: output.ProtectionGroup !== undefined && output.ProtectionGroup !== null
            ? deserializeAws_json1_1ProtectionGroup(output.ProtectionGroup, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeProtectionResponse = (output, context) => {
    return {
        Protection: output.Protection !== undefined && output.Protection !== null
            ? deserializeAws_json1_1Protection(output.Protection, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeSubscriptionResponse = (output, context) => {
    return {
        Subscription: output.Subscription !== undefined && output.Subscription !== null
            ? deserializeAws_json1_1Subscription(output.Subscription, context)
            : undefined,
    };
};
const deserializeAws_json1_1DisableProactiveEngagementResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateDRTLogBucketResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateDRTRoleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateHealthCheckResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1EmergencyContact = (output, context) => {
    return {
        ContactNotes: output.ContactNotes !== undefined && output.ContactNotes !== null ? output.ContactNotes : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
    };
};
const deserializeAws_json1_1EmergencyContactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EmergencyContact(entry, context);
    });
};
const deserializeAws_json1_1EnableProactiveEngagementResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1GetSubscriptionStateResponse = (output, context) => {
    return {
        SubscriptionState: output.SubscriptionState !== undefined && output.SubscriptionState !== null
            ? output.SubscriptionState
            : undefined,
    };
};
const deserializeAws_json1_1HealthCheckIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InternalErrorException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidOperationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidPaginationTokenException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        fields: output.fields !== undefined && output.fields !== null
            ? deserializeAws_json1_1ValidationExceptionFieldList(output.fields, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Limit = (output, context) => {
    return {
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Limits = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Limit(entry, context);
    });
};
const deserializeAws_json1_1LimitsExceededException = (output, context) => {
    return {
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListAttacksResponse = (output, context) => {
    return {
        AttackSummaries: output.AttackSummaries !== undefined && output.AttackSummaries !== null
            ? deserializeAws_json1_1AttackSummaries(output.AttackSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListProtectionGroupsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ProtectionGroups: output.ProtectionGroups !== undefined && output.ProtectionGroups !== null
            ? deserializeAws_json1_1ProtectionGroups(output.ProtectionGroups, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListProtectionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Protections: output.Protections !== undefined && output.Protections !== null
            ? deserializeAws_json1_1Protections(output.Protections, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourcesInProtectionGroupResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceArns: output.ResourceArns !== undefined && output.ResourceArns !== null
            ? deserializeAws_json1_1ResourceArnList(output.ResourceArns, context)
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
const deserializeAws_json1_1LockedSubscriptionException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1LogBucketList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Mitigation = (output, context) => {
    return {
        MitigationName: output.MitigationName !== undefined && output.MitigationName !== null ? output.MitigationName : undefined,
    };
};
const deserializeAws_json1_1MitigationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Mitigation(entry, context);
    });
};
const deserializeAws_json1_1NoAssociatedRoleException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OptimisticLockException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1Protection = (output, context) => {
    return {
        HealthCheckIds: output.HealthCheckIds !== undefined && output.HealthCheckIds !== null
            ? deserializeAws_json1_1HealthCheckIds(output.HealthCheckIds, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProtectionArn: output.ProtectionArn !== undefined && output.ProtectionArn !== null ? output.ProtectionArn : undefined,
        ResourceArn: output.ResourceArn !== undefined && output.ResourceArn !== null ? output.ResourceArn : undefined,
    };
};
const deserializeAws_json1_1ProtectionGroup = (output, context) => {
    return {
        Aggregation: output.Aggregation !== undefined && output.Aggregation !== null ? output.Aggregation : undefined,
        Members: output.Members !== undefined && output.Members !== null
            ? deserializeAws_json1_1ProtectionGroupMembers(output.Members, context)
            : undefined,
        Pattern: output.Pattern !== undefined && output.Pattern !== null ? output.Pattern : undefined,
        ProtectionGroupArn: output.ProtectionGroupArn !== undefined && output.ProtectionGroupArn !== null
            ? output.ProtectionGroupArn
            : undefined,
        ProtectionGroupId: output.ProtectionGroupId !== undefined && output.ProtectionGroupId !== null
            ? output.ProtectionGroupId
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ProtectionGroupArbitraryPatternLimits = (output, context) => {
    return {
        MaxMembers: output.MaxMembers !== undefined && output.MaxMembers !== null ? output.MaxMembers : undefined,
    };
};
const deserializeAws_json1_1ProtectionGroupLimits = (output, context) => {
    return {
        MaxProtectionGroups: output.MaxProtectionGroups !== undefined && output.MaxProtectionGroups !== null
            ? output.MaxProtectionGroups
            : undefined,
        PatternTypeLimits: output.PatternTypeLimits !== undefined && output.PatternTypeLimits !== null
            ? deserializeAws_json1_1ProtectionGroupPatternTypeLimits(output.PatternTypeLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProtectionGroupMembers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ProtectionGroupPatternTypeLimits = (output, context) => {
    return {
        ArbitraryPatternLimits: output.ArbitraryPatternLimits !== undefined && output.ArbitraryPatternLimits !== null
            ? deserializeAws_json1_1ProtectionGroupArbitraryPatternLimits(output.ArbitraryPatternLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1ProtectionGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ProtectionGroup(entry, context);
    });
};
const deserializeAws_json1_1ProtectionLimits = (output, context) => {
    return {
        ProtectedResourceTypeLimits: output.ProtectedResourceTypeLimits !== undefined && output.ProtectedResourceTypeLimits !== null
            ? deserializeAws_json1_1Limits(output.ProtectedResourceTypeLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1Protections = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Protection(entry, context);
    });
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
const deserializeAws_json1_1SubResourceSummary = (output, context) => {
    return {
        AttackVectors: output.AttackVectors !== undefined && output.AttackVectors !== null
            ? deserializeAws_json1_1SummarizedAttackVectorList(output.AttackVectors, context)
            : undefined,
        Counters: output.Counters !== undefined && output.Counters !== null
            ? deserializeAws_json1_1SummarizedCounterList(output.Counters, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1SubResourceSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubResourceSummary(entry, context);
    });
};
const deserializeAws_json1_1Subscription = (output, context) => {
    return {
        AutoRenew: output.AutoRenew !== undefined && output.AutoRenew !== null ? output.AutoRenew : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        Limits: output.Limits !== undefined && output.Limits !== null
            ? deserializeAws_json1_1Limits(output.Limits, context)
            : undefined,
        ProactiveEngagementStatus: output.ProactiveEngagementStatus !== undefined && output.ProactiveEngagementStatus !== null
            ? output.ProactiveEngagementStatus
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        SubscriptionArn: output.SubscriptionArn !== undefined && output.SubscriptionArn !== null ? output.SubscriptionArn : undefined,
        SubscriptionLimits: output.SubscriptionLimits !== undefined && output.SubscriptionLimits !== null
            ? deserializeAws_json1_1SubscriptionLimits(output.SubscriptionLimits, context)
            : undefined,
        TimeCommitmentInSeconds: output.TimeCommitmentInSeconds !== undefined && output.TimeCommitmentInSeconds !== null
            ? output.TimeCommitmentInSeconds
            : undefined,
    };
};
const deserializeAws_json1_1SubscriptionLimits = (output, context) => {
    return {
        ProtectionGroupLimits: output.ProtectionGroupLimits !== undefined && output.ProtectionGroupLimits !== null
            ? deserializeAws_json1_1ProtectionGroupLimits(output.ProtectionGroupLimits, context)
            : undefined,
        ProtectionLimits: output.ProtectionLimits !== undefined && output.ProtectionLimits !== null
            ? deserializeAws_json1_1ProtectionLimits(output.ProtectionLimits, context)
            : undefined,
    };
};
const deserializeAws_json1_1SummarizedAttackVector = (output, context) => {
    return {
        VectorCounters: output.VectorCounters !== undefined && output.VectorCounters !== null
            ? deserializeAws_json1_1SummarizedCounterList(output.VectorCounters, context)
            : undefined,
        VectorType: output.VectorType !== undefined && output.VectorType !== null ? output.VectorType : undefined,
    };
};
const deserializeAws_json1_1SummarizedAttackVectorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SummarizedAttackVector(entry, context);
    });
};
const deserializeAws_json1_1SummarizedCounter = (output, context) => {
    return {
        Average: output.Average !== undefined && output.Average !== null ? output.Average : undefined,
        Max: output.Max !== undefined && output.Max !== null ? output.Max : undefined,
        N: output.N !== undefined && output.N !== null ? output.N : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Sum: output.Sum !== undefined && output.Sum !== null ? output.Sum : undefined,
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
    };
};
const deserializeAws_json1_1SummarizedCounterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SummarizedCounter(entry, context);
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
const deserializeAws_json1_1TimeRange = (output, context) => {
    return {
        FromInclusive: output.FromInclusive !== undefined && output.FromInclusive !== null
            ? new Date(Math.round(output.FromInclusive * 1000))
            : undefined,
        ToExclusive: output.ToExclusive !== undefined && output.ToExclusive !== null
            ? new Date(Math.round(output.ToExclusive * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1TopContributors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Contributor(entry, context);
    });
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateEmergencyContactSettingsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateProtectionGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateSubscriptionResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ValidationExceptionField = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_json1_1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ValidationExceptionField(entry, context);
    });
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