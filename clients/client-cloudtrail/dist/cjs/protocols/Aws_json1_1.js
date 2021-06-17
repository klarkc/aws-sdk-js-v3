"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1UpdateTrailCommand = exports.deserializeAws_json1_1StopLoggingCommand = exports.deserializeAws_json1_1StartLoggingCommand = exports.deserializeAws_json1_1RemoveTagsCommand = exports.deserializeAws_json1_1PutInsightSelectorsCommand = exports.deserializeAws_json1_1PutEventSelectorsCommand = exports.deserializeAws_json1_1LookupEventsCommand = exports.deserializeAws_json1_1ListTrailsCommand = exports.deserializeAws_json1_1ListTagsCommand = exports.deserializeAws_json1_1ListPublicKeysCommand = exports.deserializeAws_json1_1GetTrailStatusCommand = exports.deserializeAws_json1_1GetTrailCommand = exports.deserializeAws_json1_1GetInsightSelectorsCommand = exports.deserializeAws_json1_1GetEventSelectorsCommand = exports.deserializeAws_json1_1DescribeTrailsCommand = exports.deserializeAws_json1_1DeleteTrailCommand = exports.deserializeAws_json1_1CreateTrailCommand = exports.deserializeAws_json1_1AddTagsCommand = exports.serializeAws_json1_1UpdateTrailCommand = exports.serializeAws_json1_1StopLoggingCommand = exports.serializeAws_json1_1StartLoggingCommand = exports.serializeAws_json1_1RemoveTagsCommand = exports.serializeAws_json1_1PutInsightSelectorsCommand = exports.serializeAws_json1_1PutEventSelectorsCommand = exports.serializeAws_json1_1LookupEventsCommand = exports.serializeAws_json1_1ListTrailsCommand = exports.serializeAws_json1_1ListTagsCommand = exports.serializeAws_json1_1ListPublicKeysCommand = exports.serializeAws_json1_1GetTrailStatusCommand = exports.serializeAws_json1_1GetTrailCommand = exports.serializeAws_json1_1GetInsightSelectorsCommand = exports.serializeAws_json1_1GetEventSelectorsCommand = exports.serializeAws_json1_1DescribeTrailsCommand = exports.serializeAws_json1_1DeleteTrailCommand = exports.serializeAws_json1_1CreateTrailCommand = exports.serializeAws_json1_1AddTagsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AddTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.AddTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AddTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AddTagsCommand = serializeAws_json1_1AddTagsCommand;
const serializeAws_json1_1CreateTrailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.CreateTrail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTrailCommand = serializeAws_json1_1CreateTrailCommand;
const serializeAws_json1_1DeleteTrailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.DeleteTrail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTrailCommand = serializeAws_json1_1DeleteTrailCommand;
const serializeAws_json1_1DescribeTrailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.DescribeTrails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTrailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTrailsCommand = serializeAws_json1_1DescribeTrailsCommand;
const serializeAws_json1_1GetEventSelectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.GetEventSelectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetEventSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetEventSelectorsCommand = serializeAws_json1_1GetEventSelectorsCommand;
const serializeAws_json1_1GetInsightSelectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.GetInsightSelectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetInsightSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetInsightSelectorsCommand = serializeAws_json1_1GetInsightSelectorsCommand;
const serializeAws_json1_1GetTrailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.GetTrail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTrailCommand = serializeAws_json1_1GetTrailCommand;
const serializeAws_json1_1GetTrailStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.GetTrailStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetTrailStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetTrailStatusCommand = serializeAws_json1_1GetTrailStatusCommand;
const serializeAws_json1_1ListPublicKeysCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.ListPublicKeys",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPublicKeysRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPublicKeysCommand = serializeAws_json1_1ListPublicKeysCommand;
const serializeAws_json1_1ListTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.ListTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsCommand = serializeAws_json1_1ListTagsCommand;
const serializeAws_json1_1ListTrailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.ListTrails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTrailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTrailsCommand = serializeAws_json1_1ListTrailsCommand;
const serializeAws_json1_1LookupEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.LookupEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1LookupEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1LookupEventsCommand = serializeAws_json1_1LookupEventsCommand;
const serializeAws_json1_1PutEventSelectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.PutEventSelectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutEventSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutEventSelectorsCommand = serializeAws_json1_1PutEventSelectorsCommand;
const serializeAws_json1_1PutInsightSelectorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.PutInsightSelectors",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutInsightSelectorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutInsightSelectorsCommand = serializeAws_json1_1PutInsightSelectorsCommand;
const serializeAws_json1_1RemoveTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.RemoveTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveTagsCommand = serializeAws_json1_1RemoveTagsCommand;
const serializeAws_json1_1StartLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.StartLogging",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartLoggingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartLoggingCommand = serializeAws_json1_1StartLoggingCommand;
const serializeAws_json1_1StopLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.StopLogging",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopLoggingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopLoggingCommand = serializeAws_json1_1StopLoggingCommand;
const serializeAws_json1_1UpdateTrailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "CloudTrail_20131101.UpdateTrail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTrailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTrailCommand = serializeAws_json1_1UpdateTrailCommand;
const deserializeAws_json1_1AddTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AddTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AddTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AddTagsCommand = deserializeAws_json1_1AddTagsCommand;
const deserializeAws_json1_1AddTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagsLimitExceededException":
        case "com.amazonaws.cloudtrail#TagsLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1TagsLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTrailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTrailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTrailCommand = deserializeAws_json1_1CreateTrailCommand;
