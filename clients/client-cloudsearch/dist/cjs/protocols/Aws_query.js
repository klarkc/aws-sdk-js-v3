"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_queryUpdateDomainEndpointOptionsCommand = exports.deserializeAws_queryUpdateAvailabilityOptionsCommand = exports.deserializeAws_queryListDomainNamesCommand = exports.deserializeAws_queryIndexDocumentsCommand = exports.deserializeAws_queryDescribeSuggestersCommand = exports.deserializeAws_queryDescribeServiceAccessPoliciesCommand = exports.deserializeAws_queryDescribeScalingParametersCommand = exports.deserializeAws_queryDescribeIndexFieldsCommand = exports.deserializeAws_queryDescribeExpressionsCommand = exports.deserializeAws_queryDescribeDomainsCommand = exports.deserializeAws_queryDescribeDomainEndpointOptionsCommand = exports.deserializeAws_queryDescribeAvailabilityOptionsCommand = exports.deserializeAws_queryDescribeAnalysisSchemesCommand = exports.deserializeAws_queryDeleteSuggesterCommand = exports.deserializeAws_queryDeleteIndexFieldCommand = exports.deserializeAws_queryDeleteExpressionCommand = exports.deserializeAws_queryDeleteDomainCommand = exports.deserializeAws_queryDeleteAnalysisSchemeCommand = exports.deserializeAws_queryDefineSuggesterCommand = exports.deserializeAws_queryDefineIndexFieldCommand = exports.deserializeAws_queryDefineExpressionCommand = exports.deserializeAws_queryDefineAnalysisSchemeCommand = exports.deserializeAws_queryCreateDomainCommand = exports.deserializeAws_queryBuildSuggestersCommand = exports.serializeAws_queryUpdateServiceAccessPoliciesCommand = exports.serializeAws_queryUpdateScalingParametersCommand = exports.serializeAws_queryUpdateDomainEndpointOptionsCommand = exports.serializeAws_queryUpdateAvailabilityOptionsCommand = exports.serializeAws_queryListDomainNamesCommand = exports.serializeAws_queryIndexDocumentsCommand = exports.serializeAws_queryDescribeSuggestersCommand = exports.serializeAws_queryDescribeServiceAccessPoliciesCommand = exports.serializeAws_queryDescribeScalingParametersCommand = exports.serializeAws_queryDescribeIndexFieldsCommand = exports.serializeAws_queryDescribeExpressionsCommand = exports.serializeAws_queryDescribeDomainsCommand = exports.serializeAws_queryDescribeDomainEndpointOptionsCommand = exports.serializeAws_queryDescribeAvailabilityOptionsCommand = exports.serializeAws_queryDescribeAnalysisSchemesCommand = exports.serializeAws_queryDeleteSuggesterCommand = exports.serializeAws_queryDeleteIndexFieldCommand = exports.serializeAws_queryDeleteExpressionCommand = exports.serializeAws_queryDeleteDomainCommand = exports.serializeAws_queryDeleteAnalysisSchemeCommand = exports.serializeAws_queryDefineSuggesterCommand = exports.serializeAws_queryDefineIndexFieldCommand = exports.serializeAws_queryDefineExpressionCommand = exports.serializeAws_queryDefineAnalysisSchemeCommand = exports.serializeAws_queryCreateDomainCommand = exports.serializeAws_queryBuildSuggestersCommand = void 0;
exports.deserializeAws_queryUpdateServiceAccessPoliciesCommand = exports.deserializeAws_queryUpdateScalingParametersCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryBuildSuggestersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBuildSuggestersRequest(input, context),
        Action: "BuildSuggesters",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBuildSuggestersCommand = serializeAws_queryBuildSuggestersCommand;
const serializeAws_queryCreateDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDomainRequest(input, context),
        Action: "CreateDomain",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDomainCommand = serializeAws_queryCreateDomainCommand;
const serializeAws_queryDefineAnalysisSchemeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDefineAnalysisSchemeRequest(input, context),
        Action: "DefineAnalysisScheme",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDefineAnalysisSchemeCommand = serializeAws_queryDefineAnalysisSchemeCommand;
const serializeAws_queryDefineExpressionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDefineExpressionRequest(input, context),
        Action: "DefineExpression",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDefineExpressionCommand = serializeAws_queryDefineExpressionCommand;
const serializeAws_queryDefineIndexFieldCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDefineIndexFieldRequest(input, context),
        Action: "DefineIndexField",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDefineIndexFieldCommand = serializeAws_queryDefineIndexFieldCommand;
const serializeAws_queryDefineSuggesterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDefineSuggesterRequest(input, context),
        Action: "DefineSuggester",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDefineSuggesterCommand = serializeAws_queryDefineSuggesterCommand;
const serializeAws_queryDeleteAnalysisSchemeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteAnalysisSchemeRequest(input, context),
        Action: "DeleteAnalysisScheme",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteAnalysisSchemeCommand = serializeAws_queryDeleteAnalysisSchemeCommand;
const serializeAws_queryDeleteDomainCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDomainRequest(input, context),
        Action: "DeleteDomain",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDomainCommand = serializeAws_queryDeleteDomainCommand;
const serializeAws_queryDeleteExpressionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteExpressionRequest(input, context),
        Action: "DeleteExpression",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteExpressionCommand = serializeAws_queryDeleteExpressionCommand;
const serializeAws_queryDeleteIndexFieldCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteIndexFieldRequest(input, context),
        Action: "DeleteIndexField",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteIndexFieldCommand = serializeAws_queryDeleteIndexFieldCommand;
const serializeAws_queryDeleteSuggesterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSuggesterRequest(input, context),
        Action: "DeleteSuggester",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSuggesterCommand = serializeAws_queryDeleteSuggesterCommand;
const serializeAws_queryDescribeAnalysisSchemesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAnalysisSchemesRequest(input, context),
        Action: "DescribeAnalysisSchemes",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAnalysisSchemesCommand = serializeAws_queryDescribeAnalysisSchemesCommand;
const serializeAws_queryDescribeAvailabilityOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAvailabilityOptionsRequest(input, context),
        Action: "DescribeAvailabilityOptions",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAvailabilityOptionsCommand = serializeAws_queryDescribeAvailabilityOptionsCommand;
const serializeAws_queryDescribeDomainEndpointOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDomainEndpointOptionsRequest(input, context),
        Action: "DescribeDomainEndpointOptions",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDomainEndpointOptionsCommand = serializeAws_queryDescribeDomainEndpointOptionsCommand;
const serializeAws_queryDescribeDomainsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDomainsRequest(input, context),
        Action: "DescribeDomains",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDomainsCommand = serializeAws_queryDescribeDomainsCommand;
const serializeAws_queryDescribeExpressionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeExpressionsRequest(input, context),
        Action: "DescribeExpressions",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeExpressionsCommand = serializeAws_queryDescribeExpressionsCommand;
const serializeAws_queryDescribeIndexFieldsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeIndexFieldsRequest(input, context),
        Action: "DescribeIndexFields",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeIndexFieldsCommand = serializeAws_queryDescribeIndexFieldsCommand;
const serializeAws_queryDescribeScalingParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeScalingParametersRequest(input, context),
        Action: "DescribeScalingParameters",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeScalingParametersCommand = serializeAws_queryDescribeScalingParametersCommand;
const serializeAws_queryDescribeServiceAccessPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeServiceAccessPoliciesRequest(input, context),
        Action: "DescribeServiceAccessPolicies",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeServiceAccessPoliciesCommand = serializeAws_queryDescribeServiceAccessPoliciesCommand;
const serializeAws_queryDescribeSuggestersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSuggestersRequest(input, context),
        Action: "DescribeSuggesters",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSuggestersCommand = serializeAws_queryDescribeSuggestersCommand;
const serializeAws_queryIndexDocumentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryIndexDocumentsRequest(input, context),
        Action: "IndexDocuments",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryIndexDocumentsCommand = serializeAws_queryIndexDocumentsCommand;
const serializeAws_queryListDomainNamesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "ListDomainNames",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListDomainNamesCommand = serializeAws_queryListDomainNamesCommand;
const serializeAws_queryUpdateAvailabilityOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateAvailabilityOptionsRequest(input, context),
        Action: "UpdateAvailabilityOptions",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateAvailabilityOptionsCommand = serializeAws_queryUpdateAvailabilityOptionsCommand;
const serializeAws_queryUpdateDomainEndpointOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateDomainEndpointOptionsRequest(input, context),
        Action: "UpdateDomainEndpointOptions",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateDomainEndpointOptionsCommand = serializeAws_queryUpdateDomainEndpointOptionsCommand;
const serializeAws_queryUpdateScalingParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateScalingParametersRequest(input, context),
        Action: "UpdateScalingParameters",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateScalingParametersCommand = serializeAws_queryUpdateScalingParametersCommand;
const serializeAws_queryUpdateServiceAccessPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdateServiceAccessPoliciesRequest(input, context),
        Action: "UpdateServiceAccessPolicies",
        Version: "2013-01-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdateServiceAccessPoliciesCommand = serializeAws_queryUpdateServiceAccessPoliciesCommand;
