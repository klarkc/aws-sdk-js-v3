import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1AcceptInvitationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitations/accept";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.administratorAccountId !== undefined &&
                    input.administratorAccountId !== null && { administratorAccountId: input.administratorAccountId })), (input.invitationId !== undefined && input.invitationId !== null && { invitationId: input.invitationId })), (input.masterAccount !== undefined && input.masterAccount !== null && { masterAccount: input.masterAccount })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1BatchGetCustomDataIdentifiersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/custom-data-identifiers/get";
                body = JSON.stringify(__assign({}, (input.ids !== undefined &&
                    input.ids !== null && { ids: serializeAws_restJson1__listOf__string(input.ids, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateClassificationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/jobs";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.customDataIdentifierIds !== undefined &&
                    input.customDataIdentifierIds !== null && {
                    customDataIdentifierIds: serializeAws_restJson1__listOf__string(input.customDataIdentifierIds, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.initialRun !== undefined && input.initialRun !== null && { initialRun: input.initialRun })), (input.jobType !== undefined && input.jobType !== null && { jobType: input.jobType })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.s3JobDefinition !== undefined &&
                    input.s3JobDefinition !== null && {
                    s3JobDefinition: serializeAws_restJson1S3JobDefinition(input.s3JobDefinition, context),
                })), (input.samplingPercentage !== undefined &&
                    input.samplingPercentage !== null && { samplingPercentage: input.samplingPercentage })), (input.scheduleFrequency !== undefined &&
                    input.scheduleFrequency !== null && {
                    scheduleFrequency: serializeAws_restJson1JobScheduleFrequency(input.scheduleFrequency, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateCustomDataIdentifierCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/custom-data-identifiers";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.description !== undefined && input.description !== null && { description: input.description })), (input.ignoreWords !== undefined &&
                    input.ignoreWords !== null && {
                    ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
                })), (input.keywords !== undefined &&
                    input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) })), (input.maximumMatchDistance !== undefined &&
                    input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.regex !== undefined && input.regex !== null && { regex: input.regex })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateFindingsFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findingsfilters";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.action !== undefined && input.action !== null && { action: input.action })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.description !== undefined && input.description !== null && { description: input.description })), (input.findingCriteria !== undefined &&
                    input.findingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
                })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.position !== undefined && input.position !== null && { position: input.position })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitations";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.accountIds !== undefined &&
                    input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) })), (input.disableEmailNotification !== undefined &&
                    input.disableEmailNotification !== null && { disableEmailNotification: input.disableEmailNotification })), (input.message !== undefined && input.message !== null && { message: input.message })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateMemberCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members";
                body = JSON.stringify(__assign(__assign({}, (input.account !== undefined &&
                    input.account !== null && { account: serializeAws_restJson1AccountDetail(input.account, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateSampleFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings/sample";
                body = JSON.stringify(__assign({}, (input.findingTypes !== undefined &&
                    input.findingTypes !== null && {
                    findingTypes: serializeAws_restJson1__listOfFindingType(input.findingTypes, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeclineInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitations/decline";
                body = JSON.stringify(__assign({}, (input.accountIds !== undefined &&
                    input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteCustomDataIdentifierCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/custom-data-identifiers/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteFindingsFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/findingsfilters/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitations/delete";
                body = JSON.stringify(__assign({}, (input.accountIds !== undefined &&
                    input.accountIds !== null && { accountIds: serializeAws_restJson1__listOf__string(input.accountIds, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteMemberCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/members/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeBucketsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/datasources/s3";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.criteria !== undefined &&
                    input.criteria !== null && { criteria: serializeAws_restJson1BucketCriteria(input.criteria, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && {
                    sortCriteria: serializeAws_restJson1BucketSortCriteria(input.sortCriteria, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeClassificationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/jobs/{jobId}";
                if (input.jobId !== undefined) {
                    labelValue = input.jobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: jobId.");
                    }
                    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: jobId.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeOrganizationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/admin/configuration";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisableMacieCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/macie";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/admin";
                query = __assign({}, (input.adminAccountId !== undefined && { adminAccountId: input.adminAccountId }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisassociateFromAdministratorAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/administrator/disassociate";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisassociateFromMasterAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/master/disassociate";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisassociateMemberCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/members/disassociate/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1EnableMacieCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/macie";
                body = JSON.stringify(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.findingPublishingFrequency !== undefined &&
                    input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency })), (input.status !== undefined && input.status !== null && { status: input.status })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1EnableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/admin";
                body = JSON.stringify(__assign(__assign({}, (input.adminAccountId !== undefined &&
                    input.adminAccountId !== null && { adminAccountId: input.adminAccountId })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetAdministratorAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/administrator";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetBucketStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/datasources/s3/statistics";
                body = JSON.stringify(__assign({}, (input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetClassificationExportConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/classification-export-configuration";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetCustomDataIdentifierCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/custom-data-identifiers/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings/describe";
                body = JSON.stringify(__assign(__assign({}, (input.findingIds !== undefined &&
                    input.findingIds !== null && { findingIds: serializeAws_restJson1__listOf__string(input.findingIds, context) })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetFindingsFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/findingsfilters/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetFindingsPublicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings-publication-configuration";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetFindingStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings/statistics";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.findingCriteria !== undefined &&
                    input.findingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
                })), (input.groupBy !== undefined && input.groupBy !== null && { groupBy: input.groupBy })), (input.size !== undefined && input.size !== null && { size: input.size })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && {
                    sortCriteria: serializeAws_restJson1FindingStatisticsSortCriteria(input.sortCriteria, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetInvitationsCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/invitations/count";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMacieSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/macie";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMasterAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/master";
                body = "";
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetMemberCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/members/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetUsageStatisticsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/usage/statistics";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.filterBy !== undefined &&
                    input.filterBy !== null && {
                    filterBy: serializeAws_restJson1__listOfUsageStatisticsFilter(input.filterBy, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortBy !== undefined &&
                    input.sortBy !== null && { sortBy: serializeAws_restJson1UsageStatisticsSortBy(input.sortBy, context) })), (input.timeRange !== undefined && input.timeRange !== null && { timeRange: input.timeRange })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetUsageTotalsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/usage";
                query = __assign({}, (input.timeRange !== undefined && { timeRange: input.timeRange }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListClassificationJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/jobs/list";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filterCriteria !== undefined &&
                    input.filterCriteria !== null && {
                    filterCriteria: serializeAws_restJson1ListJobsFilterCriteria(input.filterCriteria, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && {
                    sortCriteria: serializeAws_restJson1ListJobsSortCriteria(input.sortCriteria, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListCustomDataIdentifiersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/custom-data-identifiers/list";
                body = JSON.stringify(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.findingCriteria !== undefined &&
                    input.findingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && { sortCriteria: serializeAws_restJson1SortCriteria(input.sortCriteria, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFindingsFiltersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/findingsfilters";
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListInvitationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/invitations";
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/members";
                query = __assign(__assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.onlyAssociated !== undefined && { onlyAssociated: input.onlyAssociated }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListOrganizationAdminAccountsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/admin";
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutClassificationExportConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/classification-export-configuration";
                body = JSON.stringify(__assign({}, (input.configuration !== undefined &&
                    input.configuration !== null && {
                    configuration: serializeAws_restJson1ClassificationExportConfiguration(input.configuration, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutFindingsPublicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings-publication-configuration";
                body = JSON.stringify(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.securityHubConfiguration !== undefined &&
                    input.securityHubConfiguration !== null && {
                    securityHubConfiguration: serializeAws_restJson1SecurityHubConfiguration(input.securityHubConfiguration, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1SearchResourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/datasources/search-resources";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.bucketCriteria !== undefined &&
                    input.bucketCriteria !== null && {
                    bucketCriteria: serializeAws_restJson1SearchResourcesBucketCriteria(input.bucketCriteria, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.sortCriteria !== undefined &&
                    input.sortCriteria !== null && {
                    sortCriteria: serializeAws_restJson1SearchResourcesSortCriteria(input.sortCriteria, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TestCustomDataIdentifierCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/custom-data-identifiers/test";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.ignoreWords !== undefined &&
                    input.ignoreWords !== null && {
                    ignoreWords: serializeAws_restJson1__listOf__string(input.ignoreWords, context),
                })), (input.keywords !== undefined &&
                    input.keywords !== null && { keywords: serializeAws_restJson1__listOf__string(input.keywords, context) })), (input.maximumMatchDistance !== undefined &&
                    input.maximumMatchDistance !== null && { maximumMatchDistance: input.maximumMatchDistance })), (input.regex !== undefined && input.regex !== null && { regex: input.regex })), (input.sampleText !== undefined && input.sampleText !== null && { sampleText: input.sampleText })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateClassificationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/jobs/{jobId}";
                if (input.jobId !== undefined) {
                    labelValue = input.jobId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: jobId.");
                    }
                    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: jobId.");
                }
                body = JSON.stringify(__assign({}, (input.jobStatus !== undefined && input.jobStatus !== null && { jobStatus: input.jobStatus })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateFindingsFilterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findingsfilters/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.action !== undefined && input.action !== null && { action: input.action })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.findingCriteria !== undefined &&
                    input.findingCriteria !== null && {
                    findingCriteria: serializeAws_restJson1FindingCriteria(input.findingCriteria, context),
                })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.position !== undefined && input.position !== null && { position: input.position })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateMacieSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/macie";
                body = JSON.stringify(__assign(__assign({}, (input.findingPublishingFrequency !== undefined &&
                    input.findingPublishingFrequency !== null && { findingPublishingFrequency: input.findingPublishingFrequency })), (input.status !== undefined && input.status !== null && { status: input.status })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateMemberSessionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/macie/members/{id}";
                if (input.id !== undefined) {
                    labelValue = input.id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: id.");
                    }
                    resolvedPath = resolvedPath.replace("{id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: id.");
                }
                body = JSON.stringify(__assign({}, (input.status !== undefined && input.status !== null && { status: input.status })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateOrganizationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/admin/configuration";
                body = JSON.stringify(__assign({}, (input.autoEnable !== undefined && input.autoEnable !== null && { autoEnable: input.autoEnable })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1AcceptInvitationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AcceptInvitationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AcceptInvitationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1BatchGetCustomDataIdentifiersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    customDataIdentifiers: undefined,
                    notFoundIdentifierIds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.customDataIdentifiers !== undefined && data.customDataIdentifiers !== null) {
                    contents.customDataIdentifiers = deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary(data.customDataIdentifiers, context);
                }
                if (data.notFoundIdentifierIds !== undefined && data.notFoundIdentifierIds !== null) {
                    contents.notFoundIdentifierIds = deserializeAws_restJson1__listOf__string(data.notFoundIdentifierIds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchGetCustomDataIdentifiersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateClassificationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateClassificationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    jobArn: undefined,
                    jobId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobArn !== undefined && data.jobArn !== null) {
                    contents.jobArn = data.jobArn;
                }
                if (data.jobId !== undefined && data.jobId !== null) {
                    contents.jobId = data.jobId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateClassificationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateCustomDataIdentifierCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateCustomDataIdentifierCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    customDataIdentifierId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.customDataIdentifierId !== undefined && data.customDataIdentifierId !== null) {
                    contents.customDataIdentifierId = data.customDataIdentifierId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateCustomDataIdentifierCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateFindingsFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFindingsFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    id: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFindingsFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    unprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateMemberCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateMemberCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateMemberCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateSampleFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSampleFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSampleFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeclineInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeclineInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    unprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeclineInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteCustomDataIdentifierCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteCustomDataIdentifierCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteCustomDataIdentifierCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteFindingsFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFindingsFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteFindingsFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    unprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedAccounts !== undefined && data.unprocessedAccounts !== null) {
                    contents.unprocessedAccounts = deserializeAws_restJson1__listOfUnprocessedAccount(data.unprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteMemberCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteMemberCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteMemberCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeBucketsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeBucketsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    buckets: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.buckets !== undefined && data.buckets !== null) {
                    contents.buckets = deserializeAws_restJson1__listOfBucketMetadata(data.buckets, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeBucketsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeClassificationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeClassificationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    createdAt: undefined,
                    customDataIdentifierIds: undefined,
                    description: undefined,
                    initialRun: undefined,
                    jobArn: undefined,
                    jobId: undefined,
                    jobStatus: undefined,
                    jobType: undefined,
                    lastRunErrorStatus: undefined,
                    lastRunTime: undefined,
                    name: undefined,
                    s3JobDefinition: undefined,
                    samplingPercentage: undefined,
                    scheduleFrequency: undefined,
                    statistics: undefined,
                    tags: undefined,
                    userPausedDetails: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(data.createdAt);
                }
                if (data.customDataIdentifierIds !== undefined && data.customDataIdentifierIds !== null) {
                    contents.customDataIdentifierIds = deserializeAws_restJson1__listOf__string(data.customDataIdentifierIds, context);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.initialRun !== undefined && data.initialRun !== null) {
                    contents.initialRun = data.initialRun;
                }
                if (data.jobArn !== undefined && data.jobArn !== null) {
                    contents.jobArn = data.jobArn;
                }
                if (data.jobId !== undefined && data.jobId !== null) {
                    contents.jobId = data.jobId;
                }
                if (data.jobStatus !== undefined && data.jobStatus !== null) {
                    contents.jobStatus = data.jobStatus;
                }
                if (data.jobType !== undefined && data.jobType !== null) {
                    contents.jobType = data.jobType;
                }
                if (data.lastRunErrorStatus !== undefined && data.lastRunErrorStatus !== null) {
                    contents.lastRunErrorStatus = deserializeAws_restJson1LastRunErrorStatus(data.lastRunErrorStatus, context);
                }
                if (data.lastRunTime !== undefined && data.lastRunTime !== null) {
                    contents.lastRunTime = new Date(data.lastRunTime);
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.s3JobDefinition !== undefined && data.s3JobDefinition !== null) {
                    contents.s3JobDefinition = deserializeAws_restJson1S3JobDefinition(data.s3JobDefinition, context);
                }
                if (data.samplingPercentage !== undefined && data.samplingPercentage !== null) {
                    contents.samplingPercentage = data.samplingPercentage;
                }
                if (data.scheduleFrequency !== undefined && data.scheduleFrequency !== null) {
                    contents.scheduleFrequency = deserializeAws_restJson1JobScheduleFrequency(data.scheduleFrequency, context);
                }
                if (data.statistics !== undefined && data.statistics !== null) {
                    contents.statistics = deserializeAws_restJson1Statistics(data.statistics, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.userPausedDetails !== undefined && data.userPausedDetails !== null) {
                    contents.userPausedDetails = deserializeAws_restJson1UserPausedDetails(data.userPausedDetails, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeClassificationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeOrganizationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    autoEnable: undefined,
                    maxAccountLimitReached: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.autoEnable !== undefined && data.autoEnable !== null) {
                    contents.autoEnable = data.autoEnable;
                }
                if (data.maxAccountLimitReached !== undefined && data.maxAccountLimitReached !== null) {
                    contents.maxAccountLimitReached = data.maxAccountLimitReached;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisableMacieCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisableMacieCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisableMacieCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisableOrganizationAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateFromMasterAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisassociateFromMasterAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateMemberCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateMemberCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisassociateMemberCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1EnableMacieCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1EnableMacieCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1EnableMacieCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1EnableOrganizationAdminAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetAdministratorAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetAdministratorAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    administrator: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.administrator !== undefined && data.administrator !== null) {
                    contents.administrator = deserializeAws_restJson1Invitation(data.administrator, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetAdministratorAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetBucketStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBucketStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    bucketCount: undefined,
                    bucketCountByEffectivePermission: undefined,
                    bucketCountByEncryptionType: undefined,
                    bucketCountByObjectEncryptionRequirement: undefined,
                    bucketCountBySharedAccessType: undefined,
                    classifiableObjectCount: undefined,
                    classifiableSizeInBytes: undefined,
                    lastUpdated: undefined,
                    objectCount: undefined,
                    sizeInBytes: undefined,
                    sizeInBytesCompressed: undefined,
                    unclassifiableObjectCount: undefined,
                    unclassifiableObjectSizeInBytes: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.bucketCount !== undefined && data.bucketCount !== null) {
                    contents.bucketCount = data.bucketCount;
                }
                if (data.bucketCountByEffectivePermission !== undefined && data.bucketCountByEffectivePermission !== null) {
                    contents.bucketCountByEffectivePermission = deserializeAws_restJson1BucketCountByEffectivePermission(data.bucketCountByEffectivePermission, context);
                }
                if (data.bucketCountByEncryptionType !== undefined && data.bucketCountByEncryptionType !== null) {
                    contents.bucketCountByEncryptionType = deserializeAws_restJson1BucketCountByEncryptionType(data.bucketCountByEncryptionType, context);
                }
                if (data.bucketCountByObjectEncryptionRequirement !== undefined &&
                    data.bucketCountByObjectEncryptionRequirement !== null) {
                    contents.bucketCountByObjectEncryptionRequirement =
                        deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads(data.bucketCountByObjectEncryptionRequirement, context);
                }
                if (data.bucketCountBySharedAccessType !== undefined && data.bucketCountBySharedAccessType !== null) {
                    contents.bucketCountBySharedAccessType = deserializeAws_restJson1BucketCountBySharedAccessType(data.bucketCountBySharedAccessType, context);
                }
                if (data.classifiableObjectCount !== undefined && data.classifiableObjectCount !== null) {
                    contents.classifiableObjectCount = data.classifiableObjectCount;
                }
                if (data.classifiableSizeInBytes !== undefined && data.classifiableSizeInBytes !== null) {
                    contents.classifiableSizeInBytes = data.classifiableSizeInBytes;
                }
                if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
                    contents.lastUpdated = new Date(data.lastUpdated);
                }
                if (data.objectCount !== undefined && data.objectCount !== null) {
                    contents.objectCount = data.objectCount;
                }
                if (data.sizeInBytes !== undefined && data.sizeInBytes !== null) {
                    contents.sizeInBytes = data.sizeInBytes;
                }
                if (data.sizeInBytesCompressed !== undefined && data.sizeInBytesCompressed !== null) {
                    contents.sizeInBytesCompressed = data.sizeInBytesCompressed;
                }
                if (data.unclassifiableObjectCount !== undefined && data.unclassifiableObjectCount !== null) {
                    contents.unclassifiableObjectCount = deserializeAws_restJson1ObjectLevelStatistics(data.unclassifiableObjectCount, context);
                }
                if (data.unclassifiableObjectSizeInBytes !== undefined && data.unclassifiableObjectSizeInBytes !== null) {
                    contents.unclassifiableObjectSizeInBytes = deserializeAws_restJson1ObjectLevelStatistics(data.unclassifiableObjectSizeInBytes, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBucketStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetClassificationExportConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetClassificationExportConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    configuration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.configuration !== undefined && data.configuration !== null) {
                    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetClassificationExportConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetCustomDataIdentifierCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCustomDataIdentifierCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    deleted: undefined,
                    description: undefined,
                    id: undefined,
                    ignoreWords: undefined,
                    keywords: undefined,
                    maximumMatchDistance: undefined,
                    name: undefined,
                    regex: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(data.createdAt);
                }
                if (data.deleted !== undefined && data.deleted !== null) {
                    contents.deleted = data.deleted;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.ignoreWords !== undefined && data.ignoreWords !== null) {
                    contents.ignoreWords = deserializeAws_restJson1__listOf__string(data.ignoreWords, context);
                }
                if (data.keywords !== undefined && data.keywords !== null) {
                    contents.keywords = deserializeAws_restJson1__listOf__string(data.keywords, context);
                }
                if (data.maximumMatchDistance !== undefined && data.maximumMatchDistance !== null) {
                    contents.maximumMatchDistance = data.maximumMatchDistance;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.regex !== undefined && data.regex !== null) {
                    contents.regex = data.regex;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCustomDataIdentifierCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    findings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findings !== undefined && data.findings !== null) {
                    contents.findings = deserializeAws_restJson1__listOfFinding(data.findings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetFindingsFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingsFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    action: undefined,
                    arn: undefined,
                    description: undefined,
                    findingCriteria: undefined,
                    id: undefined,
                    name: undefined,
                    position: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.action !== undefined && data.action !== null) {
                    contents.action = data.action;
                }
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.description = data.description;
                }
                if (data.findingCriteria !== undefined && data.findingCriteria !== null) {
                    contents.findingCriteria = deserializeAws_restJson1FindingCriteria(data.findingCriteria, context);
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.position !== undefined && data.position !== null) {
                    contents.position = data.position;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetFindingsPublicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    securityHubConfiguration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.securityHubConfiguration !== undefined && data.securityHubConfiguration !== null) {
                    contents.securityHubConfiguration = deserializeAws_restJson1SecurityHubConfiguration(data.securityHubConfiguration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsPublicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetFindingStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFindingStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    countsByGroup: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.countsByGroup !== undefined && data.countsByGroup !== null) {
                    contents.countsByGroup = deserializeAws_restJson1__listOfGroupCount(data.countsByGroup, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInvitationsCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInvitationsCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    invitationsCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.invitationsCount !== undefined && data.invitationsCount !== null) {
                    contents.invitationsCount = data.invitationsCount;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInvitationsCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetMacieSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMacieSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    createdAt: undefined,
                    findingPublishingFrequency: undefined,
                    serviceRole: undefined,
                    status: undefined,
                    updatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(data.createdAt);
                }
                if (data.findingPublishingFrequency !== undefined && data.findingPublishingFrequency !== null) {
                    contents.findingPublishingFrequency = data.findingPublishingFrequency;
                }
                if (data.serviceRole !== undefined && data.serviceRole !== null) {
                    contents.serviceRole = data.serviceRole;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.updatedAt !== undefined && data.updatedAt !== null) {
                    contents.updatedAt = new Date(data.updatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMacieSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetMasterAccountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMasterAccountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    master: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.master !== undefined && data.master !== null) {
                    contents.master = deserializeAws_restJson1Invitation(data.master, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMasterAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetMemberCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMemberCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    accountId: undefined,
                    administratorAccountId: undefined,
                    arn: undefined,
                    email: undefined,
                    invitedAt: undefined,
                    masterAccountId: undefined,
                    relationshipStatus: undefined,
                    tags: undefined,
                    updatedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.accountId !== undefined && data.accountId !== null) {
                    contents.accountId = data.accountId;
                }
                if (data.administratorAccountId !== undefined && data.administratorAccountId !== null) {
                    contents.administratorAccountId = data.administratorAccountId;
                }
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.email !== undefined && data.email !== null) {
                    contents.email = data.email;
                }
                if (data.invitedAt !== undefined && data.invitedAt !== null) {
                    contents.invitedAt = new Date(data.invitedAt);
                }
                if (data.masterAccountId !== undefined && data.masterAccountId !== null) {
                    contents.masterAccountId = data.masterAccountId;
                }
                if (data.relationshipStatus !== undefined && data.relationshipStatus !== null) {
                    contents.relationshipStatus = data.relationshipStatus;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.updatedAt !== undefined && data.updatedAt !== null) {
                    contents.updatedAt = new Date(data.updatedAt);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMemberCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetUsageStatisticsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUsageStatisticsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    records: undefined,
                    timeRange: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.records !== undefined && data.records !== null) {
                    contents.records = deserializeAws_restJson1__listOfUsageRecord(data.records, context);
                }
                if (data.timeRange !== undefined && data.timeRange !== null) {
                    contents.timeRange = data.timeRange;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUsageStatisticsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetUsageTotalsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetUsageTotalsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    timeRange: undefined,
                    usageTotals: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.timeRange !== undefined && data.timeRange !== null) {
                    contents.timeRange = data.timeRange;
                }
                if (data.usageTotals !== undefined && data.usageTotals !== null) {
                    contents.usageTotals = deserializeAws_restJson1__listOfUsageTotal(data.usageTotals, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetUsageTotalsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListClassificationJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListClassificationJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1__listOfJobSummary(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListClassificationJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListCustomDataIdentifiersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListCustomDataIdentifiersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1__listOfCustomDataIdentifierSummary(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListCustomDataIdentifiersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    findingIds: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findingIds !== undefined && data.findingIds !== null) {
                    contents.findingIds = deserializeAws_restJson1__listOf__string(data.findingIds, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListFindingsFiltersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFindingsFiltersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    findingsFilterListItems: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.findingsFilterListItems !== undefined && data.findingsFilterListItems !== null) {
                    contents.findingsFilterListItems = deserializeAws_restJson1__listOfFindingsFilterListItem(data.findingsFilterListItems, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFindingsFiltersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListInvitationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInvitationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    invitations: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.invitations !== undefined && data.invitations !== null) {
                    contents.invitations = deserializeAws_restJson1__listOfInvitation(data.invitations, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    members: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.members !== undefined && data.members !== null) {
                    contents.members = deserializeAws_restJson1__listOfMember(data.members, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListOrganizationAdminAccountsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    adminAccounts: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.adminAccounts !== undefined && data.adminAccounts !== null) {
                    contents.adminAccounts = deserializeAws_restJson1__listOfAdminAccount(data.adminAccounts, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutClassificationExportConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutClassificationExportConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    configuration: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.configuration !== undefined && data.configuration !== null) {
                    contents.configuration = deserializeAws_restJson1ClassificationExportConfiguration(data.configuration, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutClassificationExportConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutFindingsPublicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutFindingsPublicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1SearchResourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SearchResourcesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    matchingResources: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.matchingResources !== undefined && data.matchingResources !== null) {
                    contents.matchingResources = deserializeAws_restJson1__listOfMatchingResource(data.matchingResources, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SearchResourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1TestCustomDataIdentifierCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TestCustomDataIdentifierCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    matchCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.matchCount !== undefined && data.matchCount !== null) {
                    contents.matchCount = data.matchCount;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TestCustomDataIdentifierCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateClassificationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateClassificationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateClassificationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateFindingsFilterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFindingsFilterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    id: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.id !== undefined && data.id !== null) {
                    contents.id = data.id;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFindingsFilterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateMacieSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateMacieSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateMacieSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateMemberSessionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateMemberSessionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateMemberSessionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateOrganizationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.macie2#AccessDeniedException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.macie2#ConflictException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.macie2#InternalServerException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.macie2#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.macie2#ServiceQuotaExceededException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.macie2#ThrottlingException": return [3 /*break*/, 12];
                    case "ValidationException": return [3 /*break*/, 14];
                    case "com.amazonaws.macie2#ValidationException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessDeniedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceQuotaExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1__listOf__string = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfCriteriaForJob = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CriteriaForJob(entry, context);
    });
};
var serializeAws_restJson1__listOfFindingType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfJobScopeTerm = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1JobScopeTerm(entry, context);
    });
};
var serializeAws_restJson1__listOfListJobsFilterTerm = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ListJobsFilterTerm(entry, context);
    });
};
var serializeAws_restJson1__listOfS3BucketDefinitionForJob = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};
var serializeAws_restJson1__listOfSearchResourcesCriteria = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SearchResourcesCriteria(entry, context);
    });
};
var serializeAws_restJson1__listOfSearchResourcesTagCriterionPair = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SearchResourcesTagCriterionPair(entry, context);
    });
};
var serializeAws_restJson1__listOfTagCriterionPairForJob = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};
var serializeAws_restJson1__listOfTagValuePair = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TagValuePair(entry, context);
    });
};
var serializeAws_restJson1__listOfUsageStatisticsFilter = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UsageStatisticsFilter(entry, context);
    });
};
var serializeAws_restJson1AccountDetail = function (input, context) {
    return __assign(__assign({}, (input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId })), (input.email !== undefined && input.email !== null && { email: input.email }));
};
var serializeAws_restJson1BucketCriteria = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1BucketCriteriaAdditionalProperties(value, context), _b));
    }, {});
};
var serializeAws_restJson1BucketCriteriaAdditionalProperties = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.eq !== undefined &&
        input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) })), (input.gt !== undefined && input.gt !== null && { gt: input.gt })), (input.gte !== undefined && input.gte !== null && { gte: input.gte })), (input.lt !== undefined && input.lt !== null && { lt: input.lt })), (input.lte !== undefined && input.lte !== null && { lte: input.lte })), (input.neq !== undefined &&
        input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) })), (input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }));
};
var serializeAws_restJson1BucketSortCriteria = function (input, context) {
    return __assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1ClassificationExportConfiguration = function (input, context) {
    return __assign({}, (input.s3Destination !== undefined &&
        input.s3Destination !== null && {
        s3Destination: serializeAws_restJson1S3Destination(input.s3Destination, context),
    }));
};
var serializeAws_restJson1CriteriaBlockForJob = function (input, context) {
    return __assign({}, (input.and !== undefined &&
        input.and !== null && { and: serializeAws_restJson1__listOfCriteriaForJob(input.and, context) }));
};
var serializeAws_restJson1CriteriaForJob = function (input, context) {
    return __assign(__assign({}, (input.simpleCriterion !== undefined &&
        input.simpleCriterion !== null && {
        simpleCriterion: serializeAws_restJson1SimpleCriterionForJob(input.simpleCriterion, context),
    })), (input.tagCriterion !== undefined &&
        input.tagCriterion !== null && {
        tagCriterion: serializeAws_restJson1TagCriterionForJob(input.tagCriterion, context),
    }));
};
var serializeAws_restJson1Criterion = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1CriterionAdditionalProperties(value, context), _b));
    }, {});
};
var serializeAws_restJson1CriterionAdditionalProperties = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.eq !== undefined &&
        input.eq !== null && { eq: serializeAws_restJson1__listOf__string(input.eq, context) })), (input.eqExactMatch !== undefined &&
        input.eqExactMatch !== null && {
        eqExactMatch: serializeAws_restJson1__listOf__string(input.eqExactMatch, context),
    })), (input.gt !== undefined && input.gt !== null && { gt: input.gt })), (input.gte !== undefined && input.gte !== null && { gte: input.gte })), (input.lt !== undefined && input.lt !== null && { lt: input.lt })), (input.lte !== undefined && input.lte !== null && { lte: input.lte })), (input.neq !== undefined &&
        input.neq !== null && { neq: serializeAws_restJson1__listOf__string(input.neq, context) }));
};
var serializeAws_restJson1DailySchedule = function (input, context) {
    return {};
};
var serializeAws_restJson1FindingCriteria = function (input, context) {
    return __assign({}, (input.criterion !== undefined &&
        input.criterion !== null && { criterion: serializeAws_restJson1Criterion(input.criterion, context) }));
};
var serializeAws_restJson1FindingStatisticsSortCriteria = function (input, context) {
    return __assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1JobScheduleFrequency = function (input, context) {
    return __assign(__assign(__assign({}, (input.dailySchedule !== undefined &&
        input.dailySchedule !== null && {
        dailySchedule: serializeAws_restJson1DailySchedule(input.dailySchedule, context),
    })), (input.monthlySchedule !== undefined &&
        input.monthlySchedule !== null && {
        monthlySchedule: serializeAws_restJson1MonthlySchedule(input.monthlySchedule, context),
    })), (input.weeklySchedule !== undefined &&
        input.weeklySchedule !== null && {
        weeklySchedule: serializeAws_restJson1WeeklySchedule(input.weeklySchedule, context),
    }));
};
var serializeAws_restJson1JobScopeTerm = function (input, context) {
    return __assign(__assign({}, (input.simpleScopeTerm !== undefined &&
        input.simpleScopeTerm !== null && {
        simpleScopeTerm: serializeAws_restJson1SimpleScopeTerm(input.simpleScopeTerm, context),
    })), (input.tagScopeTerm !== undefined &&
        input.tagScopeTerm !== null && { tagScopeTerm: serializeAws_restJson1TagScopeTerm(input.tagScopeTerm, context) }));
};
var serializeAws_restJson1JobScopingBlock = function (input, context) {
    return __assign({}, (input.and !== undefined &&
        input.and !== null && { and: serializeAws_restJson1__listOfJobScopeTerm(input.and, context) }));
};
var serializeAws_restJson1ListJobsFilterCriteria = function (input, context) {
    return __assign(__assign({}, (input.excludes !== undefined &&
        input.excludes !== null && {
        excludes: serializeAws_restJson1__listOfListJobsFilterTerm(input.excludes, context),
    })), (input.includes !== undefined &&
        input.includes !== null && {
        includes: serializeAws_restJson1__listOfListJobsFilterTerm(input.includes, context),
    }));
};
var serializeAws_restJson1ListJobsFilterTerm = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }));
};
var serializeAws_restJson1ListJobsSortCriteria = function (input, context) {
    return __assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1MonthlySchedule = function (input, context) {
    return __assign({}, (input.dayOfMonth !== undefined && input.dayOfMonth !== null && { dayOfMonth: input.dayOfMonth }));
};
var serializeAws_restJson1S3BucketCriteriaForJob = function (input, context) {
    return __assign(__assign({}, (input.excludes !== undefined &&
        input.excludes !== null && { excludes: serializeAws_restJson1CriteriaBlockForJob(input.excludes, context) })), (input.includes !== undefined &&
        input.includes !== null && { includes: serializeAws_restJson1CriteriaBlockForJob(input.includes, context) }));
};
var serializeAws_restJson1S3BucketDefinitionForJob = function (input, context) {
    return __assign(__assign({}, (input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId })), (input.buckets !== undefined &&
        input.buckets !== null && { buckets: serializeAws_restJson1__listOf__string(input.buckets, context) }));
};
var serializeAws_restJson1S3Destination = function (input, context) {
    return __assign(__assign(__assign({}, (input.bucketName !== undefined && input.bucketName !== null && { bucketName: input.bucketName })), (input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix })), (input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }));
};
var serializeAws_restJson1S3JobDefinition = function (input, context) {
    return __assign(__assign(__assign({}, (input.bucketCriteria !== undefined &&
        input.bucketCriteria !== null && {
        bucketCriteria: serializeAws_restJson1S3BucketCriteriaForJob(input.bucketCriteria, context),
    })), (input.bucketDefinitions !== undefined &&
        input.bucketDefinitions !== null && {
        bucketDefinitions: serializeAws_restJson1__listOfS3BucketDefinitionForJob(input.bucketDefinitions, context),
    })), (input.scoping !== undefined &&
        input.scoping !== null && { scoping: serializeAws_restJson1Scoping(input.scoping, context) }));
};
var serializeAws_restJson1Scoping = function (input, context) {
    return __assign(__assign({}, (input.excludes !== undefined &&
        input.excludes !== null && { excludes: serializeAws_restJson1JobScopingBlock(input.excludes, context) })), (input.includes !== undefined &&
        input.includes !== null && { includes: serializeAws_restJson1JobScopingBlock(input.includes, context) }));
};
var serializeAws_restJson1SearchResourcesBucketCriteria = function (input, context) {
    return __assign(__assign({}, (input.excludes !== undefined &&
        input.excludes !== null && {
        excludes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.excludes, context),
    })), (input.includes !== undefined &&
        input.includes !== null && {
        includes: serializeAws_restJson1SearchResourcesCriteriaBlock(input.includes, context),
    }));
};
var serializeAws_restJson1SearchResourcesCriteria = function (input, context) {
    return __assign(__assign({}, (input.simpleCriterion !== undefined &&
        input.simpleCriterion !== null && {
        simpleCriterion: serializeAws_restJson1SearchResourcesSimpleCriterion(input.simpleCriterion, context),
    })), (input.tagCriterion !== undefined &&
        input.tagCriterion !== null && {
        tagCriterion: serializeAws_restJson1SearchResourcesTagCriterion(input.tagCriterion, context),
    }));
};
var serializeAws_restJson1SearchResourcesCriteriaBlock = function (input, context) {
    return __assign({}, (input.and !== undefined &&
        input.and !== null && { and: serializeAws_restJson1__listOfSearchResourcesCriteria(input.and, context) }));
};
var serializeAws_restJson1SearchResourcesSimpleCriterion = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }));
};
var serializeAws_restJson1SearchResourcesSortCriteria = function (input, context) {
    return __assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1SearchResourcesTagCriterion = function (input, context) {
    return __assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.tagValues !== undefined &&
        input.tagValues !== null && {
        tagValues: serializeAws_restJson1__listOfSearchResourcesTagCriterionPair(input.tagValues, context),
    }));
};
var serializeAws_restJson1SearchResourcesTagCriterionPair = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1SecurityHubConfiguration = function (input, context) {
    return __assign(__assign({}, (input.publishClassificationFindings !== undefined &&
        input.publishClassificationFindings !== null && {
        publishClassificationFindings: input.publishClassificationFindings,
    })), (input.publishPolicyFindings !== undefined &&
        input.publishPolicyFindings !== null && { publishPolicyFindings: input.publishPolicyFindings }));
};
var serializeAws_restJson1SimpleCriterionForJob = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }));
};
var serializeAws_restJson1SimpleScopeTerm = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }));
};
var serializeAws_restJson1SortCriteria = function (input, context) {
    return __assign(__assign({}, (input.attributeName !== undefined && input.attributeName !== null && { attributeName: input.attributeName })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1TagCriterionForJob = function (input, context) {
    return __assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.tagValues !== undefined &&
        input.tagValues !== null && {
        tagValues: serializeAws_restJson1__listOfTagCriterionPairForJob(input.tagValues, context),
    }));
};
var serializeAws_restJson1TagCriterionPairForJob = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1TagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TagScopeTerm = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.tagValues !== undefined &&
        input.tagValues !== null && { tagValues: serializeAws_restJson1__listOfTagValuePair(input.tagValues, context) })), (input.target !== undefined && input.target !== null && { target: input.target }));
};
var serializeAws_restJson1TagValuePair = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1UsageStatisticsFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.comparator !== undefined && input.comparator !== null && { comparator: input.comparator })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1__listOf__string(input.values, context) }));
};
var serializeAws_restJson1UsageStatisticsSortBy = function (input, context) {
    return __assign(__assign({}, (input.key !== undefined && input.key !== null && { key: input.key })), (input.orderBy !== undefined && input.orderBy !== null && { orderBy: input.orderBy }));
};
var serializeAws_restJson1WeeklySchedule = function (input, context) {
    return __assign({}, (input.dayOfWeek !== undefined && input.dayOfWeek !== null && { dayOfWeek: input.dayOfWeek }));
};
var deserializeAws_restJson1__listOf__string = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOfAdminAccount = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdminAccount(entry, context);
    });
};
var deserializeAws_restJson1__listOfBatchGetCustomDataIdentifierSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchGetCustomDataIdentifierSummary(entry, context);
    });
};
var deserializeAws_restJson1__listOfBucketMetadata = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BucketMetadata(entry, context);
    });
};
var deserializeAws_restJson1__listOfCriteriaForJob = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CriteriaForJob(entry, context);
    });
};
var deserializeAws_restJson1__listOfCustomDataIdentifierSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomDataIdentifierSummary(entry, context);
    });
};
var deserializeAws_restJson1__listOfFinding = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Finding(entry, context);
    });
};
var deserializeAws_restJson1__listOfFindingsFilterListItem = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FindingsFilterListItem(entry, context);
    });
};
var deserializeAws_restJson1__listOfGroupCount = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupCount(entry, context);
    });
};
var deserializeAws_restJson1__listOfInvitation = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
var deserializeAws_restJson1__listOfJobScopeTerm = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobScopeTerm(entry, context);
    });
};
var deserializeAws_restJson1__listOfJobSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobSummary(entry, context);
    });
};
var deserializeAws_restJson1__listOfKeyValuePair = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
var deserializeAws_restJson1__listOfMatchingResource = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MatchingResource(entry, context);
    });
};
var deserializeAws_restJson1__listOfMember = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Member(entry, context);
    });
};
var deserializeAws_restJson1__listOfS3BucketDefinitionForJob = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3BucketDefinitionForJob(entry, context);
    });
};
var deserializeAws_restJson1__listOfTagCriterionPairForJob = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TagCriterionPairForJob(entry, context);
    });
};
var deserializeAws_restJson1__listOfTagValuePair = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TagValuePair(entry, context);
    });
};
var deserializeAws_restJson1__listOfUnprocessedAccount = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedAccount(entry, context);
    });
};
var deserializeAws_restJson1__listOfUsageByAccount = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageByAccount(entry, context);
    });
};
var deserializeAws_restJson1__listOfUsageRecord = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageRecord(entry, context);
    });
};
var deserializeAws_restJson1__listOfUsageTotal = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UsageTotal(entry, context);
    });
};
var deserializeAws_restJson1AccessControlList = function (output, context) {
    return {
        allowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        allowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
var deserializeAws_restJson1AccountLevelPermissions = function (output, context) {
    return {
        blockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
    };
};
var deserializeAws_restJson1AdminAccount = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1ApiCallDetails = function (output, context) {
    return {
        api: output.api !== undefined && output.api !== null ? output.api : undefined,
        apiServiceName: output.apiServiceName !== undefined && output.apiServiceName !== null ? output.apiServiceName : undefined,
        firstSeen: output.firstSeen !== undefined && output.firstSeen !== null ? new Date(output.firstSeen) : undefined,
        lastSeen: output.lastSeen !== undefined && output.lastSeen !== null ? new Date(output.lastSeen) : undefined,
    };
};
var deserializeAws_restJson1AssumedRole = function (output, context) {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        sessionContext: output.sessionContext !== undefined && output.sessionContext !== null
            ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsAccount = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
var deserializeAws_restJson1AwsService = function (output, context) {
    return {
        invokedBy: output.invokedBy !== undefined && output.invokedBy !== null ? output.invokedBy : undefined,
    };
};
var deserializeAws_restJson1BatchGetCustomDataIdentifierSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        deleted: output.deleted !== undefined && output.deleted !== null ? output.deleted : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1BlockPublicAccess = function (output, context) {
    return {
        blockPublicAcls: output.blockPublicAcls !== undefined && output.blockPublicAcls !== null ? output.blockPublicAcls : undefined,
        blockPublicPolicy: output.blockPublicPolicy !== undefined && output.blockPublicPolicy !== null
            ? output.blockPublicPolicy
            : undefined,
        ignorePublicAcls: output.ignorePublicAcls !== undefined && output.ignorePublicAcls !== null ? output.ignorePublicAcls : undefined,
        restrictPublicBuckets: output.restrictPublicBuckets !== undefined && output.restrictPublicBuckets !== null
            ? output.restrictPublicBuckets
            : undefined,
    };
};
var deserializeAws_restJson1BucketCountByEffectivePermission = function (output, context) {
    return {
        publiclyAccessible: output.publiclyAccessible !== undefined && output.publiclyAccessible !== null
            ? output.publiclyAccessible
            : undefined,
        publiclyReadable: output.publiclyReadable !== undefined && output.publiclyReadable !== null ? output.publiclyReadable : undefined,
        publiclyWritable: output.publiclyWritable !== undefined && output.publiclyWritable !== null ? output.publiclyWritable : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
var deserializeAws_restJson1BucketCountByEncryptionType = function (output, context) {
    return {
        kmsManaged: output.kmsManaged !== undefined && output.kmsManaged !== null ? output.kmsManaged : undefined,
        s3Managed: output.s3Managed !== undefined && output.s3Managed !== null ? output.s3Managed : undefined,
        unencrypted: output.unencrypted !== undefined && output.unencrypted !== null ? output.unencrypted : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
var deserializeAws_restJson1BucketCountBySharedAccessType = function (output, context) {
    return {
        external: output.external !== undefined && output.external !== null ? output.external : undefined,
        internal: output.internal !== undefined && output.internal !== null ? output.internal : undefined,
        notShared: output.notShared !== undefined && output.notShared !== null ? output.notShared : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
var deserializeAws_restJson1BucketCountPolicyAllowsUnencryptedObjectUploads = function (output, context) {
    return {
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        deniesUnencryptedObjectUploads: output.deniesUnencryptedObjectUploads !== undefined && output.deniesUnencryptedObjectUploads !== null
            ? output.deniesUnencryptedObjectUploads
            : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
var deserializeAws_restJson1BucketLevelPermissions = function (output, context) {
    return {
        accessControlList: output.accessControlList !== undefined && output.accessControlList !== null
            ? deserializeAws_restJson1AccessControlList(output.accessControlList, context)
            : undefined,
        blockPublicAccess: output.blockPublicAccess !== undefined && output.blockPublicAccess !== null
            ? deserializeAws_restJson1BlockPublicAccess(output.blockPublicAccess, context)
            : undefined,
        bucketPolicy: output.bucketPolicy !== undefined && output.bucketPolicy !== null
            ? deserializeAws_restJson1BucketPolicy(output.bucketPolicy, context)
            : undefined,
    };
};
var deserializeAws_restJson1BucketMetadata = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        bucketCreatedAt: output.bucketCreatedAt !== undefined && output.bucketCreatedAt !== null
            ? new Date(output.bucketCreatedAt)
            : undefined,
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        classifiableObjectCount: output.classifiableObjectCount !== undefined && output.classifiableObjectCount !== null
            ? output.classifiableObjectCount
            : undefined,
        classifiableSizeInBytes: output.classifiableSizeInBytes !== undefined && output.classifiableSizeInBytes !== null
            ? output.classifiableSizeInBytes
            : undefined,
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
            : undefined,
        lastUpdated: output.lastUpdated !== undefined && output.lastUpdated !== null ? new Date(output.lastUpdated) : undefined,
        objectCount: output.objectCount !== undefined && output.objectCount !== null ? output.objectCount : undefined,
        objectCountByEncryptionType: output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
            ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
            : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        replicationDetails: output.replicationDetails !== undefined && output.replicationDetails !== null
            ? deserializeAws_restJson1ReplicationDetails(output.replicationDetails, context)
            : undefined,
        serverSideEncryption: output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
            ? deserializeAws_restJson1BucketServerSideEncryption(output.serverSideEncryption, context)
            : undefined,
        sharedAccess: output.sharedAccess !== undefined && output.sharedAccess !== null ? output.sharedAccess : undefined,
        sizeInBytes: output.sizeInBytes !== undefined && output.sizeInBytes !== null ? output.sizeInBytes : undefined,
        sizeInBytesCompressed: output.sizeInBytesCompressed !== undefined && output.sizeInBytesCompressed !== null
            ? output.sizeInBytesCompressed
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__listOfKeyValuePair(output.tags, context)
            : undefined,
        unclassifiableObjectCount: output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
            : undefined,
        unclassifiableObjectSizeInBytes: output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
            : undefined,
        versioning: output.versioning !== undefined && output.versioning !== null ? output.versioning : undefined,
    };
};
var deserializeAws_restJson1BucketPermissionConfiguration = function (output, context) {
    return {
        accountLevelPermissions: output.accountLevelPermissions !== undefined && output.accountLevelPermissions !== null
            ? deserializeAws_restJson1AccountLevelPermissions(output.accountLevelPermissions, context)
            : undefined,
        bucketLevelPermissions: output.bucketLevelPermissions !== undefined && output.bucketLevelPermissions !== null
            ? deserializeAws_restJson1BucketLevelPermissions(output.bucketLevelPermissions, context)
            : undefined,
    };
};
var deserializeAws_restJson1BucketPolicy = function (output, context) {
    return {
        allowsPublicReadAccess: output.allowsPublicReadAccess !== undefined && output.allowsPublicReadAccess !== null
            ? output.allowsPublicReadAccess
            : undefined,
        allowsPublicWriteAccess: output.allowsPublicWriteAccess !== undefined && output.allowsPublicWriteAccess !== null
            ? output.allowsPublicWriteAccess
            : undefined,
    };
};
var deserializeAws_restJson1BucketPublicAccess = function (output, context) {
    return {
        effectivePermission: output.effectivePermission !== undefined && output.effectivePermission !== null
            ? output.effectivePermission
            : undefined,
        permissionConfiguration: output.permissionConfiguration !== undefined && output.permissionConfiguration !== null
            ? deserializeAws_restJson1BucketPermissionConfiguration(output.permissionConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1BucketServerSideEncryption = function (output, context) {
    return {
        kmsMasterKeyId: output.kmsMasterKeyId !== undefined && output.kmsMasterKeyId !== null ? output.kmsMasterKeyId : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1Cell = function (output, context) {
    return {
        cellReference: output.cellReference !== undefined && output.cellReference !== null ? output.cellReference : undefined,
        column: output.column !== undefined && output.column !== null ? output.column : undefined,
        columnName: output.columnName !== undefined && output.columnName !== null ? output.columnName : undefined,
        row: output.row !== undefined && output.row !== null ? output.row : undefined,
    };
};
var deserializeAws_restJson1Cells = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Cell(entry, context);
    });
};
var deserializeAws_restJson1ClassificationDetails = function (output, context) {
    return {
        detailedResultsLocation: output.detailedResultsLocation !== undefined && output.detailedResultsLocation !== null
            ? output.detailedResultsLocation
            : undefined,
        jobArn: output.jobArn !== undefined && output.jobArn !== null ? output.jobArn : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        result: output.result !== undefined && output.result !== null
            ? deserializeAws_restJson1ClassificationResult(output.result, context)
            : undefined,
    };
};
var deserializeAws_restJson1ClassificationExportConfiguration = function (output, context) {
    return {
        s3Destination: output.s3Destination !== undefined && output.s3Destination !== null
            ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
            : undefined,
    };
};
var deserializeAws_restJson1ClassificationResult = function (output, context) {
    return {
        additionalOccurrences: output.additionalOccurrences !== undefined && output.additionalOccurrences !== null
            ? output.additionalOccurrences
            : undefined,
        customDataIdentifiers: output.customDataIdentifiers !== undefined && output.customDataIdentifiers !== null
            ? deserializeAws_restJson1CustomDataIdentifiers(output.customDataIdentifiers, context)
            : undefined,
        mimeType: output.mimeType !== undefined && output.mimeType !== null ? output.mimeType : undefined,
        sensitiveData: output.sensitiveData !== undefined && output.sensitiveData !== null
            ? deserializeAws_restJson1SensitiveData(output.sensitiveData, context)
            : undefined,
        sizeClassified: output.sizeClassified !== undefined && output.sizeClassified !== null ? output.sizeClassified : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1ClassificationResultStatus(output.status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ClassificationResultStatus = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    };
};
var deserializeAws_restJson1CriteriaBlockForJob = function (output, context) {
    return {
        and: output.and !== undefined && output.and !== null
            ? deserializeAws_restJson1__listOfCriteriaForJob(output.and, context)
            : undefined,
    };
};
var deserializeAws_restJson1CriteriaForJob = function (output, context) {
    return {
        simpleCriterion: output.simpleCriterion !== undefined && output.simpleCriterion !== null
            ? deserializeAws_restJson1SimpleCriterionForJob(output.simpleCriterion, context)
            : undefined,
        tagCriterion: output.tagCriterion !== undefined && output.tagCriterion !== null
            ? deserializeAws_restJson1TagCriterionForJob(output.tagCriterion, context)
            : undefined,
    };
};
var deserializeAws_restJson1Criterion = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1CriterionAdditionalProperties(value, context), _b));
    }, {});
};
var deserializeAws_restJson1CriterionAdditionalProperties = function (output, context) {
    return {
        eq: output.eq !== undefined && output.eq !== null
            ? deserializeAws_restJson1__listOf__string(output.eq, context)
            : undefined,
        eqExactMatch: output.eqExactMatch !== undefined && output.eqExactMatch !== null
            ? deserializeAws_restJson1__listOf__string(output.eqExactMatch, context)
            : undefined,
        gt: output.gt !== undefined && output.gt !== null ? output.gt : undefined,
        gte: output.gte !== undefined && output.gte !== null ? output.gte : undefined,
        lt: output.lt !== undefined && output.lt !== null ? output.lt : undefined,
        lte: output.lte !== undefined && output.lte !== null ? output.lte : undefined,
        neq: output.neq !== undefined && output.neq !== null
            ? deserializeAws_restJson1__listOf__string(output.neq, context)
            : undefined,
    };
};
var deserializeAws_restJson1CustomDataIdentifiers = function (output, context) {
    return {
        detections: output.detections !== undefined && output.detections !== null
            ? deserializeAws_restJson1CustomDetections(output.detections, context)
            : undefined,
        totalCount: output.totalCount !== undefined && output.totalCount !== null ? output.totalCount : undefined,
    };
};
var deserializeAws_restJson1CustomDataIdentifierSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1CustomDetection = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        occurrences: output.occurrences !== undefined && output.occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.occurrences, context)
            : undefined,
    };
};
var deserializeAws_restJson1CustomDetections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomDetection(entry, context);
    });
};
var deserializeAws_restJson1DailySchedule = function (output, context) {
    return {};
};
var deserializeAws_restJson1DefaultDetection = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        occurrences: output.occurrences !== undefined && output.occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.occurrences, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1DefaultDetections = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DefaultDetection(entry, context);
    });
};
var deserializeAws_restJson1DomainDetails = function (output, context) {
    return {
        domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    };
};
var deserializeAws_restJson1FederatedUser = function (output, context) {
    return {
        accessKeyId: output.accessKeyId !== undefined && output.accessKeyId !== null ? output.accessKeyId : undefined,
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        sessionContext: output.sessionContext !== undefined && output.sessionContext !== null
            ? deserializeAws_restJson1SessionContext(output.sessionContext, context)
            : undefined,
    };
};
var deserializeAws_restJson1Finding = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        archived: output.archived !== undefined && output.archived !== null ? output.archived : undefined,
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        classificationDetails: output.classificationDetails !== undefined && output.classificationDetails !== null
            ? deserializeAws_restJson1ClassificationDetails(output.classificationDetails, context)
            : undefined,
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        partition: output.partition !== undefined && output.partition !== null ? output.partition : undefined,
        policyDetails: output.policyDetails !== undefined && output.policyDetails !== null
            ? deserializeAws_restJson1PolicyDetails(output.policyDetails, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        resourcesAffected: output.resourcesAffected !== undefined && output.resourcesAffected !== null
            ? deserializeAws_restJson1ResourcesAffected(output.resourcesAffected, context)
            : undefined,
        sample: output.sample !== undefined && output.sample !== null ? output.sample : undefined,
        schemaVersion: output.schemaVersion !== undefined && output.schemaVersion !== null ? output.schemaVersion : undefined,
        severity: output.severity !== undefined && output.severity !== null
            ? deserializeAws_restJson1Severity(output.severity, context)
            : undefined,
        title: output.title !== undefined && output.title !== null ? output.title : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
var deserializeAws_restJson1FindingAction = function (output, context) {
    return {
        actionType: output.actionType !== undefined && output.actionType !== null ? output.actionType : undefined,
        apiCallDetails: output.apiCallDetails !== undefined && output.apiCallDetails !== null
            ? deserializeAws_restJson1ApiCallDetails(output.apiCallDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1FindingActor = function (output, context) {
    return {
        domainDetails: output.domainDetails !== undefined && output.domainDetails !== null
            ? deserializeAws_restJson1DomainDetails(output.domainDetails, context)
            : undefined,
        ipAddressDetails: output.ipAddressDetails !== undefined && output.ipAddressDetails !== null
            ? deserializeAws_restJson1IpAddressDetails(output.ipAddressDetails, context)
            : undefined,
        userIdentity: output.userIdentity !== undefined && output.userIdentity !== null
            ? deserializeAws_restJson1UserIdentity(output.userIdentity, context)
            : undefined,
    };
};
var deserializeAws_restJson1FindingCriteria = function (output, context) {
    return {
        criterion: output.criterion !== undefined && output.criterion !== null
            ? deserializeAws_restJson1Criterion(output.criterion, context)
            : undefined,
    };
};
var deserializeAws_restJson1FindingsFilterListItem = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1GroupCount = function (output, context) {
    return {
        count: output.count !== undefined && output.count !== null ? output.count : undefined,
        groupKey: output.groupKey !== undefined && output.groupKey !== null ? output.groupKey : undefined,
    };
};
var deserializeAws_restJson1IamUser = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        userName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
    };
};
var deserializeAws_restJson1Invitation = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        invitationId: output.invitationId !== undefined && output.invitationId !== null ? output.invitationId : undefined,
        invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
        relationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
    };
};
var deserializeAws_restJson1IpAddressDetails = function (output, context) {
    return {
        ipAddressV4: output.ipAddressV4 !== undefined && output.ipAddressV4 !== null ? output.ipAddressV4 : undefined,
        ipCity: output.ipCity !== undefined && output.ipCity !== null
            ? deserializeAws_restJson1IpCity(output.ipCity, context)
            : undefined,
        ipCountry: output.ipCountry !== undefined && output.ipCountry !== null
            ? deserializeAws_restJson1IpCountry(output.ipCountry, context)
            : undefined,
        ipGeoLocation: output.ipGeoLocation !== undefined && output.ipGeoLocation !== null
            ? deserializeAws_restJson1IpGeoLocation(output.ipGeoLocation, context)
            : undefined,
        ipOwner: output.ipOwner !== undefined && output.ipOwner !== null
            ? deserializeAws_restJson1IpOwner(output.ipOwner, context)
            : undefined,
    };
};
var deserializeAws_restJson1IpCity = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1IpCountry = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1IpGeoLocation = function (output, context) {
    return {
        lat: output.lat !== undefined && output.lat !== null ? output.lat : undefined,
        lon: output.lon !== undefined && output.lon !== null ? output.lon : undefined,
    };
};
var deserializeAws_restJson1IpOwner = function (output, context) {
    return {
        asn: output.asn !== undefined && output.asn !== null ? output.asn : undefined,
        asnOrg: output.asnOrg !== undefined && output.asnOrg !== null ? output.asnOrg : undefined,
        isp: output.isp !== undefined && output.isp !== null ? output.isp : undefined,
        org: output.org !== undefined && output.org !== null ? output.org : undefined,
    };
};
var deserializeAws_restJson1JobDetails = function (output, context) {
    return {
        isDefinedInJob: output.isDefinedInJob !== undefined && output.isDefinedInJob !== null ? output.isDefinedInJob : undefined,
        isMonitoredByJob: output.isMonitoredByJob !== undefined && output.isMonitoredByJob !== null ? output.isMonitoredByJob : undefined,
        lastJobId: output.lastJobId !== undefined && output.lastJobId !== null ? output.lastJobId : undefined,
        lastJobRunTime: output.lastJobRunTime !== undefined && output.lastJobRunTime !== null
            ? new Date(output.lastJobRunTime)
            : undefined,
    };
};
var deserializeAws_restJson1JobScheduleFrequency = function (output, context) {
    return {
        dailySchedule: output.dailySchedule !== undefined && output.dailySchedule !== null
            ? deserializeAws_restJson1DailySchedule(output.dailySchedule, context)
            : undefined,
        monthlySchedule: output.monthlySchedule !== undefined && output.monthlySchedule !== null
            ? deserializeAws_restJson1MonthlySchedule(output.monthlySchedule, context)
            : undefined,
        weeklySchedule: output.weeklySchedule !== undefined && output.weeklySchedule !== null
            ? deserializeAws_restJson1WeeklySchedule(output.weeklySchedule, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobScopeTerm = function (output, context) {
    return {
        simpleScopeTerm: output.simpleScopeTerm !== undefined && output.simpleScopeTerm !== null
            ? deserializeAws_restJson1SimpleScopeTerm(output.simpleScopeTerm, context)
            : undefined,
        tagScopeTerm: output.tagScopeTerm !== undefined && output.tagScopeTerm !== null
            ? deserializeAws_restJson1TagScopeTerm(output.tagScopeTerm, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobScopingBlock = function (output, context) {
    return {
        and: output.and !== undefined && output.and !== null
            ? deserializeAws_restJson1__listOfJobScopeTerm(output.and, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobSummary = function (output, context) {
    return {
        bucketCriteria: output.bucketCriteria !== undefined && output.bucketCriteria !== null
            ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
            : undefined,
        bucketDefinitions: output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
            ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        jobId: output.jobId !== undefined && output.jobId !== null ? output.jobId : undefined,
        jobStatus: output.jobStatus !== undefined && output.jobStatus !== null ? output.jobStatus : undefined,
        jobType: output.jobType !== undefined && output.jobType !== null ? output.jobType : undefined,
        lastRunErrorStatus: output.lastRunErrorStatus !== undefined && output.lastRunErrorStatus !== null
            ? deserializeAws_restJson1LastRunErrorStatus(output.lastRunErrorStatus, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        userPausedDetails: output.userPausedDetails !== undefined && output.userPausedDetails !== null
            ? deserializeAws_restJson1UserPausedDetails(output.userPausedDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1KeyValuePair = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1KeyValuePairList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KeyValuePair(entry, context);
    });
};
var deserializeAws_restJson1LastRunErrorStatus = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
    };
};
var deserializeAws_restJson1MatchingBucket = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        classifiableObjectCount: output.classifiableObjectCount !== undefined && output.classifiableObjectCount !== null
            ? output.classifiableObjectCount
            : undefined,
        classifiableSizeInBytes: output.classifiableSizeInBytes !== undefined && output.classifiableSizeInBytes !== null
            ? output.classifiableSizeInBytes
            : undefined,
        jobDetails: output.jobDetails !== undefined && output.jobDetails !== null
            ? deserializeAws_restJson1JobDetails(output.jobDetails, context)
            : undefined,
        objectCount: output.objectCount !== undefined && output.objectCount !== null ? output.objectCount : undefined,
        objectCountByEncryptionType: output.objectCountByEncryptionType !== undefined && output.objectCountByEncryptionType !== null
            ? deserializeAws_restJson1ObjectCountByEncryptionType(output.objectCountByEncryptionType, context)
            : undefined,
        sizeInBytes: output.sizeInBytes !== undefined && output.sizeInBytes !== null ? output.sizeInBytes : undefined,
        sizeInBytesCompressed: output.sizeInBytesCompressed !== undefined && output.sizeInBytesCompressed !== null
            ? output.sizeInBytesCompressed
            : undefined,
        unclassifiableObjectCount: output.unclassifiableObjectCount !== undefined && output.unclassifiableObjectCount !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectCount, context)
            : undefined,
        unclassifiableObjectSizeInBytes: output.unclassifiableObjectSizeInBytes !== undefined && output.unclassifiableObjectSizeInBytes !== null
            ? deserializeAws_restJson1ObjectLevelStatistics(output.unclassifiableObjectSizeInBytes, context)
            : undefined,
    };
};
var deserializeAws_restJson1MatchingResource = function (output, context) {
    return {
        matchingBucket: output.matchingBucket !== undefined && output.matchingBucket !== null
            ? deserializeAws_restJson1MatchingBucket(output.matchingBucket, context)
            : undefined,
    };
};
var deserializeAws_restJson1Member = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        administratorAccountId: output.administratorAccountId !== undefined && output.administratorAccountId !== null
            ? output.administratorAccountId
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        email: output.email !== undefined && output.email !== null ? output.email : undefined,
        invitedAt: output.invitedAt !== undefined && output.invitedAt !== null ? new Date(output.invitedAt) : undefined,
        masterAccountId: output.masterAccountId !== undefined && output.masterAccountId !== null ? output.masterAccountId : undefined,
        relationshipStatus: output.relationshipStatus !== undefined && output.relationshipStatus !== null
            ? output.relationshipStatus
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
var deserializeAws_restJson1MonthlySchedule = function (output, context) {
    return {
        dayOfMonth: output.dayOfMonth !== undefined && output.dayOfMonth !== null ? output.dayOfMonth : undefined,
    };
};
var deserializeAws_restJson1ObjectCountByEncryptionType = function (output, context) {
    return {
        customerManaged: output.customerManaged !== undefined && output.customerManaged !== null ? output.customerManaged : undefined,
        kmsManaged: output.kmsManaged !== undefined && output.kmsManaged !== null ? output.kmsManaged : undefined,
        s3Managed: output.s3Managed !== undefined && output.s3Managed !== null ? output.s3Managed : undefined,
        unencrypted: output.unencrypted !== undefined && output.unencrypted !== null ? output.unencrypted : undefined,
        unknown: output.unknown !== undefined && output.unknown !== null ? output.unknown : undefined,
    };
};
var deserializeAws_restJson1ObjectLevelStatistics = function (output, context) {
    return {
        fileType: output.fileType !== undefined && output.fileType !== null ? output.fileType : undefined,
        storageClass: output.storageClass !== undefined && output.storageClass !== null ? output.storageClass : undefined,
        total: output.total !== undefined && output.total !== null ? output.total : undefined,
    };
};
var deserializeAws_restJson1Occurrences = function (output, context) {
    return {
        cells: output.cells !== undefined && output.cells !== null
            ? deserializeAws_restJson1Cells(output.cells, context)
            : undefined,
        lineRanges: output.lineRanges !== undefined && output.lineRanges !== null
            ? deserializeAws_restJson1Ranges(output.lineRanges, context)
            : undefined,
        offsetRanges: output.offsetRanges !== undefined && output.offsetRanges !== null
            ? deserializeAws_restJson1Ranges(output.offsetRanges, context)
            : undefined,
        pages: output.pages !== undefined && output.pages !== null
            ? deserializeAws_restJson1Pages(output.pages, context)
            : undefined,
        records: output.records !== undefined && output.records !== null
            ? deserializeAws_restJson1Records(output.records, context)
            : undefined,
    };
};
var deserializeAws_restJson1Page = function (output, context) {
    return {
        lineRange: output.lineRange !== undefined && output.lineRange !== null
            ? deserializeAws_restJson1Range(output.lineRange, context)
            : undefined,
        offsetRange: output.offsetRange !== undefined && output.offsetRange !== null
            ? deserializeAws_restJson1Range(output.offsetRange, context)
            : undefined,
        pageNumber: output.pageNumber !== undefined && output.pageNumber !== null ? output.pageNumber : undefined,
    };
};
var deserializeAws_restJson1Pages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Page(entry, context);
    });
};
var deserializeAws_restJson1PolicyDetails = function (output, context) {
    return {
        action: output.action !== undefined && output.action !== null
            ? deserializeAws_restJson1FindingAction(output.action, context)
            : undefined,
        actor: output.actor !== undefined && output.actor !== null
            ? deserializeAws_restJson1FindingActor(output.actor, context)
            : undefined,
    };
};
var deserializeAws_restJson1Range = function (output, context) {
    return {
        end: output.end !== undefined && output.end !== null ? output.end : undefined,
        start: output.start !== undefined && output.start !== null ? output.start : undefined,
        startColumn: output.startColumn !== undefined && output.startColumn !== null ? output.startColumn : undefined,
    };
};
var deserializeAws_restJson1Ranges = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Range(entry, context);
    });
};
var deserializeAws_restJson1_Record = function (output, context) {
    return {
        jsonPath: output.jsonPath !== undefined && output.jsonPath !== null ? output.jsonPath : undefined,
        recordIndex: output.recordIndex !== undefined && output.recordIndex !== null ? output.recordIndex : undefined,
    };
};
var deserializeAws_restJson1Records = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1_Record(entry, context);
    });
};
var deserializeAws_restJson1ReplicationDetails = function (output, context) {
    return {
        replicated: output.replicated !== undefined && output.replicated !== null ? output.replicated : undefined,
        replicatedExternally: output.replicatedExternally !== undefined && output.replicatedExternally !== null
            ? output.replicatedExternally
            : undefined,
        replicationAccounts: output.replicationAccounts !== undefined && output.replicationAccounts !== null
            ? deserializeAws_restJson1__listOf__string(output.replicationAccounts, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResourcesAffected = function (output, context) {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null
            ? deserializeAws_restJson1S3Bucket(output.s3Bucket, context)
            : undefined,
        s3Object: output.s3Object !== undefined && output.s3Object !== null
            ? deserializeAws_restJson1S3Object(output.s3Object, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3Bucket = function (output, context) {
    return {
        allowsUnencryptedObjectUploads: output.allowsUnencryptedObjectUploads !== undefined && output.allowsUnencryptedObjectUploads !== null
            ? output.allowsUnencryptedObjectUploads
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        defaultServerSideEncryption: output.defaultServerSideEncryption !== undefined && output.defaultServerSideEncryption !== null
            ? deserializeAws_restJson1ServerSideEncryption(output.defaultServerSideEncryption, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null
            ? deserializeAws_restJson1S3BucketOwner(output.owner, context)
            : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null
            ? deserializeAws_restJson1BucketPublicAccess(output.publicAccess, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3BucketCriteriaForJob = function (output, context) {
    return {
        excludes: output.excludes !== undefined && output.excludes !== null
            ? deserializeAws_restJson1CriteriaBlockForJob(output.excludes, context)
            : undefined,
        includes: output.includes !== undefined && output.includes !== null
            ? deserializeAws_restJson1CriteriaBlockForJob(output.includes, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3BucketDefinitionForJob = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        buckets: output.buckets !== undefined && output.buckets !== null
            ? deserializeAws_restJson1__listOf__string(output.buckets, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3BucketOwner = function (output, context) {
    return {
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
    };
};
var deserializeAws_restJson1S3Destination = function (output, context) {
    return {
        bucketName: output.bucketName !== undefined && output.bucketName !== null ? output.bucketName : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    };
};
var deserializeAws_restJson1S3JobDefinition = function (output, context) {
    return {
        bucketCriteria: output.bucketCriteria !== undefined && output.bucketCriteria !== null
            ? deserializeAws_restJson1S3BucketCriteriaForJob(output.bucketCriteria, context)
            : undefined,
        bucketDefinitions: output.bucketDefinitions !== undefined && output.bucketDefinitions !== null
            ? deserializeAws_restJson1__listOfS3BucketDefinitionForJob(output.bucketDefinitions, context)
            : undefined,
        scoping: output.scoping !== undefined && output.scoping !== null
            ? deserializeAws_restJson1Scoping(output.scoping, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3Object = function (output, context) {
    return {
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        eTag: output.eTag !== undefined && output.eTag !== null ? output.eTag : undefined,
        extension: output.extension !== undefined && output.extension !== null ? output.extension : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        lastModified: output.lastModified !== undefined && output.lastModified !== null ? new Date(output.lastModified) : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        publicAccess: output.publicAccess !== undefined && output.publicAccess !== null ? output.publicAccess : undefined,
        serverSideEncryption: output.serverSideEncryption !== undefined && output.serverSideEncryption !== null
            ? deserializeAws_restJson1ServerSideEncryption(output.serverSideEncryption, context)
            : undefined,
        size: output.size !== undefined && output.size !== null ? output.size : undefined,
        storageClass: output.storageClass !== undefined && output.storageClass !== null ? output.storageClass : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1KeyValuePairList(output.tags, context)
            : undefined,
        versionId: output.versionId !== undefined && output.versionId !== null ? output.versionId : undefined,
    };
};
var deserializeAws_restJson1Scoping = function (output, context) {
    return {
        excludes: output.excludes !== undefined && output.excludes !== null
            ? deserializeAws_restJson1JobScopingBlock(output.excludes, context)
            : undefined,
        includes: output.includes !== undefined && output.includes !== null
            ? deserializeAws_restJson1JobScopingBlock(output.includes, context)
            : undefined,
    };
};
var deserializeAws_restJson1SecurityHubConfiguration = function (output, context) {
    return {
        publishClassificationFindings: output.publishClassificationFindings !== undefined && output.publishClassificationFindings !== null
            ? output.publishClassificationFindings
            : undefined,
        publishPolicyFindings: output.publishPolicyFindings !== undefined && output.publishPolicyFindings !== null
            ? output.publishPolicyFindings
            : undefined,
    };
};
var deserializeAws_restJson1SensitiveData = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SensitiveDataItem(entry, context);
    });
};
var deserializeAws_restJson1SensitiveDataItem = function (output, context) {
    return {
        category: output.category !== undefined && output.category !== null ? output.category : undefined,
        detections: output.detections !== undefined && output.detections !== null
            ? deserializeAws_restJson1DefaultDetections(output.detections, context)
            : undefined,
        totalCount: output.totalCount !== undefined && output.totalCount !== null ? output.totalCount : undefined,
    };
};
var deserializeAws_restJson1ServerSideEncryption = function (output, context) {
    return {
        encryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        kmsMasterKeyId: output.kmsMasterKeyId !== undefined && output.kmsMasterKeyId !== null ? output.kmsMasterKeyId : undefined,
    };
};
var deserializeAws_restJson1ServiceLimit = function (output, context) {
    return {
        isServiceLimited: output.isServiceLimited !== undefined && output.isServiceLimited !== null ? output.isServiceLimited : undefined,
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1SessionContext = function (output, context) {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1SessionContextAttributes(output.attributes, context)
            : undefined,
        sessionIssuer: output.sessionIssuer !== undefined && output.sessionIssuer !== null
            ? deserializeAws_restJson1SessionIssuer(output.sessionIssuer, context)
            : undefined,
    };
};
var deserializeAws_restJson1SessionContextAttributes = function (output, context) {
    return {
        creationDate: output.creationDate !== undefined && output.creationDate !== null ? new Date(output.creationDate) : undefined,
        mfaAuthenticated: output.mfaAuthenticated !== undefined && output.mfaAuthenticated !== null ? output.mfaAuthenticated : undefined,
    };
};
var deserializeAws_restJson1SessionIssuer = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        userName: output.userName !== undefined && output.userName !== null ? output.userName : undefined,
    };
};
var deserializeAws_restJson1Severity = function (output, context) {
    return {
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        score: output.score !== undefined && output.score !== null ? output.score : undefined,
    };
};
var deserializeAws_restJson1SimpleCriterionForJob = function (output, context) {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1__listOf__string(output.values, context)
            : undefined,
    };
};
var deserializeAws_restJson1SimpleScopeTerm = function (output, context) {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        values: output.values !== undefined && output.values !== null
            ? deserializeAws_restJson1__listOf__string(output.values, context)
            : undefined,
    };
};
var deserializeAws_restJson1Statistics = function (output, context) {
    return {
        approximateNumberOfObjectsToProcess: output.approximateNumberOfObjectsToProcess !== undefined && output.approximateNumberOfObjectsToProcess !== null
            ? output.approximateNumberOfObjectsToProcess
            : undefined,
        numberOfRuns: output.numberOfRuns !== undefined && output.numberOfRuns !== null ? output.numberOfRuns : undefined,
    };
};
var deserializeAws_restJson1TagCriterionForJob = function (output, context) {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        tagValues: output.tagValues !== undefined && output.tagValues !== null
            ? deserializeAws_restJson1__listOfTagCriterionPairForJob(output.tagValues, context)
            : undefined,
    };
};
var deserializeAws_restJson1TagCriterionPairForJob = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1TagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1TagScopeTerm = function (output, context) {
    return {
        comparator: output.comparator !== undefined && output.comparator !== null ? output.comparator : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        tagValues: output.tagValues !== undefined && output.tagValues !== null
            ? deserializeAws_restJson1__listOfTagValuePair(output.tagValues, context)
            : undefined,
        target: output.target !== undefined && output.target !== null ? output.target : undefined,
    };
};
var deserializeAws_restJson1TagValuePair = function (output, context) {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1UnprocessedAccount = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
    };
};
var deserializeAws_restJson1UsageByAccount = function (output, context) {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        estimatedCost: output.estimatedCost !== undefined && output.estimatedCost !== null ? output.estimatedCost : undefined,
        serviceLimit: output.serviceLimit !== undefined && output.serviceLimit !== null
            ? deserializeAws_restJson1ServiceLimit(output.serviceLimit, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1UsageRecord = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        freeTrialStartDate: output.freeTrialStartDate !== undefined && output.freeTrialStartDate !== null
            ? new Date(output.freeTrialStartDate)
            : undefined,
        usage: output.usage !== undefined && output.usage !== null
            ? deserializeAws_restJson1__listOfUsageByAccount(output.usage, context)
            : undefined,
    };
};
var deserializeAws_restJson1UsageTotal = function (output, context) {
    return {
        currency: output.currency !== undefined && output.currency !== null ? output.currency : undefined,
        estimatedCost: output.estimatedCost !== undefined && output.estimatedCost !== null ? output.estimatedCost : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1UserIdentity = function (output, context) {
    return {
        assumedRole: output.assumedRole !== undefined && output.assumedRole !== null
            ? deserializeAws_restJson1AssumedRole(output.assumedRole, context)
            : undefined,
        awsAccount: output.awsAccount !== undefined && output.awsAccount !== null
            ? deserializeAws_restJson1AwsAccount(output.awsAccount, context)
            : undefined,
        awsService: output.awsService !== undefined && output.awsService !== null
            ? deserializeAws_restJson1AwsService(output.awsService, context)
            : undefined,
        federatedUser: output.federatedUser !== undefined && output.federatedUser !== null
            ? deserializeAws_restJson1FederatedUser(output.federatedUser, context)
            : undefined,
        iamUser: output.iamUser !== undefined && output.iamUser !== null
            ? deserializeAws_restJson1IamUser(output.iamUser, context)
            : undefined,
        root: output.root !== undefined && output.root !== null
            ? deserializeAws_restJson1UserIdentityRoot(output.root, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1UserIdentityRoot = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
var deserializeAws_restJson1UserPausedDetails = function (output, context) {
    return {
        jobExpiresAt: output.jobExpiresAt !== undefined && output.jobExpiresAt !== null ? new Date(output.jobExpiresAt) : undefined,
        jobImminentExpirationHealthEventArn: output.jobImminentExpirationHealthEventArn !== undefined && output.jobImminentExpirationHealthEventArn !== null
            ? output.jobImminentExpirationHealthEventArn
            : undefined,
        jobPausedAt: output.jobPausedAt !== undefined && output.jobPausedAt !== null ? new Date(output.jobPausedAt) : undefined,
    };
};
var deserializeAws_restJson1WeeklySchedule = function (output, context) {
    return {
        dayOfWeek: output.dayOfWeek !== undefined && output.dayOfWeek !== null ? output.dayOfWeek : undefined,
    };
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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