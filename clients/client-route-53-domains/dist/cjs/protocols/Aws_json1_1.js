"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_json1_1TransferDomainCommand = exports.deserializeAws_json1_1RetrieveDomainAuthCodeCommand = exports.deserializeAws_json1_1ResendContactReachabilityEmailCommand = exports.deserializeAws_json1_1RenewDomainCommand = exports.deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = exports.deserializeAws_json1_1RegisterDomainCommand = exports.deserializeAws_json1_1ListTagsForDomainCommand = exports.deserializeAws_json1_1ListOperationsCommand = exports.deserializeAws_json1_1ListDomainsCommand = exports.deserializeAws_json1_1GetOperationDetailCommand = exports.deserializeAws_json1_1GetDomainSuggestionsCommand = exports.deserializeAws_json1_1GetDomainDetailCommand = exports.deserializeAws_json1_1GetContactReachabilityStatusCommand = exports.deserializeAws_json1_1EnableDomainTransferLockCommand = exports.deserializeAws_json1_1EnableDomainAutoRenewCommand = exports.deserializeAws_json1_1DisableDomainTransferLockCommand = exports.deserializeAws_json1_1DisableDomainAutoRenewCommand = exports.deserializeAws_json1_1DeleteTagsForDomainCommand = exports.deserializeAws_json1_1CheckDomainTransferabilityCommand = exports.deserializeAws_json1_1CheckDomainAvailabilityCommand = exports.deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = exports.deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = exports.serializeAws_json1_1ViewBillingCommand = exports.serializeAws_json1_1UpdateTagsForDomainCommand = exports.serializeAws_json1_1UpdateDomainNameserversCommand = exports.serializeAws_json1_1UpdateDomainContactPrivacyCommand = exports.serializeAws_json1_1UpdateDomainContactCommand = exports.serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = exports.serializeAws_json1_1TransferDomainCommand = exports.serializeAws_json1_1RetrieveDomainAuthCodeCommand = exports.serializeAws_json1_1ResendContactReachabilityEmailCommand = exports.serializeAws_json1_1RenewDomainCommand = exports.serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = exports.serializeAws_json1_1RegisterDomainCommand = exports.serializeAws_json1_1ListTagsForDomainCommand = exports.serializeAws_json1_1ListOperationsCommand = exports.serializeAws_json1_1ListDomainsCommand = exports.serializeAws_json1_1GetOperationDetailCommand = exports.serializeAws_json1_1GetDomainSuggestionsCommand = exports.serializeAws_json1_1GetDomainDetailCommand = exports.serializeAws_json1_1GetContactReachabilityStatusCommand = exports.serializeAws_json1_1EnableDomainTransferLockCommand = exports.serializeAws_json1_1EnableDomainAutoRenewCommand = exports.serializeAws_json1_1DisableDomainTransferLockCommand = exports.serializeAws_json1_1DisableDomainAutoRenewCommand = exports.serializeAws_json1_1DeleteTagsForDomainCommand = exports.serializeAws_json1_1CheckDomainTransferabilityCommand = exports.serializeAws_json1_1CheckDomainAvailabilityCommand = exports.serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = exports.serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = void 0;
exports.deserializeAws_json1_1ViewBillingCommand = exports.deserializeAws_json1_1UpdateTagsForDomainCommand = exports.deserializeAws_json1_1UpdateDomainNameserversCommand = exports.deserializeAws_json1_1UpdateDomainContactPrivacyCommand = exports.deserializeAws_json1_1UpdateDomainContactCommand = exports.deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand;
const serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand;
const serializeAws_json1_1CheckDomainAvailabilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.CheckDomainAvailability",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckDomainAvailabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckDomainAvailabilityCommand = serializeAws_json1_1CheckDomainAvailabilityCommand;
const serializeAws_json1_1CheckDomainTransferabilityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.CheckDomainTransferability",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CheckDomainTransferabilityRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CheckDomainTransferabilityCommand = serializeAws_json1_1CheckDomainTransferabilityCommand;
const serializeAws_json1_1DeleteTagsForDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.DeleteTagsForDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTagsForDomainCommand = serializeAws_json1_1DeleteTagsForDomainCommand;
const serializeAws_json1_1DisableDomainAutoRenewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.DisableDomainAutoRenew",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableDomainAutoRenewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableDomainAutoRenewCommand = serializeAws_json1_1DisableDomainAutoRenewCommand;
const serializeAws_json1_1DisableDomainTransferLockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.DisableDomainTransferLock",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableDomainTransferLockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableDomainTransferLockCommand = serializeAws_json1_1DisableDomainTransferLockCommand;
const serializeAws_json1_1EnableDomainAutoRenewCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.EnableDomainAutoRenew",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableDomainAutoRenewRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableDomainAutoRenewCommand = serializeAws_json1_1EnableDomainAutoRenewCommand;
const serializeAws_json1_1EnableDomainTransferLockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.EnableDomainTransferLock",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableDomainTransferLockRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableDomainTransferLockCommand = serializeAws_json1_1EnableDomainTransferLockCommand;
const serializeAws_json1_1GetContactReachabilityStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.GetContactReachabilityStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetContactReachabilityStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetContactReachabilityStatusCommand = serializeAws_json1_1GetContactReachabilityStatusCommand;
const serializeAws_json1_1GetDomainDetailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.GetDomainDetail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDomainDetailCommand = serializeAws_json1_1GetDomainDetailCommand;
const serializeAws_json1_1GetDomainSuggestionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.GetDomainSuggestions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDomainSuggestionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDomainSuggestionsCommand = serializeAws_json1_1GetDomainSuggestionsCommand;
const serializeAws_json1_1GetOperationDetailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.GetOperationDetail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetOperationDetailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetOperationDetailCommand = serializeAws_json1_1GetOperationDetailCommand;
const serializeAws_json1_1ListDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.ListDomains",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDomainsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDomainsCommand = serializeAws_json1_1ListDomainsCommand;
const serializeAws_json1_1ListOperationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.ListOperations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOperationsCommand = serializeAws_json1_1ListOperationsCommand;
const serializeAws_json1_1ListTagsForDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.ListTagsForDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForDomainCommand = serializeAws_json1_1ListTagsForDomainCommand;
const serializeAws_json1_1RegisterDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.RegisterDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterDomainCommand = serializeAws_json1_1RegisterDomainCommand;
const serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand;
const serializeAws_json1_1RenewDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.RenewDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RenewDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RenewDomainCommand = serializeAws_json1_1RenewDomainCommand;
const serializeAws_json1_1ResendContactReachabilityEmailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.ResendContactReachabilityEmail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResendContactReachabilityEmailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResendContactReachabilityEmailCommand = serializeAws_json1_1ResendContactReachabilityEmailCommand;
const serializeAws_json1_1RetrieveDomainAuthCodeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.RetrieveDomainAuthCode",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RetrieveDomainAuthCodeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RetrieveDomainAuthCodeCommand = serializeAws_json1_1RetrieveDomainAuthCodeCommand;
const serializeAws_json1_1TransferDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.TransferDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TransferDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TransferDomainCommand = serializeAws_json1_1TransferDomainCommand;
const serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TransferDomainToAnotherAwsAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand;
const serializeAws_json1_1UpdateDomainContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.UpdateDomainContact",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainContactRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDomainContactCommand = serializeAws_json1_1UpdateDomainContactCommand;
const serializeAws_json1_1UpdateDomainContactPrivacyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.UpdateDomainContactPrivacy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainContactPrivacyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDomainContactPrivacyCommand = serializeAws_json1_1UpdateDomainContactPrivacyCommand;
const serializeAws_json1_1UpdateDomainNameserversCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.UpdateDomainNameservers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateDomainNameserversRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateDomainNameserversCommand = serializeAws_json1_1UpdateDomainNameserversCommand;
const serializeAws_json1_1UpdateTagsForDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.UpdateTagsForDomain",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateTagsForDomainRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateTagsForDomainCommand = serializeAws_json1_1UpdateTagsForDomainCommand;
const serializeAws_json1_1ViewBillingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "Route53Domains_v20140515.ViewBilling",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ViewBillingRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ViewBillingCommand = serializeAws_json1_1ViewBillingCommand;
const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand;
const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainLimitExceeded":
        case "com.amazonaws.route53domains#DomainLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand;
