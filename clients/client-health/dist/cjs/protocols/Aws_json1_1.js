"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = exports.deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = exports.deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = exports.deserializeAws_json1_1DescribeEventTypesCommand = exports.deserializeAws_json1_1DescribeEventsForOrganizationCommand = exports.deserializeAws_json1_1DescribeEventsCommand = exports.deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = exports.deserializeAws_json1_1DescribeEventDetailsCommand = exports.deserializeAws_json1_1DescribeEventAggregatesCommand = exports.deserializeAws_json1_1DescribeEntityAggregatesCommand = exports.deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = exports.deserializeAws_json1_1DescribeAffectedEntitiesCommand = exports.deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = exports.serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = exports.serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = exports.serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = exports.serializeAws_json1_1DescribeEventTypesCommand = exports.serializeAws_json1_1DescribeEventsForOrganizationCommand = exports.serializeAws_json1_1DescribeEventsCommand = exports.serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = exports.serializeAws_json1_1DescribeEventDetailsCommand = exports.serializeAws_json1_1DescribeEventAggregatesCommand = exports.serializeAws_json1_1DescribeEntityAggregatesCommand = exports.serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = exports.serializeAws_json1_1DescribeAffectedEntitiesCommand = exports.serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeAffectedAccountsForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = serializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand;
const serializeAws_json1_1DescribeAffectedEntitiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntities",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAffectedEntitiesCommand = serializeAws_json1_1DescribeAffectedEntitiesCommand;
const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeAffectedEntitiesForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = serializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand;
const serializeAws_json1_1DescribeEntityAggregatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEntityAggregates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEntityAggregatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEntityAggregatesCommand = serializeAws_json1_1DescribeEntityAggregatesCommand;
const serializeAws_json1_1DescribeEventAggregatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEventAggregates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventAggregatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventAggregatesCommand = serializeAws_json1_1DescribeEventAggregatesCommand;
const serializeAws_json1_1DescribeEventDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEventDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventDetailsCommand = serializeAws_json1_1DescribeEventDetailsCommand;
const serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEventDetailsForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventDetailsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventDetailsForOrganizationCommand = serializeAws_json1_1DescribeEventDetailsForOrganizationCommand;
const serializeAws_json1_1DescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEvents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventsCommand = serializeAws_json1_1DescribeEventsCommand;
const serializeAws_json1_1DescribeEventsForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEventsForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventsForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventsForOrganizationCommand = serializeAws_json1_1DescribeEventsForOrganizationCommand;
const serializeAws_json1_1DescribeEventTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeEventTypes",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEventTypesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEventTypesCommand = serializeAws_json1_1DescribeEventTypesCommand;
const serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DescribeHealthServiceStatusForOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = serializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand;
const serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.DisableHealthServiceAccessForOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = serializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand;
const serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSHealth_20160804.EnableHealthServiceAccessForOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = serializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand;
const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand = deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommand;
const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAffectedEntitiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAffectedEntitiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedEntitiesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAffectedEntitiesCommand = deserializeAws_json1_1DescribeAffectedEntitiesCommand;
const deserializeAws_json1_1DescribeAffectedEntitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand = deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommand;
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEntityAggregatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEntityAggregatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEntityAggregatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEntityAggregatesCommand = deserializeAws_json1_1DescribeEntityAggregatesCommand;
const deserializeAws_json1_1DescribeEntityAggregatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1DescribeEventAggregatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventAggregatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventAggregatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventAggregatesCommand = deserializeAws_json1_1DescribeEventAggregatesCommand;
const deserializeAws_json1_1DescribeEventAggregatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventDetailsCommand = deserializeAws_json1_1DescribeEventDetailsCommand;
const deserializeAws_json1_1DescribeEventDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand = deserializeAws_json1_1DescribeEventDetailsForOrganizationCommand;
const deserializeAws_json1_1DescribeEventDetailsForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventsCommand = deserializeAws_json1_1DescribeEventsCommand;
const deserializeAws_json1_1DescribeEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventsForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventsForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventsForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventsForOrganizationCommand = deserializeAws_json1_1DescribeEventsForOrganizationCommand;
const deserializeAws_json1_1DescribeEventsForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEventTypesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEventTypesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEventTypesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEventTypesCommand = deserializeAws_json1_1DescribeEventTypesCommand;
const deserializeAws_json1_1DescribeEventTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidPaginationToken":
        case "com.amazonaws.health#InvalidPaginationToken":
            response = {
                ...(await deserializeAws_json1_1InvalidPaginationTokenResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedLocale":
        case "com.amazonaws.health#UnsupportedLocale":
            response = {
                ...(await deserializeAws_json1_1UnsupportedLocaleResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand = deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommand;
const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand = deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommand;
const deserializeAws_json1_1DisableHealthServiceAccessForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.health#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand = deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommand;
const deserializeAws_json1_1EnableHealthServiceAccessForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.health#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InvalidPaginationTokenResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPaginationToken(body, context);
    const contents = {
        name: "InvalidPaginationToken",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedLocaleResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedLocale(body, context);
    const contents = {
        name: "UnsupportedLocale",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1availabilityZones = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1awsAccountIdsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DateTimeRange = (input, context) => {
    return {
        ...(input.from !== undefined && input.from !== null && { from: Math.round(input.from.getTime() / 1000) }),
        ...(input.to !== undefined && input.to !== null && { to: Math.round(input.to.getTime() / 1000) }),
    };
};
const serializeAws_json1_1dateTimeRangeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1DateTimeRange(entry, context);
    });
};
const serializeAws_json1_1DescribeAffectedAccountsForOrganizationRequest = (input, context) => {
    return {
        ...(input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeAffectedEntitiesForOrganizationRequest = (input, context) => {
    return {
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.organizationEntityFilters !== undefined &&
            input.organizationEntityFilters !== null && {
            organizationEntityFilters: serializeAws_json1_1OrganizationEntityFiltersList(input.organizationEntityFilters, context),
        }),
    };
};
const serializeAws_json1_1DescribeAffectedEntitiesRequest = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1EntityFilter(input.filter, context) }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeEntityAggregatesRequest = (input, context) => {
    return {
        ...(input.eventArns !== undefined &&
            input.eventArns !== null && { eventArns: serializeAws_json1_1EventArnsList(input.eventArns, context) }),
    };
};
const serializeAws_json1_1DescribeEventAggregatesRequest = (input, context) => {
    return {
        ...(input.aggregateField !== undefined &&
            input.aggregateField !== null && { aggregateField: input.aggregateField }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeEventDetailsForOrganizationRequest = (input, context) => {
    return {
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.organizationEventDetailFilters !== undefined &&
            input.organizationEventDetailFilters !== null && {
            organizationEventDetailFilters: serializeAws_json1_1OrganizationEventDetailFiltersList(input.organizationEventDetailFilters, context),
        }),
    };
};
const serializeAws_json1_1DescribeEventDetailsRequest = (input, context) => {
    return {
        ...(input.eventArns !== undefined &&
            input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    };
};
const serializeAws_json1_1DescribeEventsForOrganizationRequest = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1OrganizationEventFilter(input.filter, context) }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeEventsRequest = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1EventFilter(input.filter, context) }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1DescribeEventTypesRequest = (input, context) => {
    return {
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_json1_1EventTypeFilter(input.filter, context) }),
        ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    };
};
const serializeAws_json1_1entityArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EntityFilter = (input, context) => {
    return {
        ...(input.entityArns !== undefined &&
            input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
        ...(input.entityValues !== undefined &&
            input.entityValues !== null && {
            entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
        }),
        ...(input.eventArns !== undefined &&
            input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
        ...(input.lastUpdatedTimes !== undefined &&
            input.lastUpdatedTimes !== null && {
            lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
        }),
        ...(input.statusCodes !== undefined &&
            input.statusCodes !== null && {
            statusCodes: serializeAws_json1_1entityStatusCodeList(input.statusCodes, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }),
    };
};
const serializeAws_json1_1entityStatusCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1entityValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventAccountFilter = (input, context) => {
    return {
        ...(input.awsAccountId !== undefined && input.awsAccountId !== null && { awsAccountId: input.awsAccountId }),
        ...(input.eventArn !== undefined && input.eventArn !== null && { eventArn: input.eventArn }),
    };
};
const serializeAws_json1_1eventArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventArnsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventFilter = (input, context) => {
    return {
        ...(input.availabilityZones !== undefined &&
            input.availabilityZones !== null && {
            availabilityZones: serializeAws_json1_1availabilityZones(input.availabilityZones, context),
        }),
        ...(input.endTimes !== undefined &&
            input.endTimes !== null && { endTimes: serializeAws_json1_1dateTimeRangeList(input.endTimes, context) }),
        ...(input.entityArns !== undefined &&
            input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
        ...(input.entityValues !== undefined &&
            input.entityValues !== null && {
            entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
        }),
        ...(input.eventArns !== undefined &&
            input.eventArns !== null && { eventArns: serializeAws_json1_1eventArnList(input.eventArns, context) }),
        ...(input.eventStatusCodes !== undefined &&
            input.eventStatusCodes !== null && {
            eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
        }),
        ...(input.eventTypeCategories !== undefined &&
            input.eventTypeCategories !== null && {
            eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
        }),
        ...(input.eventTypeCodes !== undefined &&
            input.eventTypeCodes !== null && {
            eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
        }),
        ...(input.lastUpdatedTimes !== undefined &&
            input.lastUpdatedTimes !== null && {
            lastUpdatedTimes: serializeAws_json1_1dateTimeRangeList(input.lastUpdatedTimes, context),
        }),
        ...(input.regions !== undefined &&
            input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) }),
        ...(input.services !== undefined &&
            input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
        ...(input.startTimes !== undefined &&
            input.startTimes !== null && { startTimes: serializeAws_json1_1dateTimeRangeList(input.startTimes, context) }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_json1_1tagFilter(input.tags, context) }),
    };
};
const serializeAws_json1_1eventStatusCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventTypeCategoryList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1eventTypeCategoryList2 = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventTypeCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1EventTypeFilter = (input, context) => {
    return {
        ...(input.eventTypeCategories !== undefined &&
            input.eventTypeCategories !== null && {
            eventTypeCategories: serializeAws_json1_1EventTypeCategoryList(input.eventTypeCategories, context),
        }),
        ...(input.eventTypeCodes !== undefined &&
            input.eventTypeCodes !== null && {
            eventTypeCodes: serializeAws_json1_1EventTypeCodeList(input.eventTypeCodes, context),
        }),
        ...(input.services !== undefined &&
            input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
    };
};
const serializeAws_json1_1eventTypeList2 = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1OrganizationEntityFiltersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};
const serializeAws_json1_1OrganizationEventDetailFiltersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1EventAccountFilter(entry, context);
    });
};
const serializeAws_json1_1OrganizationEventFilter = (input, context) => {
    return {
        ...(input.awsAccountIds !== undefined &&
            input.awsAccountIds !== null && {
            awsAccountIds: serializeAws_json1_1awsAccountIdsList(input.awsAccountIds, context),
        }),
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: serializeAws_json1_1DateTimeRange(input.endTime, context) }),
        ...(input.entityArns !== undefined &&
            input.entityArns !== null && { entityArns: serializeAws_json1_1entityArnList(input.entityArns, context) }),
        ...(input.entityValues !== undefined &&
            input.entityValues !== null && {
            entityValues: serializeAws_json1_1entityValueList(input.entityValues, context),
        }),
        ...(input.eventStatusCodes !== undefined &&
            input.eventStatusCodes !== null && {
            eventStatusCodes: serializeAws_json1_1eventStatusCodeList(input.eventStatusCodes, context),
        }),
        ...(input.eventTypeCategories !== undefined &&
            input.eventTypeCategories !== null && {
            eventTypeCategories: serializeAws_json1_1eventTypeCategoryList2(input.eventTypeCategories, context),
        }),
        ...(input.eventTypeCodes !== undefined &&
            input.eventTypeCodes !== null && {
            eventTypeCodes: serializeAws_json1_1eventTypeList2(input.eventTypeCodes, context),
        }),
        ...(input.lastUpdatedTime !== undefined &&
            input.lastUpdatedTime !== null && {
            lastUpdatedTime: serializeAws_json1_1DateTimeRange(input.lastUpdatedTime, context),
        }),
        ...(input.regions !== undefined &&
            input.regions !== null && { regions: serializeAws_json1_1regionList(input.regions, context) }),
        ...(input.services !== undefined &&
            input.services !== null && { services: serializeAws_json1_1serviceList(input.services, context) }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: serializeAws_json1_1DateTimeRange(input.startTime, context) }),
    };
};
const serializeAws_json1_1regionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1serviceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1tagFilter = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1tagSet(entry, context);
    });
};
const serializeAws_json1_1tagSet = (input, context) => {
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
const deserializeAws_json1_1affectedAccountsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AffectedEntity = (output, context) => {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        entityArn: output.entityArn !== undefined && output.entityArn !== null ? output.entityArn : undefined,
        entityUrl: output.entityUrl !== undefined && output.entityUrl !== null ? output.entityUrl : undefined,
        entityValue: output.entityValue !== undefined && output.entityValue !== null ? output.entityValue : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_json1_1tagSet(output.tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DescribeAffectedAccountsForOrganizationResponse = (output, context) => {
    return {
        affectedAccounts: output.affectedAccounts !== undefined && output.affectedAccounts !== null
            ? deserializeAws_json1_1affectedAccountsList(output.affectedAccounts, context)
            : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem(entry, context);
    });
};
const deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationResponse = (output, context) => {
    return {
        entities: output.entities !== undefined && output.entities !== null
            ? deserializeAws_json1_1EntityList(output.entities, context)
            : undefined,
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeAffectedEntitiesForOrganizationFailedSet(output.failedSet, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAffectedEntitiesResponse = (output, context) => {
    return {
        entities: output.entities !== undefined && output.entities !== null
            ? deserializeAws_json1_1EntityList(output.entities, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeEntityAggregatesResponse = (output, context) => {
    return {
        entityAggregates: output.entityAggregates !== undefined && output.entityAggregates !== null
            ? deserializeAws_json1_1EntityAggregateList(output.entityAggregates, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventAggregatesResponse = (output, context) => {
    return {
        eventAggregates: output.eventAggregates !== undefined && output.eventAggregates !== null
            ? deserializeAws_json1_1EventAggregateList(output.eventAggregates, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeEventDetailsFailedSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventDetailsErrorItem(entry, context);
    });
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEventDetailsErrorItem(entry, context);
    });
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationResponse = (output, context) => {
    return {
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsForOrganizationFailedSet(output.failedSet, context)
            : undefined,
        successfulSet: output.successfulSet !== undefined && output.successfulSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet(output.successfulSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventDetailsForOrganizationSuccessfulSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEventDetails(entry, context);
    });
};
const deserializeAws_json1_1DescribeEventDetailsResponse = (output, context) => {
    return {
        failedSet: output.failedSet !== undefined && output.failedSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsFailedSet(output.failedSet, context)
            : undefined,
        successfulSet: output.successfulSet !== undefined && output.successfulSet !== null
            ? deserializeAws_json1_1DescribeEventDetailsSuccessfulSet(output.successfulSet, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEventDetailsSuccessfulSet = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventDetails(entry, context);
    });
};
const deserializeAws_json1_1DescribeEventsForOrganizationResponse = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1OrganizationEventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeEventsResponse = (output, context) => {
    return {
        events: output.events !== undefined && output.events !== null
            ? deserializeAws_json1_1EventList(output.events, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeEventTypesResponse = (output, context) => {
    return {
        eventTypes: output.eventTypes !== undefined && output.eventTypes !== null
            ? deserializeAws_json1_1EventTypeList(output.eventTypes, context)
            : undefined,
        nextToken: output.nextToken !== undefined && output.nextToken !== null ? output.nextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeHealthServiceStatusForOrganizationResponse = (output, context) => {
    return {
        healthServiceAccessStatusForOrganization: output.healthServiceAccessStatusForOrganization !== undefined &&
            output.healthServiceAccessStatusForOrganization !== null
            ? output.healthServiceAccessStatusForOrganization
            : undefined,
    };
};
const deserializeAws_json1_1EntityAggregate = (output, context) => {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
const deserializeAws_json1_1EntityAggregateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EntityAggregate(entry, context);
    });
};
const deserializeAws_json1_1EntityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AffectedEntity(entry, context);
    });
};
const deserializeAws_json1_1Event = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        availabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        eventTypeCategory: output.eventTypeCategory !== undefined && output.eventTypeCategory !== null
            ? output.eventTypeCategory
            : undefined,
        eventTypeCode: output.eventTypeCode !== undefined && output.eventTypeCode !== null ? output.eventTypeCode : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
const deserializeAws_json1_1EventAggregate = (output, context) => {
    return {
        aggregateValue: output.aggregateValue !== undefined && output.aggregateValue !== null ? output.aggregateValue : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
    };
};
const deserializeAws_json1_1EventAggregateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventAggregate(entry, context);
    });
};
const deserializeAws_json1_1EventDescription = (output, context) => {
    return {
        latestDescription: output.latestDescription !== undefined && output.latestDescription !== null
            ? output.latestDescription
            : undefined,
    };
};
const deserializeAws_json1_1EventDetails = (output, context) => {
    return {
        event: output.event !== undefined && output.event !== null
            ? deserializeAws_json1_1Event(output.event, context)
            : undefined,
        eventDescription: output.eventDescription !== undefined && output.eventDescription !== null
            ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
            : undefined,
        eventMetadata: output.eventMetadata !== undefined && output.eventMetadata !== null
            ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1EventDetailsErrorItem = (output, context) => {
    return {
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
const deserializeAws_json1_1EventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
const deserializeAws_json1_1eventMetadata = (output, context) => {
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
const deserializeAws_json1_1EventType = (output, context) => {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
    };
};
const deserializeAws_json1_1EventTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EventType(entry, context);
    });
};
const deserializeAws_json1_1InvalidPaginationToken = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OrganizationAffectedEntitiesErrorItem = (output, context) => {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
const deserializeAws_json1_1OrganizationEvent = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        eventScopeCode: output.eventScopeCode !== undefined && output.eventScopeCode !== null ? output.eventScopeCode : undefined,
        eventTypeCategory: output.eventTypeCategory !== undefined && output.eventTypeCategory !== null
            ? output.eventTypeCategory
            : undefined,
        eventTypeCode: output.eventTypeCode !== undefined && output.eventTypeCode !== null ? output.eventTypeCode : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
    };
};
const deserializeAws_json1_1OrganizationEventDetails = (output, context) => {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        event: output.event !== undefined && output.event !== null
            ? deserializeAws_json1_1Event(output.event, context)
            : undefined,
        eventDescription: output.eventDescription !== undefined && output.eventDescription !== null
            ? deserializeAws_json1_1EventDescription(output.eventDescription, context)
            : undefined,
        eventMetadata: output.eventMetadata !== undefined && output.eventMetadata !== null
            ? deserializeAws_json1_1eventMetadata(output.eventMetadata, context)
            : undefined,
    };
};
const deserializeAws_json1_1OrganizationEventDetailsErrorItem = (output, context) => {
    return {
        awsAccountId: output.awsAccountId !== undefined && output.awsAccountId !== null ? output.awsAccountId : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        errorName: output.errorName !== undefined && output.errorName !== null ? output.errorName : undefined,
        eventArn: output.eventArn !== undefined && output.eventArn !== null ? output.eventArn : undefined,
    };
};
const deserializeAws_json1_1OrganizationEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationEvent(entry, context);
    });
};
const deserializeAws_json1_1tagSet = (output, context) => {
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
const deserializeAws_json1_1UnsupportedLocale = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
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