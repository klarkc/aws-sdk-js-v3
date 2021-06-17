"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand = exports.deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = exports.deserializeAws_restJson1DescribeSavingsPlansCommand = exports.deserializeAws_restJson1DescribeSavingsPlanRatesCommand = exports.deserializeAws_restJson1DeleteQueuedSavingsPlanCommand = exports.deserializeAws_restJson1CreateSavingsPlanCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1DescribeSavingsPlansOfferingsCommand = exports.serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = exports.serializeAws_restJson1DescribeSavingsPlansCommand = exports.serializeAws_restJson1DescribeSavingsPlanRatesCommand = exports.serializeAws_restJson1DeleteQueuedSavingsPlanCommand = exports.serializeAws_restJson1CreateSavingsPlanCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateSavingsPlanCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateSavingsPlan";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.commitment !== undefined && input.commitment !== null && { commitment: input.commitment }),
        ...(input.purchaseTime !== undefined &&
            input.purchaseTime !== null && { purchaseTime: Math.round(input.purchaseTime.getTime() / 1000) }),
        ...(input.savingsPlanOfferingId !== undefined &&
            input.savingsPlanOfferingId !== null && { savingsPlanOfferingId: input.savingsPlanOfferingId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.upfrontPaymentAmount !== undefined &&
            input.upfrontPaymentAmount !== null && { upfrontPaymentAmount: input.upfrontPaymentAmount }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateSavingsPlanCommand = serializeAws_restJson1CreateSavingsPlanCommand;
const serializeAws_restJson1DeleteQueuedSavingsPlanCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteQueuedSavingsPlan";
    let body;
    body = JSON.stringify({
        ...(input.savingsPlanId !== undefined && input.savingsPlanId !== null && { savingsPlanId: input.savingsPlanId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteQueuedSavingsPlanCommand = serializeAws_restJson1DeleteQueuedSavingsPlanCommand;
const serializeAws_restJson1DescribeSavingsPlanRatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeSavingsPlanRates";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1SavingsPlanRateFilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.savingsPlanId !== undefined && input.savingsPlanId !== null && { savingsPlanId: input.savingsPlanId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSavingsPlanRatesCommand = serializeAws_restJson1DescribeSavingsPlanRatesCommand;
const serializeAws_restJson1DescribeSavingsPlansCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeSavingsPlans";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1SavingsPlanFilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.savingsPlanArns !== undefined &&
            input.savingsPlanArns !== null && {
            savingsPlanArns: serializeAws_restJson1SavingsPlanArnList(input.savingsPlanArns, context),
        }),
        ...(input.savingsPlanIds !== undefined &&
            input.savingsPlanIds !== null && {
            savingsPlanIds: serializeAws_restJson1SavingsPlanIdList(input.savingsPlanIds, context),
        }),
        ...(input.states !== undefined &&
            input.states !== null && { states: serializeAws_restJson1SavingsPlanStateList(input.states, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSavingsPlansCommand = serializeAws_restJson1DescribeSavingsPlansCommand;
const serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeSavingsPlansOfferingRates";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_restJson1SavingsPlanOfferingRateFiltersList(input.filters, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.operations !== undefined &&
            input.operations !== null && {
            operations: serializeAws_restJson1SavingsPlanRateOperationList(input.operations, context),
        }),
        ...(input.products !== undefined &&
            input.products !== null && {
            products: serializeAws_restJson1SavingsPlanProductTypeList(input.products, context),
        }),
        ...(input.savingsPlanOfferingIds !== undefined &&
            input.savingsPlanOfferingIds !== null && {
            savingsPlanOfferingIds: serializeAws_restJson1UUIDs(input.savingsPlanOfferingIds, context),
        }),
        ...(input.savingsPlanPaymentOptions !== undefined &&
            input.savingsPlanPaymentOptions !== null && {
            savingsPlanPaymentOptions: serializeAws_restJson1SavingsPlanPaymentOptionList(input.savingsPlanPaymentOptions, context),
        }),
        ...(input.savingsPlanTypes !== undefined &&
            input.savingsPlanTypes !== null && {
            savingsPlanTypes: serializeAws_restJson1SavingsPlanTypeList(input.savingsPlanTypes, context),
        }),
        ...(input.serviceCodes !== undefined &&
            input.serviceCodes !== null && {
            serviceCodes: serializeAws_restJson1SavingsPlanRateServiceCodeList(input.serviceCodes, context),
        }),
        ...(input.usageTypes !== undefined &&
            input.usageTypes !== null && {
            usageTypes: serializeAws_restJson1SavingsPlanRateUsageTypeList(input.usageTypes, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = serializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand;
const serializeAws_restJson1DescribeSavingsPlansOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeSavingsPlansOfferings";
    let body;
    body = JSON.stringify({
        ...(input.currencies !== undefined &&
            input.currencies !== null && { currencies: serializeAws_restJson1CurrencyList(input.currencies, context) }),
        ...(input.descriptions !== undefined &&
            input.descriptions !== null && {
            descriptions: serializeAws_restJson1SavingsPlanDescriptionsList(input.descriptions, context),
        }),
        ...(input.durations !== undefined &&
            input.durations !== null && { durations: serializeAws_restJson1DurationsList(input.durations, context) }),
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_restJson1SavingsPlanOfferingFiltersList(input.filters, context),
        }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.offeringIds !== undefined &&
            input.offeringIds !== null && { offeringIds: serializeAws_restJson1UUIDs(input.offeringIds, context) }),
        ...(input.operations !== undefined &&
            input.operations !== null && {
            operations: serializeAws_restJson1SavingsPlanOperationList(input.operations, context),
        }),
        ...(input.paymentOptions !== undefined &&
            input.paymentOptions !== null && {
            paymentOptions: serializeAws_restJson1SavingsPlanPaymentOptionList(input.paymentOptions, context),
        }),
        ...(input.planTypes !== undefined &&
            input.planTypes !== null && { planTypes: serializeAws_restJson1SavingsPlanTypeList(input.planTypes, context) }),
        ...(input.productType !== undefined && input.productType !== null && { productType: input.productType }),
        ...(input.serviceCodes !== undefined &&
            input.serviceCodes !== null && {
            serviceCodes: serializeAws_restJson1SavingsPlanServiceCodeList(input.serviceCodes, context),
        }),
        ...(input.usageTypes !== undefined &&
            input.usageTypes !== null && {
            usageTypes: serializeAws_restJson1SavingsPlanUsageTypeList(input.usageTypes, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeSavingsPlansOfferingsCommand = serializeAws_restJson1DescribeSavingsPlansOfferingsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListTagsForResource";
    let body;
    body = JSON.stringify({
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TagResource";
    let body;
    body = JSON.stringify({
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UntagResource";
    let body;
    body = JSON.stringify({
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1CreateSavingsPlanCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSavingsPlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        savingsPlanId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.savingsPlanId !== undefined && data.savingsPlanId !== null) {
        contents.savingsPlanId = data.savingsPlanId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSavingsPlanCommand = deserializeAws_restJson1CreateSavingsPlanCommand;
const deserializeAws_restJson1CreateSavingsPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.savingsplans#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteQueuedSavingsPlanCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteQueuedSavingsPlanCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteQueuedSavingsPlanCommand = deserializeAws_restJson1DeleteQueuedSavingsPlanCommand;
const deserializeAws_restJson1DeleteQueuedSavingsPlanCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.savingsplans#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSavingsPlanRatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSavingsPlanRatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        savingsPlanId: undefined,
        searchResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.savingsPlanId !== undefined && data.savingsPlanId !== null) {
        contents.savingsPlanId = data.savingsPlanId;
    }
    if (data.searchResults !== undefined && data.searchResults !== null) {
        contents.searchResults = deserializeAws_restJson1SavingsPlanRateList(data.searchResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSavingsPlanRatesCommand = deserializeAws_restJson1DescribeSavingsPlanRatesCommand;
const deserializeAws_restJson1DescribeSavingsPlanRatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSavingsPlansCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSavingsPlansCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        savingsPlans: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.savingsPlans !== undefined && data.savingsPlans !== null) {
        contents.savingsPlans = deserializeAws_restJson1SavingsPlanList(data.savingsPlans, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSavingsPlansCommand = deserializeAws_restJson1DescribeSavingsPlansCommand;
const deserializeAws_restJson1DescribeSavingsPlansCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        searchResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.searchResults !== undefined && data.searchResults !== null) {
        contents.searchResults = deserializeAws_restJson1SavingsPlanOfferingRatesList(data.searchResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand = deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommand;
const deserializeAws_restJson1DescribeSavingsPlansOfferingRatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSavingsPlansOfferingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        searchResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.searchResults !== undefined && data.searchResults !== null) {
        contents.searchResults = deserializeAws_restJson1SavingsPlanOfferingsList(data.searchResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand = deserializeAws_restJson1DescribeSavingsPlansOfferingsCommand;
const deserializeAws_restJson1DescribeSavingsPlansOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.savingsplans#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.savingsplans#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.savingsplans#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.savingsplans#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1CurrencyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DurationsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1FilterValuesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ListOfStrings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanDescriptionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1ListOfStrings(input.values, context) }),
    };
};
const serializeAws_restJson1SavingsPlanFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SavingsPlanFilter(entry, context);
    });
};
const serializeAws_restJson1SavingsPlanIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanOfferingFilterElement = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValuesList(input.values, context) }),
    };
};
const serializeAws_restJson1SavingsPlanOfferingFiltersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SavingsPlanOfferingFilterElement(entry, context);
    });
};
const serializeAws_restJson1SavingsPlanOfferingRateFilterElement = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValuesList(input.values, context) }),
    };
};
const serializeAws_restJson1SavingsPlanOfferingRateFiltersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SavingsPlanOfferingRateFilterElement(entry, context);
    });
};
const serializeAws_restJson1SavingsPlanOperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanPaymentOptionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanProductTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanRateFilter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1ListOfStrings(input.values, context) }),
    };
};
const serializeAws_restJson1SavingsPlanRateFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SavingsPlanRateFilter(entry, context);
    });
};
const serializeAws_restJson1SavingsPlanRateOperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanRateServiceCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanRateUsageTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanServiceCodeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanStateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SavingsPlanUsageTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1UUIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ParentSavingsPlanOffering = (output, context) => {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        durationSeconds: output.durationSeconds !== undefined && output.durationSeconds !== null ? output.durationSeconds : undefined,
        offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
        paymentOption: output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
        planDescription: output.planDescription !== undefined && output.planDescription !== null ? output.planDescription : undefined,
        planType: output.planType !== undefined && output.planType !== null ? output.planType : undefined,
    };
};
const deserializeAws_restJson1SavingsPlan = (output, context) => {
    return {
        commitment: output.commitment !== undefined && output.commitment !== null ? output.commitment : undefined,
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        ec2InstanceFamily: output.ec2InstanceFamily !== undefined && output.ec2InstanceFamily !== null
            ? output.ec2InstanceFamily
            : undefined,
        end: output.end !== undefined && output.end !== null ? output.end : undefined,
        offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
        paymentOption: output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
        productTypes: output.productTypes !== undefined && output.productTypes !== null
            ? deserializeAws_restJson1SavingsPlanProductTypeList(output.productTypes, context)
            : undefined,
        recurringPaymentAmount: output.recurringPaymentAmount !== undefined && output.recurringPaymentAmount !== null
            ? output.recurringPaymentAmount
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        savingsPlanArn: output.savingsPlanArn !== undefined && output.savingsPlanArn !== null ? output.savingsPlanArn : undefined,
        savingsPlanId: output.savingsPlanId !== undefined && output.savingsPlanId !== null ? output.savingsPlanId : undefined,
        savingsPlanType: output.savingsPlanType !== undefined && output.savingsPlanType !== null ? output.savingsPlanType : undefined,
        start: output.start !== undefined && output.start !== null ? output.start : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        termDurationInSeconds: output.termDurationInSeconds !== undefined && output.termDurationInSeconds !== null
            ? output.termDurationInSeconds
            : undefined,
        upfrontPaymentAmount: output.upfrontPaymentAmount !== undefined && output.upfrontPaymentAmount !== null
            ? output.upfrontPaymentAmount
            : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlan(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanOffering = (output, context) => {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        durationSeconds: output.durationSeconds !== undefined && output.durationSeconds !== null ? output.durationSeconds : undefined,
        offeringId: output.offeringId !== undefined && output.offeringId !== null ? output.offeringId : undefined,
        operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
        paymentOption: output.paymentOption !== undefined && output.paymentOption !== null ? output.paymentOption : undefined,
        planType: output.planType !== undefined && output.planType !== null ? output.planType : undefined,
        productTypes: output.productTypes !== undefined && output.productTypes !== null
            ? deserializeAws_restJson1SavingsPlanProductTypeList(output.productTypes, context)
            : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1SavingsPlanOfferingPropertyList(output.properties, context)
            : undefined,
        serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
        usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanOfferingProperty = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanOfferingPropertyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanOfferingProperty(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanOfferingRate = (output, context) => {
    return {
        operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
        productType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1SavingsPlanOfferingRatePropertyList(output.properties, context)
            : undefined,
        rate: output.rate !== undefined && output.rate !== null ? output.rate : undefined,
        savingsPlanOffering: output.savingsPlanOffering !== undefined && output.savingsPlanOffering !== null
            ? deserializeAws_restJson1ParentSavingsPlanOffering(output.savingsPlanOffering, context)
            : undefined,
        serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanOfferingRateProperty = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanOfferingRatePropertyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanOfferingRateProperty(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanOfferingRatesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanOfferingRate(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanOfferingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanOffering(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanProductTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SavingsPlanRate = (output, context) => {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        operation: output.operation !== undefined && output.operation !== null ? output.operation : undefined,
        productType: output.productType !== undefined && output.productType !== null ? output.productType : undefined,
        properties: output.properties !== undefined && output.properties !== null
            ? deserializeAws_restJson1SavingsPlanRatePropertyList(output.properties, context)
            : undefined,
        rate: output.rate !== undefined && output.rate !== null ? output.rate : undefined,
        serviceCode: output.serviceCode !== undefined && output.serviceCode !== null ? output.serviceCode : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        usageType: output.usageType !== undefined && output.usageType !== null ? output.usageType : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanRateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanRate(entry, context);
    });
};
const deserializeAws_restJson1SavingsPlanRateProperty = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SavingsPlanRatePropertyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SavingsPlanRateProperty(entry, context);
    });
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map