const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckDomainAvailabilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckDomainAvailabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckDomainAvailabilityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckDomainAvailabilityCommand = deserializeAws_json1_1CheckDomainAvailabilityCommand;
const deserializeAws_json1_1CheckDomainAvailabilityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CheckDomainTransferabilityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CheckDomainTransferabilityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CheckDomainTransferabilityResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CheckDomainTransferabilityCommand = deserializeAws_json1_1CheckDomainTransferabilityCommand;
const deserializeAws_json1_1CheckDomainTransferabilityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTagsForDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsForDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTagsForDomainCommand = deserializeAws_json1_1DeleteTagsForDomainCommand;
const deserializeAws_json1_1DeleteTagsForDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableDomainAutoRenewCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableDomainAutoRenewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableDomainAutoRenewResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableDomainAutoRenewCommand = deserializeAws_json1_1DisableDomainAutoRenewCommand;
const deserializeAws_json1_1DisableDomainAutoRenewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableDomainTransferLockCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableDomainTransferLockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisableDomainTransferLockResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableDomainTransferLockCommand = deserializeAws_json1_1DisableDomainTransferLockCommand;
const deserializeAws_json1_1DisableDomainTransferLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableDomainAutoRenewCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableDomainAutoRenewCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableDomainAutoRenewResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableDomainAutoRenewCommand = deserializeAws_json1_1EnableDomainAutoRenewCommand;
const deserializeAws_json1_1EnableDomainAutoRenewCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableDomainTransferLockCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableDomainTransferLockCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableDomainTransferLockResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableDomainTransferLockCommand = deserializeAws_json1_1EnableDomainTransferLockCommand;
const deserializeAws_json1_1EnableDomainTransferLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetContactReachabilityStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetContactReachabilityStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetContactReachabilityStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetContactReachabilityStatusCommand = deserializeAws_json1_1GetContactReachabilityStatusCommand;
const deserializeAws_json1_1GetContactReachabilityStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDomainDetailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDomainDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainDetailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDomainDetailCommand = deserializeAws_json1_1GetDomainDetailCommand;
const deserializeAws_json1_1GetDomainDetailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDomainSuggestionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDomainSuggestionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDomainSuggestionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDomainSuggestionsCommand = deserializeAws_json1_1GetDomainSuggestionsCommand;
const deserializeAws_json1_1GetDomainSuggestionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetOperationDetailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetOperationDetailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetOperationDetailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetOperationDetailCommand = deserializeAws_json1_1GetOperationDetailCommand;
const deserializeAws_json1_1GetOperationDetailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDomainsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDomainsCommand = deserializeAws_json1_1ListDomainsCommand;
const deserializeAws_json1_1ListDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListOperationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOperationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOperationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOperationsCommand = deserializeAws_json1_1ListOperationsCommand;
const deserializeAws_json1_1ListOperationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForDomainCommand = deserializeAws_json1_1ListTagsForDomainCommand;
const deserializeAws_json1_1ListTagsForDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterDomainCommand = deserializeAws_json1_1RegisterDomainCommand;
const deserializeAws_json1_1RegisterDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainLimitExceeded":
        case "com.amazonaws.route53domains#DomainLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand;
