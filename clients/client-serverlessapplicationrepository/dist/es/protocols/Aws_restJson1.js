import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Author !== undefined && input.Author !== null && { author: input.Author })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl })), (input.Labels !== undefined &&
                    input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) })), (input.LicenseBody !== undefined && input.LicenseBody !== null && { licenseBody: input.LicenseBody })), (input.LicenseUrl !== undefined && input.LicenseUrl !== null && { licenseUrl: input.LicenseUrl })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody })), (input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl })), (input.SemanticVersion !== undefined &&
                    input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion })), (input.SourceCodeArchiveUrl !== undefined &&
                    input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl })), (input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl })), (input.SpdxLicenseId !== undefined && input.SpdxLicenseId !== null && { spdxLicenseId: input.SpdxLicenseId })), (input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody })), (input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl })));
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
export var serializeAws_restJson1CreateApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}/versions/{SemanticVersion}";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                if (input.SemanticVersion !== undefined) {
                    labelValue = input.SemanticVersion;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SemanticVersion.");
                    }
                    resolvedPath = resolvedPath.replace("{SemanticVersion}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SemanticVersion.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.SourceCodeArchiveUrl !== undefined &&
                    input.SourceCodeArchiveUrl !== null && { sourceCodeArchiveUrl: input.SourceCodeArchiveUrl })), (input.SourceCodeUrl !== undefined && input.SourceCodeUrl !== null && { sourceCodeUrl: input.SourceCodeUrl })), (input.TemplateBody !== undefined && input.TemplateBody !== null && { templateBody: input.TemplateBody })), (input.TemplateUrl !== undefined && input.TemplateUrl !== null && { templateUrl: input.TemplateUrl })));
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
export var serializeAws_restJson1CreateCloudFormationChangeSetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}/changesets";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Capabilities !== undefined &&
                    input.Capabilities !== null && {
                    capabilities: serializeAws_restJson1__listOf__string(input.Capabilities, context),
                })), (input.ChangeSetName !== undefined && input.ChangeSetName !== null && { changeSetName: input.ChangeSetName })), (input.ClientToken !== undefined && input.ClientToken !== null && { clientToken: input.ClientToken })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.NotificationArns !== undefined &&
                    input.NotificationArns !== null && {
                    notificationArns: serializeAws_restJson1__listOf__string(input.NotificationArns, context),
                })), (input.ParameterOverrides !== undefined &&
                    input.ParameterOverrides !== null && {
                    parameterOverrides: serializeAws_restJson1__listOfParameterValue(input.ParameterOverrides, context),
                })), (input.ResourceTypes !== undefined &&
                    input.ResourceTypes !== null && {
                    resourceTypes: serializeAws_restJson1__listOf__string(input.ResourceTypes, context),
                })), (input.RollbackConfiguration !== undefined &&
                    input.RollbackConfiguration !== null && {
                    rollbackConfiguration: serializeAws_restJson1RollbackConfiguration(input.RollbackConfiguration, context),
                })), (input.SemanticVersion !== undefined &&
                    input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion })), (input.StackName !== undefined && input.StackName !== null && { stackName: input.StackName })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__listOfTag(input.Tags, context) })), (input.TemplateId !== undefined && input.TemplateId !== null && { templateId: input.TemplateId })));
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
export var serializeAws_restJson1CreateCloudFormationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}/templates";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                body = JSON.stringify(__assign({}, (input.SemanticVersion !== undefined &&
                    input.SemanticVersion !== null && { semanticVersion: input.SemanticVersion })));
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
export var serializeAws_restJson1DeleteApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
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
export var serializeAws_restJson1GetApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                query = __assign({}, (input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }));
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
export var serializeAws_restJson1GetApplicationPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}/policy";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
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
export var serializeAws_restJson1GetCloudFormationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}/templates/{TemplateId}";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                if (input.TemplateId !== undefined) {
                    labelValue = input.TemplateId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: TemplateId.");
                    }
                    resolvedPath = resolvedPath.replace("{TemplateId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: TemplateId.");
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
export var serializeAws_restJson1ListApplicationDependenciesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}/dependencies";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                query = __assign(__assign(__assign({}, (input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.SemanticVersion !== undefined && { semanticVersion: input.SemanticVersion }));
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
export var serializeAws_restJson1ListApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications";
                query = __assign(__assign({}, (input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListApplicationVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/applications/{ApplicationId}/versions";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                query = __assign(__assign({}, (input.MaxItems !== undefined && { maxItems: input.MaxItems.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1PutApplicationPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}/policy";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                body = JSON.stringify(__assign({}, (input.Statements !== undefined &&
                    input.Statements !== null && {
                    statements: serializeAws_restJson1__listOfApplicationPolicyStatement(input.Statements, context),
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
export var serializeAws_restJson1UnshareApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}/unshare";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                body = JSON.stringify(__assign({}, (input.OrganizationId !== undefined &&
                    input.OrganizationId !== null && { organizationId: input.OrganizationId })));
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
export var serializeAws_restJson1UpdateApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/applications/{ApplicationId}";
                if (input.ApplicationId !== undefined) {
                    labelValue = input.ApplicationId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ApplicationId.");
                    }
                    resolvedPath = resolvedPath.replace("{ApplicationId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ApplicationId.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Author !== undefined && input.Author !== null && { author: input.Author })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HomePageUrl !== undefined && input.HomePageUrl !== null && { homePageUrl: input.HomePageUrl })), (input.Labels !== undefined &&
                    input.Labels !== null && { labels: serializeAws_restJson1__listOf__string(input.Labels, context) })), (input.ReadmeBody !== undefined && input.ReadmeBody !== null && { readmeBody: input.ReadmeBody })), (input.ReadmeUrl !== undefined && input.ReadmeUrl !== null && { readmeUrl: input.ReadmeUrl })));
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
export var deserializeAws_restJson1CreateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    Author: undefined,
                    CreationTime: undefined,
                    Description: undefined,
                    HomePageUrl: undefined,
                    IsVerifiedAuthor: undefined,
                    Labels: undefined,
                    LicenseUrl: undefined,
                    Name: undefined,
                    ReadmeUrl: undefined,
                    SpdxLicenseId: undefined,
                    VerifiedAuthorUrl: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.author !== undefined && data.author !== null) {
                    contents.Author = data.author;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
                    contents.HomePageUrl = data.homePageUrl;
                }
                if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
                    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
                }
                if (data.labels !== undefined && data.labels !== null) {
                    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
                }
                if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
                    contents.LicenseUrl = data.licenseUrl;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
                    contents.ReadmeUrl = data.readmeUrl;
                }
                if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
                    contents.SpdxLicenseId = data.spdxLicenseId;
                }
                if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
                    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.Version = deserializeAws_restJson1Version(data.version, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateApplicationVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    CreationTime: undefined,
                    ParameterDefinitions: undefined,
                    RequiredCapabilities: undefined,
                    ResourcesSupported: undefined,
                    SemanticVersion: undefined,
                    SourceCodeArchiveUrl: undefined,
                    SourceCodeUrl: undefined,
                    TemplateUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.parameterDefinitions !== undefined && data.parameterDefinitions !== null) {
                    contents.ParameterDefinitions = deserializeAws_restJson1__listOfParameterDefinition(data.parameterDefinitions, context);
                }
                if (data.requiredCapabilities !== undefined && data.requiredCapabilities !== null) {
                    contents.RequiredCapabilities = deserializeAws_restJson1__listOfCapability(data.requiredCapabilities, context);
                }
                if (data.resourcesSupported !== undefined && data.resourcesSupported !== null) {
                    contents.ResourcesSupported = data.resourcesSupported;
                }
                if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
                    contents.SemanticVersion = data.semanticVersion;
                }
                if (data.sourceCodeArchiveUrl !== undefined && data.sourceCodeArchiveUrl !== null) {
                    contents.SourceCodeArchiveUrl = data.sourceCodeArchiveUrl;
                }
                if (data.sourceCodeUrl !== undefined && data.sourceCodeUrl !== null) {
                    contents.SourceCodeUrl = data.sourceCodeUrl;
                }
                if (data.templateUrl !== undefined && data.templateUrl !== null) {
                    contents.TemplateUrl = data.templateUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateCloudFormationChangeSetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateCloudFormationChangeSetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    ChangeSetId: undefined,
                    SemanticVersion: undefined,
                    StackId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.changeSetId !== undefined && data.changeSetId !== null) {
                    contents.ChangeSetId = data.changeSetId;
                }
                if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
                    contents.SemanticVersion = data.semanticVersion;
                }
                if (data.stackId !== undefined && data.stackId !== null) {
                    contents.StackId = data.stackId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateCloudFormationChangeSetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateCloudFormationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateCloudFormationTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    CreationTime: undefined,
                    ExpirationTime: undefined,
                    SemanticVersion: undefined,
                    Status: undefined,
                    TemplateId: undefined,
                    TemplateUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.expirationTime !== undefined && data.expirationTime !== null) {
                    contents.ExpirationTime = data.expirationTime;
                }
                if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
                    contents.SemanticVersion = data.semanticVersion;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                if (data.templateId !== undefined && data.templateId !== null) {
                    contents.TemplateId = data.templateId;
                }
                if (data.templateUrl !== undefined && data.templateUrl !== null) {
                    contents.TemplateUrl = data.templateUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateCloudFormationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteApplicationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1GetApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    Author: undefined,
                    CreationTime: undefined,
                    Description: undefined,
                    HomePageUrl: undefined,
                    IsVerifiedAuthor: undefined,
                    Labels: undefined,
                    LicenseUrl: undefined,
                    Name: undefined,
                    ReadmeUrl: undefined,
                    SpdxLicenseId: undefined,
                    VerifiedAuthorUrl: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.author !== undefined && data.author !== null) {
                    contents.Author = data.author;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
                    contents.HomePageUrl = data.homePageUrl;
                }
                if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
                    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
                }
                if (data.labels !== undefined && data.labels !== null) {
                    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
                }
                if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
                    contents.LicenseUrl = data.licenseUrl;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
                    contents.ReadmeUrl = data.readmeUrl;
                }
                if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
                    contents.SpdxLicenseId = data.spdxLicenseId;
                }
                if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
                    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.Version = deserializeAws_restJson1Version(data.version, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetApplicationPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetApplicationPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Statements: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.statements !== undefined && data.statements !== null) {
                    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetApplicationPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetCloudFormationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCloudFormationTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    CreationTime: undefined,
                    ExpirationTime: undefined,
                    SemanticVersion: undefined,
                    Status: undefined,
                    TemplateId: undefined,
                    TemplateUrl: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.expirationTime !== undefined && data.expirationTime !== null) {
                    contents.ExpirationTime = data.expirationTime;
                }
                if (data.semanticVersion !== undefined && data.semanticVersion !== null) {
                    contents.SemanticVersion = data.semanticVersion;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                if (data.templateId !== undefined && data.templateId !== null) {
                    contents.TemplateId = data.templateId;
                }
                if (data.templateUrl !== undefined && data.templateUrl !== null) {
                    contents.TemplateUrl = data.templateUrl;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCloudFormationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListApplicationDependenciesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListApplicationDependenciesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Dependencies: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.dependencies !== undefined && data.dependencies !== null) {
                    contents.Dependencies = deserializeAws_restJson1__listOfApplicationDependencySummary(data.dependencies, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListApplicationDependenciesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListApplicationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Applications: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applications !== undefined && data.applications !== null) {
                    contents.Applications = deserializeAws_restJson1__listOfApplicationSummary(data.applications, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListApplicationVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListApplicationVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Versions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.versions !== undefined && data.versions !== null) {
                    contents.Versions = deserializeAws_restJson1__listOfVersionSummary(data.versions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListApplicationVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutApplicationPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutApplicationPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Statements: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.statements !== undefined && data.statements !== null) {
                    contents.Statements = deserializeAws_restJson1__listOfApplicationPolicyStatement(data.statements, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutApplicationPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UnshareApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UnshareApplicationCommandError(output, context)];
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
var deserializeAws_restJson1UnshareApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ApplicationId: undefined,
                    Author: undefined,
                    CreationTime: undefined,
                    Description: undefined,
                    HomePageUrl: undefined,
                    IsVerifiedAuthor: undefined,
                    Labels: undefined,
                    LicenseUrl: undefined,
                    Name: undefined,
                    ReadmeUrl: undefined,
                    SpdxLicenseId: undefined,
                    VerifiedAuthorUrl: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.applicationId !== undefined && data.applicationId !== null) {
                    contents.ApplicationId = data.applicationId;
                }
                if (data.author !== undefined && data.author !== null) {
                    contents.Author = data.author;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = data.creationTime;
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.homePageUrl !== undefined && data.homePageUrl !== null) {
                    contents.HomePageUrl = data.homePageUrl;
                }
                if (data.isVerifiedAuthor !== undefined && data.isVerifiedAuthor !== null) {
                    contents.IsVerifiedAuthor = data.isVerifiedAuthor;
                }
                if (data.labels !== undefined && data.labels !== null) {
                    contents.Labels = deserializeAws_restJson1__listOf__string(data.labels, context);
                }
                if (data.licenseUrl !== undefined && data.licenseUrl !== null) {
                    contents.LicenseUrl = data.licenseUrl;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.readmeUrl !== undefined && data.readmeUrl !== null) {
                    contents.ReadmeUrl = data.readmeUrl;
                }
                if (data.spdxLicenseId !== undefined && data.spdxLicenseId !== null) {
                    contents.SpdxLicenseId = data.spdxLicenseId;
                }
                if (data.verifiedAuthorUrl !== undefined && data.verifiedAuthorUrl !== null) {
                    contents.VerifiedAuthorUrl = data.verifiedAuthorUrl;
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.Version = deserializeAws_restJson1Version(data.version, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.serverlessapplicationrepository#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.serverlessapplicationrepository#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.serverlessapplicationrepository#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.serverlessapplicationrepository#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.serverlessapplicationrepository#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.serverlessapplicationrepository#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
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
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ForbiddenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ForbiddenException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerErrorException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyRequestsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            ErrorCode: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.errorCode !== undefined && data.errorCode !== null) {
            contents.ErrorCode = data.errorCode;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
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
var serializeAws_restJson1__listOfApplicationPolicyStatement = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};
var serializeAws_restJson1__listOfParameterValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ParameterValue(entry, context);
    });
};
var serializeAws_restJson1__listOfRollbackTrigger = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RollbackTrigger(entry, context);
    });
};
var serializeAws_restJson1__listOfTag = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
var serializeAws_restJson1ApplicationPolicyStatement = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Actions !== undefined &&
        input.Actions !== null && { actions: serializeAws_restJson1__listOf__string(input.Actions, context) })), (input.PrincipalOrgIDs !== undefined &&
        input.PrincipalOrgIDs !== null && {
        principalOrgIDs: serializeAws_restJson1__listOf__string(input.PrincipalOrgIDs, context),
    })), (input.Principals !== undefined &&
        input.Principals !== null && { principals: serializeAws_restJson1__listOf__string(input.Principals, context) })), (input.StatementId !== undefined && input.StatementId !== null && { statementId: input.StatementId }));
};
var serializeAws_restJson1ParameterValue = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Value !== undefined && input.Value !== null && { value: input.Value }));
};
var serializeAws_restJson1RollbackConfiguration = function (input, context) {
    return __assign(__assign({}, (input.MonitoringTimeInMinutes !== undefined &&
        input.MonitoringTimeInMinutes !== null && { monitoringTimeInMinutes: input.MonitoringTimeInMinutes })), (input.RollbackTriggers !== undefined &&
        input.RollbackTriggers !== null && {
        rollbackTriggers: serializeAws_restJson1__listOfRollbackTrigger(input.RollbackTriggers, context),
    }));
};
var serializeAws_restJson1RollbackTrigger = function (input, context) {
    return __assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { arn: input.Arn })), (input.Type !== undefined && input.Type !== null && { type: input.Type }));
};
var serializeAws_restJson1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { key: input.Key })), (input.Value !== undefined && input.Value !== null && { value: input.Value }));
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
var deserializeAws_restJson1__listOfApplicationDependencySummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationDependencySummary(entry, context);
    });
};
var deserializeAws_restJson1__listOfApplicationPolicyStatement = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationPolicyStatement(entry, context);
    });
};
var deserializeAws_restJson1__listOfApplicationSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ApplicationSummary(entry, context);
    });
};
var deserializeAws_restJson1__listOfCapability = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOfParameterDefinition = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ParameterDefinition(entry, context);
    });
};
var deserializeAws_restJson1__listOfVersionSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VersionSummary(entry, context);
    });
};
var deserializeAws_restJson1ApplicationDependencySummary = function (output, context) {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
    };
};
var deserializeAws_restJson1ApplicationPolicyStatement = function (output, context) {
    return {
        Actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1__listOf__string(output.actions, context)
            : undefined,
        PrincipalOrgIDs: output.principalOrgIDs !== undefined && output.principalOrgIDs !== null
            ? deserializeAws_restJson1__listOf__string(output.principalOrgIDs, context)
            : undefined,
        Principals: output.principals !== undefined && output.principals !== null
            ? deserializeAws_restJson1__listOf__string(output.principals, context)
            : undefined,
        StatementId: output.statementId !== undefined && output.statementId !== null ? output.statementId : undefined,
    };
};
var deserializeAws_restJson1ApplicationSummary = function (output, context) {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        Author: output.author !== undefined && output.author !== null ? output.author : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        HomePageUrl: output.homePageUrl !== undefined && output.homePageUrl !== null ? output.homePageUrl : undefined,
        Labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_restJson1__listOf__string(output.labels, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SpdxLicenseId: output.spdxLicenseId !== undefined && output.spdxLicenseId !== null ? output.spdxLicenseId : undefined,
    };
};
var deserializeAws_restJson1ParameterDefinition = function (output, context) {
    return {
        AllowedPattern: output.allowedPattern !== undefined && output.allowedPattern !== null ? output.allowedPattern : undefined,
        AllowedValues: output.allowedValues !== undefined && output.allowedValues !== null
            ? deserializeAws_restJson1__listOf__string(output.allowedValues, context)
            : undefined,
        ConstraintDescription: output.constraintDescription !== undefined && output.constraintDescription !== null
            ? output.constraintDescription
            : undefined,
        DefaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        MaxLength: output.maxLength !== undefined && output.maxLength !== null ? output.maxLength : undefined,
        MaxValue: output.maxValue !== undefined && output.maxValue !== null ? output.maxValue : undefined,
        MinLength: output.minLength !== undefined && output.minLength !== null ? output.minLength : undefined,
        MinValue: output.minValue !== undefined && output.minValue !== null ? output.minValue : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        NoEcho: output.noEcho !== undefined && output.noEcho !== null ? output.noEcho : undefined,
        ReferencedByResources: output.referencedByResources !== undefined && output.referencedByResources !== null
            ? deserializeAws_restJson1__listOf__string(output.referencedByResources, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1Version = function (output, context) {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        ParameterDefinitions: output.parameterDefinitions !== undefined && output.parameterDefinitions !== null
            ? deserializeAws_restJson1__listOfParameterDefinition(output.parameterDefinitions, context)
            : undefined,
        RequiredCapabilities: output.requiredCapabilities !== undefined && output.requiredCapabilities !== null
            ? deserializeAws_restJson1__listOfCapability(output.requiredCapabilities, context)
            : undefined,
        ResourcesSupported: output.resourcesSupported !== undefined && output.resourcesSupported !== null
            ? output.resourcesSupported
            : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
        SourceCodeArchiveUrl: output.sourceCodeArchiveUrl !== undefined && output.sourceCodeArchiveUrl !== null
            ? output.sourceCodeArchiveUrl
            : undefined,
        SourceCodeUrl: output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null ? output.sourceCodeUrl : undefined,
        TemplateUrl: output.templateUrl !== undefined && output.templateUrl !== null ? output.templateUrl : undefined,
    };
};
var deserializeAws_restJson1VersionSummary = function (output, context) {
    return {
        ApplicationId: output.applicationId !== undefined && output.applicationId !== null ? output.applicationId : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? output.creationTime : undefined,
        SemanticVersion: output.semanticVersion !== undefined && output.semanticVersion !== null ? output.semanticVersion : undefined,
        SourceCodeUrl: output.sourceCodeUrl !== undefined && output.sourceCodeUrl !== null ? output.sourceCodeUrl : undefined,
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