const deserializeAws_queryBuildSuggestersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBuildSuggestersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBuildSuggestersResponse(data.BuildSuggestersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBuildSuggestersCommand = deserializeAws_queryBuildSuggestersCommand;
const deserializeAws_queryBuildSuggestersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDomainResponse(data.CreateDomainResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDomainCommand = deserializeAws_queryCreateDomainCommand;
const deserializeAws_queryCreateDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDefineAnalysisSchemeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDefineAnalysisSchemeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineAnalysisSchemeResponse(data.DefineAnalysisSchemeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDefineAnalysisSchemeCommand = deserializeAws_queryDefineAnalysisSchemeCommand;
const deserializeAws_queryDefineAnalysisSchemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDefineExpressionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDefineExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineExpressionResponse(data.DefineExpressionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDefineExpressionCommand = deserializeAws_queryDefineExpressionCommand;
const deserializeAws_queryDefineExpressionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDefineIndexFieldCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDefineIndexFieldCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineIndexFieldResponse(data.DefineIndexFieldResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDefineIndexFieldCommand = deserializeAws_queryDefineIndexFieldCommand;
const deserializeAws_queryDefineIndexFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDefineSuggesterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDefineSuggesterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDefineSuggesterResponse(data.DefineSuggesterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDefineSuggesterCommand = deserializeAws_queryDefineSuggesterCommand;
const deserializeAws_queryDefineSuggesterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteAnalysisSchemeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteAnalysisSchemeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteAnalysisSchemeResponse(data.DeleteAnalysisSchemeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteAnalysisSchemeCommand = deserializeAws_queryDeleteAnalysisSchemeCommand;
const deserializeAws_queryDeleteAnalysisSchemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDomainCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDomainCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDomainResponse(data.DeleteDomainResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDomainCommand = deserializeAws_queryDeleteDomainCommand;
const deserializeAws_queryDeleteDomainCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteExpressionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteExpressionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteExpressionResponse(data.DeleteExpressionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteExpressionCommand = deserializeAws_queryDeleteExpressionCommand;
const deserializeAws_queryDeleteExpressionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteIndexFieldCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteIndexFieldCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteIndexFieldResponse(data.DeleteIndexFieldResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteIndexFieldCommand = deserializeAws_queryDeleteIndexFieldCommand;
const deserializeAws_queryDeleteIndexFieldCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteSuggesterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSuggesterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteSuggesterResponse(data.DeleteSuggesterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSuggesterCommand = deserializeAws_queryDeleteSuggesterCommand;
const deserializeAws_queryDeleteSuggesterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAnalysisSchemesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAnalysisSchemesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAnalysisSchemesResponse(data.DescribeAnalysisSchemesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAnalysisSchemesCommand = deserializeAws_queryDescribeAnalysisSchemesCommand;
const deserializeAws_queryDescribeAnalysisSchemesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAvailabilityOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAvailabilityOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeAvailabilityOptionsResponse(data.DescribeAvailabilityOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAvailabilityOptionsCommand = deserializeAws_queryDescribeAvailabilityOptionsCommand;
const deserializeAws_queryDescribeAvailabilityOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.cloudsearch#DisabledOperationException":
            response = {
                ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDomainEndpointOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDomainEndpointOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDomainEndpointOptionsResponse(data.DescribeDomainEndpointOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDomainEndpointOptionsCommand = deserializeAws_queryDescribeDomainEndpointOptionsCommand;
const deserializeAws_queryDescribeDomainEndpointOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.cloudsearch#DisabledOperationException":
            response = {
                ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDomainsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDomainsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDomainsResponse(data.DescribeDomainsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDomainsCommand = deserializeAws_queryDescribeDomainsCommand;
const deserializeAws_queryDescribeDomainsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeExpressionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeExpressionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeExpressionsResponse(data.DescribeExpressionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeExpressionsCommand = deserializeAws_queryDescribeExpressionsCommand;
const deserializeAws_queryDescribeExpressionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeIndexFieldsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeIndexFieldsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeIndexFieldsResponse(data.DescribeIndexFieldsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeIndexFieldsCommand = deserializeAws_queryDescribeIndexFieldsCommand;
const deserializeAws_queryDescribeIndexFieldsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeScalingParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeScalingParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeScalingParametersResponse(data.DescribeScalingParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeScalingParametersCommand = deserializeAws_queryDescribeScalingParametersCommand;
const deserializeAws_queryDescribeScalingParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeServiceAccessPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeServiceAccessPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeServiceAccessPoliciesResponse(data.DescribeServiceAccessPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeServiceAccessPoliciesCommand = deserializeAws_queryDescribeServiceAccessPoliciesCommand;
const deserializeAws_queryDescribeServiceAccessPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeSuggestersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSuggestersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSuggestersResponse(data.DescribeSuggestersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSuggestersCommand = deserializeAws_queryDescribeSuggestersCommand;
const deserializeAws_queryDescribeSuggestersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryIndexDocumentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryIndexDocumentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryIndexDocumentsResponse(data.IndexDocumentsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryIndexDocumentsCommand = deserializeAws_queryIndexDocumentsCommand;
const deserializeAws_queryIndexDocumentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryListDomainNamesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListDomainNamesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryListDomainNamesResponse(data.ListDomainNamesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListDomainNamesCommand = deserializeAws_queryListDomainNamesCommand;
const deserializeAws_queryListDomainNamesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateAvailabilityOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateAvailabilityOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateAvailabilityOptionsResponse(data.UpdateAvailabilityOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateAvailabilityOptionsCommand = deserializeAws_queryUpdateAvailabilityOptionsCommand;
const deserializeAws_queryUpdateAvailabilityOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.cloudsearch#DisabledOperationException":
            response = {
                ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.cloudsearch#ValidationException":
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
const deserializeAws_queryUpdateDomainEndpointOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateDomainEndpointOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateDomainEndpointOptionsResponse(data.UpdateDomainEndpointOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateDomainEndpointOptionsCommand = deserializeAws_queryUpdateDomainEndpointOptionsCommand;
const deserializeAws_queryUpdateDomainEndpointOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DisabledOperationException":
        case "com.amazonaws.cloudsearch#DisabledOperationException":
            response = {
                ...(await deserializeAws_queryDisabledOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.cloudsearch#ValidationException":
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
const deserializeAws_queryUpdateScalingParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateScalingParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateScalingParametersResponse(data.UpdateScalingParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateScalingParametersCommand = deserializeAws_queryUpdateScalingParametersCommand;
const deserializeAws_queryUpdateScalingParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdateServiceAccessPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdateServiceAccessPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateServiceAccessPoliciesResponse(data.UpdateServiceAccessPoliciesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdateServiceAccessPoliciesCommand = deserializeAws_queryUpdateServiceAccessPoliciesCommand;
const deserializeAws_queryUpdateServiceAccessPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BaseException":
        case "com.amazonaws.cloudsearch#BaseException":
            response = {
                ...(await deserializeAws_queryBaseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalException":
        case "com.amazonaws.cloudsearch#InternalException":
            response = {
                ...(await deserializeAws_queryInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTypeException":
        case "com.amazonaws.cloudsearch#InvalidTypeException":
            response = {
                ...(await deserializeAws_queryInvalidTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cloudsearch#LimitExceededException":
            response = {
                ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cloudsearch#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_queryBaseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBaseException(body.Error, context);
    const contents = {
        name: "BaseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDisabledOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDisabledOperationException(body.Error, context);
    const contents = {
        name: "DisabledOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInternalExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInternalException(body.Error, context);
    const contents = {
        name: "InternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTypeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTypeException(body.Error, context);
    const contents = {
        name: "InvalidTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededException(body.Error, context);
    const contents = {
        name: "LimitExceededException",
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
const serializeAws_queryAnalysisOptions = (input, context) => {
    const entries = {};
    if (input.Synonyms !== undefined && input.Synonyms !== null) {
        entries["Synonyms"] = input.Synonyms;
    }
    if (input.Stopwords !== undefined && input.Stopwords !== null) {
        entries["Stopwords"] = input.Stopwords;
    }
    if (input.StemmingDictionary !== undefined && input.StemmingDictionary !== null) {
        entries["StemmingDictionary"] = input.StemmingDictionary;
    }
    if (input.JapaneseTokenizationDictionary !== undefined && input.JapaneseTokenizationDictionary !== null) {
        entries["JapaneseTokenizationDictionary"] = input.JapaneseTokenizationDictionary;
    }
    if (input.AlgorithmicStemming !== undefined && input.AlgorithmicStemming !== null) {
        entries["AlgorithmicStemming"] = input.AlgorithmicStemming;
    }
    return entries;
};
const serializeAws_queryAnalysisScheme = (input, context) => {
    const entries = {};
    if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
        entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
    }
    if (input.AnalysisSchemeLanguage !== undefined && input.AnalysisSchemeLanguage !== null) {
        entries["AnalysisSchemeLanguage"] = input.AnalysisSchemeLanguage;
    }
    if (input.AnalysisOptions !== undefined && input.AnalysisOptions !== null) {
        const memberEntries = serializeAws_queryAnalysisOptions(input.AnalysisOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AnalysisOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryBuildSuggestersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryCreateDomainRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDateArrayOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
const serializeAws_queryDateOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
const serializeAws_queryDefineAnalysisSchemeRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        const memberEntries = serializeAws_queryAnalysisScheme(input.AnalysisScheme, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AnalysisScheme.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDefineExpressionRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Expression !== undefined && input.Expression !== null) {
        const memberEntries = serializeAws_queryExpression(input.Expression, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Expression.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDefineIndexFieldRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexField !== undefined && input.IndexField !== null) {
        const memberEntries = serializeAws_queryIndexField(input.IndexField, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IndexField.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDefineSuggesterRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Suggester !== undefined && input.Suggester !== null) {
        const memberEntries = serializeAws_querySuggester(input.Suggester, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Suggester.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteAnalysisSchemeRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisSchemeName !== undefined && input.AnalysisSchemeName !== null) {
        entries["AnalysisSchemeName"] = input.AnalysisSchemeName;
    }
    return entries;
};
const serializeAws_queryDeleteDomainRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDeleteExpressionRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    return entries;
};
const serializeAws_queryDeleteIndexFieldRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    return entries;
};
const serializeAws_queryDeleteSuggesterRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    return entries;
};
const serializeAws_queryDescribeAnalysisSchemesRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AnalysisSchemeNames !== undefined && input.AnalysisSchemeNames !== null) {
        const memberEntries = serializeAws_queryStandardNameList(input.AnalysisSchemeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AnalysisSchemeNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeAvailabilityOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeDomainEndpointOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeDomainsRequest = (input, context) => {
    const entries = {};
    if (input.DomainNames !== undefined && input.DomainNames !== null) {
        const memberEntries = serializeAws_queryDomainNameList(input.DomainNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DomainNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeExpressionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ExpressionNames !== undefined && input.ExpressionNames !== null) {
        const memberEntries = serializeAws_queryStandardNameList(input.ExpressionNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExpressionNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeIndexFieldsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.FieldNames !== undefined && input.FieldNames !== null) {
        const memberEntries = serializeAws_queryDynamicFieldNameList(input.FieldNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `FieldNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeScalingParametersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryDescribeServiceAccessPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDescribeSuggestersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.SuggesterNames !== undefined && input.SuggesterNames !== null) {
        const memberEntries = serializeAws_queryStandardNameList(input.SuggesterNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SuggesterNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Deployed !== undefined && input.Deployed !== null) {
        entries["Deployed"] = input.Deployed;
    }
    return entries;
};
const serializeAws_queryDocumentSuggesterOptions = (input, context) => {
    const entries = {};
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FuzzyMatching !== undefined && input.FuzzyMatching !== null) {
        entries["FuzzyMatching"] = input.FuzzyMatching;
    }
    if (input.SortExpression !== undefined && input.SortExpression !== null) {
        entries["SortExpression"] = input.SortExpression;
    }
    return entries;
};
const serializeAws_queryDomainEndpointOptions = (input, context) => {
    const entries = {};
    if (input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null) {
        entries["EnforceHTTPS"] = input.EnforceHTTPS;
    }
    if (input.TLSSecurityPolicy !== undefined && input.TLSSecurityPolicy !== null) {
        entries["TLSSecurityPolicy"] = input.TLSSecurityPolicy;
    }
    return entries;
};
const serializeAws_queryDomainNameList = (input, context) => {
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
const serializeAws_queryDoubleArrayOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
const serializeAws_queryDoubleOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
const serializeAws_queryDynamicFieldNameList = (input, context) => {
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
const serializeAws_queryExpression = (input, context) => {
    const entries = {};
    if (input.ExpressionName !== undefined && input.ExpressionName !== null) {
        entries["ExpressionName"] = input.ExpressionName;
    }
    if (input.ExpressionValue !== undefined && input.ExpressionValue !== null) {
        entries["ExpressionValue"] = input.ExpressionValue;
    }
    return entries;
};
const serializeAws_queryIndexDocumentsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    return entries;
};
const serializeAws_queryIndexField = (input, context) => {
    const entries = {};
    if (input.IndexFieldName !== undefined && input.IndexFieldName !== null) {
        entries["IndexFieldName"] = input.IndexFieldName;
    }
    if (input.IndexFieldType !== undefined && input.IndexFieldType !== null) {
        entries["IndexFieldType"] = input.IndexFieldType;
    }
    if (input.IntOptions !== undefined && input.IntOptions !== null) {
        const memberEntries = serializeAws_queryIntOptions(input.IntOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IntOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DoubleOptions !== undefined && input.DoubleOptions !== null) {
        const memberEntries = serializeAws_queryDoubleOptions(input.DoubleOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DoubleOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LiteralOptions !== undefined && input.LiteralOptions !== null) {
        const memberEntries = serializeAws_queryLiteralOptions(input.LiteralOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LiteralOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TextOptions !== undefined && input.TextOptions !== null) {
        const memberEntries = serializeAws_queryTextOptions(input.TextOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TextOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DateOptions !== undefined && input.DateOptions !== null) {
        const memberEntries = serializeAws_queryDateOptions(input.DateOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DateOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LatLonOptions !== undefined && input.LatLonOptions !== null) {
        const memberEntries = serializeAws_queryLatLonOptions(input.LatLonOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LatLonOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.IntArrayOptions !== undefined && input.IntArrayOptions !== null) {
        const memberEntries = serializeAws_queryIntArrayOptions(input.IntArrayOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IntArrayOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DoubleArrayOptions !== undefined && input.DoubleArrayOptions !== null) {
        const memberEntries = serializeAws_queryDoubleArrayOptions(input.DoubleArrayOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DoubleArrayOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LiteralArrayOptions !== undefined && input.LiteralArrayOptions !== null) {
        const memberEntries = serializeAws_queryLiteralArrayOptions(input.LiteralArrayOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LiteralArrayOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TextArrayOptions !== undefined && input.TextArrayOptions !== null) {
        const memberEntries = serializeAws_queryTextArrayOptions(input.TextArrayOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TextArrayOptions.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DateArrayOptions !== undefined && input.DateArrayOptions !== null) {
        const memberEntries = serializeAws_queryDateArrayOptions(input.DateArrayOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DateArrayOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryIntArrayOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
const serializeAws_queryIntOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
const serializeAws_queryLatLonOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
const serializeAws_queryLiteralArrayOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    return entries;
};
const serializeAws_queryLiteralOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.FacetEnabled !== undefined && input.FacetEnabled !== null) {
        entries["FacetEnabled"] = input.FacetEnabled;
    }
    if (input.SearchEnabled !== undefined && input.SearchEnabled !== null) {
        entries["SearchEnabled"] = input.SearchEnabled;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    return entries;
};
const serializeAws_queryScalingParameters = (input, context) => {
    const entries = {};
    if (input.DesiredInstanceType !== undefined && input.DesiredInstanceType !== null) {
        entries["DesiredInstanceType"] = input.DesiredInstanceType;
    }
    if (input.DesiredReplicationCount !== undefined && input.DesiredReplicationCount !== null) {
        entries["DesiredReplicationCount"] = input.DesiredReplicationCount;
    }
    if (input.DesiredPartitionCount !== undefined && input.DesiredPartitionCount !== null) {
        entries["DesiredPartitionCount"] = input.DesiredPartitionCount;
    }
    return entries;
};
const serializeAws_queryStandardNameList = (input, context) => {
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
const serializeAws_querySuggester = (input, context) => {
    const entries = {};
    if (input.SuggesterName !== undefined && input.SuggesterName !== null) {
        entries["SuggesterName"] = input.SuggesterName;
    }
    if (input.DocumentSuggesterOptions !== undefined && input.DocumentSuggesterOptions !== null) {
        const memberEntries = serializeAws_queryDocumentSuggesterOptions(input.DocumentSuggesterOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DocumentSuggesterOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryTextArrayOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceFields !== undefined && input.SourceFields !== null) {
        entries["SourceFields"] = input.SourceFields;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
        entries["HighlightEnabled"] = input.HighlightEnabled;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        entries["AnalysisScheme"] = input.AnalysisScheme;
    }
    return entries;
};
const serializeAws_queryTextOptions = (input, context) => {
    const entries = {};
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.SourceField !== undefined && input.SourceField !== null) {
        entries["SourceField"] = input.SourceField;
    }
    if (input.ReturnEnabled !== undefined && input.ReturnEnabled !== null) {
        entries["ReturnEnabled"] = input.ReturnEnabled;
    }
    if (input.SortEnabled !== undefined && input.SortEnabled !== null) {
        entries["SortEnabled"] = input.SortEnabled;
    }
    if (input.HighlightEnabled !== undefined && input.HighlightEnabled !== null) {
        entries["HighlightEnabled"] = input.HighlightEnabled;
    }
    if (input.AnalysisScheme !== undefined && input.AnalysisScheme !== null) {
        entries["AnalysisScheme"] = input.AnalysisScheme;
    }
    return entries;
};
const serializeAws_queryUpdateAvailabilityOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    return entries;
};
const serializeAws_queryUpdateDomainEndpointOptionsRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.DomainEndpointOptions !== undefined && input.DomainEndpointOptions !== null) {
        const memberEntries = serializeAws_queryDomainEndpointOptions(input.DomainEndpointOptions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DomainEndpointOptions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateScalingParametersRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.ScalingParameters !== undefined && input.ScalingParameters !== null) {
        const memberEntries = serializeAws_queryScalingParameters(input.ScalingParameters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScalingParameters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryUpdateServiceAccessPoliciesRequest = (input, context) => {
    const entries = {};
    if (input.DomainName !== undefined && input.DomainName !== null) {
        entries["DomainName"] = input.DomainName;
    }
    if (input.AccessPolicies !== undefined && input.AccessPolicies !== null) {
        entries["AccessPolicies"] = input.AccessPolicies;
    }
    return entries;
};
const deserializeAws_queryAccessPoliciesStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryAnalysisOptions = (output, context) => {
    let contents = {
        Synonyms: undefined,
        Stopwords: undefined,
        StemmingDictionary: undefined,
        JapaneseTokenizationDictionary: undefined,
        AlgorithmicStemming: undefined,
    };
    if (output["Synonyms"] !== undefined) {
        contents.Synonyms = output["Synonyms"];
    }
    if (output["Stopwords"] !== undefined) {
        contents.Stopwords = output["Stopwords"];
    }
    if (output["StemmingDictionary"] !== undefined) {
        contents.StemmingDictionary = output["StemmingDictionary"];
    }
    if (output["JapaneseTokenizationDictionary"] !== undefined) {
        contents.JapaneseTokenizationDictionary = output["JapaneseTokenizationDictionary"];
    }
    if (output["AlgorithmicStemming"] !== undefined) {
        contents.AlgorithmicStemming = output["AlgorithmicStemming"];
    }
    return contents;
};
const deserializeAws_queryAnalysisScheme = (output, context) => {
    let contents = {
        AnalysisSchemeName: undefined,
        AnalysisSchemeLanguage: undefined,
        AnalysisOptions: undefined,
    };
    if (output["AnalysisSchemeName"] !== undefined) {
        contents.AnalysisSchemeName = output["AnalysisSchemeName"];
    }
    if (output["AnalysisSchemeLanguage"] !== undefined) {
        contents.AnalysisSchemeLanguage = output["AnalysisSchemeLanguage"];
    }
    if (output["AnalysisOptions"] !== undefined) {
        contents.AnalysisOptions = deserializeAws_queryAnalysisOptions(output["AnalysisOptions"], context);
    }
    return contents;
};
const deserializeAws_queryAnalysisSchemeStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryAnalysisScheme(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryAnalysisSchemeStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAnalysisSchemeStatus(entry, context);
    });
};
const deserializeAws_queryAvailabilityOptionsStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = output["Options"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryBaseException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryBuildSuggestersResponse = (output, context) => {
    let contents = {
        FieldNames: undefined,
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
        contents.FieldNames = deserializeAws_queryFieldNameList(smithy_client_1.getArrayIfSingleItem(output["FieldNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryCreateDomainResponse = (output, context) => {
    let contents = {
        DomainStatus: undefined,
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
const deserializeAws_queryDateArrayOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryDateOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryDefineAnalysisSchemeResponse = (output, context) => {
    let contents = {
        AnalysisScheme: undefined,
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
const deserializeAws_queryDefineExpressionResponse = (output, context) => {
    let contents = {
        Expression: undefined,
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
const deserializeAws_queryDefineIndexFieldResponse = (output, context) => {
    let contents = {
        IndexField: undefined,
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
const deserializeAws_queryDefineSuggesterResponse = (output, context) => {
    let contents = {
        Suggester: undefined,
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteAnalysisSchemeResponse = (output, context) => {
    let contents = {
        AnalysisScheme: undefined,
    };
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = deserializeAws_queryAnalysisSchemeStatus(output["AnalysisScheme"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDomainResponse = (output, context) => {
    let contents = {
        DomainStatus: undefined,
    };
    if (output["DomainStatus"] !== undefined) {
        contents.DomainStatus = deserializeAws_queryDomainStatus(output["DomainStatus"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteExpressionResponse = (output, context) => {
    let contents = {
        Expression: undefined,
    };
    if (output["Expression"] !== undefined) {
        contents.Expression = deserializeAws_queryExpressionStatus(output["Expression"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteIndexFieldResponse = (output, context) => {
    let contents = {
        IndexField: undefined,
    };
    if (output["IndexField"] !== undefined) {
        contents.IndexField = deserializeAws_queryIndexFieldStatus(output["IndexField"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteSuggesterResponse = (output, context) => {
    let contents = {
        Suggester: undefined,
    };
    if (output["Suggester"] !== undefined) {
        contents.Suggester = deserializeAws_querySuggesterStatus(output["Suggester"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeAnalysisSchemesResponse = (output, context) => {
    let contents = {
        AnalysisSchemes: undefined,
    };
    if (output.AnalysisSchemes === "") {
        contents.AnalysisSchemes = [];
    }
    if (output["AnalysisSchemes"] !== undefined && output["AnalysisSchemes"]["member"] !== undefined) {
        contents.AnalysisSchemes = deserializeAws_queryAnalysisSchemeStatusList(smithy_client_1.getArrayIfSingleItem(output["AnalysisSchemes"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeAvailabilityOptionsResponse = (output, context) => {
    let contents = {
        AvailabilityOptions: undefined,
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDomainEndpointOptionsResponse = (output, context) => {
    let contents = {
        DomainEndpointOptions: undefined,
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDomainsResponse = (output, context) => {
    let contents = {
        DomainStatusList: undefined,
    };
    if (output.DomainStatusList === "") {
        contents.DomainStatusList = [];
    }
    if (output["DomainStatusList"] !== undefined && output["DomainStatusList"]["member"] !== undefined) {
        contents.DomainStatusList = deserializeAws_queryDomainStatusList(smithy_client_1.getArrayIfSingleItem(output["DomainStatusList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeExpressionsResponse = (output, context) => {
    let contents = {
        Expressions: undefined,
    };
    if (output.Expressions === "") {
        contents.Expressions = [];
    }
    if (output["Expressions"] !== undefined && output["Expressions"]["member"] !== undefined) {
        contents.Expressions = deserializeAws_queryExpressionStatusList(smithy_client_1.getArrayIfSingleItem(output["Expressions"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeIndexFieldsResponse = (output, context) => {
    let contents = {
        IndexFields: undefined,
    };
    if (output.IndexFields === "") {
        contents.IndexFields = [];
    }
    if (output["IndexFields"] !== undefined && output["IndexFields"]["member"] !== undefined) {
        contents.IndexFields = deserializeAws_queryIndexFieldStatusList(smithy_client_1.getArrayIfSingleItem(output["IndexFields"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeScalingParametersResponse = (output, context) => {
    let contents = {
        ScalingParameters: undefined,
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeServiceAccessPoliciesResponse = (output, context) => {
    let contents = {
        AccessPolicies: undefined,
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeSuggestersResponse = (output, context) => {
    let contents = {
        Suggesters: undefined,
    };
    if (output.Suggesters === "") {
        contents.Suggesters = [];
    }
    if (output["Suggesters"] !== undefined && output["Suggesters"]["member"] !== undefined) {
        contents.Suggesters = deserializeAws_querySuggesterStatusList(smithy_client_1.getArrayIfSingleItem(output["Suggesters"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryDisabledOperationException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryDocumentSuggesterOptions = (output, context) => {
    let contents = {
        SourceField: undefined,
        FuzzyMatching: undefined,
        SortExpression: undefined,
    };
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FuzzyMatching"] !== undefined) {
        contents.FuzzyMatching = output["FuzzyMatching"];
    }
    if (output["SortExpression"] !== undefined) {
        contents.SortExpression = output["SortExpression"];
    }
    return contents;
};
const deserializeAws_queryDomainEndpointOptions = (output, context) => {
    let contents = {
        EnforceHTTPS: undefined,
        TLSSecurityPolicy: undefined,
    };
    if (output["EnforceHTTPS"] !== undefined) {
        contents.EnforceHTTPS = output["EnforceHTTPS"] == "true";
    }
    if (output["TLSSecurityPolicy"] !== undefined) {
        contents.TLSSecurityPolicy = output["TLSSecurityPolicy"];
    }
    return contents;
};
const deserializeAws_queryDomainEndpointOptionsStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryDomainEndpointOptions(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryDomainNameMap = (output, context) => {
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
const deserializeAws_queryDomainStatus = (output, context) => {
    let contents = {
        DomainId: undefined,
        DomainName: undefined,
        ARN: undefined,
        Created: undefined,
        Deleted: undefined,
        DocService: undefined,
        SearchService: undefined,
        RequiresIndexDocuments: undefined,
        Processing: undefined,
        SearchInstanceType: undefined,
        SearchPartitionCount: undefined,
        SearchInstanceCount: undefined,
        Limits: undefined,
    };
    if (output["DomainId"] !== undefined) {
        contents.DomainId = output["DomainId"];
    }
    if (output["DomainName"] !== undefined) {
        contents.DomainName = output["DomainName"];
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["Created"] !== undefined) {
        contents.Created = output["Created"] == "true";
    }
    if (output["Deleted"] !== undefined) {
        contents.Deleted = output["Deleted"] == "true";
    }
    if (output["DocService"] !== undefined) {
        contents.DocService = deserializeAws_queryServiceEndpoint(output["DocService"], context);
    }
    if (output["SearchService"] !== undefined) {
        contents.SearchService = deserializeAws_queryServiceEndpoint(output["SearchService"], context);
    }
    if (output["RequiresIndexDocuments"] !== undefined) {
        contents.RequiresIndexDocuments = output["RequiresIndexDocuments"] == "true";
    }
    if (output["Processing"] !== undefined) {
        contents.Processing = output["Processing"] == "true";
    }
    if (output["SearchInstanceType"] !== undefined) {
        contents.SearchInstanceType = output["SearchInstanceType"];
    }
    if (output["SearchPartitionCount"] !== undefined) {
        contents.SearchPartitionCount = parseInt(output["SearchPartitionCount"]);
    }
    if (output["SearchInstanceCount"] !== undefined) {
        contents.SearchInstanceCount = parseInt(output["SearchInstanceCount"]);
    }
    if (output["Limits"] !== undefined) {
        contents.Limits = deserializeAws_queryLimits(output["Limits"], context);
    }
    return contents;
};
const deserializeAws_queryDomainStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDomainStatus(entry, context);
    });
};
const deserializeAws_queryDoubleArrayOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseFloat(output["DefaultValue"]);
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryDoubleOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseFloat(output["DefaultValue"]);
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryExpression = (output, context) => {
    let contents = {
        ExpressionName: undefined,
        ExpressionValue: undefined,
    };
    if (output["ExpressionName"] !== undefined) {
        contents.ExpressionName = output["ExpressionName"];
    }
    if (output["ExpressionValue"] !== undefined) {
        contents.ExpressionValue = output["ExpressionValue"];
    }
    return contents;
};
const deserializeAws_queryExpressionStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryExpression(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryExpressionStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryExpressionStatus(entry, context);
    });
};
const deserializeAws_queryFieldNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryIndexDocumentsResponse = (output, context) => {
    let contents = {
        FieldNames: undefined,
    };
    if (output.FieldNames === "") {
        contents.FieldNames = [];
    }
    if (output["FieldNames"] !== undefined && output["FieldNames"]["member"] !== undefined) {
        contents.FieldNames = deserializeAws_queryFieldNameList(smithy_client_1.getArrayIfSingleItem(output["FieldNames"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryIndexField = (output, context) => {
    let contents = {
        IndexFieldName: undefined,
        IndexFieldType: undefined,
        IntOptions: undefined,
        DoubleOptions: undefined,
        LiteralOptions: undefined,
        TextOptions: undefined,
        DateOptions: undefined,
        LatLonOptions: undefined,
        IntArrayOptions: undefined,
        DoubleArrayOptions: undefined,
        LiteralArrayOptions: undefined,
        TextArrayOptions: undefined,
        DateArrayOptions: undefined,
    };
    if (output["IndexFieldName"] !== undefined) {
        contents.IndexFieldName = output["IndexFieldName"];
    }
    if (output["IndexFieldType"] !== undefined) {
        contents.IndexFieldType = output["IndexFieldType"];
    }
    if (output["IntOptions"] !== undefined) {
        contents.IntOptions = deserializeAws_queryIntOptions(output["IntOptions"], context);
    }
    if (output["DoubleOptions"] !== undefined) {
        contents.DoubleOptions = deserializeAws_queryDoubleOptions(output["DoubleOptions"], context);
    }
    if (output["LiteralOptions"] !== undefined) {
        contents.LiteralOptions = deserializeAws_queryLiteralOptions(output["LiteralOptions"], context);
    }
    if (output["TextOptions"] !== undefined) {
        contents.TextOptions = deserializeAws_queryTextOptions(output["TextOptions"], context);
    }
    if (output["DateOptions"] !== undefined) {
        contents.DateOptions = deserializeAws_queryDateOptions(output["DateOptions"], context);
    }
    if (output["LatLonOptions"] !== undefined) {
        contents.LatLonOptions = deserializeAws_queryLatLonOptions(output["LatLonOptions"], context);
    }
    if (output["IntArrayOptions"] !== undefined) {
        contents.IntArrayOptions = deserializeAws_queryIntArrayOptions(output["IntArrayOptions"], context);
    }
    if (output["DoubleArrayOptions"] !== undefined) {
        contents.DoubleArrayOptions = deserializeAws_queryDoubleArrayOptions(output["DoubleArrayOptions"], context);
    }
    if (output["LiteralArrayOptions"] !== undefined) {
        contents.LiteralArrayOptions = deserializeAws_queryLiteralArrayOptions(output["LiteralArrayOptions"], context);
    }
    if (output["TextArrayOptions"] !== undefined) {
        contents.TextArrayOptions = deserializeAws_queryTextArrayOptions(output["TextArrayOptions"], context);
    }
    if (output["DateArrayOptions"] !== undefined) {
        contents.DateArrayOptions = deserializeAws_queryDateArrayOptions(output["DateArrayOptions"], context);
    }
    return contents;
};
const deserializeAws_queryIndexFieldStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryIndexField(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryIndexFieldStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryIndexFieldStatus(entry, context);
    });
};
const deserializeAws_queryIntArrayOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseInt(output["DefaultValue"]);
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryInternalException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryIntOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = parseInt(output["DefaultValue"]);
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryInvalidTypeException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLatLonOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryLimitExceededException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryLimits = (output, context) => {
    let contents = {
        MaximumReplicationCount: undefined,
        MaximumPartitionCount: undefined,
    };
    if (output["MaximumReplicationCount"] !== undefined) {
        contents.MaximumReplicationCount = parseInt(output["MaximumReplicationCount"]);
    }
    if (output["MaximumPartitionCount"] !== undefined) {
        contents.MaximumPartitionCount = parseInt(output["MaximumPartitionCount"]);
    }
    return contents;
};
const deserializeAws_queryListDomainNamesResponse = (output, context) => {
    let contents = {
        DomainNames: undefined,
    };
    if (output.DomainNames === "") {
        contents.DomainNames = {};
    }
    if (output["DomainNames"] !== undefined && output["DomainNames"]["entry"] !== undefined) {
        contents.DomainNames = deserializeAws_queryDomainNameMap(smithy_client_1.getArrayIfSingleItem(output["DomainNames"]["entry"]), context);
    }
    return contents;
};
const deserializeAws_queryLiteralArrayOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryLiteralOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        FacetEnabled: undefined,
        SearchEnabled: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["FacetEnabled"] !== undefined) {
        contents.FacetEnabled = output["FacetEnabled"] == "true";
    }
    if (output["SearchEnabled"] !== undefined) {
        contents.SearchEnabled = output["SearchEnabled"] == "true";
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryOptionStatus = (output, context) => {
    let contents = {
        CreationDate: undefined,
        UpdateDate: undefined,
        UpdateVersion: undefined,
        State: undefined,
        PendingDeletion: undefined,
    };
    if (output["CreationDate"] !== undefined) {
        contents.CreationDate = new Date(output["CreationDate"]);
    }
    if (output["UpdateDate"] !== undefined) {
        contents.UpdateDate = new Date(output["UpdateDate"]);
    }
    if (output["UpdateVersion"] !== undefined) {
        contents.UpdateVersion = parseInt(output["UpdateVersion"]);
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["PendingDeletion"] !== undefined) {
        contents.PendingDeletion = output["PendingDeletion"] == "true";
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryScalingParameters = (output, context) => {
    let contents = {
        DesiredInstanceType: undefined,
        DesiredReplicationCount: undefined,
        DesiredPartitionCount: undefined,
    };
    if (output["DesiredInstanceType"] !== undefined) {
        contents.DesiredInstanceType = output["DesiredInstanceType"];
    }
    if (output["DesiredReplicationCount"] !== undefined) {
        contents.DesiredReplicationCount = parseInt(output["DesiredReplicationCount"]);
    }
    if (output["DesiredPartitionCount"] !== undefined) {
        contents.DesiredPartitionCount = parseInt(output["DesiredPartitionCount"]);
    }
    return contents;
};
const deserializeAws_queryScalingParametersStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_queryScalingParameters(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_queryServiceEndpoint = (output, context) => {
    let contents = {
        Endpoint: undefined,
    };
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    return contents;
};
const deserializeAws_querySuggester = (output, context) => {
    let contents = {
        SuggesterName: undefined,
        DocumentSuggesterOptions: undefined,
    };
    if (output["SuggesterName"] !== undefined) {
        contents.SuggesterName = output["SuggesterName"];
    }
    if (output["DocumentSuggesterOptions"] !== undefined) {
        contents.DocumentSuggesterOptions = deserializeAws_queryDocumentSuggesterOptions(output["DocumentSuggesterOptions"], context);
    }
    return contents;
};
const deserializeAws_querySuggesterStatus = (output, context) => {
    let contents = {
        Options: undefined,
        Status: undefined,
    };
    if (output["Options"] !== undefined) {
        contents.Options = deserializeAws_querySuggester(output["Options"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = deserializeAws_queryOptionStatus(output["Status"], context);
    }
    return contents;
};
const deserializeAws_querySuggesterStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySuggesterStatus(entry, context);
    });
};
const deserializeAws_queryTextArrayOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceFields: undefined,
        ReturnEnabled: undefined,
        HighlightEnabled: undefined,
        AnalysisScheme: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceFields"] !== undefined) {
        contents.SourceFields = output["SourceFields"];
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["HighlightEnabled"] !== undefined) {
        contents.HighlightEnabled = output["HighlightEnabled"] == "true";
    }
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = output["AnalysisScheme"];
    }
    return contents;
};
const deserializeAws_queryTextOptions = (output, context) => {
    let contents = {
        DefaultValue: undefined,
        SourceField: undefined,
        ReturnEnabled: undefined,
        SortEnabled: undefined,
        HighlightEnabled: undefined,
        AnalysisScheme: undefined,
    };
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["SourceField"] !== undefined) {
        contents.SourceField = output["SourceField"];
    }
    if (output["ReturnEnabled"] !== undefined) {
        contents.ReturnEnabled = output["ReturnEnabled"] == "true";
    }
    if (output["SortEnabled"] !== undefined) {
        contents.SortEnabled = output["SortEnabled"] == "true";
    }
    if (output["HighlightEnabled"] !== undefined) {
        contents.HighlightEnabled = output["HighlightEnabled"] == "true";
    }
    if (output["AnalysisScheme"] !== undefined) {
        contents.AnalysisScheme = output["AnalysisScheme"];
    }
    return contents;
};
const deserializeAws_queryUpdateAvailabilityOptionsResponse = (output, context) => {
    let contents = {
        AvailabilityOptions: undefined,
    };
    if (output["AvailabilityOptions"] !== undefined) {
        contents.AvailabilityOptions = deserializeAws_queryAvailabilityOptionsStatus(output["AvailabilityOptions"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateDomainEndpointOptionsResponse = (output, context) => {
    let contents = {
        DomainEndpointOptions: undefined,
    };
    if (output["DomainEndpointOptions"] !== undefined) {
        contents.DomainEndpointOptions = deserializeAws_queryDomainEndpointOptionsStatus(output["DomainEndpointOptions"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateScalingParametersResponse = (output, context) => {
    let contents = {
        ScalingParameters: undefined,
    };
    if (output["ScalingParameters"] !== undefined) {
        contents.ScalingParameters = deserializeAws_queryScalingParametersStatus(output["ScalingParameters"], context);
    }
    return contents;
};
const deserializeAws_queryUpdateServiceAccessPoliciesResponse = (output, context) => {
    let contents = {
        AccessPolicies: undefined,
    };
    if (output["AccessPolicies"] !== undefined) {
        contents.AccessPolicies = deserializeAws_queryAccessPoliciesStatus(output["AccessPolicies"], context);
    }
    return contents;
};
const deserializeAws_queryValidationException = (output, context) => {
    let contents = {
        Code: undefined,
        Message: undefined,
    };
    if (output["Code"] !== undefined) {
        contents.Code = output["Code"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
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