const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RenewDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RenewDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RenewDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RenewDomainCommand = deserializeAws_json1_1RenewDomainCommand;
const deserializeAws_json1_1RenewDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResendContactReachabilityEmailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResendContactReachabilityEmailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResendContactReachabilityEmailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResendContactReachabilityEmailCommand = deserializeAws_json1_1ResendContactReachabilityEmailCommand;
const deserializeAws_json1_1ResendContactReachabilityEmailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RetrieveDomainAuthCodeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RetrieveDomainAuthCodeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RetrieveDomainAuthCodeCommand = deserializeAws_json1_1RetrieveDomainAuthCodeCommand;
const deserializeAws_json1_1RetrieveDomainAuthCodeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TransferDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TransferDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TransferDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TransferDomainCommand = deserializeAws_json1_1TransferDomainCommand;
const deserializeAws_json1_1TransferDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DomainLimitExceeded":
        case "com.amazonaws.route53domains#DomainLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TransferDomainToAnotherAwsAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand;
const deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDomainContactCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDomainContactCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainContactResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDomainContactCommand = deserializeAws_json1_1UpdateDomainContactCommand;
const deserializeAws_json1_1UpdateDomainContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDomainContactPrivacyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainContactPrivacyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDomainContactPrivacyCommand = deserializeAws_json1_1UpdateDomainContactPrivacyCommand;
const deserializeAws_json1_1UpdateDomainContactPrivacyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateDomainNameserversCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateDomainNameserversCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateDomainNameserversResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateDomainNameserversCommand = deserializeAws_json1_1UpdateDomainNameserversCommand;
const deserializeAws_json1_1UpdateDomainNameserversCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateRequest":
        case "com.amazonaws.route53domains#DuplicateRequest":
            response = {
                ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TLDRulesViolation":
        case "com.amazonaws.route53domains#TLDRulesViolation":
            response = {
                ...(await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateTagsForDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateTagsForDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateTagsForDomainResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateTagsForDomainCommand = deserializeAws_json1_1UpdateTagsForDomainCommand;
const deserializeAws_json1_1UpdateTagsForDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationLimitExceeded":
        case "com.amazonaws.route53domains#OperationLimitExceeded":
            response = {
                ...(await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedTLD":
        case "com.amazonaws.route53domains#UnsupportedTLD":
            response = {
                ...(await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ViewBillingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ViewBillingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ViewBillingResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ViewBillingCommand = deserializeAws_json1_1ViewBillingCommand;
const deserializeAws_json1_1ViewBillingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidInput":
        case "com.amazonaws.route53domains#InvalidInput":
            response = {
                ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DomainLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DomainLimitExceeded(body, context);
    const contents = {
        name: "DomainLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateRequestResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateRequest(body, context);
    const contents = {
        name: "DuplicateRequest",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInput(body, context);
    const contents = {
        name: "InvalidInput",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationLimitExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationLimitExceeded(body, context);
    const contents = {
        name: "OperationLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TLDRulesViolationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TLDRulesViolation(body, context);
    const contents = {
        name: "TLDRulesViolation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedTLDResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedTLD(body, context);
    const contents = {
        name: "UnsupportedTLD",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    };
};
const serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1CheckDomainAvailabilityRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.IdnLangCode !== undefined && input.IdnLangCode !== null && { IdnLangCode: input.IdnLangCode }),
    };
};
const serializeAws_json1_1CheckDomainTransferabilityRequest = (input, context) => {
    return {
        ...(input.AuthCode !== undefined && input.AuthCode !== null && { AuthCode: input.AuthCode }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1ContactDetail = (input, context) => {
    return {
        ...(input.AddressLine1 !== undefined && input.AddressLine1 !== null && { AddressLine1: input.AddressLine1 }),
        ...(input.AddressLine2 !== undefined && input.AddressLine2 !== null && { AddressLine2: input.AddressLine2 }),
        ...(input.City !== undefined && input.City !== null && { City: input.City }),
        ...(input.ContactType !== undefined && input.ContactType !== null && { ContactType: input.ContactType }),
        ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.ExtraParams !== undefined &&
            input.ExtraParams !== null && { ExtraParams: serializeAws_json1_1ExtraParamList(input.ExtraParams, context) }),
        ...(input.Fax !== undefined && input.Fax !== null && { Fax: input.Fax }),
        ...(input.FirstName !== undefined && input.FirstName !== null && { FirstName: input.FirstName }),
        ...(input.LastName !== undefined && input.LastName !== null && { LastName: input.LastName }),
        ...(input.OrganizationName !== undefined &&
            input.OrganizationName !== null && { OrganizationName: input.OrganizationName }),
        ...(input.PhoneNumber !== undefined && input.PhoneNumber !== null && { PhoneNumber: input.PhoneNumber }),
        ...(input.State !== undefined && input.State !== null && { State: input.State }),
        ...(input.ZipCode !== undefined && input.ZipCode !== null && { ZipCode: input.ZipCode }),
    };
};
const serializeAws_json1_1DeleteTagsForDomainRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.TagsToDelete !== undefined &&
            input.TagsToDelete !== null && { TagsToDelete: serializeAws_json1_1TagKeyList(input.TagsToDelete, context) }),
    };
};
const serializeAws_json1_1DisableDomainAutoRenewRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1DisableDomainTransferLockRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1EnableDomainAutoRenewRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1EnableDomainTransferLockRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1ExtraParam = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1ExtraParamList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ExtraParam(entry, context);
    });
};
const serializeAws_json1_1GetContactReachabilityStatusRequest = (input, context) => {
    return {
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1GetDomainDetailRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1GetDomainSuggestionsRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.OnlyAvailable !== undefined && input.OnlyAvailable !== null && { OnlyAvailable: input.OnlyAvailable }),
        ...(input.SuggestionCount !== undefined &&
            input.SuggestionCount !== null && { SuggestionCount: input.SuggestionCount }),
    };
};
const serializeAws_json1_1GetOperationDetailRequest = (input, context) => {
    return {
        ...(input.OperationId !== undefined && input.OperationId !== null && { OperationId: input.OperationId }),
    };
};
const serializeAws_json1_1GlueIpList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListDomainsRequest = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
    };
};
const serializeAws_json1_1ListOperationsRequest = (input, context) => {
    return {
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
        ...(input.SubmittedSince !== undefined &&
            input.SubmittedSince !== null && { SubmittedSince: Math.round(input.SubmittedSince.getTime() / 1000) }),
    };
};
const serializeAws_json1_1ListTagsForDomainRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1Nameserver = (input, context) => {
    return {
        ...(input.GlueIps !== undefined &&
            input.GlueIps !== null && { GlueIps: serializeAws_json1_1GlueIpList(input.GlueIps, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1NameserverList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Nameserver(entry, context);
    });
};
const serializeAws_json1_1RegisterDomainRequest = (input, context) => {
    return {
        ...(input.AdminContact !== undefined &&
            input.AdminContact !== null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
        ...(input.AutoRenew !== undefined && input.AutoRenew !== null && { AutoRenew: input.AutoRenew }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.DurationInYears !== undefined &&
            input.DurationInYears !== null && { DurationInYears: input.DurationInYears }),
        ...(input.IdnLangCode !== undefined && input.IdnLangCode !== null && { IdnLangCode: input.IdnLangCode }),
        ...(input.PrivacyProtectAdminContact !== undefined &&
            input.PrivacyProtectAdminContact !== null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
        ...(input.PrivacyProtectRegistrantContact !== undefined &&
            input.PrivacyProtectRegistrantContact !== null && {
            PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
        }),
        ...(input.PrivacyProtectTechContact !== undefined &&
            input.PrivacyProtectTechContact !== null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
        ...(input.RegistrantContact !== undefined &&
            input.RegistrantContact !== null && {
            RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
        }),
        ...(input.TechContact !== undefined &&
            input.TechContact !== null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
    };
};
const serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1RenewDomainRequest = (input, context) => {
    return {
        ...(input.CurrentExpiryYear !== undefined &&
            input.CurrentExpiryYear !== null && { CurrentExpiryYear: input.CurrentExpiryYear }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.DurationInYears !== undefined &&
            input.DurationInYears !== null && { DurationInYears: input.DurationInYears }),
    };
};
const serializeAws_json1_1ResendContactReachabilityEmailRequest = (input, context) => {
    return {
        ...(input.domainName !== undefined && input.domainName !== null && { domainName: input.domainName }),
    };
};
const serializeAws_json1_1RetrieveDomainAuthCodeRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
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
const serializeAws_json1_1TransferDomainRequest = (input, context) => {
    return {
        ...(input.AdminContact !== undefined &&
            input.AdminContact !== null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
        ...(input.AuthCode !== undefined && input.AuthCode !== null && { AuthCode: input.AuthCode }),
        ...(input.AutoRenew !== undefined && input.AutoRenew !== null && { AutoRenew: input.AutoRenew }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.DurationInYears !== undefined &&
            input.DurationInYears !== null && { DurationInYears: input.DurationInYears }),
        ...(input.IdnLangCode !== undefined && input.IdnLangCode !== null && { IdnLangCode: input.IdnLangCode }),
        ...(input.Nameservers !== undefined &&
            input.Nameservers !== null && { Nameservers: serializeAws_json1_1NameserverList(input.Nameservers, context) }),
        ...(input.PrivacyProtectAdminContact !== undefined &&
            input.PrivacyProtectAdminContact !== null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
        ...(input.PrivacyProtectRegistrantContact !== undefined &&
            input.PrivacyProtectRegistrantContact !== null && {
            PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
        }),
        ...(input.PrivacyProtectTechContact !== undefined &&
            input.PrivacyProtectTechContact !== null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
        ...(input.RegistrantContact !== undefined &&
            input.RegistrantContact !== null && {
            RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
        }),
        ...(input.TechContact !== undefined &&
            input.TechContact !== null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
    };
};
const serializeAws_json1_1TransferDomainToAnotherAwsAccountRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    };
};
const serializeAws_json1_1UpdateDomainContactPrivacyRequest = (input, context) => {
    return {
        ...(input.AdminPrivacy !== undefined && input.AdminPrivacy !== null && { AdminPrivacy: input.AdminPrivacy }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.RegistrantPrivacy !== undefined &&
            input.RegistrantPrivacy !== null && { RegistrantPrivacy: input.RegistrantPrivacy }),
        ...(input.TechPrivacy !== undefined && input.TechPrivacy !== null && { TechPrivacy: input.TechPrivacy }),
    };
};
const serializeAws_json1_1UpdateDomainContactRequest = (input, context) => {
    return {
        ...(input.AdminContact !== undefined &&
            input.AdminContact !== null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.RegistrantContact !== undefined &&
            input.RegistrantContact !== null && {
            RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
        }),
        ...(input.TechContact !== undefined &&
            input.TechContact !== null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
    };
};
const serializeAws_json1_1UpdateDomainNameserversRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.FIAuthKey !== undefined && input.FIAuthKey !== null && { FIAuthKey: input.FIAuthKey }),
        ...(input.Nameservers !== undefined &&
            input.Nameservers !== null && { Nameservers: serializeAws_json1_1NameserverList(input.Nameservers, context) }),
    };
};
const serializeAws_json1_1UpdateTagsForDomainRequest = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.TagsToUpdate !== undefined &&
            input.TagsToUpdate !== null && { TagsToUpdate: serializeAws_json1_1TagList(input.TagsToUpdate, context) }),
    };
};
const serializeAws_json1_1ViewBillingRequest = (input, context) => {
    return {
        ...(input.End !== undefined && input.End !== null && { End: Math.round(input.End.getTime() / 1000) }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.MaxItems !== undefined && input.MaxItems !== null && { MaxItems: input.MaxItems }),
        ...(input.Start !== undefined && input.Start !== null && { Start: Math.round(input.Start.getTime() / 1000) }),
    };
};
const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1BillingRecord = (output, context) => {
    return {
        BillDate: output.BillDate !== undefined && output.BillDate !== null
            ? new Date(Math.round(output.BillDate * 1000))
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        InvoiceId: output.InvoiceId !== undefined && output.InvoiceId !== null ? output.InvoiceId : undefined,
        Operation: output.Operation !== undefined && output.Operation !== null ? output.Operation : undefined,
        Price: output.Price !== undefined && output.Price !== null ? output.Price : undefined,
    };
};
const deserializeAws_json1_1BillingRecords = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1BillingRecord(entry, context);
    });
};
const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1CheckDomainAvailabilityResponse = (output, context) => {
    return {
        Availability: output.Availability !== undefined && output.Availability !== null ? output.Availability : undefined,
    };
};
const deserializeAws_json1_1CheckDomainTransferabilityResponse = (output, context) => {
    return {
        Transferability: output.Transferability !== undefined && output.Transferability !== null
            ? deserializeAws_json1_1DomainTransferability(output.Transferability, context)
            : undefined,
    };
};
const deserializeAws_json1_1ContactDetail = (output, context) => {
    return {
        AddressLine1: output.AddressLine1 !== undefined && output.AddressLine1 !== null ? output.AddressLine1 : undefined,
        AddressLine2: output.AddressLine2 !== undefined && output.AddressLine2 !== null ? output.AddressLine2 : undefined,
        City: output.City !== undefined && output.City !== null ? output.City : undefined,
        ContactType: output.ContactType !== undefined && output.ContactType !== null ? output.ContactType : undefined,
        CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        ExtraParams: output.ExtraParams !== undefined && output.ExtraParams !== null
            ? deserializeAws_json1_1ExtraParamList(output.ExtraParams, context)
            : undefined,
        Fax: output.Fax !== undefined && output.Fax !== null ? output.Fax : undefined,
        FirstName: output.FirstName !== undefined && output.FirstName !== null ? output.FirstName : undefined,
        LastName: output.LastName !== undefined && output.LastName !== null ? output.LastName : undefined,
        OrganizationName: output.OrganizationName !== undefined && output.OrganizationName !== null ? output.OrganizationName : undefined,
        PhoneNumber: output.PhoneNumber !== undefined && output.PhoneNumber !== null ? output.PhoneNumber : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        ZipCode: output.ZipCode !== undefined && output.ZipCode !== null ? output.ZipCode : undefined,
    };
};
const deserializeAws_json1_1DeleteTagsForDomainResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisableDomainAutoRenewResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisableDomainTransferLockResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1DomainLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1DomainStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DomainSuggestion = (output, context) => {
    return {
        Availability: output.Availability !== undefined && output.Availability !== null ? output.Availability : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
    };
};
const deserializeAws_json1_1DomainSuggestionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DomainSuggestion(entry, context);
    });
};
const deserializeAws_json1_1DomainSummary = (output, context) => {
    return {
        AutoRenew: output.AutoRenew !== undefined && output.AutoRenew !== null ? output.AutoRenew : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        Expiry: output.Expiry !== undefined && output.Expiry !== null ? new Date(Math.round(output.Expiry * 1000)) : undefined,
        TransferLock: output.TransferLock !== undefined && output.TransferLock !== null ? output.TransferLock : undefined,
    };
};
const deserializeAws_json1_1DomainSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DomainSummary(entry, context);
    });
};
const deserializeAws_json1_1DomainTransferability = (output, context) => {
    return {
        Transferable: output.Transferable !== undefined && output.Transferable !== null ? output.Transferable : undefined,
    };
};
const deserializeAws_json1_1DuplicateRequest = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1EnableDomainAutoRenewResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1EnableDomainTransferLockResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1ExtraParam = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1ExtraParamList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ExtraParam(entry, context);
    });
};
const deserializeAws_json1_1GetContactReachabilityStatusResponse = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_json1_1GetDomainDetailResponse = (output, context) => {
    return {
        AbuseContactEmail: output.AbuseContactEmail !== undefined && output.AbuseContactEmail !== null
            ? output.AbuseContactEmail
            : undefined,
        AbuseContactPhone: output.AbuseContactPhone !== undefined && output.AbuseContactPhone !== null
            ? output.AbuseContactPhone
            : undefined,
        AdminContact: output.AdminContact !== undefined && output.AdminContact !== null
            ? deserializeAws_json1_1ContactDetail(output.AdminContact, context)
            : undefined,
        AdminPrivacy: output.AdminPrivacy !== undefined && output.AdminPrivacy !== null ? output.AdminPrivacy : undefined,
        AutoRenew: output.AutoRenew !== undefined && output.AutoRenew !== null ? output.AutoRenew : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        DnsSec: output.DnsSec !== undefined && output.DnsSec !== null ? output.DnsSec : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null
            ? new Date(Math.round(output.ExpirationDate * 1000))
            : undefined,
        Nameservers: output.Nameservers !== undefined && output.Nameservers !== null
            ? deserializeAws_json1_1NameserverList(output.Nameservers, context)
            : undefined,
        RegistrantContact: output.RegistrantContact !== undefined && output.RegistrantContact !== null
            ? deserializeAws_json1_1ContactDetail(output.RegistrantContact, context)
            : undefined,
        RegistrantPrivacy: output.RegistrantPrivacy !== undefined && output.RegistrantPrivacy !== null
            ? output.RegistrantPrivacy
            : undefined,
        RegistrarName: output.RegistrarName !== undefined && output.RegistrarName !== null ? output.RegistrarName : undefined,
        RegistrarUrl: output.RegistrarUrl !== undefined && output.RegistrarUrl !== null ? output.RegistrarUrl : undefined,
        RegistryDomainId: output.RegistryDomainId !== undefined && output.RegistryDomainId !== null ? output.RegistryDomainId : undefined,
        Reseller: output.Reseller !== undefined && output.Reseller !== null ? output.Reseller : undefined,
        StatusList: output.StatusList !== undefined && output.StatusList !== null
            ? deserializeAws_json1_1DomainStatusList(output.StatusList, context)
            : undefined,
        TechContact: output.TechContact !== undefined && output.TechContact !== null
            ? deserializeAws_json1_1ContactDetail(output.TechContact, context)
            : undefined,
        TechPrivacy: output.TechPrivacy !== undefined && output.TechPrivacy !== null ? output.TechPrivacy : undefined,
        UpdatedDate: output.UpdatedDate !== undefined && output.UpdatedDate !== null
            ? new Date(Math.round(output.UpdatedDate * 1000))
            : undefined,
        WhoIsServer: output.WhoIsServer !== undefined && output.WhoIsServer !== null ? output.WhoIsServer : undefined,
    };
};
const deserializeAws_json1_1GetDomainSuggestionsResponse = (output, context) => {
    return {
        SuggestionsList: output.SuggestionsList !== undefined && output.SuggestionsList !== null
            ? deserializeAws_json1_1DomainSuggestionsList(output.SuggestionsList, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetOperationDetailResponse = (output, context) => {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubmittedDate: output.SubmittedDate !== undefined && output.SubmittedDate !== null
            ? new Date(Math.round(output.SubmittedDate * 1000))
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1GlueIpList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1InvalidInput = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ListDomainsResponse = (output, context) => {
    return {
        Domains: output.Domains !== undefined && output.Domains !== null
            ? deserializeAws_json1_1DomainSummaryList(output.Domains, context)
            : undefined,
        NextPageMarker: output.NextPageMarker !== undefined && output.NextPageMarker !== null ? output.NextPageMarker : undefined,
    };
};
const deserializeAws_json1_1ListOperationsResponse = (output, context) => {
    return {
        NextPageMarker: output.NextPageMarker !== undefined && output.NextPageMarker !== null ? output.NextPageMarker : undefined,
        Operations: output.Operations !== undefined && output.Operations !== null
            ? deserializeAws_json1_1OperationSummaryList(output.Operations, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForDomainResponse = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1Nameserver = (output, context) => {
    return {
        GlueIps: output.GlueIps !== undefined && output.GlueIps !== null
            ? deserializeAws_json1_1GlueIpList(output.GlueIps, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1NameserverList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Nameserver(entry, context);
    });
};
const deserializeAws_json1_1OperationLimitExceeded = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OperationSummary = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubmittedDate: output.SubmittedDate !== undefined && output.SubmittedDate !== null
            ? new Date(Math.round(output.SubmittedDate * 1000))
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1OperationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OperationSummary(entry, context);
    });
};
const deserializeAws_json1_1RegisterDomainResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1RenewDomainResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1ResendContactReachabilityEmailResponse = (output, context) => {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
        emailAddress: output.emailAddress !== undefined && output.emailAddress !== null ? output.emailAddress : undefined,
        isAlreadyVerified: output.isAlreadyVerified !== undefined && output.isAlreadyVerified !== null
            ? output.isAlreadyVerified
            : undefined,
    };
};
const deserializeAws_json1_1RetrieveDomainAuthCodeResponse = (output, context) => {
    return {
        AuthCode: output.AuthCode !== undefined && output.AuthCode !== null ? output.AuthCode : undefined,
    };
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
const deserializeAws_json1_1TLDRulesViolation = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1TransferDomainResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1TransferDomainToAnotherAwsAccountResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
        Password: output.Password !== undefined && output.Password !== null ? output.Password : undefined,
    };
};
const deserializeAws_json1_1UnsupportedTLD = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateDomainContactPrivacyResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1UpdateDomainContactResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1UpdateDomainNameserversResponse = (output, context) => {
    return {
        OperationId: output.OperationId !== undefined && output.OperationId !== null ? output.OperationId : undefined,
    };
};
const deserializeAws_json1_1UpdateTagsForDomainResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ViewBillingResponse = (output, context) => {
    return {
        BillingRecords: output.BillingRecords !== undefined && output.BillingRecords !== null
            ? deserializeAws_json1_1BillingRecords(output.BillingRecords, context)
            : undefined,
        NextPageMarker: output.NextPageMarker !== undefined && output.NextPageMarker !== null ? output.NextPageMarker : undefined,
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