const deserializeAws_json1_1CreateTrailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudTrailAccessNotEnabledException":
        case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudTrailInvalidClientTokenIdException":
        case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudWatchLogsDeliveryUnavailableException":
        case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientSnsTopicPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchLogsLogGroupArnException":
        case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchLogsRoleArnException":
        case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKmsKeyIdException":
        case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketNameException":
        case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3PrefixException":
        case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnsTopicNameException":
        case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsException":
        case "com.amazonaws.cloudtrail#KmsException":
            response = {
                ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsKeyDisabledException":
        case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsKeyNotFoundException":
        case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MaximumNumberOfTrailsExceededException":
        case "com.amazonaws.cloudtrail#MaximumNumberOfTrailsExceededException":
            response = {
                ...(await deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationsNotInUseException":
        case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3BucketDoesNotExistException":
        case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailAlreadyExistsException":
        case "com.amazonaws.cloudtrail#TrailAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotProvidedException":
        case "com.amazonaws.cloudtrail#TrailNotProvidedException":
            response = {
                ...(await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTrailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTrailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTrailCommand = deserializeAws_json1_1DeleteTrailCommand;
const deserializeAws_json1_1DeleteTrailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.cloudtrail#ConflictException":
            response = {
                ...(await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTrailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTrailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTrailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTrailsCommand = deserializeAws_json1_1DescribeTrailsCommand;
const deserializeAws_json1_1DescribeTrailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetEventSelectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetEventSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetEventSelectorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetEventSelectorsCommand = deserializeAws_json1_1GetEventSelectorsCommand;
const deserializeAws_json1_1GetEventSelectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetInsightSelectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetInsightSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetInsightSelectorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetInsightSelectorsCommand = deserializeAws_json1_1GetInsightSelectorsCommand;
const deserializeAws_json1_1GetInsightSelectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsightNotEnabledException":
        case "com.amazonaws.cloudtrail#InsightNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1InsightNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTrailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTrailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTrailCommand = deserializeAws_json1_1GetTrailCommand;
const deserializeAws_json1_1GetTrailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetTrailStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetTrailStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetTrailStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetTrailStatusCommand = deserializeAws_json1_1GetTrailStatusCommand;
const deserializeAws_json1_1GetTrailStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPublicKeysCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPublicKeysCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPublicKeysResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPublicKeysCommand = deserializeAws_json1_1ListPublicKeysCommand;
const deserializeAws_json1_1ListPublicKeysCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTimeRangeException":
        case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.cloudtrail#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsCommand = deserializeAws_json1_1ListTagsCommand;
const deserializeAws_json1_1ListTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTokenException":
        case "com.amazonaws.cloudtrail#InvalidTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTrailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTrailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTrailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTrailsCommand = deserializeAws_json1_1ListTrailsCommand;
const deserializeAws_json1_1ListTrailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1LookupEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LookupEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1LookupEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1LookupEventsCommand = deserializeAws_json1_1LookupEventsCommand;
const deserializeAws_json1_1LookupEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEventCategoryException":
        case "com.amazonaws.cloudtrail#InvalidEventCategoryException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventCategoryExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLookupAttributesException":
        case "com.amazonaws.cloudtrail#InvalidLookupAttributesException":
            response = {
                ...(await deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidMaxResultsException":
        case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.cloudtrail#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTimeRangeException":
        case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
            response = {
                ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutEventSelectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutEventSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutEventSelectorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutEventSelectorsCommand = deserializeAws_json1_1PutEventSelectorsCommand;
const deserializeAws_json1_1PutEventSelectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventSelectorsException":
        case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutInsightSelectorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutInsightSelectorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutInsightSelectorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutInsightSelectorsCommand = deserializeAws_json1_1PutInsightSelectorsCommand;
const deserializeAws_json1_1PutInsightSelectorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInsightSelectorsException":
        case "com.amazonaws.cloudtrail#InvalidInsightSelectorsException":
            response = {
                ...(await deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsException":
        case "com.amazonaws.cloudtrail#KmsException":
            response = {
                ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3BucketDoesNotExistException":
        case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RemoveTagsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveTagsCommand = deserializeAws_json1_1RemoveTagsCommand;
const deserializeAws_json1_1RemoveTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudTrailARNInvalidException":
        case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagParameterException":
        case "com.amazonaws.cloudtrail#InvalidTagParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudtrail#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceTypeNotSupportedException":
        case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartLoggingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartLoggingCommand = deserializeAws_json1_1StartLoggingCommand;
const deserializeAws_json1_1StartLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StopLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopLoggingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopLoggingCommand = deserializeAws_json1_1StopLoggingCommand;
const deserializeAws_json1_1StopLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTrailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTrailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTrailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTrailCommand = deserializeAws_json1_1UpdateTrailCommand;
const deserializeAws_json1_1UpdateTrailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CloudTrailAccessNotEnabledException":
        case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudTrailInvalidClientTokenIdException":
        case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
            response = {
                ...(await deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CloudWatchLogsDeliveryUnavailableException":
        case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDependencyServiceAccessPermissionException":
        case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
            response = {
                ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientEncryptionPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientS3BucketPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientSnsTopicPolicyException":
        case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
            response = {
                ...(await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchLogsLogGroupArnException":
        case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCloudWatchLogsRoleArnException":
        case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
            response = {
                ...(await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEventSelectorsException":
        case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
            response = {
                ...(await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHomeRegionException":
        case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKmsKeyIdException":
        case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
            response = {
                ...(await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketNameException":
        case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3PrefixException":
        case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
            response = {
                ...(await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnsTopicNameException":
        case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTrailNameException":
        case "com.amazonaws.cloudtrail#InvalidTrailNameException":
            response = {
                ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsException":
        case "com.amazonaws.cloudtrail#KmsException":
            response = {
                ...(await deserializeAws_json1_1KmsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsKeyDisabledException":
        case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
            response = {
                ...(await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KmsKeyNotFoundException":
        case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotOrganizationMasterAccountException":
        case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
            response = {
                ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.cloudtrail#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotInAllFeaturesModeException":
        case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationsNotInUseException":
        case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "S3BucketDoesNotExistException":
        case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
            response = {
                ...(await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotFoundException":
        case "com.amazonaws.cloudtrail#TrailNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TrailNotProvidedException":
        case "com.amazonaws.cloudtrail#TrailNotProvidedException":
            response = {
                ...(await deserializeAws_json1_1TrailNotProvidedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.cloudtrail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudTrailAccessNotEnabledException(body, context);
    const contents = {
        name: "CloudTrailAccessNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudTrailARNInvalidException(body, context);
    const contents = {
        name: "CloudTrailARNInvalidException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudTrailInvalidClientTokenIdException(body, context);
    const contents = {
        name: "CloudTrailInvalidClientTokenIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(body, context);
    const contents = {
        name: "CloudWatchLogsDeliveryUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConflictExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConflictException(body, context);
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsightNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsightNotEnabledException(body, context);
    const contents = {
        name: "InsightNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(body, context);
    const contents = {
        name: "InsufficientDependencyServiceAccessPermissionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientEncryptionPolicyException(body, context);
    const contents = {
        name: "InsufficientEncryptionPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientS3BucketPolicyException(body, context);
    const contents = {
        name: "InsufficientS3BucketPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InsufficientSnsTopicPolicyException(body, context);
    const contents = {
        name: "InsufficientSnsTopicPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(body, context);
    const contents = {
        name: "InvalidCloudWatchLogsLogGroupArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(body, context);
    const contents = {
        name: "InvalidCloudWatchLogsRoleArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEventCategoryExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventCategoryException(body, context);
    const contents = {
        name: "InvalidEventCategoryException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidEventSelectorsException(body, context);
    const contents = {
        name: "InvalidEventSelectorsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidHomeRegionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidHomeRegionException(body, context);
    const contents = {
        name: "InvalidHomeRegionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInsightSelectorsException(body, context);
    const contents = {
        name: "InvalidInsightSelectorsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidKmsKeyIdException(body, context);
    const contents = {
        name: "InvalidKmsKeyIdException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidLookupAttributesException(body, context);
    const contents = {
        name: "InvalidLookupAttributesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidMaxResultsException(body, context);
    const contents = {
        name: "InvalidMaxResultsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidNextTokenException(body, context);
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
    const contents = {
        name: "InvalidParameterCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3BucketNameException(body, context);
    const contents = {
        name: "InvalidS3BucketNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidS3PrefixExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidS3PrefixException(body, context);
    const contents = {
        name: "InvalidS3PrefixException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidSnsTopicNameException(body, context);
    const contents = {
        name: "InvalidSnsTopicNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTagParameterException(body, context);
    const contents = {
        name: "InvalidTagParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTimeRangeException(body, context);
    const contents = {
        name: "InvalidTimeRangeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTokenExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTokenException(body, context);
    const contents = {
        name: "InvalidTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidTrailNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidTrailNameException(body, context);
    const contents = {
        name: "InvalidTrailNameException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KmsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsException(body, context);
    const contents = {
        name: "KmsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KmsKeyDisabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsKeyDisabledException(body, context);
    const contents = {
        name: "KmsKeyDisabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1KmsKeyNotFoundException(body, context);
    const contents = {
        name: "KmsKeyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(body, context);
    const contents = {
        name: "MaximumNumberOfTrailsExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NotOrganizationMasterAccountException(body, context);
    const contents = {
        name: "NotOrganizationMasterAccountException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotPermittedException(body, context);
    const contents = {
        name: "OperationNotPermittedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(body, context);
    const contents = {
        name: "OrganizationNotInAllFeaturesModeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationsNotInUseException(body, context);
    const contents = {
        name: "OrganizationsNotInUseException",
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
const deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceTypeNotSupportedException(body, context);
    const contents = {
        name: "ResourceTypeNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1S3BucketDoesNotExistException(body, context);
    const contents = {
        name: "S3BucketDoesNotExistException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TagsLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TagsLimitExceededException(body, context);
    const contents = {
        name: "TagsLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailAlreadyExistsException(body, context);
    const contents = {
        name: "TrailAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TrailNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailNotFoundException(body, context);
    const contents = {
        name: "TrailNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TrailNotProvidedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TrailNotProvidedException(body, context);
    const contents = {
        name: "TrailNotProvidedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AddTagsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagsList !== undefined &&
            input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
    };
};
const serializeAws_json1_1AdvancedEventSelector = (input, context) => {
    return {
        ...(input.FieldSelectors !== undefined &&
            input.FieldSelectors !== null && {
            FieldSelectors: serializeAws_json1_1AdvancedFieldSelectors(input.FieldSelectors, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1AdvancedEventSelectors = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AdvancedEventSelector(entry, context);
    });
};
const serializeAws_json1_1AdvancedFieldSelector = (input, context) => {
    return {
        ...(input.EndsWith !== undefined &&
            input.EndsWith !== null && { EndsWith: serializeAws_json1_1Operator(input.EndsWith, context) }),
        ...(input.Equals !== undefined &&
            input.Equals !== null && { Equals: serializeAws_json1_1Operator(input.Equals, context) }),
        ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
        ...(input.NotEndsWith !== undefined &&
            input.NotEndsWith !== null && { NotEndsWith: serializeAws_json1_1Operator(input.NotEndsWith, context) }),
        ...(input.NotEquals !== undefined &&
            input.NotEquals !== null && { NotEquals: serializeAws_json1_1Operator(input.NotEquals, context) }),
        ...(input.NotStartsWith !== undefined &&
            input.NotStartsWith !== null && { NotStartsWith: serializeAws_json1_1Operator(input.NotStartsWith, context) }),
        ...(input.StartsWith !== undefined &&
            input.StartsWith !== null && { StartsWith: serializeAws_json1_1Operator(input.StartsWith, context) }),
    };
};
const serializeAws_json1_1AdvancedFieldSelectors = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
};
const serializeAws_json1_1CreateTrailRequest = (input, context) => {
    return {
        ...(input.CloudWatchLogsLogGroupArn !== undefined &&
            input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
        ...(input.CloudWatchLogsRoleArn !== undefined &&
            input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
        ...(input.EnableLogFileValidation !== undefined &&
            input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation }),
        ...(input.IncludeGlobalServiceEvents !== undefined &&
            input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
        ...(input.IsMultiRegionTrail !== undefined &&
            input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
        ...(input.IsOrganizationTrail !== undefined &&
            input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
        ...(input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }),
        ...(input.TagsList !== undefined &&
            input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
    };
};
const serializeAws_json1_1DataResource = (input, context) => {
    return {
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_json1_1DataResourceValues(input.Values, context) }),
    };
};
const serializeAws_json1_1DataResources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DataResource(entry, context);
    });
};
const serializeAws_json1_1DataResourceValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeleteTrailRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1DescribeTrailsRequest = (input, context) => {
    return {
        ...(input.includeShadowTrails !== undefined &&
            input.includeShadowTrails !== null && { includeShadowTrails: input.includeShadowTrails }),
        ...(input.trailNameList !== undefined &&
            input.trailNameList !== null && {
            trailNameList: serializeAws_json1_1TrailNameList(input.trailNameList, context),
        }),
    };
};
const serializeAws_json1_1EventSelector = (input, context) => {
    return {
        ...(input.DataResources !== undefined &&
            input.DataResources !== null && {
            DataResources: serializeAws_json1_1DataResources(input.DataResources, context),
        }),
        ...(input.ExcludeManagementEventSources !== undefined &&
            input.ExcludeManagementEventSources !== null && {
            ExcludeManagementEventSources: serializeAws_json1_1ExcludeManagementEventSources(input.ExcludeManagementEventSources, context),
        }),
        ...(input.IncludeManagementEvents !== undefined &&
            input.IncludeManagementEvents !== null && { IncludeManagementEvents: input.IncludeManagementEvents }),
        ...(input.ReadWriteType !== undefined && input.ReadWriteType !== null && { ReadWriteType: input.ReadWriteType }),
    };
};
const serializeAws_json1_1EventSelectors = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventSelector(entry, context);
    });
};
const serializeAws_json1_1ExcludeManagementEventSources = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1GetEventSelectorsRequest = (input, context) => {
    return {
        ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
    };
};
const serializeAws_json1_1GetInsightSelectorsRequest = (input, context) => {
    return {
        ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
    };
};
const serializeAws_json1_1GetTrailRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1GetTrailStatusRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1InsightSelector = (input, context) => {
    return {
        ...(input.InsightType !== undefined && input.InsightType !== null && { InsightType: input.InsightType }),
    };
};
const serializeAws_json1_1InsightSelectors = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1InsightSelector(entry, context);
    });
};
const serializeAws_json1_1ListPublicKeysRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1ListTagsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceIdList !== undefined &&
            input.ResourceIdList !== null && {
            ResourceIdList: serializeAws_json1_1ResourceIdList(input.ResourceIdList, context),
        }),
    };
};
const serializeAws_json1_1ListTrailsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1LookupAttribute = (input, context) => {
    return {
        ...(input.AttributeKey !== undefined && input.AttributeKey !== null && { AttributeKey: input.AttributeKey }),
        ...(input.AttributeValue !== undefined &&
            input.AttributeValue !== null && { AttributeValue: input.AttributeValue }),
    };
};
const serializeAws_json1_1LookupAttributesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1LookupAttribute(entry, context);
    });
};
const serializeAws_json1_1LookupEventsRequest = (input, context) => {
    return {
        ...(input.EndTime !== undefined &&
            input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
        ...(input.EventCategory !== undefined && input.EventCategory !== null && { EventCategory: input.EventCategory }),
        ...(input.LookupAttributes !== undefined &&
            input.LookupAttributes !== null && {
            LookupAttributes: serializeAws_json1_1LookupAttributesList(input.LookupAttributes, context),
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.StartTime !== undefined &&
            input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    };
};
const serializeAws_json1_1Operator = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutEventSelectorsRequest = (input, context) => {
    return {
        ...(input.AdvancedEventSelectors !== undefined &&
            input.AdvancedEventSelectors !== null && {
            AdvancedEventSelectors: serializeAws_json1_1AdvancedEventSelectors(input.AdvancedEventSelectors, context),
        }),
        ...(input.EventSelectors !== undefined &&
            input.EventSelectors !== null && {
            EventSelectors: serializeAws_json1_1EventSelectors(input.EventSelectors, context),
        }),
        ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
    };
};
const serializeAws_json1_1PutInsightSelectorsRequest = (input, context) => {
    return {
        ...(input.InsightSelectors !== undefined &&
            input.InsightSelectors !== null && {
            InsightSelectors: serializeAws_json1_1InsightSelectors(input.InsightSelectors, context),
        }),
        ...(input.TrailName !== undefined && input.TrailName !== null && { TrailName: input.TrailName }),
    };
};
const serializeAws_json1_1RemoveTagsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagsList !== undefined &&
            input.TagsList !== null && { TagsList: serializeAws_json1_1TagsList(input.TagsList, context) }),
    };
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1StartLoggingRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1StopLoggingRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1TrailNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1UpdateTrailRequest = (input, context) => {
    return {
        ...(input.CloudWatchLogsLogGroupArn !== undefined &&
            input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
        ...(input.CloudWatchLogsRoleArn !== undefined &&
            input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
        ...(input.EnableLogFileValidation !== undefined &&
            input.EnableLogFileValidation !== null && { EnableLogFileValidation: input.EnableLogFileValidation }),
        ...(input.IncludeGlobalServiceEvents !== undefined &&
            input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
        ...(input.IsMultiRegionTrail !== undefined &&
            input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
        ...(input.IsOrganizationTrail !== undefined &&
            input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix }),
        ...(input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName }),
    };
};
const deserializeAws_json1_1AddTagsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AdvancedEventSelector = (output, context) => {
    return {
        FieldSelectors: output.FieldSelectors !== undefined && output.FieldSelectors !== null
            ? deserializeAws_json1_1AdvancedFieldSelectors(output.FieldSelectors, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1AdvancedEventSelectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdvancedEventSelector(entry, context);
    });
};
const deserializeAws_json1_1AdvancedFieldSelector = (output, context) => {
    return {
        EndsWith: output.EndsWith !== undefined && output.EndsWith !== null
            ? deserializeAws_json1_1Operator(output.EndsWith, context)
            : undefined,
        Equals: output.Equals !== undefined && output.Equals !== null
            ? deserializeAws_json1_1Operator(output.Equals, context)
            : undefined,
        Field: output.Field !== undefined && output.Field !== null ? output.Field : undefined,
        NotEndsWith: output.NotEndsWith !== undefined && output.NotEndsWith !== null
            ? deserializeAws_json1_1Operator(output.NotEndsWith, context)
            : undefined,
        NotEquals: output.NotEquals !== undefined && output.NotEquals !== null
            ? deserializeAws_json1_1Operator(output.NotEquals, context)
            : undefined,
        NotStartsWith: output.NotStartsWith !== undefined && output.NotStartsWith !== null
            ? deserializeAws_json1_1Operator(output.NotStartsWith, context)
            : undefined,
        StartsWith: output.StartsWith !== undefined && output.StartsWith !== null
            ? deserializeAws_json1_1Operator(output.StartsWith, context)
            : undefined,
    };
};
const deserializeAws_json1_1AdvancedFieldSelectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AdvancedFieldSelector(entry, context);
    });
};
const deserializeAws_json1_1CloudTrailAccessNotEnabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CloudTrailARNInvalidException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CloudTrailInvalidClientTokenIdException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConflictException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateTrailResponse = (output, context) => {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1DataResource = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Values: output.Values !== undefined && output.Values !== null
            ? deserializeAws_json1_1DataResourceValues(output.Values, context)
            : undefined,
    };
};
const deserializeAws_json1_1DataResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DataResource(entry, context);
    });
};
const deserializeAws_json1_1DataResourceValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeleteTrailResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeTrailsResponse = (output, context) => {
    return {
        trailList: output.trailList !== undefined && output.trailList !== null
            ? deserializeAws_json1_1TrailList(output.trailList, context)
            : undefined,
    };
};
const deserializeAws_json1_1Event = (output, context) => {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        CloudTrailEvent: output.CloudTrailEvent !== undefined && output.CloudTrailEvent !== null ? output.CloudTrailEvent : undefined,
        EventId: output.EventId !== undefined && output.EventId !== null ? output.EventId : undefined,
        EventName: output.EventName !== undefined && output.EventName !== null ? output.EventName : undefined,
        EventSource: output.EventSource !== undefined && output.EventSource !== null ? output.EventSource : undefined,
        EventTime: output.EventTime !== undefined && output.EventTime !== null
            ? new Date(Math.round(output.EventTime * 1000))
            : undefined,
        ReadOnly: output.ReadOnly !== undefined && output.ReadOnly !== null ? output.ReadOnly : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1ResourceList(output.Resources, context)
            : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_json1_1EventSelector = (output, context) => {
    return {
        DataResources: output.DataResources !== undefined && output.DataResources !== null
            ? deserializeAws_json1_1DataResources(output.DataResources, context)
            : undefined,
        ExcludeManagementEventSources: output.ExcludeManagementEventSources !== undefined && output.ExcludeManagementEventSources !== null
            ? deserializeAws_json1_1ExcludeManagementEventSources(output.ExcludeManagementEventSources, context)
            : undefined,
        IncludeManagementEvents: output.IncludeManagementEvents !== undefined && output.IncludeManagementEvents !== null
            ? output.IncludeManagementEvents
            : undefined,
        ReadWriteType: output.ReadWriteType !== undefined && output.ReadWriteType !== null ? output.ReadWriteType : undefined,
    };
};
const deserializeAws_json1_1EventSelectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventSelector(entry, context);
    });
};
const deserializeAws_json1_1EventsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
const deserializeAws_json1_1ExcludeManagementEventSources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1GetEventSelectorsResponse = (output, context) => {
    return {
        AdvancedEventSelectors: output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
            ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
            : undefined,
        EventSelectors: output.EventSelectors !== undefined && output.EventSelectors !== null
            ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1GetInsightSelectorsResponse = (output, context) => {
    return {
        InsightSelectors: output.InsightSelectors !== undefined && output.InsightSelectors !== null
            ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1GetTrailResponse = (output, context) => {
    return {
        Trail: output.Trail !== undefined && output.Trail !== null
            ? deserializeAws_json1_1Trail(output.Trail, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetTrailStatusResponse = (output, context) => {
    return {
        IsLogging: output.IsLogging !== undefined && output.IsLogging !== null ? output.IsLogging : undefined,
        LatestCloudWatchLogsDeliveryError: output.LatestCloudWatchLogsDeliveryError !== undefined && output.LatestCloudWatchLogsDeliveryError !== null
            ? output.LatestCloudWatchLogsDeliveryError
            : undefined,
        LatestCloudWatchLogsDeliveryTime: output.LatestCloudWatchLogsDeliveryTime !== undefined && output.LatestCloudWatchLogsDeliveryTime !== null
            ? new Date(Math.round(output.LatestCloudWatchLogsDeliveryTime * 1000))
            : undefined,
        LatestDeliveryAttemptSucceeded: output.LatestDeliveryAttemptSucceeded !== undefined && output.LatestDeliveryAttemptSucceeded !== null
            ? output.LatestDeliveryAttemptSucceeded
            : undefined,
        LatestDeliveryAttemptTime: output.LatestDeliveryAttemptTime !== undefined && output.LatestDeliveryAttemptTime !== null
            ? output.LatestDeliveryAttemptTime
            : undefined,
        LatestDeliveryError: output.LatestDeliveryError !== undefined && output.LatestDeliveryError !== null
            ? output.LatestDeliveryError
            : undefined,
        LatestDeliveryTime: output.LatestDeliveryTime !== undefined && output.LatestDeliveryTime !== null
            ? new Date(Math.round(output.LatestDeliveryTime * 1000))
            : undefined,
        LatestDigestDeliveryError: output.LatestDigestDeliveryError !== undefined && output.LatestDigestDeliveryError !== null
            ? output.LatestDigestDeliveryError
            : undefined,
        LatestDigestDeliveryTime: output.LatestDigestDeliveryTime !== undefined && output.LatestDigestDeliveryTime !== null
            ? new Date(Math.round(output.LatestDigestDeliveryTime * 1000))
            : undefined,
        LatestNotificationAttemptSucceeded: output.LatestNotificationAttemptSucceeded !== undefined && output.LatestNotificationAttemptSucceeded !== null
            ? output.LatestNotificationAttemptSucceeded
            : undefined,
        LatestNotificationAttemptTime: output.LatestNotificationAttemptTime !== undefined && output.LatestNotificationAttemptTime !== null
            ? output.LatestNotificationAttemptTime
            : undefined,
        LatestNotificationError: output.LatestNotificationError !== undefined && output.LatestNotificationError !== null
            ? output.LatestNotificationError
            : undefined,
        LatestNotificationTime: output.LatestNotificationTime !== undefined && output.LatestNotificationTime !== null
            ? new Date(Math.round(output.LatestNotificationTime * 1000))
            : undefined,
        StartLoggingTime: output.StartLoggingTime !== undefined && output.StartLoggingTime !== null
            ? new Date(Math.round(output.StartLoggingTime * 1000))
            : undefined,
        StopLoggingTime: output.StopLoggingTime !== undefined && output.StopLoggingTime !== null
            ? new Date(Math.round(output.StopLoggingTime * 1000))
            : undefined,
        TimeLoggingStarted: output.TimeLoggingStarted !== undefined && output.TimeLoggingStarted !== null
            ? output.TimeLoggingStarted
            : undefined,
        TimeLoggingStopped: output.TimeLoggingStopped !== undefined && output.TimeLoggingStopped !== null
            ? output.TimeLoggingStopped
            : undefined,
    };
};
const deserializeAws_json1_1InsightNotEnabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InsightSelector = (output, context) => {
    return {
        InsightType: output.InsightType !== undefined && output.InsightType !== null ? output.InsightType : undefined,
    };
};
const deserializeAws_json1_1InsightSelectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1InsightSelector(entry, context);
    });
};
const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InsufficientEncryptionPolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InsufficientS3BucketPolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InsufficientSnsTopicPolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidEventCategoryException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidEventSelectorsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidHomeRegionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInsightSelectorsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidKmsKeyIdException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidLookupAttributesException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidMaxResultsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidNextTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterCombinationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidS3BucketNameException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidS3PrefixException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidSnsTopicNameException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTagParameterException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTimeRangeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTokenException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidTrailNameException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1KmsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1KmsKeyDisabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1KmsKeyNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListPublicKeysResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        PublicKeyList: output.PublicKeyList !== undefined && output.PublicKeyList !== null
            ? deserializeAws_json1_1PublicKeyList(output.PublicKeyList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ResourceTagList: output.ResourceTagList !== undefined && output.ResourceTagList !== null
            ? deserializeAws_json1_1ResourceTagList(output.ResourceTagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTrailsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Trails: output.Trails !== undefined && output.Trails !== null
            ? deserializeAws_json1_1Trails(output.Trails, context)
            : undefined,
    };
};
const deserializeAws_json1_1LookupEventsResponse = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventsList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1MaximumNumberOfTrailsExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1NotOrganizationMasterAccountException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OperationNotPermittedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Operator = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationsNotInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PublicKey = (output, context) => {
    return {
        Fingerprint: output.Fingerprint !== undefined && output.Fingerprint !== null ? output.Fingerprint : undefined,
        ValidityEndTime: output.ValidityEndTime !== undefined && output.ValidityEndTime !== null
            ? new Date(Math.round(output.ValidityEndTime * 1000))
            : undefined,
        ValidityStartTime: output.ValidityStartTime !== undefined && output.ValidityStartTime !== null
            ? new Date(Math.round(output.ValidityStartTime * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? context.base64Decoder(output.Value) : undefined,
    };
};
const deserializeAws_json1_1PublicKeyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PublicKey(entry, context);
    });
};
const deserializeAws_json1_1PutEventSelectorsResponse = (output, context) => {
    return {
        AdvancedEventSelectors: output.AdvancedEventSelectors !== undefined && output.AdvancedEventSelectors !== null
            ? deserializeAws_json1_1AdvancedEventSelectors(output.AdvancedEventSelectors, context)
            : undefined,
        EventSelectors: output.EventSelectors !== undefined && output.EventSelectors !== null
            ? deserializeAws_json1_1EventSelectors(output.EventSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1PutInsightSelectorsResponse = (output, context) => {
    return {
        InsightSelectors: output.InsightSelectors !== undefined && output.InsightSelectors !== null
            ? deserializeAws_json1_1InsightSelectors(output.InsightSelectors, context)
            : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1RemoveTagsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Resource = (output, context) => {
    return {
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_json1_1ResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResourceTag = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        TagsList: output.TagsList !== undefined && output.TagsList !== null
            ? deserializeAws_json1_1TagsList(output.TagsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1ResourceTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ResourceTag(entry, context);
    });
};
const deserializeAws_json1_1ResourceTypeNotSupportedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1S3BucketDoesNotExistException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1StartLoggingResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1StopLoggingResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1TagsLimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TagsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1Trail = (output, context) => {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        HasCustomEventSelectors: output.HasCustomEventSelectors !== undefined && output.HasCustomEventSelectors !== null
            ? output.HasCustomEventSelectors
            : undefined,
        HasInsightSelectors: output.HasInsightSelectors !== undefined && output.HasInsightSelectors !== null
            ? output.HasInsightSelectors
            : undefined,
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1TrailAlreadyExistsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TrailInfo = (output, context) => {
    return {
        HomeRegion: output.HomeRegion !== undefined && output.HomeRegion !== null ? output.HomeRegion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
    };
};
const deserializeAws_json1_1TrailList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Trail(entry, context);
    });
};
const deserializeAws_json1_1TrailNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TrailNotProvidedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Trails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1TrailInfo(entry, context);
    });
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UpdateTrailResponse = (output, context) => {
    return {
        CloudWatchLogsLogGroupArn: output.CloudWatchLogsLogGroupArn !== undefined && output.CloudWatchLogsLogGroupArn !== null
            ? output.CloudWatchLogsLogGroupArn
            : undefined,
        CloudWatchLogsRoleArn: output.CloudWatchLogsRoleArn !== undefined && output.CloudWatchLogsRoleArn !== null
            ? output.CloudWatchLogsRoleArn
            : undefined,
        IncludeGlobalServiceEvents: output.IncludeGlobalServiceEvents !== undefined && output.IncludeGlobalServiceEvents !== null
            ? output.IncludeGlobalServiceEvents
            : undefined,
        IsMultiRegionTrail: output.IsMultiRegionTrail !== undefined && output.IsMultiRegionTrail !== null
            ? output.IsMultiRegionTrail
            : undefined,
        IsOrganizationTrail: output.IsOrganizationTrail !== undefined && output.IsOrganizationTrail !== null
            ? output.IsOrganizationTrail
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LogFileValidationEnabled: output.LogFileValidationEnabled !== undefined && output.LogFileValidationEnabled !== null
            ? output.LogFileValidationEnabled
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3KeyPrefix: output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null ? output.S3KeyPrefix : undefined,
        SnsTopicARN: output.SnsTopicARN !== undefined && output.SnsTopicARN !== null ? output.SnsTopicARN : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailARN: output.TrailARN !== undefined && output.TrailARN !== null ? output.TrailARN : undefined,
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