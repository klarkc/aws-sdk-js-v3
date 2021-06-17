import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AcceptAdministratorInvitationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/administrator";
                body = JSON.stringify(__assign(__assign({}, (input.AdministratorId !== undefined &&
                    input.AdministratorId !== null && { AdministratorId: input.AdministratorId })), (input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId })));
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
export var serializeAws_restJson1AcceptInvitationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/master";
                body = JSON.stringify(__assign(__assign({}, (input.InvitationId !== undefined && input.InvitationId !== null && { InvitationId: input.InvitationId })), (input.MasterId !== undefined && input.MasterId !== null && { MasterId: input.MasterId })));
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
export var serializeAws_restJson1BatchDisableStandardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/standards/deregister";
                body = JSON.stringify(__assign({}, (input.StandardsSubscriptionArns !== undefined &&
                    input.StandardsSubscriptionArns !== null && {
                    StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(input.StandardsSubscriptionArns, context),
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
export var serializeAws_restJson1BatchEnableStandardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/standards/register";
                body = JSON.stringify(__assign({}, (input.StandardsSubscriptionRequests !== undefined &&
                    input.StandardsSubscriptionRequests !== null && {
                    StandardsSubscriptionRequests: serializeAws_restJson1StandardsSubscriptionRequests(input.StandardsSubscriptionRequests, context),
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
export var serializeAws_restJson1BatchImportFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings/import";
                body = JSON.stringify(__assign({}, (input.Findings !== undefined &&
                    input.Findings !== null && {
                    Findings: serializeAws_restJson1BatchImportFindingsRequestFindingList(input.Findings, context),
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
export var serializeAws_restJson1BatchUpdateFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings/batchupdate";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence })), (input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality })), (input.FindingIdentifiers !== undefined &&
                    input.FindingIdentifiers !== null && {
                    FindingIdentifiers: serializeAws_restJson1AwsSecurityFindingIdentifierList(input.FindingIdentifiers, context),
                })), (input.Note !== undefined &&
                    input.Note !== null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) })), (input.RelatedFindings !== undefined &&
                    input.RelatedFindings !== null && {
                    RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
                })), (input.Severity !== undefined &&
                    input.Severity !== null && { Severity: serializeAws_restJson1SeverityUpdate(input.Severity, context) })), (input.Types !== undefined &&
                    input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) })), (input.UserDefinedFields !== undefined &&
                    input.UserDefinedFields !== null && {
                    UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
                })), (input.VerificationState !== undefined &&
                    input.VerificationState !== null && { VerificationState: input.VerificationState })), (input.Workflow !== undefined &&
                    input.Workflow !== null && { Workflow: serializeAws_restJson1WorkflowUpdate(input.Workflow, context) })));
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
export var serializeAws_restJson1CreateActionTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/actionTargets";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1CreateInsightCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/insights";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) })), (input.GroupByAttribute !== undefined &&
                    input.GroupByAttribute !== null && { GroupByAttribute: input.GroupByAttribute })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1CreateMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members";
                body = JSON.stringify(__assign({}, (input.AccountDetails !== undefined &&
                    input.AccountDetails !== null && {
                    AccountDetails: serializeAws_restJson1AccountDetailsList(input.AccountDetails, context),
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
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1DeleteActionTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/actionTargets/{ActionTargetArn+}";
                if (input.ActionTargetArn !== undefined) {
                    labelValue = input.ActionTargetArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ActionTargetArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
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
export var serializeAws_restJson1DeleteInsightCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/insights/{InsightArn+}";
                if (input.InsightArn !== undefined) {
                    labelValue = input.InsightArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InsightArn.");
                    }
                    resolvedPath = resolvedPath.replace("{InsightArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InsightArn.");
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
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1DeleteMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members/delete";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1DescribeActionTargetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/actionTargets/get";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ActionTargetArns !== undefined &&
                    input.ActionTargetArns !== null && {
                    ActionTargetArns: serializeAws_restJson1ArnList(input.ActionTargetArns, context),
                })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1DescribeHubCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/accounts";
                query = __assign({}, (input.HubArn !== undefined && { HubArn: input.HubArn }));
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
export var serializeAws_restJson1DescribeOrganizationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/organization/configuration";
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
export var serializeAws_restJson1DescribeProductsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/products";
                query = __assign(__assign(__assign({}, (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.ProductArn !== undefined && { ProductArn: input.ProductArn }));
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
export var serializeAws_restJson1DescribeStandardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/standards";
                query = __assign(__assign({}, (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1DescribeStandardsControlsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/standards/controls/{StandardsSubscriptionArn+}";
                if (input.StandardsSubscriptionArn !== undefined) {
                    labelValue = input.StandardsSubscriptionArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: StandardsSubscriptionArn.");
                    }
                    resolvedPath = resolvedPath.replace("{StandardsSubscriptionArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: StandardsSubscriptionArn.");
                }
                query = __assign(__assign({}, (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }));
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
export var serializeAws_restJson1DisableImportFindingsForProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/productSubscriptions/{ProductSubscriptionArn+}";
                if (input.ProductSubscriptionArn !== undefined) {
                    labelValue = input.ProductSubscriptionArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ProductSubscriptionArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ProductSubscriptionArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ProductSubscriptionArn.");
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
export var serializeAws_restJson1DisableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/organization/admin/disable";
                body = JSON.stringify(__assign({}, (input.AdminAccountId !== undefined &&
                    input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId })));
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
export var serializeAws_restJson1DisableSecurityHubCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/accounts";
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
export var serializeAws_restJson1DisassociateMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members/disassociate";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1EnableImportFindingsForProductCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/productSubscriptions";
                body = JSON.stringify(__assign({}, (input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn })));
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
export var serializeAws_restJson1EnableOrganizationAdminAccountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/organization/admin/enable";
                body = JSON.stringify(__assign({}, (input.AdminAccountId !== undefined &&
                    input.AdminAccountId !== null && { AdminAccountId: input.AdminAccountId })));
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
export var serializeAws_restJson1EnableSecurityHubCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/accounts";
                body = JSON.stringify(__assign(__assign({}, (input.EnableDefaultStandards !== undefined &&
                    input.EnableDefaultStandards !== null && { EnableDefaultStandards: input.EnableDefaultStandards })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
export var serializeAws_restJson1GetEnabledStandardsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/standards/get";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.StandardsSubscriptionArns !== undefined &&
                    input.StandardsSubscriptionArns !== null && {
                    StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(input.StandardsSubscriptionArns, context),
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
export var serializeAws_restJson1GetFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SortCriteria !== undefined &&
                    input.SortCriteria !== null && { SortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context) })));
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
export var serializeAws_restJson1GetInsightResultsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/insights/results/{InsightArn+}";
                if (input.InsightArn !== undefined) {
                    labelValue = input.InsightArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InsightArn.");
                    }
                    resolvedPath = resolvedPath.replace("{InsightArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InsightArn.");
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
export var serializeAws_restJson1GetInsightsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/insights/get";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.InsightArns !== undefined &&
                    input.InsightArns !== null && { InsightArns: serializeAws_restJson1ArnList(input.InsightArns, context) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })));
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
export var serializeAws_restJson1GetMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members/get";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1InviteMembersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/members/invite";
                body = JSON.stringify(__assign({}, (input.AccountIds !== undefined &&
                    input.AccountIds !== null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) })));
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
export var serializeAws_restJson1ListEnabledProductsForImportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/productSubscriptions";
                query = __assign(__assign({}, (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }));
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
                query = __assign(__assign({}, (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { NextToken: input.NextToken }));
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
                query = __assign(__assign(__assign({}, (input.OnlyAssociated !== undefined && { OnlyAssociated: input.OnlyAssociated.toString() })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { NextToken: input.NextToken }));
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
                resolvedPath = "/organization/admin";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { NextToken: input.NextToken }));
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
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
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
                resolvedPath = "/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                query = __assign({}, (input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map(function (_entry) { return _entry; }) }));
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
export var serializeAws_restJson1UpdateActionTargetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/actionTargets/{ActionTargetArn+}";
                if (input.ActionTargetArn !== undefined) {
                    labelValue = input.ActionTargetArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ActionTargetArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ActionTargetArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ActionTargetArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
export var serializeAws_restJson1UpdateFindingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/findings";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) })), (input.Note !== undefined &&
                    input.Note !== null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) })), (input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState })));
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
export var serializeAws_restJson1UpdateInsightCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/insights/{InsightArn+}";
                if (input.InsightArn !== undefined) {
                    labelValue = input.InsightArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: InsightArn.");
                    }
                    resolvedPath = resolvedPath.replace("{InsightArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: InsightArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Filters !== undefined &&
                    input.Filters !== null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) })), (input.GroupByAttribute !== undefined &&
                    input.GroupByAttribute !== null && { GroupByAttribute: input.GroupByAttribute })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })));
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
                resolvedPath = "/organization/configuration";
                body = JSON.stringify(__assign({}, (input.AutoEnable !== undefined && input.AutoEnable !== null && { AutoEnable: input.AutoEnable })));
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
export var serializeAws_restJson1UpdateSecurityHubConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/accounts";
                body = JSON.stringify(__assign({}, (input.AutoEnableControls !== undefined &&
                    input.AutoEnableControls !== null && { AutoEnableControls: input.AutoEnableControls })));
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
export var serializeAws_restJson1UpdateStandardsControlCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/standards/control/{StandardsControlArn+}";
                if (input.StandardsControlArn !== undefined) {
                    labelValue = input.StandardsControlArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: StandardsControlArn.");
                    }
                    resolvedPath = resolvedPath.replace("{StandardsControlArn+}", labelValue
                        .split("/")
                        .map(function (segment) { return __extendedEncodeURIComponent(segment); })
                        .join("/"));
                }
                else {
                    throw new Error("No value provided for input HTTP label: StandardsControlArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.ControlStatus !== undefined && input.ControlStatus !== null && { ControlStatus: input.ControlStatus })), (input.DisabledReason !== undefined &&
                    input.DisabledReason !== null && { DisabledReason: input.DisabledReason })));
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
export var deserializeAws_restJson1AcceptAdministratorInvitationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AcceptAdministratorInvitationCommandError(output, context)];
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
var deserializeAws_restJson1AcceptAdministratorInvitationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1BatchDisableStandardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchDisableStandardsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    StandardsSubscriptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
                    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(data.StandardsSubscriptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchDisableStandardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1BatchEnableStandardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchEnableStandardsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    StandardsSubscriptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
                    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(data.StandardsSubscriptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchEnableStandardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1BatchImportFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchImportFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FailedCount: undefined,
                    FailedFindings: undefined,
                    SuccessCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FailedCount !== undefined && data.FailedCount !== null) {
                    contents.FailedCount = data.FailedCount;
                }
                if (data.FailedFindings !== undefined && data.FailedFindings !== null) {
                    contents.FailedFindings = deserializeAws_restJson1ImportFindingsErrorList(data.FailedFindings, context);
                }
                if (data.SuccessCount !== undefined && data.SuccessCount !== null) {
                    contents.SuccessCount = data.SuccessCount;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchImportFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1BatchUpdateFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchUpdateFindingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ProcessedFindings: undefined,
                    UnprocessedFindings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ProcessedFindings !== undefined && data.ProcessedFindings !== null) {
                    contents.ProcessedFindings = deserializeAws_restJson1AwsSecurityFindingIdentifierList(data.ProcessedFindings, context);
                }
                if (data.UnprocessedFindings !== undefined && data.UnprocessedFindings !== null) {
                    contents.UnprocessedFindings = deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList(data.UnprocessedFindings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchUpdateFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateActionTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateActionTargetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ActionTargetArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
                    contents.ActionTargetArn = data.ActionTargetArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateActionTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceConflictException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateInsightCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateInsightCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InsightArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InsightArn !== undefined && data.InsightArn !== null) {
                    contents.InsightArn = data.InsightArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateInsightCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceConflictException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceConflictException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeclineInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteActionTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteActionTargetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ActionTargetArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ActionTargetArn !== undefined && data.ActionTargetArn !== null) {
                    contents.ActionTargetArn = data.ActionTargetArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteActionTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteInsightCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInsightCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InsightArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InsightArn !== undefined && data.InsightArn !== null) {
                    contents.InsightArn = data.InsightArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInsightCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeActionTargetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeActionTargetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ActionTargets: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ActionTargets !== undefined && data.ActionTargets !== null) {
                    contents.ActionTargets = deserializeAws_restJson1ActionTargetList(data.ActionTargets, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeActionTargetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeHubCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeHubCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AutoEnableControls: undefined,
                    HubArn: undefined,
                    SubscribedAt: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AutoEnableControls !== undefined && data.AutoEnableControls !== null) {
                    contents.AutoEnableControls = data.AutoEnableControls;
                }
                if (data.HubArn !== undefined && data.HubArn !== null) {
                    contents.HubArn = data.HubArn;
                }
                if (data.SubscribedAt !== undefined && data.SubscribedAt !== null) {
                    contents.SubscribedAt = data.SubscribedAt;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeHubCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
                    AutoEnable: undefined,
                    MemberAccountLimitReached: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AutoEnable !== undefined && data.AutoEnable !== null) {
                    contents.AutoEnable = data.AutoEnable;
                }
                if (data.MemberAccountLimitReached !== undefined && data.MemberAccountLimitReached !== null) {
                    contents.MemberAccountLimitReached = data.MemberAccountLimitReached;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeProductsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeProductsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Products: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Products !== undefined && data.Products !== null) {
                    contents.Products = deserializeAws_restJson1ProductsList(data.Products, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeProductsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeStandardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeStandardsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Standards: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.Standards !== undefined && data.Standards !== null) {
                    contents.Standards = deserializeAws_restJson1Standards(data.Standards, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeStandardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeStandardsControlsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeStandardsControlsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Controls: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Controls !== undefined && data.Controls !== null) {
                    contents.Controls = deserializeAws_restJson1StandardsControls(data.Controls, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeStandardsControlsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisableImportFindingsForProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisableImportFindingsForProductCommandError(output, context)];
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
var deserializeAws_restJson1DisableImportFindingsForProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisableSecurityHubCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisableSecurityHubCommandError(output, context)];
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
var deserializeAws_restJson1DisableSecurityHubCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateMembersCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1EnableImportFindingsForProductCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1EnableImportFindingsForProductCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ProductSubscriptionArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ProductSubscriptionArn !== undefined && data.ProductSubscriptionArn !== null) {
                    contents.ProductSubscriptionArn = data.ProductSubscriptionArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1EnableImportFindingsForProductCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceConflictException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1EnableSecurityHubCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1EnableSecurityHubCommandError(output, context)];
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
var deserializeAws_restJson1EnableSecurityHubCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 4];
                    case "InvalidAccessException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceConflictException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceConflictException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
                    Administrator: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Administrator !== undefined && data.Administrator !== null) {
                    contents.Administrator = deserializeAws_restJson1Invitation(data.Administrator, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetAdministratorAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetEnabledStandardsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetEnabledStandardsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    StandardsSubscriptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.StandardsSubscriptions !== undefined && data.StandardsSubscriptions !== null) {
                    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(data.StandardsSubscriptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetEnabledStandardsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
                    Findings: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Findings !== undefined && data.Findings !== null) {
                    contents.Findings = deserializeAws_restJson1AwsSecurityFindingList(data.Findings, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightResultsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightResultsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    InsightResults: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InsightResults !== undefined && data.InsightResults !== null) {
                    contents.InsightResults = deserializeAws_restJson1InsightResults(data.InsightResults, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightResultsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetInsightsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInsightsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Insights: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Insights !== undefined && data.Insights !== null) {
                    contents.Insights = deserializeAws_restJson1InsightList(data.Insights, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInsightsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
                    InvitationsCount: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.InvitationsCount !== undefined && data.InvitationsCount !== null) {
                    contents.InvitationsCount = data.InvitationsCount;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInvitationsCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
                    Master: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Master !== undefined && data.Master !== null) {
                    contents.Master = deserializeAws_restJson1Invitation(data.Master, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMasterAccountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Members: undefined,
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Members !== undefined && data.Members !== null) {
                    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
                }
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1InviteMembersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InviteMembersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    UnprocessedAccounts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.UnprocessedAccounts !== undefined && data.UnprocessedAccounts !== null) {
                    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InviteMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListEnabledProductsForImportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListEnabledProductsForImportCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    ProductSubscriptions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                if (data.ProductSubscriptions !== undefined && data.ProductSubscriptions !== null) {
                    contents.ProductSubscriptions = deserializeAws_restJson1ProductSubscriptionArnList(data.ProductSubscriptions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListEnabledProductsForImportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
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
                    Invitations: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Invitations !== undefined && data.Invitations !== null) {
                    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInvitationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
                    Members: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Members !== undefined && data.Members !== null) {
                    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListMembersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
                    AdminAccounts: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AdminAccounts !== undefined && data.AdminAccounts !== null) {
                    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.AdminAccounts, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
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
                if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
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
                if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidInputException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateActionTargetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateActionTargetCommandError(output, context)];
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
var deserializeAws_restJson1UpdateActionTargetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateFindingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFindingsCommandError(output, context)];
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
var deserializeAws_restJson1UpdateFindingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateInsightCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateInsightCommandError(output, context)];
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
var deserializeAws_restJson1UpdateInsightCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
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
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateSecurityHubConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError(output, context)];
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
var deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateStandardsControlCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateStandardsControlCommandError(output, context)];
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
var deserializeAws_restJson1UpdateStandardsControlCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalException": return [3 /*break*/, 2];
                    case "com.amazonaws.securityhub#InternalException": return [3 /*break*/, 2];
                    case "InvalidAccessException": return [3 /*break*/, 4];
                    case "com.amazonaws.securityhub#InvalidAccessException": return [3 /*break*/, 4];
                    case "InvalidInputException": return [3 /*break*/, 6];
                    case "com.amazonaws.securityhub#InvalidInputException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.securityhub#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
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
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidAccessExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidAccessException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidInputExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidInputException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
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
            Code: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Code !== undefined && data.Code !== null) {
            contents.Code = data.Code;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AccountDetails = function (input, context) {
    return __assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Email !== undefined && input.Email !== null && { Email: input.Email }));
};
var serializeAws_restJson1AccountDetailsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AccountDetails(entry, context);
    });
};
var serializeAws_restJson1AccountIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Action = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType })), (input.AwsApiCallAction !== undefined &&
        input.AwsApiCallAction !== null && {
        AwsApiCallAction: serializeAws_restJson1AwsApiCallAction(input.AwsApiCallAction, context),
    })), (input.DnsRequestAction !== undefined &&
        input.DnsRequestAction !== null && {
        DnsRequestAction: serializeAws_restJson1DnsRequestAction(input.DnsRequestAction, context),
    })), (input.NetworkConnectionAction !== undefined &&
        input.NetworkConnectionAction !== null && {
        NetworkConnectionAction: serializeAws_restJson1NetworkConnectionAction(input.NetworkConnectionAction, context),
    })), (input.PortProbeAction !== undefined &&
        input.PortProbeAction !== null && {
        PortProbeAction: serializeAws_restJson1PortProbeAction(input.PortProbeAction, context),
    }));
};
var serializeAws_restJson1ActionLocalIpDetails = function (input, context) {
    return __assign({}, (input.IpAddressV4 !== undefined && input.IpAddressV4 !== null && { IpAddressV4: input.IpAddressV4 }));
};
var serializeAws_restJson1ActionLocalPortDetails = function (input, context) {
    return __assign(__assign({}, (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.PortName !== undefined && input.PortName !== null && { PortName: input.PortName }));
};
var serializeAws_restJson1ActionRemoteIpDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.City !== undefined && input.City !== null && { City: serializeAws_restJson1City(input.City, context) })), (input.Country !== undefined &&
        input.Country !== null && { Country: serializeAws_restJson1Country(input.Country, context) })), (input.GeoLocation !== undefined &&
        input.GeoLocation !== null && { GeoLocation: serializeAws_restJson1GeoLocation(input.GeoLocation, context) })), (input.IpAddressV4 !== undefined && input.IpAddressV4 !== null && { IpAddressV4: input.IpAddressV4 })), (input.Organization !== undefined &&
        input.Organization !== null && {
        Organization: serializeAws_restJson1IpOrganizationDetails(input.Organization, context),
    }));
};
var serializeAws_restJson1ActionRemotePortDetails = function (input, context) {
    return __assign(__assign({}, (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.PortName !== undefined && input.PortName !== null && { PortName: input.PortName }));
};
var serializeAws_restJson1ArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1AvailabilityZone = function (input, context) {
    return __assign(__assign({}, (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId })), (input.ZoneName !== undefined && input.ZoneName !== null && { ZoneName: input.ZoneName }));
};
var serializeAws_restJson1AvailabilityZones = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AvailabilityZone(entry, context);
    });
};
var serializeAws_restJson1AwsApiCallAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AffectedResources !== undefined &&
        input.AffectedResources !== null && {
        AffectedResources: serializeAws_restJson1FieldMap(input.AffectedResources, context),
    })), (input.Api !== undefined && input.Api !== null && { Api: input.Api })), (input.CallerType !== undefined && input.CallerType !== null && { CallerType: input.CallerType })), (input.DomainDetails !== undefined &&
        input.DomainDetails !== null && {
        DomainDetails: serializeAws_restJson1AwsApiCallActionDomainDetails(input.DomainDetails, context),
    })), (input.FirstSeen !== undefined && input.FirstSeen !== null && { FirstSeen: input.FirstSeen })), (input.LastSeen !== undefined && input.LastSeen !== null && { LastSeen: input.LastSeen })), (input.RemoteIpDetails !== undefined &&
        input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    })), (input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }));
};
var serializeAws_restJson1AwsApiCallActionDomainDetails = function (input, context) {
    return __assign({}, (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }));
};
var serializeAws_restJson1AwsApiGatewayAccessLogSettings = function (input, context) {
    return __assign(__assign({}, (input.DestinationArn !== undefined &&
        input.DestinationArn !== null && { DestinationArn: input.DestinationArn })), (input.Format !== undefined && input.Format !== null && { Format: input.Format }));
};
var serializeAws_restJson1AwsApiGatewayCanarySettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId })), (input.PercentTraffic !== undefined &&
        input.PercentTraffic !== null && { PercentTraffic: input.PercentTraffic })), (input.StageVariableOverrides !== undefined &&
        input.StageVariableOverrides !== null && {
        StageVariableOverrides: serializeAws_restJson1FieldMap(input.StageVariableOverrides, context),
    })), (input.UseStageCache !== undefined && input.UseStageCache !== null && { UseStageCache: input.UseStageCache }));
};
var serializeAws_restJson1AwsApiGatewayEndpointConfiguration = function (input, context) {
    return __assign({}, (input.Types !== undefined &&
        input.Types !== null && { Types: serializeAws_restJson1NonEmptyStringList(input.Types, context) }));
};
var serializeAws_restJson1AwsApiGatewayMethodSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CacheDataEncrypted !== undefined &&
        input.CacheDataEncrypted !== null && { CacheDataEncrypted: input.CacheDataEncrypted })), (input.CacheTtlInSeconds !== undefined &&
        input.CacheTtlInSeconds !== null && { CacheTtlInSeconds: input.CacheTtlInSeconds })), (input.CachingEnabled !== undefined &&
        input.CachingEnabled !== null && { CachingEnabled: input.CachingEnabled })), (input.DataTraceEnabled !== undefined &&
        input.DataTraceEnabled !== null && { DataTraceEnabled: input.DataTraceEnabled })), (input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod })), (input.LoggingLevel !== undefined && input.LoggingLevel !== null && { LoggingLevel: input.LoggingLevel })), (input.MetricsEnabled !== undefined &&
        input.MetricsEnabled !== null && { MetricsEnabled: input.MetricsEnabled })), (input.RequireAuthorizationForCacheControl !== undefined &&
        input.RequireAuthorizationForCacheControl !== null && {
        RequireAuthorizationForCacheControl: input.RequireAuthorizationForCacheControl,
    })), (input.ResourcePath !== undefined && input.ResourcePath !== null && { ResourcePath: input.ResourcePath })), (input.ThrottlingBurstLimit !== undefined &&
        input.ThrottlingBurstLimit !== null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit })), (input.ThrottlingRateLimit !== undefined &&
        input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: input.ThrottlingRateLimit })), (input.UnauthorizedCacheControlHeaderStrategy !== undefined &&
        input.UnauthorizedCacheControlHeaderStrategy !== null && {
        UnauthorizedCacheControlHeaderStrategy: input.UnauthorizedCacheControlHeaderStrategy,
    }));
};
var serializeAws_restJson1AwsApiGatewayMethodSettingsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
};
var serializeAws_restJson1AwsApiGatewayRestApiDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApiKeySource !== undefined && input.ApiKeySource !== null && { ApiKeySource: input.ApiKeySource })), (input.BinaryMediaTypes !== undefined &&
        input.BinaryMediaTypes !== null && {
        BinaryMediaTypes: serializeAws_restJson1NonEmptyStringList(input.BinaryMediaTypes, context),
    })), (input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.EndpointConfiguration !== undefined &&
        input.EndpointConfiguration !== null && {
        EndpointConfiguration: serializeAws_restJson1AwsApiGatewayEndpointConfiguration(input.EndpointConfiguration, context),
    })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.MinimumCompressionSize !== undefined &&
        input.MinimumCompressionSize !== null && { MinimumCompressionSize: input.MinimumCompressionSize })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1AwsApiGatewayStageDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessLogSettings !== undefined &&
        input.AccessLogSettings !== null && {
        AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
    })), (input.CacheClusterEnabled !== undefined &&
        input.CacheClusterEnabled !== null && { CacheClusterEnabled: input.CacheClusterEnabled })), (input.CacheClusterSize !== undefined &&
        input.CacheClusterSize !== null && { CacheClusterSize: input.CacheClusterSize })), (input.CacheClusterStatus !== undefined &&
        input.CacheClusterStatus !== null && { CacheClusterStatus: input.CacheClusterStatus })), (input.CanarySettings !== undefined &&
        input.CanarySettings !== null && {
        CanarySettings: serializeAws_restJson1AwsApiGatewayCanarySettings(input.CanarySettings, context),
    })), (input.ClientCertificateId !== undefined &&
        input.ClientCertificateId !== null && { ClientCertificateId: input.ClientCertificateId })), (input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate })), (input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.DocumentationVersion !== undefined &&
        input.DocumentationVersion !== null && { DocumentationVersion: input.DocumentationVersion })), (input.LastUpdatedDate !== undefined &&
        input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate })), (input.MethodSettings !== undefined &&
        input.MethodSettings !== null && {
        MethodSettings: serializeAws_restJson1AwsApiGatewayMethodSettingsList(input.MethodSettings, context),
    })), (input.StageName !== undefined && input.StageName !== null && { StageName: input.StageName })), (input.TracingEnabled !== undefined &&
        input.TracingEnabled !== null && { TracingEnabled: input.TracingEnabled })), (input.Variables !== undefined &&
        input.Variables !== null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) })), (input.WebAclArn !== undefined && input.WebAclArn !== null && { WebAclArn: input.WebAclArn }));
};
var serializeAws_restJson1AwsApiGatewayV2ApiDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApiEndpoint !== undefined && input.ApiEndpoint !== null && { ApiEndpoint: input.ApiEndpoint })), (input.ApiId !== undefined && input.ApiId !== null && { ApiId: input.ApiId })), (input.ApiKeySelectionExpression !== undefined &&
        input.ApiKeySelectionExpression !== null && { ApiKeySelectionExpression: input.ApiKeySelectionExpression })), (input.CorsConfiguration !== undefined &&
        input.CorsConfiguration !== null && {
        CorsConfiguration: serializeAws_restJson1AwsCorsConfiguration(input.CorsConfiguration, context),
    })), (input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ProtocolType !== undefined && input.ProtocolType !== null && { ProtocolType: input.ProtocolType })), (input.RouteSelectionExpression !== undefined &&
        input.RouteSelectionExpression !== null && { RouteSelectionExpression: input.RouteSelectionExpression })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1AwsApiGatewayV2RouteSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DataTraceEnabled !== undefined &&
        input.DataTraceEnabled !== null && { DataTraceEnabled: input.DataTraceEnabled })), (input.DetailedMetricsEnabled !== undefined &&
        input.DetailedMetricsEnabled !== null && { DetailedMetricsEnabled: input.DetailedMetricsEnabled })), (input.LoggingLevel !== undefined && input.LoggingLevel !== null && { LoggingLevel: input.LoggingLevel })), (input.ThrottlingBurstLimit !== undefined &&
        input.ThrottlingBurstLimit !== null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit })), (input.ThrottlingRateLimit !== undefined &&
        input.ThrottlingRateLimit !== null && { ThrottlingRateLimit: input.ThrottlingRateLimit }));
};
var serializeAws_restJson1AwsApiGatewayV2StageDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessLogSettings !== undefined &&
        input.AccessLogSettings !== null && {
        AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
    })), (input.ApiGatewayManaged !== undefined &&
        input.ApiGatewayManaged !== null && { ApiGatewayManaged: input.ApiGatewayManaged })), (input.AutoDeploy !== undefined && input.AutoDeploy !== null && { AutoDeploy: input.AutoDeploy })), (input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate })), (input.DefaultRouteSettings !== undefined &&
        input.DefaultRouteSettings !== null && {
        DefaultRouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.DefaultRouteSettings, context),
    })), (input.DeploymentId !== undefined && input.DeploymentId !== null && { DeploymentId: input.DeploymentId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.LastDeploymentStatusMessage !== undefined &&
        input.LastDeploymentStatusMessage !== null && { LastDeploymentStatusMessage: input.LastDeploymentStatusMessage })), (input.LastUpdatedDate !== undefined &&
        input.LastUpdatedDate !== null && { LastUpdatedDate: input.LastUpdatedDate })), (input.RouteSettings !== undefined &&
        input.RouteSettings !== null && {
        RouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.RouteSettings, context),
    })), (input.StageName !== undefined && input.StageName !== null && { StageName: input.StageName })), (input.StageVariables !== undefined &&
        input.StageVariables !== null && {
        StageVariables: serializeAws_restJson1FieldMap(input.StageVariables, context),
    }));
};
var serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime })), (input.HealthCheckGracePeriod !== undefined &&
        input.HealthCheckGracePeriod !== null && { HealthCheckGracePeriod: input.HealthCheckGracePeriod })), (input.HealthCheckType !== undefined &&
        input.HealthCheckType !== null && { HealthCheckType: input.HealthCheckType })), (input.LaunchConfigurationName !== undefined &&
        input.LaunchConfigurationName !== null && { LaunchConfigurationName: input.LaunchConfigurationName })), (input.LoadBalancerNames !== undefined &&
        input.LoadBalancerNames !== null && {
        LoadBalancerNames: serializeAws_restJson1StringList(input.LoadBalancerNames, context),
    }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CertificateAuthorityArn !== undefined &&
        input.CertificateAuthorityArn !== null && { CertificateAuthorityArn: input.CertificateAuthorityArn })), (input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.DomainValidationOptions !== undefined &&
        input.DomainValidationOptions !== null && {
        DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(input.DomainValidationOptions, context),
    })), (input.ExtendedKeyUsages !== undefined &&
        input.ExtendedKeyUsages !== null && {
        ExtendedKeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(input.ExtendedKeyUsages, context),
    })), (input.FailureReason !== undefined && input.FailureReason !== null && { FailureReason: input.FailureReason })), (input.ImportedAt !== undefined && input.ImportedAt !== null && { ImportedAt: input.ImportedAt })), (input.InUseBy !== undefined &&
        input.InUseBy !== null && { InUseBy: serializeAws_restJson1StringList(input.InUseBy, context) })), (input.IssuedAt !== undefined && input.IssuedAt !== null && { IssuedAt: input.IssuedAt })), (input.Issuer !== undefined && input.Issuer !== null && { Issuer: input.Issuer })), (input.KeyAlgorithm !== undefined && input.KeyAlgorithm !== null && { KeyAlgorithm: input.KeyAlgorithm })), (input.KeyUsages !== undefined &&
        input.KeyUsages !== null && {
        KeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(input.KeyUsages, context),
    })), (input.NotAfter !== undefined && input.NotAfter !== null && { NotAfter: input.NotAfter })), (input.NotBefore !== undefined && input.NotBefore !== null && { NotBefore: input.NotBefore })), (input.Options !== undefined &&
        input.Options !== null && {
        Options: serializeAws_restJson1AwsCertificateManagerCertificateOptions(input.Options, context),
    })), (input.RenewalEligibility !== undefined &&
        input.RenewalEligibility !== null && { RenewalEligibility: input.RenewalEligibility })), (input.RenewalSummary !== undefined &&
        input.RenewalSummary !== null && {
        RenewalSummary: serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(input.RenewalSummary, context),
    })), (input.Serial !== undefined && input.Serial !== null && { Serial: input.Serial })), (input.SignatureAlgorithm !== undefined &&
        input.SignatureAlgorithm !== null && { SignatureAlgorithm: input.SignatureAlgorithm })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.Subject !== undefined && input.Subject !== null && { Subject: input.Subject })), (input.SubjectAlternativeNames !== undefined &&
        input.SubjectAlternativeNames !== null && {
        SubjectAlternativeNames: serializeAws_restJson1StringList(input.SubjectAlternativeNames, context),
    })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.ResourceRecord !== undefined &&
        input.ResourceRecord !== null && {
        ResourceRecord: serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(input.ResourceRecord, context),
    })), (input.ValidationDomain !== undefined &&
        input.ValidationDomain !== null && { ValidationDomain: input.ValidationDomain })), (input.ValidationEmails !== undefined &&
        input.ValidationEmails !== null && {
        ValidationEmails: serializeAws_restJson1StringList(input.ValidationEmails, context),
    })), (input.ValidationMethod !== undefined &&
        input.ValidationMethod !== null && { ValidationMethod: input.ValidationMethod })), (input.ValidationStatus !== undefined &&
        input.ValidationStatus !== null && { ValidationStatus: input.ValidationStatus }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
};
var serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.OId !== undefined && input.OId !== null && { OId: input.OId }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
};
var serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
};
var serializeAws_restJson1AwsCertificateManagerCertificateOptions = function (input, context) {
    return __assign({}, (input.CertificateTransparencyLoggingPreference !== undefined &&
        input.CertificateTransparencyLoggingPreference !== null && {
        CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
    }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DomainValidationOptions !== undefined &&
        input.DomainValidationOptions !== null && {
        DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(input.DomainValidationOptions, context),
    })), (input.RenewalStatus !== undefined && input.RenewalStatus !== null && { RenewalStatus: input.RenewalStatus })), (input.RenewalStatusReason !== undefined &&
        input.RenewalStatusReason !== null && { RenewalStatusReason: input.RenewalStatusReason })), (input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt }));
};
var serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = function (input, context) {
    return __assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = function (input, context) {
    return __assign({}, (input.ViewerProtocolPolicy !== undefined &&
        input.ViewerProtocolPolicy !== null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }));
};
var serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = function (input, context) {
    return __assign({}, (input.Items !== undefined &&
        input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(input.Items, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
};
var serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = function (input, context) {
    return __assign({}, (input.ViewerProtocolPolicy !== undefined &&
        input.ViewerProtocolPolicy !== null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }));
};
var serializeAws_restJson1AwsCloudFrontDistributionDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CacheBehaviors !== undefined &&
        input.CacheBehaviors !== null && {
        CacheBehaviors: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(input.CacheBehaviors, context),
    })), (input.DefaultCacheBehavior !== undefined &&
        input.DefaultCacheBehavior !== null && {
        DefaultCacheBehavior: serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(input.DefaultCacheBehavior, context),
    })), (input.DefaultRootObject !== undefined &&
        input.DefaultRootObject !== null && { DefaultRootObject: input.DefaultRootObject })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag })), (input.LastModifiedTime !== undefined &&
        input.LastModifiedTime !== null && { LastModifiedTime: input.LastModifiedTime })), (input.Logging !== undefined &&
        input.Logging !== null && {
        Logging: serializeAws_restJson1AwsCloudFrontDistributionLogging(input.Logging, context),
    })), (input.OriginGroups !== undefined &&
        input.OriginGroups !== null && {
        OriginGroups: serializeAws_restJson1AwsCloudFrontDistributionOriginGroups(input.OriginGroups, context),
    })), (input.Origins !== undefined &&
        input.Origins !== null && {
        Origins: serializeAws_restJson1AwsCloudFrontDistributionOrigins(input.Origins, context),
    })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }));
};
var serializeAws_restJson1AwsCloudFrontDistributionLogging = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.IncludeCookies !== undefined &&
        input.IncludeCookies !== null && { IncludeCookies: input.IncludeCookies })), (input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroup = function (input, context) {
    return __assign({}, (input.FailoverCriteria !== undefined &&
        input.FailoverCriteria !== null && {
        FailoverCriteria: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(input.FailoverCriteria, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = function (input, context) {
    return __assign({}, (input.StatusCodes !== undefined &&
        input.StatusCodes !== null && {
        StatusCodes: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(input.StatusCodes, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = function (input, context) {
    return __assign(__assign({}, (input.Items !== undefined &&
        input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(input.Items, context),
    })), (input.Quantity !== undefined && input.Quantity !== null && { Quantity: input.Quantity }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroups = function (input, context) {
    return __assign({}, (input.Items !== undefined &&
        input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(input.Items, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginItem = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.OriginPath !== undefined && input.OriginPath !== null && { OriginPath: input.OriginPath })), (input.S3OriginConfig !== undefined &&
        input.S3OriginConfig !== null && {
        S3OriginConfig: serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(input.S3OriginConfig, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
};
var serializeAws_restJson1AwsCloudFrontDistributionOrigins = function (input, context) {
    return __assign({}, (input.Items !== undefined &&
        input.Items !== null && {
        Items: serializeAws_restJson1AwsCloudFrontDistributionOriginItemList(input.Items, context),
    }));
};
var serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = function (input, context) {
    return __assign({}, (input.OriginAccessIdentity !== undefined &&
        input.OriginAccessIdentity !== null && { OriginAccessIdentity: input.OriginAccessIdentity }));
};
var serializeAws_restJson1AwsCloudTrailTrailDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CloudWatchLogsLogGroupArn !== undefined &&
        input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn })), (input.CloudWatchLogsRoleArn !== undefined &&
        input.CloudWatchLogsRoleArn !== null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn })), (input.HasCustomEventSelectors !== undefined &&
        input.HasCustomEventSelectors !== null && { HasCustomEventSelectors: input.HasCustomEventSelectors })), (input.HomeRegion !== undefined && input.HomeRegion !== null && { HomeRegion: input.HomeRegion })), (input.IncludeGlobalServiceEvents !== undefined &&
        input.IncludeGlobalServiceEvents !== null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents })), (input.IsMultiRegionTrail !== undefined &&
        input.IsMultiRegionTrail !== null && { IsMultiRegionTrail: input.IsMultiRegionTrail })), (input.IsOrganizationTrail !== undefined &&
        input.IsOrganizationTrail !== null && { IsOrganizationTrail: input.IsOrganizationTrail })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LogFileValidationEnabled !== undefined &&
        input.LogFileValidationEnabled !== null && { LogFileValidationEnabled: input.LogFileValidationEnabled })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.S3KeyPrefix !== undefined && input.S3KeyPrefix !== null && { S3KeyPrefix: input.S3KeyPrefix })), (input.SnsTopicArn !== undefined && input.SnsTopicArn !== null && { SnsTopicArn: input.SnsTopicArn })), (input.SnsTopicName !== undefined && input.SnsTopicName !== null && { SnsTopicName: input.SnsTopicName })), (input.TrailArn !== undefined && input.TrailArn !== null && { TrailArn: input.TrailArn }));
};
var serializeAws_restJson1AwsCodeBuildProjectDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.EncryptionKey !== undefined && input.EncryptionKey !== null && { EncryptionKey: input.EncryptionKey })), (input.Environment !== undefined &&
        input.Environment !== null && {
        Environment: serializeAws_restJson1AwsCodeBuildProjectEnvironment(input.Environment, context),
    })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ServiceRole !== undefined && input.ServiceRole !== null && { ServiceRole: input.ServiceRole })), (input.Source !== undefined &&
        input.Source !== null && { Source: serializeAws_restJson1AwsCodeBuildProjectSource(input.Source, context) })), (input.VpcConfig !== undefined &&
        input.VpcConfig !== null && {
        VpcConfig: serializeAws_restJson1AwsCodeBuildProjectVpcConfig(input.VpcConfig, context),
    }));
};
var serializeAws_restJson1AwsCodeBuildProjectEnvironment = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Certificate !== undefined && input.Certificate !== null && { Certificate: input.Certificate })), (input.ImagePullCredentialsType !== undefined &&
        input.ImagePullCredentialsType !== null && { ImagePullCredentialsType: input.ImagePullCredentialsType })), (input.RegistryCredential !== undefined &&
        input.RegistryCredential !== null && {
        RegistryCredential: serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(input.RegistryCredential, context),
    })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = function (input, context) {
    return __assign(__assign({}, (input.Credential !== undefined && input.Credential !== null && { Credential: input.Credential })), (input.CredentialProvider !== undefined &&
        input.CredentialProvider !== null && { CredentialProvider: input.CredentialProvider }));
};
var serializeAws_restJson1AwsCodeBuildProjectSource = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GitCloneDepth !== undefined && input.GitCloneDepth !== null && { GitCloneDepth: input.GitCloneDepth })), (input.InsecureSsl !== undefined && input.InsecureSsl !== null && { InsecureSsl: input.InsecureSsl })), (input.Location !== undefined && input.Location !== null && { Location: input.Location })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1AwsCodeBuildProjectVpcConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    })), (input.Subnets !== undefined &&
        input.Subnets !== null && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsCorsConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllowCredentials !== undefined &&
        input.AllowCredentials !== null && { AllowCredentials: input.AllowCredentials })), (input.AllowHeaders !== undefined &&
        input.AllowHeaders !== null && {
        AllowHeaders: serializeAws_restJson1NonEmptyStringList(input.AllowHeaders, context),
    })), (input.AllowMethods !== undefined &&
        input.AllowMethods !== null && {
        AllowMethods: serializeAws_restJson1NonEmptyStringList(input.AllowMethods, context),
    })), (input.AllowOrigins !== undefined &&
        input.AllowOrigins !== null && {
        AllowOrigins: serializeAws_restJson1NonEmptyStringList(input.AllowOrigins, context),
    })), (input.ExposeHeaders !== undefined &&
        input.ExposeHeaders !== null && {
        ExposeHeaders: serializeAws_restJson1NonEmptyStringList(input.ExposeHeaders, context),
    })), (input.MaxAge !== undefined && input.MaxAge !== null && { MaxAge: input.MaxAge }));
};
var serializeAws_restJson1AwsDynamoDbTableAttributeDefinition = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }));
};
var serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableBillingModeSummary = function (input, context) {
    return __assign(__assign({}, (input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode })), (input.LastUpdateToPayPerRequestDateTime !== undefined &&
        input.LastUpdateToPayPerRequestDateTime !== null && {
        LastUpdateToPayPerRequestDateTime: input.LastUpdateToPayPerRequestDateTime,
    }));
};
var serializeAws_restJson1AwsDynamoDbTableDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeDefinitions !== undefined &&
        input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(input.AttributeDefinitions, context),
    })), (input.BillingModeSummary !== undefined &&
        input.BillingModeSummary !== null && {
        BillingModeSummary: serializeAws_restJson1AwsDynamoDbTableBillingModeSummary(input.BillingModeSummary, context),
    })), (input.CreationDateTime !== undefined &&
        input.CreationDateTime !== null && { CreationDateTime: input.CreationDateTime })), (input.GlobalSecondaryIndexes !== undefined &&
        input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    })), (input.GlobalTableVersion !== undefined &&
        input.GlobalTableVersion !== null && { GlobalTableVersion: input.GlobalTableVersion })), (input.ItemCount !== undefined && input.ItemCount !== null && { ItemCount: input.ItemCount })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    })), (input.LatestStreamArn !== undefined &&
        input.LatestStreamArn !== null && { LatestStreamArn: input.LatestStreamArn })), (input.LatestStreamLabel !== undefined &&
        input.LatestStreamLabel !== null && { LatestStreamLabel: input.LatestStreamLabel })), (input.LocalSecondaryIndexes !== undefined &&
        input.LocalSecondaryIndexes !== null && {
        LocalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(input.LocalSecondaryIndexes, context),
    })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(input.ProvisionedThroughput, context),
    })), (input.Replicas !== undefined &&
        input.Replicas !== null && {
        Replicas: serializeAws_restJson1AwsDynamoDbTableReplicaList(input.Replicas, context),
    })), (input.RestoreSummary !== undefined &&
        input.RestoreSummary !== null && {
        RestoreSummary: serializeAws_restJson1AwsDynamoDbTableRestoreSummary(input.RestoreSummary, context),
    })), (input.SseDescription !== undefined &&
        input.SseDescription !== null && {
        SseDescription: serializeAws_restJson1AwsDynamoDbTableSseDescription(input.SseDescription, context),
    })), (input.StreamSpecification !== undefined &&
        input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_restJson1AwsDynamoDbTableStreamSpecification(input.StreamSpecification, context),
    })), (input.TableId !== undefined && input.TableId !== null && { TableId: input.TableId })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.TableSizeBytes !== undefined &&
        input.TableSizeBytes !== null && { TableSizeBytes: input.TableSizeBytes })), (input.TableStatus !== undefined && input.TableStatus !== null && { TableStatus: input.TableStatus }));
};
var serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Backfilling !== undefined && input.Backfilling !== null && { Backfilling: input.Backfilling })), (input.IndexArn !== undefined && input.IndexArn !== null && { IndexArn: input.IndexArn })), (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.IndexSizeBytes !== undefined &&
        input.IndexSizeBytes !== null && { IndexSizeBytes: input.IndexSizeBytes })), (input.IndexStatus !== undefined && input.IndexStatus !== null && { IndexStatus: input.IndexStatus })), (input.ItemCount !== undefined && input.ItemCount !== null && { ItemCount: input.ItemCount })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    })), (input.Projection !== undefined &&
        input.Projection !== null && {
        Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
    })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(input.ProvisionedThroughput, context),
    }));
};
var serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableKeySchema = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.KeyType !== undefined && input.KeyType !== null && { KeyType: input.KeyType }));
};
var serializeAws_restJson1AwsDynamoDbTableKeySchemaList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IndexArn !== undefined && input.IndexArn !== null && { IndexArn: input.IndexArn })), (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && {
        KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    })), (input.Projection !== undefined &&
        input.Projection !== null && {
        Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
    }));
};
var serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableProjection = function (input, context) {
    return __assign(__assign({}, (input.NonKeyAttributes !== undefined &&
        input.NonKeyAttributes !== null && {
        NonKeyAttributes: serializeAws_restJson1StringList(input.NonKeyAttributes, context),
    })), (input.ProjectionType !== undefined &&
        input.ProjectionType !== null && { ProjectionType: input.ProjectionType }));
};
var serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.LastDecreaseDateTime !== undefined &&
        input.LastDecreaseDateTime !== null && { LastDecreaseDateTime: input.LastDecreaseDateTime })), (input.LastIncreaseDateTime !== undefined &&
        input.LastIncreaseDateTime !== null && { LastIncreaseDateTime: input.LastIncreaseDateTime })), (input.NumberOfDecreasesToday !== undefined &&
        input.NumberOfDecreasesToday !== null && { NumberOfDecreasesToday: input.NumberOfDecreasesToday })), (input.ReadCapacityUnits !== undefined &&
        input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits })), (input.WriteCapacityUnits !== undefined &&
        input.WriteCapacityUnits !== null && { WriteCapacityUnits: input.WriteCapacityUnits }));
};
var serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = function (input, context) {
    return __assign({}, (input.ReadCapacityUnits !== undefined &&
        input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }));
};
var serializeAws_restJson1AwsDynamoDbTableReplica = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GlobalSecondaryIndexes !== undefined &&
        input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    })), (input.KmsMasterKeyId !== undefined &&
        input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    })), (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName })), (input.ReplicaStatus !== undefined && input.ReplicaStatus !== null && { ReplicaStatus: input.ReplicaStatus })), (input.ReplicaStatusDescription !== undefined &&
        input.ReplicaStatusDescription !== null && { ReplicaStatusDescription: input.ReplicaStatusDescription }));
};
var serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    }));
};
var serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableReplicaList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
};
var serializeAws_restJson1AwsDynamoDbTableRestoreSummary = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.RestoreDateTime !== undefined &&
        input.RestoreDateTime !== null && { RestoreDateTime: input.RestoreDateTime })), (input.RestoreInProgress !== undefined &&
        input.RestoreInProgress !== null && { RestoreInProgress: input.RestoreInProgress })), (input.SourceBackupArn !== undefined &&
        input.SourceBackupArn !== null && { SourceBackupArn: input.SourceBackupArn })), (input.SourceTableArn !== undefined &&
        input.SourceTableArn !== null && { SourceTableArn: input.SourceTableArn }));
};
var serializeAws_restJson1AwsDynamoDbTableSseDescription = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.InaccessibleEncryptionDateTime !== undefined &&
        input.InaccessibleEncryptionDateTime !== null && {
        InaccessibleEncryptionDateTime: input.InaccessibleEncryptionDateTime,
    })), (input.KmsMasterKeyArn !== undefined &&
        input.KmsMasterKeyArn !== null && { KmsMasterKeyArn: input.KmsMasterKeyArn })), (input.SseType !== undefined && input.SseType !== null && { SseType: input.SseType })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsDynamoDbTableStreamSpecification = function (input, context) {
    return __assign(__assign({}, (input.StreamEnabled !== undefined && input.StreamEnabled !== null && { StreamEnabled: input.StreamEnabled })), (input.StreamViewType !== undefined &&
        input.StreamViewType !== null && { StreamViewType: input.StreamViewType }));
};
var serializeAws_restJson1AwsEc2EipDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocationId !== undefined && input.AllocationId !== null && { AllocationId: input.AllocationId })), (input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId })), (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.NetworkBorderGroup !== undefined &&
        input.NetworkBorderGroup !== null && { NetworkBorderGroup: input.NetworkBorderGroup })), (input.NetworkInterfaceId !== undefined &&
        input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId })), (input.NetworkInterfaceOwnerId !== undefined &&
        input.NetworkInterfaceOwnerId !== null && { NetworkInterfaceOwnerId: input.NetworkInterfaceOwnerId })), (input.PrivateIpAddress !== undefined &&
        input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress })), (input.PublicIp !== undefined && input.PublicIp !== null && { PublicIp: input.PublicIp })), (input.PublicIpv4Pool !== undefined &&
        input.PublicIpv4Pool !== null && { PublicIpv4Pool: input.PublicIpv4Pool }));
};
var serializeAws_restJson1AwsEc2InstanceDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.IamInstanceProfileArn !== undefined &&
        input.IamInstanceProfileArn !== null && { IamInstanceProfileArn: input.IamInstanceProfileArn })), (input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId })), (input.IpV4Addresses !== undefined &&
        input.IpV4Addresses !== null && {
        IpV4Addresses: serializeAws_restJson1StringList(input.IpV4Addresses, context),
    })), (input.IpV6Addresses !== undefined &&
        input.IpV6Addresses !== null && {
        IpV6Addresses: serializeAws_restJson1StringList(input.IpV6Addresses, context),
    })), (input.KeyName !== undefined && input.KeyName !== null && { KeyName: input.KeyName })), (input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt })), (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsEc2NetworkAclAssociation = function (input, context) {
    return __assign(__assign(__assign({}, (input.NetworkAclAssociationId !== undefined &&
        input.NetworkAclAssociationId !== null && { NetworkAclAssociationId: input.NetworkAclAssociationId })), (input.NetworkAclId !== undefined && input.NetworkAclId !== null && { NetworkAclId: input.NetworkAclId })), (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }));
};
var serializeAws_restJson1AwsEc2NetworkAclAssociationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
};
var serializeAws_restJson1AwsEc2NetworkAclDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Associations !== undefined &&
        input.Associations !== null && {
        Associations: serializeAws_restJson1AwsEc2NetworkAclAssociationList(input.Associations, context),
    })), (input.Entries !== undefined &&
        input.Entries !== null && { Entries: serializeAws_restJson1AwsEc2NetworkAclEntryList(input.Entries, context) })), (input.IsDefault !== undefined && input.IsDefault !== null && { IsDefault: input.IsDefault })), (input.NetworkAclId !== undefined && input.NetworkAclId !== null && { NetworkAclId: input.NetworkAclId })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsEc2NetworkAclEntry = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock })), (input.Egress !== undefined && input.Egress !== null && { Egress: input.Egress })), (input.IcmpTypeCode !== undefined &&
        input.IcmpTypeCode !== null && { IcmpTypeCode: serializeAws_restJson1IcmpTypeCode(input.IcmpTypeCode, context) })), (input.Ipv6CidrBlock !== undefined && input.Ipv6CidrBlock !== null && { Ipv6CidrBlock: input.Ipv6CidrBlock })), (input.PortRange !== undefined &&
        input.PortRange !== null && { PortRange: serializeAws_restJson1PortRangeFromTo(input.PortRange, context) })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.RuleAction !== undefined && input.RuleAction !== null && { RuleAction: input.RuleAction })), (input.RuleNumber !== undefined && input.RuleNumber !== null && { RuleNumber: input.RuleNumber }));
};
var serializeAws_restJson1AwsEc2NetworkAclEntryList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
};
var serializeAws_restJson1AwsEc2NetworkInterfaceAttachment = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttachTime !== undefined && input.AttachTime !== null && { AttachTime: input.AttachTime })), (input.AttachmentId !== undefined && input.AttachmentId !== null && { AttachmentId: input.AttachmentId })), (input.DeleteOnTermination !== undefined &&
        input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination })), (input.DeviceIndex !== undefined && input.DeviceIndex !== null && { DeviceIndex: input.DeviceIndex })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.InstanceOwnerId !== undefined &&
        input.InstanceOwnerId !== null && { InstanceOwnerId: input.InstanceOwnerId })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsEc2NetworkInterfaceDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attachment !== undefined &&
        input.Attachment !== null && {
        Attachment: serializeAws_restJson1AwsEc2NetworkInterfaceAttachment(input.Attachment, context),
    })), (input.IpV6Addresses !== undefined &&
        input.IpV6Addresses !== null && {
        IpV6Addresses: serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(input.IpV6Addresses, context),
    })), (input.NetworkInterfaceId !== undefined &&
        input.NetworkInterfaceId !== null && { NetworkInterfaceId: input.NetworkInterfaceId })), (input.PrivateIpAddresses !== undefined &&
        input.PrivateIpAddresses !== null && {
        PrivateIpAddresses: serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(input.PrivateIpAddresses, context),
    })), (input.PublicDnsName !== undefined && input.PublicDnsName !== null && { PublicDnsName: input.PublicDnsName })), (input.PublicIp !== undefined && input.PublicIp !== null && { PublicIp: input.PublicIp })), (input.SecurityGroups !== undefined &&
        input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(input.SecurityGroups, context),
    })), (input.SourceDestCheck !== undefined &&
        input.SourceDestCheck !== null && { SourceDestCheck: input.SourceDestCheck }));
};
var serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = function (input, context) {
    return __assign({}, (input.IpV6Address !== undefined && input.IpV6Address !== null && { IpV6Address: input.IpV6Address }));
};
var serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
};
var serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = function (input, context) {
    return __assign(__assign({}, (input.PrivateDnsName !== undefined &&
        input.PrivateDnsName !== null && { PrivateDnsName: input.PrivateDnsName })), (input.PrivateIpAddress !== undefined &&
        input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress }));
};
var serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
};
var serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = function (input, context) {
    return __assign(__assign({}, (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }));
};
var serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SecurityGroupDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.IpPermissions !== undefined &&
        input.IpPermissions !== null && {
        IpPermissions: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(input.IpPermissions, context),
    })), (input.IpPermissionsEgress !== undefined &&
        input.IpPermissionsEgress !== null && {
        IpPermissionsEgress: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(input.IpPermissionsEgress, context),
    })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsEc2SecurityGroupIpPermission = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.FromPort !== undefined && input.FromPort !== null && { FromPort: input.FromPort })), (input.IpProtocol !== undefined && input.IpProtocol !== null && { IpProtocol: input.IpProtocol })), (input.IpRanges !== undefined &&
        input.IpRanges !== null && {
        IpRanges: serializeAws_restJson1AwsEc2SecurityGroupIpRangeList(input.IpRanges, context),
    })), (input.Ipv6Ranges !== undefined &&
        input.Ipv6Ranges !== null && {
        Ipv6Ranges: serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(input.Ipv6Ranges, context),
    })), (input.PrefixListIds !== undefined &&
        input.PrefixListIds !== null && {
        PrefixListIds: serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(input.PrefixListIds, context),
    })), (input.ToPort !== undefined && input.ToPort !== null && { ToPort: input.ToPort })), (input.UserIdGroupPairs !== undefined &&
        input.UserIdGroupPairs !== null && {
        UserIdGroupPairs: serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(input.UserIdGroupPairs, context),
    }));
};
var serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SecurityGroupIpRange = function (input, context) {
    return __assign({}, (input.CidrIp !== undefined && input.CidrIp !== null && { CidrIp: input.CidrIp }));
};
var serializeAws_restJson1AwsEc2SecurityGroupIpRangeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SecurityGroupIpv6Range = function (input, context) {
    return __assign({}, (input.CidrIpv6 !== undefined && input.CidrIpv6 !== null && { CidrIpv6: input.CidrIpv6 }));
};
var serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SecurityGroupPrefixListId = function (input, context) {
    return __assign({}, (input.PrefixListId !== undefined && input.PrefixListId !== null && { PrefixListId: input.PrefixListId }));
};
var serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.PeeringStatus !== undefined && input.PeeringStatus !== null && { PeeringStatus: input.PeeringStatus })), (input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId })), (input.VpcPeeringConnectionId !== undefined &&
        input.VpcPeeringConnectionId !== null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }));
};
var serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
};
var serializeAws_restJson1AwsEc2SubnetDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssignIpv6AddressOnCreation !== undefined &&
        input.AssignIpv6AddressOnCreation !== null && { AssignIpv6AddressOnCreation: input.AssignIpv6AddressOnCreation })), (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.AvailabilityZoneId !== undefined &&
        input.AvailabilityZoneId !== null && { AvailabilityZoneId: input.AvailabilityZoneId })), (input.AvailableIpAddressCount !== undefined &&
        input.AvailableIpAddressCount !== null && { AvailableIpAddressCount: input.AvailableIpAddressCount })), (input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock })), (input.DefaultForAz !== undefined && input.DefaultForAz !== null && { DefaultForAz: input.DefaultForAz })), (input.Ipv6CidrBlockAssociationSet !== undefined &&
        input.Ipv6CidrBlockAssociationSet !== null && {
        Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(input.Ipv6CidrBlockAssociationSet, context),
    })), (input.MapPublicIpOnLaunch !== undefined &&
        input.MapPublicIpOnLaunch !== null && { MapPublicIpOnLaunch: input.MapPublicIpOnLaunch })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId })), (input.State !== undefined && input.State !== null && { State: input.State })), (input.SubnetArn !== undefined && input.SubnetArn !== null && { SubnetArn: input.SubnetArn })), (input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsEc2VolumeAttachment = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AttachTime !== undefined && input.AttachTime !== null && { AttachTime: input.AttachTime })), (input.DeleteOnTermination !== undefined &&
        input.DeleteOnTermination !== null && { DeleteOnTermination: input.DeleteOnTermination })), (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsEc2VolumeAttachmentList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
};
var serializeAws_restJson1AwsEc2VolumeDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attachments !== undefined &&
        input.Attachments !== null && {
        Attachments: serializeAws_restJson1AwsEc2VolumeAttachmentList(input.Attachments, context),
    })), (input.CreateTime !== undefined && input.CreateTime !== null && { CreateTime: input.CreateTime })), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.Size !== undefined && input.Size !== null && { Size: input.Size })), (input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsEc2VpcDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CidrBlockAssociationSet !== undefined &&
        input.CidrBlockAssociationSet !== null && {
        CidrBlockAssociationSet: serializeAws_restJson1CidrBlockAssociationList(input.CidrBlockAssociationSet, context),
    })), (input.DhcpOptionsId !== undefined && input.DhcpOptionsId !== null && { DhcpOptionsId: input.DhcpOptionsId })), (input.Ipv6CidrBlockAssociationSet !== undefined &&
        input.Ipv6CidrBlockAssociationSet !== null && {
        Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(input.Ipv6CidrBlockAssociationSet, context),
    })), (input.State !== undefined && input.State !== null && { State: input.State }));
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ApplicationName !== undefined &&
        input.ApplicationName !== null && { ApplicationName: input.ApplicationName })), (input.Cname !== undefined && input.Cname !== null && { Cname: input.Cname })), (input.DateCreated !== undefined && input.DateCreated !== null && { DateCreated: input.DateCreated })), (input.DateUpdated !== undefined && input.DateUpdated !== null && { DateUpdated: input.DateUpdated })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.EndpointUrl !== undefined && input.EndpointUrl !== null && { EndpointUrl: input.EndpointUrl })), (input.EnvironmentArn !== undefined &&
        input.EnvironmentArn !== null && { EnvironmentArn: input.EnvironmentArn })), (input.EnvironmentId !== undefined && input.EnvironmentId !== null && { EnvironmentId: input.EnvironmentId })), (input.EnvironmentLinks !== undefined &&
        input.EnvironmentLinks !== null && {
        EnvironmentLinks: serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(input.EnvironmentLinks, context),
    })), (input.EnvironmentName !== undefined &&
        input.EnvironmentName !== null && { EnvironmentName: input.EnvironmentName })), (input.OptionSettings !== undefined &&
        input.OptionSettings !== null && {
        OptionSettings: serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(input.OptionSettings, context),
    })), (input.PlatformArn !== undefined && input.PlatformArn !== null && { PlatformArn: input.PlatformArn })), (input.SolutionStackName !== undefined &&
        input.SolutionStackName !== null && { SolutionStackName: input.SolutionStackName })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.Tier !== undefined &&
        input.Tier !== null && { Tier: serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(input.Tier, context) })), (input.VersionLabel !== undefined && input.VersionLabel !== null && { VersionLabel: input.VersionLabel }));
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = function (input, context) {
    return __assign(__assign({}, (input.EnvironmentName !== undefined &&
        input.EnvironmentName !== null && { EnvironmentName: input.EnvironmentName })), (input.LinkName !== undefined && input.LinkName !== null && { LinkName: input.LinkName }));
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace })), (input.OptionName !== undefined && input.OptionName !== null && { OptionName: input.OptionName })), (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
};
var serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = function (input, context) {
    return __assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1AwsElasticsearchDomainDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessPolicies !== undefined &&
        input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies })), (input.DomainEndpointOptions !== undefined &&
        input.DomainEndpointOptions !== null && {
        DomainEndpointOptions: serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(input.DomainEndpointOptions, context),
    })), (input.DomainId !== undefined && input.DomainId !== null && { DomainId: input.DomainId })), (input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName })), (input.ElasticsearchVersion !== undefined &&
        input.ElasticsearchVersion !== null && { ElasticsearchVersion: input.ElasticsearchVersion })), (input.EncryptionAtRestOptions !== undefined &&
        input.EncryptionAtRestOptions !== null && {
        EncryptionAtRestOptions: serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
    })), (input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint })), (input.Endpoints !== undefined &&
        input.Endpoints !== null && { Endpoints: serializeAws_restJson1FieldMap(input.Endpoints, context) })), (input.NodeToNodeEncryptionOptions !== undefined &&
        input.NodeToNodeEncryptionOptions !== null && {
        NodeToNodeEncryptionOptions: serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
    })), (input.VPCOptions !== undefined &&
        input.VPCOptions !== null && {
        VPCOptions: serializeAws_restJson1AwsElasticsearchDomainVPCOptions(input.VPCOptions, context),
    }));
};
var serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = function (input, context) {
    return __assign(__assign({}, (input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null && { EnforceHTTPS: input.EnforceHTTPS })), (input.TLSSecurityPolicy !== undefined &&
        input.TLSSecurityPolicy !== null && { TLSSecurityPolicy: input.TLSSecurityPolicy }));
};
var serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }));
};
var serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1AwsElasticsearchDomainVPCOptions = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1NonEmptyStringList(input.AvailabilityZones, context),
    })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) })), (input.VPCId !== undefined && input.VPCId !== null && { VPCId: input.VPCId }));
};
var serializeAws_restJson1AwsElbAppCookieStickinessPolicies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
};
var serializeAws_restJson1AwsElbAppCookieStickinessPolicy = function (input, context) {
    return __assign(__assign({}, (input.CookieName !== undefined && input.CookieName !== null && { CookieName: input.CookieName })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsElbLbCookieStickinessPolicies = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
};
var serializeAws_restJson1AwsElbLbCookieStickinessPolicy = function (input, context) {
    return __assign(__assign({}, (input.CookieExpirationPeriod !== undefined &&
        input.CookieExpirationPeriod !== null && { CookieExpirationPeriod: input.CookieExpirationPeriod })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsElbLoadBalancerAccessLog = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.EmitInterval !== undefined && input.EmitInterval !== null && { EmitInterval: input.EmitInterval })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName })), (input.S3BucketPrefix !== undefined &&
        input.S3BucketPrefix !== null && { S3BucketPrefix: input.S3BucketPrefix }));
};
var serializeAws_restJson1AwsElbLoadBalancerAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AccessLog !== undefined &&
        input.AccessLog !== null && {
        AccessLog: serializeAws_restJson1AwsElbLoadBalancerAccessLog(input.AccessLog, context),
    })), (input.ConnectionDraining !== undefined &&
        input.ConnectionDraining !== null && {
        ConnectionDraining: serializeAws_restJson1AwsElbLoadBalancerConnectionDraining(input.ConnectionDraining, context),
    })), (input.ConnectionSettings !== undefined &&
        input.ConnectionSettings !== null && {
        ConnectionSettings: serializeAws_restJson1AwsElbLoadBalancerConnectionSettings(input.ConnectionSettings, context),
    })), (input.CrossZoneLoadBalancing !== undefined &&
        input.CrossZoneLoadBalancing !== null && {
        CrossZoneLoadBalancing: serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(input.CrossZoneLoadBalancing, context),
    }));
};
var serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = function (input, context) {
    return __assign(__assign({}, (input.InstancePort !== undefined && input.InstancePort !== null && { InstancePort: input.InstancePort })), (input.PolicyNames !== undefined &&
        input.PolicyNames !== null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }));
};
var serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
};
var serializeAws_restJson1AwsElbLoadBalancerConnectionDraining = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout }));
};
var serializeAws_restJson1AwsElbLoadBalancerConnectionSettings = function (input, context) {
    return __assign({}, (input.IdleTimeout !== undefined && input.IdleTimeout !== null && { IdleTimeout: input.IdleTimeout }));
};
var serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_restJson1AwsElbLoadBalancerDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    })), (input.BackendServerDescriptions !== undefined &&
        input.BackendServerDescriptions !== null && {
        BackendServerDescriptions: serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(input.BackendServerDescriptions, context),
    })), (input.CanonicalHostedZoneName !== undefined &&
        input.CanonicalHostedZoneName !== null && { CanonicalHostedZoneName: input.CanonicalHostedZoneName })), (input.CanonicalHostedZoneNameID !== undefined &&
        input.CanonicalHostedZoneNameID !== null && { CanonicalHostedZoneNameID: input.CanonicalHostedZoneNameID })), (input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime })), (input.DnsName !== undefined && input.DnsName !== null && { DnsName: input.DnsName })), (input.HealthCheck !== undefined &&
        input.HealthCheck !== null && {
        HealthCheck: serializeAws_restJson1AwsElbLoadBalancerHealthCheck(input.HealthCheck, context),
    })), (input.Instances !== undefined &&
        input.Instances !== null && {
        Instances: serializeAws_restJson1AwsElbLoadBalancerInstances(input.Instances, context),
    })), (input.ListenerDescriptions !== undefined &&
        input.ListenerDescriptions !== null && {
        ListenerDescriptions: serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(input.ListenerDescriptions, context),
    })), (input.LoadBalancerAttributes !== undefined &&
        input.LoadBalancerAttributes !== null && {
        LoadBalancerAttributes: serializeAws_restJson1AwsElbLoadBalancerAttributes(input.LoadBalancerAttributes, context),
    })), (input.LoadBalancerName !== undefined &&
        input.LoadBalancerName !== null && { LoadBalancerName: input.LoadBalancerName })), (input.Policies !== undefined &&
        input.Policies !== null && {
        Policies: serializeAws_restJson1AwsElbLoadBalancerPolicies(input.Policies, context),
    })), (input.Scheme !== undefined && input.Scheme !== null && { Scheme: input.Scheme })), (input.SecurityGroups !== undefined &&
        input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1StringList(input.SecurityGroups, context),
    })), (input.SourceSecurityGroup !== undefined &&
        input.SourceSecurityGroup !== null && {
        SourceSecurityGroup: serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(input.SourceSecurityGroup, context),
    })), (input.Subnets !== undefined &&
        input.Subnets !== null && { Subnets: serializeAws_restJson1StringList(input.Subnets, context) })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsElbLoadBalancerHealthCheck = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.HealthyThreshold !== undefined &&
        input.HealthyThreshold !== null && { HealthyThreshold: input.HealthyThreshold })), (input.Interval !== undefined && input.Interval !== null && { Interval: input.Interval })), (input.Target !== undefined && input.Target !== null && { Target: input.Target })), (input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout })), (input.UnhealthyThreshold !== undefined &&
        input.UnhealthyThreshold !== null && { UnhealthyThreshold: input.UnhealthyThreshold }));
};
var serializeAws_restJson1AwsElbLoadBalancerInstance = function (input, context) {
    return __assign({}, (input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }));
};
var serializeAws_restJson1AwsElbLoadBalancerInstances = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
};
var serializeAws_restJson1AwsElbLoadBalancerListener = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.InstancePort !== undefined && input.InstancePort !== null && { InstancePort: input.InstancePort })), (input.InstanceProtocol !== undefined &&
        input.InstanceProtocol !== null && { InstanceProtocol: input.InstanceProtocol })), (input.LoadBalancerPort !== undefined &&
        input.LoadBalancerPort !== null && { LoadBalancerPort: input.LoadBalancerPort })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.SslCertificateId !== undefined &&
        input.SslCertificateId !== null && { SslCertificateId: input.SslCertificateId }));
};
var serializeAws_restJson1AwsElbLoadBalancerListenerDescription = function (input, context) {
    return __assign(__assign({}, (input.Listener !== undefined &&
        input.Listener !== null && {
        Listener: serializeAws_restJson1AwsElbLoadBalancerListener(input.Listener, context),
    })), (input.PolicyNames !== undefined &&
        input.PolicyNames !== null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }));
};
var serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
};
var serializeAws_restJson1AwsElbLoadBalancerPolicies = function (input, context) {
    return __assign(__assign(__assign({}, (input.AppCookieStickinessPolicies !== undefined &&
        input.AppCookieStickinessPolicies !== null && {
        AppCookieStickinessPolicies: serializeAws_restJson1AwsElbAppCookieStickinessPolicies(input.AppCookieStickinessPolicies, context),
    })), (input.LbCookieStickinessPolicies !== undefined &&
        input.LbCookieStickinessPolicies !== null && {
        LbCookieStickinessPolicies: serializeAws_restJson1AwsElbLbCookieStickinessPolicies(input.LbCookieStickinessPolicies, context),
    })), (input.OtherPolicies !== undefined &&
        input.OtherPolicies !== null && {
        OtherPolicies: serializeAws_restJson1StringList(input.OtherPolicies, context),
    }));
};
var serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = function (input, context) {
    return __assign(__assign({}, (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.OwnerAlias !== undefined && input.OwnerAlias !== null && { OwnerAlias: input.OwnerAlias }));
};
var serializeAws_restJson1AwsElbv2LoadBalancerDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1AvailabilityZones(input.AvailabilityZones, context),
    })), (input.CanonicalHostedZoneId !== undefined &&
        input.CanonicalHostedZoneId !== null && { CanonicalHostedZoneId: input.CanonicalHostedZoneId })), (input.CreatedTime !== undefined && input.CreatedTime !== null && { CreatedTime: input.CreatedTime })), (input.DNSName !== undefined && input.DNSName !== null && { DNSName: input.DNSName })), (input.IpAddressType !== undefined && input.IpAddressType !== null && { IpAddressType: input.IpAddressType })), (input.Scheme !== undefined && input.Scheme !== null && { Scheme: input.Scheme })), (input.SecurityGroups !== undefined &&
        input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
    })), (input.State !== undefined &&
        input.State !== null && { State: serializeAws_restJson1LoadBalancerState(input.State, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsIamAccessKeyDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccessKeyId !== undefined && input.AccessKeyId !== null && { AccessKeyId: input.AccessKeyId })), (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt })), (input.PrincipalId !== undefined && input.PrincipalId !== null && { PrincipalId: input.PrincipalId })), (input.PrincipalName !== undefined && input.PrincipalName !== null && { PrincipalName: input.PrincipalName })), (input.PrincipalType !== undefined && input.PrincipalType !== null && { PrincipalType: input.PrincipalType })), (input.SessionContext !== undefined &&
        input.SessionContext !== null && {
        SessionContext: serializeAws_restJson1AwsIamAccessKeySessionContext(input.SessionContext, context),
    })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_restJson1AwsIamAccessKeySessionContext = function (input, context) {
    return __assign(__assign({}, (input.Attributes !== undefined &&
        input.Attributes !== null && {
        Attributes: serializeAws_restJson1AwsIamAccessKeySessionContextAttributes(input.Attributes, context),
    })), (input.SessionIssuer !== undefined &&
        input.SessionIssuer !== null && {
        SessionIssuer: serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(input.SessionIssuer, context),
    }));
};
var serializeAws_restJson1AwsIamAccessKeySessionContextAttributes = function (input, context) {
    return __assign(__assign({}, (input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate })), (input.MfaAuthenticated !== undefined &&
        input.MfaAuthenticated !== null && { MfaAuthenticated: input.MfaAuthenticated }));
};
var serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId })), (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.PrincipalId !== undefined && input.PrincipalId !== null && { PrincipalId: input.PrincipalId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }));
};
var serializeAws_restJson1AwsIamAttachedManagedPolicy = function (input, context) {
    return __assign(__assign({}, (input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsIamAttachedManagedPolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
};
var serializeAws_restJson1AwsIamGroupDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttachedManagedPolicies !== undefined &&
        input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(input.AttachedManagedPolicies, context),
    })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId })), (input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName })), (input.GroupPolicyList !== undefined &&
        input.GroupPolicyList !== null && {
        GroupPolicyList: serializeAws_restJson1AwsIamGroupPolicyList(input.GroupPolicyList, context),
    })), (input.Path !== undefined && input.Path !== null && { Path: input.Path }));
};
var serializeAws_restJson1AwsIamGroupPolicy = function (input, context) {
    return __assign({}, (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsIamGroupPolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
};
var serializeAws_restJson1AwsIamInstanceProfile = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.InstanceProfileId !== undefined &&
        input.InstanceProfileId !== null && { InstanceProfileId: input.InstanceProfileId })), (input.InstanceProfileName !== undefined &&
        input.InstanceProfileName !== null && { InstanceProfileName: input.InstanceProfileName })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.Roles !== undefined &&
        input.Roles !== null && { Roles: serializeAws_restJson1AwsIamInstanceProfileRoles(input.Roles, context) }));
};
var serializeAws_restJson1AwsIamInstanceProfileList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
};
var serializeAws_restJson1AwsIamInstanceProfileRole = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.AssumeRolePolicyDocument !== undefined &&
        input.AssumeRolePolicyDocument !== null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.RoleId !== undefined && input.RoleId !== null && { RoleId: input.RoleId })), (input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName }));
};
var serializeAws_restJson1AwsIamInstanceProfileRoles = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
};
var serializeAws_restJson1AwsIamPermissionsBoundary = function (input, context) {
    return __assign(__assign({}, (input.PermissionsBoundaryArn !== undefined &&
        input.PermissionsBoundaryArn !== null && { PermissionsBoundaryArn: input.PermissionsBoundaryArn })), (input.PermissionsBoundaryType !== undefined &&
        input.PermissionsBoundaryType !== null && { PermissionsBoundaryType: input.PermissionsBoundaryType }));
};
var serializeAws_restJson1AwsIamPolicyDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttachmentCount !== undefined &&
        input.AttachmentCount !== null && { AttachmentCount: input.AttachmentCount })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.DefaultVersionId !== undefined &&
        input.DefaultVersionId !== null && { DefaultVersionId: input.DefaultVersionId })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IsAttachable !== undefined && input.IsAttachable !== null && { IsAttachable: input.IsAttachable })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.PermissionsBoundaryUsageCount !== undefined &&
        input.PermissionsBoundaryUsageCount !== null && {
        PermissionsBoundaryUsageCount: input.PermissionsBoundaryUsageCount,
    })), (input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId })), (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName })), (input.PolicyVersionList !== undefined &&
        input.PolicyVersionList !== null && {
        PolicyVersionList: serializeAws_restJson1AwsIamPolicyVersionList(input.PolicyVersionList, context),
    })), (input.UpdateDate !== undefined && input.UpdateDate !== null && { UpdateDate: input.UpdateDate }));
};
var serializeAws_restJson1AwsIamPolicyVersion = function (input, context) {
    return __assign(__assign(__assign({}, (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.IsDefaultVersion !== undefined &&
        input.IsDefaultVersion !== null && { IsDefaultVersion: input.IsDefaultVersion })), (input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }));
};
var serializeAws_restJson1AwsIamPolicyVersionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
};
var serializeAws_restJson1AwsIamRoleDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AssumeRolePolicyDocument !== undefined &&
        input.AssumeRolePolicyDocument !== null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument })), (input.AttachedManagedPolicies !== undefined &&
        input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(input.AttachedManagedPolicies, context),
    })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.InstanceProfileList !== undefined &&
        input.InstanceProfileList !== null && {
        InstanceProfileList: serializeAws_restJson1AwsIamInstanceProfileList(input.InstanceProfileList, context),
    })), (input.MaxSessionDuration !== undefined &&
        input.MaxSessionDuration !== null && { MaxSessionDuration: input.MaxSessionDuration })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.PermissionsBoundary !== undefined &&
        input.PermissionsBoundary !== null && {
        PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
    })), (input.RoleId !== undefined && input.RoleId !== null && { RoleId: input.RoleId })), (input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName })), (input.RolePolicyList !== undefined &&
        input.RolePolicyList !== null && {
        RolePolicyList: serializeAws_restJson1AwsIamRolePolicyList(input.RolePolicyList, context),
    }));
};
var serializeAws_restJson1AwsIamRolePolicy = function (input, context) {
    return __assign({}, (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsIamRolePolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
};
var serializeAws_restJson1AwsIamUserDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttachedManagedPolicies !== undefined &&
        input.AttachedManagedPolicies !== null && {
        AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(input.AttachedManagedPolicies, context),
    })), (input.CreateDate !== undefined && input.CreateDate !== null && { CreateDate: input.CreateDate })), (input.GroupList !== undefined &&
        input.GroupList !== null && { GroupList: serializeAws_restJson1StringList(input.GroupList, context) })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.PermissionsBoundary !== undefined &&
        input.PermissionsBoundary !== null && {
        PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
    })), (input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId })), (input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName })), (input.UserPolicyList !== undefined &&
        input.UserPolicyList !== null && {
        UserPolicyList: serializeAws_restJson1AwsIamUserPolicyList(input.UserPolicyList, context),
    }));
};
var serializeAws_restJson1AwsIamUserPolicy = function (input, context) {
    return __assign({}, (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName }));
};
var serializeAws_restJson1AwsIamUserPolicyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
};
var serializeAws_restJson1AwsKmsKeyDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AWSAccountId !== undefined && input.AWSAccountId !== null && { AWSAccountId: input.AWSAccountId })), (input.CreationDate !== undefined && input.CreationDate !== null && { CreationDate: input.CreationDate })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId })), (input.KeyManager !== undefined && input.KeyManager !== null && { KeyManager: input.KeyManager })), (input.KeyState !== undefined && input.KeyState !== null && { KeyState: input.KeyState })), (input.Origin !== undefined && input.Origin !== null && { Origin: input.Origin }));
};
var serializeAws_restJson1AwsLambdaFunctionCode = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket })), (input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key })), (input.S3ObjectVersion !== undefined &&
        input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: input.ZipFile }));
};
var serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = function (input, context) {
    return __assign({}, (input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }));
};
var serializeAws_restJson1AwsLambdaFunctionDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Code !== undefined &&
        input.Code !== null && { Code: serializeAws_restJson1AwsLambdaFunctionCode(input.Code, context) })), (input.CodeSha256 !== undefined && input.CodeSha256 !== null && { CodeSha256: input.CodeSha256 })), (input.DeadLetterConfig !== undefined &&
        input.DeadLetterConfig !== null && {
        DeadLetterConfig: serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(input.DeadLetterConfig, context),
    })), (input.Environment !== undefined &&
        input.Environment !== null && {
        Environment: serializeAws_restJson1AwsLambdaFunctionEnvironment(input.Environment, context),
    })), (input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName })), (input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler })), (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn })), (input.LastModified !== undefined && input.LastModified !== null && { LastModified: input.LastModified })), (input.Layers !== undefined &&
        input.Layers !== null && { Layers: serializeAws_restJson1AwsLambdaFunctionLayerList(input.Layers, context) })), (input.MasterArn !== undefined && input.MasterArn !== null && { MasterArn: input.MasterArn })), (input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime })), (input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout })), (input.TracingConfig !== undefined &&
        input.TracingConfig !== null && {
        TracingConfig: serializeAws_restJson1AwsLambdaFunctionTracingConfig(input.TracingConfig, context),
    })), (input.Version !== undefined && input.Version !== null && { Version: input.Version })), (input.VpcConfig !== undefined &&
        input.VpcConfig !== null && {
        VpcConfig: serializeAws_restJson1AwsLambdaFunctionVpcConfig(input.VpcConfig, context),
    }));
};
var serializeAws_restJson1AwsLambdaFunctionEnvironment = function (input, context) {
    return __assign(__assign({}, (input.Error !== undefined &&
        input.Error !== null && { Error: serializeAws_restJson1AwsLambdaFunctionEnvironmentError(input.Error, context) })), (input.Variables !== undefined &&
        input.Variables !== null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }));
};
var serializeAws_restJson1AwsLambdaFunctionEnvironmentError = function (input, context) {
    return __assign(__assign({}, (input.ErrorCode !== undefined && input.ErrorCode !== null && { ErrorCode: input.ErrorCode })), (input.Message !== undefined && input.Message !== null && { Message: input.Message }));
};
var serializeAws_restJson1AwsLambdaFunctionLayer = function (input, context) {
    return __assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.CodeSize !== undefined && input.CodeSize !== null && { CodeSize: input.CodeSize }));
};
var serializeAws_restJson1AwsLambdaFunctionLayerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
};
var serializeAws_restJson1AwsLambdaFunctionTracingConfig = function (input, context) {
    return __assign({}, (input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }));
};
var serializeAws_restJson1AwsLambdaFunctionVpcConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsLambdaLayerVersionDetails = function (input, context) {
    return __assign(__assign(__assign({}, (input.CompatibleRuntimes !== undefined &&
        input.CompatibleRuntimes !== null && {
        CompatibleRuntimes: serializeAws_restJson1NonEmptyStringList(input.CompatibleRuntimes, context),
    })), (input.CreatedDate !== undefined && input.CreatedDate !== null && { CreatedDate: input.CreatedDate })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1AwsRdsDbClusterAssociatedRole = function (input, context) {
    return __assign(__assign({}, (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRdsDbClusterAssociatedRoles = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbClusterDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ActivityStreamStatus !== undefined &&
        input.ActivityStreamStatus !== null && { ActivityStreamStatus: input.ActivityStreamStatus })), (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AssociatedRoles !== undefined &&
        input.AssociatedRoles !== null && {
        AssociatedRoles: serializeAws_restJson1AwsRdsDbClusterAssociatedRoles(input.AssociatedRoles, context),
    })), (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    })), (input.BackupRetentionPeriod !== undefined &&
        input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod })), (input.ClusterCreateTime !== undefined &&
        input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime })), (input.CopyTagsToSnapshot !== undefined &&
        input.CopyTagsToSnapshot !== null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot })), (input.CrossAccountClone !== undefined &&
        input.CrossAccountClone !== null && { CrossAccountClone: input.CrossAccountClone })), (input.CustomEndpoints !== undefined &&
        input.CustomEndpoints !== null && {
        CustomEndpoints: serializeAws_restJson1StringList(input.CustomEndpoints, context),
    })), (input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName })), (input.DbClusterIdentifier !== undefined &&
        input.DbClusterIdentifier !== null && { DbClusterIdentifier: input.DbClusterIdentifier })), (input.DbClusterMembers !== undefined &&
        input.DbClusterMembers !== null && {
        DbClusterMembers: serializeAws_restJson1AwsRdsDbClusterMembers(input.DbClusterMembers, context),
    })), (input.DbClusterOptionGroupMemberships !== undefined &&
        input.DbClusterOptionGroupMemberships !== null && {
        DbClusterOptionGroupMemberships: serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(input.DbClusterOptionGroupMemberships, context),
    })), (input.DbClusterParameterGroup !== undefined &&
        input.DbClusterParameterGroup !== null && { DbClusterParameterGroup: input.DbClusterParameterGroup })), (input.DbClusterResourceId !== undefined &&
        input.DbClusterResourceId !== null && { DbClusterResourceId: input.DbClusterResourceId })), (input.DbSubnetGroup !== undefined && input.DbSubnetGroup !== null && { DbSubnetGroup: input.DbSubnetGroup })), (input.DeletionProtection !== undefined &&
        input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection })), (input.DomainMemberships !== undefined &&
        input.DomainMemberships !== null && {
        DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
    })), (input.EnabledCloudWatchLogsExports !== undefined &&
        input.EnabledCloudWatchLogsExports !== null && {
        EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
    })), (input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint })), (input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine })), (input.EngineMode !== undefined && input.EngineMode !== null && { EngineMode: input.EngineMode })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.HostedZoneId !== undefined && input.HostedZoneId !== null && { HostedZoneId: input.HostedZoneId })), (input.HttpEndpointEnabled !== undefined &&
        input.HttpEndpointEnabled !== null && { HttpEndpointEnabled: input.HttpEndpointEnabled })), (input.IamDatabaseAuthenticationEnabled !== undefined &&
        input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.MasterUsername !== undefined &&
        input.MasterUsername !== null && { MasterUsername: input.MasterUsername })), (input.MultiAz !== undefined && input.MultiAz !== null && { MultiAz: input.MultiAz })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.PreferredBackupWindow !== undefined &&
        input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.ReadReplicaIdentifiers !== undefined &&
        input.ReadReplicaIdentifiers !== null && {
        ReadReplicaIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaIdentifiers, context),
    })), (input.ReaderEndpoint !== undefined &&
        input.ReaderEndpoint !== null && { ReaderEndpoint: input.ReaderEndpoint })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.StorageEncrypted !== undefined &&
        input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted })), (input.VpcSecurityGroups !== undefined &&
        input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
    }));
};
var serializeAws_restJson1AwsRdsDbClusterMember = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DbClusterParameterGroupStatus !== undefined &&
        input.DbClusterParameterGroupStatus !== null && {
        DbClusterParameterGroupStatus: input.DbClusterParameterGroupStatus,
    })), (input.DbInstanceIdentifier !== undefined &&
        input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier })), (input.IsClusterWriter !== undefined &&
        input.IsClusterWriter !== null && { IsClusterWriter: input.IsClusterWriter })), (input.PromotionTier !== undefined && input.PromotionTier !== null && { PromotionTier: input.PromotionTier }));
};
var serializeAws_restJson1AwsRdsDbClusterMembers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = function (input, context) {
    return __assign(__assign({}, (input.DbClusterOptionGroupName !== undefined &&
        input.DbClusterOptionGroupName !== null && { DbClusterOptionGroupName: input.DbClusterOptionGroupName })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbClusterSnapshotDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    })), (input.ClusterCreateTime !== undefined &&
        input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime })), (input.DbClusterIdentifier !== undefined &&
        input.DbClusterIdentifier !== null && { DbClusterIdentifier: input.DbClusterIdentifier })), (input.DbClusterSnapshotIdentifier !== undefined &&
        input.DbClusterSnapshotIdentifier !== null && { DbClusterSnapshotIdentifier: input.DbClusterSnapshotIdentifier })), (input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.IamDatabaseAuthenticationEnabled !== undefined &&
        input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel })), (input.MasterUsername !== undefined &&
        input.MasterUsername !== null && { MasterUsername: input.MasterUsername })), (input.PercentProgress !== undefined &&
        input.PercentProgress !== null && { PercentProgress: input.PercentProgress })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.SnapshotCreateTime !== undefined &&
        input.SnapshotCreateTime !== null && { SnapshotCreateTime: input.SnapshotCreateTime })), (input.SnapshotType !== undefined && input.SnapshotType !== null && { SnapshotType: input.SnapshotType })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.StorageEncrypted !== undefined &&
        input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsRdsDbDomainMembership = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.Fqdn !== undefined && input.Fqdn !== null && { Fqdn: input.Fqdn })), (input.IamRoleName !== undefined && input.IamRoleName !== null && { IamRoleName: input.IamRoleName })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRdsDbDomainMemberships = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbInstanceAssociatedRole = function (input, context) {
    return __assign(__assign(__assign({}, (input.FeatureName !== undefined && input.FeatureName !== null && { FeatureName: input.FeatureName })), (input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbInstanceDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AssociatedRoles !== undefined &&
        input.AssociatedRoles !== null && {
        AssociatedRoles: serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(input.AssociatedRoles, context),
    })), (input.AutoMinorVersionUpgrade !== undefined &&
        input.AutoMinorVersionUpgrade !== null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade })), (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.BackupRetentionPeriod !== undefined &&
        input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod })), (input.CACertificateIdentifier !== undefined &&
        input.CACertificateIdentifier !== null && { CACertificateIdentifier: input.CACertificateIdentifier })), (input.CharacterSetName !== undefined &&
        input.CharacterSetName !== null && { CharacterSetName: input.CharacterSetName })), (input.CopyTagsToSnapshot !== undefined &&
        input.CopyTagsToSnapshot !== null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot })), (input.DBClusterIdentifier !== undefined &&
        input.DBClusterIdentifier !== null && { DBClusterIdentifier: input.DBClusterIdentifier })), (input.DBInstanceClass !== undefined &&
        input.DBInstanceClass !== null && { DBInstanceClass: input.DBInstanceClass })), (input.DBInstanceIdentifier !== undefined &&
        input.DBInstanceIdentifier !== null && { DBInstanceIdentifier: input.DBInstanceIdentifier })), (input.DBName !== undefined && input.DBName !== null && { DBName: input.DBName })), (input.DbInstancePort !== undefined &&
        input.DbInstancePort !== null && { DbInstancePort: input.DbInstancePort })), (input.DbInstanceStatus !== undefined &&
        input.DbInstanceStatus !== null && { DbInstanceStatus: input.DbInstanceStatus })), (input.DbParameterGroups !== undefined &&
        input.DbParameterGroups !== null && {
        DbParameterGroups: serializeAws_restJson1AwsRdsDbParameterGroups(input.DbParameterGroups, context),
    })), (input.DbSecurityGroups !== undefined &&
        input.DbSecurityGroups !== null && {
        DbSecurityGroups: serializeAws_restJson1StringList(input.DbSecurityGroups, context),
    })), (input.DbSubnetGroup !== undefined &&
        input.DbSubnetGroup !== null && {
        DbSubnetGroup: serializeAws_restJson1AwsRdsDbSubnetGroup(input.DbSubnetGroup, context),
    })), (input.DbiResourceId !== undefined && input.DbiResourceId !== null && { DbiResourceId: input.DbiResourceId })), (input.DeletionProtection !== undefined &&
        input.DeletionProtection !== null && { DeletionProtection: input.DeletionProtection })), (input.DomainMemberships !== undefined &&
        input.DomainMemberships !== null && {
        DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
    })), (input.EnabledCloudWatchLogsExports !== undefined &&
        input.EnabledCloudWatchLogsExports !== null && {
        EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
    })), (input.Endpoint !== undefined &&
        input.Endpoint !== null && { Endpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.Endpoint, context) })), (input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.EnhancedMonitoringResourceArn !== undefined &&
        input.EnhancedMonitoringResourceArn !== null && {
        EnhancedMonitoringResourceArn: input.EnhancedMonitoringResourceArn,
    })), (input.IAMDatabaseAuthenticationEnabled !== undefined &&
        input.IAMDatabaseAuthenticationEnabled !== null && {
        IAMDatabaseAuthenticationEnabled: input.IAMDatabaseAuthenticationEnabled,
    })), (input.InstanceCreateTime !== undefined &&
        input.InstanceCreateTime !== null && { InstanceCreateTime: input.InstanceCreateTime })), (input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LatestRestorableTime !== undefined &&
        input.LatestRestorableTime !== null && { LatestRestorableTime: input.LatestRestorableTime })), (input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel })), (input.ListenerEndpoint !== undefined &&
        input.ListenerEndpoint !== null && {
        ListenerEndpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.ListenerEndpoint, context),
    })), (input.MasterUsername !== undefined &&
        input.MasterUsername !== null && { MasterUsername: input.MasterUsername })), (input.MaxAllocatedStorage !== undefined &&
        input.MaxAllocatedStorage !== null && { MaxAllocatedStorage: input.MaxAllocatedStorage })), (input.MonitoringInterval !== undefined &&
        input.MonitoringInterval !== null && { MonitoringInterval: input.MonitoringInterval })), (input.MonitoringRoleArn !== undefined &&
        input.MonitoringRoleArn !== null && { MonitoringRoleArn: input.MonitoringRoleArn })), (input.MultiAz !== undefined && input.MultiAz !== null && { MultiAz: input.MultiAz })), (input.OptionGroupMemberships !== undefined &&
        input.OptionGroupMemberships !== null && {
        OptionGroupMemberships: serializeAws_restJson1AwsRdsDbOptionGroupMemberships(input.OptionGroupMemberships, context),
    })), (input.PendingModifiedValues !== undefined &&
        input.PendingModifiedValues !== null && {
        PendingModifiedValues: serializeAws_restJson1AwsRdsDbPendingModifiedValues(input.PendingModifiedValues, context),
    })), (input.PerformanceInsightsEnabled !== undefined &&
        input.PerformanceInsightsEnabled !== null && { PerformanceInsightsEnabled: input.PerformanceInsightsEnabled })), (input.PerformanceInsightsKmsKeyId !== undefined &&
        input.PerformanceInsightsKmsKeyId !== null && { PerformanceInsightsKmsKeyId: input.PerformanceInsightsKmsKeyId })), (input.PerformanceInsightsRetentionPeriod !== undefined &&
        input.PerformanceInsightsRetentionPeriod !== null && {
        PerformanceInsightsRetentionPeriod: input.PerformanceInsightsRetentionPeriod,
    })), (input.PreferredBackupWindow !== undefined &&
        input.PreferredBackupWindow !== null && { PreferredBackupWindow: input.PreferredBackupWindow })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.ProcessorFeatures !== undefined &&
        input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    })), (input.PromotionTier !== undefined && input.PromotionTier !== null && { PromotionTier: input.PromotionTier })), (input.PubliclyAccessible !== undefined &&
        input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible })), (input.ReadReplicaDBClusterIdentifiers !== undefined &&
        input.ReadReplicaDBClusterIdentifiers !== null && {
        ReadReplicaDBClusterIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaDBClusterIdentifiers, context),
    })), (input.ReadReplicaDBInstanceIdentifiers !== undefined &&
        input.ReadReplicaDBInstanceIdentifiers !== null && {
        ReadReplicaDBInstanceIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaDBInstanceIdentifiers, context),
    })), (input.ReadReplicaSourceDBInstanceIdentifier !== undefined &&
        input.ReadReplicaSourceDBInstanceIdentifier !== null && {
        ReadReplicaSourceDBInstanceIdentifier: input.ReadReplicaSourceDBInstanceIdentifier,
    })), (input.SecondaryAvailabilityZone !== undefined &&
        input.SecondaryAvailabilityZone !== null && { SecondaryAvailabilityZone: input.SecondaryAvailabilityZone })), (input.StatusInfos !== undefined &&
        input.StatusInfos !== null && {
        StatusInfos: serializeAws_restJson1AwsRdsDbStatusInfos(input.StatusInfos, context),
    })), (input.StorageEncrypted !== undefined &&
        input.StorageEncrypted !== null && { StorageEncrypted: input.StorageEncrypted })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType })), (input.TdeCredentialArn !== undefined &&
        input.TdeCredentialArn !== null && { TdeCredentialArn: input.TdeCredentialArn })), (input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone })), (input.VpcSecurityGroups !== undefined &&
        input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
    }));
};
var serializeAws_restJson1AwsRdsDbInstanceEndpoint = function (input, context) {
    return __assign(__assign(__assign({}, (input.Address !== undefined && input.Address !== null && { Address: input.Address })), (input.HostedZoneId !== undefined && input.HostedZoneId !== null && { HostedZoneId: input.HostedZoneId })), (input.Port !== undefined && input.Port !== null && { Port: input.Port }));
};
var serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = function (input, context) {
    return __assign(__assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.VpcSecurityGroupId !== undefined &&
        input.VpcSecurityGroupId !== null && { VpcSecurityGroupId: input.VpcSecurityGroupId }));
};
var serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbOptionGroupMembership = function (input, context) {
    return __assign(__assign({}, (input.OptionGroupName !== undefined &&
        input.OptionGroupName !== null && { OptionGroupName: input.OptionGroupName })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRdsDbOptionGroupMemberships = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbParameterGroup = function (input, context) {
    return __assign(__assign({}, (input.DbParameterGroupName !== undefined &&
        input.DbParameterGroupName !== null && { DbParameterGroupName: input.DbParameterGroupName })), (input.ParameterApplyStatus !== undefined &&
        input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus }));
};
var serializeAws_restJson1AwsRdsDbParameterGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbPendingModifiedValues = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.BackupRetentionPeriod !== undefined &&
        input.BackupRetentionPeriod !== null && { BackupRetentionPeriod: input.BackupRetentionPeriod })), (input.CaCertificateIdentifier !== undefined &&
        input.CaCertificateIdentifier !== null && { CaCertificateIdentifier: input.CaCertificateIdentifier })), (input.DbInstanceClass !== undefined &&
        input.DbInstanceClass !== null && { DbInstanceClass: input.DbInstanceClass })), (input.DbInstanceIdentifier !== undefined &&
        input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier })), (input.DbSubnetGroupName !== undefined &&
        input.DbSubnetGroupName !== null && { DbSubnetGroupName: input.DbSubnetGroupName })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops })), (input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel })), (input.MasterUserPassword !== undefined &&
        input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword })), (input.MultiAZ !== undefined && input.MultiAZ !== null && { MultiAZ: input.MultiAZ })), (input.PendingCloudWatchLogsExports !== undefined &&
        input.PendingCloudWatchLogsExports !== null && {
        PendingCloudWatchLogsExports: serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(input.PendingCloudWatchLogsExports, context),
    })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.ProcessorFeatures !== undefined &&
        input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }));
};
var serializeAws_restJson1AwsRdsDbProcessorFeature = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1AwsRdsDbProcessorFeatures = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbSnapshotDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllocatedStorage !== undefined &&
        input.AllocatedStorage !== null && { AllocatedStorage: input.AllocatedStorage })), (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.DbInstanceIdentifier !== undefined &&
        input.DbInstanceIdentifier !== null && { DbInstanceIdentifier: input.DbInstanceIdentifier })), (input.DbSnapshotIdentifier !== undefined &&
        input.DbSnapshotIdentifier !== null && { DbSnapshotIdentifier: input.DbSnapshotIdentifier })), (input.DbiResourceId !== undefined && input.DbiResourceId !== null && { DbiResourceId: input.DbiResourceId })), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted })), (input.Engine !== undefined && input.Engine !== null && { Engine: input.Engine })), (input.EngineVersion !== undefined && input.EngineVersion !== null && { EngineVersion: input.EngineVersion })), (input.IamDatabaseAuthenticationEnabled !== undefined &&
        input.IamDatabaseAuthenticationEnabled !== null && {
        IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    })), (input.InstanceCreateTime !== undefined &&
        input.InstanceCreateTime !== null && { InstanceCreateTime: input.InstanceCreateTime })), (input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.LicenseModel !== undefined && input.LicenseModel !== null && { LicenseModel: input.LicenseModel })), (input.MasterUsername !== undefined &&
        input.MasterUsername !== null && { MasterUsername: input.MasterUsername })), (input.OptionGroupName !== undefined &&
        input.OptionGroupName !== null && { OptionGroupName: input.OptionGroupName })), (input.PercentProgress !== undefined &&
        input.PercentProgress !== null && { PercentProgress: input.PercentProgress })), (input.Port !== undefined && input.Port !== null && { Port: input.Port })), (input.ProcessorFeatures !== undefined &&
        input.ProcessorFeatures !== null && {
        ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    })), (input.SnapshotCreateTime !== undefined &&
        input.SnapshotCreateTime !== null && { SnapshotCreateTime: input.SnapshotCreateTime })), (input.SnapshotType !== undefined && input.SnapshotType !== null && { SnapshotType: input.SnapshotType })), (input.SourceDbSnapshotIdentifier !== undefined &&
        input.SourceDbSnapshotIdentifier !== null && { SourceDbSnapshotIdentifier: input.SourceDbSnapshotIdentifier })), (input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType })), (input.TdeCredentialArn !== undefined &&
        input.TdeCredentialArn !== null && { TdeCredentialArn: input.TdeCredentialArn })), (input.Timezone !== undefined && input.Timezone !== null && { Timezone: input.Timezone })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsRdsDbStatusInfo = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Message !== undefined && input.Message !== null && { Message: input.Message })), (input.Normal !== undefined && input.Normal !== null && { Normal: input.Normal })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.StatusType !== undefined && input.StatusType !== null && { StatusType: input.StatusType }));
};
var serializeAws_restJson1AwsRdsDbStatusInfos = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
};
var serializeAws_restJson1AwsRdsDbSubnetGroup = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DbSubnetGroupArn !== undefined &&
        input.DbSubnetGroupArn !== null && { DbSubnetGroupArn: input.DbSubnetGroupArn })), (input.DbSubnetGroupDescription !== undefined &&
        input.DbSubnetGroupDescription !== null && { DbSubnetGroupDescription: input.DbSubnetGroupDescription })), (input.DbSubnetGroupName !== undefined &&
        input.DbSubnetGroupName !== null && { DbSubnetGroupName: input.DbSubnetGroupName })), (input.SubnetGroupStatus !== undefined &&
        input.SubnetGroupStatus !== null && { SubnetGroupStatus: input.SubnetGroupStatus })), (input.Subnets !== undefined &&
        input.Subnets !== null && { Subnets: serializeAws_restJson1AwsRdsDbSubnetGroupSubnets(input.Subnets, context) })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }));
};
var serializeAws_restJson1AwsRdsDbSubnetGroupSubnet = function (input, context) {
    return __assign(__assign(__assign({}, (input.SubnetAvailabilityZone !== undefined &&
        input.SubnetAvailabilityZone !== null && {
        SubnetAvailabilityZone: serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(input.SubnetAvailabilityZone, context),
    })), (input.SubnetIdentifier !== undefined &&
        input.SubnetIdentifier !== null && { SubnetIdentifier: input.SubnetIdentifier })), (input.SubnetStatus !== undefined && input.SubnetStatus !== null && { SubnetStatus: input.SubnetStatus }));
};
var serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1AwsRdsDbSubnetGroupSubnets = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
};
var serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = function (input, context) {
    return __assign(__assign({}, (input.LogTypesToDisable !== undefined &&
        input.LogTypesToDisable !== null && {
        LogTypesToDisable: serializeAws_restJson1StringList(input.LogTypesToDisable, context),
    })), (input.LogTypesToEnable !== undefined &&
        input.LogTypesToEnable !== null && {
        LogTypesToEnable: serializeAws_restJson1StringList(input.LogTypesToEnable, context),
    }));
};
var serializeAws_restJson1AwsRedshiftClusterClusterNode = function (input, context) {
    return __assign(__assign(__assign({}, (input.NodeRole !== undefined && input.NodeRole !== null && { NodeRole: input.NodeRole })), (input.PrivateIpAddress !== undefined &&
        input.PrivateIpAddress !== null && { PrivateIpAddress: input.PrivateIpAddress })), (input.PublicIpAddress !== undefined &&
        input.PublicIpAddress !== null && { PublicIpAddress: input.PublicIpAddress }));
};
var serializeAws_restJson1AwsRedshiftClusterClusterNodes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClusterParameterStatusList !== undefined &&
        input.ClusterParameterStatusList !== null && {
        ClusterParameterStatusList: serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(input.ClusterParameterStatusList, context),
    })), (input.ParameterApplyStatus !== undefined &&
        input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus })), (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }));
};
var serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = function (input, context) {
    return __assign(__assign(__assign({}, (input.ParameterApplyErrorDescription !== undefined &&
        input.ParameterApplyErrorDescription !== null && {
        ParameterApplyErrorDescription: input.ParameterApplyErrorDescription,
    })), (input.ParameterApplyStatus !== undefined &&
        input.ParameterApplyStatus !== null && { ParameterApplyStatus: input.ParameterApplyStatus })), (input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName }));
};
var serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = function (input, context) {
    return __assign(__assign({}, (input.ClusterSecurityGroupName !== undefined &&
        input.ClusterSecurityGroupName !== null && { ClusterSecurityGroupName: input.ClusterSecurityGroupName })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DestinationRegion !== undefined &&
        input.DestinationRegion !== null && { DestinationRegion: input.DestinationRegion })), (input.ManualSnapshotRetentionPeriod !== undefined &&
        input.ManualSnapshotRetentionPeriod !== null && {
        ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
    })), (input.RetentionPeriod !== undefined &&
        input.RetentionPeriod !== null && { RetentionPeriod: input.RetentionPeriod })), (input.SnapshotCopyGrantName !== undefined &&
        input.SnapshotCopyGrantName !== null && { SnapshotCopyGrantName: input.SnapshotCopyGrantName }));
};
var serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = function (input, context) {
    return __assign(__assign(__assign({}, (input.DeferMaintenanceEndTime !== undefined &&
        input.DeferMaintenanceEndTime !== null && { DeferMaintenanceEndTime: input.DeferMaintenanceEndTime })), (input.DeferMaintenanceIdentifier !== undefined &&
        input.DeferMaintenanceIdentifier !== null && { DeferMaintenanceIdentifier: input.DeferMaintenanceIdentifier })), (input.DeferMaintenanceStartTime !== undefined &&
        input.DeferMaintenanceStartTime !== null && { DeferMaintenanceStartTime: input.DeferMaintenanceStartTime }));
};
var serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AllowVersionUpgrade !== undefined &&
        input.AllowVersionUpgrade !== null && { AllowVersionUpgrade: input.AllowVersionUpgrade })), (input.AutomatedSnapshotRetentionPeriod !== undefined &&
        input.AutomatedSnapshotRetentionPeriod !== null && {
        AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
    })), (input.AvailabilityZone !== undefined &&
        input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone })), (input.ClusterAvailabilityStatus !== undefined &&
        input.ClusterAvailabilityStatus !== null && { ClusterAvailabilityStatus: input.ClusterAvailabilityStatus })), (input.ClusterCreateTime !== undefined &&
        input.ClusterCreateTime !== null && { ClusterCreateTime: input.ClusterCreateTime })), (input.ClusterIdentifier !== undefined &&
        input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier })), (input.ClusterNodes !== undefined &&
        input.ClusterNodes !== null && {
        ClusterNodes: serializeAws_restJson1AwsRedshiftClusterClusterNodes(input.ClusterNodes, context),
    })), (input.ClusterParameterGroups !== undefined &&
        input.ClusterParameterGroups !== null && {
        ClusterParameterGroups: serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(input.ClusterParameterGroups, context),
    })), (input.ClusterPublicKey !== undefined &&
        input.ClusterPublicKey !== null && { ClusterPublicKey: input.ClusterPublicKey })), (input.ClusterRevisionNumber !== undefined &&
        input.ClusterRevisionNumber !== null && { ClusterRevisionNumber: input.ClusterRevisionNumber })), (input.ClusterSecurityGroups !== undefined &&
        input.ClusterSecurityGroups !== null && {
        ClusterSecurityGroups: serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(input.ClusterSecurityGroups, context),
    })), (input.ClusterSnapshotCopyStatus !== undefined &&
        input.ClusterSnapshotCopyStatus !== null && {
        ClusterSnapshotCopyStatus: serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(input.ClusterSnapshotCopyStatus, context),
    })), (input.ClusterStatus !== undefined && input.ClusterStatus !== null && { ClusterStatus: input.ClusterStatus })), (input.ClusterSubnetGroupName !== undefined &&
        input.ClusterSubnetGroupName !== null && { ClusterSubnetGroupName: input.ClusterSubnetGroupName })), (input.ClusterVersion !== undefined &&
        input.ClusterVersion !== null && { ClusterVersion: input.ClusterVersion })), (input.DBName !== undefined && input.DBName !== null && { DBName: input.DBName })), (input.DeferredMaintenanceWindows !== undefined &&
        input.DeferredMaintenanceWindows !== null && {
        DeferredMaintenanceWindows: serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(input.DeferredMaintenanceWindows, context),
    })), (input.ElasticIpStatus !== undefined &&
        input.ElasticIpStatus !== null && {
        ElasticIpStatus: serializeAws_restJson1AwsRedshiftClusterElasticIpStatus(input.ElasticIpStatus, context),
    })), (input.ElasticResizeNumberOfNodeOptions !== undefined &&
        input.ElasticResizeNumberOfNodeOptions !== null && {
        ElasticResizeNumberOfNodeOptions: input.ElasticResizeNumberOfNodeOptions,
    })), (input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted })), (input.Endpoint !== undefined &&
        input.Endpoint !== null && {
        Endpoint: serializeAws_restJson1AwsRedshiftClusterEndpoint(input.Endpoint, context),
    })), (input.EnhancedVpcRouting !== undefined &&
        input.EnhancedVpcRouting !== null && { EnhancedVpcRouting: input.EnhancedVpcRouting })), (input.ExpectedNextSnapshotScheduleTime !== undefined &&
        input.ExpectedNextSnapshotScheduleTime !== null && {
        ExpectedNextSnapshotScheduleTime: input.ExpectedNextSnapshotScheduleTime,
    })), (input.ExpectedNextSnapshotScheduleTimeStatus !== undefined &&
        input.ExpectedNextSnapshotScheduleTimeStatus !== null && {
        ExpectedNextSnapshotScheduleTimeStatus: input.ExpectedNextSnapshotScheduleTimeStatus,
    })), (input.HsmStatus !== undefined &&
        input.HsmStatus !== null && {
        HsmStatus: serializeAws_restJson1AwsRedshiftClusterHsmStatus(input.HsmStatus, context),
    })), (input.IamRoles !== undefined &&
        input.IamRoles !== null && {
        IamRoles: serializeAws_restJson1AwsRedshiftClusterIamRoles(input.IamRoles, context),
    })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.MaintenanceTrackName !== undefined &&
        input.MaintenanceTrackName !== null && { MaintenanceTrackName: input.MaintenanceTrackName })), (input.ManualSnapshotRetentionPeriod !== undefined &&
        input.ManualSnapshotRetentionPeriod !== null && {
        ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
    })), (input.MasterUsername !== undefined &&
        input.MasterUsername !== null && { MasterUsername: input.MasterUsername })), (input.NextMaintenanceWindowStartTime !== undefined &&
        input.NextMaintenanceWindowStartTime !== null && {
        NextMaintenanceWindowStartTime: input.NextMaintenanceWindowStartTime,
    })), (input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType })), (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes })), (input.PendingActions !== undefined &&
        input.PendingActions !== null && {
        PendingActions: serializeAws_restJson1StringList(input.PendingActions, context),
    })), (input.PendingModifiedValues !== undefined &&
        input.PendingModifiedValues !== null && {
        PendingModifiedValues: serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(input.PendingModifiedValues, context),
    })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.PubliclyAccessible !== undefined &&
        input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible })), (input.ResizeInfo !== undefined &&
        input.ResizeInfo !== null && {
        ResizeInfo: serializeAws_restJson1AwsRedshiftClusterResizeInfo(input.ResizeInfo, context),
    })), (input.RestoreStatus !== undefined &&
        input.RestoreStatus !== null && {
        RestoreStatus: serializeAws_restJson1AwsRedshiftClusterRestoreStatus(input.RestoreStatus, context),
    })), (input.SnapshotScheduleIdentifier !== undefined &&
        input.SnapshotScheduleIdentifier !== null && { SnapshotScheduleIdentifier: input.SnapshotScheduleIdentifier })), (input.SnapshotScheduleState !== undefined &&
        input.SnapshotScheduleState !== null && { SnapshotScheduleState: input.SnapshotScheduleState })), (input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId })), (input.VpcSecurityGroups !== undefined &&
        input.VpcSecurityGroups !== null && {
        VpcSecurityGroups: serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(input.VpcSecurityGroups, context),
    }));
};
var serializeAws_restJson1AwsRedshiftClusterElasticIpStatus = function (input, context) {
    return __assign(__assign({}, (input.ElasticIp !== undefined && input.ElasticIp !== null && { ElasticIp: input.ElasticIp })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRedshiftClusterEndpoint = function (input, context) {
    return __assign(__assign({}, (input.Address !== undefined && input.Address !== null && { Address: input.Address })), (input.Port !== undefined && input.Port !== null && { Port: input.Port }));
};
var serializeAws_restJson1AwsRedshiftClusterHsmStatus = function (input, context) {
    return __assign(__assign(__assign({}, (input.HsmClientCertificateIdentifier !== undefined &&
        input.HsmClientCertificateIdentifier !== null && {
        HsmClientCertificateIdentifier: input.HsmClientCertificateIdentifier,
    })), (input.HsmConfigurationIdentifier !== undefined &&
        input.HsmConfigurationIdentifier !== null && { HsmConfigurationIdentifier: input.HsmConfigurationIdentifier })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRedshiftClusterIamRole = function (input, context) {
    return __assign(__assign({}, (input.ApplyStatus !== undefined && input.ApplyStatus !== null && { ApplyStatus: input.ApplyStatus })), (input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }));
};
var serializeAws_restJson1AwsRedshiftClusterIamRoles = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
};
var serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AutomatedSnapshotRetentionPeriod !== undefined &&
        input.AutomatedSnapshotRetentionPeriod !== null && {
        AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
    })), (input.ClusterIdentifier !== undefined &&
        input.ClusterIdentifier !== null && { ClusterIdentifier: input.ClusterIdentifier })), (input.ClusterType !== undefined && input.ClusterType !== null && { ClusterType: input.ClusterType })), (input.ClusterVersion !== undefined &&
        input.ClusterVersion !== null && { ClusterVersion: input.ClusterVersion })), (input.EncryptionType !== undefined &&
        input.EncryptionType !== null && { EncryptionType: input.EncryptionType })), (input.EnhancedVpcRouting !== undefined &&
        input.EnhancedVpcRouting !== null && { EnhancedVpcRouting: input.EnhancedVpcRouting })), (input.MaintenanceTrackName !== undefined &&
        input.MaintenanceTrackName !== null && { MaintenanceTrackName: input.MaintenanceTrackName })), (input.MasterUserPassword !== undefined &&
        input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword })), (input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType })), (input.NumberOfNodes !== undefined && input.NumberOfNodes !== null && { NumberOfNodes: input.NumberOfNodes })), (input.PubliclyAccessible !== undefined &&
        input.PubliclyAccessible !== null && { PubliclyAccessible: input.PubliclyAccessible }));
};
var serializeAws_restJson1AwsRedshiftClusterResizeInfo = function (input, context) {
    return __assign(__assign({}, (input.AllowCancelResize !== undefined &&
        input.AllowCancelResize !== null && { AllowCancelResize: input.AllowCancelResize })), (input.ResizeType !== undefined && input.ResizeType !== null && { ResizeType: input.ResizeType }));
};
var serializeAws_restJson1AwsRedshiftClusterRestoreStatus = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CurrentRestoreRateInMegaBytesPerSecond !== undefined &&
        input.CurrentRestoreRateInMegaBytesPerSecond !== null && {
        CurrentRestoreRateInMegaBytesPerSecond: input.CurrentRestoreRateInMegaBytesPerSecond,
    })), (input.ElapsedTimeInSeconds !== undefined &&
        input.ElapsedTimeInSeconds !== null && { ElapsedTimeInSeconds: input.ElapsedTimeInSeconds })), (input.EstimatedTimeToCompletionInSeconds !== undefined &&
        input.EstimatedTimeToCompletionInSeconds !== null && {
        EstimatedTimeToCompletionInSeconds: input.EstimatedTimeToCompletionInSeconds,
    })), (input.ProgressInMegaBytes !== undefined &&
        input.ProgressInMegaBytes !== null && { ProgressInMegaBytes: input.ProgressInMegaBytes })), (input.SnapshotSizeInMegaBytes !== undefined &&
        input.SnapshotSizeInMegaBytes !== null && { SnapshotSizeInMegaBytes: input.SnapshotSizeInMegaBytes })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = function (input, context) {
    return __assign(__assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.VpcSecurityGroupId !== undefined &&
        input.VpcSecurityGroupId !== null && { VpcSecurityGroupId: input.VpcSecurityGroupId }));
};
var serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
};
var serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BlockPublicAcls !== undefined &&
        input.BlockPublicAcls !== null && { BlockPublicAcls: input.BlockPublicAcls })), (input.BlockPublicPolicy !== undefined &&
        input.BlockPublicPolicy !== null && { BlockPublicPolicy: input.BlockPublicPolicy })), (input.IgnorePublicAcls !== undefined &&
        input.IgnorePublicAcls !== null && { IgnorePublicAcls: input.IgnorePublicAcls })), (input.RestrictPublicBuckets !== undefined &&
        input.RestrictPublicBuckets !== null && { RestrictPublicBuckets: input.RestrictPublicBuckets }));
};
var serializeAws_restJson1AwsS3BucketDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt })), (input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId })), (input.OwnerName !== undefined && input.OwnerName !== null && { OwnerName: input.OwnerName })), (input.PublicAccessBlockConfiguration !== undefined &&
        input.PublicAccessBlockConfiguration !== null && {
        PublicAccessBlockConfiguration: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(input.PublicAccessBlockConfiguration, context),
    })), (input.ServerSideEncryptionConfiguration !== undefined &&
        input.ServerSideEncryptionConfiguration !== null && {
        ServerSideEncryptionConfiguration: serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(input.ServerSideEncryptionConfiguration, context),
    }));
};
var serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = function (input, context) {
    return __assign(__assign({}, (input.KMSMasterKeyID !== undefined &&
        input.KMSMasterKeyID !== null && { KMSMasterKeyID: input.KMSMasterKeyID })), (input.SSEAlgorithm !== undefined && input.SSEAlgorithm !== null && { SSEAlgorithm: input.SSEAlgorithm }));
};
var serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = function (input, context) {
    return __assign({}, (input.Rules !== undefined &&
        input.Rules !== null && {
        Rules: serializeAws_restJson1AwsS3BucketServerSideEncryptionRules(input.Rules, context),
    }));
};
var serializeAws_restJson1AwsS3BucketServerSideEncryptionRule = function (input, context) {
    return __assign({}, (input.ApplyServerSideEncryptionByDefault !== undefined &&
        input.ApplyServerSideEncryptionByDefault !== null && {
        ApplyServerSideEncryptionByDefault: serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(input.ApplyServerSideEncryptionByDefault, context),
    }));
};
var serializeAws_restJson1AwsS3BucketServerSideEncryptionRules = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
};
var serializeAws_restJson1AwsS3ObjectDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType })), (input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag })), (input.LastModified !== undefined && input.LastModified !== null && { LastModified: input.LastModified })), (input.SSEKMSKeyId !== undefined && input.SSEKMSKeyId !== null && { SSEKMSKeyId: input.SSEKMSKeyId })), (input.ServerSideEncryption !== undefined &&
        input.ServerSideEncryption !== null && { ServerSideEncryption: input.ServerSideEncryption })), (input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }));
};
var serializeAws_restJson1AwsSecretsManagerSecretDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Deleted !== undefined && input.Deleted !== null && { Deleted: input.Deleted })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RotationEnabled !== undefined &&
        input.RotationEnabled !== null && { RotationEnabled: input.RotationEnabled })), (input.RotationLambdaArn !== undefined &&
        input.RotationLambdaArn !== null && { RotationLambdaArn: input.RotationLambdaArn })), (input.RotationOccurredWithinFrequency !== undefined &&
        input.RotationOccurredWithinFrequency !== null && {
        RotationOccurredWithinFrequency: input.RotationOccurredWithinFrequency,
    })), (input.RotationRules !== undefined &&
        input.RotationRules !== null && {
        RotationRules: serializeAws_restJson1AwsSecretsManagerSecretRotationRules(input.RotationRules, context),
    }));
};
var serializeAws_restJson1AwsSecretsManagerSecretRotationRules = function (input, context) {
    return __assign({}, (input.AutomaticallyAfterDays !== undefined &&
        input.AutomaticallyAfterDays !== null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }));
};
var serializeAws_restJson1AwsSecurityFinding = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Action !== undefined &&
        input.Action !== null && { Action: serializeAws_restJson1Action(input.Action, context) })), (input.AwsAccountId !== undefined && input.AwsAccountId !== null && { AwsAccountId: input.AwsAccountId })), (input.Compliance !== undefined &&
        input.Compliance !== null && { Compliance: serializeAws_restJson1Compliance(input.Compliance, context) })), (input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence })), (input.CreatedAt !== undefined && input.CreatedAt !== null && { CreatedAt: input.CreatedAt })), (input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FindingProviderFields !== undefined &&
        input.FindingProviderFields !== null && {
        FindingProviderFields: serializeAws_restJson1FindingProviderFields(input.FindingProviderFields, context),
    })), (input.FirstObservedAt !== undefined &&
        input.FirstObservedAt !== null && { FirstObservedAt: input.FirstObservedAt })), (input.GeneratorId !== undefined && input.GeneratorId !== null && { GeneratorId: input.GeneratorId })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.LastObservedAt !== undefined &&
        input.LastObservedAt !== null && { LastObservedAt: input.LastObservedAt })), (input.Malware !== undefined &&
        input.Malware !== null && { Malware: serializeAws_restJson1MalwareList(input.Malware, context) })), (input.Network !== undefined &&
        input.Network !== null && { Network: serializeAws_restJson1Network(input.Network, context) })), (input.NetworkPath !== undefined &&
        input.NetworkPath !== null && { NetworkPath: serializeAws_restJson1NetworkPathList(input.NetworkPath, context) })), (input.Note !== undefined && input.Note !== null && { Note: serializeAws_restJson1Note(input.Note, context) })), (input.PatchSummary !== undefined &&
        input.PatchSummary !== null && { PatchSummary: serializeAws_restJson1PatchSummary(input.PatchSummary, context) })), (input.Process !== undefined &&
        input.Process !== null && { Process: serializeAws_restJson1ProcessDetails(input.Process, context) })), (input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn })), (input.ProductFields !== undefined &&
        input.ProductFields !== null && { ProductFields: serializeAws_restJson1FieldMap(input.ProductFields, context) })), (input.RecordState !== undefined && input.RecordState !== null && { RecordState: input.RecordState })), (input.RelatedFindings !== undefined &&
        input.RelatedFindings !== null && {
        RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    })), (input.Remediation !== undefined &&
        input.Remediation !== null && { Remediation: serializeAws_restJson1Remediation(input.Remediation, context) })), (input.Resources !== undefined &&
        input.Resources !== null && { Resources: serializeAws_restJson1ResourceList(input.Resources, context) })), (input.SchemaVersion !== undefined && input.SchemaVersion !== null && { SchemaVersion: input.SchemaVersion })), (input.Severity !== undefined &&
        input.Severity !== null && { Severity: serializeAws_restJson1Severity(input.Severity, context) })), (input.SourceUrl !== undefined && input.SourceUrl !== null && { SourceUrl: input.SourceUrl })), (input.ThreatIntelIndicators !== undefined &&
        input.ThreatIntelIndicators !== null && {
        ThreatIntelIndicators: serializeAws_restJson1ThreatIntelIndicatorList(input.ThreatIntelIndicators, context),
    })), (input.Title !== undefined && input.Title !== null && { Title: input.Title })), (input.Types !== undefined &&
        input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) })), (input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt })), (input.UserDefinedFields !== undefined &&
        input.UserDefinedFields !== null && {
        UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
    })), (input.VerificationState !== undefined &&
        input.VerificationState !== null && { VerificationState: input.VerificationState })), (input.Vulnerabilities !== undefined &&
        input.Vulnerabilities !== null && {
        Vulnerabilities: serializeAws_restJson1VulnerabilityList(input.Vulnerabilities, context),
    })), (input.Workflow !== undefined &&
        input.Workflow !== null && { Workflow: serializeAws_restJson1Workflow(input.Workflow, context) })), (input.WorkflowState !== undefined && input.WorkflowState !== null && { WorkflowState: input.WorkflowState }));
};
var serializeAws_restJson1AwsSecurityFindingFilters = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AwsAccountId !== undefined &&
        input.AwsAccountId !== null && {
        AwsAccountId: serializeAws_restJson1StringFilterList(input.AwsAccountId, context),
    })), (input.CompanyName !== undefined &&
        input.CompanyName !== null && {
        CompanyName: serializeAws_restJson1StringFilterList(input.CompanyName, context),
    })), (input.ComplianceStatus !== undefined &&
        input.ComplianceStatus !== null && {
        ComplianceStatus: serializeAws_restJson1StringFilterList(input.ComplianceStatus, context),
    })), (input.Confidence !== undefined &&
        input.Confidence !== null && { Confidence: serializeAws_restJson1NumberFilterList(input.Confidence, context) })), (input.CreatedAt !== undefined &&
        input.CreatedAt !== null && { CreatedAt: serializeAws_restJson1DateFilterList(input.CreatedAt, context) })), (input.Criticality !== undefined &&
        input.Criticality !== null && {
        Criticality: serializeAws_restJson1NumberFilterList(input.Criticality, context),
    })), (input.Description !== undefined &&
        input.Description !== null && {
        Description: serializeAws_restJson1StringFilterList(input.Description, context),
    })), (input.FindingProviderFieldsConfidence !== undefined &&
        input.FindingProviderFieldsConfidence !== null && {
        FindingProviderFieldsConfidence: serializeAws_restJson1NumberFilterList(input.FindingProviderFieldsConfidence, context),
    })), (input.FindingProviderFieldsCriticality !== undefined &&
        input.FindingProviderFieldsCriticality !== null && {
        FindingProviderFieldsCriticality: serializeAws_restJson1NumberFilterList(input.FindingProviderFieldsCriticality, context),
    })), (input.FindingProviderFieldsRelatedFindingsId !== undefined &&
        input.FindingProviderFieldsRelatedFindingsId !== null && {
        FindingProviderFieldsRelatedFindingsId: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsRelatedFindingsId, context),
    })), (input.FindingProviderFieldsRelatedFindingsProductArn !== undefined &&
        input.FindingProviderFieldsRelatedFindingsProductArn !== null && {
        FindingProviderFieldsRelatedFindingsProductArn: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsRelatedFindingsProductArn, context),
    })), (input.FindingProviderFieldsSeverityLabel !== undefined &&
        input.FindingProviderFieldsSeverityLabel !== null && {
        FindingProviderFieldsSeverityLabel: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsSeverityLabel, context),
    })), (input.FindingProviderFieldsSeverityOriginal !== undefined &&
        input.FindingProviderFieldsSeverityOriginal !== null && {
        FindingProviderFieldsSeverityOriginal: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsSeverityOriginal, context),
    })), (input.FindingProviderFieldsTypes !== undefined &&
        input.FindingProviderFieldsTypes !== null && {
        FindingProviderFieldsTypes: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsTypes, context),
    })), (input.FirstObservedAt !== undefined &&
        input.FirstObservedAt !== null && {
        FirstObservedAt: serializeAws_restJson1DateFilterList(input.FirstObservedAt, context),
    })), (input.GeneratorId !== undefined &&
        input.GeneratorId !== null && {
        GeneratorId: serializeAws_restJson1StringFilterList(input.GeneratorId, context),
    })), (input.Id !== undefined &&
        input.Id !== null && { Id: serializeAws_restJson1StringFilterList(input.Id, context) })), (input.Keyword !== undefined &&
        input.Keyword !== null && { Keyword: serializeAws_restJson1KeywordFilterList(input.Keyword, context) })), (input.LastObservedAt !== undefined &&
        input.LastObservedAt !== null && {
        LastObservedAt: serializeAws_restJson1DateFilterList(input.LastObservedAt, context),
    })), (input.MalwareName !== undefined &&
        input.MalwareName !== null && {
        MalwareName: serializeAws_restJson1StringFilterList(input.MalwareName, context),
    })), (input.MalwarePath !== undefined &&
        input.MalwarePath !== null && {
        MalwarePath: serializeAws_restJson1StringFilterList(input.MalwarePath, context),
    })), (input.MalwareState !== undefined &&
        input.MalwareState !== null && {
        MalwareState: serializeAws_restJson1StringFilterList(input.MalwareState, context),
    })), (input.MalwareType !== undefined &&
        input.MalwareType !== null && {
        MalwareType: serializeAws_restJson1StringFilterList(input.MalwareType, context),
    })), (input.NetworkDestinationDomain !== undefined &&
        input.NetworkDestinationDomain !== null && {
        NetworkDestinationDomain: serializeAws_restJson1StringFilterList(input.NetworkDestinationDomain, context),
    })), (input.NetworkDestinationIpV4 !== undefined &&
        input.NetworkDestinationIpV4 !== null && {
        NetworkDestinationIpV4: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV4, context),
    })), (input.NetworkDestinationIpV6 !== undefined &&
        input.NetworkDestinationIpV6 !== null && {
        NetworkDestinationIpV6: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV6, context),
    })), (input.NetworkDestinationPort !== undefined &&
        input.NetworkDestinationPort !== null && {
        NetworkDestinationPort: serializeAws_restJson1NumberFilterList(input.NetworkDestinationPort, context),
    })), (input.NetworkDirection !== undefined &&
        input.NetworkDirection !== null && {
        NetworkDirection: serializeAws_restJson1StringFilterList(input.NetworkDirection, context),
    })), (input.NetworkProtocol !== undefined &&
        input.NetworkProtocol !== null && {
        NetworkProtocol: serializeAws_restJson1StringFilterList(input.NetworkProtocol, context),
    })), (input.NetworkSourceDomain !== undefined &&
        input.NetworkSourceDomain !== null && {
        NetworkSourceDomain: serializeAws_restJson1StringFilterList(input.NetworkSourceDomain, context),
    })), (input.NetworkSourceIpV4 !== undefined &&
        input.NetworkSourceIpV4 !== null && {
        NetworkSourceIpV4: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV4, context),
    })), (input.NetworkSourceIpV6 !== undefined &&
        input.NetworkSourceIpV6 !== null && {
        NetworkSourceIpV6: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV6, context),
    })), (input.NetworkSourceMac !== undefined &&
        input.NetworkSourceMac !== null && {
        NetworkSourceMac: serializeAws_restJson1StringFilterList(input.NetworkSourceMac, context),
    })), (input.NetworkSourcePort !== undefined &&
        input.NetworkSourcePort !== null && {
        NetworkSourcePort: serializeAws_restJson1NumberFilterList(input.NetworkSourcePort, context),
    })), (input.NoteText !== undefined &&
        input.NoteText !== null && { NoteText: serializeAws_restJson1StringFilterList(input.NoteText, context) })), (input.NoteUpdatedAt !== undefined &&
        input.NoteUpdatedAt !== null && {
        NoteUpdatedAt: serializeAws_restJson1DateFilterList(input.NoteUpdatedAt, context),
    })), (input.NoteUpdatedBy !== undefined &&
        input.NoteUpdatedBy !== null && {
        NoteUpdatedBy: serializeAws_restJson1StringFilterList(input.NoteUpdatedBy, context),
    })), (input.ProcessLaunchedAt !== undefined &&
        input.ProcessLaunchedAt !== null && {
        ProcessLaunchedAt: serializeAws_restJson1DateFilterList(input.ProcessLaunchedAt, context),
    })), (input.ProcessName !== undefined &&
        input.ProcessName !== null && {
        ProcessName: serializeAws_restJson1StringFilterList(input.ProcessName, context),
    })), (input.ProcessParentPid !== undefined &&
        input.ProcessParentPid !== null && {
        ProcessParentPid: serializeAws_restJson1NumberFilterList(input.ProcessParentPid, context),
    })), (input.ProcessPath !== undefined &&
        input.ProcessPath !== null && {
        ProcessPath: serializeAws_restJson1StringFilterList(input.ProcessPath, context),
    })), (input.ProcessPid !== undefined &&
        input.ProcessPid !== null && { ProcessPid: serializeAws_restJson1NumberFilterList(input.ProcessPid, context) })), (input.ProcessTerminatedAt !== undefined &&
        input.ProcessTerminatedAt !== null && {
        ProcessTerminatedAt: serializeAws_restJson1DateFilterList(input.ProcessTerminatedAt, context),
    })), (input.ProductArn !== undefined &&
        input.ProductArn !== null && { ProductArn: serializeAws_restJson1StringFilterList(input.ProductArn, context) })), (input.ProductFields !== undefined &&
        input.ProductFields !== null && {
        ProductFields: serializeAws_restJson1MapFilterList(input.ProductFields, context),
    })), (input.ProductName !== undefined &&
        input.ProductName !== null && {
        ProductName: serializeAws_restJson1StringFilterList(input.ProductName, context),
    })), (input.RecommendationText !== undefined &&
        input.RecommendationText !== null && {
        RecommendationText: serializeAws_restJson1StringFilterList(input.RecommendationText, context),
    })), (input.RecordState !== undefined &&
        input.RecordState !== null && {
        RecordState: serializeAws_restJson1StringFilterList(input.RecordState, context),
    })), (input.RelatedFindingsId !== undefined &&
        input.RelatedFindingsId !== null && {
        RelatedFindingsId: serializeAws_restJson1StringFilterList(input.RelatedFindingsId, context),
    })), (input.RelatedFindingsProductArn !== undefined &&
        input.RelatedFindingsProductArn !== null && {
        RelatedFindingsProductArn: serializeAws_restJson1StringFilterList(input.RelatedFindingsProductArn, context),
    })), (input.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
        input.ResourceAwsEc2InstanceIamInstanceProfileArn !== null && {
        ResourceAwsEc2InstanceIamInstanceProfileArn: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceIamInstanceProfileArn, context),
    })), (input.ResourceAwsEc2InstanceImageId !== undefined &&
        input.ResourceAwsEc2InstanceImageId !== null && {
        ResourceAwsEc2InstanceImageId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceImageId, context),
    })), (input.ResourceAwsEc2InstanceIpV4Addresses !== undefined &&
        input.ResourceAwsEc2InstanceIpV4Addresses !== null && {
        ResourceAwsEc2InstanceIpV4Addresses: serializeAws_restJson1IpFilterList(input.ResourceAwsEc2InstanceIpV4Addresses, context),
    })), (input.ResourceAwsEc2InstanceIpV6Addresses !== undefined &&
        input.ResourceAwsEc2InstanceIpV6Addresses !== null && {
        ResourceAwsEc2InstanceIpV6Addresses: serializeAws_restJson1IpFilterList(input.ResourceAwsEc2InstanceIpV6Addresses, context),
    })), (input.ResourceAwsEc2InstanceKeyName !== undefined &&
        input.ResourceAwsEc2InstanceKeyName !== null && {
        ResourceAwsEc2InstanceKeyName: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceKeyName, context),
    })), (input.ResourceAwsEc2InstanceLaunchedAt !== undefined &&
        input.ResourceAwsEc2InstanceLaunchedAt !== null && {
        ResourceAwsEc2InstanceLaunchedAt: serializeAws_restJson1DateFilterList(input.ResourceAwsEc2InstanceLaunchedAt, context),
    })), (input.ResourceAwsEc2InstanceSubnetId !== undefined &&
        input.ResourceAwsEc2InstanceSubnetId !== null && {
        ResourceAwsEc2InstanceSubnetId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceSubnetId, context),
    })), (input.ResourceAwsEc2InstanceType !== undefined &&
        input.ResourceAwsEc2InstanceType !== null && {
        ResourceAwsEc2InstanceType: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceType, context),
    })), (input.ResourceAwsEc2InstanceVpcId !== undefined &&
        input.ResourceAwsEc2InstanceVpcId !== null && {
        ResourceAwsEc2InstanceVpcId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceVpcId, context),
    })), (input.ResourceAwsIamAccessKeyCreatedAt !== undefined &&
        input.ResourceAwsIamAccessKeyCreatedAt !== null && {
        ResourceAwsIamAccessKeyCreatedAt: serializeAws_restJson1DateFilterList(input.ResourceAwsIamAccessKeyCreatedAt, context),
    })), (input.ResourceAwsIamAccessKeyStatus !== undefined &&
        input.ResourceAwsIamAccessKeyStatus !== null && {
        ResourceAwsIamAccessKeyStatus: serializeAws_restJson1StringFilterList(input.ResourceAwsIamAccessKeyStatus, context),
    })), (input.ResourceAwsIamAccessKeyUserName !== undefined &&
        input.ResourceAwsIamAccessKeyUserName !== null && {
        ResourceAwsIamAccessKeyUserName: serializeAws_restJson1StringFilterList(input.ResourceAwsIamAccessKeyUserName, context),
    })), (input.ResourceAwsS3BucketOwnerId !== undefined &&
        input.ResourceAwsS3BucketOwnerId !== null && {
        ResourceAwsS3BucketOwnerId: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerId, context),
    })), (input.ResourceAwsS3BucketOwnerName !== undefined &&
        input.ResourceAwsS3BucketOwnerName !== null && {
        ResourceAwsS3BucketOwnerName: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerName, context),
    })), (input.ResourceContainerImageId !== undefined &&
        input.ResourceContainerImageId !== null && {
        ResourceContainerImageId: serializeAws_restJson1StringFilterList(input.ResourceContainerImageId, context),
    })), (input.ResourceContainerImageName !== undefined &&
        input.ResourceContainerImageName !== null && {
        ResourceContainerImageName: serializeAws_restJson1StringFilterList(input.ResourceContainerImageName, context),
    })), (input.ResourceContainerLaunchedAt !== undefined &&
        input.ResourceContainerLaunchedAt !== null && {
        ResourceContainerLaunchedAt: serializeAws_restJson1DateFilterList(input.ResourceContainerLaunchedAt, context),
    })), (input.ResourceContainerName !== undefined &&
        input.ResourceContainerName !== null && {
        ResourceContainerName: serializeAws_restJson1StringFilterList(input.ResourceContainerName, context),
    })), (input.ResourceDetailsOther !== undefined &&
        input.ResourceDetailsOther !== null && {
        ResourceDetailsOther: serializeAws_restJson1MapFilterList(input.ResourceDetailsOther, context),
    })), (input.ResourceId !== undefined &&
        input.ResourceId !== null && { ResourceId: serializeAws_restJson1StringFilterList(input.ResourceId, context) })), (input.ResourcePartition !== undefined &&
        input.ResourcePartition !== null && {
        ResourcePartition: serializeAws_restJson1StringFilterList(input.ResourcePartition, context),
    })), (input.ResourceRegion !== undefined &&
        input.ResourceRegion !== null && {
        ResourceRegion: serializeAws_restJson1StringFilterList(input.ResourceRegion, context),
    })), (input.ResourceTags !== undefined &&
        input.ResourceTags !== null && {
        ResourceTags: serializeAws_restJson1MapFilterList(input.ResourceTags, context),
    })), (input.ResourceType !== undefined &&
        input.ResourceType !== null && {
        ResourceType: serializeAws_restJson1StringFilterList(input.ResourceType, context),
    })), (input.SeverityLabel !== undefined &&
        input.SeverityLabel !== null && {
        SeverityLabel: serializeAws_restJson1StringFilterList(input.SeverityLabel, context),
    })), (input.SeverityNormalized !== undefined &&
        input.SeverityNormalized !== null && {
        SeverityNormalized: serializeAws_restJson1NumberFilterList(input.SeverityNormalized, context),
    })), (input.SeverityProduct !== undefined &&
        input.SeverityProduct !== null && {
        SeverityProduct: serializeAws_restJson1NumberFilterList(input.SeverityProduct, context),
    })), (input.SourceUrl !== undefined &&
        input.SourceUrl !== null && { SourceUrl: serializeAws_restJson1StringFilterList(input.SourceUrl, context) })), (input.ThreatIntelIndicatorCategory !== undefined &&
        input.ThreatIntelIndicatorCategory !== null && {
        ThreatIntelIndicatorCategory: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorCategory, context),
    })), (input.ThreatIntelIndicatorLastObservedAt !== undefined &&
        input.ThreatIntelIndicatorLastObservedAt !== null && {
        ThreatIntelIndicatorLastObservedAt: serializeAws_restJson1DateFilterList(input.ThreatIntelIndicatorLastObservedAt, context),
    })), (input.ThreatIntelIndicatorSource !== undefined &&
        input.ThreatIntelIndicatorSource !== null && {
        ThreatIntelIndicatorSource: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorSource, context),
    })), (input.ThreatIntelIndicatorSourceUrl !== undefined &&
        input.ThreatIntelIndicatorSourceUrl !== null && {
        ThreatIntelIndicatorSourceUrl: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorSourceUrl, context),
    })), (input.ThreatIntelIndicatorType !== undefined &&
        input.ThreatIntelIndicatorType !== null && {
        ThreatIntelIndicatorType: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorType, context),
    })), (input.ThreatIntelIndicatorValue !== undefined &&
        input.ThreatIntelIndicatorValue !== null && {
        ThreatIntelIndicatorValue: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorValue, context),
    })), (input.Title !== undefined &&
        input.Title !== null && { Title: serializeAws_restJson1StringFilterList(input.Title, context) })), (input.Type !== undefined &&
        input.Type !== null && { Type: serializeAws_restJson1StringFilterList(input.Type, context) })), (input.UpdatedAt !== undefined &&
        input.UpdatedAt !== null && { UpdatedAt: serializeAws_restJson1DateFilterList(input.UpdatedAt, context) })), (input.UserDefinedFields !== undefined &&
        input.UserDefinedFields !== null && {
        UserDefinedFields: serializeAws_restJson1MapFilterList(input.UserDefinedFields, context),
    })), (input.VerificationState !== undefined &&
        input.VerificationState !== null && {
        VerificationState: serializeAws_restJson1StringFilterList(input.VerificationState, context),
    })), (input.WorkflowState !== undefined &&
        input.WorkflowState !== null && {
        WorkflowState: serializeAws_restJson1StringFilterList(input.WorkflowState, context),
    })), (input.WorkflowStatus !== undefined &&
        input.WorkflowStatus !== null && {
        WorkflowStatus: serializeAws_restJson1StringFilterList(input.WorkflowStatus, context),
    }));
};
var serializeAws_restJson1AwsSecurityFindingIdentifier = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }));
};
var serializeAws_restJson1AwsSecurityFindingIdentifierList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
};
var serializeAws_restJson1AwsSnsTopicDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.KmsMasterKeyId !== undefined &&
        input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId })), (input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner })), (input.Subscription !== undefined &&
        input.Subscription !== null && {
        Subscription: serializeAws_restJson1AwsSnsTopicSubscriptionList(input.Subscription, context),
    })), (input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }));
};
var serializeAws_restJson1AwsSnsTopicSubscription = function (input, context) {
    return __assign(__assign({}, (input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }));
};
var serializeAws_restJson1AwsSnsTopicSubscriptionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
};
var serializeAws_restJson1AwsSqsQueueDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DeadLetterTargetArn !== undefined &&
        input.DeadLetterTargetArn !== null && { DeadLetterTargetArn: input.DeadLetterTargetArn })), (input.KmsDataKeyReusePeriodSeconds !== undefined &&
        input.KmsDataKeyReusePeriodSeconds !== null && {
        KmsDataKeyReusePeriodSeconds: input.KmsDataKeyReusePeriodSeconds,
    })), (input.KmsMasterKeyId !== undefined &&
        input.KmsMasterKeyId !== null && { KmsMasterKeyId: input.KmsMasterKeyId })), (input.QueueName !== undefined && input.QueueName !== null && { QueueName: input.QueueName }));
};
var serializeAws_restJson1AwsSsmComplianceSummary = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ComplianceType !== undefined &&
        input.ComplianceType !== null && { ComplianceType: input.ComplianceType })), (input.CompliantCriticalCount !== undefined &&
        input.CompliantCriticalCount !== null && { CompliantCriticalCount: input.CompliantCriticalCount })), (input.CompliantHighCount !== undefined &&
        input.CompliantHighCount !== null && { CompliantHighCount: input.CompliantHighCount })), (input.CompliantInformationalCount !== undefined &&
        input.CompliantInformationalCount !== null && { CompliantInformationalCount: input.CompliantInformationalCount })), (input.CompliantLowCount !== undefined &&
        input.CompliantLowCount !== null && { CompliantLowCount: input.CompliantLowCount })), (input.CompliantMediumCount !== undefined &&
        input.CompliantMediumCount !== null && { CompliantMediumCount: input.CompliantMediumCount })), (input.CompliantUnspecifiedCount !== undefined &&
        input.CompliantUnspecifiedCount !== null && { CompliantUnspecifiedCount: input.CompliantUnspecifiedCount })), (input.ExecutionType !== undefined && input.ExecutionType !== null && { ExecutionType: input.ExecutionType })), (input.NonCompliantCriticalCount !== undefined &&
        input.NonCompliantCriticalCount !== null && { NonCompliantCriticalCount: input.NonCompliantCriticalCount })), (input.NonCompliantHighCount !== undefined &&
        input.NonCompliantHighCount !== null && { NonCompliantHighCount: input.NonCompliantHighCount })), (input.NonCompliantInformationalCount !== undefined &&
        input.NonCompliantInformationalCount !== null && {
        NonCompliantInformationalCount: input.NonCompliantInformationalCount,
    })), (input.NonCompliantLowCount !== undefined &&
        input.NonCompliantLowCount !== null && { NonCompliantLowCount: input.NonCompliantLowCount })), (input.NonCompliantMediumCount !== undefined &&
        input.NonCompliantMediumCount !== null && { NonCompliantMediumCount: input.NonCompliantMediumCount })), (input.NonCompliantUnspecifiedCount !== undefined &&
        input.NonCompliantUnspecifiedCount !== null && {
        NonCompliantUnspecifiedCount: input.NonCompliantUnspecifiedCount,
    })), (input.OverallSeverity !== undefined &&
        input.OverallSeverity !== null && { OverallSeverity: input.OverallSeverity })), (input.PatchBaselineId !== undefined &&
        input.PatchBaselineId !== null && { PatchBaselineId: input.PatchBaselineId })), (input.PatchGroup !== undefined && input.PatchGroup !== null && { PatchGroup: input.PatchGroup })), (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1AwsSsmPatch = function (input, context) {
    return __assign({}, (input.ComplianceSummary !== undefined &&
        input.ComplianceSummary !== null && {
        ComplianceSummary: serializeAws_restJson1AwsSsmComplianceSummary(input.ComplianceSummary, context),
    }));
};
var serializeAws_restJson1AwsSsmPatchComplianceDetails = function (input, context) {
    return __assign({}, (input.Patch !== undefined &&
        input.Patch !== null && { Patch: serializeAws_restJson1AwsSsmPatch(input.Patch, context) }));
};
var serializeAws_restJson1AwsWafWebAclDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DefaultAction !== undefined && input.DefaultAction !== null && { DefaultAction: input.DefaultAction })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Rules !== undefined &&
        input.Rules !== null && { Rules: serializeAws_restJson1AwsWafWebAclRuleList(input.Rules, context) })), (input.WebAclId !== undefined && input.WebAclId !== null && { WebAclId: input.WebAclId }));
};
var serializeAws_restJson1AwsWafWebAclRule = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Action !== undefined &&
        input.Action !== null && { Action: serializeAws_restJson1WafAction(input.Action, context) })), (input.ExcludedRules !== undefined &&
        input.ExcludedRules !== null && {
        ExcludedRules: serializeAws_restJson1WafExcludedRuleList(input.ExcludedRules, context),
    })), (input.OverrideAction !== undefined &&
        input.OverrideAction !== null && {
        OverrideAction: serializeAws_restJson1WafOverrideAction(input.OverrideAction, context),
    })), (input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority })), (input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1AwsWafWebAclRuleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
};
var serializeAws_restJson1BatchImportFindingsRequestFindingList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AwsSecurityFinding(entry, context);
    });
};
var serializeAws_restJson1Cell = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CellReference !== undefined && input.CellReference !== null && { CellReference: input.CellReference })), (input.Column !== undefined && input.Column !== null && { Column: input.Column })), (input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName })), (input.Row !== undefined && input.Row !== null && { Row: input.Row }));
};
var serializeAws_restJson1Cells = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Cell(entry, context);
    });
};
var serializeAws_restJson1CidrBlockAssociation = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId })), (input.CidrBlock !== undefined && input.CidrBlock !== null && { CidrBlock: input.CidrBlock })), (input.CidrBlockState !== undefined &&
        input.CidrBlockState !== null && { CidrBlockState: input.CidrBlockState }));
};
var serializeAws_restJson1CidrBlockAssociationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CidrBlockAssociation(entry, context);
    });
};
var serializeAws_restJson1City = function (input, context) {
    return __assign({}, (input.CityName !== undefined && input.CityName !== null && { CityName: input.CityName }));
};
var serializeAws_restJson1ClassificationResult = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalOccurrences !== undefined &&
        input.AdditionalOccurrences !== null && { AdditionalOccurrences: input.AdditionalOccurrences })), (input.CustomDataIdentifiers !== undefined &&
        input.CustomDataIdentifiers !== null && {
        CustomDataIdentifiers: serializeAws_restJson1CustomDataIdentifiersResult(input.CustomDataIdentifiers, context),
    })), (input.MimeType !== undefined && input.MimeType !== null && { MimeType: input.MimeType })), (input.SensitiveData !== undefined &&
        input.SensitiveData !== null && {
        SensitiveData: serializeAws_restJson1SensitiveDataResultList(input.SensitiveData, context),
    })), (input.SizeClassified !== undefined &&
        input.SizeClassified !== null && { SizeClassified: input.SizeClassified })), (input.Status !== undefined &&
        input.Status !== null && { Status: serializeAws_restJson1ClassificationStatus(input.Status, context) }));
};
var serializeAws_restJson1ClassificationStatus = function (input, context) {
    return __assign(__assign({}, (input.Code !== undefined && input.Code !== null && { Code: input.Code })), (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }));
};
var serializeAws_restJson1Compliance = function (input, context) {
    return __assign(__assign(__assign({}, (input.RelatedRequirements !== undefined &&
        input.RelatedRequirements !== null && {
        RelatedRequirements: serializeAws_restJson1RelatedRequirementsList(input.RelatedRequirements, context),
    })), (input.Status !== undefined && input.Status !== null && { Status: input.Status })), (input.StatusReasons !== undefined &&
        input.StatusReasons !== null && {
        StatusReasons: serializeAws_restJson1StatusReasonsList(input.StatusReasons, context),
    }));
};
var serializeAws_restJson1ContainerDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId })), (input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName })), (input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt })), (input.Name !== undefined && input.Name !== null && { Name: input.Name }));
};
var serializeAws_restJson1Country = function (input, context) {
    return __assign(__assign({}, (input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode })), (input.CountryName !== undefined && input.CountryName !== null && { CountryName: input.CountryName }));
};
var serializeAws_restJson1CustomDataIdentifiersDetections = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.Count !== undefined && input.Count !== null && { Count: input.Count })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Occurrences !== undefined &&
        input.Occurrences !== null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) }));
};
var serializeAws_restJson1CustomDataIdentifiersDetectionsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
};
var serializeAws_restJson1CustomDataIdentifiersResult = function (input, context) {
    return __assign(__assign({}, (input.Detections !== undefined &&
        input.Detections !== null && {
        Detections: serializeAws_restJson1CustomDataIdentifiersDetectionsList(input.Detections, context),
    })), (input.TotalCount !== undefined && input.TotalCount !== null && { TotalCount: input.TotalCount }));
};
var serializeAws_restJson1Cvss = function (input, context) {
    return __assign(__assign(__assign({}, (input.BaseScore !== undefined && input.BaseScore !== null && { BaseScore: input.BaseScore })), (input.BaseVector !== undefined && input.BaseVector !== null && { BaseVector: input.BaseVector })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1CvssList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Cvss(entry, context);
    });
};
var serializeAws_restJson1DataClassificationDetails = function (input, context) {
    return __assign(__assign({}, (input.DetailedResultsLocation !== undefined &&
        input.DetailedResultsLocation !== null && { DetailedResultsLocation: input.DetailedResultsLocation })), (input.Result !== undefined &&
        input.Result !== null && { Result: serializeAws_restJson1ClassificationResult(input.Result, context) }));
};
var serializeAws_restJson1DateFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.DateRange !== undefined &&
        input.DateRange !== null && { DateRange: serializeAws_restJson1DateRange(input.DateRange, context) })), (input.End !== undefined && input.End !== null && { End: input.End })), (input.Start !== undefined && input.Start !== null && { Start: input.Start }));
};
var serializeAws_restJson1DateFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DateFilter(entry, context);
    });
};
var serializeAws_restJson1DateRange = function (input, context) {
    return __assign(__assign({}, (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1DnsRequestAction = function (input, context) {
    return __assign(__assign(__assign({}, (input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked })), (input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }));
};
var serializeAws_restJson1FieldMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1FindingProviderFields = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Confidence !== undefined && input.Confidence !== null && { Confidence: input.Confidence })), (input.Criticality !== undefined && input.Criticality !== null && { Criticality: input.Criticality })), (input.RelatedFindings !== undefined &&
        input.RelatedFindings !== null && {
        RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    })), (input.Severity !== undefined &&
        input.Severity !== null && { Severity: serializeAws_restJson1FindingProviderSeverity(input.Severity, context) })), (input.Types !== undefined &&
        input.Types !== null && { Types: serializeAws_restJson1TypeList(input.Types, context) }));
};
var serializeAws_restJson1FindingProviderSeverity = function (input, context) {
    return __assign(__assign({}, (input.Label !== undefined && input.Label !== null && { Label: input.Label })), (input.Original !== undefined && input.Original !== null && { Original: input.Original }));
};
var serializeAws_restJson1GeoLocation = function (input, context) {
    return __assign(__assign({}, (input.Lat !== undefined && input.Lat !== null && { Lat: input.Lat })), (input.Lon !== undefined && input.Lon !== null && { Lon: input.Lon }));
};
var serializeAws_restJson1IcmpTypeCode = function (input, context) {
    return __assign(__assign({}, (input.Code !== undefined && input.Code !== null && { Code: input.Code })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1IpFilter = function (input, context) {
    return __assign({}, (input.Cidr !== undefined && input.Cidr !== null && { Cidr: input.Cidr }));
};
var serializeAws_restJson1IpFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IpFilter(entry, context);
    });
};
var serializeAws_restJson1IpOrganizationDetails = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Asn !== undefined && input.Asn !== null && { Asn: input.Asn })), (input.AsnOrg !== undefined && input.AsnOrg !== null && { AsnOrg: input.AsnOrg })), (input.Isp !== undefined && input.Isp !== null && { Isp: input.Isp })), (input.Org !== undefined && input.Org !== null && { Org: input.Org }));
};
var serializeAws_restJson1Ipv6CidrBlockAssociation = function (input, context) {
    return __assign(__assign(__assign({}, (input.AssociationId !== undefined && input.AssociationId !== null && { AssociationId: input.AssociationId })), (input.CidrBlockState !== undefined &&
        input.CidrBlockState !== null && { CidrBlockState: input.CidrBlockState })), (input.Ipv6CidrBlock !== undefined && input.Ipv6CidrBlock !== null && { Ipv6CidrBlock: input.Ipv6CidrBlock }));
};
var serializeAws_restJson1Ipv6CidrBlockAssociationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
};
var serializeAws_restJson1KeywordFilter = function (input, context) {
    return __assign({}, (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1KeywordFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1KeywordFilter(entry, context);
    });
};
var serializeAws_restJson1LoadBalancerState = function (input, context) {
    return __assign(__assign({}, (input.Code !== undefined && input.Code !== null && { Code: input.Code })), (input.Reason !== undefined && input.Reason !== null && { Reason: input.Reason }));
};
var serializeAws_restJson1Malware = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.State !== undefined && input.State !== null && { State: input.State })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1MalwareList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Malware(entry, context);
    });
};
var serializeAws_restJson1MapFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison })), (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1MapFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MapFilter(entry, context);
    });
};
var serializeAws_restJson1Network = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DestinationDomain !== undefined &&
        input.DestinationDomain !== null && { DestinationDomain: input.DestinationDomain })), (input.DestinationIpV4 !== undefined &&
        input.DestinationIpV4 !== null && { DestinationIpV4: input.DestinationIpV4 })), (input.DestinationIpV6 !== undefined &&
        input.DestinationIpV6 !== null && { DestinationIpV6: input.DestinationIpV6 })), (input.DestinationPort !== undefined &&
        input.DestinationPort !== null && { DestinationPort: input.DestinationPort })), (input.Direction !== undefined && input.Direction !== null && { Direction: input.Direction })), (input.OpenPortRange !== undefined &&
        input.OpenPortRange !== null && { OpenPortRange: serializeAws_restJson1PortRange(input.OpenPortRange, context) })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.SourceDomain !== undefined && input.SourceDomain !== null && { SourceDomain: input.SourceDomain })), (input.SourceIpV4 !== undefined && input.SourceIpV4 !== null && { SourceIpV4: input.SourceIpV4 })), (input.SourceIpV6 !== undefined && input.SourceIpV6 !== null && { SourceIpV6: input.SourceIpV6 })), (input.SourceMac !== undefined && input.SourceMac !== null && { SourceMac: input.SourceMac })), (input.SourcePort !== undefined && input.SourcePort !== null && { SourcePort: input.SourcePort }));
};
var serializeAws_restJson1NetworkConnectionAction = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked })), (input.ConnectionDirection !== undefined &&
        input.ConnectionDirection !== null && { ConnectionDirection: input.ConnectionDirection })), (input.LocalPortDetails !== undefined &&
        input.LocalPortDetails !== null && {
        LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
    })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.RemoteIpDetails !== undefined &&
        input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    })), (input.RemotePortDetails !== undefined &&
        input.RemotePortDetails !== null && {
        RemotePortDetails: serializeAws_restJson1ActionRemotePortDetails(input.RemotePortDetails, context),
    }));
};
var serializeAws_restJson1NetworkHeader = function (input, context) {
    return __assign(__assign(__assign({}, (input.Destination !== undefined &&
        input.Destination !== null && {
        Destination: serializeAws_restJson1NetworkPathComponentDetails(input.Destination, context),
    })), (input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol })), (input.Source !== undefined &&
        input.Source !== null && { Source: serializeAws_restJson1NetworkPathComponentDetails(input.Source, context) }));
};
var serializeAws_restJson1NetworkPathComponent = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ComponentId !== undefined && input.ComponentId !== null && { ComponentId: input.ComponentId })), (input.ComponentType !== undefined && input.ComponentType !== null && { ComponentType: input.ComponentType })), (input.Egress !== undefined &&
        input.Egress !== null && { Egress: serializeAws_restJson1NetworkHeader(input.Egress, context) })), (input.Ingress !== undefined &&
        input.Ingress !== null && { Ingress: serializeAws_restJson1NetworkHeader(input.Ingress, context) }));
};
var serializeAws_restJson1NetworkPathComponentDetails = function (input, context) {
    return __assign(__assign({}, (input.Address !== undefined &&
        input.Address !== null && { Address: serializeAws_restJson1StringList(input.Address, context) })), (input.PortRanges !== undefined &&
        input.PortRanges !== null && { PortRanges: serializeAws_restJson1PortRangeList(input.PortRanges, context) }));
};
var serializeAws_restJson1NetworkPathList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NetworkPathComponent(entry, context);
    });
};
var serializeAws_restJson1NonEmptyStringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Note = function (input, context) {
    return __assign(__assign(__assign({}, (input.Text !== undefined && input.Text !== null && { Text: input.Text })), (input.UpdatedAt !== undefined && input.UpdatedAt !== null && { UpdatedAt: input.UpdatedAt })), (input.UpdatedBy !== undefined && input.UpdatedBy !== null && { UpdatedBy: input.UpdatedBy }));
};
var serializeAws_restJson1NoteUpdate = function (input, context) {
    return __assign(__assign({}, (input.Text !== undefined && input.Text !== null && { Text: input.Text })), (input.UpdatedBy !== undefined && input.UpdatedBy !== null && { UpdatedBy: input.UpdatedBy }));
};
var serializeAws_restJson1NumberFilter = function (input, context) {
    return __assign(__assign(__assign({}, (input.Eq !== undefined && input.Eq !== null && { Eq: input.Eq })), (input.Gte !== undefined && input.Gte !== null && { Gte: input.Gte })), (input.Lte !== undefined && input.Lte !== null && { Lte: input.Lte }));
};
var serializeAws_restJson1NumberFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NumberFilter(entry, context);
    });
};
var serializeAws_restJson1Occurrences = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Cells !== undefined &&
        input.Cells !== null && { Cells: serializeAws_restJson1Cells(input.Cells, context) })), (input.LineRanges !== undefined &&
        input.LineRanges !== null && { LineRanges: serializeAws_restJson1Ranges(input.LineRanges, context) })), (input.OffsetRanges !== undefined &&
        input.OffsetRanges !== null && { OffsetRanges: serializeAws_restJson1Ranges(input.OffsetRanges, context) })), (input.Pages !== undefined &&
        input.Pages !== null && { Pages: serializeAws_restJson1Pages(input.Pages, context) })), (input.Records !== undefined &&
        input.Records !== null && { Records: serializeAws_restJson1Records(input.Records, context) }));
};
var serializeAws_restJson1Page = function (input, context) {
    return __assign(__assign(__assign({}, (input.LineRange !== undefined &&
        input.LineRange !== null && { LineRange: serializeAws_restJson1Range(input.LineRange, context) })), (input.OffsetRange !== undefined &&
        input.OffsetRange !== null && { OffsetRange: serializeAws_restJson1Range(input.OffsetRange, context) })), (input.PageNumber !== undefined && input.PageNumber !== null && { PageNumber: input.PageNumber }));
};
var serializeAws_restJson1Pages = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Page(entry, context);
    });
};
var serializeAws_restJson1PatchSummary = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.FailedCount !== undefined && input.FailedCount !== null && { FailedCount: input.FailedCount })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.InstalledCount !== undefined &&
        input.InstalledCount !== null && { InstalledCount: input.InstalledCount })), (input.InstalledOtherCount !== undefined &&
        input.InstalledOtherCount !== null && { InstalledOtherCount: input.InstalledOtherCount })), (input.InstalledPendingReboot !== undefined &&
        input.InstalledPendingReboot !== null && { InstalledPendingReboot: input.InstalledPendingReboot })), (input.InstalledRejectedCount !== undefined &&
        input.InstalledRejectedCount !== null && { InstalledRejectedCount: input.InstalledRejectedCount })), (input.MissingCount !== undefined && input.MissingCount !== null && { MissingCount: input.MissingCount })), (input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation })), (input.OperationEndTime !== undefined &&
        input.OperationEndTime !== null && { OperationEndTime: input.OperationEndTime })), (input.OperationStartTime !== undefined &&
        input.OperationStartTime !== null && { OperationStartTime: input.OperationStartTime })), (input.RebootOption !== undefined && input.RebootOption !== null && { RebootOption: input.RebootOption }));
};
var serializeAws_restJson1PortProbeAction = function (input, context) {
    return __assign(__assign({}, (input.Blocked !== undefined && input.Blocked !== null && { Blocked: input.Blocked })), (input.PortProbeDetails !== undefined &&
        input.PortProbeDetails !== null && {
        PortProbeDetails: serializeAws_restJson1PortProbeDetailList(input.PortProbeDetails, context),
    }));
};
var serializeAws_restJson1PortProbeDetail = function (input, context) {
    return __assign(__assign(__assign({}, (input.LocalIpDetails !== undefined &&
        input.LocalIpDetails !== null && {
        LocalIpDetails: serializeAws_restJson1ActionLocalIpDetails(input.LocalIpDetails, context),
    })), (input.LocalPortDetails !== undefined &&
        input.LocalPortDetails !== null && {
        LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
    })), (input.RemoteIpDetails !== undefined &&
        input.RemoteIpDetails !== null && {
        RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    }));
};
var serializeAws_restJson1PortProbeDetailList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PortProbeDetail(entry, context);
    });
};
var serializeAws_restJson1PortRange = function (input, context) {
    return __assign(__assign({}, (input.Begin !== undefined && input.Begin !== null && { Begin: input.Begin })), (input.End !== undefined && input.End !== null && { End: input.End }));
};
var serializeAws_restJson1PortRangeFromTo = function (input, context) {
    return __assign(__assign({}, (input.From !== undefined && input.From !== null && { From: input.From })), (input.To !== undefined && input.To !== null && { To: input.To }));
};
var serializeAws_restJson1PortRangeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PortRange(entry, context);
    });
};
var serializeAws_restJson1ProcessDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.LaunchedAt !== undefined && input.LaunchedAt !== null && { LaunchedAt: input.LaunchedAt })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.ParentPid !== undefined && input.ParentPid !== null && { ParentPid: input.ParentPid })), (input.Path !== undefined && input.Path !== null && { Path: input.Path })), (input.Pid !== undefined && input.Pid !== null && { Pid: input.Pid })), (input.TerminatedAt !== undefined && input.TerminatedAt !== null && { TerminatedAt: input.TerminatedAt }));
};
var serializeAws_restJson1Range = function (input, context) {
    return __assign(__assign(__assign({}, (input.End !== undefined && input.End !== null && { End: input.End })), (input.Start !== undefined && input.Start !== null && { Start: input.Start })), (input.StartColumn !== undefined && input.StartColumn !== null && { StartColumn: input.StartColumn }));
};
var serializeAws_restJson1Ranges = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Range(entry, context);
    });
};
var serializeAws_restJson1Recommendation = function (input, context) {
    return __assign(__assign({}, (input.Text !== undefined && input.Text !== null && { Text: input.Text })), (input.Url !== undefined && input.Url !== null && { Url: input.Url }));
};
var serializeAws_restJson1_Record = function (input, context) {
    return __assign(__assign({}, (input.JsonPath !== undefined && input.JsonPath !== null && { JsonPath: input.JsonPath })), (input.RecordIndex !== undefined && input.RecordIndex !== null && { RecordIndex: input.RecordIndex }));
};
var serializeAws_restJson1Records = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1_Record(entry, context);
    });
};
var serializeAws_restJson1RelatedFinding = function (input, context) {
    return __assign(__assign({}, (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.ProductArn !== undefined && input.ProductArn !== null && { ProductArn: input.ProductArn }));
};
var serializeAws_restJson1RelatedFindingList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RelatedFinding(entry, context);
    });
};
var serializeAws_restJson1RelatedRequirementsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Remediation = function (input, context) {
    return __assign({}, (input.Recommendation !== undefined &&
        input.Recommendation !== null && {
        Recommendation: serializeAws_restJson1Recommendation(input.Recommendation, context),
    }));
};
var serializeAws_restJson1Resource = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DataClassification !== undefined &&
        input.DataClassification !== null && {
        DataClassification: serializeAws_restJson1DataClassificationDetails(input.DataClassification, context),
    })), (input.Details !== undefined &&
        input.Details !== null && { Details: serializeAws_restJson1ResourceDetails(input.Details, context) })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.Partition !== undefined && input.Partition !== null && { Partition: input.Partition })), (input.Region !== undefined && input.Region !== null && { Region: input.Region })), (input.ResourceRole !== undefined && input.ResourceRole !== null && { ResourceRole: input.ResourceRole })), (input.Tags !== undefined &&
        input.Tags !== null && { Tags: serializeAws_restJson1FieldMap(input.Tags, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1ResourceDetails = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AwsApiGatewayRestApi !== undefined &&
        input.AwsApiGatewayRestApi !== null && {
        AwsApiGatewayRestApi: serializeAws_restJson1AwsApiGatewayRestApiDetails(input.AwsApiGatewayRestApi, context),
    })), (input.AwsApiGatewayStage !== undefined &&
        input.AwsApiGatewayStage !== null && {
        AwsApiGatewayStage: serializeAws_restJson1AwsApiGatewayStageDetails(input.AwsApiGatewayStage, context),
    })), (input.AwsApiGatewayV2Api !== undefined &&
        input.AwsApiGatewayV2Api !== null && {
        AwsApiGatewayV2Api: serializeAws_restJson1AwsApiGatewayV2ApiDetails(input.AwsApiGatewayV2Api, context),
    })), (input.AwsApiGatewayV2Stage !== undefined &&
        input.AwsApiGatewayV2Stage !== null && {
        AwsApiGatewayV2Stage: serializeAws_restJson1AwsApiGatewayV2StageDetails(input.AwsApiGatewayV2Stage, context),
    })), (input.AwsAutoScalingAutoScalingGroup !== undefined &&
        input.AwsAutoScalingAutoScalingGroup !== null && {
        AwsAutoScalingAutoScalingGroup: serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(input.AwsAutoScalingAutoScalingGroup, context),
    })), (input.AwsCertificateManagerCertificate !== undefined &&
        input.AwsCertificateManagerCertificate !== null && {
        AwsCertificateManagerCertificate: serializeAws_restJson1AwsCertificateManagerCertificateDetails(input.AwsCertificateManagerCertificate, context),
    })), (input.AwsCloudFrontDistribution !== undefined &&
        input.AwsCloudFrontDistribution !== null && {
        AwsCloudFrontDistribution: serializeAws_restJson1AwsCloudFrontDistributionDetails(input.AwsCloudFrontDistribution, context),
    })), (input.AwsCloudTrailTrail !== undefined &&
        input.AwsCloudTrailTrail !== null && {
        AwsCloudTrailTrail: serializeAws_restJson1AwsCloudTrailTrailDetails(input.AwsCloudTrailTrail, context),
    })), (input.AwsCodeBuildProject !== undefined &&
        input.AwsCodeBuildProject !== null && {
        AwsCodeBuildProject: serializeAws_restJson1AwsCodeBuildProjectDetails(input.AwsCodeBuildProject, context),
    })), (input.AwsDynamoDbTable !== undefined &&
        input.AwsDynamoDbTable !== null && {
        AwsDynamoDbTable: serializeAws_restJson1AwsDynamoDbTableDetails(input.AwsDynamoDbTable, context),
    })), (input.AwsEc2Eip !== undefined &&
        input.AwsEc2Eip !== null && { AwsEc2Eip: serializeAws_restJson1AwsEc2EipDetails(input.AwsEc2Eip, context) })), (input.AwsEc2Instance !== undefined &&
        input.AwsEc2Instance !== null && {
        AwsEc2Instance: serializeAws_restJson1AwsEc2InstanceDetails(input.AwsEc2Instance, context),
    })), (input.AwsEc2NetworkAcl !== undefined &&
        input.AwsEc2NetworkAcl !== null && {
        AwsEc2NetworkAcl: serializeAws_restJson1AwsEc2NetworkAclDetails(input.AwsEc2NetworkAcl, context),
    })), (input.AwsEc2NetworkInterface !== undefined &&
        input.AwsEc2NetworkInterface !== null && {
        AwsEc2NetworkInterface: serializeAws_restJson1AwsEc2NetworkInterfaceDetails(input.AwsEc2NetworkInterface, context),
    })), (input.AwsEc2SecurityGroup !== undefined &&
        input.AwsEc2SecurityGroup !== null && {
        AwsEc2SecurityGroup: serializeAws_restJson1AwsEc2SecurityGroupDetails(input.AwsEc2SecurityGroup, context),
    })), (input.AwsEc2Subnet !== undefined &&
        input.AwsEc2Subnet !== null && {
        AwsEc2Subnet: serializeAws_restJson1AwsEc2SubnetDetails(input.AwsEc2Subnet, context),
    })), (input.AwsEc2Volume !== undefined &&
        input.AwsEc2Volume !== null && {
        AwsEc2Volume: serializeAws_restJson1AwsEc2VolumeDetails(input.AwsEc2Volume, context),
    })), (input.AwsEc2Vpc !== undefined &&
        input.AwsEc2Vpc !== null && { AwsEc2Vpc: serializeAws_restJson1AwsEc2VpcDetails(input.AwsEc2Vpc, context) })), (input.AwsElasticBeanstalkEnvironment !== undefined &&
        input.AwsElasticBeanstalkEnvironment !== null && {
        AwsElasticBeanstalkEnvironment: serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(input.AwsElasticBeanstalkEnvironment, context),
    })), (input.AwsElasticsearchDomain !== undefined &&
        input.AwsElasticsearchDomain !== null && {
        AwsElasticsearchDomain: serializeAws_restJson1AwsElasticsearchDomainDetails(input.AwsElasticsearchDomain, context),
    })), (input.AwsElbLoadBalancer !== undefined &&
        input.AwsElbLoadBalancer !== null && {
        AwsElbLoadBalancer: serializeAws_restJson1AwsElbLoadBalancerDetails(input.AwsElbLoadBalancer, context),
    })), (input.AwsElbv2LoadBalancer !== undefined &&
        input.AwsElbv2LoadBalancer !== null && {
        AwsElbv2LoadBalancer: serializeAws_restJson1AwsElbv2LoadBalancerDetails(input.AwsElbv2LoadBalancer, context),
    })), (input.AwsIamAccessKey !== undefined &&
        input.AwsIamAccessKey !== null && {
        AwsIamAccessKey: serializeAws_restJson1AwsIamAccessKeyDetails(input.AwsIamAccessKey, context),
    })), (input.AwsIamGroup !== undefined &&
        input.AwsIamGroup !== null && {
        AwsIamGroup: serializeAws_restJson1AwsIamGroupDetails(input.AwsIamGroup, context),
    })), (input.AwsIamPolicy !== undefined &&
        input.AwsIamPolicy !== null && {
        AwsIamPolicy: serializeAws_restJson1AwsIamPolicyDetails(input.AwsIamPolicy, context),
    })), (input.AwsIamRole !== undefined &&
        input.AwsIamRole !== null && { AwsIamRole: serializeAws_restJson1AwsIamRoleDetails(input.AwsIamRole, context) })), (input.AwsIamUser !== undefined &&
        input.AwsIamUser !== null && { AwsIamUser: serializeAws_restJson1AwsIamUserDetails(input.AwsIamUser, context) })), (input.AwsKmsKey !== undefined &&
        input.AwsKmsKey !== null && { AwsKmsKey: serializeAws_restJson1AwsKmsKeyDetails(input.AwsKmsKey, context) })), (input.AwsLambdaFunction !== undefined &&
        input.AwsLambdaFunction !== null && {
        AwsLambdaFunction: serializeAws_restJson1AwsLambdaFunctionDetails(input.AwsLambdaFunction, context),
    })), (input.AwsLambdaLayerVersion !== undefined &&
        input.AwsLambdaLayerVersion !== null && {
        AwsLambdaLayerVersion: serializeAws_restJson1AwsLambdaLayerVersionDetails(input.AwsLambdaLayerVersion, context),
    })), (input.AwsRdsDbCluster !== undefined &&
        input.AwsRdsDbCluster !== null && {
        AwsRdsDbCluster: serializeAws_restJson1AwsRdsDbClusterDetails(input.AwsRdsDbCluster, context),
    })), (input.AwsRdsDbClusterSnapshot !== undefined &&
        input.AwsRdsDbClusterSnapshot !== null && {
        AwsRdsDbClusterSnapshot: serializeAws_restJson1AwsRdsDbClusterSnapshotDetails(input.AwsRdsDbClusterSnapshot, context),
    })), (input.AwsRdsDbInstance !== undefined &&
        input.AwsRdsDbInstance !== null && {
        AwsRdsDbInstance: serializeAws_restJson1AwsRdsDbInstanceDetails(input.AwsRdsDbInstance, context),
    })), (input.AwsRdsDbSnapshot !== undefined &&
        input.AwsRdsDbSnapshot !== null && {
        AwsRdsDbSnapshot: serializeAws_restJson1AwsRdsDbSnapshotDetails(input.AwsRdsDbSnapshot, context),
    })), (input.AwsRedshiftCluster !== undefined &&
        input.AwsRedshiftCluster !== null && {
        AwsRedshiftCluster: serializeAws_restJson1AwsRedshiftClusterDetails(input.AwsRedshiftCluster, context),
    })), (input.AwsS3AccountPublicAccessBlock !== undefined &&
        input.AwsS3AccountPublicAccessBlock !== null && {
        AwsS3AccountPublicAccessBlock: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(input.AwsS3AccountPublicAccessBlock, context),
    })), (input.AwsS3Bucket !== undefined &&
        input.AwsS3Bucket !== null && {
        AwsS3Bucket: serializeAws_restJson1AwsS3BucketDetails(input.AwsS3Bucket, context),
    })), (input.AwsS3Object !== undefined &&
        input.AwsS3Object !== null && {
        AwsS3Object: serializeAws_restJson1AwsS3ObjectDetails(input.AwsS3Object, context),
    })), (input.AwsSecretsManagerSecret !== undefined &&
        input.AwsSecretsManagerSecret !== null && {
        AwsSecretsManagerSecret: serializeAws_restJson1AwsSecretsManagerSecretDetails(input.AwsSecretsManagerSecret, context),
    })), (input.AwsSnsTopic !== undefined &&
        input.AwsSnsTopic !== null && {
        AwsSnsTopic: serializeAws_restJson1AwsSnsTopicDetails(input.AwsSnsTopic, context),
    })), (input.AwsSqsQueue !== undefined &&
        input.AwsSqsQueue !== null && {
        AwsSqsQueue: serializeAws_restJson1AwsSqsQueueDetails(input.AwsSqsQueue, context),
    })), (input.AwsSsmPatchCompliance !== undefined &&
        input.AwsSsmPatchCompliance !== null && {
        AwsSsmPatchCompliance: serializeAws_restJson1AwsSsmPatchComplianceDetails(input.AwsSsmPatchCompliance, context),
    })), (input.AwsWafWebAcl !== undefined &&
        input.AwsWafWebAcl !== null && {
        AwsWafWebAcl: serializeAws_restJson1AwsWafWebAclDetails(input.AwsWafWebAcl, context),
    })), (input.Container !== undefined &&
        input.Container !== null && { Container: serializeAws_restJson1ContainerDetails(input.Container, context) })), (input.Other !== undefined &&
        input.Other !== null && { Other: serializeAws_restJson1FieldMap(input.Other, context) }));
};
var serializeAws_restJson1ResourceList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Resource(entry, context);
    });
};
var serializeAws_restJson1SecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SensitiveDataDetections = function (input, context) {
    return __assign(__assign(__assign({}, (input.Count !== undefined && input.Count !== null && { Count: input.Count })), (input.Occurrences !== undefined &&
        input.Occurrences !== null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) })), (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1SensitiveDataDetectionsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SensitiveDataDetections(entry, context);
    });
};
var serializeAws_restJson1SensitiveDataResult = function (input, context) {
    return __assign(__assign(__assign({}, (input.Category !== undefined && input.Category !== null && { Category: input.Category })), (input.Detections !== undefined &&
        input.Detections !== null && {
        Detections: serializeAws_restJson1SensitiveDataDetectionsList(input.Detections, context),
    })), (input.TotalCount !== undefined && input.TotalCount !== null && { TotalCount: input.TotalCount }));
};
var serializeAws_restJson1SensitiveDataResultList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SensitiveDataResult(entry, context);
    });
};
var serializeAws_restJson1Severity = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Label !== undefined && input.Label !== null && { Label: input.Label })), (input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized })), (input.Original !== undefined && input.Original !== null && { Original: input.Original })), (input.Product !== undefined && input.Product !== null && { Product: input.Product }));
};
var serializeAws_restJson1SeverityUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.Label !== undefined && input.Label !== null && { Label: input.Label })), (input.Normalized !== undefined && input.Normalized !== null && { Normalized: input.Normalized })), (input.Product !== undefined && input.Product !== null && { Product: input.Product }));
};
var serializeAws_restJson1SoftwarePackage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Architecture !== undefined && input.Architecture !== null && { Architecture: input.Architecture })), (input.Epoch !== undefined && input.Epoch !== null && { Epoch: input.Epoch })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Release !== undefined && input.Release !== null && { Release: input.Release })), (input.Version !== undefined && input.Version !== null && { Version: input.Version }));
};
var serializeAws_restJson1SoftwarePackageList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SoftwarePackage(entry, context);
    });
};
var serializeAws_restJson1SortCriteria = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SortCriterion(entry, context);
    });
};
var serializeAws_restJson1SortCriterion = function (input, context) {
    return __assign(__assign({}, (input.Field !== undefined && input.Field !== null && { Field: input.Field })), (input.SortOrder !== undefined && input.SortOrder !== null && { SortOrder: input.SortOrder }));
};
var serializeAws_restJson1StandardsInputParameterMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1StandardsSubscriptionArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1StandardsSubscriptionRequest = function (input, context) {
    return __assign(__assign({}, (input.StandardsArn !== undefined && input.StandardsArn !== null && { StandardsArn: input.StandardsArn })), (input.StandardsInput !== undefined &&
        input.StandardsInput !== null && {
        StandardsInput: serializeAws_restJson1StandardsInputParameterMap(input.StandardsInput, context),
    }));
};
var serializeAws_restJson1StandardsSubscriptionRequests = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1StandardsSubscriptionRequest(entry, context);
    });
};
var serializeAws_restJson1StatusReason = function (input, context) {
    return __assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ReasonCode !== undefined && input.ReasonCode !== null && { ReasonCode: input.ReasonCode }));
};
var serializeAws_restJson1StatusReasonsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1StatusReason(entry, context);
    });
};
var serializeAws_restJson1StringFilter = function (input, context) {
    return __assign(__assign({}, (input.Comparison !== undefined && input.Comparison !== null && { Comparison: input.Comparison })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1StringFilterList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1StringFilter(entry, context);
    });
};
var serializeAws_restJson1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var serializeAws_restJson1ThreatIntelIndicator = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Category !== undefined && input.Category !== null && { Category: input.Category })), (input.LastObservedAt !== undefined &&
        input.LastObservedAt !== null && { LastObservedAt: input.LastObservedAt })), (input.Source !== undefined && input.Source !== null && { Source: input.Source })), (input.SourceUrl !== undefined && input.SourceUrl !== null && { SourceUrl: input.SourceUrl })), (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1ThreatIntelIndicatorList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
};
var serializeAws_restJson1TypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Vulnerability = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Cvss !== undefined &&
        input.Cvss !== null && { Cvss: serializeAws_restJson1CvssList(input.Cvss, context) })), (input.Id !== undefined && input.Id !== null && { Id: input.Id })), (input.ReferenceUrls !== undefined &&
        input.ReferenceUrls !== null && {
        ReferenceUrls: serializeAws_restJson1StringList(input.ReferenceUrls, context),
    })), (input.RelatedVulnerabilities !== undefined &&
        input.RelatedVulnerabilities !== null && {
        RelatedVulnerabilities: serializeAws_restJson1StringList(input.RelatedVulnerabilities, context),
    })), (input.Vendor !== undefined &&
        input.Vendor !== null && { Vendor: serializeAws_restJson1VulnerabilityVendor(input.Vendor, context) })), (input.VulnerablePackages !== undefined &&
        input.VulnerablePackages !== null && {
        VulnerablePackages: serializeAws_restJson1SoftwarePackageList(input.VulnerablePackages, context),
    }));
};
var serializeAws_restJson1VulnerabilityList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Vulnerability(entry, context);
    });
};
var serializeAws_restJson1VulnerabilityVendor = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Url !== undefined && input.Url !== null && { Url: input.Url })), (input.VendorCreatedAt !== undefined &&
        input.VendorCreatedAt !== null && { VendorCreatedAt: input.VendorCreatedAt })), (input.VendorSeverity !== undefined &&
        input.VendorSeverity !== null && { VendorSeverity: input.VendorSeverity })), (input.VendorUpdatedAt !== undefined &&
        input.VendorUpdatedAt !== null && { VendorUpdatedAt: input.VendorUpdatedAt }));
};
var serializeAws_restJson1WafAction = function (input, context) {
    return __assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1WafExcludedRule = function (input, context) {
    return __assign({}, (input.RuleId !== undefined && input.RuleId !== null && { RuleId: input.RuleId }));
};
var serializeAws_restJson1WafExcludedRuleList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WafExcludedRule(entry, context);
    });
};
var serializeAws_restJson1WafOverrideAction = function (input, context) {
    return __assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type }));
};
var serializeAws_restJson1Workflow = function (input, context) {
    return __assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var serializeAws_restJson1WorkflowUpdate = function (input, context) {
    return __assign({}, (input.Status !== undefined && input.Status !== null && { Status: input.Status }));
};
var deserializeAws_restJson1Action = function (output, context) {
    return {
        ActionType: output.ActionType !== undefined && output.ActionType !== null ? output.ActionType : undefined,
        AwsApiCallAction: output.AwsApiCallAction !== undefined && output.AwsApiCallAction !== null
            ? deserializeAws_restJson1AwsApiCallAction(output.AwsApiCallAction, context)
            : undefined,
        DnsRequestAction: output.DnsRequestAction !== undefined && output.DnsRequestAction !== null
            ? deserializeAws_restJson1DnsRequestAction(output.DnsRequestAction, context)
            : undefined,
        NetworkConnectionAction: output.NetworkConnectionAction !== undefined && output.NetworkConnectionAction !== null
            ? deserializeAws_restJson1NetworkConnectionAction(output.NetworkConnectionAction, context)
            : undefined,
        PortProbeAction: output.PortProbeAction !== undefined && output.PortProbeAction !== null
            ? deserializeAws_restJson1PortProbeAction(output.PortProbeAction, context)
            : undefined,
    };
};
var deserializeAws_restJson1ActionLocalIpDetails = function (output, context) {
    return {
        IpAddressV4: output.IpAddressV4 !== undefined && output.IpAddressV4 !== null ? output.IpAddressV4 : undefined,
    };
};
var deserializeAws_restJson1ActionLocalPortDetails = function (output, context) {
    return {
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        PortName: output.PortName !== undefined && output.PortName !== null ? output.PortName : undefined,
    };
};
var deserializeAws_restJson1ActionRemoteIpDetails = function (output, context) {
    return {
        City: output.City !== undefined && output.City !== null
            ? deserializeAws_restJson1City(output.City, context)
            : undefined,
        Country: output.Country !== undefined && output.Country !== null
            ? deserializeAws_restJson1Country(output.Country, context)
            : undefined,
        GeoLocation: output.GeoLocation !== undefined && output.GeoLocation !== null
            ? deserializeAws_restJson1GeoLocation(output.GeoLocation, context)
            : undefined,
        IpAddressV4: output.IpAddressV4 !== undefined && output.IpAddressV4 !== null ? output.IpAddressV4 : undefined,
        Organization: output.Organization !== undefined && output.Organization !== null
            ? deserializeAws_restJson1IpOrganizationDetails(output.Organization, context)
            : undefined,
    };
};
var deserializeAws_restJson1ActionRemotePortDetails = function (output, context) {
    return {
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        PortName: output.PortName !== undefined && output.PortName !== null ? output.PortName : undefined,
    };
};
var deserializeAws_restJson1ActionTarget = function (output, context) {
    return {
        ActionTargetArn: output.ActionTargetArn !== undefined && output.ActionTargetArn !== null ? output.ActionTargetArn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1ActionTargetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActionTarget(entry, context);
    });
};
var deserializeAws_restJson1AdminAccount = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AdminAccounts = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdminAccount(entry, context);
    });
};
var deserializeAws_restJson1AvailabilityZone = function (output, context) {
    return {
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        ZoneName: output.ZoneName !== undefined && output.ZoneName !== null ? output.ZoneName : undefined,
    };
};
var deserializeAws_restJson1AvailabilityZones = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AvailabilityZone(entry, context);
    });
};
var deserializeAws_restJson1AwsApiCallAction = function (output, context) {
    return {
        AffectedResources: output.AffectedResources !== undefined && output.AffectedResources !== null
            ? deserializeAws_restJson1FieldMap(output.AffectedResources, context)
            : undefined,
        Api: output.Api !== undefined && output.Api !== null ? output.Api : undefined,
        CallerType: output.CallerType !== undefined && output.CallerType !== null ? output.CallerType : undefined,
        DomainDetails: output.DomainDetails !== undefined && output.DomainDetails !== null
            ? deserializeAws_restJson1AwsApiCallActionDomainDetails(output.DomainDetails, context)
            : undefined,
        FirstSeen: output.FirstSeen !== undefined && output.FirstSeen !== null ? output.FirstSeen : undefined,
        LastSeen: output.LastSeen !== undefined && output.LastSeen !== null ? output.LastSeen : undefined,
        RemoteIpDetails: output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
            ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
            : undefined,
        ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    };
};
var deserializeAws_restJson1AwsApiCallActionDomainDetails = function (output, context) {
    return {
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayAccessLogSettings = function (output, context) {
    return {
        DestinationArn: output.DestinationArn !== undefined && output.DestinationArn !== null ? output.DestinationArn : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayCanarySettings = function (output, context) {
    return {
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        PercentTraffic: output.PercentTraffic !== undefined && output.PercentTraffic !== null ? output.PercentTraffic : undefined,
        StageVariableOverrides: output.StageVariableOverrides !== undefined && output.StageVariableOverrides !== null
            ? deserializeAws_restJson1FieldMap(output.StageVariableOverrides, context)
            : undefined,
        UseStageCache: output.UseStageCache !== undefined && output.UseStageCache !== null ? output.UseStageCache : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayEndpointConfiguration = function (output, context) {
    return {
        Types: output.Types !== undefined && output.Types !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.Types, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayMethodSettings = function (output, context) {
    return {
        CacheDataEncrypted: output.CacheDataEncrypted !== undefined && output.CacheDataEncrypted !== null
            ? output.CacheDataEncrypted
            : undefined,
        CacheTtlInSeconds: output.CacheTtlInSeconds !== undefined && output.CacheTtlInSeconds !== null
            ? output.CacheTtlInSeconds
            : undefined,
        CachingEnabled: output.CachingEnabled !== undefined && output.CachingEnabled !== null ? output.CachingEnabled : undefined,
        DataTraceEnabled: output.DataTraceEnabled !== undefined && output.DataTraceEnabled !== null ? output.DataTraceEnabled : undefined,
        HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
        LoggingLevel: output.LoggingLevel !== undefined && output.LoggingLevel !== null ? output.LoggingLevel : undefined,
        MetricsEnabled: output.MetricsEnabled !== undefined && output.MetricsEnabled !== null ? output.MetricsEnabled : undefined,
        RequireAuthorizationForCacheControl: output.RequireAuthorizationForCacheControl !== undefined && output.RequireAuthorizationForCacheControl !== null
            ? output.RequireAuthorizationForCacheControl
            : undefined,
        ResourcePath: output.ResourcePath !== undefined && output.ResourcePath !== null ? output.ResourcePath : undefined,
        ThrottlingBurstLimit: output.ThrottlingBurstLimit !== undefined && output.ThrottlingBurstLimit !== null
            ? output.ThrottlingBurstLimit
            : undefined,
        ThrottlingRateLimit: output.ThrottlingRateLimit !== undefined && output.ThrottlingRateLimit !== null
            ? output.ThrottlingRateLimit
            : undefined,
        UnauthorizedCacheControlHeaderStrategy: output.UnauthorizedCacheControlHeaderStrategy !== undefined &&
            output.UnauthorizedCacheControlHeaderStrategy !== null
            ? output.UnauthorizedCacheControlHeaderStrategy
            : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayMethodSettingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
};
var deserializeAws_restJson1AwsApiGatewayRestApiDetails = function (output, context) {
    return {
        ApiKeySource: output.ApiKeySource !== undefined && output.ApiKeySource !== null ? output.ApiKeySource : undefined,
        BinaryMediaTypes: output.BinaryMediaTypes !== undefined && output.BinaryMediaTypes !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.BinaryMediaTypes, context)
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EndpointConfiguration: output.EndpointConfiguration !== undefined && output.EndpointConfiguration !== null
            ? deserializeAws_restJson1AwsApiGatewayEndpointConfiguration(output.EndpointConfiguration, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MinimumCompressionSize: output.MinimumCompressionSize !== undefined && output.MinimumCompressionSize !== null
            ? output.MinimumCompressionSize
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayStageDetails = function (output, context) {
    return {
        AccessLogSettings: output.AccessLogSettings !== undefined && output.AccessLogSettings !== null
            ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
            : undefined,
        CacheClusterEnabled: output.CacheClusterEnabled !== undefined && output.CacheClusterEnabled !== null
            ? output.CacheClusterEnabled
            : undefined,
        CacheClusterSize: output.CacheClusterSize !== undefined && output.CacheClusterSize !== null ? output.CacheClusterSize : undefined,
        CacheClusterStatus: output.CacheClusterStatus !== undefined && output.CacheClusterStatus !== null
            ? output.CacheClusterStatus
            : undefined,
        CanarySettings: output.CanarySettings !== undefined && output.CanarySettings !== null
            ? deserializeAws_restJson1AwsApiGatewayCanarySettings(output.CanarySettings, context)
            : undefined,
        ClientCertificateId: output.ClientCertificateId !== undefined && output.ClientCertificateId !== null
            ? output.ClientCertificateId
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DocumentationVersion: output.DocumentationVersion !== undefined && output.DocumentationVersion !== null
            ? output.DocumentationVersion
            : undefined,
        LastUpdatedDate: output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
        MethodSettings: output.MethodSettings !== undefined && output.MethodSettings !== null
            ? deserializeAws_restJson1AwsApiGatewayMethodSettingsList(output.MethodSettings, context)
            : undefined,
        StageName: output.StageName !== undefined && output.StageName !== null ? output.StageName : undefined,
        TracingEnabled: output.TracingEnabled !== undefined && output.TracingEnabled !== null ? output.TracingEnabled : undefined,
        Variables: output.Variables !== undefined && output.Variables !== null
            ? deserializeAws_restJson1FieldMap(output.Variables, context)
            : undefined,
        WebAclArn: output.WebAclArn !== undefined && output.WebAclArn !== null ? output.WebAclArn : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayV2ApiDetails = function (output, context) {
    return {
        ApiEndpoint: output.ApiEndpoint !== undefined && output.ApiEndpoint !== null ? output.ApiEndpoint : undefined,
        ApiId: output.ApiId !== undefined && output.ApiId !== null ? output.ApiId : undefined,
        ApiKeySelectionExpression: output.ApiKeySelectionExpression !== undefined && output.ApiKeySelectionExpression !== null
            ? output.ApiKeySelectionExpression
            : undefined,
        CorsConfiguration: output.CorsConfiguration !== undefined && output.CorsConfiguration !== null
            ? deserializeAws_restJson1AwsCorsConfiguration(output.CorsConfiguration, context)
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ProtocolType: output.ProtocolType !== undefined && output.ProtocolType !== null ? output.ProtocolType : undefined,
        RouteSelectionExpression: output.RouteSelectionExpression !== undefined && output.RouteSelectionExpression !== null
            ? output.RouteSelectionExpression
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayV2RouteSettings = function (output, context) {
    return {
        DataTraceEnabled: output.DataTraceEnabled !== undefined && output.DataTraceEnabled !== null ? output.DataTraceEnabled : undefined,
        DetailedMetricsEnabled: output.DetailedMetricsEnabled !== undefined && output.DetailedMetricsEnabled !== null
            ? output.DetailedMetricsEnabled
            : undefined,
        LoggingLevel: output.LoggingLevel !== undefined && output.LoggingLevel !== null ? output.LoggingLevel : undefined,
        ThrottlingBurstLimit: output.ThrottlingBurstLimit !== undefined && output.ThrottlingBurstLimit !== null
            ? output.ThrottlingBurstLimit
            : undefined,
        ThrottlingRateLimit: output.ThrottlingRateLimit !== undefined && output.ThrottlingRateLimit !== null
            ? output.ThrottlingRateLimit
            : undefined,
    };
};
var deserializeAws_restJson1AwsApiGatewayV2StageDetails = function (output, context) {
    return {
        AccessLogSettings: output.AccessLogSettings !== undefined && output.AccessLogSettings !== null
            ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
            : undefined,
        ApiGatewayManaged: output.ApiGatewayManaged !== undefined && output.ApiGatewayManaged !== null
            ? output.ApiGatewayManaged
            : undefined,
        AutoDeploy: output.AutoDeploy !== undefined && output.AutoDeploy !== null ? output.AutoDeploy : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        DefaultRouteSettings: output.DefaultRouteSettings !== undefined && output.DefaultRouteSettings !== null
            ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.DefaultRouteSettings, context)
            : undefined,
        DeploymentId: output.DeploymentId !== undefined && output.DeploymentId !== null ? output.DeploymentId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastDeploymentStatusMessage: output.LastDeploymentStatusMessage !== undefined && output.LastDeploymentStatusMessage !== null
            ? output.LastDeploymentStatusMessage
            : undefined,
        LastUpdatedDate: output.LastUpdatedDate !== undefined && output.LastUpdatedDate !== null ? output.LastUpdatedDate : undefined,
        RouteSettings: output.RouteSettings !== undefined && output.RouteSettings !== null
            ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.RouteSettings, context)
            : undefined,
        StageName: output.StageName !== undefined && output.StageName !== null ? output.StageName : undefined,
        StageVariables: output.StageVariables !== undefined && output.StageVariables !== null
            ? deserializeAws_restJson1FieldMap(output.StageVariables, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = function (output, context) {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        HealthCheckGracePeriod: output.HealthCheckGracePeriod !== undefined && output.HealthCheckGracePeriod !== null
            ? output.HealthCheckGracePeriod
            : undefined,
        HealthCheckType: output.HealthCheckType !== undefined && output.HealthCheckType !== null ? output.HealthCheckType : undefined,
        LaunchConfigurationName: output.LaunchConfigurationName !== undefined && output.LaunchConfigurationName !== null
            ? output.LaunchConfigurationName
            : undefined,
        LoadBalancerNames: output.LoadBalancerNames !== undefined && output.LoadBalancerNames !== null
            ? deserializeAws_restJson1StringList(output.LoadBalancerNames, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateDetails = function (output, context) {
    return {
        CertificateAuthorityArn: output.CertificateAuthorityArn !== undefined && output.CertificateAuthorityArn !== null
            ? output.CertificateAuthorityArn
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        DomainValidationOptions: output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(output.DomainValidationOptions, context)
            : undefined,
        ExtendedKeyUsages: output.ExtendedKeyUsages !== undefined && output.ExtendedKeyUsages !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(output.ExtendedKeyUsages, context)
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        ImportedAt: output.ImportedAt !== undefined && output.ImportedAt !== null ? output.ImportedAt : undefined,
        InUseBy: output.InUseBy !== undefined && output.InUseBy !== null
            ? deserializeAws_restJson1StringList(output.InUseBy, context)
            : undefined,
        IssuedAt: output.IssuedAt !== undefined && output.IssuedAt !== null ? output.IssuedAt : undefined,
        Issuer: output.Issuer !== undefined && output.Issuer !== null ? output.Issuer : undefined,
        KeyAlgorithm: output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null ? output.KeyAlgorithm : undefined,
        KeyUsages: output.KeyUsages !== undefined && output.KeyUsages !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(output.KeyUsages, context)
            : undefined,
        NotAfter: output.NotAfter !== undefined && output.NotAfter !== null ? output.NotAfter : undefined,
        NotBefore: output.NotBefore !== undefined && output.NotBefore !== null ? output.NotBefore : undefined,
        Options: output.Options !== undefined && output.Options !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateOptions(output.Options, context)
            : undefined,
        RenewalEligibility: output.RenewalEligibility !== undefined && output.RenewalEligibility !== null
            ? output.RenewalEligibility
            : undefined,
        RenewalSummary: output.RenewalSummary !== undefined && output.RenewalSummary !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(output.RenewalSummary, context)
            : undefined,
        Serial: output.Serial !== undefined && output.Serial !== null ? output.Serial : undefined,
        SignatureAlgorithm: output.SignatureAlgorithm !== undefined && output.SignatureAlgorithm !== null
            ? output.SignatureAlgorithm
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Subject: output.Subject !== undefined && output.Subject !== null ? output.Subject : undefined,
        SubjectAlternativeNames: output.SubjectAlternativeNames !== undefined && output.SubjectAlternativeNames !== null
            ? deserializeAws_restJson1StringList(output.SubjectAlternativeNames, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = function (output, context) {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ResourceRecord: output.ResourceRecord !== undefined && output.ResourceRecord !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(output.ResourceRecord, context)
            : undefined,
        ValidationDomain: output.ValidationDomain !== undefined && output.ValidationDomain !== null ? output.ValidationDomain : undefined,
        ValidationEmails: output.ValidationEmails !== undefined && output.ValidationEmails !== null
            ? deserializeAws_restJson1StringList(output.ValidationEmails, context)
            : undefined,
        ValidationMethod: output.ValidationMethod !== undefined && output.ValidationMethod !== null ? output.ValidationMethod : undefined,
        ValidationStatus: output.ValidationStatus !== undefined && output.ValidationStatus !== null ? output.ValidationStatus : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
};
var deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OId: output.OId !== undefined && output.OId !== null ? output.OId : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
};
var deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
};
var deserializeAws_restJson1AwsCertificateManagerCertificateOptions = function (output, context) {
    return {
        CertificateTransparencyLoggingPreference: output.CertificateTransparencyLoggingPreference !== undefined &&
            output.CertificateTransparencyLoggingPreference !== null
            ? output.CertificateTransparencyLoggingPreference
            : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = function (output, context) {
    return {
        DomainValidationOptions: output.DomainValidationOptions !== undefined && output.DomainValidationOptions !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(output.DomainValidationOptions, context)
            : undefined,
        RenewalStatus: output.RenewalStatus !== undefined && output.RenewalStatus !== null ? output.RenewalStatus : undefined,
        RenewalStatusReason: output.RenewalStatusReason !== undefined && output.RenewalStatusReason !== null
            ? output.RenewalStatusReason
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
    };
};
var deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = function (output, context) {
    return {
        ViewerProtocolPolicy: output.ViewerProtocolPolicy !== undefined && output.ViewerProtocolPolicy !== null
            ? output.ViewerProtocolPolicy
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(output.Items, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
};
var deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = function (output, context) {
    return {
        ViewerProtocolPolicy: output.ViewerProtocolPolicy !== undefined && output.ViewerProtocolPolicy !== null
            ? output.ViewerProtocolPolicy
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionDetails = function (output, context) {
    return {
        CacheBehaviors: output.CacheBehaviors !== undefined && output.CacheBehaviors !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(output.CacheBehaviors, context)
            : undefined,
        DefaultCacheBehavior: output.DefaultCacheBehavior !== undefined && output.DefaultCacheBehavior !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(output.DefaultCacheBehavior, context)
            : undefined,
        DefaultRootObject: output.DefaultRootObject !== undefined && output.DefaultRootObject !== null
            ? output.DefaultRootObject
            : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null ? output.LastModifiedTime : undefined,
        Logging: output.Logging !== undefined && output.Logging !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionLogging(output.Logging, context)
            : undefined,
        OriginGroups: output.OriginGroups !== undefined && output.OriginGroups !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups(output.OriginGroups, context)
            : undefined,
        Origins: output.Origins !== undefined && output.Origins !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOrigins(output.Origins, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionLogging = function (output, context) {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        IncludeCookies: output.IncludeCookies !== undefined && output.IncludeCookies !== null ? output.IncludeCookies : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup = function (output, context) {
    return {
        FailoverCriteria: output.FailoverCriteria !== undefined && output.FailoverCriteria !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(output.FailoverCriteria, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = function (output, context) {
    return {
        StatusCodes: output.StatusCodes !== undefined && output.StatusCodes !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(output.StatusCodes, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(output.Items, context)
            : undefined,
        Quantity: output.Quantity !== undefined && output.Quantity !== null ? output.Quantity : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(output.Items, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginItem = function (output, context) {
    return {
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        OriginPath: output.OriginPath !== undefined && output.OriginPath !== null ? output.OriginPath : undefined,
        S3OriginConfig: output.S3OriginConfig !== undefined && output.S3OriginConfig !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(output.S3OriginConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
};
var deserializeAws_restJson1AwsCloudFrontDistributionOrigins = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList(output.Items, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = function (output, context) {
    return {
        OriginAccessIdentity: output.OriginAccessIdentity !== undefined && output.OriginAccessIdentity !== null
            ? output.OriginAccessIdentity
            : undefined,
    };
};
var deserializeAws_restJson1AwsCloudTrailTrailDetails = function (output, context) {
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
        SnsTopicArn: output.SnsTopicArn !== undefined && output.SnsTopicArn !== null ? output.SnsTopicArn : undefined,
        SnsTopicName: output.SnsTopicName !== undefined && output.SnsTopicName !== null ? output.SnsTopicName : undefined,
        TrailArn: output.TrailArn !== undefined && output.TrailArn !== null ? output.TrailArn : undefined,
    };
};
var deserializeAws_restJson1AwsCodeBuildProjectDetails = function (output, context) {
    return {
        EncryptionKey: output.EncryptionKey !== undefined && output.EncryptionKey !== null ? output.EncryptionKey : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_restJson1AwsCodeBuildProjectEnvironment(output.Environment, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ServiceRole: output.ServiceRole !== undefined && output.ServiceRole !== null ? output.ServiceRole : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_restJson1AwsCodeBuildProjectSource(output.Source, context)
            : undefined,
        VpcConfig: output.VpcConfig !== undefined && output.VpcConfig !== null
            ? deserializeAws_restJson1AwsCodeBuildProjectVpcConfig(output.VpcConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsCodeBuildProjectEnvironment = function (output, context) {
    return {
        Certificate: output.Certificate !== undefined && output.Certificate !== null ? output.Certificate : undefined,
        ImagePullCredentialsType: output.ImagePullCredentialsType !== undefined && output.ImagePullCredentialsType !== null
            ? output.ImagePullCredentialsType
            : undefined,
        RegistryCredential: output.RegistryCredential !== undefined && output.RegistryCredential !== null
            ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(output.RegistryCredential, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = function (output, context) {
    return {
        Credential: output.Credential !== undefined && output.Credential !== null ? output.Credential : undefined,
        CredentialProvider: output.CredentialProvider !== undefined && output.CredentialProvider !== null
            ? output.CredentialProvider
            : undefined,
    };
};
var deserializeAws_restJson1AwsCodeBuildProjectSource = function (output, context) {
    return {
        GitCloneDepth: output.GitCloneDepth !== undefined && output.GitCloneDepth !== null ? output.GitCloneDepth : undefined,
        InsecureSsl: output.InsecureSsl !== undefined && output.InsecureSsl !== null ? output.InsecureSsl : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1AwsCodeBuildProjectVpcConfig = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
            : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsCorsConfiguration = function (output, context) {
    return {
        AllowCredentials: output.AllowCredentials !== undefined && output.AllowCredentials !== null ? output.AllowCredentials : undefined,
        AllowHeaders: output.AllowHeaders !== undefined && output.AllowHeaders !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.AllowHeaders, context)
            : undefined,
        AllowMethods: output.AllowMethods !== undefined && output.AllowMethods !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.AllowMethods, context)
            : undefined,
        AllowOrigins: output.AllowOrigins !== undefined && output.AllowOrigins !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.AllowOrigins, context)
            : undefined,
        ExposeHeaders: output.ExposeHeaders !== undefined && output.ExposeHeaders !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.ExposeHeaders, context)
            : undefined,
        MaxAge: output.MaxAge !== undefined && output.MaxAge !== null ? output.MaxAge : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary = function (output, context) {
    return {
        BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
        LastUpdateToPayPerRequestDateTime: output.LastUpdateToPayPerRequestDateTime !== undefined && output.LastUpdateToPayPerRequestDateTime !== null
            ? output.LastUpdateToPayPerRequestDateTime
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableDetails = function (output, context) {
    return {
        AttributeDefinitions: output.AttributeDefinitions !== undefined && output.AttributeDefinitions !== null
            ? deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(output.AttributeDefinitions, context)
            : undefined,
        BillingModeSummary: output.BillingModeSummary !== undefined && output.BillingModeSummary !== null
            ? deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary(output.BillingModeSummary, context)
            : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null ? output.CreationDateTime : undefined,
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
            : undefined,
        GlobalTableVersion: output.GlobalTableVersion !== undefined && output.GlobalTableVersion !== null
            ? output.GlobalTableVersion
            : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
            : undefined,
        LatestStreamArn: output.LatestStreamArn !== undefined && output.LatestStreamArn !== null ? output.LatestStreamArn : undefined,
        LatestStreamLabel: output.LatestStreamLabel !== undefined && output.LatestStreamLabel !== null
            ? output.LatestStreamLabel
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(output.LocalSecondaryIndexes, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
        Replicas: output.Replicas !== undefined && output.Replicas !== null
            ? deserializeAws_restJson1AwsDynamoDbTableReplicaList(output.Replicas, context)
            : undefined,
        RestoreSummary: output.RestoreSummary !== undefined && output.RestoreSummary !== null
            ? deserializeAws_restJson1AwsDynamoDbTableRestoreSummary(output.RestoreSummary, context)
            : undefined,
        SseDescription: output.SseDescription !== undefined && output.SseDescription !== null
            ? deserializeAws_restJson1AwsDynamoDbTableSseDescription(output.SseDescription, context)
            : undefined,
        StreamSpecification: output.StreamSpecification !== undefined && output.StreamSpecification !== null
            ? deserializeAws_restJson1AwsDynamoDbTableStreamSpecification(output.StreamSpecification, context)
            : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableSizeBytes: output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = function (output, context) {
    return {
        Backfilling: output.Backfilling !== undefined && output.Backfilling !== null ? output.Backfilling : undefined,
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexSizeBytes: output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableKeySchema = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableKeySchemaList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = function (output, context) {
    return {
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableProjection = function (output, context) {
    return {
        NonKeyAttributes: output.NonKeyAttributes !== undefined && output.NonKeyAttributes !== null
            ? deserializeAws_restJson1StringList(output.NonKeyAttributes, context)
            : undefined,
        ProjectionType: output.ProjectionType !== undefined && output.ProjectionType !== null ? output.ProjectionType : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = function (output, context) {
    return {
        LastDecreaseDateTime: output.LastDecreaseDateTime !== undefined && output.LastDecreaseDateTime !== null
            ? output.LastDecreaseDateTime
            : undefined,
        LastIncreaseDateTime: output.LastIncreaseDateTime !== undefined && output.LastIncreaseDateTime !== null
            ? output.LastIncreaseDateTime
            : undefined,
        NumberOfDecreasesToday: output.NumberOfDecreasesToday !== undefined && output.NumberOfDecreasesToday !== null
            ? output.NumberOfDecreasesToday
            : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = function (output, context) {
    return {
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableReplica = function (output, context) {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
            : undefined,
        KmsMasterKeyId: output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
        ReplicaStatusDescription: output.ReplicaStatusDescription !== undefined && output.ReplicaStatusDescription !== null
            ? output.ReplicaStatusDescription
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableReplicaList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
};
var deserializeAws_restJson1AwsDynamoDbTableRestoreSummary = function (output, context) {
    return {
        RestoreDateTime: output.RestoreDateTime !== undefined && output.RestoreDateTime !== null ? output.RestoreDateTime : undefined,
        RestoreInProgress: output.RestoreInProgress !== undefined && output.RestoreInProgress !== null
            ? output.RestoreInProgress
            : undefined,
        SourceBackupArn: output.SourceBackupArn !== undefined && output.SourceBackupArn !== null ? output.SourceBackupArn : undefined,
        SourceTableArn: output.SourceTableArn !== undefined && output.SourceTableArn !== null ? output.SourceTableArn : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableSseDescription = function (output, context) {
    return {
        InaccessibleEncryptionDateTime: output.InaccessibleEncryptionDateTime !== undefined && output.InaccessibleEncryptionDateTime !== null
            ? output.InaccessibleEncryptionDateTime
            : undefined,
        KmsMasterKeyArn: output.KmsMasterKeyArn !== undefined && output.KmsMasterKeyArn !== null ? output.KmsMasterKeyArn : undefined,
        SseType: output.SseType !== undefined && output.SseType !== null ? output.SseType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsDynamoDbTableStreamSpecification = function (output, context) {
    return {
        StreamEnabled: output.StreamEnabled !== undefined && output.StreamEnabled !== null ? output.StreamEnabled : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
    };
};
var deserializeAws_restJson1AwsEc2EipDetails = function (output, context) {
    return {
        AllocationId: output.AllocationId !== undefined && output.AllocationId !== null ? output.AllocationId : undefined,
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        NetworkBorderGroup: output.NetworkBorderGroup !== undefined && output.NetworkBorderGroup !== null
            ? output.NetworkBorderGroup
            : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        NetworkInterfaceOwnerId: output.NetworkInterfaceOwnerId !== undefined && output.NetworkInterfaceOwnerId !== null
            ? output.NetworkInterfaceOwnerId
            : undefined,
        PrivateIpAddress: output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
        PublicIp: output.PublicIp !== undefined && output.PublicIp !== null ? output.PublicIp : undefined,
        PublicIpv4Pool: output.PublicIpv4Pool !== undefined && output.PublicIpv4Pool !== null ? output.PublicIpv4Pool : undefined,
    };
};
var deserializeAws_restJson1AwsEc2InstanceDetails = function (output, context) {
    return {
        IamInstanceProfileArn: output.IamInstanceProfileArn !== undefined && output.IamInstanceProfileArn !== null
            ? output.IamInstanceProfileArn
            : undefined,
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
        IpV4Addresses: output.IpV4Addresses !== undefined && output.IpV4Addresses !== null
            ? deserializeAws_restJson1StringList(output.IpV4Addresses, context)
            : undefined,
        IpV6Addresses: output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
            ? deserializeAws_restJson1StringList(output.IpV6Addresses, context)
            : undefined,
        KeyName: output.KeyName !== undefined && output.KeyName !== null ? output.KeyName : undefined,
        LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkAclAssociation = function (output, context) {
    return {
        NetworkAclAssociationId: output.NetworkAclAssociationId !== undefined && output.NetworkAclAssociationId !== null
            ? output.NetworkAclAssociationId
            : undefined,
        NetworkAclId: output.NetworkAclId !== undefined && output.NetworkAclId !== null ? output.NetworkAclId : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkAclAssociationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2NetworkAclDetails = function (output, context) {
    return {
        Associations: output.Associations !== undefined && output.Associations !== null
            ? deserializeAws_restJson1AwsEc2NetworkAclAssociationList(output.Associations, context)
            : undefined,
        Entries: output.Entries !== undefined && output.Entries !== null
            ? deserializeAws_restJson1AwsEc2NetworkAclEntryList(output.Entries, context)
            : undefined,
        IsDefault: output.IsDefault !== undefined && output.IsDefault !== null ? output.IsDefault : undefined,
        NetworkAclId: output.NetworkAclId !== undefined && output.NetworkAclId !== null ? output.NetworkAclId : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkAclEntry = function (output, context) {
    return {
        CidrBlock: output.CidrBlock !== undefined && output.CidrBlock !== null ? output.CidrBlock : undefined,
        Egress: output.Egress !== undefined && output.Egress !== null ? output.Egress : undefined,
        IcmpTypeCode: output.IcmpTypeCode !== undefined && output.IcmpTypeCode !== null
            ? deserializeAws_restJson1IcmpTypeCode(output.IcmpTypeCode, context)
            : undefined,
        Ipv6CidrBlock: output.Ipv6CidrBlock !== undefined && output.Ipv6CidrBlock !== null ? output.Ipv6CidrBlock : undefined,
        PortRange: output.PortRange !== undefined && output.PortRange !== null
            ? deserializeAws_restJson1PortRangeFromTo(output.PortRange, context)
            : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        RuleAction: output.RuleAction !== undefined && output.RuleAction !== null ? output.RuleAction : undefined,
        RuleNumber: output.RuleNumber !== undefined && output.RuleNumber !== null ? output.RuleNumber : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkAclEntryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment = function (output, context) {
    return {
        AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
        AttachmentId: output.AttachmentId !== undefined && output.AttachmentId !== null ? output.AttachmentId : undefined,
        DeleteOnTermination: output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
            ? output.DeleteOnTermination
            : undefined,
        DeviceIndex: output.DeviceIndex !== undefined && output.DeviceIndex !== null ? output.DeviceIndex : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        InstanceOwnerId: output.InstanceOwnerId !== undefined && output.InstanceOwnerId !== null ? output.InstanceOwnerId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceDetails = function (output, context) {
    return {
        Attachment: output.Attachment !== undefined && output.Attachment !== null
            ? deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment(output.Attachment, context)
            : undefined,
        IpV6Addresses: output.IpV6Addresses !== undefined && output.IpV6Addresses !== null
            ? deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(output.IpV6Addresses, context)
            : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        PrivateIpAddresses: output.PrivateIpAddresses !== undefined && output.PrivateIpAddresses !== null
            ? deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(output.PrivateIpAddresses, context)
            : undefined,
        PublicDnsName: output.PublicDnsName !== undefined && output.PublicDnsName !== null ? output.PublicDnsName : undefined,
        PublicIp: output.PublicIp !== undefined && output.PublicIp !== null ? output.PublicIp : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(output.SecurityGroups, context)
            : undefined,
        SourceDestCheck: output.SourceDestCheck !== undefined && output.SourceDestCheck !== null ? output.SourceDestCheck : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = function (output, context) {
    return {
        IpV6Address: output.IpV6Address !== undefined && output.IpV6Address !== null ? output.IpV6Address : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = function (output, context) {
    return {
        PrivateDnsName: output.PrivateDnsName !== undefined && output.PrivateDnsName !== null ? output.PrivateDnsName : undefined,
        PrivateIpAddress: output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = function (output, context) {
    return {
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    };
};
var deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SecurityGroupDetails = function (output, context) {
    return {
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        IpPermissions: output.IpPermissions !== undefined && output.IpPermissions !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissions, context)
            : undefined,
        IpPermissionsEgress: output.IpPermissionsEgress !== undefined && output.IpPermissionsEgress !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissionsEgress, context)
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpPermission = function (output, context) {
    return {
        FromPort: output.FromPort !== undefined && output.FromPort !== null ? output.FromPort : undefined,
        IpProtocol: output.IpProtocol !== undefined && output.IpProtocol !== null ? output.IpProtocol : undefined,
        IpRanges: output.IpRanges !== undefined && output.IpRanges !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList(output.IpRanges, context)
            : undefined,
        Ipv6Ranges: output.Ipv6Ranges !== undefined && output.Ipv6Ranges !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(output.Ipv6Ranges, context)
            : undefined,
        PrefixListIds: output.PrefixListIds !== undefined && output.PrefixListIds !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(output.PrefixListIds, context)
            : undefined,
        ToPort: output.ToPort !== undefined && output.ToPort !== null ? output.ToPort : undefined,
        UserIdGroupPairs: output.UserIdGroupPairs !== undefined && output.UserIdGroupPairs !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(output.UserIdGroupPairs, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpRange = function (output, context) {
    return {
        CidrIp: output.CidrIp !== undefined && output.CidrIp !== null ? output.CidrIp : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range = function (output, context) {
    return {
        CidrIpv6: output.CidrIpv6 !== undefined && output.CidrIpv6 !== null ? output.CidrIpv6 : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId = function (output, context) {
    return {
        PrefixListId: output.PrefixListId !== undefined && output.PrefixListId !== null ? output.PrefixListId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = function (output, context) {
    return {
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        PeeringStatus: output.PeeringStatus !== undefined && output.PeeringStatus !== null ? output.PeeringStatus : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        VpcPeeringConnectionId: output.VpcPeeringConnectionId !== undefined && output.VpcPeeringConnectionId !== null
            ? output.VpcPeeringConnectionId
            : undefined,
    };
};
var deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2SubnetDetails = function (output, context) {
    return {
        AssignIpv6AddressOnCreation: output.AssignIpv6AddressOnCreation !== undefined && output.AssignIpv6AddressOnCreation !== null
            ? output.AssignIpv6AddressOnCreation
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        AvailabilityZoneId: output.AvailabilityZoneId !== undefined && output.AvailabilityZoneId !== null
            ? output.AvailabilityZoneId
            : undefined,
        AvailableIpAddressCount: output.AvailableIpAddressCount !== undefined && output.AvailableIpAddressCount !== null
            ? output.AvailableIpAddressCount
            : undefined,
        CidrBlock: output.CidrBlock !== undefined && output.CidrBlock !== null ? output.CidrBlock : undefined,
        DefaultForAz: output.DefaultForAz !== undefined && output.DefaultForAz !== null ? output.DefaultForAz : undefined,
        Ipv6CidrBlockAssociationSet: output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
            ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
            : undefined,
        MapPublicIpOnLaunch: output.MapPublicIpOnLaunch !== undefined && output.MapPublicIpOnLaunch !== null
            ? output.MapPublicIpOnLaunch
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        SubnetArn: output.SubnetArn !== undefined && output.SubnetArn !== null ? output.SubnetArn : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsEc2VolumeAttachment = function (output, context) {
    return {
        AttachTime: output.AttachTime !== undefined && output.AttachTime !== null ? output.AttachTime : undefined,
        DeleteOnTermination: output.DeleteOnTermination !== undefined && output.DeleteOnTermination !== null
            ? output.DeleteOnTermination
            : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsEc2VolumeAttachmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
};
var deserializeAws_restJson1AwsEc2VolumeDetails = function (output, context) {
    return {
        Attachments: output.Attachments !== undefined && output.Attachments !== null
            ? deserializeAws_restJson1AwsEc2VolumeAttachmentList(output.Attachments, context)
            : undefined,
        CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? output.CreateTime : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsEc2VpcDetails = function (output, context) {
    return {
        CidrBlockAssociationSet: output.CidrBlockAssociationSet !== undefined && output.CidrBlockAssociationSet !== null
            ? deserializeAws_restJson1CidrBlockAssociationList(output.CidrBlockAssociationSet, context)
            : undefined,
        DhcpOptionsId: output.DhcpOptionsId !== undefined && output.DhcpOptionsId !== null ? output.DhcpOptionsId : undefined,
        Ipv6CidrBlockAssociationSet: output.Ipv6CidrBlockAssociationSet !== undefined && output.Ipv6CidrBlockAssociationSet !== null
            ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = function (output, context) {
    return {
        ApplicationName: output.ApplicationName !== undefined && output.ApplicationName !== null ? output.ApplicationName : undefined,
        Cname: output.Cname !== undefined && output.Cname !== null ? output.Cname : undefined,
        DateCreated: output.DateCreated !== undefined && output.DateCreated !== null ? output.DateCreated : undefined,
        DateUpdated: output.DateUpdated !== undefined && output.DateUpdated !== null ? output.DateUpdated : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EndpointUrl: output.EndpointUrl !== undefined && output.EndpointUrl !== null ? output.EndpointUrl : undefined,
        EnvironmentArn: output.EnvironmentArn !== undefined && output.EnvironmentArn !== null ? output.EnvironmentArn : undefined,
        EnvironmentId: output.EnvironmentId !== undefined && output.EnvironmentId !== null ? output.EnvironmentId : undefined,
        EnvironmentLinks: output.EnvironmentLinks !== undefined && output.EnvironmentLinks !== null
            ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(output.EnvironmentLinks, context)
            : undefined,
        EnvironmentName: output.EnvironmentName !== undefined && output.EnvironmentName !== null ? output.EnvironmentName : undefined,
        OptionSettings: output.OptionSettings !== undefined && output.OptionSettings !== null
            ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(output.OptionSettings, context)
            : undefined,
        PlatformArn: output.PlatformArn !== undefined && output.PlatformArn !== null ? output.PlatformArn : undefined,
        SolutionStackName: output.SolutionStackName !== undefined && output.SolutionStackName !== null
            ? output.SolutionStackName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tier: output.Tier !== undefined && output.Tier !== null
            ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(output.Tier, context)
            : undefined,
        VersionLabel: output.VersionLabel !== undefined && output.VersionLabel !== null ? output.VersionLabel : undefined,
    };
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = function (output, context) {
    return {
        EnvironmentName: output.EnvironmentName !== undefined && output.EnvironmentName !== null ? output.EnvironmentName : undefined,
        LinkName: output.LinkName !== undefined && output.LinkName !== null ? output.LinkName : undefined,
    };
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = function (output, context) {
    return {
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
        OptionName: output.OptionName !== undefined && output.OptionName !== null ? output.OptionName : undefined,
        ResourceName: output.ResourceName !== undefined && output.ResourceName !== null ? output.ResourceName : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
};
var deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1AwsElasticsearchDomainDetails = function (output, context) {
    return {
        AccessPolicies: output.AccessPolicies !== undefined && output.AccessPolicies !== null ? output.AccessPolicies : undefined,
        DomainEndpointOptions: output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
            ? deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(output.DomainEndpointOptions, context)
            : undefined,
        DomainId: output.DomainId !== undefined && output.DomainId !== null ? output.DomainId : undefined,
        DomainName: output.DomainName !== undefined && output.DomainName !== null ? output.DomainName : undefined,
        ElasticsearchVersion: output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
            ? output.ElasticsearchVersion
            : undefined,
        EncryptionAtRestOptions: output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
            ? deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_restJson1FieldMap(output.Endpoints, context)
            : undefined,
        NodeToNodeEncryptionOptions: output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
            ? deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
            : undefined,
        VPCOptions: output.VPCOptions !== undefined && output.VPCOptions !== null
            ? deserializeAws_restJson1AwsElasticsearchDomainVPCOptions(output.VPCOptions, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = function (output, context) {
    return {
        EnforceHTTPS: output.EnforceHTTPS !== undefined && output.EnforceHTTPS !== null ? output.EnforceHTTPS : undefined,
        TLSSecurityPolicy: output.TLSSecurityPolicy !== undefined && output.TLSSecurityPolicy !== null
            ? output.TLSSecurityPolicy
            : undefined,
    };
};
var deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
    };
};
var deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1AwsElasticsearchDomainVPCOptions = function (output, context) {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.AvailabilityZones, context)
            : undefined,
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
            : undefined,
        VPCId: output.VPCId !== undefined && output.VPCId !== null ? output.VPCId : undefined,
    };
};
var deserializeAws_restJson1AwsElbAppCookieStickinessPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsElbAppCookieStickinessPolicy = function (output, context) {
    return {
        CookieName: output.CookieName !== undefined && output.CookieName !== null ? output.CookieName : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsElbLbCookieStickinessPolicies = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsElbLbCookieStickinessPolicy = function (output, context) {
    return {
        CookieExpirationPeriod: output.CookieExpirationPeriod !== undefined && output.CookieExpirationPeriod !== null
            ? output.CookieExpirationPeriod
            : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerAccessLog = function (output, context) {
    return {
        EmitInterval: output.EmitInterval !== undefined && output.EmitInterval !== null ? output.EmitInterval : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3BucketPrefix: output.S3BucketPrefix !== undefined && output.S3BucketPrefix !== null ? output.S3BucketPrefix : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerAttributes = function (output, context) {
    return {
        AccessLog: output.AccessLog !== undefined && output.AccessLog !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerAccessLog(output.AccessLog, context)
            : undefined,
        ConnectionDraining: output.ConnectionDraining !== undefined && output.ConnectionDraining !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining(output.ConnectionDraining, context)
            : undefined,
        ConnectionSettings: output.ConnectionSettings !== undefined && output.ConnectionSettings !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings(output.ConnectionSettings, context)
            : undefined,
        CrossZoneLoadBalancing: output.CrossZoneLoadBalancing !== undefined && output.CrossZoneLoadBalancing !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(output.CrossZoneLoadBalancing, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = function (output, context) {
    return {
        InstancePort: output.InstancePort !== undefined && output.InstancePort !== null ? output.InstancePort : undefined,
        PolicyNames: output.PolicyNames !== undefined && output.PolicyNames !== null
            ? deserializeAws_restJson1StringList(output.PolicyNames, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
};
var deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings = function (output, context) {
    return {
        IdleTimeout: output.IdleTimeout !== undefined && output.IdleTimeout !== null ? output.IdleTimeout : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = function (output, context) {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerDetails = function (output, context) {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
            : undefined,
        BackendServerDescriptions: output.BackendServerDescriptions !== undefined && output.BackendServerDescriptions !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(output.BackendServerDescriptions, context)
            : undefined,
        CanonicalHostedZoneName: output.CanonicalHostedZoneName !== undefined && output.CanonicalHostedZoneName !== null
            ? output.CanonicalHostedZoneName
            : undefined,
        CanonicalHostedZoneNameID: output.CanonicalHostedZoneNameID !== undefined && output.CanonicalHostedZoneNameID !== null
            ? output.CanonicalHostedZoneNameID
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        DnsName: output.DnsName !== undefined && output.DnsName !== null ? output.DnsName : undefined,
        HealthCheck: output.HealthCheck !== undefined && output.HealthCheck !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerHealthCheck(output.HealthCheck, context)
            : undefined,
        Instances: output.Instances !== undefined && output.Instances !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerInstances(output.Instances, context)
            : undefined,
        ListenerDescriptions: output.ListenerDescriptions !== undefined && output.ListenerDescriptions !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(output.ListenerDescriptions, context)
            : undefined,
        LoadBalancerAttributes: output.LoadBalancerAttributes !== undefined && output.LoadBalancerAttributes !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerAttributes(output.LoadBalancerAttributes, context)
            : undefined,
        LoadBalancerName: output.LoadBalancerName !== undefined && output.LoadBalancerName !== null ? output.LoadBalancerName : undefined,
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerPolicies(output.Policies, context)
            : undefined,
        Scheme: output.Scheme !== undefined && output.Scheme !== null ? output.Scheme : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_restJson1StringList(output.SecurityGroups, context)
            : undefined,
        SourceSecurityGroup: output.SourceSecurityGroup !== undefined && output.SourceSecurityGroup !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(output.SourceSecurityGroup, context)
            : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_restJson1StringList(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerHealthCheck = function (output, context) {
    return {
        HealthyThreshold: output.HealthyThreshold !== undefined && output.HealthyThreshold !== null ? output.HealthyThreshold : undefined,
        Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
        Target: output.Target !== undefined && output.Target !== null ? output.Target : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        UnhealthyThreshold: output.UnhealthyThreshold !== undefined && output.UnhealthyThreshold !== null
            ? output.UnhealthyThreshold
            : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerInstance = function (output, context) {
    return {
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerInstances = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
};
var deserializeAws_restJson1AwsElbLoadBalancerListener = function (output, context) {
    return {
        InstancePort: output.InstancePort !== undefined && output.InstancePort !== null ? output.InstancePort : undefined,
        InstanceProtocol: output.InstanceProtocol !== undefined && output.InstanceProtocol !== null ? output.InstanceProtocol : undefined,
        LoadBalancerPort: output.LoadBalancerPort !== undefined && output.LoadBalancerPort !== null ? output.LoadBalancerPort : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        SslCertificateId: output.SslCertificateId !== undefined && output.SslCertificateId !== null ? output.SslCertificateId : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerListenerDescription = function (output, context) {
    return {
        Listener: output.Listener !== undefined && output.Listener !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerListener(output.Listener, context)
            : undefined,
        PolicyNames: output.PolicyNames !== undefined && output.PolicyNames !== null
            ? deserializeAws_restJson1StringList(output.PolicyNames, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
};
var deserializeAws_restJson1AwsElbLoadBalancerPolicies = function (output, context) {
    return {
        AppCookieStickinessPolicies: output.AppCookieStickinessPolicies !== undefined && output.AppCookieStickinessPolicies !== null
            ? deserializeAws_restJson1AwsElbAppCookieStickinessPolicies(output.AppCookieStickinessPolicies, context)
            : undefined,
        LbCookieStickinessPolicies: output.LbCookieStickinessPolicies !== undefined && output.LbCookieStickinessPolicies !== null
            ? deserializeAws_restJson1AwsElbLbCookieStickinessPolicies(output.LbCookieStickinessPolicies, context)
            : undefined,
        OtherPolicies: output.OtherPolicies !== undefined && output.OtherPolicies !== null
            ? deserializeAws_restJson1StringList(output.OtherPolicies, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = function (output, context) {
    return {
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        OwnerAlias: output.OwnerAlias !== undefined && output.OwnerAlias !== null ? output.OwnerAlias : undefined,
    };
};
var deserializeAws_restJson1AwsElbv2LoadBalancerDetails = function (output, context) {
    return {
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1AvailabilityZones(output.AvailabilityZones, context)
            : undefined,
        CanonicalHostedZoneId: output.CanonicalHostedZoneId !== undefined && output.CanonicalHostedZoneId !== null
            ? output.CanonicalHostedZoneId
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null ? output.CreatedTime : undefined,
        DNSName: output.DNSName !== undefined && output.DNSName !== null ? output.DNSName : undefined,
        IpAddressType: output.IpAddressType !== undefined && output.IpAddressType !== null ? output.IpAddressType : undefined,
        Scheme: output.Scheme !== undefined && output.Scheme !== null ? output.Scheme : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
            : undefined,
        State: output.State !== undefined && output.State !== null
            ? deserializeAws_restJson1LoadBalancerState(output.State, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsIamAccessKeyDetails = function (output, context) {
    return {
        AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        PrincipalName: output.PrincipalName !== undefined && output.PrincipalName !== null ? output.PrincipalName : undefined,
        PrincipalType: output.PrincipalType !== undefined && output.PrincipalType !== null ? output.PrincipalType : undefined,
        SessionContext: output.SessionContext !== undefined && output.SessionContext !== null
            ? deserializeAws_restJson1AwsIamAccessKeySessionContext(output.SessionContext, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
var deserializeAws_restJson1AwsIamAccessKeySessionContext = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes(output.Attributes, context)
            : undefined,
        SessionIssuer: output.SessionIssuer !== undefined && output.SessionIssuer !== null
            ? deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(output.SessionIssuer, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes = function (output, context) {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        MfaAuthenticated: output.MfaAuthenticated !== undefined && output.MfaAuthenticated !== null ? output.MfaAuthenticated : undefined,
    };
};
var deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
var deserializeAws_restJson1AwsIamAttachedManagedPolicy = function (output, context) {
    return {
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsIamAttachedManagedPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsIamGroupDetails = function (output, context) {
    return {
        AttachedManagedPolicies: output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
            ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
            : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        GroupPolicyList: output.GroupPolicyList !== undefined && output.GroupPolicyList !== null
            ? deserializeAws_restJson1AwsIamGroupPolicyList(output.GroupPolicyList, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
var deserializeAws_restJson1AwsIamGroupPolicy = function (output, context) {
    return {
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsIamGroupPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsIamInstanceProfile = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        InstanceProfileId: output.InstanceProfileId !== undefined && output.InstanceProfileId !== null
            ? output.InstanceProfileId
            : undefined,
        InstanceProfileName: output.InstanceProfileName !== undefined && output.InstanceProfileName !== null
            ? output.InstanceProfileName
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        Roles: output.Roles !== undefined && output.Roles !== null
            ? deserializeAws_restJson1AwsIamInstanceProfileRoles(output.Roles, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsIamInstanceProfileList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
};
var deserializeAws_restJson1AwsIamInstanceProfileRole = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssumeRolePolicyDocument: output.AssumeRolePolicyDocument !== undefined && output.AssumeRolePolicyDocument !== null
            ? output.AssumeRolePolicyDocument
            : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        RoleId: output.RoleId !== undefined && output.RoleId !== null ? output.RoleId : undefined,
        RoleName: output.RoleName !== undefined && output.RoleName !== null ? output.RoleName : undefined,
    };
};
var deserializeAws_restJson1AwsIamInstanceProfileRoles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
};
var deserializeAws_restJson1AwsIamPermissionsBoundary = function (output, context) {
    return {
        PermissionsBoundaryArn: output.PermissionsBoundaryArn !== undefined && output.PermissionsBoundaryArn !== null
            ? output.PermissionsBoundaryArn
            : undefined,
        PermissionsBoundaryType: output.PermissionsBoundaryType !== undefined && output.PermissionsBoundaryType !== null
            ? output.PermissionsBoundaryType
            : undefined,
    };
};
var deserializeAws_restJson1AwsIamPolicyDetails = function (output, context) {
    return {
        AttachmentCount: output.AttachmentCount !== undefined && output.AttachmentCount !== null ? output.AttachmentCount : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        DefaultVersionId: output.DefaultVersionId !== undefined && output.DefaultVersionId !== null ? output.DefaultVersionId : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsAttachable: output.IsAttachable !== undefined && output.IsAttachable !== null ? output.IsAttachable : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        PermissionsBoundaryUsageCount: output.PermissionsBoundaryUsageCount !== undefined && output.PermissionsBoundaryUsageCount !== null
            ? output.PermissionsBoundaryUsageCount
            : undefined,
        PolicyId: output.PolicyId !== undefined && output.PolicyId !== null ? output.PolicyId : undefined,
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        PolicyVersionList: output.PolicyVersionList !== undefined && output.PolicyVersionList !== null
            ? deserializeAws_restJson1AwsIamPolicyVersionList(output.PolicyVersionList, context)
            : undefined,
        UpdateDate: output.UpdateDate !== undefined && output.UpdateDate !== null ? output.UpdateDate : undefined,
    };
};
var deserializeAws_restJson1AwsIamPolicyVersion = function (output, context) {
    return {
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        IsDefaultVersion: output.IsDefaultVersion !== undefined && output.IsDefaultVersion !== null ? output.IsDefaultVersion : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
var deserializeAws_restJson1AwsIamPolicyVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
};
var deserializeAws_restJson1AwsIamRoleDetails = function (output, context) {
    return {
        AssumeRolePolicyDocument: output.AssumeRolePolicyDocument !== undefined && output.AssumeRolePolicyDocument !== null
            ? output.AssumeRolePolicyDocument
            : undefined,
        AttachedManagedPolicies: output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
            ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
            : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        InstanceProfileList: output.InstanceProfileList !== undefined && output.InstanceProfileList !== null
            ? deserializeAws_restJson1AwsIamInstanceProfileList(output.InstanceProfileList, context)
            : undefined,
        MaxSessionDuration: output.MaxSessionDuration !== undefined && output.MaxSessionDuration !== null
            ? output.MaxSessionDuration
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        PermissionsBoundary: output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
            ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
            : undefined,
        RoleId: output.RoleId !== undefined && output.RoleId !== null ? output.RoleId : undefined,
        RoleName: output.RoleName !== undefined && output.RoleName !== null ? output.RoleName : undefined,
        RolePolicyList: output.RolePolicyList !== undefined && output.RolePolicyList !== null
            ? deserializeAws_restJson1AwsIamRolePolicyList(output.RolePolicyList, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsIamRolePolicy = function (output, context) {
    return {
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsIamRolePolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsIamUserDetails = function (output, context) {
    return {
        AttachedManagedPolicies: output.AttachedManagedPolicies !== undefined && output.AttachedManagedPolicies !== null
            ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
            : undefined,
        CreateDate: output.CreateDate !== undefined && output.CreateDate !== null ? output.CreateDate : undefined,
        GroupList: output.GroupList !== undefined && output.GroupList !== null
            ? deserializeAws_restJson1StringList(output.GroupList, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        PermissionsBoundary: output.PermissionsBoundary !== undefined && output.PermissionsBoundary !== null
            ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
            : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
        UserPolicyList: output.UserPolicyList !== undefined && output.UserPolicyList !== null
            ? deserializeAws_restJson1AwsIamUserPolicyList(output.UserPolicyList, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsIamUserPolicy = function (output, context) {
    return {
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
    };
};
var deserializeAws_restJson1AwsIamUserPolicyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
};
var deserializeAws_restJson1AwsKmsKeyDetails = function (output, context) {
    return {
        AWSAccountId: output.AWSAccountId !== undefined && output.AWSAccountId !== null ? output.AWSAccountId : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
        KeyManager: output.KeyManager !== undefined && output.KeyManager !== null ? output.KeyManager : undefined,
        KeyState: output.KeyState !== undefined && output.KeyState !== null ? output.KeyState : undefined,
        Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionCode = function (output, context) {
    return {
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3Key: output.S3Key !== undefined && output.S3Key !== null ? output.S3Key : undefined,
        S3ObjectVersion: output.S3ObjectVersion !== undefined && output.S3ObjectVersion !== null ? output.S3ObjectVersion : undefined,
        ZipFile: output.ZipFile !== undefined && output.ZipFile !== null ? output.ZipFile : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = function (output, context) {
    return {
        TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionDetails = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null
            ? deserializeAws_restJson1AwsLambdaFunctionCode(output.Code, context)
            : undefined,
        CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
        DeadLetterConfig: output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
            ? deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(output.DeadLetterConfig, context)
            : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_restJson1AwsLambdaFunctionEnvironment(output.Environment, context)
            : undefined,
        FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
        Handler: output.Handler !== undefined && output.Handler !== null ? output.Handler : undefined,
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        Layers: output.Layers !== undefined && output.Layers !== null
            ? deserializeAws_restJson1AwsLambdaFunctionLayerList(output.Layers, context)
            : undefined,
        MasterArn: output.MasterArn !== undefined && output.MasterArn !== null ? output.MasterArn : undefined,
        MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TracingConfig: output.TracingConfig !== undefined && output.TracingConfig !== null
            ? deserializeAws_restJson1AwsLambdaFunctionTracingConfig(output.TracingConfig, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        VpcConfig: output.VpcConfig !== undefined && output.VpcConfig !== null
            ? deserializeAws_restJson1AwsLambdaFunctionVpcConfig(output.VpcConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionEnvironment = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1AwsLambdaFunctionEnvironmentError(output.Error, context)
            : undefined,
        Variables: output.Variables !== undefined && output.Variables !== null
            ? deserializeAws_restJson1FieldMap(output.Variables, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionEnvironmentError = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionLayer = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionLayerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
};
var deserializeAws_restJson1AwsLambdaFunctionTracingConfig = function (output, context) {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaFunctionVpcConfig = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsLambdaLayerVersionDetails = function (output, context) {
    return {
        CompatibleRuntimes: output.CompatibleRuntimes !== undefined && output.CompatibleRuntimes !== null
            ? deserializeAws_restJson1NonEmptyStringList(output.CompatibleRuntimes, context)
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbClusterAssociatedRole = function (output, context) {
    return {
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbClusterDetails = function (output, context) {
    return {
        ActivityStreamStatus: output.ActivityStreamStatus !== undefined && output.ActivityStreamStatus !== null
            ? output.ActivityStreamStatus
            : undefined,
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        AssociatedRoles: output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
            ? deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles(output.AssociatedRoles, context)
            : undefined,
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
            : undefined,
        BackupRetentionPeriod: output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
            ? output.BackupRetentionPeriod
            : undefined,
        ClusterCreateTime: output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
            ? output.ClusterCreateTime
            : undefined,
        CopyTagsToSnapshot: output.CopyTagsToSnapshot !== undefined && output.CopyTagsToSnapshot !== null
            ? output.CopyTagsToSnapshot
            : undefined,
        CrossAccountClone: output.CrossAccountClone !== undefined && output.CrossAccountClone !== null
            ? output.CrossAccountClone
            : undefined,
        CustomEndpoints: output.CustomEndpoints !== undefined && output.CustomEndpoints !== null
            ? deserializeAws_restJson1StringList(output.CustomEndpoints, context)
            : undefined,
        DatabaseName: output.DatabaseName !== undefined && output.DatabaseName !== null ? output.DatabaseName : undefined,
        DbClusterIdentifier: output.DbClusterIdentifier !== undefined && output.DbClusterIdentifier !== null
            ? output.DbClusterIdentifier
            : undefined,
        DbClusterMembers: output.DbClusterMembers !== undefined && output.DbClusterMembers !== null
            ? deserializeAws_restJson1AwsRdsDbClusterMembers(output.DbClusterMembers, context)
            : undefined,
        DbClusterOptionGroupMemberships: output.DbClusterOptionGroupMemberships !== undefined && output.DbClusterOptionGroupMemberships !== null
            ? deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(output.DbClusterOptionGroupMemberships, context)
            : undefined,
        DbClusterParameterGroup: output.DbClusterParameterGroup !== undefined && output.DbClusterParameterGroup !== null
            ? output.DbClusterParameterGroup
            : undefined,
        DbClusterResourceId: output.DbClusterResourceId !== undefined && output.DbClusterResourceId !== null
            ? output.DbClusterResourceId
            : undefined,
        DbSubnetGroup: output.DbSubnetGroup !== undefined && output.DbSubnetGroup !== null ? output.DbSubnetGroup : undefined,
        DeletionProtection: output.DeletionProtection !== undefined && output.DeletionProtection !== null
            ? output.DeletionProtection
            : undefined,
        DomainMemberships: output.DomainMemberships !== undefined && output.DomainMemberships !== null
            ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
            : undefined,
        EnabledCloudWatchLogsExports: output.EnabledCloudWatchLogsExports !== undefined && output.EnabledCloudWatchLogsExports !== null
            ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineMode: output.EngineMode !== undefined && output.EngineMode !== null ? output.EngineMode : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
        HttpEndpointEnabled: output.HttpEndpointEnabled !== undefined && output.HttpEndpointEnabled !== null
            ? output.HttpEndpointEnabled
            : undefined,
        IamDatabaseAuthenticationEnabled: output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
            ? output.IamDatabaseAuthenticationEnabled
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MasterUsername: output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
        MultiAz: output.MultiAz !== undefined && output.MultiAz !== null ? output.MultiAz : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        PreferredBackupWindow: output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
            ? output.PreferredBackupWindow
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        ReadReplicaIdentifiers: output.ReadReplicaIdentifiers !== undefined && output.ReadReplicaIdentifiers !== null
            ? deserializeAws_restJson1StringList(output.ReadReplicaIdentifiers, context)
            : undefined,
        ReaderEndpoint: output.ReaderEndpoint !== undefined && output.ReaderEndpoint !== null ? output.ReaderEndpoint : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StorageEncrypted: output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
        VpcSecurityGroups: output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbClusterMember = function (output, context) {
    return {
        DbClusterParameterGroupStatus: output.DbClusterParameterGroupStatus !== undefined && output.DbClusterParameterGroupStatus !== null
            ? output.DbClusterParameterGroupStatus
            : undefined,
        DbInstanceIdentifier: output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
            ? output.DbInstanceIdentifier
            : undefined,
        IsClusterWriter: output.IsClusterWriter !== undefined && output.IsClusterWriter !== null ? output.IsClusterWriter : undefined,
        PromotionTier: output.PromotionTier !== undefined && output.PromotionTier !== null ? output.PromotionTier : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbClusterMembers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = function (output, context) {
    return {
        DbClusterOptionGroupName: output.DbClusterOptionGroupName !== undefined && output.DbClusterOptionGroupName !== null
            ? output.DbClusterOptionGroupName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails = function (output, context) {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        AvailabilityZones: output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
            ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
            : undefined,
        ClusterCreateTime: output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
            ? output.ClusterCreateTime
            : undefined,
        DbClusterIdentifier: output.DbClusterIdentifier !== undefined && output.DbClusterIdentifier !== null
            ? output.DbClusterIdentifier
            : undefined,
        DbClusterSnapshotIdentifier: output.DbClusterSnapshotIdentifier !== undefined && output.DbClusterSnapshotIdentifier !== null
            ? output.DbClusterSnapshotIdentifier
            : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        IamDatabaseAuthenticationEnabled: output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
            ? output.IamDatabaseAuthenticationEnabled
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        MasterUsername: output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
        PercentProgress: output.PercentProgress !== undefined && output.PercentProgress !== null ? output.PercentProgress : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        SnapshotCreateTime: output.SnapshotCreateTime !== undefined && output.SnapshotCreateTime !== null
            ? output.SnapshotCreateTime
            : undefined,
        SnapshotType: output.SnapshotType !== undefined && output.SnapshotType !== null ? output.SnapshotType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StorageEncrypted: output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbDomainMembership = function (output, context) {
    return {
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        Fqdn: output.Fqdn !== undefined && output.Fqdn !== null ? output.Fqdn : undefined,
        IamRoleName: output.IamRoleName !== undefined && output.IamRoleName !== null ? output.IamRoleName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbDomainMemberships = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole = function (output, context) {
    return {
        FeatureName: output.FeatureName !== undefined && output.FeatureName !== null ? output.FeatureName : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbInstanceDetails = function (output, context) {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        AssociatedRoles: output.AssociatedRoles !== undefined && output.AssociatedRoles !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(output.AssociatedRoles, context)
            : undefined,
        AutoMinorVersionUpgrade: output.AutoMinorVersionUpgrade !== undefined && output.AutoMinorVersionUpgrade !== null
            ? output.AutoMinorVersionUpgrade
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        BackupRetentionPeriod: output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
            ? output.BackupRetentionPeriod
            : undefined,
        CACertificateIdentifier: output.CACertificateIdentifier !== undefined && output.CACertificateIdentifier !== null
            ? output.CACertificateIdentifier
            : undefined,
        CharacterSetName: output.CharacterSetName !== undefined && output.CharacterSetName !== null ? output.CharacterSetName : undefined,
        CopyTagsToSnapshot: output.CopyTagsToSnapshot !== undefined && output.CopyTagsToSnapshot !== null
            ? output.CopyTagsToSnapshot
            : undefined,
        DBClusterIdentifier: output.DBClusterIdentifier !== undefined && output.DBClusterIdentifier !== null
            ? output.DBClusterIdentifier
            : undefined,
        DBInstanceClass: output.DBInstanceClass !== undefined && output.DBInstanceClass !== null ? output.DBInstanceClass : undefined,
        DBInstanceIdentifier: output.DBInstanceIdentifier !== undefined && output.DBInstanceIdentifier !== null
            ? output.DBInstanceIdentifier
            : undefined,
        DBName: output.DBName !== undefined && output.DBName !== null ? output.DBName : undefined,
        DbInstancePort: output.DbInstancePort !== undefined && output.DbInstancePort !== null ? output.DbInstancePort : undefined,
        DbInstanceStatus: output.DbInstanceStatus !== undefined && output.DbInstanceStatus !== null ? output.DbInstanceStatus : undefined,
        DbParameterGroups: output.DbParameterGroups !== undefined && output.DbParameterGroups !== null
            ? deserializeAws_restJson1AwsRdsDbParameterGroups(output.DbParameterGroups, context)
            : undefined,
        DbSecurityGroups: output.DbSecurityGroups !== undefined && output.DbSecurityGroups !== null
            ? deserializeAws_restJson1StringList(output.DbSecurityGroups, context)
            : undefined,
        DbSubnetGroup: output.DbSubnetGroup !== undefined && output.DbSubnetGroup !== null
            ? deserializeAws_restJson1AwsRdsDbSubnetGroup(output.DbSubnetGroup, context)
            : undefined,
        DbiResourceId: output.DbiResourceId !== undefined && output.DbiResourceId !== null ? output.DbiResourceId : undefined,
        DeletionProtection: output.DeletionProtection !== undefined && output.DeletionProtection !== null
            ? output.DeletionProtection
            : undefined,
        DomainMemberships: output.DomainMemberships !== undefined && output.DomainMemberships !== null
            ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
            : undefined,
        EnabledCloudWatchLogsExports: output.EnabledCloudWatchLogsExports !== undefined && output.EnabledCloudWatchLogsExports !== null
            ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
            : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.Endpoint, context)
            : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        EnhancedMonitoringResourceArn: output.EnhancedMonitoringResourceArn !== undefined && output.EnhancedMonitoringResourceArn !== null
            ? output.EnhancedMonitoringResourceArn
            : undefined,
        IAMDatabaseAuthenticationEnabled: output.IAMDatabaseAuthenticationEnabled !== undefined && output.IAMDatabaseAuthenticationEnabled !== null
            ? output.IAMDatabaseAuthenticationEnabled
            : undefined,
        InstanceCreateTime: output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
            ? output.InstanceCreateTime
            : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LatestRestorableTime: output.LatestRestorableTime !== undefined && output.LatestRestorableTime !== null
            ? output.LatestRestorableTime
            : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        ListenerEndpoint: output.ListenerEndpoint !== undefined && output.ListenerEndpoint !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.ListenerEndpoint, context)
            : undefined,
        MasterUsername: output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
        MaxAllocatedStorage: output.MaxAllocatedStorage !== undefined && output.MaxAllocatedStorage !== null
            ? output.MaxAllocatedStorage
            : undefined,
        MonitoringInterval: output.MonitoringInterval !== undefined && output.MonitoringInterval !== null
            ? output.MonitoringInterval
            : undefined,
        MonitoringRoleArn: output.MonitoringRoleArn !== undefined && output.MonitoringRoleArn !== null
            ? output.MonitoringRoleArn
            : undefined,
        MultiAz: output.MultiAz !== undefined && output.MultiAz !== null ? output.MultiAz : undefined,
        OptionGroupMemberships: output.OptionGroupMemberships !== undefined && output.OptionGroupMemberships !== null
            ? deserializeAws_restJson1AwsRdsDbOptionGroupMemberships(output.OptionGroupMemberships, context)
            : undefined,
        PendingModifiedValues: output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
            ? deserializeAws_restJson1AwsRdsDbPendingModifiedValues(output.PendingModifiedValues, context)
            : undefined,
        PerformanceInsightsEnabled: output.PerformanceInsightsEnabled !== undefined && output.PerformanceInsightsEnabled !== null
            ? output.PerformanceInsightsEnabled
            : undefined,
        PerformanceInsightsKmsKeyId: output.PerformanceInsightsKmsKeyId !== undefined && output.PerformanceInsightsKmsKeyId !== null
            ? output.PerformanceInsightsKmsKeyId
            : undefined,
        PerformanceInsightsRetentionPeriod: output.PerformanceInsightsRetentionPeriod !== undefined && output.PerformanceInsightsRetentionPeriod !== null
            ? output.PerformanceInsightsRetentionPeriod
            : undefined,
        PreferredBackupWindow: output.PreferredBackupWindow !== undefined && output.PreferredBackupWindow !== null
            ? output.PreferredBackupWindow
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        ProcessorFeatures: output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
            ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
            : undefined,
        PromotionTier: output.PromotionTier !== undefined && output.PromotionTier !== null ? output.PromotionTier : undefined,
        PubliclyAccessible: output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
            ? output.PubliclyAccessible
            : undefined,
        ReadReplicaDBClusterIdentifiers: output.ReadReplicaDBClusterIdentifiers !== undefined && output.ReadReplicaDBClusterIdentifiers !== null
            ? deserializeAws_restJson1StringList(output.ReadReplicaDBClusterIdentifiers, context)
            : undefined,
        ReadReplicaDBInstanceIdentifiers: output.ReadReplicaDBInstanceIdentifiers !== undefined && output.ReadReplicaDBInstanceIdentifiers !== null
            ? deserializeAws_restJson1StringList(output.ReadReplicaDBInstanceIdentifiers, context)
            : undefined,
        ReadReplicaSourceDBInstanceIdentifier: output.ReadReplicaSourceDBInstanceIdentifier !== undefined &&
            output.ReadReplicaSourceDBInstanceIdentifier !== null
            ? output.ReadReplicaSourceDBInstanceIdentifier
            : undefined,
        SecondaryAvailabilityZone: output.SecondaryAvailabilityZone !== undefined && output.SecondaryAvailabilityZone !== null
            ? output.SecondaryAvailabilityZone
            : undefined,
        StatusInfos: output.StatusInfos !== undefined && output.StatusInfos !== null
            ? deserializeAws_restJson1AwsRdsDbStatusInfos(output.StatusInfos, context)
            : undefined,
        StorageEncrypted: output.StorageEncrypted !== undefined && output.StorageEncrypted !== null ? output.StorageEncrypted : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
        TdeCredentialArn: output.TdeCredentialArn !== undefined && output.TdeCredentialArn !== null ? output.TdeCredentialArn : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
        VpcSecurityGroups: output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbInstanceEndpoint = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        HostedZoneId: output.HostedZoneId !== undefined && output.HostedZoneId !== null ? output.HostedZoneId : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VpcSecurityGroupId: output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
            ? output.VpcSecurityGroupId
            : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbOptionGroupMembership = function (output, context) {
    return {
        OptionGroupName: output.OptionGroupName !== undefined && output.OptionGroupName !== null ? output.OptionGroupName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbOptionGroupMemberships = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbParameterGroup = function (output, context) {
    return {
        DbParameterGroupName: output.DbParameterGroupName !== undefined && output.DbParameterGroupName !== null
            ? output.DbParameterGroupName
            : undefined,
        ParameterApplyStatus: output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
            ? output.ParameterApplyStatus
            : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbParameterGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbPendingModifiedValues = function (output, context) {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        BackupRetentionPeriod: output.BackupRetentionPeriod !== undefined && output.BackupRetentionPeriod !== null
            ? output.BackupRetentionPeriod
            : undefined,
        CaCertificateIdentifier: output.CaCertificateIdentifier !== undefined && output.CaCertificateIdentifier !== null
            ? output.CaCertificateIdentifier
            : undefined,
        DbInstanceClass: output.DbInstanceClass !== undefined && output.DbInstanceClass !== null ? output.DbInstanceClass : undefined,
        DbInstanceIdentifier: output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
            ? output.DbInstanceIdentifier
            : undefined,
        DbSubnetGroupName: output.DbSubnetGroupName !== undefined && output.DbSubnetGroupName !== null
            ? output.DbSubnetGroupName
            : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        MasterUserPassword: output.MasterUserPassword !== undefined && output.MasterUserPassword !== null
            ? output.MasterUserPassword
            : undefined,
        MultiAZ: output.MultiAZ !== undefined && output.MultiAZ !== null ? output.MultiAZ : undefined,
        PendingCloudWatchLogsExports: output.PendingCloudWatchLogsExports !== undefined && output.PendingCloudWatchLogsExports !== null
            ? deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(output.PendingCloudWatchLogsExports, context)
            : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        ProcessorFeatures: output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
            ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
            : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbProcessorFeature = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbProcessorFeatures = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbSnapshotDetails = function (output, context) {
    return {
        AllocatedStorage: output.AllocatedStorage !== undefined && output.AllocatedStorage !== null ? output.AllocatedStorage : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        DbInstanceIdentifier: output.DbInstanceIdentifier !== undefined && output.DbInstanceIdentifier !== null
            ? output.DbInstanceIdentifier
            : undefined,
        DbSnapshotIdentifier: output.DbSnapshotIdentifier !== undefined && output.DbSnapshotIdentifier !== null
            ? output.DbSnapshotIdentifier
            : undefined,
        DbiResourceId: output.DbiResourceId !== undefined && output.DbiResourceId !== null ? output.DbiResourceId : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        Engine: output.Engine !== undefined && output.Engine !== null ? output.Engine : undefined,
        EngineVersion: output.EngineVersion !== undefined && output.EngineVersion !== null ? output.EngineVersion : undefined,
        IamDatabaseAuthenticationEnabled: output.IamDatabaseAuthenticationEnabled !== undefined && output.IamDatabaseAuthenticationEnabled !== null
            ? output.IamDatabaseAuthenticationEnabled
            : undefined,
        InstanceCreateTime: output.InstanceCreateTime !== undefined && output.InstanceCreateTime !== null
            ? output.InstanceCreateTime
            : undefined,
        Iops: output.Iops !== undefined && output.Iops !== null ? output.Iops : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LicenseModel: output.LicenseModel !== undefined && output.LicenseModel !== null ? output.LicenseModel : undefined,
        MasterUsername: output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
        OptionGroupName: output.OptionGroupName !== undefined && output.OptionGroupName !== null ? output.OptionGroupName : undefined,
        PercentProgress: output.PercentProgress !== undefined && output.PercentProgress !== null ? output.PercentProgress : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
        ProcessorFeatures: output.ProcessorFeatures !== undefined && output.ProcessorFeatures !== null
            ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
            : undefined,
        SnapshotCreateTime: output.SnapshotCreateTime !== undefined && output.SnapshotCreateTime !== null
            ? output.SnapshotCreateTime
            : undefined,
        SnapshotType: output.SnapshotType !== undefined && output.SnapshotType !== null ? output.SnapshotType : undefined,
        SourceDbSnapshotIdentifier: output.SourceDbSnapshotIdentifier !== undefined && output.SourceDbSnapshotIdentifier !== null
            ? output.SourceDbSnapshotIdentifier
            : undefined,
        SourceRegion: output.SourceRegion !== undefined && output.SourceRegion !== null ? output.SourceRegion : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
        TdeCredentialArn: output.TdeCredentialArn !== undefined && output.TdeCredentialArn !== null ? output.TdeCredentialArn : undefined,
        Timezone: output.Timezone !== undefined && output.Timezone !== null ? output.Timezone : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbStatusInfo = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Normal: output.Normal !== undefined && output.Normal !== null ? output.Normal : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusType: output.StatusType !== undefined && output.StatusType !== null ? output.StatusType : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbStatusInfos = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsDbSubnetGroup = function (output, context) {
    return {
        DbSubnetGroupArn: output.DbSubnetGroupArn !== undefined && output.DbSubnetGroupArn !== null ? output.DbSubnetGroupArn : undefined,
        DbSubnetGroupDescription: output.DbSubnetGroupDescription !== undefined && output.DbSubnetGroupDescription !== null
            ? output.DbSubnetGroupDescription
            : undefined,
        DbSubnetGroupName: output.DbSubnetGroupName !== undefined && output.DbSubnetGroupName !== null
            ? output.DbSubnetGroupName
            : undefined,
        SubnetGroupStatus: output.SubnetGroupStatus !== undefined && output.SubnetGroupStatus !== null
            ? output.SubnetGroupStatus
            : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet = function (output, context) {
    return {
        SubnetAvailabilityZone: output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
            ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(output.SubnetAvailabilityZone, context)
            : undefined,
        SubnetIdentifier: output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
        SubnetStatus: output.SubnetStatus !== undefined && output.SubnetStatus !== null ? output.SubnetStatus : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
};
var deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = function (output, context) {
    return {
        LogTypesToDisable: output.LogTypesToDisable !== undefined && output.LogTypesToDisable !== null
            ? deserializeAws_restJson1StringList(output.LogTypesToDisable, context)
            : undefined,
        LogTypesToEnable: output.LogTypesToEnable !== undefined && output.LogTypesToEnable !== null
            ? deserializeAws_restJson1StringList(output.LogTypesToEnable, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterClusterNode = function (output, context) {
    return {
        NodeRole: output.NodeRole !== undefined && output.NodeRole !== null ? output.NodeRole : undefined,
        PrivateIpAddress: output.PrivateIpAddress !== undefined && output.PrivateIpAddress !== null ? output.PrivateIpAddress : undefined,
        PublicIpAddress: output.PublicIpAddress !== undefined && output.PublicIpAddress !== null ? output.PublicIpAddress : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterClusterNodes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = function (output, context) {
    return {
        ClusterParameterStatusList: output.ClusterParameterStatusList !== undefined && output.ClusterParameterStatusList !== null
            ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(output.ClusterParameterStatusList, context)
            : undefined,
        ParameterApplyStatus: output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
            ? output.ParameterApplyStatus
            : undefined,
        ParameterGroupName: output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
            ? output.ParameterGroupName
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = function (output, context) {
    return {
        ParameterApplyErrorDescription: output.ParameterApplyErrorDescription !== undefined && output.ParameterApplyErrorDescription !== null
            ? output.ParameterApplyErrorDescription
            : undefined,
        ParameterApplyStatus: output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
            ? output.ParameterApplyStatus
            : undefined,
        ParameterName: output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = function (output, context) {
    return {
        ClusterSecurityGroupName: output.ClusterSecurityGroupName !== undefined && output.ClusterSecurityGroupName !== null
            ? output.ClusterSecurityGroupName
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = function (output, context) {
    return {
        DestinationRegion: output.DestinationRegion !== undefined && output.DestinationRegion !== null
            ? output.DestinationRegion
            : undefined,
        ManualSnapshotRetentionPeriod: output.ManualSnapshotRetentionPeriod !== undefined && output.ManualSnapshotRetentionPeriod !== null
            ? output.ManualSnapshotRetentionPeriod
            : undefined,
        RetentionPeriod: output.RetentionPeriod !== undefined && output.RetentionPeriod !== null ? output.RetentionPeriod : undefined,
        SnapshotCopyGrantName: output.SnapshotCopyGrantName !== undefined && output.SnapshotCopyGrantName !== null
            ? output.SnapshotCopyGrantName
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = function (output, context) {
    return {
        DeferMaintenanceEndTime: output.DeferMaintenanceEndTime !== undefined && output.DeferMaintenanceEndTime !== null
            ? output.DeferMaintenanceEndTime
            : undefined,
        DeferMaintenanceIdentifier: output.DeferMaintenanceIdentifier !== undefined && output.DeferMaintenanceIdentifier !== null
            ? output.DeferMaintenanceIdentifier
            : undefined,
        DeferMaintenanceStartTime: output.DeferMaintenanceStartTime !== undefined && output.DeferMaintenanceStartTime !== null
            ? output.DeferMaintenanceStartTime
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterDetails = function (output, context) {
    return {
        AllowVersionUpgrade: output.AllowVersionUpgrade !== undefined && output.AllowVersionUpgrade !== null
            ? output.AllowVersionUpgrade
            : undefined,
        AutomatedSnapshotRetentionPeriod: output.AutomatedSnapshotRetentionPeriod !== undefined && output.AutomatedSnapshotRetentionPeriod !== null
            ? output.AutomatedSnapshotRetentionPeriod
            : undefined,
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        ClusterAvailabilityStatus: output.ClusterAvailabilityStatus !== undefined && output.ClusterAvailabilityStatus !== null
            ? output.ClusterAvailabilityStatus
            : undefined,
        ClusterCreateTime: output.ClusterCreateTime !== undefined && output.ClusterCreateTime !== null
            ? output.ClusterCreateTime
            : undefined,
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        ClusterNodes: output.ClusterNodes !== undefined && output.ClusterNodes !== null
            ? deserializeAws_restJson1AwsRedshiftClusterClusterNodes(output.ClusterNodes, context)
            : undefined,
        ClusterParameterGroups: output.ClusterParameterGroups !== undefined && output.ClusterParameterGroups !== null
            ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(output.ClusterParameterGroups, context)
            : undefined,
        ClusterPublicKey: output.ClusterPublicKey !== undefined && output.ClusterPublicKey !== null ? output.ClusterPublicKey : undefined,
        ClusterRevisionNumber: output.ClusterRevisionNumber !== undefined && output.ClusterRevisionNumber !== null
            ? output.ClusterRevisionNumber
            : undefined,
        ClusterSecurityGroups: output.ClusterSecurityGroups !== undefined && output.ClusterSecurityGroups !== null
            ? deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(output.ClusterSecurityGroups, context)
            : undefined,
        ClusterSnapshotCopyStatus: output.ClusterSnapshotCopyStatus !== undefined && output.ClusterSnapshotCopyStatus !== null
            ? deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(output.ClusterSnapshotCopyStatus, context)
            : undefined,
        ClusterStatus: output.ClusterStatus !== undefined && output.ClusterStatus !== null ? output.ClusterStatus : undefined,
        ClusterSubnetGroupName: output.ClusterSubnetGroupName !== undefined && output.ClusterSubnetGroupName !== null
            ? output.ClusterSubnetGroupName
            : undefined,
        ClusterVersion: output.ClusterVersion !== undefined && output.ClusterVersion !== null ? output.ClusterVersion : undefined,
        DBName: output.DBName !== undefined && output.DBName !== null ? output.DBName : undefined,
        DeferredMaintenanceWindows: output.DeferredMaintenanceWindows !== undefined && output.DeferredMaintenanceWindows !== null
            ? deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(output.DeferredMaintenanceWindows, context)
            : undefined,
        ElasticIpStatus: output.ElasticIpStatus !== undefined && output.ElasticIpStatus !== null
            ? deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus(output.ElasticIpStatus, context)
            : undefined,
        ElasticResizeNumberOfNodeOptions: output.ElasticResizeNumberOfNodeOptions !== undefined && output.ElasticResizeNumberOfNodeOptions !== null
            ? output.ElasticResizeNumberOfNodeOptions
            : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_restJson1AwsRedshiftClusterEndpoint(output.Endpoint, context)
            : undefined,
        EnhancedVpcRouting: output.EnhancedVpcRouting !== undefined && output.EnhancedVpcRouting !== null
            ? output.EnhancedVpcRouting
            : undefined,
        ExpectedNextSnapshotScheduleTime: output.ExpectedNextSnapshotScheduleTime !== undefined && output.ExpectedNextSnapshotScheduleTime !== null
            ? output.ExpectedNextSnapshotScheduleTime
            : undefined,
        ExpectedNextSnapshotScheduleTimeStatus: output.ExpectedNextSnapshotScheduleTimeStatus !== undefined &&
            output.ExpectedNextSnapshotScheduleTimeStatus !== null
            ? output.ExpectedNextSnapshotScheduleTimeStatus
            : undefined,
        HsmStatus: output.HsmStatus !== undefined && output.HsmStatus !== null
            ? deserializeAws_restJson1AwsRedshiftClusterHsmStatus(output.HsmStatus, context)
            : undefined,
        IamRoles: output.IamRoles !== undefined && output.IamRoles !== null
            ? deserializeAws_restJson1AwsRedshiftClusterIamRoles(output.IamRoles, context)
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        MaintenanceTrackName: output.MaintenanceTrackName !== undefined && output.MaintenanceTrackName !== null
            ? output.MaintenanceTrackName
            : undefined,
        ManualSnapshotRetentionPeriod: output.ManualSnapshotRetentionPeriod !== undefined && output.ManualSnapshotRetentionPeriod !== null
            ? output.ManualSnapshotRetentionPeriod
            : undefined,
        MasterUsername: output.MasterUsername !== undefined && output.MasterUsername !== null ? output.MasterUsername : undefined,
        NextMaintenanceWindowStartTime: output.NextMaintenanceWindowStartTime !== undefined && output.NextMaintenanceWindowStartTime !== null
            ? output.NextMaintenanceWindowStartTime
            : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        NumberOfNodes: output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
        PendingActions: output.PendingActions !== undefined && output.PendingActions !== null
            ? deserializeAws_restJson1StringList(output.PendingActions, context)
            : undefined,
        PendingModifiedValues: output.PendingModifiedValues !== undefined && output.PendingModifiedValues !== null
            ? deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(output.PendingModifiedValues, context)
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        PubliclyAccessible: output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
            ? output.PubliclyAccessible
            : undefined,
        ResizeInfo: output.ResizeInfo !== undefined && output.ResizeInfo !== null
            ? deserializeAws_restJson1AwsRedshiftClusterResizeInfo(output.ResizeInfo, context)
            : undefined,
        RestoreStatus: output.RestoreStatus !== undefined && output.RestoreStatus !== null
            ? deserializeAws_restJson1AwsRedshiftClusterRestoreStatus(output.RestoreStatus, context)
            : undefined,
        SnapshotScheduleIdentifier: output.SnapshotScheduleIdentifier !== undefined && output.SnapshotScheduleIdentifier !== null
            ? output.SnapshotScheduleIdentifier
            : undefined,
        SnapshotScheduleState: output.SnapshotScheduleState !== undefined && output.SnapshotScheduleState !== null
            ? output.SnapshotScheduleState
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
        VpcSecurityGroups: output.VpcSecurityGroups !== undefined && output.VpcSecurityGroups !== null
            ? deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(output.VpcSecurityGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus = function (output, context) {
    return {
        ElasticIp: output.ElasticIp !== undefined && output.ElasticIp !== null ? output.ElasticIp : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterEndpoint = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterHsmStatus = function (output, context) {
    return {
        HsmClientCertificateIdentifier: output.HsmClientCertificateIdentifier !== undefined && output.HsmClientCertificateIdentifier !== null
            ? output.HsmClientCertificateIdentifier
            : undefined,
        HsmConfigurationIdentifier: output.HsmConfigurationIdentifier !== undefined && output.HsmConfigurationIdentifier !== null
            ? output.HsmConfigurationIdentifier
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterIamRole = function (output, context) {
    return {
        ApplyStatus: output.ApplyStatus !== undefined && output.ApplyStatus !== null ? output.ApplyStatus : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterIamRoles = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
};
var deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = function (output, context) {
    return {
        AutomatedSnapshotRetentionPeriod: output.AutomatedSnapshotRetentionPeriod !== undefined && output.AutomatedSnapshotRetentionPeriod !== null
            ? output.AutomatedSnapshotRetentionPeriod
            : undefined,
        ClusterIdentifier: output.ClusterIdentifier !== undefined && output.ClusterIdentifier !== null
            ? output.ClusterIdentifier
            : undefined,
        ClusterType: output.ClusterType !== undefined && output.ClusterType !== null ? output.ClusterType : undefined,
        ClusterVersion: output.ClusterVersion !== undefined && output.ClusterVersion !== null ? output.ClusterVersion : undefined,
        EncryptionType: output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
        EnhancedVpcRouting: output.EnhancedVpcRouting !== undefined && output.EnhancedVpcRouting !== null
            ? output.EnhancedVpcRouting
            : undefined,
        MaintenanceTrackName: output.MaintenanceTrackName !== undefined && output.MaintenanceTrackName !== null
            ? output.MaintenanceTrackName
            : undefined,
        MasterUserPassword: output.MasterUserPassword !== undefined && output.MasterUserPassword !== null
            ? output.MasterUserPassword
            : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        NumberOfNodes: output.NumberOfNodes !== undefined && output.NumberOfNodes !== null ? output.NumberOfNodes : undefined,
        PubliclyAccessible: output.PubliclyAccessible !== undefined && output.PubliclyAccessible !== null
            ? output.PubliclyAccessible
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterResizeInfo = function (output, context) {
    return {
        AllowCancelResize: output.AllowCancelResize !== undefined && output.AllowCancelResize !== null
            ? output.AllowCancelResize
            : undefined,
        ResizeType: output.ResizeType !== undefined && output.ResizeType !== null ? output.ResizeType : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterRestoreStatus = function (output, context) {
    return {
        CurrentRestoreRateInMegaBytesPerSecond: output.CurrentRestoreRateInMegaBytesPerSecond !== undefined &&
            output.CurrentRestoreRateInMegaBytesPerSecond !== null
            ? output.CurrentRestoreRateInMegaBytesPerSecond
            : undefined,
        ElapsedTimeInSeconds: output.ElapsedTimeInSeconds !== undefined && output.ElapsedTimeInSeconds !== null
            ? output.ElapsedTimeInSeconds
            : undefined,
        EstimatedTimeToCompletionInSeconds: output.EstimatedTimeToCompletionInSeconds !== undefined && output.EstimatedTimeToCompletionInSeconds !== null
            ? output.EstimatedTimeToCompletionInSeconds
            : undefined,
        ProgressInMegaBytes: output.ProgressInMegaBytes !== undefined && output.ProgressInMegaBytes !== null
            ? output.ProgressInMegaBytes
            : undefined,
        SnapshotSizeInMegaBytes: output.SnapshotSizeInMegaBytes !== undefined && output.SnapshotSizeInMegaBytes !== null
            ? output.SnapshotSizeInMegaBytes
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VpcSecurityGroupId: output.VpcSecurityGroupId !== undefined && output.VpcSecurityGroupId !== null
            ? output.VpcSecurityGroupId
            : undefined,
    };
};
var deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
};
var deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = function (output, context) {
    return {
        BlockPublicAcls: output.BlockPublicAcls !== undefined && output.BlockPublicAcls !== null ? output.BlockPublicAcls : undefined,
        BlockPublicPolicy: output.BlockPublicPolicy !== undefined && output.BlockPublicPolicy !== null
            ? output.BlockPublicPolicy
            : undefined,
        IgnorePublicAcls: output.IgnorePublicAcls !== undefined && output.IgnorePublicAcls !== null ? output.IgnorePublicAcls : undefined,
        RestrictPublicBuckets: output.RestrictPublicBuckets !== undefined && output.RestrictPublicBuckets !== null
            ? output.RestrictPublicBuckets
            : undefined,
    };
};
var deserializeAws_restJson1AwsS3BucketDetails = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        OwnerName: output.OwnerName !== undefined && output.OwnerName !== null ? output.OwnerName : undefined,
        PublicAccessBlockConfiguration: output.PublicAccessBlockConfiguration !== undefined && output.PublicAccessBlockConfiguration !== null
            ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.PublicAccessBlockConfiguration, context)
            : undefined,
        ServerSideEncryptionConfiguration: output.ServerSideEncryptionConfiguration !== undefined && output.ServerSideEncryptionConfiguration !== null
            ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(output.ServerSideEncryptionConfiguration, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = function (output, context) {
    return {
        KMSMasterKeyID: output.KMSMasterKeyID !== undefined && output.KMSMasterKeyID !== null ? output.KMSMasterKeyID : undefined,
        SSEAlgorithm: output.SSEAlgorithm !== undefined && output.SSEAlgorithm !== null ? output.SSEAlgorithm : undefined,
    };
};
var deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = function (output, context) {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules(output.Rules, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule = function (output, context) {
    return {
        ApplyServerSideEncryptionByDefault: output.ApplyServerSideEncryptionByDefault !== undefined && output.ApplyServerSideEncryptionByDefault !== null
            ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(output.ApplyServerSideEncryptionByDefault, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
};
var deserializeAws_restJson1AwsS3ObjectDetails = function (output, context) {
    return {
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        ETag: output.ETag !== undefined && output.ETag !== null ? output.ETag : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        SSEKMSKeyId: output.SSEKMSKeyId !== undefined && output.SSEKMSKeyId !== null ? output.SSEKMSKeyId : undefined,
        ServerSideEncryption: output.ServerSideEncryption !== undefined && output.ServerSideEncryption !== null
            ? output.ServerSideEncryption
            : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
var deserializeAws_restJson1AwsSecretsManagerSecretDetails = function (output, context) {
    return {
        Deleted: output.Deleted !== undefined && output.Deleted !== null ? output.Deleted : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RotationEnabled: output.RotationEnabled !== undefined && output.RotationEnabled !== null ? output.RotationEnabled : undefined,
        RotationLambdaArn: output.RotationLambdaArn !== undefined && output.RotationLambdaArn !== null
            ? output.RotationLambdaArn
            : undefined,
        RotationOccurredWithinFrequency: output.RotationOccurredWithinFrequency !== undefined && output.RotationOccurredWithinFrequency !== null
            ? output.RotationOccurredWithinFrequency
            : undefined,
        RotationRules: output.RotationRules !== undefined && output.RotationRules !== null
            ? deserializeAws_restJson1AwsSecretsManagerSecretRotationRules(output.RotationRules, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsSecretsManagerSecretRotationRules = function (output, context) {
    return {
        AutomaticallyAfterDays: output.AutomaticallyAfterDays !== undefined && output.AutomaticallyAfterDays !== null
            ? output.AutomaticallyAfterDays
            : undefined,
    };
};
var deserializeAws_restJson1AwsSecurityFinding = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_restJson1Action(output.Action, context)
            : undefined,
        AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null ? output.AwsAccountId : undefined,
        Compliance: output.Compliance !== undefined && output.Compliance !== null
            ? deserializeAws_restJson1Compliance(output.Compliance, context)
            : undefined,
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? output.CreatedAt : undefined,
        Criticality: output.Criticality !== undefined && output.Criticality !== null ? output.Criticality : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FindingProviderFields: output.FindingProviderFields !== undefined && output.FindingProviderFields !== null
            ? deserializeAws_restJson1FindingProviderFields(output.FindingProviderFields, context)
            : undefined,
        FirstObservedAt: output.FirstObservedAt !== undefined && output.FirstObservedAt !== null ? output.FirstObservedAt : undefined,
        GeneratorId: output.GeneratorId !== undefined && output.GeneratorId !== null ? output.GeneratorId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        LastObservedAt: output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
        Malware: output.Malware !== undefined && output.Malware !== null
            ? deserializeAws_restJson1MalwareList(output.Malware, context)
            : undefined,
        Network: output.Network !== undefined && output.Network !== null
            ? deserializeAws_restJson1Network(output.Network, context)
            : undefined,
        NetworkPath: output.NetworkPath !== undefined && output.NetworkPath !== null
            ? deserializeAws_restJson1NetworkPathList(output.NetworkPath, context)
            : undefined,
        Note: output.Note !== undefined && output.Note !== null
            ? deserializeAws_restJson1Note(output.Note, context)
            : undefined,
        PatchSummary: output.PatchSummary !== undefined && output.PatchSummary !== null
            ? deserializeAws_restJson1PatchSummary(output.PatchSummary, context)
            : undefined,
        Process: output.Process !== undefined && output.Process !== null
            ? deserializeAws_restJson1ProcessDetails(output.Process, context)
            : undefined,
        ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
        ProductFields: output.ProductFields !== undefined && output.ProductFields !== null
            ? deserializeAws_restJson1FieldMap(output.ProductFields, context)
            : undefined,
        RecordState: output.RecordState !== undefined && output.RecordState !== null ? output.RecordState : undefined,
        RelatedFindings: output.RelatedFindings !== undefined && output.RelatedFindings !== null
            ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
            : undefined,
        Remediation: output.Remediation !== undefined && output.Remediation !== null
            ? deserializeAws_restJson1Remediation(output.Remediation, context)
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1ResourceList(output.Resources, context)
            : undefined,
        SchemaVersion: output.SchemaVersion !== undefined && output.SchemaVersion !== null ? output.SchemaVersion : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null
            ? deserializeAws_restJson1Severity(output.Severity, context)
            : undefined,
        SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
        ThreatIntelIndicators: output.ThreatIntelIndicators !== undefined && output.ThreatIntelIndicators !== null
            ? deserializeAws_restJson1ThreatIntelIndicatorList(output.ThreatIntelIndicators, context)
            : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
        Types: output.Types !== undefined && output.Types !== null
            ? deserializeAws_restJson1TypeList(output.Types, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
        UserDefinedFields: output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
            ? deserializeAws_restJson1FieldMap(output.UserDefinedFields, context)
            : undefined,
        VerificationState: output.VerificationState !== undefined && output.VerificationState !== null
            ? output.VerificationState
            : undefined,
        Vulnerabilities: output.Vulnerabilities !== undefined && output.Vulnerabilities !== null
            ? deserializeAws_restJson1VulnerabilityList(output.Vulnerabilities, context)
            : undefined,
        Workflow: output.Workflow !== undefined && output.Workflow !== null
            ? deserializeAws_restJson1Workflow(output.Workflow, context)
            : undefined,
        WorkflowState: output.WorkflowState !== undefined && output.WorkflowState !== null ? output.WorkflowState : undefined,
    };
};
var deserializeAws_restJson1AwsSecurityFindingFilters = function (output, context) {
    return {
        AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null
            ? deserializeAws_restJson1StringFilterList(output.AwsAccountId, context)
            : undefined,
        CompanyName: output.CompanyName !== undefined && output.CompanyName !== null
            ? deserializeAws_restJson1StringFilterList(output.CompanyName, context)
            : undefined,
        ComplianceStatus: output.ComplianceStatus !== undefined && output.ComplianceStatus !== null
            ? deserializeAws_restJson1StringFilterList(output.ComplianceStatus, context)
            : undefined,
        Confidence: output.Confidence !== undefined && output.Confidence !== null
            ? deserializeAws_restJson1NumberFilterList(output.Confidence, context)
            : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.CreatedAt, context)
            : undefined,
        Criticality: output.Criticality !== undefined && output.Criticality !== null
            ? deserializeAws_restJson1NumberFilterList(output.Criticality, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null
            ? deserializeAws_restJson1StringFilterList(output.Description, context)
            : undefined,
        FindingProviderFieldsConfidence: output.FindingProviderFieldsConfidence !== undefined && output.FindingProviderFieldsConfidence !== null
            ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsConfidence, context)
            : undefined,
        FindingProviderFieldsCriticality: output.FindingProviderFieldsCriticality !== undefined && output.FindingProviderFieldsCriticality !== null
            ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsCriticality, context)
            : undefined,
        FindingProviderFieldsRelatedFindingsId: output.FindingProviderFieldsRelatedFindingsId !== undefined &&
            output.FindingProviderFieldsRelatedFindingsId !== null
            ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsId, context)
            : undefined,
        FindingProviderFieldsRelatedFindingsProductArn: output.FindingProviderFieldsRelatedFindingsProductArn !== undefined &&
            output.FindingProviderFieldsRelatedFindingsProductArn !== null
            ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsProductArn, context)
            : undefined,
        FindingProviderFieldsSeverityLabel: output.FindingProviderFieldsSeverityLabel !== undefined && output.FindingProviderFieldsSeverityLabel !== null
            ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityLabel, context)
            : undefined,
        FindingProviderFieldsSeverityOriginal: output.FindingProviderFieldsSeverityOriginal !== undefined &&
            output.FindingProviderFieldsSeverityOriginal !== null
            ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityOriginal, context)
            : undefined,
        FindingProviderFieldsTypes: output.FindingProviderFieldsTypes !== undefined && output.FindingProviderFieldsTypes !== null
            ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsTypes, context)
            : undefined,
        FirstObservedAt: output.FirstObservedAt !== undefined && output.FirstObservedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.FirstObservedAt, context)
            : undefined,
        GeneratorId: output.GeneratorId !== undefined && output.GeneratorId !== null
            ? deserializeAws_restJson1StringFilterList(output.GeneratorId, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null
            ? deserializeAws_restJson1StringFilterList(output.Id, context)
            : undefined,
        Keyword: output.Keyword !== undefined && output.Keyword !== null
            ? deserializeAws_restJson1KeywordFilterList(output.Keyword, context)
            : undefined,
        LastObservedAt: output.LastObservedAt !== undefined && output.LastObservedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.LastObservedAt, context)
            : undefined,
        MalwareName: output.MalwareName !== undefined && output.MalwareName !== null
            ? deserializeAws_restJson1StringFilterList(output.MalwareName, context)
            : undefined,
        MalwarePath: output.MalwarePath !== undefined && output.MalwarePath !== null
            ? deserializeAws_restJson1StringFilterList(output.MalwarePath, context)
            : undefined,
        MalwareState: output.MalwareState !== undefined && output.MalwareState !== null
            ? deserializeAws_restJson1StringFilterList(output.MalwareState, context)
            : undefined,
        MalwareType: output.MalwareType !== undefined && output.MalwareType !== null
            ? deserializeAws_restJson1StringFilterList(output.MalwareType, context)
            : undefined,
        NetworkDestinationDomain: output.NetworkDestinationDomain !== undefined && output.NetworkDestinationDomain !== null
            ? deserializeAws_restJson1StringFilterList(output.NetworkDestinationDomain, context)
            : undefined,
        NetworkDestinationIpV4: output.NetworkDestinationIpV4 !== undefined && output.NetworkDestinationIpV4 !== null
            ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV4, context)
            : undefined,
        NetworkDestinationIpV6: output.NetworkDestinationIpV6 !== undefined && output.NetworkDestinationIpV6 !== null
            ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV6, context)
            : undefined,
        NetworkDestinationPort: output.NetworkDestinationPort !== undefined && output.NetworkDestinationPort !== null
            ? deserializeAws_restJson1NumberFilterList(output.NetworkDestinationPort, context)
            : undefined,
        NetworkDirection: output.NetworkDirection !== undefined && output.NetworkDirection !== null
            ? deserializeAws_restJson1StringFilterList(output.NetworkDirection, context)
            : undefined,
        NetworkProtocol: output.NetworkProtocol !== undefined && output.NetworkProtocol !== null
            ? deserializeAws_restJson1StringFilterList(output.NetworkProtocol, context)
            : undefined,
        NetworkSourceDomain: output.NetworkSourceDomain !== undefined && output.NetworkSourceDomain !== null
            ? deserializeAws_restJson1StringFilterList(output.NetworkSourceDomain, context)
            : undefined,
        NetworkSourceIpV4: output.NetworkSourceIpV4 !== undefined && output.NetworkSourceIpV4 !== null
            ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV4, context)
            : undefined,
        NetworkSourceIpV6: output.NetworkSourceIpV6 !== undefined && output.NetworkSourceIpV6 !== null
            ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV6, context)
            : undefined,
        NetworkSourceMac: output.NetworkSourceMac !== undefined && output.NetworkSourceMac !== null
            ? deserializeAws_restJson1StringFilterList(output.NetworkSourceMac, context)
            : undefined,
        NetworkSourcePort: output.NetworkSourcePort !== undefined && output.NetworkSourcePort !== null
            ? deserializeAws_restJson1NumberFilterList(output.NetworkSourcePort, context)
            : undefined,
        NoteText: output.NoteText !== undefined && output.NoteText !== null
            ? deserializeAws_restJson1StringFilterList(output.NoteText, context)
            : undefined,
        NoteUpdatedAt: output.NoteUpdatedAt !== undefined && output.NoteUpdatedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.NoteUpdatedAt, context)
            : undefined,
        NoteUpdatedBy: output.NoteUpdatedBy !== undefined && output.NoteUpdatedBy !== null
            ? deserializeAws_restJson1StringFilterList(output.NoteUpdatedBy, context)
            : undefined,
        ProcessLaunchedAt: output.ProcessLaunchedAt !== undefined && output.ProcessLaunchedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ProcessLaunchedAt, context)
            : undefined,
        ProcessName: output.ProcessName !== undefined && output.ProcessName !== null
            ? deserializeAws_restJson1StringFilterList(output.ProcessName, context)
            : undefined,
        ProcessParentPid: output.ProcessParentPid !== undefined && output.ProcessParentPid !== null
            ? deserializeAws_restJson1NumberFilterList(output.ProcessParentPid, context)
            : undefined,
        ProcessPath: output.ProcessPath !== undefined && output.ProcessPath !== null
            ? deserializeAws_restJson1StringFilterList(output.ProcessPath, context)
            : undefined,
        ProcessPid: output.ProcessPid !== undefined && output.ProcessPid !== null
            ? deserializeAws_restJson1NumberFilterList(output.ProcessPid, context)
            : undefined,
        ProcessTerminatedAt: output.ProcessTerminatedAt !== undefined && output.ProcessTerminatedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ProcessTerminatedAt, context)
            : undefined,
        ProductArn: output.ProductArn !== undefined && output.ProductArn !== null
            ? deserializeAws_restJson1StringFilterList(output.ProductArn, context)
            : undefined,
        ProductFields: output.ProductFields !== undefined && output.ProductFields !== null
            ? deserializeAws_restJson1MapFilterList(output.ProductFields, context)
            : undefined,
        ProductName: output.ProductName !== undefined && output.ProductName !== null
            ? deserializeAws_restJson1StringFilterList(output.ProductName, context)
            : undefined,
        RecommendationText: output.RecommendationText !== undefined && output.RecommendationText !== null
            ? deserializeAws_restJson1StringFilterList(output.RecommendationText, context)
            : undefined,
        RecordState: output.RecordState !== undefined && output.RecordState !== null
            ? deserializeAws_restJson1StringFilterList(output.RecordState, context)
            : undefined,
        RelatedFindingsId: output.RelatedFindingsId !== undefined && output.RelatedFindingsId !== null
            ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsId, context)
            : undefined,
        RelatedFindingsProductArn: output.RelatedFindingsProductArn !== undefined && output.RelatedFindingsProductArn !== null
            ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsProductArn, context)
            : undefined,
        ResourceAwsEc2InstanceIamInstanceProfileArn: output.ResourceAwsEc2InstanceIamInstanceProfileArn !== undefined &&
            output.ResourceAwsEc2InstanceIamInstanceProfileArn !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceIamInstanceProfileArn, context)
            : undefined,
        ResourceAwsEc2InstanceImageId: output.ResourceAwsEc2InstanceImageId !== undefined && output.ResourceAwsEc2InstanceImageId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceImageId, context)
            : undefined,
        ResourceAwsEc2InstanceIpV4Addresses: output.ResourceAwsEc2InstanceIpV4Addresses !== undefined && output.ResourceAwsEc2InstanceIpV4Addresses !== null
            ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV4Addresses, context)
            : undefined,
        ResourceAwsEc2InstanceIpV6Addresses: output.ResourceAwsEc2InstanceIpV6Addresses !== undefined && output.ResourceAwsEc2InstanceIpV6Addresses !== null
            ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV6Addresses, context)
            : undefined,
        ResourceAwsEc2InstanceKeyName: output.ResourceAwsEc2InstanceKeyName !== undefined && output.ResourceAwsEc2InstanceKeyName !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceKeyName, context)
            : undefined,
        ResourceAwsEc2InstanceLaunchedAt: output.ResourceAwsEc2InstanceLaunchedAt !== undefined && output.ResourceAwsEc2InstanceLaunchedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ResourceAwsEc2InstanceLaunchedAt, context)
            : undefined,
        ResourceAwsEc2InstanceSubnetId: output.ResourceAwsEc2InstanceSubnetId !== undefined && output.ResourceAwsEc2InstanceSubnetId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceSubnetId, context)
            : undefined,
        ResourceAwsEc2InstanceType: output.ResourceAwsEc2InstanceType !== undefined && output.ResourceAwsEc2InstanceType !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceType, context)
            : undefined,
        ResourceAwsEc2InstanceVpcId: output.ResourceAwsEc2InstanceVpcId !== undefined && output.ResourceAwsEc2InstanceVpcId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceVpcId, context)
            : undefined,
        ResourceAwsIamAccessKeyCreatedAt: output.ResourceAwsIamAccessKeyCreatedAt !== undefined && output.ResourceAwsIamAccessKeyCreatedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ResourceAwsIamAccessKeyCreatedAt, context)
            : undefined,
        ResourceAwsIamAccessKeyStatus: output.ResourceAwsIamAccessKeyStatus !== undefined && output.ResourceAwsIamAccessKeyStatus !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyStatus, context)
            : undefined,
        ResourceAwsIamAccessKeyUserName: output.ResourceAwsIamAccessKeyUserName !== undefined && output.ResourceAwsIamAccessKeyUserName !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyUserName, context)
            : undefined,
        ResourceAwsS3BucketOwnerId: output.ResourceAwsS3BucketOwnerId !== undefined && output.ResourceAwsS3BucketOwnerId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerId, context)
            : undefined,
        ResourceAwsS3BucketOwnerName: output.ResourceAwsS3BucketOwnerName !== undefined && output.ResourceAwsS3BucketOwnerName !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerName, context)
            : undefined,
        ResourceContainerImageId: output.ResourceContainerImageId !== undefined && output.ResourceContainerImageId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageId, context)
            : undefined,
        ResourceContainerImageName: output.ResourceContainerImageName !== undefined && output.ResourceContainerImageName !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageName, context)
            : undefined,
        ResourceContainerLaunchedAt: output.ResourceContainerLaunchedAt !== undefined && output.ResourceContainerLaunchedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ResourceContainerLaunchedAt, context)
            : undefined,
        ResourceContainerName: output.ResourceContainerName !== undefined && output.ResourceContainerName !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceContainerName, context)
            : undefined,
        ResourceDetailsOther: output.ResourceDetailsOther !== undefined && output.ResourceDetailsOther !== null
            ? deserializeAws_restJson1MapFilterList(output.ResourceDetailsOther, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceId, context)
            : undefined,
        ResourcePartition: output.ResourcePartition !== undefined && output.ResourcePartition !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourcePartition, context)
            : undefined,
        ResourceRegion: output.ResourceRegion !== undefined && output.ResourceRegion !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceRegion, context)
            : undefined,
        ResourceTags: output.ResourceTags !== undefined && output.ResourceTags !== null
            ? deserializeAws_restJson1MapFilterList(output.ResourceTags, context)
            : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null
            ? deserializeAws_restJson1StringFilterList(output.ResourceType, context)
            : undefined,
        SeverityLabel: output.SeverityLabel !== undefined && output.SeverityLabel !== null
            ? deserializeAws_restJson1StringFilterList(output.SeverityLabel, context)
            : undefined,
        SeverityNormalized: output.SeverityNormalized !== undefined && output.SeverityNormalized !== null
            ? deserializeAws_restJson1NumberFilterList(output.SeverityNormalized, context)
            : undefined,
        SeverityProduct: output.SeverityProduct !== undefined && output.SeverityProduct !== null
            ? deserializeAws_restJson1NumberFilterList(output.SeverityProduct, context)
            : undefined,
        SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null
            ? deserializeAws_restJson1StringFilterList(output.SourceUrl, context)
            : undefined,
        ThreatIntelIndicatorCategory: output.ThreatIntelIndicatorCategory !== undefined && output.ThreatIntelIndicatorCategory !== null
            ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorCategory, context)
            : undefined,
        ThreatIntelIndicatorLastObservedAt: output.ThreatIntelIndicatorLastObservedAt !== undefined && output.ThreatIntelIndicatorLastObservedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.ThreatIntelIndicatorLastObservedAt, context)
            : undefined,
        ThreatIntelIndicatorSource: output.ThreatIntelIndicatorSource !== undefined && output.ThreatIntelIndicatorSource !== null
            ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSource, context)
            : undefined,
        ThreatIntelIndicatorSourceUrl: output.ThreatIntelIndicatorSourceUrl !== undefined && output.ThreatIntelIndicatorSourceUrl !== null
            ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSourceUrl, context)
            : undefined,
        ThreatIntelIndicatorType: output.ThreatIntelIndicatorType !== undefined && output.ThreatIntelIndicatorType !== null
            ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorType, context)
            : undefined,
        ThreatIntelIndicatorValue: output.ThreatIntelIndicatorValue !== undefined && output.ThreatIntelIndicatorValue !== null
            ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorValue, context)
            : undefined,
        Title: output.Title !== undefined && output.Title !== null
            ? deserializeAws_restJson1StringFilterList(output.Title, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null
            ? deserializeAws_restJson1StringFilterList(output.Type, context)
            : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null
            ? deserializeAws_restJson1DateFilterList(output.UpdatedAt, context)
            : undefined,
        UserDefinedFields: output.UserDefinedFields !== undefined && output.UserDefinedFields !== null
            ? deserializeAws_restJson1MapFilterList(output.UserDefinedFields, context)
            : undefined,
        VerificationState: output.VerificationState !== undefined && output.VerificationState !== null
            ? deserializeAws_restJson1StringFilterList(output.VerificationState, context)
            : undefined,
        WorkflowState: output.WorkflowState !== undefined && output.WorkflowState !== null
            ? deserializeAws_restJson1StringFilterList(output.WorkflowState, context)
            : undefined,
        WorkflowStatus: output.WorkflowStatus !== undefined && output.WorkflowStatus !== null
            ? deserializeAws_restJson1StringFilterList(output.WorkflowStatus, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsSecurityFindingIdentifier = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    };
};
var deserializeAws_restJson1AwsSecurityFindingIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
};
var deserializeAws_restJson1AwsSecurityFindingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsSecurityFinding(entry, context);
    });
};
var deserializeAws_restJson1AwsSnsTopicDetails = function (output, context) {
    return {
        KmsMasterKeyId: output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        Subscription: output.Subscription !== undefined && output.Subscription !== null
            ? deserializeAws_restJson1AwsSnsTopicSubscriptionList(output.Subscription, context)
            : undefined,
        TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
    };
};
var deserializeAws_restJson1AwsSnsTopicSubscription = function (output, context) {
    return {
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null ? output.Endpoint : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    };
};
var deserializeAws_restJson1AwsSnsTopicSubscriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
};
var deserializeAws_restJson1AwsSqsQueueDetails = function (output, context) {
    return {
        DeadLetterTargetArn: output.DeadLetterTargetArn !== undefined && output.DeadLetterTargetArn !== null
            ? output.DeadLetterTargetArn
            : undefined,
        KmsDataKeyReusePeriodSeconds: output.KmsDataKeyReusePeriodSeconds !== undefined && output.KmsDataKeyReusePeriodSeconds !== null
            ? output.KmsDataKeyReusePeriodSeconds
            : undefined,
        KmsMasterKeyId: output.KmsMasterKeyId !== undefined && output.KmsMasterKeyId !== null ? output.KmsMasterKeyId : undefined,
        QueueName: output.QueueName !== undefined && output.QueueName !== null ? output.QueueName : undefined,
    };
};
var deserializeAws_restJson1AwsSsmComplianceSummary = function (output, context) {
    return {
        ComplianceType: output.ComplianceType !== undefined && output.ComplianceType !== null ? output.ComplianceType : undefined,
        CompliantCriticalCount: output.CompliantCriticalCount !== undefined && output.CompliantCriticalCount !== null
            ? output.CompliantCriticalCount
            : undefined,
        CompliantHighCount: output.CompliantHighCount !== undefined && output.CompliantHighCount !== null
            ? output.CompliantHighCount
            : undefined,
        CompliantInformationalCount: output.CompliantInformationalCount !== undefined && output.CompliantInformationalCount !== null
            ? output.CompliantInformationalCount
            : undefined,
        CompliantLowCount: output.CompliantLowCount !== undefined && output.CompliantLowCount !== null
            ? output.CompliantLowCount
            : undefined,
        CompliantMediumCount: output.CompliantMediumCount !== undefined && output.CompliantMediumCount !== null
            ? output.CompliantMediumCount
            : undefined,
        CompliantUnspecifiedCount: output.CompliantUnspecifiedCount !== undefined && output.CompliantUnspecifiedCount !== null
            ? output.CompliantUnspecifiedCount
            : undefined,
        ExecutionType: output.ExecutionType !== undefined && output.ExecutionType !== null ? output.ExecutionType : undefined,
        NonCompliantCriticalCount: output.NonCompliantCriticalCount !== undefined && output.NonCompliantCriticalCount !== null
            ? output.NonCompliantCriticalCount
            : undefined,
        NonCompliantHighCount: output.NonCompliantHighCount !== undefined && output.NonCompliantHighCount !== null
            ? output.NonCompliantHighCount
            : undefined,
        NonCompliantInformationalCount: output.NonCompliantInformationalCount !== undefined && output.NonCompliantInformationalCount !== null
            ? output.NonCompliantInformationalCount
            : undefined,
        NonCompliantLowCount: output.NonCompliantLowCount !== undefined && output.NonCompliantLowCount !== null
            ? output.NonCompliantLowCount
            : undefined,
        NonCompliantMediumCount: output.NonCompliantMediumCount !== undefined && output.NonCompliantMediumCount !== null
            ? output.NonCompliantMediumCount
            : undefined,
        NonCompliantUnspecifiedCount: output.NonCompliantUnspecifiedCount !== undefined && output.NonCompliantUnspecifiedCount !== null
            ? output.NonCompliantUnspecifiedCount
            : undefined,
        OverallSeverity: output.OverallSeverity !== undefined && output.OverallSeverity !== null ? output.OverallSeverity : undefined,
        PatchBaselineId: output.PatchBaselineId !== undefined && output.PatchBaselineId !== null ? output.PatchBaselineId : undefined,
        PatchGroup: output.PatchGroup !== undefined && output.PatchGroup !== null ? output.PatchGroup : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1AwsSsmPatch = function (output, context) {
    return {
        ComplianceSummary: output.ComplianceSummary !== undefined && output.ComplianceSummary !== null
            ? deserializeAws_restJson1AwsSsmComplianceSummary(output.ComplianceSummary, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsSsmPatchComplianceDetails = function (output, context) {
    return {
        Patch: output.Patch !== undefined && output.Patch !== null
            ? deserializeAws_restJson1AwsSsmPatch(output.Patch, context)
            : undefined,
    };
};
var deserializeAws_restJson1AwsWafWebAclDetails = function (output, context) {
    return {
        DefaultAction: output.DefaultAction !== undefined && output.DefaultAction !== null ? output.DefaultAction : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_restJson1AwsWafWebAclRuleList(output.Rules, context)
            : undefined,
        WebAclId: output.WebAclId !== undefined && output.WebAclId !== null ? output.WebAclId : undefined,
    };
};
var deserializeAws_restJson1AwsWafWebAclRule = function (output, context) {
    return {
        Action: output.Action !== undefined && output.Action !== null
            ? deserializeAws_restJson1WafAction(output.Action, context)
            : undefined,
        ExcludedRules: output.ExcludedRules !== undefined && output.ExcludedRules !== null
            ? deserializeAws_restJson1WafExcludedRuleList(output.ExcludedRules, context)
            : undefined,
        OverrideAction: output.OverrideAction !== undefined && output.OverrideAction !== null
            ? deserializeAws_restJson1WafOverrideAction(output.OverrideAction, context)
            : undefined,
        Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1AwsWafWebAclRuleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
};
var deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        FindingIdentifier: output.FindingIdentifier !== undefined && output.FindingIdentifier !== null
            ? deserializeAws_restJson1AwsSecurityFindingIdentifier(output.FindingIdentifier, context)
            : undefined,
    };
};
var deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding(entry, context);
    });
};
var deserializeAws_restJson1CategoryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Cell = function (output, context) {
    return {
        CellReference: output.CellReference !== undefined && output.CellReference !== null ? output.CellReference : undefined,
        Column: output.Column !== undefined && output.Column !== null ? output.Column : undefined,
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Row: output.Row !== undefined && output.Row !== null ? output.Row : undefined,
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
var deserializeAws_restJson1CidrBlockAssociation = function (output, context) {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        CidrBlock: output.CidrBlock !== undefined && output.CidrBlock !== null ? output.CidrBlock : undefined,
        CidrBlockState: output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
    };
};
var deserializeAws_restJson1CidrBlockAssociationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CidrBlockAssociation(entry, context);
    });
};
var deserializeAws_restJson1City = function (output, context) {
    return {
        CityName: output.CityName !== undefined && output.CityName !== null ? output.CityName : undefined,
    };
};
var deserializeAws_restJson1ClassificationResult = function (output, context) {
    return {
        AdditionalOccurrences: output.AdditionalOccurrences !== undefined && output.AdditionalOccurrences !== null
            ? output.AdditionalOccurrences
            : undefined,
        CustomDataIdentifiers: output.CustomDataIdentifiers !== undefined && output.CustomDataIdentifiers !== null
            ? deserializeAws_restJson1CustomDataIdentifiersResult(output.CustomDataIdentifiers, context)
            : undefined,
        MimeType: output.MimeType !== undefined && output.MimeType !== null ? output.MimeType : undefined,
        SensitiveData: output.SensitiveData !== undefined && output.SensitiveData !== null
            ? deserializeAws_restJson1SensitiveDataResultList(output.SensitiveData, context)
            : undefined,
        SizeClassified: output.SizeClassified !== undefined && output.SizeClassified !== null ? output.SizeClassified : undefined,
        Status: output.Status !== undefined && output.Status !== null
            ? deserializeAws_restJson1ClassificationStatus(output.Status, context)
            : undefined,
    };
};
var deserializeAws_restJson1ClassificationStatus = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
var deserializeAws_restJson1Compliance = function (output, context) {
    return {
        RelatedRequirements: output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
            ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReasons: output.StatusReasons !== undefined && output.StatusReasons !== null
            ? deserializeAws_restJson1StatusReasonsList(output.StatusReasons, context)
            : undefined,
    };
};
var deserializeAws_restJson1ContainerDetails = function (output, context) {
    return {
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
        ImageName: output.ImageName !== undefined && output.ImageName !== null ? output.ImageName : undefined,
        LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1Country = function (output, context) {
    return {
        CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
        CountryName: output.CountryName !== undefined && output.CountryName !== null ? output.CountryName : undefined,
    };
};
var deserializeAws_restJson1CustomDataIdentifiersDetections = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Occurrences: output.Occurrences !== undefined && output.Occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.Occurrences, context)
            : undefined,
    };
};
var deserializeAws_restJson1CustomDataIdentifiersDetectionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
};
var deserializeAws_restJson1CustomDataIdentifiersResult = function (output, context) {
    return {
        Detections: output.Detections !== undefined && output.Detections !== null
            ? deserializeAws_restJson1CustomDataIdentifiersDetectionsList(output.Detections, context)
            : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_restJson1Cvss = function (output, context) {
    return {
        BaseScore: output.BaseScore !== undefined && output.BaseScore !== null ? output.BaseScore : undefined,
        BaseVector: output.BaseVector !== undefined && output.BaseVector !== null ? output.BaseVector : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1CvssList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Cvss(entry, context);
    });
};
var deserializeAws_restJson1DataClassificationDetails = function (output, context) {
    return {
        DetailedResultsLocation: output.DetailedResultsLocation !== undefined && output.DetailedResultsLocation !== null
            ? output.DetailedResultsLocation
            : undefined,
        Result: output.Result !== undefined && output.Result !== null
            ? deserializeAws_restJson1ClassificationResult(output.Result, context)
            : undefined,
    };
};
var deserializeAws_restJson1DateFilter = function (output, context) {
    return {
        DateRange: output.DateRange !== undefined && output.DateRange !== null
            ? deserializeAws_restJson1DateRange(output.DateRange, context)
            : undefined,
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
    };
};
var deserializeAws_restJson1DateFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DateFilter(entry, context);
    });
};
var deserializeAws_restJson1DateRange = function (output, context) {
    return {
        Unit: output.Unit !== undefined && output.Unit !== null ? output.Unit : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1DnsRequestAction = function (output, context) {
    return {
        Blocked: output.Blocked !== undefined && output.Blocked !== null ? output.Blocked : undefined,
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
    };
};
var deserializeAws_restJson1FieldMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1FindingProviderFields = function (output, context) {
    return {
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        Criticality: output.Criticality !== undefined && output.Criticality !== null ? output.Criticality : undefined,
        RelatedFindings: output.RelatedFindings !== undefined && output.RelatedFindings !== null
            ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
            : undefined,
        Severity: output.Severity !== undefined && output.Severity !== null
            ? deserializeAws_restJson1FindingProviderSeverity(output.Severity, context)
            : undefined,
        Types: output.Types !== undefined && output.Types !== null
            ? deserializeAws_restJson1TypeList(output.Types, context)
            : undefined,
    };
};
var deserializeAws_restJson1FindingProviderSeverity = function (output, context) {
    return {
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        Original: output.Original !== undefined && output.Original !== null ? output.Original : undefined,
    };
};
var deserializeAws_restJson1GeoLocation = function (output, context) {
    return {
        Lat: output.Lat !== undefined && output.Lat !== null ? output.Lat : undefined,
        Lon: output.Lon !== undefined && output.Lon !== null ? output.Lon : undefined,
    };
};
var deserializeAws_restJson1IcmpTypeCode = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ImportFindingsError = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    };
};
var deserializeAws_restJson1ImportFindingsErrorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImportFindingsError(entry, context);
    });
};
var deserializeAws_restJson1Insight = function (output, context) {
    return {
        Filters: output.Filters !== undefined && output.Filters !== null
            ? deserializeAws_restJson1AwsSecurityFindingFilters(output.Filters, context)
            : undefined,
        GroupByAttribute: output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
        InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
var deserializeAws_restJson1InsightList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Insight(entry, context);
    });
};
var deserializeAws_restJson1InsightResults = function (output, context) {
    return {
        GroupByAttribute: output.GroupByAttribute !== undefined && output.GroupByAttribute !== null ? output.GroupByAttribute : undefined,
        InsightArn: output.InsightArn !== undefined && output.InsightArn !== null ? output.InsightArn : undefined,
        ResultValues: output.ResultValues !== undefined && output.ResultValues !== null
            ? deserializeAws_restJson1InsightResultValueList(output.ResultValues, context)
            : undefined,
    };
};
var deserializeAws_restJson1InsightResultValue = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        GroupByAttributeValue: output.GroupByAttributeValue !== undefined && output.GroupByAttributeValue !== null
            ? output.GroupByAttributeValue
            : undefined,
    };
};
var deserializeAws_restJson1InsightResultValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsightResultValue(entry, context);
    });
};
var deserializeAws_restJson1IntegrationTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Invitation = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        InvitationId: output.InvitationId !== undefined && output.InvitationId !== null ? output.InvitationId : undefined,
        InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
        MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
    };
};
var deserializeAws_restJson1InvitationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Invitation(entry, context);
    });
};
var deserializeAws_restJson1IpFilter = function (output, context) {
    return {
        Cidr: output.Cidr !== undefined && output.Cidr !== null ? output.Cidr : undefined,
    };
};
var deserializeAws_restJson1IpFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IpFilter(entry, context);
    });
};
var deserializeAws_restJson1IpOrganizationDetails = function (output, context) {
    return {
        Asn: output.Asn !== undefined && output.Asn !== null ? output.Asn : undefined,
        AsnOrg: output.AsnOrg !== undefined && output.AsnOrg !== null ? output.AsnOrg : undefined,
        Isp: output.Isp !== undefined && output.Isp !== null ? output.Isp : undefined,
        Org: output.Org !== undefined && output.Org !== null ? output.Org : undefined,
    };
};
var deserializeAws_restJson1Ipv6CidrBlockAssociation = function (output, context) {
    return {
        AssociationId: output.AssociationId !== undefined && output.AssociationId !== null ? output.AssociationId : undefined,
        CidrBlockState: output.CidrBlockState !== undefined && output.CidrBlockState !== null ? output.CidrBlockState : undefined,
        Ipv6CidrBlock: output.Ipv6CidrBlock !== undefined && output.Ipv6CidrBlock !== null ? output.Ipv6CidrBlock : undefined,
    };
};
var deserializeAws_restJson1Ipv6CidrBlockAssociationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
};
var deserializeAws_restJson1KeywordFilter = function (output, context) {
    return {
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1KeywordFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KeywordFilter(entry, context);
    });
};
var deserializeAws_restJson1LoadBalancerState = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
var deserializeAws_restJson1Malware = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1MalwareList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Malware(entry, context);
    });
};
var deserializeAws_restJson1MapFilter = function (output, context) {
    return {
        Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1MapFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MapFilter(entry, context);
    });
};
var deserializeAws_restJson1Member = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AdministratorId: output.AdministratorId !== undefined && output.AdministratorId !== null ? output.AdministratorId : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        InvitedAt: output.InvitedAt !== undefined && output.InvitedAt !== null ? new Date(output.InvitedAt) : undefined,
        MasterId: output.MasterId !== undefined && output.MasterId !== null ? output.MasterId : undefined,
        MemberStatus: output.MemberStatus !== undefined && output.MemberStatus !== null ? output.MemberStatus : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
var deserializeAws_restJson1MemberList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Member(entry, context);
    });
};
var deserializeAws_restJson1Network = function (output, context) {
    return {
        DestinationDomain: output.DestinationDomain !== undefined && output.DestinationDomain !== null
            ? output.DestinationDomain
            : undefined,
        DestinationIpV4: output.DestinationIpV4 !== undefined && output.DestinationIpV4 !== null ? output.DestinationIpV4 : undefined,
        DestinationIpV6: output.DestinationIpV6 !== undefined && output.DestinationIpV6 !== null ? output.DestinationIpV6 : undefined,
        DestinationPort: output.DestinationPort !== undefined && output.DestinationPort !== null ? output.DestinationPort : undefined,
        Direction: output.Direction !== undefined && output.Direction !== null ? output.Direction : undefined,
        OpenPortRange: output.OpenPortRange !== undefined && output.OpenPortRange !== null
            ? deserializeAws_restJson1PortRange(output.OpenPortRange, context)
            : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        SourceDomain: output.SourceDomain !== undefined && output.SourceDomain !== null ? output.SourceDomain : undefined,
        SourceIpV4: output.SourceIpV4 !== undefined && output.SourceIpV4 !== null ? output.SourceIpV4 : undefined,
        SourceIpV6: output.SourceIpV6 !== undefined && output.SourceIpV6 !== null ? output.SourceIpV6 : undefined,
        SourceMac: output.SourceMac !== undefined && output.SourceMac !== null ? output.SourceMac : undefined,
        SourcePort: output.SourcePort !== undefined && output.SourcePort !== null ? output.SourcePort : undefined,
    };
};
var deserializeAws_restJson1NetworkConnectionAction = function (output, context) {
    return {
        Blocked: output.Blocked !== undefined && output.Blocked !== null ? output.Blocked : undefined,
        ConnectionDirection: output.ConnectionDirection !== undefined && output.ConnectionDirection !== null
            ? output.ConnectionDirection
            : undefined,
        LocalPortDetails: output.LocalPortDetails !== undefined && output.LocalPortDetails !== null
            ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
            : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        RemoteIpDetails: output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
            ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
            : undefined,
        RemotePortDetails: output.RemotePortDetails !== undefined && output.RemotePortDetails !== null
            ? deserializeAws_restJson1ActionRemotePortDetails(output.RemotePortDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1NetworkHeader = function (output, context) {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null
            ? deserializeAws_restJson1NetworkPathComponentDetails(output.Destination, context)
            : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_restJson1NetworkPathComponentDetails(output.Source, context)
            : undefined,
    };
};
var deserializeAws_restJson1NetworkPathComponent = function (output, context) {
    return {
        ComponentId: output.ComponentId !== undefined && output.ComponentId !== null ? output.ComponentId : undefined,
        ComponentType: output.ComponentType !== undefined && output.ComponentType !== null ? output.ComponentType : undefined,
        Egress: output.Egress !== undefined && output.Egress !== null
            ? deserializeAws_restJson1NetworkHeader(output.Egress, context)
            : undefined,
        Ingress: output.Ingress !== undefined && output.Ingress !== null
            ? deserializeAws_restJson1NetworkHeader(output.Ingress, context)
            : undefined,
    };
};
var deserializeAws_restJson1NetworkPathComponentDetails = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null
            ? deserializeAws_restJson1StringList(output.Address, context)
            : undefined,
        PortRanges: output.PortRanges !== undefined && output.PortRanges !== null
            ? deserializeAws_restJson1PortRangeList(output.PortRanges, context)
            : undefined,
    };
};
var deserializeAws_restJson1NetworkPathList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkPathComponent(entry, context);
    });
};
var deserializeAws_restJson1NonEmptyStringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Note = function (output, context) {
    return {
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? output.UpdatedAt : undefined,
        UpdatedBy: output.UpdatedBy !== undefined && output.UpdatedBy !== null ? output.UpdatedBy : undefined,
    };
};
var deserializeAws_restJson1NumberFilter = function (output, context) {
    return {
        Eq: output.Eq !== undefined && output.Eq !== null ? output.Eq : undefined,
        Gte: output.Gte !== undefined && output.Gte !== null ? output.Gte : undefined,
        Lte: output.Lte !== undefined && output.Lte !== null ? output.Lte : undefined,
    };
};
var deserializeAws_restJson1NumberFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NumberFilter(entry, context);
    });
};
var deserializeAws_restJson1Occurrences = function (output, context) {
    return {
        Cells: output.Cells !== undefined && output.Cells !== null
            ? deserializeAws_restJson1Cells(output.Cells, context)
            : undefined,
        LineRanges: output.LineRanges !== undefined && output.LineRanges !== null
            ? deserializeAws_restJson1Ranges(output.LineRanges, context)
            : undefined,
        OffsetRanges: output.OffsetRanges !== undefined && output.OffsetRanges !== null
            ? deserializeAws_restJson1Ranges(output.OffsetRanges, context)
            : undefined,
        Pages: output.Pages !== undefined && output.Pages !== null
            ? deserializeAws_restJson1Pages(output.Pages, context)
            : undefined,
        Records: output.Records !== undefined && output.Records !== null
            ? deserializeAws_restJson1Records(output.Records, context)
            : undefined,
    };
};
var deserializeAws_restJson1Page = function (output, context) {
    return {
        LineRange: output.LineRange !== undefined && output.LineRange !== null
            ? deserializeAws_restJson1Range(output.LineRange, context)
            : undefined,
        OffsetRange: output.OffsetRange !== undefined && output.OffsetRange !== null
            ? deserializeAws_restJson1Range(output.OffsetRange, context)
            : undefined,
        PageNumber: output.PageNumber !== undefined && output.PageNumber !== null ? output.PageNumber : undefined,
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
var deserializeAws_restJson1PatchSummary = function (output, context) {
    return {
        FailedCount: output.FailedCount !== undefined && output.FailedCount !== null ? output.FailedCount : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        InstalledCount: output.InstalledCount !== undefined && output.InstalledCount !== null ? output.InstalledCount : undefined,
        InstalledOtherCount: output.InstalledOtherCount !== undefined && output.InstalledOtherCount !== null
            ? output.InstalledOtherCount
            : undefined,
        InstalledPendingReboot: output.InstalledPendingReboot !== undefined && output.InstalledPendingReboot !== null
            ? output.InstalledPendingReboot
            : undefined,
        InstalledRejectedCount: output.InstalledRejectedCount !== undefined && output.InstalledRejectedCount !== null
            ? output.InstalledRejectedCount
            : undefined,
        MissingCount: output.MissingCount !== undefined && output.MissingCount !== null ? output.MissingCount : undefined,
        Operation: output.Operation !== undefined && output.Operation !== null ? output.Operation : undefined,
        OperationEndTime: output.OperationEndTime !== undefined && output.OperationEndTime !== null ? output.OperationEndTime : undefined,
        OperationStartTime: output.OperationStartTime !== undefined && output.OperationStartTime !== null
            ? output.OperationStartTime
            : undefined,
        RebootOption: output.RebootOption !== undefined && output.RebootOption !== null ? output.RebootOption : undefined,
    };
};
var deserializeAws_restJson1PortProbeAction = function (output, context) {
    return {
        Blocked: output.Blocked !== undefined && output.Blocked !== null ? output.Blocked : undefined,
        PortProbeDetails: output.PortProbeDetails !== undefined && output.PortProbeDetails !== null
            ? deserializeAws_restJson1PortProbeDetailList(output.PortProbeDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortProbeDetail = function (output, context) {
    return {
        LocalIpDetails: output.LocalIpDetails !== undefined && output.LocalIpDetails !== null
            ? deserializeAws_restJson1ActionLocalIpDetails(output.LocalIpDetails, context)
            : undefined,
        LocalPortDetails: output.LocalPortDetails !== undefined && output.LocalPortDetails !== null
            ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
            : undefined,
        RemoteIpDetails: output.RemoteIpDetails !== undefined && output.RemoteIpDetails !== null
            ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortProbeDetailList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
};
var deserializeAws_restJson1PortRange = function (output, context) {
    return {
        Begin: output.Begin !== undefined && output.Begin !== null ? output.Begin : undefined,
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
    };
};
var deserializeAws_restJson1PortRangeFromTo = function (output, context) {
    return {
        From: output.From !== undefined && output.From !== null ? output.From : undefined,
        To: output.To !== undefined && output.To !== null ? output.To : undefined,
    };
};
var deserializeAws_restJson1PortRangeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortRange(entry, context);
    });
};
var deserializeAws_restJson1ProcessDetails = function (output, context) {
    return {
        LaunchedAt: output.LaunchedAt !== undefined && output.LaunchedAt !== null ? output.LaunchedAt : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ParentPid: output.ParentPid !== undefined && output.ParentPid !== null ? output.ParentPid : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        Pid: output.Pid !== undefined && output.Pid !== null ? output.Pid : undefined,
        TerminatedAt: output.TerminatedAt !== undefined && output.TerminatedAt !== null ? output.TerminatedAt : undefined,
    };
};
var deserializeAws_restJson1Product = function (output, context) {
    return {
        ActivationUrl: output.ActivationUrl !== undefined && output.ActivationUrl !== null ? output.ActivationUrl : undefined,
        Categories: output.Categories !== undefined && output.Categories !== null
            ? deserializeAws_restJson1CategoryList(output.Categories, context)
            : undefined,
        CompanyName: output.CompanyName !== undefined && output.CompanyName !== null ? output.CompanyName : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IntegrationTypes: output.IntegrationTypes !== undefined && output.IntegrationTypes !== null
            ? deserializeAws_restJson1IntegrationTypeList(output.IntegrationTypes, context)
            : undefined,
        MarketplaceUrl: output.MarketplaceUrl !== undefined && output.MarketplaceUrl !== null ? output.MarketplaceUrl : undefined,
        ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
        ProductName: output.ProductName !== undefined && output.ProductName !== null ? output.ProductName : undefined,
        ProductSubscriptionResourcePolicy: output.ProductSubscriptionResourcePolicy !== undefined && output.ProductSubscriptionResourcePolicy !== null
            ? output.ProductSubscriptionResourcePolicy
            : undefined,
    };
};
var deserializeAws_restJson1ProductsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Product(entry, context);
    });
};
var deserializeAws_restJson1ProductSubscriptionArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Range = function (output, context) {
    return {
        End: output.End !== undefined && output.End !== null ? output.End : undefined,
        Start: output.Start !== undefined && output.Start !== null ? output.Start : undefined,
        StartColumn: output.StartColumn !== undefined && output.StartColumn !== null ? output.StartColumn : undefined,
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
var deserializeAws_restJson1Recommendation = function (output, context) {
    return {
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
    };
};
var deserializeAws_restJson1_Record = function (output, context) {
    return {
        JsonPath: output.JsonPath !== undefined && output.JsonPath !== null ? output.JsonPath : undefined,
        RecordIndex: output.RecordIndex !== undefined && output.RecordIndex !== null ? output.RecordIndex : undefined,
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
var deserializeAws_restJson1RelatedFinding = function (output, context) {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ProductArn: output.ProductArn !== undefined && output.ProductArn !== null ? output.ProductArn : undefined,
    };
};
var deserializeAws_restJson1RelatedFindingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RelatedFinding(entry, context);
    });
};
var deserializeAws_restJson1RelatedRequirementsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Remediation = function (output, context) {
    return {
        Recommendation: output.Recommendation !== undefined && output.Recommendation !== null
            ? deserializeAws_restJson1Recommendation(output.Recommendation, context)
            : undefined,
    };
};
var deserializeAws_restJson1Resource = function (output, context) {
    return {
        DataClassification: output.DataClassification !== undefined && output.DataClassification !== null
            ? deserializeAws_restJson1DataClassificationDetails(output.DataClassification, context)
            : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_restJson1ResourceDetails(output.Details, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Partition: output.Partition !== undefined && output.Partition !== null ? output.Partition : undefined,
        Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
        ResourceRole: output.ResourceRole !== undefined && output.ResourceRole !== null ? output.ResourceRole : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1FieldMap(output.Tags, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1ResourceDetails = function (output, context) {
    return {
        AwsApiGatewayRestApi: output.AwsApiGatewayRestApi !== undefined && output.AwsApiGatewayRestApi !== null
            ? deserializeAws_restJson1AwsApiGatewayRestApiDetails(output.AwsApiGatewayRestApi, context)
            : undefined,
        AwsApiGatewayStage: output.AwsApiGatewayStage !== undefined && output.AwsApiGatewayStage !== null
            ? deserializeAws_restJson1AwsApiGatewayStageDetails(output.AwsApiGatewayStage, context)
            : undefined,
        AwsApiGatewayV2Api: output.AwsApiGatewayV2Api !== undefined && output.AwsApiGatewayV2Api !== null
            ? deserializeAws_restJson1AwsApiGatewayV2ApiDetails(output.AwsApiGatewayV2Api, context)
            : undefined,
        AwsApiGatewayV2Stage: output.AwsApiGatewayV2Stage !== undefined && output.AwsApiGatewayV2Stage !== null
            ? deserializeAws_restJson1AwsApiGatewayV2StageDetails(output.AwsApiGatewayV2Stage, context)
            : undefined,
        AwsAutoScalingAutoScalingGroup: output.AwsAutoScalingAutoScalingGroup !== undefined && output.AwsAutoScalingAutoScalingGroup !== null
            ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(output.AwsAutoScalingAutoScalingGroup, context)
            : undefined,
        AwsCertificateManagerCertificate: output.AwsCertificateManagerCertificate !== undefined && output.AwsCertificateManagerCertificate !== null
            ? deserializeAws_restJson1AwsCertificateManagerCertificateDetails(output.AwsCertificateManagerCertificate, context)
            : undefined,
        AwsCloudFrontDistribution: output.AwsCloudFrontDistribution !== undefined && output.AwsCloudFrontDistribution !== null
            ? deserializeAws_restJson1AwsCloudFrontDistributionDetails(output.AwsCloudFrontDistribution, context)
            : undefined,
        AwsCloudTrailTrail: output.AwsCloudTrailTrail !== undefined && output.AwsCloudTrailTrail !== null
            ? deserializeAws_restJson1AwsCloudTrailTrailDetails(output.AwsCloudTrailTrail, context)
            : undefined,
        AwsCodeBuildProject: output.AwsCodeBuildProject !== undefined && output.AwsCodeBuildProject !== null
            ? deserializeAws_restJson1AwsCodeBuildProjectDetails(output.AwsCodeBuildProject, context)
            : undefined,
        AwsDynamoDbTable: output.AwsDynamoDbTable !== undefined && output.AwsDynamoDbTable !== null
            ? deserializeAws_restJson1AwsDynamoDbTableDetails(output.AwsDynamoDbTable, context)
            : undefined,
        AwsEc2Eip: output.AwsEc2Eip !== undefined && output.AwsEc2Eip !== null
            ? deserializeAws_restJson1AwsEc2EipDetails(output.AwsEc2Eip, context)
            : undefined,
        AwsEc2Instance: output.AwsEc2Instance !== undefined && output.AwsEc2Instance !== null
            ? deserializeAws_restJson1AwsEc2InstanceDetails(output.AwsEc2Instance, context)
            : undefined,
        AwsEc2NetworkAcl: output.AwsEc2NetworkAcl !== undefined && output.AwsEc2NetworkAcl !== null
            ? deserializeAws_restJson1AwsEc2NetworkAclDetails(output.AwsEc2NetworkAcl, context)
            : undefined,
        AwsEc2NetworkInterface: output.AwsEc2NetworkInterface !== undefined && output.AwsEc2NetworkInterface !== null
            ? deserializeAws_restJson1AwsEc2NetworkInterfaceDetails(output.AwsEc2NetworkInterface, context)
            : undefined,
        AwsEc2SecurityGroup: output.AwsEc2SecurityGroup !== undefined && output.AwsEc2SecurityGroup !== null
            ? deserializeAws_restJson1AwsEc2SecurityGroupDetails(output.AwsEc2SecurityGroup, context)
            : undefined,
        AwsEc2Subnet: output.AwsEc2Subnet !== undefined && output.AwsEc2Subnet !== null
            ? deserializeAws_restJson1AwsEc2SubnetDetails(output.AwsEc2Subnet, context)
            : undefined,
        AwsEc2Volume: output.AwsEc2Volume !== undefined && output.AwsEc2Volume !== null
            ? deserializeAws_restJson1AwsEc2VolumeDetails(output.AwsEc2Volume, context)
            : undefined,
        AwsEc2Vpc: output.AwsEc2Vpc !== undefined && output.AwsEc2Vpc !== null
            ? deserializeAws_restJson1AwsEc2VpcDetails(output.AwsEc2Vpc, context)
            : undefined,
        AwsElasticBeanstalkEnvironment: output.AwsElasticBeanstalkEnvironment !== undefined && output.AwsElasticBeanstalkEnvironment !== null
            ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(output.AwsElasticBeanstalkEnvironment, context)
            : undefined,
        AwsElasticsearchDomain: output.AwsElasticsearchDomain !== undefined && output.AwsElasticsearchDomain !== null
            ? deserializeAws_restJson1AwsElasticsearchDomainDetails(output.AwsElasticsearchDomain, context)
            : undefined,
        AwsElbLoadBalancer: output.AwsElbLoadBalancer !== undefined && output.AwsElbLoadBalancer !== null
            ? deserializeAws_restJson1AwsElbLoadBalancerDetails(output.AwsElbLoadBalancer, context)
            : undefined,
        AwsElbv2LoadBalancer: output.AwsElbv2LoadBalancer !== undefined && output.AwsElbv2LoadBalancer !== null
            ? deserializeAws_restJson1AwsElbv2LoadBalancerDetails(output.AwsElbv2LoadBalancer, context)
            : undefined,
        AwsIamAccessKey: output.AwsIamAccessKey !== undefined && output.AwsIamAccessKey !== null
            ? deserializeAws_restJson1AwsIamAccessKeyDetails(output.AwsIamAccessKey, context)
            : undefined,
        AwsIamGroup: output.AwsIamGroup !== undefined && output.AwsIamGroup !== null
            ? deserializeAws_restJson1AwsIamGroupDetails(output.AwsIamGroup, context)
            : undefined,
        AwsIamPolicy: output.AwsIamPolicy !== undefined && output.AwsIamPolicy !== null
            ? deserializeAws_restJson1AwsIamPolicyDetails(output.AwsIamPolicy, context)
            : undefined,
        AwsIamRole: output.AwsIamRole !== undefined && output.AwsIamRole !== null
            ? deserializeAws_restJson1AwsIamRoleDetails(output.AwsIamRole, context)
            : undefined,
        AwsIamUser: output.AwsIamUser !== undefined && output.AwsIamUser !== null
            ? deserializeAws_restJson1AwsIamUserDetails(output.AwsIamUser, context)
            : undefined,
        AwsKmsKey: output.AwsKmsKey !== undefined && output.AwsKmsKey !== null
            ? deserializeAws_restJson1AwsKmsKeyDetails(output.AwsKmsKey, context)
            : undefined,
        AwsLambdaFunction: output.AwsLambdaFunction !== undefined && output.AwsLambdaFunction !== null
            ? deserializeAws_restJson1AwsLambdaFunctionDetails(output.AwsLambdaFunction, context)
            : undefined,
        AwsLambdaLayerVersion: output.AwsLambdaLayerVersion !== undefined && output.AwsLambdaLayerVersion !== null
            ? deserializeAws_restJson1AwsLambdaLayerVersionDetails(output.AwsLambdaLayerVersion, context)
            : undefined,
        AwsRdsDbCluster: output.AwsRdsDbCluster !== undefined && output.AwsRdsDbCluster !== null
            ? deserializeAws_restJson1AwsRdsDbClusterDetails(output.AwsRdsDbCluster, context)
            : undefined,
        AwsRdsDbClusterSnapshot: output.AwsRdsDbClusterSnapshot !== undefined && output.AwsRdsDbClusterSnapshot !== null
            ? deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails(output.AwsRdsDbClusterSnapshot, context)
            : undefined,
        AwsRdsDbInstance: output.AwsRdsDbInstance !== undefined && output.AwsRdsDbInstance !== null
            ? deserializeAws_restJson1AwsRdsDbInstanceDetails(output.AwsRdsDbInstance, context)
            : undefined,
        AwsRdsDbSnapshot: output.AwsRdsDbSnapshot !== undefined && output.AwsRdsDbSnapshot !== null
            ? deserializeAws_restJson1AwsRdsDbSnapshotDetails(output.AwsRdsDbSnapshot, context)
            : undefined,
        AwsRedshiftCluster: output.AwsRedshiftCluster !== undefined && output.AwsRedshiftCluster !== null
            ? deserializeAws_restJson1AwsRedshiftClusterDetails(output.AwsRedshiftCluster, context)
            : undefined,
        AwsS3AccountPublicAccessBlock: output.AwsS3AccountPublicAccessBlock !== undefined && output.AwsS3AccountPublicAccessBlock !== null
            ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.AwsS3AccountPublicAccessBlock, context)
            : undefined,
        AwsS3Bucket: output.AwsS3Bucket !== undefined && output.AwsS3Bucket !== null
            ? deserializeAws_restJson1AwsS3BucketDetails(output.AwsS3Bucket, context)
            : undefined,
        AwsS3Object: output.AwsS3Object !== undefined && output.AwsS3Object !== null
            ? deserializeAws_restJson1AwsS3ObjectDetails(output.AwsS3Object, context)
            : undefined,
        AwsSecretsManagerSecret: output.AwsSecretsManagerSecret !== undefined && output.AwsSecretsManagerSecret !== null
            ? deserializeAws_restJson1AwsSecretsManagerSecretDetails(output.AwsSecretsManagerSecret, context)
            : undefined,
        AwsSnsTopic: output.AwsSnsTopic !== undefined && output.AwsSnsTopic !== null
            ? deserializeAws_restJson1AwsSnsTopicDetails(output.AwsSnsTopic, context)
            : undefined,
        AwsSqsQueue: output.AwsSqsQueue !== undefined && output.AwsSqsQueue !== null
            ? deserializeAws_restJson1AwsSqsQueueDetails(output.AwsSqsQueue, context)
            : undefined,
        AwsSsmPatchCompliance: output.AwsSsmPatchCompliance !== undefined && output.AwsSsmPatchCompliance !== null
            ? deserializeAws_restJson1AwsSsmPatchComplianceDetails(output.AwsSsmPatchCompliance, context)
            : undefined,
        AwsWafWebAcl: output.AwsWafWebAcl !== undefined && output.AwsWafWebAcl !== null
            ? deserializeAws_restJson1AwsWafWebAclDetails(output.AwsWafWebAcl, context)
            : undefined,
        Container: output.Container !== undefined && output.Container !== null
            ? deserializeAws_restJson1ContainerDetails(output.Container, context)
            : undefined,
        Other: output.Other !== undefined && output.Other !== null
            ? deserializeAws_restJson1FieldMap(output.Other, context)
            : undefined,
    };
};
var deserializeAws_restJson1ResourceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Resource(entry, context);
    });
};
var deserializeAws_restJson1Result = function (output, context) {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        ProcessingResult: output.ProcessingResult !== undefined && output.ProcessingResult !== null ? output.ProcessingResult : undefined,
    };
};
var deserializeAws_restJson1ResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Result(entry, context);
    });
};
var deserializeAws_restJson1SecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SensitiveDataDetections = function (output, context) {
    return {
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Occurrences: output.Occurrences !== undefined && output.Occurrences !== null
            ? deserializeAws_restJson1Occurrences(output.Occurrences, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1SensitiveDataDetectionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SensitiveDataDetections(entry, context);
    });
};
var deserializeAws_restJson1SensitiveDataResult = function (output, context) {
    return {
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        Detections: output.Detections !== undefined && output.Detections !== null
            ? deserializeAws_restJson1SensitiveDataDetectionsList(output.Detections, context)
            : undefined,
        TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    };
};
var deserializeAws_restJson1SensitiveDataResultList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SensitiveDataResult(entry, context);
    });
};
var deserializeAws_restJson1Severity = function (output, context) {
    return {
        Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
        Normalized: output.Normalized !== undefined && output.Normalized !== null ? output.Normalized : undefined,
        Original: output.Original !== undefined && output.Original !== null ? output.Original : undefined,
        Product: output.Product !== undefined && output.Product !== null ? output.Product : undefined,
    };
};
var deserializeAws_restJson1SoftwarePackage = function (output, context) {
    return {
        Architecture: output.Architecture !== undefined && output.Architecture !== null ? output.Architecture : undefined,
        Epoch: output.Epoch !== undefined && output.Epoch !== null ? output.Epoch : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Release: output.Release !== undefined && output.Release !== null ? output.Release : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1SoftwarePackageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SoftwarePackage(entry, context);
    });
};
var deserializeAws_restJson1Standard = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EnabledByDefault: output.EnabledByDefault !== undefined && output.EnabledByDefault !== null ? output.EnabledByDefault : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
    };
};
var deserializeAws_restJson1Standards = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Standard(entry, context);
    });
};
var deserializeAws_restJson1StandardsControl = function (output, context) {
    return {
        ControlId: output.ControlId !== undefined && output.ControlId !== null ? output.ControlId : undefined,
        ControlStatus: output.ControlStatus !== undefined && output.ControlStatus !== null ? output.ControlStatus : undefined,
        ControlStatusUpdatedAt: output.ControlStatusUpdatedAt !== undefined && output.ControlStatusUpdatedAt !== null
            ? new Date(output.ControlStatusUpdatedAt)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DisabledReason: output.DisabledReason !== undefined && output.DisabledReason !== null ? output.DisabledReason : undefined,
        RelatedRequirements: output.RelatedRequirements !== undefined && output.RelatedRequirements !== null
            ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
            : undefined,
        RemediationUrl: output.RemediationUrl !== undefined && output.RemediationUrl !== null ? output.RemediationUrl : undefined,
        SeverityRating: output.SeverityRating !== undefined && output.SeverityRating !== null ? output.SeverityRating : undefined,
        StandardsControlArn: output.StandardsControlArn !== undefined && output.StandardsControlArn !== null
            ? output.StandardsControlArn
            : undefined,
        Title: output.Title !== undefined && output.Title !== null ? output.Title : undefined,
    };
};
var deserializeAws_restJson1StandardsControls = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StandardsControl(entry, context);
    });
};
var deserializeAws_restJson1StandardsInputParameterMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1StandardsSubscription = function (output, context) {
    return {
        StandardsArn: output.StandardsArn !== undefined && output.StandardsArn !== null ? output.StandardsArn : undefined,
        StandardsInput: output.StandardsInput !== undefined && output.StandardsInput !== null
            ? deserializeAws_restJson1StandardsInputParameterMap(output.StandardsInput, context)
            : undefined,
        StandardsStatus: output.StandardsStatus !== undefined && output.StandardsStatus !== null ? output.StandardsStatus : undefined,
        StandardsSubscriptionArn: output.StandardsSubscriptionArn !== undefined && output.StandardsSubscriptionArn !== null
            ? output.StandardsSubscriptionArn
            : undefined,
    };
};
var deserializeAws_restJson1StandardsSubscriptions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StandardsSubscription(entry, context);
    });
};
var deserializeAws_restJson1StatusReason = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ReasonCode: output.ReasonCode !== undefined && output.ReasonCode !== null ? output.ReasonCode : undefined,
    };
};
var deserializeAws_restJson1StatusReasonsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StatusReason(entry, context);
    });
};
var deserializeAws_restJson1StringFilter = function (output, context) {
    return {
        Comparison: output.Comparison !== undefined && output.Comparison !== null ? output.Comparison : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1StringFilterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StringFilter(entry, context);
    });
};
var deserializeAws_restJson1StringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_restJson1ThreatIntelIndicator = function (output, context) {
    return {
        Category: output.Category !== undefined && output.Category !== null ? output.Category : undefined,
        LastObservedAt: output.LastObservedAt !== undefined && output.LastObservedAt !== null ? output.LastObservedAt : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
        SourceUrl: output.SourceUrl !== undefined && output.SourceUrl !== null ? output.SourceUrl : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_restJson1ThreatIntelIndicatorList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
};
var deserializeAws_restJson1TypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Vulnerability = function (output, context) {
    return {
        Cvss: output.Cvss !== undefined && output.Cvss !== null
            ? deserializeAws_restJson1CvssList(output.Cvss, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ReferenceUrls: output.ReferenceUrls !== undefined && output.ReferenceUrls !== null
            ? deserializeAws_restJson1StringList(output.ReferenceUrls, context)
            : undefined,
        RelatedVulnerabilities: output.RelatedVulnerabilities !== undefined && output.RelatedVulnerabilities !== null
            ? deserializeAws_restJson1StringList(output.RelatedVulnerabilities, context)
            : undefined,
        Vendor: output.Vendor !== undefined && output.Vendor !== null
            ? deserializeAws_restJson1VulnerabilityVendor(output.Vendor, context)
            : undefined,
        VulnerablePackages: output.VulnerablePackages !== undefined && output.VulnerablePackages !== null
            ? deserializeAws_restJson1SoftwarePackageList(output.VulnerablePackages, context)
            : undefined,
    };
};
var deserializeAws_restJson1VulnerabilityList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Vulnerability(entry, context);
    });
};
var deserializeAws_restJson1VulnerabilityVendor = function (output, context) {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Url: output.Url !== undefined && output.Url !== null ? output.Url : undefined,
        VendorCreatedAt: output.VendorCreatedAt !== undefined && output.VendorCreatedAt !== null ? output.VendorCreatedAt : undefined,
        VendorSeverity: output.VendorSeverity !== undefined && output.VendorSeverity !== null ? output.VendorSeverity : undefined,
        VendorUpdatedAt: output.VendorUpdatedAt !== undefined && output.VendorUpdatedAt !== null ? output.VendorUpdatedAt : undefined,
    };
};
var deserializeAws_restJson1WafAction = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1WafExcludedRule = function (output, context) {
    return {
        RuleId: output.RuleId !== undefined && output.RuleId !== null ? output.RuleId : undefined,
    };
};
var deserializeAws_restJson1WafExcludedRuleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WafExcludedRule(entry, context);
    });
};
var deserializeAws_restJson1WafOverrideAction = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
var deserializeAws_restJson1Workflow = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
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