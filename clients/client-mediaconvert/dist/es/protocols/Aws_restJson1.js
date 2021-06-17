import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1AssociateCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/certificates";
                body = JSON.stringify(__assign({}, (input.Arn !== undefined && input.Arn !== null && { arn: input.Arn })));
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
export var serializeAws_restJson1CancelJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobs/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1CreateJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/jobs";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccelerationSettings !== undefined &&
                    input.AccelerationSettings !== null && {
                    accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
                })), (input.BillingTagsSource !== undefined &&
                    input.BillingTagsSource !== null && { billingTagsSource: input.BillingTagsSource })), { clientRequestToken: (_c = input.ClientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.HopDestinations !== undefined &&
                    input.HopDestinations !== null && {
                    hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
                })), (input.JobTemplate !== undefined && input.JobTemplate !== null && { jobTemplate: input.JobTemplate })), (input.Priority !== undefined && input.Priority !== null && { priority: input.Priority })), (input.Queue !== undefined && input.Queue !== null && { queue: input.Queue })), (input.Role !== undefined && input.Role !== null && { role: input.Role })), (input.Settings !== undefined &&
                    input.Settings !== null && { settings: serializeAws_restJson1JobSettings(input.Settings, context) })), (input.SimulateReservedQueue !== undefined &&
                    input.SimulateReservedQueue !== null && { simulateReservedQueue: input.SimulateReservedQueue })), (input.StatusUpdateInterval !== undefined &&
                    input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })), (input.UserMetadata !== undefined &&
                    input.UserMetadata !== null && {
                    userMetadata: serializeAws_restJson1__mapOf__string(input.UserMetadata, context),
                })));
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
export var serializeAws_restJson1CreateJobTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/jobTemplates";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccelerationSettings !== undefined &&
                    input.AccelerationSettings !== null && {
                    accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
                })), (input.Category !== undefined && input.Category !== null && { category: input.Category })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HopDestinations !== undefined &&
                    input.HopDestinations !== null && {
                    hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
                })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Priority !== undefined && input.Priority !== null && { priority: input.Priority })), (input.Queue !== undefined && input.Queue !== null && { queue: input.Queue })), (input.Settings !== undefined &&
                    input.Settings !== null && { settings: serializeAws_restJson1JobTemplateSettings(input.Settings, context) })), (input.StatusUpdateInterval !== undefined &&
                    input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreatePresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/presets";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.Category !== undefined && input.Category !== null && { category: input.Category })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Settings !== undefined &&
                    input.Settings !== null && { settings: serializeAws_restJson1PresetSettings(input.Settings, context) })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreateQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/queues";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.PricingPlan !== undefined && input.PricingPlan !== null && { pricingPlan: input.PricingPlan })), (input.ReservationPlanSettings !== undefined &&
                    input.ReservationPlanSettings !== null && {
                    reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(input.ReservationPlanSettings, context),
                })), (input.Status !== undefined && input.Status !== null && { status: input.Status })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1DeleteJobTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobTemplates/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1DeletePresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/presets/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1DeleteQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/queues/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1DescribeEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/endpoints";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { maxResults: input.MaxResults })), (input.Mode !== undefined && input.Mode !== null && { mode: input.Mode })), (input.NextToken !== undefined && input.NextToken !== null && { nextToken: input.NextToken })));
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
export var serializeAws_restJson1DisassociateCertificateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/certificates/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
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
export var serializeAws_restJson1GetJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobs/{Id}";
                if (input.Id !== undefined) {
                    labelValue = input.Id;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Id.");
                    }
                    resolvedPath = resolvedPath.replace("{Id}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Id.");
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
export var serializeAws_restJson1GetJobTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobTemplates/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1GetPresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/presets/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1GetQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/queues/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1ListJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobs";
                query = __assign(__assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.Order !== undefined && { order: input.Order })), (input.Queue !== undefined && { queue: input.Queue })), (input.Status !== undefined && { status: input.Status }));
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
export var serializeAws_restJson1ListJobTemplatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/jobTemplates";
                query = __assign(__assign(__assign(__assign(__assign({}, (input.Category !== undefined && { category: input.Category })), (input.ListBy !== undefined && { listBy: input.ListBy })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.Order !== undefined && { order: input.Order }));
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
export var serializeAws_restJson1ListPresetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/presets";
                query = __assign(__assign(__assign(__assign(__assign({}, (input.Category !== undefined && { category: input.Category })), (input.ListBy !== undefined && { listBy: input.ListBy })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.Order !== undefined && { order: input.Order }));
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
export var serializeAws_restJson1ListQueuesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-08-29/queues";
                query = __assign(__assign(__assign(__assign({}, (input.ListBy !== undefined && { listBy: input.ListBy })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken })), (input.Order !== undefined && { order: input.Order }));
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
                resolvedPath = "/2017-08-29/tags/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
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
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/tags";
                body = JSON.stringify(__assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { arn: input.Arn })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/tags/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
                }
                body = JSON.stringify(__assign({}, (input.TagKeys !== undefined &&
                    input.TagKeys !== null && { tagKeys: serializeAws_restJson1__listOf__string(input.TagKeys, context) })));
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
export var serializeAws_restJson1UpdateJobTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/jobTemplates/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AccelerationSettings !== undefined &&
                    input.AccelerationSettings !== null && {
                    accelerationSettings: serializeAws_restJson1AccelerationSettings(input.AccelerationSettings, context),
                })), (input.Category !== undefined && input.Category !== null && { category: input.Category })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.HopDestinations !== undefined &&
                    input.HopDestinations !== null && {
                    hopDestinations: serializeAws_restJson1__listOfHopDestination(input.HopDestinations, context),
                })), (input.Priority !== undefined && input.Priority !== null && { priority: input.Priority })), (input.Queue !== undefined && input.Queue !== null && { queue: input.Queue })), (input.Settings !== undefined &&
                    input.Settings !== null && { settings: serializeAws_restJson1JobTemplateSettings(input.Settings, context) })), (input.StatusUpdateInterval !== undefined &&
                    input.StatusUpdateInterval !== null && { statusUpdateInterval: input.StatusUpdateInterval })));
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
export var serializeAws_restJson1UpdatePresetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/presets/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Category !== undefined && input.Category !== null && { category: input.Category })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Settings !== undefined &&
                    input.Settings !== null && { settings: serializeAws_restJson1PresetSettings(input.Settings, context) })));
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
export var serializeAws_restJson1UpdateQueueCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-08-29/queues/{Name}";
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.ReservationPlanSettings !== undefined &&
                    input.ReservationPlanSettings !== null && {
                    reservationPlanSettings: serializeAws_restJson1ReservationPlanSettings(input.ReservationPlanSettings, context),
                })), (input.Status !== undefined && input.Status !== null && { status: input.Status })));
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
export var deserializeAws_restJson1AssociateCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateCertificateCommandError(output, context)];
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
var deserializeAws_restJson1AssociateCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1CancelJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1CreateJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.job !== undefined && data.job !== null) {
                    contents.Job = deserializeAws_restJson1Job(data.job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1CreateJobTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateJobTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobTemplate: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
                    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateJobTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1CreatePresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreatePresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Preset: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.preset !== undefined && data.preset !== null) {
                    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreatePresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1CreateQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateQueueCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Queue: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.queue !== undefined && data.queue !== null) {
                    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1DeleteJobTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteJobTemplateCommandError(output, context)];
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
var deserializeAws_restJson1DeleteJobTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1DeletePresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeletePresetCommandError(output, context)];
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
var deserializeAws_restJson1DeletePresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1DeleteQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteQueueCommandError(output, context)];
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
var deserializeAws_restJson1DeleteQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1DescribeEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeEndpointsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Endpoints: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.endpoints !== undefined && data.endpoints !== null) {
                    contents.Endpoints = deserializeAws_restJson1__listOfEndpoint(data.endpoints, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1DisassociateCertificateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateCertificateCommandError(output, context)];
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
var deserializeAws_restJson1DisassociateCertificateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1GetJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.job !== undefined && data.job !== null) {
                    contents.Job = deserializeAws_restJson1Job(data.job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1GetJobTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetJobTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobTemplate: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
                    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetJobTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1GetPresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetPresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Preset: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.preset !== undefined && data.preset !== null) {
                    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetPresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1GetQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetQueueCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Queue: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.queue !== undefined && data.queue !== null) {
                    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1ListJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Jobs: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobs !== undefined && data.jobs !== null) {
                    contents.Jobs = deserializeAws_restJson1__listOfJob(data.jobs, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1ListJobTemplatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListJobTemplatesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobTemplates: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobTemplates !== undefined && data.jobTemplates !== null) {
                    contents.JobTemplates = deserializeAws_restJson1__listOfJobTemplate(data.jobTemplates, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListJobTemplatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1ListPresetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListPresetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Presets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.presets !== undefined && data.presets !== null) {
                    contents.Presets = deserializeAws_restJson1__listOfPreset(data.presets, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListPresetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1ListQueuesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListQueuesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Queues: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.queues !== undefined && data.queues !== null) {
                    contents.Queues = deserializeAws_restJson1__listOfQueue(data.queues, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListQueuesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
                    ResourceTags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.resourceTags !== undefined && data.resourceTags !== null) {
                    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.resourceTags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1UpdateJobTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateJobTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    JobTemplate: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobTemplate !== undefined && data.jobTemplate !== null) {
                    contents.JobTemplate = deserializeAws_restJson1JobTemplate(data.jobTemplate, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateJobTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1UpdatePresetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdatePresetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Preset: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.preset !== undefined && data.preset !== null) {
                    contents.Preset = deserializeAws_restJson1Preset(data.preset, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdatePresetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
export var deserializeAws_restJson1UpdateQueueCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateQueueCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Queue: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.queue !== undefined && data.queue !== null) {
                    contents.Queue = deserializeAws_restJson1Queue(data.queue, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateQueueCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconvert#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconvert#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconvert#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconvert#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconvert#NotFoundException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconvert#TooManyRequestsException": return [3 /*break*/, 12];
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
            Message: undefined,
        };
        data = parsedOutput.body;
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
            Message: undefined,
        };
        data = parsedOutput.body;
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
            Message: undefined,
        };
        data = parsedOutput.body;
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
            Message: undefined,
        };
        data = parsedOutput.body;
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
            Message: undefined,
        };
        data = parsedOutput.body;
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
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1__listOf__doubleMinNegative60Max6 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__integerMin1Max2147483647 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__integerMin32Max8182 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__integerMinNegative60Max6 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
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
var serializeAws_restJson1__listOf__stringMin1 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfAudioDescription = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AudioDescription(entry, context);
    });
};
var serializeAws_restJson1__listOfCaptionDescription = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionDescription(entry, context);
    });
};
var serializeAws_restJson1__listOfCaptionDescriptionPreset = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CaptionDescriptionPreset(entry, context);
    });
};
var serializeAws_restJson1__listOfCmafAdditionalManifest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CmafAdditionalManifest(entry, context);
    });
};
var serializeAws_restJson1__listOfDashAdditionalManifest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DashAdditionalManifest(entry, context);
    });
};
var serializeAws_restJson1__listOfHlsAdditionalManifest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HlsAdditionalManifest(entry, context);
    });
};
var serializeAws_restJson1__listOfHlsAdMarkers = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfHlsCaptionLanguageMapping = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HlsCaptionLanguageMapping(entry, context);
    });
};
var serializeAws_restJson1__listOfHopDestination = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HopDestination(entry, context);
    });
};
var serializeAws_restJson1__listOfId3Insertion = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Id3Insertion(entry, context);
    });
};
var serializeAws_restJson1__listOfInput = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Input(entry, context);
    });
};
var serializeAws_restJson1__listOfInputClipping = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputClipping(entry, context);
    });
};
var serializeAws_restJson1__listOfInputTemplate = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputTemplate(entry, context);
    });
};
var serializeAws_restJson1__listOfInsertableImage = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InsertableImage(entry, context);
    });
};
var serializeAws_restJson1__listOfMsSmoothAdditionalManifest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MsSmoothAdditionalManifest(entry, context);
    });
};
var serializeAws_restJson1__listOfOutput = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Output(entry, context);
    });
};
var serializeAws_restJson1__listOfOutputChannelMapping = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputChannelMapping(entry, context);
    });
};
var serializeAws_restJson1__listOfOutputGroup = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1OutputGroup(entry, context);
    });
};
var serializeAws_restJson1__listOfTeletextPageType = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__mapOf__string = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1__mapOfAudioSelector = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1AudioSelector(value, context), _b));
    }, {});
};
var serializeAws_restJson1__mapOfAudioSelectorGroup = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1AudioSelectorGroup(value, context), _b));
    }, {});
};
var serializeAws_restJson1__mapOfCaptionSelector = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1CaptionSelector(value, context), _b));
    }, {});
};
var serializeAws_restJson1AacSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioDescriptionBroadcasterMix !== undefined &&
        input.AudioDescriptionBroadcasterMix !== null && {
        audioDescriptionBroadcasterMix: input.AudioDescriptionBroadcasterMix,
    })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile })), (input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.RawFormat !== undefined && input.RawFormat !== null && { rawFormat: input.RawFormat })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate })), (input.Specification !== undefined && input.Specification !== null && { specification: input.Specification })), (input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }));
};
var serializeAws_restJson1Ac3Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode })), (input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode })), (input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm })), (input.DynamicRangeCompressionLine !== undefined &&
        input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine })), (input.DynamicRangeCompressionProfile !== undefined &&
        input.DynamicRangeCompressionProfile !== null && {
        dynamicRangeCompressionProfile: input.DynamicRangeCompressionProfile,
    })), (input.DynamicRangeCompressionRf !== undefined &&
        input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf })), (input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter })), (input.MetadataControl !== undefined &&
        input.MetadataControl !== null && { metadataControl: input.MetadataControl })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }));
};
var serializeAws_restJson1AccelerationSettings = function (input, context) {
    return __assign({}, (input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }));
};
var serializeAws_restJson1AiffSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.BitDepth !== undefined && input.BitDepth !== null && { bitDepth: input.BitDepth })), (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }));
};
var serializeAws_restJson1AncillarySourceSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.Convert608To708 !== undefined &&
        input.Convert608To708 !== null && { convert608To708: input.Convert608To708 })), (input.SourceAncillaryChannelNumber !== undefined &&
        input.SourceAncillaryChannelNumber !== null && {
        sourceAncillaryChannelNumber: input.SourceAncillaryChannelNumber,
    })), (input.TerminateCaptions !== undefined &&
        input.TerminateCaptions !== null && { terminateCaptions: input.TerminateCaptions }));
};
var serializeAws_restJson1AudioChannelTaggingSettings = function (input, context) {
    return __assign({}, (input.ChannelTag !== undefined && input.ChannelTag !== null && { channelTag: input.ChannelTag }));
};
var serializeAws_restJson1AudioCodecSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AacSettings !== undefined &&
        input.AacSettings !== null && { aacSettings: serializeAws_restJson1AacSettings(input.AacSettings, context) })), (input.Ac3Settings !== undefined &&
        input.Ac3Settings !== null && { ac3Settings: serializeAws_restJson1Ac3Settings(input.Ac3Settings, context) })), (input.AiffSettings !== undefined &&
        input.AiffSettings !== null && { aiffSettings: serializeAws_restJson1AiffSettings(input.AiffSettings, context) })), (input.Codec !== undefined && input.Codec !== null && { codec: input.Codec })), (input.Eac3AtmosSettings !== undefined &&
        input.Eac3AtmosSettings !== null && {
        eac3AtmosSettings: serializeAws_restJson1Eac3AtmosSettings(input.Eac3AtmosSettings, context),
    })), (input.Eac3Settings !== undefined &&
        input.Eac3Settings !== null && { eac3Settings: serializeAws_restJson1Eac3Settings(input.Eac3Settings, context) })), (input.Mp2Settings !== undefined &&
        input.Mp2Settings !== null && { mp2Settings: serializeAws_restJson1Mp2Settings(input.Mp2Settings, context) })), (input.Mp3Settings !== undefined &&
        input.Mp3Settings !== null && { mp3Settings: serializeAws_restJson1Mp3Settings(input.Mp3Settings, context) })), (input.OpusSettings !== undefined &&
        input.OpusSettings !== null && { opusSettings: serializeAws_restJson1OpusSettings(input.OpusSettings, context) })), (input.VorbisSettings !== undefined &&
        input.VorbisSettings !== null && {
        vorbisSettings: serializeAws_restJson1VorbisSettings(input.VorbisSettings, context),
    })), (input.WavSettings !== undefined &&
        input.WavSettings !== null && { wavSettings: serializeAws_restJson1WavSettings(input.WavSettings, context) }));
};
var serializeAws_restJson1AudioDescription = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioChannelTaggingSettings !== undefined &&
        input.AudioChannelTaggingSettings !== null && {
        audioChannelTaggingSettings: serializeAws_restJson1AudioChannelTaggingSettings(input.AudioChannelTaggingSettings, context),
    })), (input.AudioNormalizationSettings !== undefined &&
        input.AudioNormalizationSettings !== null && {
        audioNormalizationSettings: serializeAws_restJson1AudioNormalizationSettings(input.AudioNormalizationSettings, context),
    })), (input.AudioSourceName !== undefined &&
        input.AudioSourceName !== null && { audioSourceName: input.AudioSourceName })), (input.AudioType !== undefined && input.AudioType !== null && { audioType: input.AudioType })), (input.AudioTypeControl !== undefined &&
        input.AudioTypeControl !== null && { audioTypeControl: input.AudioTypeControl })), (input.CodecSettings !== undefined &&
        input.CodecSettings !== null && {
        codecSettings: serializeAws_restJson1AudioCodecSettings(input.CodecSettings, context),
    })), (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.LanguageCodeControl !== undefined &&
        input.LanguageCodeControl !== null && { languageCodeControl: input.LanguageCodeControl })), (input.RemixSettings !== undefined &&
        input.RemixSettings !== null && {
        remixSettings: serializeAws_restJson1RemixSettings(input.RemixSettings, context),
    })), (input.StreamName !== undefined && input.StreamName !== null && { streamName: input.StreamName }));
};
var serializeAws_restJson1AudioNormalizationSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm })), (input.AlgorithmControl !== undefined &&
        input.AlgorithmControl !== null && { algorithmControl: input.AlgorithmControl })), (input.CorrectionGateLevel !== undefined &&
        input.CorrectionGateLevel !== null && { correctionGateLevel: input.CorrectionGateLevel })), (input.LoudnessLogging !== undefined &&
        input.LoudnessLogging !== null && { loudnessLogging: input.LoudnessLogging })), (input.PeakCalculation !== undefined &&
        input.PeakCalculation !== null && { peakCalculation: input.PeakCalculation })), (input.TargetLkfs !== undefined && input.TargetLkfs !== null && { targetLkfs: input.TargetLkfs }));
};
var serializeAws_restJson1AudioSelector = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.DefaultSelection !== undefined &&
        input.DefaultSelection !== null && { defaultSelection: input.DefaultSelection })), (input.ExternalAudioFileInput !== undefined &&
        input.ExternalAudioFileInput !== null && { externalAudioFileInput: input.ExternalAudioFileInput })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.Offset !== undefined && input.Offset !== null && { offset: input.Offset })), (input.Pids !== undefined &&
        input.Pids !== null && { pids: serializeAws_restJson1__listOf__integerMin1Max2147483647(input.Pids, context) })), (input.ProgramSelection !== undefined &&
        input.ProgramSelection !== null && { programSelection: input.ProgramSelection })), (input.RemixSettings !== undefined &&
        input.RemixSettings !== null && {
        remixSettings: serializeAws_restJson1RemixSettings(input.RemixSettings, context),
    })), (input.SelectorType !== undefined && input.SelectorType !== null && { selectorType: input.SelectorType })), (input.Tracks !== undefined &&
        input.Tracks !== null && {
        tracks: serializeAws_restJson1__listOf__integerMin1Max2147483647(input.Tracks, context),
    }));
};
var serializeAws_restJson1AudioSelectorGroup = function (input, context) {
    return __assign({}, (input.AudioSelectorNames !== undefined &&
        input.AudioSelectorNames !== null && {
        audioSelectorNames: serializeAws_restJson1__listOf__stringMin1(input.AudioSelectorNames, context),
    }));
};
var serializeAws_restJson1AutomatedAbrSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxAbrBitrate !== undefined && input.MaxAbrBitrate !== null && { maxAbrBitrate: input.MaxAbrBitrate })), (input.MaxRenditions !== undefined && input.MaxRenditions !== null && { maxRenditions: input.MaxRenditions })), (input.MinAbrBitrate !== undefined && input.MinAbrBitrate !== null && { minAbrBitrate: input.MinAbrBitrate }));
};
var serializeAws_restJson1AutomatedEncodingSettings = function (input, context) {
    return __assign({}, (input.AbrSettings !== undefined &&
        input.AbrSettings !== null && {
        abrSettings: serializeAws_restJson1AutomatedAbrSettings(input.AbrSettings, context),
    }));
};
var serializeAws_restJson1Av1QvbrSettings = function (input, context) {
    return __assign(__assign({}, (input.QvbrQualityLevel !== undefined &&
        input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel })), (input.QvbrQualityLevelFineTune !== undefined &&
        input.QvbrQualityLevelFineTune !== null && { qvbrQualityLevelFineTune: input.QvbrQualityLevelFineTune }));
};
var serializeAws_restJson1Av1Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdaptiveQuantization !== undefined &&
        input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.NumberBFramesBetweenReferenceFrames !== undefined &&
        input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
    })), (input.QvbrSettings !== undefined &&
        input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1Av1QvbrSettings(input.QvbrSettings, context),
    })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.Slices !== undefined && input.Slices !== null && { slices: input.Slices })), (input.SpatialAdaptiveQuantization !== undefined &&
        input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization }));
};
var serializeAws_restJson1AvailBlanking = function (input, context) {
    return __assign({}, (input.AvailBlankingImage !== undefined &&
        input.AvailBlankingImage !== null && { availBlankingImage: input.AvailBlankingImage }));
};
var serializeAws_restJson1AvcIntraSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvcIntraClass !== undefined && input.AvcIntraClass !== null && { avcIntraClass: input.AvcIntraClass })), (input.AvcIntraUhdSettings !== undefined &&
        input.AvcIntraUhdSettings !== null && {
        avcIntraUhdSettings: serializeAws_restJson1AvcIntraUhdSettings(input.AvcIntraUhdSettings, context),
    })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }));
};
var serializeAws_restJson1AvcIntraUhdSettings = function (input, context) {
    return __assign({}, (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel }));
};
var serializeAws_restJson1BurninDestinationSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment })), (input.BackgroundColor !== undefined &&
        input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor })), (input.BackgroundOpacity !== undefined &&
        input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity })), (input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor })), (input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity })), (input.FontResolution !== undefined &&
        input.FontResolution !== null && { fontResolution: input.FontResolution })), (input.FontScript !== undefined && input.FontScript !== null && { fontScript: input.FontScript })), (input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize })), (input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor })), (input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize })), (input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor })), (input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity })), (input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset })), (input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset })), (input.TeletextSpacing !== undefined &&
        input.TeletextSpacing !== null && { teletextSpacing: input.TeletextSpacing })), (input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition })), (input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }));
};
var serializeAws_restJson1CaptionDescription = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CaptionSelectorName !== undefined &&
        input.CaptionSelectorName !== null && { captionSelectorName: input.CaptionSelectorName })), (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1CaptionDestinationSettings(input.DestinationSettings, context),
    })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.LanguageDescription !== undefined &&
        input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }));
};
var serializeAws_restJson1CaptionDescriptionPreset = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1CaptionDestinationSettings(input.DestinationSettings, context),
    })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.LanguageDescription !== undefined &&
        input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }));
};
var serializeAws_restJson1CaptionDestinationSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BurninDestinationSettings !== undefined &&
        input.BurninDestinationSettings !== null && {
        burninDestinationSettings: serializeAws_restJson1BurninDestinationSettings(input.BurninDestinationSettings, context),
    })), (input.DestinationType !== undefined &&
        input.DestinationType !== null && { destinationType: input.DestinationType })), (input.DvbSubDestinationSettings !== undefined &&
        input.DvbSubDestinationSettings !== null && {
        dvbSubDestinationSettings: serializeAws_restJson1DvbSubDestinationSettings(input.DvbSubDestinationSettings, context),
    })), (input.EmbeddedDestinationSettings !== undefined &&
        input.EmbeddedDestinationSettings !== null && {
        embeddedDestinationSettings: serializeAws_restJson1EmbeddedDestinationSettings(input.EmbeddedDestinationSettings, context),
    })), (input.ImscDestinationSettings !== undefined &&
        input.ImscDestinationSettings !== null && {
        imscDestinationSettings: serializeAws_restJson1ImscDestinationSettings(input.ImscDestinationSettings, context),
    })), (input.SccDestinationSettings !== undefined &&
        input.SccDestinationSettings !== null && {
        sccDestinationSettings: serializeAws_restJson1SccDestinationSettings(input.SccDestinationSettings, context),
    })), (input.TeletextDestinationSettings !== undefined &&
        input.TeletextDestinationSettings !== null && {
        teletextDestinationSettings: serializeAws_restJson1TeletextDestinationSettings(input.TeletextDestinationSettings, context),
    })), (input.TtmlDestinationSettings !== undefined &&
        input.TtmlDestinationSettings !== null && {
        ttmlDestinationSettings: serializeAws_restJson1TtmlDestinationSettings(input.TtmlDestinationSettings, context),
    })), (input.WebvttDestinationSettings !== undefined &&
        input.WebvttDestinationSettings !== null && {
        webvttDestinationSettings: serializeAws_restJson1WebvttDestinationSettings(input.WebvttDestinationSettings, context),
    }));
};
var serializeAws_restJson1CaptionSelector = function (input, context) {
    return __assign(__assign(__assign({}, (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.SourceSettings !== undefined &&
        input.SourceSettings !== null && {
        sourceSettings: serializeAws_restJson1CaptionSourceSettings(input.SourceSettings, context),
    }));
};
var serializeAws_restJson1CaptionSourceFramerate = function (input, context) {
    return __assign(__assign({}, (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }));
};
var serializeAws_restJson1CaptionSourceSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AncillarySourceSettings !== undefined &&
        input.AncillarySourceSettings !== null && {
        ancillarySourceSettings: serializeAws_restJson1AncillarySourceSettings(input.AncillarySourceSettings, context),
    })), (input.DvbSubSourceSettings !== undefined &&
        input.DvbSubSourceSettings !== null && {
        dvbSubSourceSettings: serializeAws_restJson1DvbSubSourceSettings(input.DvbSubSourceSettings, context),
    })), (input.EmbeddedSourceSettings !== undefined &&
        input.EmbeddedSourceSettings !== null && {
        embeddedSourceSettings: serializeAws_restJson1EmbeddedSourceSettings(input.EmbeddedSourceSettings, context),
    })), (input.FileSourceSettings !== undefined &&
        input.FileSourceSettings !== null && {
        fileSourceSettings: serializeAws_restJson1FileSourceSettings(input.FileSourceSettings, context),
    })), (input.SourceType !== undefined && input.SourceType !== null && { sourceType: input.SourceType })), (input.TeletextSourceSettings !== undefined &&
        input.TeletextSourceSettings !== null && {
        teletextSourceSettings: serializeAws_restJson1TeletextSourceSettings(input.TeletextSourceSettings, context),
    })), (input.TrackSourceSettings !== undefined &&
        input.TrackSourceSettings !== null && {
        trackSourceSettings: serializeAws_restJson1TrackSourceSettings(input.TrackSourceSettings, context),
    }));
};
var serializeAws_restJson1ChannelMapping = function (input, context) {
    return __assign({}, (input.OutputChannels !== undefined &&
        input.OutputChannels !== null && {
        outputChannels: serializeAws_restJson1__listOfOutputChannelMapping(input.OutputChannels, context),
    }));
};
var serializeAws_restJson1CmafAdditionalManifest = function (input, context) {
    return __assign(__assign({}, (input.ManifestNameModifier !== undefined &&
        input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier })), (input.SelectedOutputs !== undefined &&
        input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
    }));
};
var serializeAws_restJson1CmafEncryptionSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.EncryptionMethod !== undefined &&
        input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod })), (input.InitializationVectorInManifest !== undefined &&
        input.InitializationVectorInManifest !== null && {
        initializationVectorInManifest: input.InitializationVectorInManifest,
    })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProviderCmaf(input.SpekeKeyProvider, context),
    })), (input.StaticKeyProvider !== undefined &&
        input.StaticKeyProvider !== null && {
        staticKeyProvider: serializeAws_restJson1StaticKeyProvider(input.StaticKeyProvider, context),
    })), (input.Type !== undefined && input.Type !== null && { type: input.Type }));
};
var serializeAws_restJson1CmafGroupSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalManifests !== undefined &&
        input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfCmafAdditionalManifest(input.AdditionalManifests, context),
    })), (input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl })), (input.ClientCache !== undefined && input.ClientCache !== null && { clientCache: input.ClientCache })), (input.CodecSpecification !== undefined &&
        input.CodecSpecification !== null && { codecSpecification: input.CodecSpecification })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
    })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        encryption: serializeAws_restJson1CmafEncryptionSettings(input.Encryption, context),
    })), (input.FragmentLength !== undefined &&
        input.FragmentLength !== null && { fragmentLength: input.FragmentLength })), (input.ManifestCompression !== undefined &&
        input.ManifestCompression !== null && { manifestCompression: input.ManifestCompression })), (input.ManifestDurationFormat !== undefined &&
        input.ManifestDurationFormat !== null && { manifestDurationFormat: input.ManifestDurationFormat })), (input.MinBufferTime !== undefined && input.MinBufferTime !== null && { minBufferTime: input.MinBufferTime })), (input.MinFinalSegmentLength !== undefined &&
        input.MinFinalSegmentLength !== null && { minFinalSegmentLength: input.MinFinalSegmentLength })), (input.MpdProfile !== undefined && input.MpdProfile !== null && { mpdProfile: input.MpdProfile })), (input.PtsOffsetHandlingForBFrames !== undefined &&
        input.PtsOffsetHandlingForBFrames !== null && { ptsOffsetHandlingForBFrames: input.PtsOffsetHandlingForBFrames })), (input.SegmentControl !== undefined &&
        input.SegmentControl !== null && { segmentControl: input.SegmentControl })), (input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength })), (input.StreamInfResolution !== undefined &&
        input.StreamInfResolution !== null && { streamInfResolution: input.StreamInfResolution })), (input.WriteDashManifest !== undefined &&
        input.WriteDashManifest !== null && { writeDashManifest: input.WriteDashManifest })), (input.WriteHlsManifest !== undefined &&
        input.WriteHlsManifest !== null && { writeHlsManifest: input.WriteHlsManifest })), (input.WriteSegmentTimelineInRepresentation !== undefined &&
        input.WriteSegmentTimelineInRepresentation !== null && {
        writeSegmentTimelineInRepresentation: input.WriteSegmentTimelineInRepresentation,
    }));
};
var serializeAws_restJson1CmfcSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration })), (input.AudioGroupId !== undefined && input.AudioGroupId !== null && { audioGroupId: input.AudioGroupId })), (input.AudioRenditionSets !== undefined &&
        input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets })), (input.AudioTrackType !== undefined &&
        input.AudioTrackType !== null && { audioTrackType: input.AudioTrackType })), (input.DescriptiveVideoServiceFlag !== undefined &&
        input.DescriptiveVideoServiceFlag !== null && { descriptiveVideoServiceFlag: input.DescriptiveVideoServiceFlag })), (input.IFrameOnlyManifest !== undefined &&
        input.IFrameOnlyManifest !== null && { iFrameOnlyManifest: input.IFrameOnlyManifest })), (input.Scte35Esam !== undefined && input.Scte35Esam !== null && { scte35Esam: input.Scte35Esam })), (input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }));
};
var serializeAws_restJson1ColorCorrector = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Brightness !== undefined && input.Brightness !== null && { brightness: input.Brightness })), (input.ColorSpaceConversion !== undefined &&
        input.ColorSpaceConversion !== null && { colorSpaceConversion: input.ColorSpaceConversion })), (input.Contrast !== undefined && input.Contrast !== null && { contrast: input.Contrast })), (input.Hdr10Metadata !== undefined &&
        input.Hdr10Metadata !== null && {
        hdr10Metadata: serializeAws_restJson1Hdr10Metadata(input.Hdr10Metadata, context),
    })), (input.Hue !== undefined && input.Hue !== null && { hue: input.Hue })), (input.Saturation !== undefined && input.Saturation !== null && { saturation: input.Saturation }));
};
var serializeAws_restJson1ContainerSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CmfcSettings !== undefined &&
        input.CmfcSettings !== null && { cmfcSettings: serializeAws_restJson1CmfcSettings(input.CmfcSettings, context) })), (input.Container !== undefined && input.Container !== null && { container: input.Container })), (input.F4vSettings !== undefined &&
        input.F4vSettings !== null && { f4vSettings: serializeAws_restJson1F4vSettings(input.F4vSettings, context) })), (input.M2tsSettings !== undefined &&
        input.M2tsSettings !== null && { m2tsSettings: serializeAws_restJson1M2tsSettings(input.M2tsSettings, context) })), (input.M3u8Settings !== undefined &&
        input.M3u8Settings !== null && { m3u8Settings: serializeAws_restJson1M3u8Settings(input.M3u8Settings, context) })), (input.MovSettings !== undefined &&
        input.MovSettings !== null && { movSettings: serializeAws_restJson1MovSettings(input.MovSettings, context) })), (input.Mp4Settings !== undefined &&
        input.Mp4Settings !== null && { mp4Settings: serializeAws_restJson1Mp4Settings(input.Mp4Settings, context) })), (input.MpdSettings !== undefined &&
        input.MpdSettings !== null && { mpdSettings: serializeAws_restJson1MpdSettings(input.MpdSettings, context) })), (input.MxfSettings !== undefined &&
        input.MxfSettings !== null && { mxfSettings: serializeAws_restJson1MxfSettings(input.MxfSettings, context) }));
};
var serializeAws_restJson1DashAdditionalManifest = function (input, context) {
    return __assign(__assign({}, (input.ManifestNameModifier !== undefined &&
        input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier })), (input.SelectedOutputs !== undefined &&
        input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
    }));
};
var serializeAws_restJson1DashIsoEncryptionSettings = function (input, context) {
    return __assign(__assign({}, (input.PlaybackDeviceCompatibility !== undefined &&
        input.PlaybackDeviceCompatibility !== null && { playbackDeviceCompatibility: input.PlaybackDeviceCompatibility })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1DashIsoGroupSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalManifests !== undefined &&
        input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfDashAdditionalManifest(input.AdditionalManifests, context),
    })), (input.AudioChannelConfigSchemeIdUri !== undefined &&
        input.AudioChannelConfigSchemeIdUri !== null && {
        audioChannelConfigSchemeIdUri: input.AudioChannelConfigSchemeIdUri,
    })), (input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
    })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        encryption: serializeAws_restJson1DashIsoEncryptionSettings(input.Encryption, context),
    })), (input.FragmentLength !== undefined &&
        input.FragmentLength !== null && { fragmentLength: input.FragmentLength })), (input.HbbtvCompliance !== undefined &&
        input.HbbtvCompliance !== null && { hbbtvCompliance: input.HbbtvCompliance })), (input.MinBufferTime !== undefined && input.MinBufferTime !== null && { minBufferTime: input.MinBufferTime })), (input.MinFinalSegmentLength !== undefined &&
        input.MinFinalSegmentLength !== null && { minFinalSegmentLength: input.MinFinalSegmentLength })), (input.MpdProfile !== undefined && input.MpdProfile !== null && { mpdProfile: input.MpdProfile })), (input.PtsOffsetHandlingForBFrames !== undefined &&
        input.PtsOffsetHandlingForBFrames !== null && { ptsOffsetHandlingForBFrames: input.PtsOffsetHandlingForBFrames })), (input.SegmentControl !== undefined &&
        input.SegmentControl !== null && { segmentControl: input.SegmentControl })), (input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength })), (input.WriteSegmentTimelineInRepresentation !== undefined &&
        input.WriteSegmentTimelineInRepresentation !== null && {
        writeSegmentTimelineInRepresentation: input.WriteSegmentTimelineInRepresentation,
    }));
};
var serializeAws_restJson1Deinterlacer = function (input, context) {
    return __assign(__assign(__assign({}, (input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm })), (input.Control !== undefined && input.Control !== null && { control: input.Control })), (input.Mode !== undefined && input.Mode !== null && { mode: input.Mode }));
};
var serializeAws_restJson1DestinationSettings = function (input, context) {
    return __assign({}, (input.S3Settings !== undefined &&
        input.S3Settings !== null && {
        s3Settings: serializeAws_restJson1S3DestinationSettings(input.S3Settings, context),
    }));
};
var serializeAws_restJson1DolbyVision = function (input, context) {
    return __assign(__assign(__assign({}, (input.L6Metadata !== undefined &&
        input.L6Metadata !== null && {
        l6Metadata: serializeAws_restJson1DolbyVisionLevel6Metadata(input.L6Metadata, context),
    })), (input.L6Mode !== undefined && input.L6Mode !== null && { l6Mode: input.L6Mode })), (input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }));
};
var serializeAws_restJson1DolbyVisionLevel6Metadata = function (input, context) {
    return __assign(__assign({}, (input.MaxCll !== undefined && input.MaxCll !== null && { maxCll: input.MaxCll })), (input.MaxFall !== undefined && input.MaxFall !== null && { maxFall: input.MaxFall }));
};
var serializeAws_restJson1DvbNitSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.NetworkId !== undefined && input.NetworkId !== null && { networkId: input.NetworkId })), (input.NetworkName !== undefined && input.NetworkName !== null && { networkName: input.NetworkName })), (input.NitInterval !== undefined && input.NitInterval !== null && { nitInterval: input.NitInterval }));
};
var serializeAws_restJson1DvbSdtSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.OutputSdt !== undefined && input.OutputSdt !== null && { outputSdt: input.OutputSdt })), (input.SdtInterval !== undefined && input.SdtInterval !== null && { sdtInterval: input.SdtInterval })), (input.ServiceName !== undefined && input.ServiceName !== null && { serviceName: input.ServiceName })), (input.ServiceProviderName !== undefined &&
        input.ServiceProviderName !== null && { serviceProviderName: input.ServiceProviderName }));
};
var serializeAws_restJson1DvbSubDestinationSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Alignment !== undefined && input.Alignment !== null && { alignment: input.Alignment })), (input.BackgroundColor !== undefined &&
        input.BackgroundColor !== null && { backgroundColor: input.BackgroundColor })), (input.BackgroundOpacity !== undefined &&
        input.BackgroundOpacity !== null && { backgroundOpacity: input.BackgroundOpacity })), (input.DdsHandling !== undefined && input.DdsHandling !== null && { ddsHandling: input.DdsHandling })), (input.DdsXCoordinate !== undefined &&
        input.DdsXCoordinate !== null && { ddsXCoordinate: input.DdsXCoordinate })), (input.DdsYCoordinate !== undefined &&
        input.DdsYCoordinate !== null && { ddsYCoordinate: input.DdsYCoordinate })), (input.FontColor !== undefined && input.FontColor !== null && { fontColor: input.FontColor })), (input.FontOpacity !== undefined && input.FontOpacity !== null && { fontOpacity: input.FontOpacity })), (input.FontResolution !== undefined &&
        input.FontResolution !== null && { fontResolution: input.FontResolution })), (input.FontScript !== undefined && input.FontScript !== null && { fontScript: input.FontScript })), (input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize })), (input.Height !== undefined && input.Height !== null && { height: input.Height })), (input.OutlineColor !== undefined && input.OutlineColor !== null && { outlineColor: input.OutlineColor })), (input.OutlineSize !== undefined && input.OutlineSize !== null && { outlineSize: input.OutlineSize })), (input.ShadowColor !== undefined && input.ShadowColor !== null && { shadowColor: input.ShadowColor })), (input.ShadowOpacity !== undefined && input.ShadowOpacity !== null && { shadowOpacity: input.ShadowOpacity })), (input.ShadowXOffset !== undefined && input.ShadowXOffset !== null && { shadowXOffset: input.ShadowXOffset })), (input.ShadowYOffset !== undefined && input.ShadowYOffset !== null && { shadowYOffset: input.ShadowYOffset })), (input.SubtitlingType !== undefined &&
        input.SubtitlingType !== null && { subtitlingType: input.SubtitlingType })), (input.TeletextSpacing !== undefined &&
        input.TeletextSpacing !== null && { teletextSpacing: input.TeletextSpacing })), (input.Width !== undefined && input.Width !== null && { width: input.Width })), (input.XPosition !== undefined && input.XPosition !== null && { xPosition: input.XPosition })), (input.YPosition !== undefined && input.YPosition !== null && { yPosition: input.YPosition }));
};
var serializeAws_restJson1DvbSubSourceSettings = function (input, context) {
    return __assign({}, (input.Pid !== undefined && input.Pid !== null && { pid: input.Pid }));
};
var serializeAws_restJson1DvbTdtSettings = function (input, context) {
    return __assign({}, (input.TdtInterval !== undefined && input.TdtInterval !== null && { tdtInterval: input.TdtInterval }));
};
var serializeAws_restJson1Eac3AtmosSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode })), (input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode })), (input.DialogueIntelligence !== undefined &&
        input.DialogueIntelligence !== null && { dialogueIntelligence: input.DialogueIntelligence })), (input.DynamicRangeCompressionLine !== undefined &&
        input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine })), (input.DynamicRangeCompressionRf !== undefined &&
        input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf })), (input.LoRoCenterMixLevel !== undefined &&
        input.LoRoCenterMixLevel !== null && { loRoCenterMixLevel: input.LoRoCenterMixLevel })), (input.LoRoSurroundMixLevel !== undefined &&
        input.LoRoSurroundMixLevel !== null && { loRoSurroundMixLevel: input.LoRoSurroundMixLevel })), (input.LtRtCenterMixLevel !== undefined &&
        input.LtRtCenterMixLevel !== null && { ltRtCenterMixLevel: input.LtRtCenterMixLevel })), (input.LtRtSurroundMixLevel !== undefined &&
        input.LtRtSurroundMixLevel !== null && { ltRtSurroundMixLevel: input.LtRtSurroundMixLevel })), (input.MeteringMode !== undefined && input.MeteringMode !== null && { meteringMode: input.MeteringMode })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate })), (input.SpeechThreshold !== undefined &&
        input.SpeechThreshold !== null && { speechThreshold: input.SpeechThreshold })), (input.StereoDownmix !== undefined && input.StereoDownmix !== null && { stereoDownmix: input.StereoDownmix })), (input.SurroundExMode !== undefined &&
        input.SurroundExMode !== null && { surroundExMode: input.SurroundExMode }));
};
var serializeAws_restJson1Eac3Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttenuationControl !== undefined &&
        input.AttenuationControl !== null && { attenuationControl: input.AttenuationControl })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.BitstreamMode !== undefined && input.BitstreamMode !== null && { bitstreamMode: input.BitstreamMode })), (input.CodingMode !== undefined && input.CodingMode !== null && { codingMode: input.CodingMode })), (input.DcFilter !== undefined && input.DcFilter !== null && { dcFilter: input.DcFilter })), (input.Dialnorm !== undefined && input.Dialnorm !== null && { dialnorm: input.Dialnorm })), (input.DynamicRangeCompressionLine !== undefined &&
        input.DynamicRangeCompressionLine !== null && { dynamicRangeCompressionLine: input.DynamicRangeCompressionLine })), (input.DynamicRangeCompressionRf !== undefined &&
        input.DynamicRangeCompressionRf !== null && { dynamicRangeCompressionRf: input.DynamicRangeCompressionRf })), (input.LfeControl !== undefined && input.LfeControl !== null && { lfeControl: input.LfeControl })), (input.LfeFilter !== undefined && input.LfeFilter !== null && { lfeFilter: input.LfeFilter })), (input.LoRoCenterMixLevel !== undefined &&
        input.LoRoCenterMixLevel !== null && { loRoCenterMixLevel: input.LoRoCenterMixLevel })), (input.LoRoSurroundMixLevel !== undefined &&
        input.LoRoSurroundMixLevel !== null && { loRoSurroundMixLevel: input.LoRoSurroundMixLevel })), (input.LtRtCenterMixLevel !== undefined &&
        input.LtRtCenterMixLevel !== null && { ltRtCenterMixLevel: input.LtRtCenterMixLevel })), (input.LtRtSurroundMixLevel !== undefined &&
        input.LtRtSurroundMixLevel !== null && { ltRtSurroundMixLevel: input.LtRtSurroundMixLevel })), (input.MetadataControl !== undefined &&
        input.MetadataControl !== null && { metadataControl: input.MetadataControl })), (input.PassthroughControl !== undefined &&
        input.PassthroughControl !== null && { passthroughControl: input.PassthroughControl })), (input.PhaseControl !== undefined && input.PhaseControl !== null && { phaseControl: input.PhaseControl })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate })), (input.StereoDownmix !== undefined && input.StereoDownmix !== null && { stereoDownmix: input.StereoDownmix })), (input.SurroundExMode !== undefined &&
        input.SurroundExMode !== null && { surroundExMode: input.SurroundExMode })), (input.SurroundMode !== undefined && input.SurroundMode !== null && { surroundMode: input.SurroundMode }));
};
var serializeAws_restJson1EmbeddedDestinationSettings = function (input, context) {
    return __assign(__assign({}, (input.Destination608ChannelNumber !== undefined &&
        input.Destination608ChannelNumber !== null && { destination608ChannelNumber: input.Destination608ChannelNumber })), (input.Destination708ServiceNumber !== undefined &&
        input.Destination708ServiceNumber !== null && { destination708ServiceNumber: input.Destination708ServiceNumber }));
};
var serializeAws_restJson1EmbeddedSourceSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Convert608To708 !== undefined &&
        input.Convert608To708 !== null && { convert608To708: input.Convert608To708 })), (input.Source608ChannelNumber !== undefined &&
        input.Source608ChannelNumber !== null && { source608ChannelNumber: input.Source608ChannelNumber })), (input.Source608TrackNumber !== undefined &&
        input.Source608TrackNumber !== null && { source608TrackNumber: input.Source608TrackNumber })), (input.TerminateCaptions !== undefined &&
        input.TerminateCaptions !== null && { terminateCaptions: input.TerminateCaptions }));
};
var serializeAws_restJson1EsamManifestConfirmConditionNotification = function (input, context) {
    return __assign({}, (input.MccXml !== undefined && input.MccXml !== null && { mccXml: input.MccXml }));
};
var serializeAws_restJson1EsamSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.ManifestConfirmConditionNotification !== undefined &&
        input.ManifestConfirmConditionNotification !== null && {
        manifestConfirmConditionNotification: serializeAws_restJson1EsamManifestConfirmConditionNotification(input.ManifestConfirmConditionNotification, context),
    })), (input.ResponseSignalPreroll !== undefined &&
        input.ResponseSignalPreroll !== null && { responseSignalPreroll: input.ResponseSignalPreroll })), (input.SignalProcessingNotification !== undefined &&
        input.SignalProcessingNotification !== null && {
        signalProcessingNotification: serializeAws_restJson1EsamSignalProcessingNotification(input.SignalProcessingNotification, context),
    }));
};
var serializeAws_restJson1EsamSignalProcessingNotification = function (input, context) {
    return __assign({}, (input.SccXml !== undefined && input.SccXml !== null && { sccXml: input.SccXml }));
};
var serializeAws_restJson1F4vSettings = function (input, context) {
    return __assign({}, (input.MoovPlacement !== undefined && input.MoovPlacement !== null && { moovPlacement: input.MoovPlacement }));
};
var serializeAws_restJson1FileGroupSettings = function (input, context) {
    return __assign(__assign({}, (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
    }));
};
var serializeAws_restJson1FileSourceSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Convert608To708 !== undefined &&
        input.Convert608To708 !== null && { convert608To708: input.Convert608To708 })), (input.Framerate !== undefined &&
        input.Framerate !== null && {
        framerate: serializeAws_restJson1CaptionSourceFramerate(input.Framerate, context),
    })), (input.SourceFile !== undefined && input.SourceFile !== null && { sourceFile: input.SourceFile })), (input.TimeDelta !== undefined && input.TimeDelta !== null && { timeDelta: input.TimeDelta }));
};
var serializeAws_restJson1FrameCaptureSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.MaxCaptures !== undefined && input.MaxCaptures !== null && { maxCaptures: input.MaxCaptures })), (input.Quality !== undefined && input.Quality !== null && { quality: input.Quality }));
};
var serializeAws_restJson1H264QvbrSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxAverageBitrate !== undefined &&
        input.MaxAverageBitrate !== null && { maxAverageBitrate: input.MaxAverageBitrate })), (input.QvbrQualityLevel !== undefined &&
        input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel })), (input.QvbrQualityLevelFineTune !== undefined &&
        input.QvbrQualityLevelFineTune !== null && { qvbrQualityLevelFineTune: input.QvbrQualityLevelFineTune }));
};
var serializeAws_restJson1H264Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdaptiveQuantization !== undefined &&
        input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel })), (input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile })), (input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop })), (input.EntropyEncoding !== undefined &&
        input.EntropyEncoding !== null && { entropyEncoding: input.EntropyEncoding })), (input.FieldEncoding !== undefined && input.FieldEncoding !== null && { fieldEncoding: input.FieldEncoding })), (input.FlickerAdaptiveQuantization !== undefined &&
        input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference })), (input.GopClosedCadence !== undefined &&
        input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits })), (input.HrdBufferInitialFillPercentage !== undefined &&
        input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
    })), (input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval })), (input.NumberBFramesBetweenReferenceFrames !== undefined &&
        input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
    })), (input.NumberReferenceFrames !== undefined &&
        input.NumberReferenceFrames !== null && { numberReferenceFrames: input.NumberReferenceFrames })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel })), (input.QvbrSettings !== undefined &&
        input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1H264QvbrSettings(input.QvbrSettings, context),
    })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.RepeatPps !== undefined && input.RepeatPps !== null && { repeatPps: input.RepeatPps })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SceneChangeDetect !== undefined &&
        input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect })), (input.Slices !== undefined && input.Slices !== null && { slices: input.Slices })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.Softness !== undefined && input.Softness !== null && { softness: input.Softness })), (input.SpatialAdaptiveQuantization !== undefined &&
        input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization })), (input.Syntax !== undefined && input.Syntax !== null && { syntax: input.Syntax })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine })), (input.TemporalAdaptiveQuantization !== undefined &&
        input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
    })), (input.UnregisteredSeiTimecode !== undefined &&
        input.UnregisteredSeiTimecode !== null && { unregisteredSeiTimecode: input.UnregisteredSeiTimecode }));
};
var serializeAws_restJson1H265QvbrSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxAverageBitrate !== undefined &&
        input.MaxAverageBitrate !== null && { maxAverageBitrate: input.MaxAverageBitrate })), (input.QvbrQualityLevel !== undefined &&
        input.QvbrQualityLevel !== null && { qvbrQualityLevel: input.QvbrQualityLevel })), (input.QvbrQualityLevelFineTune !== undefined &&
        input.QvbrQualityLevelFineTune !== null && { qvbrQualityLevelFineTune: input.QvbrQualityLevelFineTune }));
};
var serializeAws_restJson1H265Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdaptiveQuantization !== undefined &&
        input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization })), (input.AlternateTransferFunctionSei !== undefined &&
        input.AlternateTransferFunctionSei !== null && {
        alternateTransferFunctionSei: input.AlternateTransferFunctionSei,
    })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel })), (input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile })), (input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop })), (input.FlickerAdaptiveQuantization !== undefined &&
        input.FlickerAdaptiveQuantization !== null && { flickerAdaptiveQuantization: input.FlickerAdaptiveQuantization })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopBReference !== undefined && input.GopBReference !== null && { gopBReference: input.GopBReference })), (input.GopClosedCadence !== undefined &&
        input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits })), (input.HrdBufferInitialFillPercentage !== undefined &&
        input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
    })), (input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval })), (input.NumberBFramesBetweenReferenceFrames !== undefined &&
        input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
    })), (input.NumberReferenceFrames !== undefined &&
        input.NumberReferenceFrames !== null && { numberReferenceFrames: input.NumberReferenceFrames })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel })), (input.QvbrSettings !== undefined &&
        input.QvbrSettings !== null && {
        qvbrSettings: serializeAws_restJson1H265QvbrSettings(input.QvbrSettings, context),
    })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.SampleAdaptiveOffsetFilterMode !== undefined &&
        input.SampleAdaptiveOffsetFilterMode !== null && {
        sampleAdaptiveOffsetFilterMode: input.SampleAdaptiveOffsetFilterMode,
    })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SceneChangeDetect !== undefined &&
        input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect })), (input.Slices !== undefined && input.Slices !== null && { slices: input.Slices })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.SpatialAdaptiveQuantization !== undefined &&
        input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine })), (input.TemporalAdaptiveQuantization !== undefined &&
        input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
    })), (input.TemporalIds !== undefined && input.TemporalIds !== null && { temporalIds: input.TemporalIds })), (input.Tiles !== undefined && input.Tiles !== null && { tiles: input.Tiles })), (input.UnregisteredSeiTimecode !== undefined &&
        input.UnregisteredSeiTimecode !== null && { unregisteredSeiTimecode: input.UnregisteredSeiTimecode })), (input.WriteMp4PackagingType !== undefined &&
        input.WriteMp4PackagingType !== null && { writeMp4PackagingType: input.WriteMp4PackagingType }));
};
var serializeAws_restJson1Hdr10Metadata = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BluePrimaryX !== undefined && input.BluePrimaryX !== null && { bluePrimaryX: input.BluePrimaryX })), (input.BluePrimaryY !== undefined && input.BluePrimaryY !== null && { bluePrimaryY: input.BluePrimaryY })), (input.GreenPrimaryX !== undefined && input.GreenPrimaryX !== null && { greenPrimaryX: input.GreenPrimaryX })), (input.GreenPrimaryY !== undefined && input.GreenPrimaryY !== null && { greenPrimaryY: input.GreenPrimaryY })), (input.MaxContentLightLevel !== undefined &&
        input.MaxContentLightLevel !== null && { maxContentLightLevel: input.MaxContentLightLevel })), (input.MaxFrameAverageLightLevel !== undefined &&
        input.MaxFrameAverageLightLevel !== null && { maxFrameAverageLightLevel: input.MaxFrameAverageLightLevel })), (input.MaxLuminance !== undefined && input.MaxLuminance !== null && { maxLuminance: input.MaxLuminance })), (input.MinLuminance !== undefined && input.MinLuminance !== null && { minLuminance: input.MinLuminance })), (input.RedPrimaryX !== undefined && input.RedPrimaryX !== null && { redPrimaryX: input.RedPrimaryX })), (input.RedPrimaryY !== undefined && input.RedPrimaryY !== null && { redPrimaryY: input.RedPrimaryY })), (input.WhitePointX !== undefined && input.WhitePointX !== null && { whitePointX: input.WhitePointX })), (input.WhitePointY !== undefined && input.WhitePointY !== null && { whitePointY: input.WhitePointY }));
};
var serializeAws_restJson1HlsAdditionalManifest = function (input, context) {
    return __assign(__assign({}, (input.ManifestNameModifier !== undefined &&
        input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier })), (input.SelectedOutputs !== undefined &&
        input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
    }));
};
var serializeAws_restJson1HlsCaptionLanguageMapping = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CaptionChannel !== undefined &&
        input.CaptionChannel !== null && { captionChannel: input.CaptionChannel })), (input.CustomLanguageCode !== undefined &&
        input.CustomLanguageCode !== null && { customLanguageCode: input.CustomLanguageCode })), (input.LanguageCode !== undefined && input.LanguageCode !== null && { languageCode: input.LanguageCode })), (input.LanguageDescription !== undefined &&
        input.LanguageDescription !== null && { languageDescription: input.LanguageDescription }));
};
var serializeAws_restJson1HlsEncryptionSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.EncryptionMethod !== undefined &&
        input.EncryptionMethod !== null && { encryptionMethod: input.EncryptionMethod })), (input.InitializationVectorInManifest !== undefined &&
        input.InitializationVectorInManifest !== null && {
        initializationVectorInManifest: input.InitializationVectorInManifest,
    })), (input.OfflineEncrypted !== undefined &&
        input.OfflineEncrypted !== null && { offlineEncrypted: input.OfflineEncrypted })), (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    })), (input.StaticKeyProvider !== undefined &&
        input.StaticKeyProvider !== null && {
        staticKeyProvider: serializeAws_restJson1StaticKeyProvider(input.StaticKeyProvider, context),
    })), (input.Type !== undefined && input.Type !== null && { type: input.Type }));
};
var serializeAws_restJson1HlsGroupSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdMarkers !== undefined &&
        input.AdMarkers !== null && { adMarkers: serializeAws_restJson1__listOfHlsAdMarkers(input.AdMarkers, context) })), (input.AdditionalManifests !== undefined &&
        input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfHlsAdditionalManifest(input.AdditionalManifests, context),
    })), (input.AudioOnlyHeader !== undefined &&
        input.AudioOnlyHeader !== null && { audioOnlyHeader: input.AudioOnlyHeader })), (input.BaseUrl !== undefined && input.BaseUrl !== null && { baseUrl: input.BaseUrl })), (input.CaptionLanguageMappings !== undefined &&
        input.CaptionLanguageMappings !== null && {
        captionLanguageMappings: serializeAws_restJson1__listOfHlsCaptionLanguageMapping(input.CaptionLanguageMappings, context),
    })), (input.CaptionLanguageSetting !== undefined &&
        input.CaptionLanguageSetting !== null && { captionLanguageSetting: input.CaptionLanguageSetting })), (input.ClientCache !== undefined && input.ClientCache !== null && { clientCache: input.ClientCache })), (input.CodecSpecification !== undefined &&
        input.CodecSpecification !== null && { codecSpecification: input.CodecSpecification })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
    })), (input.DirectoryStructure !== undefined &&
        input.DirectoryStructure !== null && { directoryStructure: input.DirectoryStructure })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        encryption: serializeAws_restJson1HlsEncryptionSettings(input.Encryption, context),
    })), (input.ManifestCompression !== undefined &&
        input.ManifestCompression !== null && { manifestCompression: input.ManifestCompression })), (input.ManifestDurationFormat !== undefined &&
        input.ManifestDurationFormat !== null && { manifestDurationFormat: input.ManifestDurationFormat })), (input.MinFinalSegmentLength !== undefined &&
        input.MinFinalSegmentLength !== null && { minFinalSegmentLength: input.MinFinalSegmentLength })), (input.MinSegmentLength !== undefined &&
        input.MinSegmentLength !== null && { minSegmentLength: input.MinSegmentLength })), (input.OutputSelection !== undefined &&
        input.OutputSelection !== null && { outputSelection: input.OutputSelection })), (input.ProgramDateTime !== undefined &&
        input.ProgramDateTime !== null && { programDateTime: input.ProgramDateTime })), (input.ProgramDateTimePeriod !== undefined &&
        input.ProgramDateTimePeriod !== null && { programDateTimePeriod: input.ProgramDateTimePeriod })), (input.SegmentControl !== undefined &&
        input.SegmentControl !== null && { segmentControl: input.SegmentControl })), (input.SegmentLength !== undefined && input.SegmentLength !== null && { segmentLength: input.SegmentLength })), (input.SegmentsPerSubdirectory !== undefined &&
        input.SegmentsPerSubdirectory !== null && { segmentsPerSubdirectory: input.SegmentsPerSubdirectory })), (input.StreamInfResolution !== undefined &&
        input.StreamInfResolution !== null && { streamInfResolution: input.StreamInfResolution })), (input.TimedMetadataId3Frame !== undefined &&
        input.TimedMetadataId3Frame !== null && { timedMetadataId3Frame: input.TimedMetadataId3Frame })), (input.TimedMetadataId3Period !== undefined &&
        input.TimedMetadataId3Period !== null && { timedMetadataId3Period: input.TimedMetadataId3Period })), (input.TimestampDeltaMilliseconds !== undefined &&
        input.TimestampDeltaMilliseconds !== null && { timestampDeltaMilliseconds: input.TimestampDeltaMilliseconds }));
};
var serializeAws_restJson1HlsSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioGroupId !== undefined && input.AudioGroupId !== null && { audioGroupId: input.AudioGroupId })), (input.AudioOnlyContainer !== undefined &&
        input.AudioOnlyContainer !== null && { audioOnlyContainer: input.AudioOnlyContainer })), (input.AudioRenditionSets !== undefined &&
        input.AudioRenditionSets !== null && { audioRenditionSets: input.AudioRenditionSets })), (input.AudioTrackType !== undefined &&
        input.AudioTrackType !== null && { audioTrackType: input.AudioTrackType })), (input.DescriptiveVideoServiceFlag !== undefined &&
        input.DescriptiveVideoServiceFlag !== null && { descriptiveVideoServiceFlag: input.DescriptiveVideoServiceFlag })), (input.IFrameOnlyManifest !== undefined &&
        input.IFrameOnlyManifest !== null && { iFrameOnlyManifest: input.IFrameOnlyManifest })), (input.SegmentModifier !== undefined &&
        input.SegmentModifier !== null && { segmentModifier: input.SegmentModifier }));
};
var serializeAws_restJson1HopDestination = function (input, context) {
    return __assign(__assign(__assign({}, (input.Priority !== undefined && input.Priority !== null && { priority: input.Priority })), (input.Queue !== undefined && input.Queue !== null && { queue: input.Queue })), (input.WaitMinutes !== undefined && input.WaitMinutes !== null && { waitMinutes: input.WaitMinutes }));
};
var serializeAws_restJson1Id3Insertion = function (input, context) {
    return __assign(__assign({}, (input.Id3 !== undefined && input.Id3 !== null && { id3: input.Id3 })), (input.Timecode !== undefined && input.Timecode !== null && { timecode: input.Timecode }));
};
var serializeAws_restJson1ImageInserter = function (input, context) {
    return __assign({}, (input.InsertableImages !== undefined &&
        input.InsertableImages !== null && {
        insertableImages: serializeAws_restJson1__listOfInsertableImage(input.InsertableImages, context),
    }));
};
var serializeAws_restJson1ImscDestinationSettings = function (input, context) {
    return __assign({}, (input.StylePassthrough !== undefined &&
        input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }));
};
var serializeAws_restJson1Input = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioSelectorGroups !== undefined &&
        input.AudioSelectorGroups !== null && {
        audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(input.AudioSelectorGroups, context),
    })), (input.AudioSelectors !== undefined &&
        input.AudioSelectors !== null && {
        audioSelectors: serializeAws_restJson1__mapOfAudioSelector(input.AudioSelectors, context),
    })), (input.CaptionSelectors !== undefined &&
        input.CaptionSelectors !== null && {
        captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(input.CaptionSelectors, context),
    })), (input.Crop !== undefined &&
        input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) })), (input.DeblockFilter !== undefined && input.DeblockFilter !== null && { deblockFilter: input.DeblockFilter })), (input.DecryptionSettings !== undefined &&
        input.DecryptionSettings !== null && {
        decryptionSettings: serializeAws_restJson1InputDecryptionSettings(input.DecryptionSettings, context),
    })), (input.DenoiseFilter !== undefined && input.DenoiseFilter !== null && { denoiseFilter: input.DenoiseFilter })), (input.FileInput !== undefined && input.FileInput !== null && { fileInput: input.FileInput })), (input.FilterEnable !== undefined && input.FilterEnable !== null && { filterEnable: input.FilterEnable })), (input.FilterStrength !== undefined &&
        input.FilterStrength !== null && { filterStrength: input.FilterStrength })), (input.ImageInserter !== undefined &&
        input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
    })), (input.InputClippings !== undefined &&
        input.InputClippings !== null && {
        inputClippings: serializeAws_restJson1__listOfInputClipping(input.InputClippings, context),
    })), (input.InputScanType !== undefined && input.InputScanType !== null && { inputScanType: input.InputScanType })), (input.Position !== undefined &&
        input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) })), (input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber })), (input.PsiControl !== undefined && input.PsiControl !== null && { psiControl: input.PsiControl })), (input.SupplementalImps !== undefined &&
        input.SupplementalImps !== null && {
        supplementalImps: serializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(input.SupplementalImps, context),
    })), (input.TimecodeSource !== undefined &&
        input.TimecodeSource !== null && { timecodeSource: input.TimecodeSource })), (input.TimecodeStart !== undefined && input.TimecodeStart !== null && { timecodeStart: input.TimecodeStart })), (input.VideoSelector !== undefined &&
        input.VideoSelector !== null && {
        videoSelector: serializeAws_restJson1VideoSelector(input.VideoSelector, context),
    }));
};
var serializeAws_restJson1InputClipping = function (input, context) {
    return __assign(__assign({}, (input.EndTimecode !== undefined && input.EndTimecode !== null && { endTimecode: input.EndTimecode })), (input.StartTimecode !== undefined && input.StartTimecode !== null && { startTimecode: input.StartTimecode }));
};
var serializeAws_restJson1InputDecryptionSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DecryptionMode !== undefined &&
        input.DecryptionMode !== null && { decryptionMode: input.DecryptionMode })), (input.EncryptedDecryptionKey !== undefined &&
        input.EncryptedDecryptionKey !== null && { encryptedDecryptionKey: input.EncryptedDecryptionKey })), (input.InitializationVector !== undefined &&
        input.InitializationVector !== null && { initializationVector: input.InitializationVector })), (input.KmsKeyRegion !== undefined && input.KmsKeyRegion !== null && { kmsKeyRegion: input.KmsKeyRegion }));
};
var serializeAws_restJson1InputTemplate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioSelectorGroups !== undefined &&
        input.AudioSelectorGroups !== null && {
        audioSelectorGroups: serializeAws_restJson1__mapOfAudioSelectorGroup(input.AudioSelectorGroups, context),
    })), (input.AudioSelectors !== undefined &&
        input.AudioSelectors !== null && {
        audioSelectors: serializeAws_restJson1__mapOfAudioSelector(input.AudioSelectors, context),
    })), (input.CaptionSelectors !== undefined &&
        input.CaptionSelectors !== null && {
        captionSelectors: serializeAws_restJson1__mapOfCaptionSelector(input.CaptionSelectors, context),
    })), (input.Crop !== undefined &&
        input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) })), (input.DeblockFilter !== undefined && input.DeblockFilter !== null && { deblockFilter: input.DeblockFilter })), (input.DenoiseFilter !== undefined && input.DenoiseFilter !== null && { denoiseFilter: input.DenoiseFilter })), (input.FilterEnable !== undefined && input.FilterEnable !== null && { filterEnable: input.FilterEnable })), (input.FilterStrength !== undefined &&
        input.FilterStrength !== null && { filterStrength: input.FilterStrength })), (input.ImageInserter !== undefined &&
        input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
    })), (input.InputClippings !== undefined &&
        input.InputClippings !== null && {
        inputClippings: serializeAws_restJson1__listOfInputClipping(input.InputClippings, context),
    })), (input.InputScanType !== undefined && input.InputScanType !== null && { inputScanType: input.InputScanType })), (input.Position !== undefined &&
        input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) })), (input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber })), (input.PsiControl !== undefined && input.PsiControl !== null && { psiControl: input.PsiControl })), (input.TimecodeSource !== undefined &&
        input.TimecodeSource !== null && { timecodeSource: input.TimecodeSource })), (input.TimecodeStart !== undefined && input.TimecodeStart !== null && { timecodeStart: input.TimecodeStart })), (input.VideoSelector !== undefined &&
        input.VideoSelector !== null && {
        videoSelector: serializeAws_restJson1VideoSelector(input.VideoSelector, context),
    }));
};
var serializeAws_restJson1InsertableImage = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Duration !== undefined && input.Duration !== null && { duration: input.Duration })), (input.FadeIn !== undefined && input.FadeIn !== null && { fadeIn: input.FadeIn })), (input.FadeOut !== undefined && input.FadeOut !== null && { fadeOut: input.FadeOut })), (input.Height !== undefined && input.Height !== null && { height: input.Height })), (input.ImageInserterInput !== undefined &&
        input.ImageInserterInput !== null && { imageInserterInput: input.ImageInserterInput })), (input.ImageX !== undefined && input.ImageX !== null && { imageX: input.ImageX })), (input.ImageY !== undefined && input.ImageY !== null && { imageY: input.ImageY })), (input.Layer !== undefined && input.Layer !== null && { layer: input.Layer })), (input.Opacity !== undefined && input.Opacity !== null && { opacity: input.Opacity })), (input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime })), (input.Width !== undefined && input.Width !== null && { width: input.Width }));
};
var serializeAws_restJson1JobSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset })), (input.AvailBlanking !== undefined &&
        input.AvailBlanking !== null && {
        availBlanking: serializeAws_restJson1AvailBlanking(input.AvailBlanking, context),
    })), (input.Esam !== undefined &&
        input.Esam !== null && { esam: serializeAws_restJson1EsamSettings(input.Esam, context) })), (input.Inputs !== undefined &&
        input.Inputs !== null && { inputs: serializeAws_restJson1__listOfInput(input.Inputs, context) })), (input.KantarWatermark !== undefined &&
        input.KantarWatermark !== null && {
        kantarWatermark: serializeAws_restJson1KantarWatermarkSettings(input.KantarWatermark, context),
    })), (input.MotionImageInserter !== undefined &&
        input.MotionImageInserter !== null && {
        motionImageInserter: serializeAws_restJson1MotionImageInserter(input.MotionImageInserter, context),
    })), (input.NielsenConfiguration !== undefined &&
        input.NielsenConfiguration !== null && {
        nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(input.NielsenConfiguration, context),
    })), (input.NielsenNonLinearWatermark !== undefined &&
        input.NielsenNonLinearWatermark !== null && {
        nielsenNonLinearWatermark: serializeAws_restJson1NielsenNonLinearWatermarkSettings(input.NielsenNonLinearWatermark, context),
    })), (input.OutputGroups !== undefined &&
        input.OutputGroups !== null && {
        outputGroups: serializeAws_restJson1__listOfOutputGroup(input.OutputGroups, context),
    })), (input.TimecodeConfig !== undefined &&
        input.TimecodeConfig !== null && {
        timecodeConfig: serializeAws_restJson1TimecodeConfig(input.TimecodeConfig, context),
    })), (input.TimedMetadataInsertion !== undefined &&
        input.TimedMetadataInsertion !== null && {
        timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(input.TimedMetadataInsertion, context),
    }));
};
var serializeAws_restJson1JobTemplateSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdAvailOffset !== undefined && input.AdAvailOffset !== null && { adAvailOffset: input.AdAvailOffset })), (input.AvailBlanking !== undefined &&
        input.AvailBlanking !== null && {
        availBlanking: serializeAws_restJson1AvailBlanking(input.AvailBlanking, context),
    })), (input.Esam !== undefined &&
        input.Esam !== null && { esam: serializeAws_restJson1EsamSettings(input.Esam, context) })), (input.Inputs !== undefined &&
        input.Inputs !== null && { inputs: serializeAws_restJson1__listOfInputTemplate(input.Inputs, context) })), (input.KantarWatermark !== undefined &&
        input.KantarWatermark !== null && {
        kantarWatermark: serializeAws_restJson1KantarWatermarkSettings(input.KantarWatermark, context),
    })), (input.MotionImageInserter !== undefined &&
        input.MotionImageInserter !== null && {
        motionImageInserter: serializeAws_restJson1MotionImageInserter(input.MotionImageInserter, context),
    })), (input.NielsenConfiguration !== undefined &&
        input.NielsenConfiguration !== null && {
        nielsenConfiguration: serializeAws_restJson1NielsenConfiguration(input.NielsenConfiguration, context),
    })), (input.NielsenNonLinearWatermark !== undefined &&
        input.NielsenNonLinearWatermark !== null && {
        nielsenNonLinearWatermark: serializeAws_restJson1NielsenNonLinearWatermarkSettings(input.NielsenNonLinearWatermark, context),
    })), (input.OutputGroups !== undefined &&
        input.OutputGroups !== null && {
        outputGroups: serializeAws_restJson1__listOfOutputGroup(input.OutputGroups, context),
    })), (input.TimecodeConfig !== undefined &&
        input.TimecodeConfig !== null && {
        timecodeConfig: serializeAws_restJson1TimecodeConfig(input.TimecodeConfig, context),
    })), (input.TimedMetadataInsertion !== undefined &&
        input.TimedMetadataInsertion !== null && {
        timedMetadataInsertion: serializeAws_restJson1TimedMetadataInsertion(input.TimedMetadataInsertion, context),
    }));
};
var serializeAws_restJson1KantarWatermarkSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ChannelName !== undefined && input.ChannelName !== null && { channelName: input.ChannelName })), (input.ContentReference !== undefined &&
        input.ContentReference !== null && { contentReference: input.ContentReference })), (input.CredentialsSecretName !== undefined &&
        input.CredentialsSecretName !== null && { credentialsSecretName: input.CredentialsSecretName })), (input.FileOffset !== undefined && input.FileOffset !== null && { fileOffset: input.FileOffset })), (input.KantarLicenseId !== undefined &&
        input.KantarLicenseId !== null && { kantarLicenseId: input.KantarLicenseId })), (input.KantarServerUrl !== undefined &&
        input.KantarServerUrl !== null && { kantarServerUrl: input.KantarServerUrl })), (input.LogDestination !== undefined &&
        input.LogDestination !== null && { logDestination: input.LogDestination })), (input.Metadata3 !== undefined && input.Metadata3 !== null && { metadata3: input.Metadata3 })), (input.Metadata4 !== undefined && input.Metadata4 !== null && { metadata4: input.Metadata4 })), (input.Metadata5 !== undefined && input.Metadata5 !== null && { metadata5: input.Metadata5 })), (input.Metadata6 !== undefined && input.Metadata6 !== null && { metadata6: input.Metadata6 })), (input.Metadata7 !== undefined && input.Metadata7 !== null && { metadata7: input.Metadata7 })), (input.Metadata8 !== undefined && input.Metadata8 !== null && { metadata8: input.Metadata8 }));
};
var serializeAws_restJson1M2tsScte35Esam = function (input, context) {
    return __assign({}, (input.Scte35EsamPid !== undefined && input.Scte35EsamPid !== null && { scte35EsamPid: input.Scte35EsamPid }));
};
var serializeAws_restJson1M2tsSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioBufferModel !== undefined &&
        input.AudioBufferModel !== null && { audioBufferModel: input.AudioBufferModel })), (input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration })), (input.AudioFramesPerPes !== undefined &&
        input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes })), (input.AudioPids !== undefined &&
        input.AudioPids !== null && {
        audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.AudioPids, context),
    })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.BufferModel !== undefined && input.BufferModel !== null && { bufferModel: input.BufferModel })), (input.DvbNitSettings !== undefined &&
        input.DvbNitSettings !== null && {
        dvbNitSettings: serializeAws_restJson1DvbNitSettings(input.DvbNitSettings, context),
    })), (input.DvbSdtSettings !== undefined &&
        input.DvbSdtSettings !== null && {
        dvbSdtSettings: serializeAws_restJson1DvbSdtSettings(input.DvbSdtSettings, context),
    })), (input.DvbSubPids !== undefined &&
        input.DvbSubPids !== null && {
        dvbSubPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.DvbSubPids, context),
    })), (input.DvbTdtSettings !== undefined &&
        input.DvbTdtSettings !== null && {
        dvbTdtSettings: serializeAws_restJson1DvbTdtSettings(input.DvbTdtSettings, context),
    })), (input.DvbTeletextPid !== undefined &&
        input.DvbTeletextPid !== null && { dvbTeletextPid: input.DvbTeletextPid })), (input.EbpAudioInterval !== undefined &&
        input.EbpAudioInterval !== null && { ebpAudioInterval: input.EbpAudioInterval })), (input.EbpPlacement !== undefined && input.EbpPlacement !== null && { ebpPlacement: input.EbpPlacement })), (input.EsRateInPes !== undefined && input.EsRateInPes !== null && { esRateInPes: input.EsRateInPes })), (input.ForceTsVideoEbpOrder !== undefined &&
        input.ForceTsVideoEbpOrder !== null && { forceTsVideoEbpOrder: input.ForceTsVideoEbpOrder })), (input.FragmentTime !== undefined && input.FragmentTime !== null && { fragmentTime: input.FragmentTime })), (input.MaxPcrInterval !== undefined &&
        input.MaxPcrInterval !== null && { maxPcrInterval: input.MaxPcrInterval })), (input.MinEbpInterval !== undefined &&
        input.MinEbpInterval !== null && { minEbpInterval: input.MinEbpInterval })), (input.NielsenId3 !== undefined && input.NielsenId3 !== null && { nielsenId3: input.NielsenId3 })), (input.NullPacketBitrate !== undefined &&
        input.NullPacketBitrate !== null && { nullPacketBitrate: input.NullPacketBitrate })), (input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval })), (input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl })), (input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid })), (input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval })), (input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid })), (input.PrivateMetadataPid !== undefined &&
        input.PrivateMetadataPid !== null && { privateMetadataPid: input.PrivateMetadataPid })), (input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber })), (input.RateMode !== undefined && input.RateMode !== null && { rateMode: input.RateMode })), (input.Scte35Esam !== undefined &&
        input.Scte35Esam !== null && { scte35Esam: serializeAws_restJson1M2tsScte35Esam(input.Scte35Esam, context) })), (input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid })), (input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source })), (input.SegmentationMarkers !== undefined &&
        input.SegmentationMarkers !== null && { segmentationMarkers: input.SegmentationMarkers })), (input.SegmentationStyle !== undefined &&
        input.SegmentationStyle !== null && { segmentationStyle: input.SegmentationStyle })), (input.SegmentationTime !== undefined &&
        input.SegmentationTime !== null && { segmentationTime: input.SegmentationTime })), (input.TimedMetadataPid !== undefined &&
        input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid })), (input.TransportStreamId !== undefined &&
        input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId })), (input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }));
};
var serializeAws_restJson1M3u8Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration })), (input.AudioFramesPerPes !== undefined &&
        input.AudioFramesPerPes !== null && { audioFramesPerPes: input.AudioFramesPerPes })), (input.AudioPids !== undefined &&
        input.AudioPids !== null && {
        audioPids: serializeAws_restJson1__listOf__integerMin32Max8182(input.AudioPids, context),
    })), (input.MaxPcrInterval !== undefined &&
        input.MaxPcrInterval !== null && { maxPcrInterval: input.MaxPcrInterval })), (input.NielsenId3 !== undefined && input.NielsenId3 !== null && { nielsenId3: input.NielsenId3 })), (input.PatInterval !== undefined && input.PatInterval !== null && { patInterval: input.PatInterval })), (input.PcrControl !== undefined && input.PcrControl !== null && { pcrControl: input.PcrControl })), (input.PcrPid !== undefined && input.PcrPid !== null && { pcrPid: input.PcrPid })), (input.PmtInterval !== undefined && input.PmtInterval !== null && { pmtInterval: input.PmtInterval })), (input.PmtPid !== undefined && input.PmtPid !== null && { pmtPid: input.PmtPid })), (input.PrivateMetadataPid !== undefined &&
        input.PrivateMetadataPid !== null && { privateMetadataPid: input.PrivateMetadataPid })), (input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber })), (input.Scte35Pid !== undefined && input.Scte35Pid !== null && { scte35Pid: input.Scte35Pid })), (input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source })), (input.TimedMetadata !== undefined && input.TimedMetadata !== null && { timedMetadata: input.TimedMetadata })), (input.TimedMetadataPid !== undefined &&
        input.TimedMetadataPid !== null && { timedMetadataPid: input.TimedMetadataPid })), (input.TransportStreamId !== undefined &&
        input.TransportStreamId !== null && { transportStreamId: input.TransportStreamId })), (input.VideoPid !== undefined && input.VideoPid !== null && { videoPid: input.VideoPid }));
};
var serializeAws_restJson1MotionImageInserter = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Framerate !== undefined &&
        input.Framerate !== null && {
        framerate: serializeAws_restJson1MotionImageInsertionFramerate(input.Framerate, context),
    })), (input.Input !== undefined && input.Input !== null && { input: input.Input })), (input.InsertionMode !== undefined && input.InsertionMode !== null && { insertionMode: input.InsertionMode })), (input.Offset !== undefined &&
        input.Offset !== null && { offset: serializeAws_restJson1MotionImageInsertionOffset(input.Offset, context) })), (input.Playback !== undefined && input.Playback !== null && { playback: input.Playback })), (input.StartTime !== undefined && input.StartTime !== null && { startTime: input.StartTime }));
};
var serializeAws_restJson1MotionImageInsertionFramerate = function (input, context) {
    return __assign(__assign({}, (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator }));
};
var serializeAws_restJson1MotionImageInsertionOffset = function (input, context) {
    return __assign(__assign({}, (input.ImageX !== undefined && input.ImageX !== null && { imageX: input.ImageX })), (input.ImageY !== undefined && input.ImageY !== null && { imageY: input.ImageY }));
};
var serializeAws_restJson1MovSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ClapAtom !== undefined && input.ClapAtom !== null && { clapAtom: input.ClapAtom })), (input.CslgAtom !== undefined && input.CslgAtom !== null && { cslgAtom: input.CslgAtom })), (input.Mpeg2FourCCControl !== undefined &&
        input.Mpeg2FourCCControl !== null && { mpeg2FourCCControl: input.Mpeg2FourCCControl })), (input.PaddingControl !== undefined &&
        input.PaddingControl !== null && { paddingControl: input.PaddingControl })), (input.Reference !== undefined && input.Reference !== null && { reference: input.Reference }));
};
var serializeAws_restJson1Mp2Settings = function (input, context) {
    return __assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }));
};
var serializeAws_restJson1Mp3Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate })), (input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }));
};
var serializeAws_restJson1Mp4Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration })), (input.CslgAtom !== undefined && input.CslgAtom !== null && { cslgAtom: input.CslgAtom })), (input.CttsVersion !== undefined && input.CttsVersion !== null && { cttsVersion: input.CttsVersion })), (input.FreeSpaceBox !== undefined && input.FreeSpaceBox !== null && { freeSpaceBox: input.FreeSpaceBox })), (input.MoovPlacement !== undefined && input.MoovPlacement !== null && { moovPlacement: input.MoovPlacement })), (input.Mp4MajorBrand !== undefined && input.Mp4MajorBrand !== null && { mp4MajorBrand: input.Mp4MajorBrand }));
};
var serializeAws_restJson1MpdSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AccessibilityCaptionHints !== undefined &&
        input.AccessibilityCaptionHints !== null && { accessibilityCaptionHints: input.AccessibilityCaptionHints })), (input.AudioDuration !== undefined && input.AudioDuration !== null && { audioDuration: input.AudioDuration })), (input.CaptionContainerType !== undefined &&
        input.CaptionContainerType !== null && { captionContainerType: input.CaptionContainerType })), (input.Scte35Esam !== undefined && input.Scte35Esam !== null && { scte35Esam: input.Scte35Esam })), (input.Scte35Source !== undefined && input.Scte35Source !== null && { scte35Source: input.Scte35Source }));
};
var serializeAws_restJson1Mpeg2Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdaptiveQuantization !== undefined &&
        input.AdaptiveQuantization !== null && { adaptiveQuantization: input.AdaptiveQuantization })), (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.CodecLevel !== undefined && input.CodecLevel !== null && { codecLevel: input.CodecLevel })), (input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile })), (input.DynamicSubGop !== undefined && input.DynamicSubGop !== null && { dynamicSubGop: input.DynamicSubGop })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopClosedCadence !== undefined &&
        input.GopClosedCadence !== null && { gopClosedCadence: input.GopClosedCadence })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.GopSizeUnits !== undefined && input.GopSizeUnits !== null && { gopSizeUnits: input.GopSizeUnits })), (input.HrdBufferInitialFillPercentage !== undefined &&
        input.HrdBufferInitialFillPercentage !== null && {
        hrdBufferInitialFillPercentage: input.HrdBufferInitialFillPercentage,
    })), (input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.IntraDcPrecision !== undefined &&
        input.IntraDcPrecision !== null && { intraDcPrecision: input.IntraDcPrecision })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.MinIInterval !== undefined && input.MinIInterval !== null && { minIInterval: input.MinIInterval })), (input.NumberBFramesBetweenReferenceFrames !== undefined &&
        input.NumberBFramesBetweenReferenceFrames !== null && {
        numberBFramesBetweenReferenceFrames: input.NumberBFramesBetweenReferenceFrames,
    })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SceneChangeDetect !== undefined &&
        input.SceneChangeDetect !== null && { sceneChangeDetect: input.SceneChangeDetect })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.Softness !== undefined && input.Softness !== null && { softness: input.Softness })), (input.SpatialAdaptiveQuantization !== undefined &&
        input.SpatialAdaptiveQuantization !== null && { spatialAdaptiveQuantization: input.SpatialAdaptiveQuantization })), (input.Syntax !== undefined && input.Syntax !== null && { syntax: input.Syntax })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine })), (input.TemporalAdaptiveQuantization !== undefined &&
        input.TemporalAdaptiveQuantization !== null && {
        temporalAdaptiveQuantization: input.TemporalAdaptiveQuantization,
    }));
};
var serializeAws_restJson1MsSmoothAdditionalManifest = function (input, context) {
    return __assign(__assign({}, (input.ManifestNameModifier !== undefined &&
        input.ManifestNameModifier !== null && { manifestNameModifier: input.ManifestNameModifier })), (input.SelectedOutputs !== undefined &&
        input.SelectedOutputs !== null && {
        selectedOutputs: serializeAws_restJson1__listOf__stringMin1(input.SelectedOutputs, context),
    }));
};
var serializeAws_restJson1MsSmoothEncryptionSettings = function (input, context) {
    return __assign({}, (input.SpekeKeyProvider !== undefined &&
        input.SpekeKeyProvider !== null && {
        spekeKeyProvider: serializeAws_restJson1SpekeKeyProvider(input.SpekeKeyProvider, context),
    }));
};
var serializeAws_restJson1MsSmoothGroupSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AdditionalManifests !== undefined &&
        input.AdditionalManifests !== null && {
        additionalManifests: serializeAws_restJson1__listOfMsSmoothAdditionalManifest(input.AdditionalManifests, context),
    })), (input.AudioDeduplication !== undefined &&
        input.AudioDeduplication !== null && { audioDeduplication: input.AudioDeduplication })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.DestinationSettings !== undefined &&
        input.DestinationSettings !== null && {
        destinationSettings: serializeAws_restJson1DestinationSettings(input.DestinationSettings, context),
    })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        encryption: serializeAws_restJson1MsSmoothEncryptionSettings(input.Encryption, context),
    })), (input.FragmentLength !== undefined &&
        input.FragmentLength !== null && { fragmentLength: input.FragmentLength })), (input.ManifestEncoding !== undefined &&
        input.ManifestEncoding !== null && { manifestEncoding: input.ManifestEncoding }));
};
var serializeAws_restJson1MxfSettings = function (input, context) {
    return __assign(__assign({}, (input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling })), (input.Profile !== undefined && input.Profile !== null && { profile: input.Profile }));
};
var serializeAws_restJson1NexGuardFileMarkerSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.License !== undefined && input.License !== null && { license: input.License })), (input.Payload !== undefined && input.Payload !== null && { payload: input.Payload })), (input.Preset !== undefined && input.Preset !== null && { preset: input.Preset })), (input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }));
};
var serializeAws_restJson1NielsenConfiguration = function (input, context) {
    return __assign(__assign({}, (input.BreakoutCode !== undefined && input.BreakoutCode !== null && { breakoutCode: input.BreakoutCode })), (input.DistributorId !== undefined && input.DistributorId !== null && { distributorId: input.DistributorId }));
};
var serializeAws_restJson1NielsenNonLinearWatermarkSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ActiveWatermarkProcess !== undefined &&
        input.ActiveWatermarkProcess !== null && { activeWatermarkProcess: input.ActiveWatermarkProcess })), (input.AdiFilename !== undefined && input.AdiFilename !== null && { adiFilename: input.AdiFilename })), (input.AssetId !== undefined && input.AssetId !== null && { assetId: input.AssetId })), (input.AssetName !== undefined && input.AssetName !== null && { assetName: input.AssetName })), (input.CbetSourceId !== undefined && input.CbetSourceId !== null && { cbetSourceId: input.CbetSourceId })), (input.EpisodeId !== undefined && input.EpisodeId !== null && { episodeId: input.EpisodeId })), (input.MetadataDestination !== undefined &&
        input.MetadataDestination !== null && { metadataDestination: input.MetadataDestination })), (input.SourceId !== undefined && input.SourceId !== null && { sourceId: input.SourceId })), (input.SourceWatermarkStatus !== undefined &&
        input.SourceWatermarkStatus !== null && { sourceWatermarkStatus: input.SourceWatermarkStatus })), (input.TicServerUrl !== undefined && input.TicServerUrl !== null && { ticServerUrl: input.TicServerUrl })), (input.UniqueTicPerAudioTrack !== undefined &&
        input.UniqueTicPerAudioTrack !== null && { uniqueTicPerAudioTrack: input.UniqueTicPerAudioTrack }));
};
var serializeAws_restJson1NoiseReducer = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Filter !== undefined && input.Filter !== null && { filter: input.Filter })), (input.FilterSettings !== undefined &&
        input.FilterSettings !== null && {
        filterSettings: serializeAws_restJson1NoiseReducerFilterSettings(input.FilterSettings, context),
    })), (input.SpatialFilterSettings !== undefined &&
        input.SpatialFilterSettings !== null && {
        spatialFilterSettings: serializeAws_restJson1NoiseReducerSpatialFilterSettings(input.SpatialFilterSettings, context),
    })), (input.TemporalFilterSettings !== undefined &&
        input.TemporalFilterSettings !== null && {
        temporalFilterSettings: serializeAws_restJson1NoiseReducerTemporalFilterSettings(input.TemporalFilterSettings, context),
    }));
};
var serializeAws_restJson1NoiseReducerFilterSettings = function (input, context) {
    return __assign({}, (input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }));
};
var serializeAws_restJson1NoiseReducerSpatialFilterSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.PostFilterSharpenStrength !== undefined &&
        input.PostFilterSharpenStrength !== null && { postFilterSharpenStrength: input.PostFilterSharpenStrength })), (input.Speed !== undefined && input.Speed !== null && { speed: input.Speed })), (input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }));
};
var serializeAws_restJson1NoiseReducerTemporalFilterSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AggressiveMode !== undefined &&
        input.AggressiveMode !== null && { aggressiveMode: input.AggressiveMode })), (input.PostTemporalSharpening !== undefined &&
        input.PostTemporalSharpening !== null && { postTemporalSharpening: input.PostTemporalSharpening })), (input.Speed !== undefined && input.Speed !== null && { speed: input.Speed })), (input.Strength !== undefined && input.Strength !== null && { strength: input.Strength }));
};
var serializeAws_restJson1OpusSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }));
};
var serializeAws_restJson1Output = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AudioDescriptions !== undefined &&
        input.AudioDescriptions !== null && {
        audioDescriptions: serializeAws_restJson1__listOfAudioDescription(input.AudioDescriptions, context),
    })), (input.CaptionDescriptions !== undefined &&
        input.CaptionDescriptions !== null && {
        captionDescriptions: serializeAws_restJson1__listOfCaptionDescription(input.CaptionDescriptions, context),
    })), (input.ContainerSettings !== undefined &&
        input.ContainerSettings !== null && {
        containerSettings: serializeAws_restJson1ContainerSettings(input.ContainerSettings, context),
    })), (input.Extension !== undefined && input.Extension !== null && { extension: input.Extension })), (input.NameModifier !== undefined && input.NameModifier !== null && { nameModifier: input.NameModifier })), (input.OutputSettings !== undefined &&
        input.OutputSettings !== null && {
        outputSettings: serializeAws_restJson1OutputSettings(input.OutputSettings, context),
    })), (input.Preset !== undefined && input.Preset !== null && { preset: input.Preset })), (input.VideoDescription !== undefined &&
        input.VideoDescription !== null && {
        videoDescription: serializeAws_restJson1VideoDescription(input.VideoDescription, context),
    }));
};
var serializeAws_restJson1OutputChannelMapping = function (input, context) {
    return __assign(__assign({}, (input.InputChannels !== undefined &&
        input.InputChannels !== null && {
        inputChannels: serializeAws_restJson1__listOf__integerMinNegative60Max6(input.InputChannels, context),
    })), (input.InputChannelsFineTune !== undefined &&
        input.InputChannelsFineTune !== null && {
        inputChannelsFineTune: serializeAws_restJson1__listOf__doubleMinNegative60Max6(input.InputChannelsFineTune, context),
    }));
};
var serializeAws_restJson1OutputGroup = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AutomatedEncodingSettings !== undefined &&
        input.AutomatedEncodingSettings !== null && {
        automatedEncodingSettings: serializeAws_restJson1AutomatedEncodingSettings(input.AutomatedEncodingSettings, context),
    })), (input.CustomName !== undefined && input.CustomName !== null && { customName: input.CustomName })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.OutputGroupSettings !== undefined &&
        input.OutputGroupSettings !== null && {
        outputGroupSettings: serializeAws_restJson1OutputGroupSettings(input.OutputGroupSettings, context),
    })), (input.Outputs !== undefined &&
        input.Outputs !== null && { outputs: serializeAws_restJson1__listOfOutput(input.Outputs, context) }));
};
var serializeAws_restJson1OutputGroupSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.CmafGroupSettings !== undefined &&
        input.CmafGroupSettings !== null && {
        cmafGroupSettings: serializeAws_restJson1CmafGroupSettings(input.CmafGroupSettings, context),
    })), (input.DashIsoGroupSettings !== undefined &&
        input.DashIsoGroupSettings !== null && {
        dashIsoGroupSettings: serializeAws_restJson1DashIsoGroupSettings(input.DashIsoGroupSettings, context),
    })), (input.FileGroupSettings !== undefined &&
        input.FileGroupSettings !== null && {
        fileGroupSettings: serializeAws_restJson1FileGroupSettings(input.FileGroupSettings, context),
    })), (input.HlsGroupSettings !== undefined &&
        input.HlsGroupSettings !== null && {
        hlsGroupSettings: serializeAws_restJson1HlsGroupSettings(input.HlsGroupSettings, context),
    })), (input.MsSmoothGroupSettings !== undefined &&
        input.MsSmoothGroupSettings !== null && {
        msSmoothGroupSettings: serializeAws_restJson1MsSmoothGroupSettings(input.MsSmoothGroupSettings, context),
    })), (input.Type !== undefined && input.Type !== null && { type: input.Type }));
};
var serializeAws_restJson1OutputSettings = function (input, context) {
    return __assign({}, (input.HlsSettings !== undefined &&
        input.HlsSettings !== null && { hlsSettings: serializeAws_restJson1HlsSettings(input.HlsSettings, context) }));
};
var serializeAws_restJson1PartnerWatermarking = function (input, context) {
    return __assign({}, (input.NexguardFileMarkerSettings !== undefined &&
        input.NexguardFileMarkerSettings !== null && {
        nexguardFileMarkerSettings: serializeAws_restJson1NexGuardFileMarkerSettings(input.NexguardFileMarkerSettings, context),
    }));
};
var serializeAws_restJson1PresetSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AudioDescriptions !== undefined &&
        input.AudioDescriptions !== null && {
        audioDescriptions: serializeAws_restJson1__listOfAudioDescription(input.AudioDescriptions, context),
    })), (input.CaptionDescriptions !== undefined &&
        input.CaptionDescriptions !== null && {
        captionDescriptions: serializeAws_restJson1__listOfCaptionDescriptionPreset(input.CaptionDescriptions, context),
    })), (input.ContainerSettings !== undefined &&
        input.ContainerSettings !== null && {
        containerSettings: serializeAws_restJson1ContainerSettings(input.ContainerSettings, context),
    })), (input.VideoDescription !== undefined &&
        input.VideoDescription !== null && {
        videoDescription: serializeAws_restJson1VideoDescription(input.VideoDescription, context),
    }));
};
var serializeAws_restJson1ProresSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CodecProfile !== undefined && input.CodecProfile !== null && { codecProfile: input.CodecProfile })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine }));
};
var serializeAws_restJson1Rectangle = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Height !== undefined && input.Height !== null && { height: input.Height })), (input.Width !== undefined && input.Width !== null && { width: input.Width })), (input.X !== undefined && input.X !== null && { x: input.X })), (input.Y !== undefined && input.Y !== null && { y: input.Y }));
};
var serializeAws_restJson1RemixSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.ChannelMapping !== undefined &&
        input.ChannelMapping !== null && {
        channelMapping: serializeAws_restJson1ChannelMapping(input.ChannelMapping, context),
    })), (input.ChannelsIn !== undefined && input.ChannelsIn !== null && { channelsIn: input.ChannelsIn })), (input.ChannelsOut !== undefined && input.ChannelsOut !== null && { channelsOut: input.ChannelsOut }));
};
var serializeAws_restJson1ReservationPlanSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.Commitment !== undefined && input.Commitment !== null && { commitment: input.Commitment })), (input.RenewalType !== undefined && input.RenewalType !== null && { renewalType: input.RenewalType })), (input.ReservedSlots !== undefined && input.ReservedSlots !== null && { reservedSlots: input.ReservedSlots }));
};
var serializeAws_restJson1S3DestinationAccessControl = function (input, context) {
    return __assign({}, (input.CannedAcl !== undefined && input.CannedAcl !== null && { cannedAcl: input.CannedAcl }));
};
var serializeAws_restJson1S3DestinationSettings = function (input, context) {
    return __assign(__assign({}, (input.AccessControl !== undefined &&
        input.AccessControl !== null && {
        accessControl: serializeAws_restJson1S3DestinationAccessControl(input.AccessControl, context),
    })), (input.Encryption !== undefined &&
        input.Encryption !== null && {
        encryption: serializeAws_restJson1S3EncryptionSettings(input.Encryption, context),
    }));
};
var serializeAws_restJson1S3EncryptionSettings = function (input, context) {
    return __assign(__assign({}, (input.EncryptionType !== undefined &&
        input.EncryptionType !== null && { encryptionType: input.EncryptionType })), (input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { kmsKeyArn: input.KmsKeyArn }));
};
var serializeAws_restJson1SccDestinationSettings = function (input, context) {
    return __assign({}, (input.Framerate !== undefined && input.Framerate !== null && { framerate: input.Framerate }));
};
var serializeAws_restJson1SpekeKeyProvider = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { certificateArn: input.CertificateArn })), (input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId })), (input.SystemIds !== undefined &&
        input.SystemIds !== null && {
        systemIds: serializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(input.SystemIds, context),
    })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1SpekeKeyProviderCmaf = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.CertificateArn !== undefined &&
        input.CertificateArn !== null && { certificateArn: input.CertificateArn })), (input.DashSignaledSystemIds !== undefined &&
        input.DashSignaledSystemIds !== null && {
        dashSignaledSystemIds: serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(input.DashSignaledSystemIds, context),
    })), (input.HlsSignaledSystemIds !== undefined &&
        input.HlsSignaledSystemIds !== null && {
        hlsSignaledSystemIds: serializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(input.HlsSignaledSystemIds, context),
    })), (input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1StaticKeyProvider = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.KeyFormat !== undefined && input.KeyFormat !== null && { keyFormat: input.KeyFormat })), (input.KeyFormatVersions !== undefined &&
        input.KeyFormatVersions !== null && { keyFormatVersions: input.KeyFormatVersions })), (input.StaticKeyValue !== undefined &&
        input.StaticKeyValue !== null && { staticKeyValue: input.StaticKeyValue })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1TeletextDestinationSettings = function (input, context) {
    return __assign(__assign({}, (input.PageNumber !== undefined && input.PageNumber !== null && { pageNumber: input.PageNumber })), (input.PageTypes !== undefined &&
        input.PageTypes !== null && {
        pageTypes: serializeAws_restJson1__listOfTeletextPageType(input.PageTypes, context),
    }));
};
var serializeAws_restJson1TeletextSourceSettings = function (input, context) {
    return __assign({}, (input.PageNumber !== undefined && input.PageNumber !== null && { pageNumber: input.PageNumber }));
};
var serializeAws_restJson1TimecodeBurnin = function (input, context) {
    return __assign(__assign(__assign({}, (input.FontSize !== undefined && input.FontSize !== null && { fontSize: input.FontSize })), (input.Position !== undefined && input.Position !== null && { position: input.Position })), (input.Prefix !== undefined && input.Prefix !== null && { prefix: input.Prefix }));
};
var serializeAws_restJson1TimecodeConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Anchor !== undefined && input.Anchor !== null && { anchor: input.Anchor })), (input.Source !== undefined && input.Source !== null && { source: input.Source })), (input.Start !== undefined && input.Start !== null && { start: input.Start })), (input.TimestampOffset !== undefined &&
        input.TimestampOffset !== null && { timestampOffset: input.TimestampOffset }));
};
var serializeAws_restJson1TimedMetadataInsertion = function (input, context) {
    return __assign({}, (input.Id3Insertions !== undefined &&
        input.Id3Insertions !== null && {
        id3Insertions: serializeAws_restJson1__listOfId3Insertion(input.Id3Insertions, context),
    }));
};
var serializeAws_restJson1TrackSourceSettings = function (input, context) {
    return __assign({}, (input.TrackNumber !== undefined && input.TrackNumber !== null && { trackNumber: input.TrackNumber }));
};
var serializeAws_restJson1TtmlDestinationSettings = function (input, context) {
    return __assign({}, (input.StylePassthrough !== undefined &&
        input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }));
};
var serializeAws_restJson1Vc3Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.InterlaceMode !== undefined && input.InterlaceMode !== null && { interlaceMode: input.InterlaceMode })), (input.ScanTypeConversionMode !== undefined &&
        input.ScanTypeConversionMode !== null && { scanTypeConversionMode: input.ScanTypeConversionMode })), (input.SlowPal !== undefined && input.SlowPal !== null && { slowPal: input.SlowPal })), (input.Telecine !== undefined && input.Telecine !== null && { telecine: input.Telecine })), (input.Vc3Class !== undefined && input.Vc3Class !== null && { vc3Class: input.Vc3Class }));
};
var serializeAws_restJson1VideoCodecSettings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Av1Settings !== undefined &&
        input.Av1Settings !== null && { av1Settings: serializeAws_restJson1Av1Settings(input.Av1Settings, context) })), (input.AvcIntraSettings !== undefined &&
        input.AvcIntraSettings !== null && {
        avcIntraSettings: serializeAws_restJson1AvcIntraSettings(input.AvcIntraSettings, context),
    })), (input.Codec !== undefined && input.Codec !== null && { codec: input.Codec })), (input.FrameCaptureSettings !== undefined &&
        input.FrameCaptureSettings !== null && {
        frameCaptureSettings: serializeAws_restJson1FrameCaptureSettings(input.FrameCaptureSettings, context),
    })), (input.H264Settings !== undefined &&
        input.H264Settings !== null && { h264Settings: serializeAws_restJson1H264Settings(input.H264Settings, context) })), (input.H265Settings !== undefined &&
        input.H265Settings !== null && { h265Settings: serializeAws_restJson1H265Settings(input.H265Settings, context) })), (input.Mpeg2Settings !== undefined &&
        input.Mpeg2Settings !== null && {
        mpeg2Settings: serializeAws_restJson1Mpeg2Settings(input.Mpeg2Settings, context),
    })), (input.ProresSettings !== undefined &&
        input.ProresSettings !== null && {
        proresSettings: serializeAws_restJson1ProresSettings(input.ProresSettings, context),
    })), (input.Vc3Settings !== undefined &&
        input.Vc3Settings !== null && { vc3Settings: serializeAws_restJson1Vc3Settings(input.Vc3Settings, context) })), (input.Vp8Settings !== undefined &&
        input.Vp8Settings !== null && { vp8Settings: serializeAws_restJson1Vp8Settings(input.Vp8Settings, context) })), (input.Vp9Settings !== undefined &&
        input.Vp9Settings !== null && { vp9Settings: serializeAws_restJson1Vp9Settings(input.Vp9Settings, context) }));
};
var serializeAws_restJson1VideoDescription = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AfdSignaling !== undefined && input.AfdSignaling !== null && { afdSignaling: input.AfdSignaling })), (input.AntiAlias !== undefined && input.AntiAlias !== null && { antiAlias: input.AntiAlias })), (input.CodecSettings !== undefined &&
        input.CodecSettings !== null && {
        codecSettings: serializeAws_restJson1VideoCodecSettings(input.CodecSettings, context),
    })), (input.ColorMetadata !== undefined && input.ColorMetadata !== null && { colorMetadata: input.ColorMetadata })), (input.Crop !== undefined &&
        input.Crop !== null && { crop: serializeAws_restJson1Rectangle(input.Crop, context) })), (input.DropFrameTimecode !== undefined &&
        input.DropFrameTimecode !== null && { dropFrameTimecode: input.DropFrameTimecode })), (input.FixedAfd !== undefined && input.FixedAfd !== null && { fixedAfd: input.FixedAfd })), (input.Height !== undefined && input.Height !== null && { height: input.Height })), (input.Position !== undefined &&
        input.Position !== null && { position: serializeAws_restJson1Rectangle(input.Position, context) })), (input.RespondToAfd !== undefined && input.RespondToAfd !== null && { respondToAfd: input.RespondToAfd })), (input.ScalingBehavior !== undefined &&
        input.ScalingBehavior !== null && { scalingBehavior: input.ScalingBehavior })), (input.Sharpness !== undefined && input.Sharpness !== null && { sharpness: input.Sharpness })), (input.TimecodeInsertion !== undefined &&
        input.TimecodeInsertion !== null && { timecodeInsertion: input.TimecodeInsertion })), (input.VideoPreprocessors !== undefined &&
        input.VideoPreprocessors !== null && {
        videoPreprocessors: serializeAws_restJson1VideoPreprocessor(input.VideoPreprocessors, context),
    })), (input.Width !== undefined && input.Width !== null && { width: input.Width }));
};
var serializeAws_restJson1VideoPreprocessor = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ColorCorrector !== undefined &&
        input.ColorCorrector !== null && {
        colorCorrector: serializeAws_restJson1ColorCorrector(input.ColorCorrector, context),
    })), (input.Deinterlacer !== undefined &&
        input.Deinterlacer !== null && { deinterlacer: serializeAws_restJson1Deinterlacer(input.Deinterlacer, context) })), (input.DolbyVision !== undefined &&
        input.DolbyVision !== null && { dolbyVision: serializeAws_restJson1DolbyVision(input.DolbyVision, context) })), (input.ImageInserter !== undefined &&
        input.ImageInserter !== null && {
        imageInserter: serializeAws_restJson1ImageInserter(input.ImageInserter, context),
    })), (input.NoiseReducer !== undefined &&
        input.NoiseReducer !== null && { noiseReducer: serializeAws_restJson1NoiseReducer(input.NoiseReducer, context) })), (input.PartnerWatermarking !== undefined &&
        input.PartnerWatermarking !== null && {
        partnerWatermarking: serializeAws_restJson1PartnerWatermarking(input.PartnerWatermarking, context),
    })), (input.TimecodeBurnin !== undefined &&
        input.TimecodeBurnin !== null && {
        timecodeBurnin: serializeAws_restJson1TimecodeBurnin(input.TimecodeBurnin, context),
    }));
};
var serializeAws_restJson1VideoSelector = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AlphaBehavior !== undefined && input.AlphaBehavior !== null && { alphaBehavior: input.AlphaBehavior })), (input.ColorSpace !== undefined && input.ColorSpace !== null && { colorSpace: input.ColorSpace })), (input.ColorSpaceUsage !== undefined &&
        input.ColorSpaceUsage !== null && { colorSpaceUsage: input.ColorSpaceUsage })), (input.Hdr10Metadata !== undefined &&
        input.Hdr10Metadata !== null && {
        hdr10Metadata: serializeAws_restJson1Hdr10Metadata(input.Hdr10Metadata, context),
    })), (input.Pid !== undefined && input.Pid !== null && { pid: input.Pid })), (input.ProgramNumber !== undefined && input.ProgramNumber !== null && { programNumber: input.ProgramNumber })), (input.Rotate !== undefined && input.Rotate !== null && { rotate: input.Rotate })), (input.SampleRange !== undefined && input.SampleRange !== null && { sampleRange: input.SampleRange }));
};
var serializeAws_restJson1VorbisSettings = function (input, context) {
    return __assign(__assign(__assign({}, (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate })), (input.VbrQuality !== undefined && input.VbrQuality !== null && { vbrQuality: input.VbrQuality }));
};
var serializeAws_restJson1Vp8Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode }));
};
var serializeAws_restJson1Vp9Settings = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Bitrate !== undefined && input.Bitrate !== null && { bitrate: input.Bitrate })), (input.FramerateControl !== undefined &&
        input.FramerateControl !== null && { framerateControl: input.FramerateControl })), (input.FramerateConversionAlgorithm !== undefined &&
        input.FramerateConversionAlgorithm !== null && {
        framerateConversionAlgorithm: input.FramerateConversionAlgorithm,
    })), (input.FramerateDenominator !== undefined &&
        input.FramerateDenominator !== null && { framerateDenominator: input.FramerateDenominator })), (input.FramerateNumerator !== undefined &&
        input.FramerateNumerator !== null && { framerateNumerator: input.FramerateNumerator })), (input.GopSize !== undefined && input.GopSize !== null && { gopSize: input.GopSize })), (input.HrdBufferSize !== undefined && input.HrdBufferSize !== null && { hrdBufferSize: input.HrdBufferSize })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.ParControl !== undefined && input.ParControl !== null && { parControl: input.ParControl })), (input.ParDenominator !== undefined &&
        input.ParDenominator !== null && { parDenominator: input.ParDenominator })), (input.ParNumerator !== undefined && input.ParNumerator !== null && { parNumerator: input.ParNumerator })), (input.QualityTuningLevel !== undefined &&
        input.QualityTuningLevel !== null && { qualityTuningLevel: input.QualityTuningLevel })), (input.RateControlMode !== undefined &&
        input.RateControlMode !== null && { rateControlMode: input.RateControlMode }));
};
var serializeAws_restJson1WavSettings = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.BitDepth !== undefined && input.BitDepth !== null && { bitDepth: input.BitDepth })), (input.Channels !== undefined && input.Channels !== null && { channels: input.Channels })), (input.Format !== undefined && input.Format !== null && { format: input.Format })), (input.SampleRate !== undefined && input.SampleRate !== null && { sampleRate: input.SampleRate }));
};
var serializeAws_restJson1WebvttDestinationSettings = function (input, context) {
    return __assign({}, (input.StylePassthrough !== undefined &&
        input.StylePassthrough !== null && { stylePassthrough: input.StylePassthrough }));
};
var deserializeAws_restJson1__listOf__doubleMinNegative60Max6 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__integerMin1Max2147483647 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__integerMin32Max8182 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__integerMinNegative60Max6 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
var deserializeAws_restJson1__listOf__stringMin1 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOfAudioDescription = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AudioDescription(entry, context);
    });
};
var deserializeAws_restJson1__listOfCaptionDescription = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionDescription(entry, context);
    });
};
var deserializeAws_restJson1__listOfCaptionDescriptionPreset = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CaptionDescriptionPreset(entry, context);
    });
};
var deserializeAws_restJson1__listOfCmafAdditionalManifest = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CmafAdditionalManifest(entry, context);
    });
};
var deserializeAws_restJson1__listOfDashAdditionalManifest = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashAdditionalManifest(entry, context);
    });
};
var deserializeAws_restJson1__listOfEndpoint = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Endpoint(entry, context);
    });
};
var deserializeAws_restJson1__listOfHlsAdditionalManifest = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HlsAdditionalManifest(entry, context);
    });
};
var deserializeAws_restJson1__listOfHlsAdMarkers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOfHlsCaptionLanguageMapping = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HlsCaptionLanguageMapping(entry, context);
    });
};
var deserializeAws_restJson1__listOfHopDestination = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HopDestination(entry, context);
    });
};
var deserializeAws_restJson1__listOfId3Insertion = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Id3Insertion(entry, context);
    });
};
var deserializeAws_restJson1__listOfInput = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Input(entry, context);
    });
};
var deserializeAws_restJson1__listOfInputClipping = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputClipping(entry, context);
    });
};
var deserializeAws_restJson1__listOfInputTemplate = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputTemplate(entry, context);
    });
};
var deserializeAws_restJson1__listOfInsertableImage = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InsertableImage(entry, context);
    });
};
var deserializeAws_restJson1__listOfJob = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
var deserializeAws_restJson1__listOfJobTemplate = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobTemplate(entry, context);
    });
};
var deserializeAws_restJson1__listOfMsSmoothAdditionalManifest = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MsSmoothAdditionalManifest(entry, context);
    });
};
var deserializeAws_restJson1__listOfOutput = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Output(entry, context);
    });
};
var deserializeAws_restJson1__listOfOutputChannelMapping = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputChannelMapping(entry, context);
    });
};
var deserializeAws_restJson1__listOfOutputDetail = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputDetail(entry, context);
    });
};
var deserializeAws_restJson1__listOfOutputGroup = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputGroup(entry, context);
    });
};
var deserializeAws_restJson1__listOfOutputGroupDetail = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputGroupDetail(entry, context);
    });
};
var deserializeAws_restJson1__listOfPreset = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Preset(entry, context);
    });
};
var deserializeAws_restJson1__listOfQueue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Queue(entry, context);
    });
};
var deserializeAws_restJson1__listOfQueueTransition = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QueueTransition(entry, context);
    });
};
var deserializeAws_restJson1__listOfTeletextPageType = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__mapOf__string = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1__mapOfAudioSelector = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1AudioSelector(value, context), _b));
    }, {});
};
var deserializeAws_restJson1__mapOfAudioSelectorGroup = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1AudioSelectorGroup(value, context), _b));
    }, {});
};
var deserializeAws_restJson1__mapOfCaptionSelector = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1CaptionSelector(value, context), _b));
    }, {});
};
var deserializeAws_restJson1AacSettings = function (output, context) {
    return {
        AudioDescriptionBroadcasterMix: output.audioDescriptionBroadcasterMix !== undefined && output.audioDescriptionBroadcasterMix !== null
            ? output.audioDescriptionBroadcasterMix
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodecProfile: output.codecProfile !== undefined && output.codecProfile !== null ? output.codecProfile : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        RawFormat: output.rawFormat !== undefined && output.rawFormat !== null ? output.rawFormat : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        Specification: output.specification !== undefined && output.specification !== null ? output.specification : undefined,
        VbrQuality: output.vbrQuality !== undefined && output.vbrQuality !== null ? output.vbrQuality : undefined,
    };
};
var deserializeAws_restJson1Ac3Settings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BitstreamMode: output.bitstreamMode !== undefined && output.bitstreamMode !== null ? output.bitstreamMode : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        Dialnorm: output.dialnorm !== undefined && output.dialnorm !== null ? output.dialnorm : undefined,
        DynamicRangeCompressionLine: output.dynamicRangeCompressionLine !== undefined && output.dynamicRangeCompressionLine !== null
            ? output.dynamicRangeCompressionLine
            : undefined,
        DynamicRangeCompressionProfile: output.dynamicRangeCompressionProfile !== undefined && output.dynamicRangeCompressionProfile !== null
            ? output.dynamicRangeCompressionProfile
            : undefined,
        DynamicRangeCompressionRf: output.dynamicRangeCompressionRf !== undefined && output.dynamicRangeCompressionRf !== null
            ? output.dynamicRangeCompressionRf
            : undefined,
        LfeFilter: output.lfeFilter !== undefined && output.lfeFilter !== null ? output.lfeFilter : undefined,
        MetadataControl: output.metadataControl !== undefined && output.metadataControl !== null ? output.metadataControl : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
var deserializeAws_restJson1AccelerationSettings = function (output, context) {
    return {
        Mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    };
};
var deserializeAws_restJson1AiffSettings = function (output, context) {
    return {
        BitDepth: output.bitDepth !== undefined && output.bitDepth !== null ? output.bitDepth : undefined,
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
var deserializeAws_restJson1AncillarySourceSettings = function (output, context) {
    return {
        Convert608To708: output.convert608To708 !== undefined && output.convert608To708 !== null ? output.convert608To708 : undefined,
        SourceAncillaryChannelNumber: output.sourceAncillaryChannelNumber !== undefined && output.sourceAncillaryChannelNumber !== null
            ? output.sourceAncillaryChannelNumber
            : undefined,
        TerminateCaptions: output.terminateCaptions !== undefined && output.terminateCaptions !== null
            ? output.terminateCaptions
            : undefined,
    };
};
var deserializeAws_restJson1AudioChannelTaggingSettings = function (output, context) {
    return {
        ChannelTag: output.channelTag !== undefined && output.channelTag !== null ? output.channelTag : undefined,
    };
};
var deserializeAws_restJson1AudioCodecSettings = function (output, context) {
    return {
        AacSettings: output.aacSettings !== undefined && output.aacSettings !== null
            ? deserializeAws_restJson1AacSettings(output.aacSettings, context)
            : undefined,
        Ac3Settings: output.ac3Settings !== undefined && output.ac3Settings !== null
            ? deserializeAws_restJson1Ac3Settings(output.ac3Settings, context)
            : undefined,
        AiffSettings: output.aiffSettings !== undefined && output.aiffSettings !== null
            ? deserializeAws_restJson1AiffSettings(output.aiffSettings, context)
            : undefined,
        Codec: output.codec !== undefined && output.codec !== null ? output.codec : undefined,
        Eac3AtmosSettings: output.eac3AtmosSettings !== undefined && output.eac3AtmosSettings !== null
            ? deserializeAws_restJson1Eac3AtmosSettings(output.eac3AtmosSettings, context)
            : undefined,
        Eac3Settings: output.eac3Settings !== undefined && output.eac3Settings !== null
            ? deserializeAws_restJson1Eac3Settings(output.eac3Settings, context)
            : undefined,
        Mp2Settings: output.mp2Settings !== undefined && output.mp2Settings !== null
            ? deserializeAws_restJson1Mp2Settings(output.mp2Settings, context)
            : undefined,
        Mp3Settings: output.mp3Settings !== undefined && output.mp3Settings !== null
            ? deserializeAws_restJson1Mp3Settings(output.mp3Settings, context)
            : undefined,
        OpusSettings: output.opusSettings !== undefined && output.opusSettings !== null
            ? deserializeAws_restJson1OpusSettings(output.opusSettings, context)
            : undefined,
        VorbisSettings: output.vorbisSettings !== undefined && output.vorbisSettings !== null
            ? deserializeAws_restJson1VorbisSettings(output.vorbisSettings, context)
            : undefined,
        WavSettings: output.wavSettings !== undefined && output.wavSettings !== null
            ? deserializeAws_restJson1WavSettings(output.wavSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1AudioDescription = function (output, context) {
    return {
        AudioChannelTaggingSettings: output.audioChannelTaggingSettings !== undefined && output.audioChannelTaggingSettings !== null
            ? deserializeAws_restJson1AudioChannelTaggingSettings(output.audioChannelTaggingSettings, context)
            : undefined,
        AudioNormalizationSettings: output.audioNormalizationSettings !== undefined && output.audioNormalizationSettings !== null
            ? deserializeAws_restJson1AudioNormalizationSettings(output.audioNormalizationSettings, context)
            : undefined,
        AudioSourceName: output.audioSourceName !== undefined && output.audioSourceName !== null ? output.audioSourceName : undefined,
        AudioType: output.audioType !== undefined && output.audioType !== null ? output.audioType : undefined,
        AudioTypeControl: output.audioTypeControl !== undefined && output.audioTypeControl !== null ? output.audioTypeControl : undefined,
        CodecSettings: output.codecSettings !== undefined && output.codecSettings !== null
            ? deserializeAws_restJson1AudioCodecSettings(output.codecSettings, context)
            : undefined,
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageCodeControl: output.languageCodeControl !== undefined && output.languageCodeControl !== null
            ? output.languageCodeControl
            : undefined,
        RemixSettings: output.remixSettings !== undefined && output.remixSettings !== null
            ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
            : undefined,
        StreamName: output.streamName !== undefined && output.streamName !== null ? output.streamName : undefined,
    };
};
var deserializeAws_restJson1AudioNormalizationSettings = function (output, context) {
    return {
        Algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        AlgorithmControl: output.algorithmControl !== undefined && output.algorithmControl !== null ? output.algorithmControl : undefined,
        CorrectionGateLevel: output.correctionGateLevel !== undefined && output.correctionGateLevel !== null
            ? output.correctionGateLevel
            : undefined,
        LoudnessLogging: output.loudnessLogging !== undefined && output.loudnessLogging !== null ? output.loudnessLogging : undefined,
        PeakCalculation: output.peakCalculation !== undefined && output.peakCalculation !== null ? output.peakCalculation : undefined,
        TargetLkfs: output.targetLkfs !== undefined && output.targetLkfs !== null ? output.targetLkfs : undefined,
    };
};
var deserializeAws_restJson1AudioSelector = function (output, context) {
    return {
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        DefaultSelection: output.defaultSelection !== undefined && output.defaultSelection !== null ? output.defaultSelection : undefined,
        ExternalAudioFileInput: output.externalAudioFileInput !== undefined && output.externalAudioFileInput !== null
            ? output.externalAudioFileInput
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        Offset: output.offset !== undefined && output.offset !== null ? output.offset : undefined,
        Pids: output.pids !== undefined && output.pids !== null
            ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(output.pids, context)
            : undefined,
        ProgramSelection: output.programSelection !== undefined && output.programSelection !== null ? output.programSelection : undefined,
        RemixSettings: output.remixSettings !== undefined && output.remixSettings !== null
            ? deserializeAws_restJson1RemixSettings(output.remixSettings, context)
            : undefined,
        SelectorType: output.selectorType !== undefined && output.selectorType !== null ? output.selectorType : undefined,
        Tracks: output.tracks !== undefined && output.tracks !== null
            ? deserializeAws_restJson1__listOf__integerMin1Max2147483647(output.tracks, context)
            : undefined,
    };
};
var deserializeAws_restJson1AudioSelectorGroup = function (output, context) {
    return {
        AudioSelectorNames: output.audioSelectorNames !== undefined && output.audioSelectorNames !== null
            ? deserializeAws_restJson1__listOf__stringMin1(output.audioSelectorNames, context)
            : undefined,
    };
};
var deserializeAws_restJson1AutomatedAbrSettings = function (output, context) {
    return {
        MaxAbrBitrate: output.maxAbrBitrate !== undefined && output.maxAbrBitrate !== null ? output.maxAbrBitrate : undefined,
        MaxRenditions: output.maxRenditions !== undefined && output.maxRenditions !== null ? output.maxRenditions : undefined,
        MinAbrBitrate: output.minAbrBitrate !== undefined && output.minAbrBitrate !== null ? output.minAbrBitrate : undefined,
    };
};
var deserializeAws_restJson1AutomatedEncodingSettings = function (output, context) {
    return {
        AbrSettings: output.abrSettings !== undefined && output.abrSettings !== null
            ? deserializeAws_restJson1AutomatedAbrSettings(output.abrSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1Av1QvbrSettings = function (output, context) {
    return {
        QvbrQualityLevel: output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null ? output.qvbrQualityLevel : undefined,
        QvbrQualityLevelFineTune: output.qvbrQualityLevelFineTune !== undefined && output.qvbrQualityLevelFineTune !== null
            ? output.qvbrQualityLevelFineTune
            : undefined,
    };
};
var deserializeAws_restJson1Av1Settings = function (output, context) {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        NumberBFramesBetweenReferenceFrames: output.numberBFramesBetweenReferenceFrames !== undefined && output.numberBFramesBetweenReferenceFrames !== null
            ? output.numberBFramesBetweenReferenceFrames
            : undefined,
        QvbrSettings: output.qvbrSettings !== undefined && output.qvbrSettings !== null
            ? deserializeAws_restJson1Av1QvbrSettings(output.qvbrSettings, context)
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        Slices: output.slices !== undefined && output.slices !== null ? output.slices : undefined,
        SpatialAdaptiveQuantization: output.spatialAdaptiveQuantization !== undefined && output.spatialAdaptiveQuantization !== null
            ? output.spatialAdaptiveQuantization
            : undefined,
    };
};
var deserializeAws_restJson1AvailBlanking = function (output, context) {
    return {
        AvailBlankingImage: output.availBlankingImage !== undefined && output.availBlankingImage !== null
            ? output.availBlankingImage
            : undefined,
    };
};
var deserializeAws_restJson1AvcIntraSettings = function (output, context) {
    return {
        AvcIntraClass: output.avcIntraClass !== undefined && output.avcIntraClass !== null ? output.avcIntraClass : undefined,
        AvcIntraUhdSettings: output.avcIntraUhdSettings !== undefined && output.avcIntraUhdSettings !== null
            ? deserializeAws_restJson1AvcIntraUhdSettings(output.avcIntraUhdSettings, context)
            : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
    };
};
var deserializeAws_restJson1AvcIntraUhdSettings = function (output, context) {
    return {
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
    };
};
var deserializeAws_restJson1BurninDestinationSettings = function (output, context) {
    return {
        Alignment: output.alignment !== undefined && output.alignment !== null ? output.alignment : undefined,
        BackgroundColor: output.backgroundColor !== undefined && output.backgroundColor !== null ? output.backgroundColor : undefined,
        BackgroundOpacity: output.backgroundOpacity !== undefined && output.backgroundOpacity !== null
            ? output.backgroundOpacity
            : undefined,
        FontColor: output.fontColor !== undefined && output.fontColor !== null ? output.fontColor : undefined,
        FontOpacity: output.fontOpacity !== undefined && output.fontOpacity !== null ? output.fontOpacity : undefined,
        FontResolution: output.fontResolution !== undefined && output.fontResolution !== null ? output.fontResolution : undefined,
        FontScript: output.fontScript !== undefined && output.fontScript !== null ? output.fontScript : undefined,
        FontSize: output.fontSize !== undefined && output.fontSize !== null ? output.fontSize : undefined,
        OutlineColor: output.outlineColor !== undefined && output.outlineColor !== null ? output.outlineColor : undefined,
        OutlineSize: output.outlineSize !== undefined && output.outlineSize !== null ? output.outlineSize : undefined,
        ShadowColor: output.shadowColor !== undefined && output.shadowColor !== null ? output.shadowColor : undefined,
        ShadowOpacity: output.shadowOpacity !== undefined && output.shadowOpacity !== null ? output.shadowOpacity : undefined,
        ShadowXOffset: output.shadowXOffset !== undefined && output.shadowXOffset !== null ? output.shadowXOffset : undefined,
        ShadowYOffset: output.shadowYOffset !== undefined && output.shadowYOffset !== null ? output.shadowYOffset : undefined,
        TeletextSpacing: output.teletextSpacing !== undefined && output.teletextSpacing !== null ? output.teletextSpacing : undefined,
        XPosition: output.xPosition !== undefined && output.xPosition !== null ? output.xPosition : undefined,
        YPosition: output.yPosition !== undefined && output.yPosition !== null ? output.yPosition : undefined,
    };
};
var deserializeAws_restJson1CaptionDescription = function (output, context) {
    return {
        CaptionSelectorName: output.captionSelectorName !== undefined && output.captionSelectorName !== null
            ? output.captionSelectorName
            : undefined,
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1CaptionDestinationSettings(output.destinationSettings, context)
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageDescription: output.languageDescription !== undefined && output.languageDescription !== null
            ? output.languageDescription
            : undefined,
    };
};
var deserializeAws_restJson1CaptionDescriptionPreset = function (output, context) {
    return {
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1CaptionDestinationSettings(output.destinationSettings, context)
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageDescription: output.languageDescription !== undefined && output.languageDescription !== null
            ? output.languageDescription
            : undefined,
    };
};
var deserializeAws_restJson1CaptionDestinationSettings = function (output, context) {
    return {
        BurninDestinationSettings: output.burninDestinationSettings !== undefined && output.burninDestinationSettings !== null
            ? deserializeAws_restJson1BurninDestinationSettings(output.burninDestinationSettings, context)
            : undefined,
        DestinationType: output.destinationType !== undefined && output.destinationType !== null ? output.destinationType : undefined,
        DvbSubDestinationSettings: output.dvbSubDestinationSettings !== undefined && output.dvbSubDestinationSettings !== null
            ? deserializeAws_restJson1DvbSubDestinationSettings(output.dvbSubDestinationSettings, context)
            : undefined,
        EmbeddedDestinationSettings: output.embeddedDestinationSettings !== undefined && output.embeddedDestinationSettings !== null
            ? deserializeAws_restJson1EmbeddedDestinationSettings(output.embeddedDestinationSettings, context)
            : undefined,
        ImscDestinationSettings: output.imscDestinationSettings !== undefined && output.imscDestinationSettings !== null
            ? deserializeAws_restJson1ImscDestinationSettings(output.imscDestinationSettings, context)
            : undefined,
        SccDestinationSettings: output.sccDestinationSettings !== undefined && output.sccDestinationSettings !== null
            ? deserializeAws_restJson1SccDestinationSettings(output.sccDestinationSettings, context)
            : undefined,
        TeletextDestinationSettings: output.teletextDestinationSettings !== undefined && output.teletextDestinationSettings !== null
            ? deserializeAws_restJson1TeletextDestinationSettings(output.teletextDestinationSettings, context)
            : undefined,
        TtmlDestinationSettings: output.ttmlDestinationSettings !== undefined && output.ttmlDestinationSettings !== null
            ? deserializeAws_restJson1TtmlDestinationSettings(output.ttmlDestinationSettings, context)
            : undefined,
        WebvttDestinationSettings: output.webvttDestinationSettings !== undefined && output.webvttDestinationSettings !== null
            ? deserializeAws_restJson1WebvttDestinationSettings(output.webvttDestinationSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1CaptionSelector = function (output, context) {
    return {
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        SourceSettings: output.sourceSettings !== undefined && output.sourceSettings !== null
            ? deserializeAws_restJson1CaptionSourceSettings(output.sourceSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1CaptionSourceFramerate = function (output, context) {
    return {
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
    };
};
var deserializeAws_restJson1CaptionSourceSettings = function (output, context) {
    return {
        AncillarySourceSettings: output.ancillarySourceSettings !== undefined && output.ancillarySourceSettings !== null
            ? deserializeAws_restJson1AncillarySourceSettings(output.ancillarySourceSettings, context)
            : undefined,
        DvbSubSourceSettings: output.dvbSubSourceSettings !== undefined && output.dvbSubSourceSettings !== null
            ? deserializeAws_restJson1DvbSubSourceSettings(output.dvbSubSourceSettings, context)
            : undefined,
        EmbeddedSourceSettings: output.embeddedSourceSettings !== undefined && output.embeddedSourceSettings !== null
            ? deserializeAws_restJson1EmbeddedSourceSettings(output.embeddedSourceSettings, context)
            : undefined,
        FileSourceSettings: output.fileSourceSettings !== undefined && output.fileSourceSettings !== null
            ? deserializeAws_restJson1FileSourceSettings(output.fileSourceSettings, context)
            : undefined,
        SourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
        TeletextSourceSettings: output.teletextSourceSettings !== undefined && output.teletextSourceSettings !== null
            ? deserializeAws_restJson1TeletextSourceSettings(output.teletextSourceSettings, context)
            : undefined,
        TrackSourceSettings: output.trackSourceSettings !== undefined && output.trackSourceSettings !== null
            ? deserializeAws_restJson1TrackSourceSettings(output.trackSourceSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1ChannelMapping = function (output, context) {
    return {
        OutputChannels: output.outputChannels !== undefined && output.outputChannels !== null
            ? deserializeAws_restJson1__listOfOutputChannelMapping(output.outputChannels, context)
            : undefined,
    };
};
var deserializeAws_restJson1CmafAdditionalManifest = function (output, context) {
    return {
        ManifestNameModifier: output.manifestNameModifier !== undefined && output.manifestNameModifier !== null
            ? output.manifestNameModifier
            : undefined,
        SelectedOutputs: output.selectedOutputs !== undefined && output.selectedOutputs !== null
            ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
            : undefined,
    };
};
var deserializeAws_restJson1CmafEncryptionSettings = function (output, context) {
    return {
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        EncryptionMethod: output.encryptionMethod !== undefined && output.encryptionMethod !== null ? output.encryptionMethod : undefined,
        InitializationVectorInManifest: output.initializationVectorInManifest !== undefined && output.initializationVectorInManifest !== null
            ? output.initializationVectorInManifest
            : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProviderCmaf(output.spekeKeyProvider, context)
            : undefined,
        StaticKeyProvider: output.staticKeyProvider !== undefined && output.staticKeyProvider !== null
            ? deserializeAws_restJson1StaticKeyProvider(output.staticKeyProvider, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1CmafGroupSettings = function (output, context) {
    return {
        AdditionalManifests: output.additionalManifests !== undefined && output.additionalManifests !== null
            ? deserializeAws_restJson1__listOfCmafAdditionalManifest(output.additionalManifests, context)
            : undefined,
        BaseUrl: output.baseUrl !== undefined && output.baseUrl !== null ? output.baseUrl : undefined,
        ClientCache: output.clientCache !== undefined && output.clientCache !== null ? output.clientCache : undefined,
        CodecSpecification: output.codecSpecification !== undefined && output.codecSpecification !== null
            ? output.codecSpecification
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1CmafEncryptionSettings(output.encryption, context)
            : undefined,
        FragmentLength: output.fragmentLength !== undefined && output.fragmentLength !== null ? output.fragmentLength : undefined,
        ManifestCompression: output.manifestCompression !== undefined && output.manifestCompression !== null
            ? output.manifestCompression
            : undefined,
        ManifestDurationFormat: output.manifestDurationFormat !== undefined && output.manifestDurationFormat !== null
            ? output.manifestDurationFormat
            : undefined,
        MinBufferTime: output.minBufferTime !== undefined && output.minBufferTime !== null ? output.minBufferTime : undefined,
        MinFinalSegmentLength: output.minFinalSegmentLength !== undefined && output.minFinalSegmentLength !== null
            ? output.minFinalSegmentLength
            : undefined,
        MpdProfile: output.mpdProfile !== undefined && output.mpdProfile !== null ? output.mpdProfile : undefined,
        PtsOffsetHandlingForBFrames: output.ptsOffsetHandlingForBFrames !== undefined && output.ptsOffsetHandlingForBFrames !== null
            ? output.ptsOffsetHandlingForBFrames
            : undefined,
        SegmentControl: output.segmentControl !== undefined && output.segmentControl !== null ? output.segmentControl : undefined,
        SegmentLength: output.segmentLength !== undefined && output.segmentLength !== null ? output.segmentLength : undefined,
        StreamInfResolution: output.streamInfResolution !== undefined && output.streamInfResolution !== null
            ? output.streamInfResolution
            : undefined,
        WriteDashManifest: output.writeDashManifest !== undefined && output.writeDashManifest !== null
            ? output.writeDashManifest
            : undefined,
        WriteHlsManifest: output.writeHlsManifest !== undefined && output.writeHlsManifest !== null ? output.writeHlsManifest : undefined,
        WriteSegmentTimelineInRepresentation: output.writeSegmentTimelineInRepresentation !== undefined && output.writeSegmentTimelineInRepresentation !== null
            ? output.writeSegmentTimelineInRepresentation
            : undefined,
    };
};
var deserializeAws_restJson1CmfcSettings = function (output, context) {
    return {
        AudioDuration: output.audioDuration !== undefined && output.audioDuration !== null ? output.audioDuration : undefined,
        AudioGroupId: output.audioGroupId !== undefined && output.audioGroupId !== null ? output.audioGroupId : undefined,
        AudioRenditionSets: output.audioRenditionSets !== undefined && output.audioRenditionSets !== null
            ? output.audioRenditionSets
            : undefined,
        AudioTrackType: output.audioTrackType !== undefined && output.audioTrackType !== null ? output.audioTrackType : undefined,
        DescriptiveVideoServiceFlag: output.descriptiveVideoServiceFlag !== undefined && output.descriptiveVideoServiceFlag !== null
            ? output.descriptiveVideoServiceFlag
            : undefined,
        IFrameOnlyManifest: output.iFrameOnlyManifest !== undefined && output.iFrameOnlyManifest !== null
            ? output.iFrameOnlyManifest
            : undefined,
        Scte35Esam: output.scte35Esam !== undefined && output.scte35Esam !== null ? output.scte35Esam : undefined,
        Scte35Source: output.scte35Source !== undefined && output.scte35Source !== null ? output.scte35Source : undefined,
    };
};
var deserializeAws_restJson1ColorCorrector = function (output, context) {
    return {
        Brightness: output.brightness !== undefined && output.brightness !== null ? output.brightness : undefined,
        ColorSpaceConversion: output.colorSpaceConversion !== undefined && output.colorSpaceConversion !== null
            ? output.colorSpaceConversion
            : undefined,
        Contrast: output.contrast !== undefined && output.contrast !== null ? output.contrast : undefined,
        Hdr10Metadata: output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
            ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
            : undefined,
        Hue: output.hue !== undefined && output.hue !== null ? output.hue : undefined,
        Saturation: output.saturation !== undefined && output.saturation !== null ? output.saturation : undefined,
    };
};
var deserializeAws_restJson1ContainerSettings = function (output, context) {
    return {
        CmfcSettings: output.cmfcSettings !== undefined && output.cmfcSettings !== null
            ? deserializeAws_restJson1CmfcSettings(output.cmfcSettings, context)
            : undefined,
        Container: output.container !== undefined && output.container !== null ? output.container : undefined,
        F4vSettings: output.f4vSettings !== undefined && output.f4vSettings !== null
            ? deserializeAws_restJson1F4vSettings(output.f4vSettings, context)
            : undefined,
        M2tsSettings: output.m2tsSettings !== undefined && output.m2tsSettings !== null
            ? deserializeAws_restJson1M2tsSettings(output.m2tsSettings, context)
            : undefined,
        M3u8Settings: output.m3u8Settings !== undefined && output.m3u8Settings !== null
            ? deserializeAws_restJson1M3u8Settings(output.m3u8Settings, context)
            : undefined,
        MovSettings: output.movSettings !== undefined && output.movSettings !== null
            ? deserializeAws_restJson1MovSettings(output.movSettings, context)
            : undefined,
        Mp4Settings: output.mp4Settings !== undefined && output.mp4Settings !== null
            ? deserializeAws_restJson1Mp4Settings(output.mp4Settings, context)
            : undefined,
        MpdSettings: output.mpdSettings !== undefined && output.mpdSettings !== null
            ? deserializeAws_restJson1MpdSettings(output.mpdSettings, context)
            : undefined,
        MxfSettings: output.mxfSettings !== undefined && output.mxfSettings !== null
            ? deserializeAws_restJson1MxfSettings(output.mxfSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1DashAdditionalManifest = function (output, context) {
    return {
        ManifestNameModifier: output.manifestNameModifier !== undefined && output.manifestNameModifier !== null
            ? output.manifestNameModifier
            : undefined,
        SelectedOutputs: output.selectedOutputs !== undefined && output.selectedOutputs !== null
            ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
            : undefined,
    };
};
var deserializeAws_restJson1DashIsoEncryptionSettings = function (output, context) {
    return {
        PlaybackDeviceCompatibility: output.playbackDeviceCompatibility !== undefined && output.playbackDeviceCompatibility !== null
            ? output.playbackDeviceCompatibility
            : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1DashIsoGroupSettings = function (output, context) {
    return {
        AdditionalManifests: output.additionalManifests !== undefined && output.additionalManifests !== null
            ? deserializeAws_restJson1__listOfDashAdditionalManifest(output.additionalManifests, context)
            : undefined,
        AudioChannelConfigSchemeIdUri: output.audioChannelConfigSchemeIdUri !== undefined && output.audioChannelConfigSchemeIdUri !== null
            ? output.audioChannelConfigSchemeIdUri
            : undefined,
        BaseUrl: output.baseUrl !== undefined && output.baseUrl !== null ? output.baseUrl : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1DashIsoEncryptionSettings(output.encryption, context)
            : undefined,
        FragmentLength: output.fragmentLength !== undefined && output.fragmentLength !== null ? output.fragmentLength : undefined,
        HbbtvCompliance: output.hbbtvCompliance !== undefined && output.hbbtvCompliance !== null ? output.hbbtvCompliance : undefined,
        MinBufferTime: output.minBufferTime !== undefined && output.minBufferTime !== null ? output.minBufferTime : undefined,
        MinFinalSegmentLength: output.minFinalSegmentLength !== undefined && output.minFinalSegmentLength !== null
            ? output.minFinalSegmentLength
            : undefined,
        MpdProfile: output.mpdProfile !== undefined && output.mpdProfile !== null ? output.mpdProfile : undefined,
        PtsOffsetHandlingForBFrames: output.ptsOffsetHandlingForBFrames !== undefined && output.ptsOffsetHandlingForBFrames !== null
            ? output.ptsOffsetHandlingForBFrames
            : undefined,
        SegmentControl: output.segmentControl !== undefined && output.segmentControl !== null ? output.segmentControl : undefined,
        SegmentLength: output.segmentLength !== undefined && output.segmentLength !== null ? output.segmentLength : undefined,
        WriteSegmentTimelineInRepresentation: output.writeSegmentTimelineInRepresentation !== undefined && output.writeSegmentTimelineInRepresentation !== null
            ? output.writeSegmentTimelineInRepresentation
            : undefined,
    };
};
var deserializeAws_restJson1Deinterlacer = function (output, context) {
    return {
        Algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        Control: output.control !== undefined && output.control !== null ? output.control : undefined,
        Mode: output.mode !== undefined && output.mode !== null ? output.mode : undefined,
    };
};
var deserializeAws_restJson1DestinationSettings = function (output, context) {
    return {
        S3Settings: output.s3Settings !== undefined && output.s3Settings !== null
            ? deserializeAws_restJson1S3DestinationSettings(output.s3Settings, context)
            : undefined,
    };
};
var deserializeAws_restJson1DolbyVision = function (output, context) {
    return {
        L6Metadata: output.l6Metadata !== undefined && output.l6Metadata !== null
            ? deserializeAws_restJson1DolbyVisionLevel6Metadata(output.l6Metadata, context)
            : undefined,
        L6Mode: output.l6Mode !== undefined && output.l6Mode !== null ? output.l6Mode : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
    };
};
var deserializeAws_restJson1DolbyVisionLevel6Metadata = function (output, context) {
    return {
        MaxCll: output.maxCll !== undefined && output.maxCll !== null ? output.maxCll : undefined,
        MaxFall: output.maxFall !== undefined && output.maxFall !== null ? output.maxFall : undefined,
    };
};
var deserializeAws_restJson1DvbNitSettings = function (output, context) {
    return {
        NetworkId: output.networkId !== undefined && output.networkId !== null ? output.networkId : undefined,
        NetworkName: output.networkName !== undefined && output.networkName !== null ? output.networkName : undefined,
        NitInterval: output.nitInterval !== undefined && output.nitInterval !== null ? output.nitInterval : undefined,
    };
};
var deserializeAws_restJson1DvbSdtSettings = function (output, context) {
    return {
        OutputSdt: output.outputSdt !== undefined && output.outputSdt !== null ? output.outputSdt : undefined,
        SdtInterval: output.sdtInterval !== undefined && output.sdtInterval !== null ? output.sdtInterval : undefined,
        ServiceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
        ServiceProviderName: output.serviceProviderName !== undefined && output.serviceProviderName !== null
            ? output.serviceProviderName
            : undefined,
    };
};
var deserializeAws_restJson1DvbSubDestinationSettings = function (output, context) {
    return {
        Alignment: output.alignment !== undefined && output.alignment !== null ? output.alignment : undefined,
        BackgroundColor: output.backgroundColor !== undefined && output.backgroundColor !== null ? output.backgroundColor : undefined,
        BackgroundOpacity: output.backgroundOpacity !== undefined && output.backgroundOpacity !== null
            ? output.backgroundOpacity
            : undefined,
        DdsHandling: output.ddsHandling !== undefined && output.ddsHandling !== null ? output.ddsHandling : undefined,
        DdsXCoordinate: output.ddsXCoordinate !== undefined && output.ddsXCoordinate !== null ? output.ddsXCoordinate : undefined,
        DdsYCoordinate: output.ddsYCoordinate !== undefined && output.ddsYCoordinate !== null ? output.ddsYCoordinate : undefined,
        FontColor: output.fontColor !== undefined && output.fontColor !== null ? output.fontColor : undefined,
        FontOpacity: output.fontOpacity !== undefined && output.fontOpacity !== null ? output.fontOpacity : undefined,
        FontResolution: output.fontResolution !== undefined && output.fontResolution !== null ? output.fontResolution : undefined,
        FontScript: output.fontScript !== undefined && output.fontScript !== null ? output.fontScript : undefined,
        FontSize: output.fontSize !== undefined && output.fontSize !== null ? output.fontSize : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        OutlineColor: output.outlineColor !== undefined && output.outlineColor !== null ? output.outlineColor : undefined,
        OutlineSize: output.outlineSize !== undefined && output.outlineSize !== null ? output.outlineSize : undefined,
        ShadowColor: output.shadowColor !== undefined && output.shadowColor !== null ? output.shadowColor : undefined,
        ShadowOpacity: output.shadowOpacity !== undefined && output.shadowOpacity !== null ? output.shadowOpacity : undefined,
        ShadowXOffset: output.shadowXOffset !== undefined && output.shadowXOffset !== null ? output.shadowXOffset : undefined,
        ShadowYOffset: output.shadowYOffset !== undefined && output.shadowYOffset !== null ? output.shadowYOffset : undefined,
        SubtitlingType: output.subtitlingType !== undefined && output.subtitlingType !== null ? output.subtitlingType : undefined,
        TeletextSpacing: output.teletextSpacing !== undefined && output.teletextSpacing !== null ? output.teletextSpacing : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
        XPosition: output.xPosition !== undefined && output.xPosition !== null ? output.xPosition : undefined,
        YPosition: output.yPosition !== undefined && output.yPosition !== null ? output.yPosition : undefined,
    };
};
var deserializeAws_restJson1DvbSubSourceSettings = function (output, context) {
    return {
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
    };
};
var deserializeAws_restJson1DvbTdtSettings = function (output, context) {
    return {
        TdtInterval: output.tdtInterval !== undefined && output.tdtInterval !== null ? output.tdtInterval : undefined,
    };
};
var deserializeAws_restJson1Eac3AtmosSettings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BitstreamMode: output.bitstreamMode !== undefined && output.bitstreamMode !== null ? output.bitstreamMode : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        DialogueIntelligence: output.dialogueIntelligence !== undefined && output.dialogueIntelligence !== null
            ? output.dialogueIntelligence
            : undefined,
        DynamicRangeCompressionLine: output.dynamicRangeCompressionLine !== undefined && output.dynamicRangeCompressionLine !== null
            ? output.dynamicRangeCompressionLine
            : undefined,
        DynamicRangeCompressionRf: output.dynamicRangeCompressionRf !== undefined && output.dynamicRangeCompressionRf !== null
            ? output.dynamicRangeCompressionRf
            : undefined,
        LoRoCenterMixLevel: output.loRoCenterMixLevel !== undefined && output.loRoCenterMixLevel !== null
            ? output.loRoCenterMixLevel
            : undefined,
        LoRoSurroundMixLevel: output.loRoSurroundMixLevel !== undefined && output.loRoSurroundMixLevel !== null
            ? output.loRoSurroundMixLevel
            : undefined,
        LtRtCenterMixLevel: output.ltRtCenterMixLevel !== undefined && output.ltRtCenterMixLevel !== null
            ? output.ltRtCenterMixLevel
            : undefined,
        LtRtSurroundMixLevel: output.ltRtSurroundMixLevel !== undefined && output.ltRtSurroundMixLevel !== null
            ? output.ltRtSurroundMixLevel
            : undefined,
        MeteringMode: output.meteringMode !== undefined && output.meteringMode !== null ? output.meteringMode : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        SpeechThreshold: output.speechThreshold !== undefined && output.speechThreshold !== null ? output.speechThreshold : undefined,
        StereoDownmix: output.stereoDownmix !== undefined && output.stereoDownmix !== null ? output.stereoDownmix : undefined,
        SurroundExMode: output.surroundExMode !== undefined && output.surroundExMode !== null ? output.surroundExMode : undefined,
    };
};
var deserializeAws_restJson1Eac3Settings = function (output, context) {
    return {
        AttenuationControl: output.attenuationControl !== undefined && output.attenuationControl !== null
            ? output.attenuationControl
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BitstreamMode: output.bitstreamMode !== undefined && output.bitstreamMode !== null ? output.bitstreamMode : undefined,
        CodingMode: output.codingMode !== undefined && output.codingMode !== null ? output.codingMode : undefined,
        DcFilter: output.dcFilter !== undefined && output.dcFilter !== null ? output.dcFilter : undefined,
        Dialnorm: output.dialnorm !== undefined && output.dialnorm !== null ? output.dialnorm : undefined,
        DynamicRangeCompressionLine: output.dynamicRangeCompressionLine !== undefined && output.dynamicRangeCompressionLine !== null
            ? output.dynamicRangeCompressionLine
            : undefined,
        DynamicRangeCompressionRf: output.dynamicRangeCompressionRf !== undefined && output.dynamicRangeCompressionRf !== null
            ? output.dynamicRangeCompressionRf
            : undefined,
        LfeControl: output.lfeControl !== undefined && output.lfeControl !== null ? output.lfeControl : undefined,
        LfeFilter: output.lfeFilter !== undefined && output.lfeFilter !== null ? output.lfeFilter : undefined,
        LoRoCenterMixLevel: output.loRoCenterMixLevel !== undefined && output.loRoCenterMixLevel !== null
            ? output.loRoCenterMixLevel
            : undefined,
        LoRoSurroundMixLevel: output.loRoSurroundMixLevel !== undefined && output.loRoSurroundMixLevel !== null
            ? output.loRoSurroundMixLevel
            : undefined,
        LtRtCenterMixLevel: output.ltRtCenterMixLevel !== undefined && output.ltRtCenterMixLevel !== null
            ? output.ltRtCenterMixLevel
            : undefined,
        LtRtSurroundMixLevel: output.ltRtSurroundMixLevel !== undefined && output.ltRtSurroundMixLevel !== null
            ? output.ltRtSurroundMixLevel
            : undefined,
        MetadataControl: output.metadataControl !== undefined && output.metadataControl !== null ? output.metadataControl : undefined,
        PassthroughControl: output.passthroughControl !== undefined && output.passthroughControl !== null
            ? output.passthroughControl
            : undefined,
        PhaseControl: output.phaseControl !== undefined && output.phaseControl !== null ? output.phaseControl : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        StereoDownmix: output.stereoDownmix !== undefined && output.stereoDownmix !== null ? output.stereoDownmix : undefined,
        SurroundExMode: output.surroundExMode !== undefined && output.surroundExMode !== null ? output.surroundExMode : undefined,
        SurroundMode: output.surroundMode !== undefined && output.surroundMode !== null ? output.surroundMode : undefined,
    };
};
var deserializeAws_restJson1EmbeddedDestinationSettings = function (output, context) {
    return {
        Destination608ChannelNumber: output.destination608ChannelNumber !== undefined && output.destination608ChannelNumber !== null
            ? output.destination608ChannelNumber
            : undefined,
        Destination708ServiceNumber: output.destination708ServiceNumber !== undefined && output.destination708ServiceNumber !== null
            ? output.destination708ServiceNumber
            : undefined,
    };
};
var deserializeAws_restJson1EmbeddedSourceSettings = function (output, context) {
    return {
        Convert608To708: output.convert608To708 !== undefined && output.convert608To708 !== null ? output.convert608To708 : undefined,
        Source608ChannelNumber: output.source608ChannelNumber !== undefined && output.source608ChannelNumber !== null
            ? output.source608ChannelNumber
            : undefined,
        Source608TrackNumber: output.source608TrackNumber !== undefined && output.source608TrackNumber !== null
            ? output.source608TrackNumber
            : undefined,
        TerminateCaptions: output.terminateCaptions !== undefined && output.terminateCaptions !== null
            ? output.terminateCaptions
            : undefined,
    };
};
var deserializeAws_restJson1Endpoint = function (output, context) {
    return {
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1EsamManifestConfirmConditionNotification = function (output, context) {
    return {
        MccXml: output.mccXml !== undefined && output.mccXml !== null ? output.mccXml : undefined,
    };
};
var deserializeAws_restJson1EsamSettings = function (output, context) {
    return {
        ManifestConfirmConditionNotification: output.manifestConfirmConditionNotification !== undefined && output.manifestConfirmConditionNotification !== null
            ? deserializeAws_restJson1EsamManifestConfirmConditionNotification(output.manifestConfirmConditionNotification, context)
            : undefined,
        ResponseSignalPreroll: output.responseSignalPreroll !== undefined && output.responseSignalPreroll !== null
            ? output.responseSignalPreroll
            : undefined,
        SignalProcessingNotification: output.signalProcessingNotification !== undefined && output.signalProcessingNotification !== null
            ? deserializeAws_restJson1EsamSignalProcessingNotification(output.signalProcessingNotification, context)
            : undefined,
    };
};
var deserializeAws_restJson1EsamSignalProcessingNotification = function (output, context) {
    return {
        SccXml: output.sccXml !== undefined && output.sccXml !== null ? output.sccXml : undefined,
    };
};
var deserializeAws_restJson1F4vSettings = function (output, context) {
    return {
        MoovPlacement: output.moovPlacement !== undefined && output.moovPlacement !== null ? output.moovPlacement : undefined,
    };
};
var deserializeAws_restJson1FileGroupSettings = function (output, context) {
    return {
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1FileSourceSettings = function (output, context) {
    return {
        Convert608To708: output.convert608To708 !== undefined && output.convert608To708 !== null ? output.convert608To708 : undefined,
        Framerate: output.framerate !== undefined && output.framerate !== null
            ? deserializeAws_restJson1CaptionSourceFramerate(output.framerate, context)
            : undefined,
        SourceFile: output.sourceFile !== undefined && output.sourceFile !== null ? output.sourceFile : undefined,
        TimeDelta: output.timeDelta !== undefined && output.timeDelta !== null ? output.timeDelta : undefined,
    };
};
var deserializeAws_restJson1FrameCaptureSettings = function (output, context) {
    return {
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        MaxCaptures: output.maxCaptures !== undefined && output.maxCaptures !== null ? output.maxCaptures : undefined,
        Quality: output.quality !== undefined && output.quality !== null ? output.quality : undefined,
    };
};
var deserializeAws_restJson1H264QvbrSettings = function (output, context) {
    return {
        MaxAverageBitrate: output.maxAverageBitrate !== undefined && output.maxAverageBitrate !== null
            ? output.maxAverageBitrate
            : undefined,
        QvbrQualityLevel: output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null ? output.qvbrQualityLevel : undefined,
        QvbrQualityLevelFineTune: output.qvbrQualityLevelFineTune !== undefined && output.qvbrQualityLevelFineTune !== null
            ? output.qvbrQualityLevelFineTune
            : undefined,
    };
};
var deserializeAws_restJson1H264Settings = function (output, context) {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodecLevel: output.codecLevel !== undefined && output.codecLevel !== null ? output.codecLevel : undefined,
        CodecProfile: output.codecProfile !== undefined && output.codecProfile !== null ? output.codecProfile : undefined,
        DynamicSubGop: output.dynamicSubGop !== undefined && output.dynamicSubGop !== null ? output.dynamicSubGop : undefined,
        EntropyEncoding: output.entropyEncoding !== undefined && output.entropyEncoding !== null ? output.entropyEncoding : undefined,
        FieldEncoding: output.fieldEncoding !== undefined && output.fieldEncoding !== null ? output.fieldEncoding : undefined,
        FlickerAdaptiveQuantization: output.flickerAdaptiveQuantization !== undefined && output.flickerAdaptiveQuantization !== null
            ? output.flickerAdaptiveQuantization
            : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopBReference: output.gopBReference !== undefined && output.gopBReference !== null ? output.gopBReference : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        HrdBufferInitialFillPercentage: output.hrdBufferInitialFillPercentage !== undefined && output.hrdBufferInitialFillPercentage !== null
            ? output.hrdBufferInitialFillPercentage
            : undefined,
        HrdBufferSize: output.hrdBufferSize !== undefined && output.hrdBufferSize !== null ? output.hrdBufferSize : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MinIInterval: output.minIInterval !== undefined && output.minIInterval !== null ? output.minIInterval : undefined,
        NumberBFramesBetweenReferenceFrames: output.numberBFramesBetweenReferenceFrames !== undefined && output.numberBFramesBetweenReferenceFrames !== null
            ? output.numberBFramesBetweenReferenceFrames
            : undefined,
        NumberReferenceFrames: output.numberReferenceFrames !== undefined && output.numberReferenceFrames !== null
            ? output.numberReferenceFrames
            : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
        QvbrSettings: output.qvbrSettings !== undefined && output.qvbrSettings !== null
            ? deserializeAws_restJson1H264QvbrSettings(output.qvbrSettings, context)
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        RepeatPps: output.repeatPps !== undefined && output.repeatPps !== null ? output.repeatPps : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SceneChangeDetect: output.sceneChangeDetect !== undefined && output.sceneChangeDetect !== null
            ? output.sceneChangeDetect
            : undefined,
        Slices: output.slices !== undefined && output.slices !== null ? output.slices : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        Softness: output.softness !== undefined && output.softness !== null ? output.softness : undefined,
        SpatialAdaptiveQuantization: output.spatialAdaptiveQuantization !== undefined && output.spatialAdaptiveQuantization !== null
            ? output.spatialAdaptiveQuantization
            : undefined,
        Syntax: output.syntax !== undefined && output.syntax !== null ? output.syntax : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
        TemporalAdaptiveQuantization: output.temporalAdaptiveQuantization !== undefined && output.temporalAdaptiveQuantization !== null
            ? output.temporalAdaptiveQuantization
            : undefined,
        UnregisteredSeiTimecode: output.unregisteredSeiTimecode !== undefined && output.unregisteredSeiTimecode !== null
            ? output.unregisteredSeiTimecode
            : undefined,
    };
};
var deserializeAws_restJson1H265QvbrSettings = function (output, context) {
    return {
        MaxAverageBitrate: output.maxAverageBitrate !== undefined && output.maxAverageBitrate !== null
            ? output.maxAverageBitrate
            : undefined,
        QvbrQualityLevel: output.qvbrQualityLevel !== undefined && output.qvbrQualityLevel !== null ? output.qvbrQualityLevel : undefined,
        QvbrQualityLevelFineTune: output.qvbrQualityLevelFineTune !== undefined && output.qvbrQualityLevelFineTune !== null
            ? output.qvbrQualityLevelFineTune
            : undefined,
    };
};
var deserializeAws_restJson1H265Settings = function (output, context) {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        AlternateTransferFunctionSei: output.alternateTransferFunctionSei !== undefined && output.alternateTransferFunctionSei !== null
            ? output.alternateTransferFunctionSei
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodecLevel: output.codecLevel !== undefined && output.codecLevel !== null ? output.codecLevel : undefined,
        CodecProfile: output.codecProfile !== undefined && output.codecProfile !== null ? output.codecProfile : undefined,
        DynamicSubGop: output.dynamicSubGop !== undefined && output.dynamicSubGop !== null ? output.dynamicSubGop : undefined,
        FlickerAdaptiveQuantization: output.flickerAdaptiveQuantization !== undefined && output.flickerAdaptiveQuantization !== null
            ? output.flickerAdaptiveQuantization
            : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopBReference: output.gopBReference !== undefined && output.gopBReference !== null ? output.gopBReference : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        HrdBufferInitialFillPercentage: output.hrdBufferInitialFillPercentage !== undefined && output.hrdBufferInitialFillPercentage !== null
            ? output.hrdBufferInitialFillPercentage
            : undefined,
        HrdBufferSize: output.hrdBufferSize !== undefined && output.hrdBufferSize !== null ? output.hrdBufferSize : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MinIInterval: output.minIInterval !== undefined && output.minIInterval !== null ? output.minIInterval : undefined,
        NumberBFramesBetweenReferenceFrames: output.numberBFramesBetweenReferenceFrames !== undefined && output.numberBFramesBetweenReferenceFrames !== null
            ? output.numberBFramesBetweenReferenceFrames
            : undefined,
        NumberReferenceFrames: output.numberReferenceFrames !== undefined && output.numberReferenceFrames !== null
            ? output.numberReferenceFrames
            : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
        QvbrSettings: output.qvbrSettings !== undefined && output.qvbrSettings !== null
            ? deserializeAws_restJson1H265QvbrSettings(output.qvbrSettings, context)
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        SampleAdaptiveOffsetFilterMode: output.sampleAdaptiveOffsetFilterMode !== undefined && output.sampleAdaptiveOffsetFilterMode !== null
            ? output.sampleAdaptiveOffsetFilterMode
            : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SceneChangeDetect: output.sceneChangeDetect !== undefined && output.sceneChangeDetect !== null
            ? output.sceneChangeDetect
            : undefined,
        Slices: output.slices !== undefined && output.slices !== null ? output.slices : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        SpatialAdaptiveQuantization: output.spatialAdaptiveQuantization !== undefined && output.spatialAdaptiveQuantization !== null
            ? output.spatialAdaptiveQuantization
            : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
        TemporalAdaptiveQuantization: output.temporalAdaptiveQuantization !== undefined && output.temporalAdaptiveQuantization !== null
            ? output.temporalAdaptiveQuantization
            : undefined,
        TemporalIds: output.temporalIds !== undefined && output.temporalIds !== null ? output.temporalIds : undefined,
        Tiles: output.tiles !== undefined && output.tiles !== null ? output.tiles : undefined,
        UnregisteredSeiTimecode: output.unregisteredSeiTimecode !== undefined && output.unregisteredSeiTimecode !== null
            ? output.unregisteredSeiTimecode
            : undefined,
        WriteMp4PackagingType: output.writeMp4PackagingType !== undefined && output.writeMp4PackagingType !== null
            ? output.writeMp4PackagingType
            : undefined,
    };
};
var deserializeAws_restJson1Hdr10Metadata = function (output, context) {
    return {
        BluePrimaryX: output.bluePrimaryX !== undefined && output.bluePrimaryX !== null ? output.bluePrimaryX : undefined,
        BluePrimaryY: output.bluePrimaryY !== undefined && output.bluePrimaryY !== null ? output.bluePrimaryY : undefined,
        GreenPrimaryX: output.greenPrimaryX !== undefined && output.greenPrimaryX !== null ? output.greenPrimaryX : undefined,
        GreenPrimaryY: output.greenPrimaryY !== undefined && output.greenPrimaryY !== null ? output.greenPrimaryY : undefined,
        MaxContentLightLevel: output.maxContentLightLevel !== undefined && output.maxContentLightLevel !== null
            ? output.maxContentLightLevel
            : undefined,
        MaxFrameAverageLightLevel: output.maxFrameAverageLightLevel !== undefined && output.maxFrameAverageLightLevel !== null
            ? output.maxFrameAverageLightLevel
            : undefined,
        MaxLuminance: output.maxLuminance !== undefined && output.maxLuminance !== null ? output.maxLuminance : undefined,
        MinLuminance: output.minLuminance !== undefined && output.minLuminance !== null ? output.minLuminance : undefined,
        RedPrimaryX: output.redPrimaryX !== undefined && output.redPrimaryX !== null ? output.redPrimaryX : undefined,
        RedPrimaryY: output.redPrimaryY !== undefined && output.redPrimaryY !== null ? output.redPrimaryY : undefined,
        WhitePointX: output.whitePointX !== undefined && output.whitePointX !== null ? output.whitePointX : undefined,
        WhitePointY: output.whitePointY !== undefined && output.whitePointY !== null ? output.whitePointY : undefined,
    };
};
var deserializeAws_restJson1HlsAdditionalManifest = function (output, context) {
    return {
        ManifestNameModifier: output.manifestNameModifier !== undefined && output.manifestNameModifier !== null
            ? output.manifestNameModifier
            : undefined,
        SelectedOutputs: output.selectedOutputs !== undefined && output.selectedOutputs !== null
            ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
            : undefined,
    };
};
var deserializeAws_restJson1HlsCaptionLanguageMapping = function (output, context) {
    return {
        CaptionChannel: output.captionChannel !== undefined && output.captionChannel !== null ? output.captionChannel : undefined,
        CustomLanguageCode: output.customLanguageCode !== undefined && output.customLanguageCode !== null
            ? output.customLanguageCode
            : undefined,
        LanguageCode: output.languageCode !== undefined && output.languageCode !== null ? output.languageCode : undefined,
        LanguageDescription: output.languageDescription !== undefined && output.languageDescription !== null
            ? output.languageDescription
            : undefined,
    };
};
var deserializeAws_restJson1HlsEncryptionSettings = function (output, context) {
    return {
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        EncryptionMethod: output.encryptionMethod !== undefined && output.encryptionMethod !== null ? output.encryptionMethod : undefined,
        InitializationVectorInManifest: output.initializationVectorInManifest !== undefined && output.initializationVectorInManifest !== null
            ? output.initializationVectorInManifest
            : undefined,
        OfflineEncrypted: output.offlineEncrypted !== undefined && output.offlineEncrypted !== null ? output.offlineEncrypted : undefined,
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
        StaticKeyProvider: output.staticKeyProvider !== undefined && output.staticKeyProvider !== null
            ? deserializeAws_restJson1StaticKeyProvider(output.staticKeyProvider, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1HlsGroupSettings = function (output, context) {
    return {
        AdMarkers: output.adMarkers !== undefined && output.adMarkers !== null
            ? deserializeAws_restJson1__listOfHlsAdMarkers(output.adMarkers, context)
            : undefined,
        AdditionalManifests: output.additionalManifests !== undefined && output.additionalManifests !== null
            ? deserializeAws_restJson1__listOfHlsAdditionalManifest(output.additionalManifests, context)
            : undefined,
        AudioOnlyHeader: output.audioOnlyHeader !== undefined && output.audioOnlyHeader !== null ? output.audioOnlyHeader : undefined,
        BaseUrl: output.baseUrl !== undefined && output.baseUrl !== null ? output.baseUrl : undefined,
        CaptionLanguageMappings: output.captionLanguageMappings !== undefined && output.captionLanguageMappings !== null
            ? deserializeAws_restJson1__listOfHlsCaptionLanguageMapping(output.captionLanguageMappings, context)
            : undefined,
        CaptionLanguageSetting: output.captionLanguageSetting !== undefined && output.captionLanguageSetting !== null
            ? output.captionLanguageSetting
            : undefined,
        ClientCache: output.clientCache !== undefined && output.clientCache !== null ? output.clientCache : undefined,
        CodecSpecification: output.codecSpecification !== undefined && output.codecSpecification !== null
            ? output.codecSpecification
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
            : undefined,
        DirectoryStructure: output.directoryStructure !== undefined && output.directoryStructure !== null
            ? output.directoryStructure
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1HlsEncryptionSettings(output.encryption, context)
            : undefined,
        ManifestCompression: output.manifestCompression !== undefined && output.manifestCompression !== null
            ? output.manifestCompression
            : undefined,
        ManifestDurationFormat: output.manifestDurationFormat !== undefined && output.manifestDurationFormat !== null
            ? output.manifestDurationFormat
            : undefined,
        MinFinalSegmentLength: output.minFinalSegmentLength !== undefined && output.minFinalSegmentLength !== null
            ? output.minFinalSegmentLength
            : undefined,
        MinSegmentLength: output.minSegmentLength !== undefined && output.minSegmentLength !== null ? output.minSegmentLength : undefined,
        OutputSelection: output.outputSelection !== undefined && output.outputSelection !== null ? output.outputSelection : undefined,
        ProgramDateTime: output.programDateTime !== undefined && output.programDateTime !== null ? output.programDateTime : undefined,
        ProgramDateTimePeriod: output.programDateTimePeriod !== undefined && output.programDateTimePeriod !== null
            ? output.programDateTimePeriod
            : undefined,
        SegmentControl: output.segmentControl !== undefined && output.segmentControl !== null ? output.segmentControl : undefined,
        SegmentLength: output.segmentLength !== undefined && output.segmentLength !== null ? output.segmentLength : undefined,
        SegmentsPerSubdirectory: output.segmentsPerSubdirectory !== undefined && output.segmentsPerSubdirectory !== null
            ? output.segmentsPerSubdirectory
            : undefined,
        StreamInfResolution: output.streamInfResolution !== undefined && output.streamInfResolution !== null
            ? output.streamInfResolution
            : undefined,
        TimedMetadataId3Frame: output.timedMetadataId3Frame !== undefined && output.timedMetadataId3Frame !== null
            ? output.timedMetadataId3Frame
            : undefined,
        TimedMetadataId3Period: output.timedMetadataId3Period !== undefined && output.timedMetadataId3Period !== null
            ? output.timedMetadataId3Period
            : undefined,
        TimestampDeltaMilliseconds: output.timestampDeltaMilliseconds !== undefined && output.timestampDeltaMilliseconds !== null
            ? output.timestampDeltaMilliseconds
            : undefined,
    };
};
var deserializeAws_restJson1HlsSettings = function (output, context) {
    return {
        AudioGroupId: output.audioGroupId !== undefined && output.audioGroupId !== null ? output.audioGroupId : undefined,
        AudioOnlyContainer: output.audioOnlyContainer !== undefined && output.audioOnlyContainer !== null
            ? output.audioOnlyContainer
            : undefined,
        AudioRenditionSets: output.audioRenditionSets !== undefined && output.audioRenditionSets !== null
            ? output.audioRenditionSets
            : undefined,
        AudioTrackType: output.audioTrackType !== undefined && output.audioTrackType !== null ? output.audioTrackType : undefined,
        DescriptiveVideoServiceFlag: output.descriptiveVideoServiceFlag !== undefined && output.descriptiveVideoServiceFlag !== null
            ? output.descriptiveVideoServiceFlag
            : undefined,
        IFrameOnlyManifest: output.iFrameOnlyManifest !== undefined && output.iFrameOnlyManifest !== null
            ? output.iFrameOnlyManifest
            : undefined,
        SegmentModifier: output.segmentModifier !== undefined && output.segmentModifier !== null ? output.segmentModifier : undefined,
    };
};
var deserializeAws_restJson1HopDestination = function (output, context) {
    return {
        Priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        Queue: output.queue !== undefined && output.queue !== null ? output.queue : undefined,
        WaitMinutes: output.waitMinutes !== undefined && output.waitMinutes !== null ? output.waitMinutes : undefined,
    };
};
var deserializeAws_restJson1Id3Insertion = function (output, context) {
    return {
        Id3: output.id3 !== undefined && output.id3 !== null ? output.id3 : undefined,
        Timecode: output.timecode !== undefined && output.timecode !== null ? output.timecode : undefined,
    };
};
var deserializeAws_restJson1ImageInserter = function (output, context) {
    return {
        InsertableImages: output.insertableImages !== undefined && output.insertableImages !== null
            ? deserializeAws_restJson1__listOfInsertableImage(output.insertableImages, context)
            : undefined,
    };
};
var deserializeAws_restJson1ImscDestinationSettings = function (output, context) {
    return {
        StylePassthrough: output.stylePassthrough !== undefined && output.stylePassthrough !== null ? output.stylePassthrough : undefined,
    };
};
var deserializeAws_restJson1Input = function (output, context) {
    return {
        AudioSelectorGroups: output.audioSelectorGroups !== undefined && output.audioSelectorGroups !== null
            ? deserializeAws_restJson1__mapOfAudioSelectorGroup(output.audioSelectorGroups, context)
            : undefined,
        AudioSelectors: output.audioSelectors !== undefined && output.audioSelectors !== null
            ? deserializeAws_restJson1__mapOfAudioSelector(output.audioSelectors, context)
            : undefined,
        CaptionSelectors: output.captionSelectors !== undefined && output.captionSelectors !== null
            ? deserializeAws_restJson1__mapOfCaptionSelector(output.captionSelectors, context)
            : undefined,
        Crop: output.crop !== undefined && output.crop !== null
            ? deserializeAws_restJson1Rectangle(output.crop, context)
            : undefined,
        DeblockFilter: output.deblockFilter !== undefined && output.deblockFilter !== null ? output.deblockFilter : undefined,
        DecryptionSettings: output.decryptionSettings !== undefined && output.decryptionSettings !== null
            ? deserializeAws_restJson1InputDecryptionSettings(output.decryptionSettings, context)
            : undefined,
        DenoiseFilter: output.denoiseFilter !== undefined && output.denoiseFilter !== null ? output.denoiseFilter : undefined,
        FileInput: output.fileInput !== undefined && output.fileInput !== null ? output.fileInput : undefined,
        FilterEnable: output.filterEnable !== undefined && output.filterEnable !== null ? output.filterEnable : undefined,
        FilterStrength: output.filterStrength !== undefined && output.filterStrength !== null ? output.filterStrength : undefined,
        ImageInserter: output.imageInserter !== undefined && output.imageInserter !== null
            ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
            : undefined,
        InputClippings: output.inputClippings !== undefined && output.inputClippings !== null
            ? deserializeAws_restJson1__listOfInputClipping(output.inputClippings, context)
            : undefined,
        InputScanType: output.inputScanType !== undefined && output.inputScanType !== null ? output.inputScanType : undefined,
        Position: output.position !== undefined && output.position !== null
            ? deserializeAws_restJson1Rectangle(output.position, context)
            : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        PsiControl: output.psiControl !== undefined && output.psiControl !== null ? output.psiControl : undefined,
        SupplementalImps: output.supplementalImps !== undefined && output.supplementalImps !== null
            ? deserializeAws_restJson1__listOf__stringPatternS3ASSETMAPXml(output.supplementalImps, context)
            : undefined,
        TimecodeSource: output.timecodeSource !== undefined && output.timecodeSource !== null ? output.timecodeSource : undefined,
        TimecodeStart: output.timecodeStart !== undefined && output.timecodeStart !== null ? output.timecodeStart : undefined,
        VideoSelector: output.videoSelector !== undefined && output.videoSelector !== null
            ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
            : undefined,
    };
};
var deserializeAws_restJson1InputClipping = function (output, context) {
    return {
        EndTimecode: output.endTimecode !== undefined && output.endTimecode !== null ? output.endTimecode : undefined,
        StartTimecode: output.startTimecode !== undefined && output.startTimecode !== null ? output.startTimecode : undefined,
    };
};
var deserializeAws_restJson1InputDecryptionSettings = function (output, context) {
    return {
        DecryptionMode: output.decryptionMode !== undefined && output.decryptionMode !== null ? output.decryptionMode : undefined,
        EncryptedDecryptionKey: output.encryptedDecryptionKey !== undefined && output.encryptedDecryptionKey !== null
            ? output.encryptedDecryptionKey
            : undefined,
        InitializationVector: output.initializationVector !== undefined && output.initializationVector !== null
            ? output.initializationVector
            : undefined,
        KmsKeyRegion: output.kmsKeyRegion !== undefined && output.kmsKeyRegion !== null ? output.kmsKeyRegion : undefined,
    };
};
var deserializeAws_restJson1InputTemplate = function (output, context) {
    return {
        AudioSelectorGroups: output.audioSelectorGroups !== undefined && output.audioSelectorGroups !== null
            ? deserializeAws_restJson1__mapOfAudioSelectorGroup(output.audioSelectorGroups, context)
            : undefined,
        AudioSelectors: output.audioSelectors !== undefined && output.audioSelectors !== null
            ? deserializeAws_restJson1__mapOfAudioSelector(output.audioSelectors, context)
            : undefined,
        CaptionSelectors: output.captionSelectors !== undefined && output.captionSelectors !== null
            ? deserializeAws_restJson1__mapOfCaptionSelector(output.captionSelectors, context)
            : undefined,
        Crop: output.crop !== undefined && output.crop !== null
            ? deserializeAws_restJson1Rectangle(output.crop, context)
            : undefined,
        DeblockFilter: output.deblockFilter !== undefined && output.deblockFilter !== null ? output.deblockFilter : undefined,
        DenoiseFilter: output.denoiseFilter !== undefined && output.denoiseFilter !== null ? output.denoiseFilter : undefined,
        FilterEnable: output.filterEnable !== undefined && output.filterEnable !== null ? output.filterEnable : undefined,
        FilterStrength: output.filterStrength !== undefined && output.filterStrength !== null ? output.filterStrength : undefined,
        ImageInserter: output.imageInserter !== undefined && output.imageInserter !== null
            ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
            : undefined,
        InputClippings: output.inputClippings !== undefined && output.inputClippings !== null
            ? deserializeAws_restJson1__listOfInputClipping(output.inputClippings, context)
            : undefined,
        InputScanType: output.inputScanType !== undefined && output.inputScanType !== null ? output.inputScanType : undefined,
        Position: output.position !== undefined && output.position !== null
            ? deserializeAws_restJson1Rectangle(output.position, context)
            : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        PsiControl: output.psiControl !== undefined && output.psiControl !== null ? output.psiControl : undefined,
        TimecodeSource: output.timecodeSource !== undefined && output.timecodeSource !== null ? output.timecodeSource : undefined,
        TimecodeStart: output.timecodeStart !== undefined && output.timecodeStart !== null ? output.timecodeStart : undefined,
        VideoSelector: output.videoSelector !== undefined && output.videoSelector !== null
            ? deserializeAws_restJson1VideoSelector(output.videoSelector, context)
            : undefined,
    };
};
var deserializeAws_restJson1InsertableImage = function (output, context) {
    return {
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        FadeIn: output.fadeIn !== undefined && output.fadeIn !== null ? output.fadeIn : undefined,
        FadeOut: output.fadeOut !== undefined && output.fadeOut !== null ? output.fadeOut : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        ImageInserterInput: output.imageInserterInput !== undefined && output.imageInserterInput !== null
            ? output.imageInserterInput
            : undefined,
        ImageX: output.imageX !== undefined && output.imageX !== null ? output.imageX : undefined,
        ImageY: output.imageY !== undefined && output.imageY !== null ? output.imageY : undefined,
        Layer: output.layer !== undefined && output.layer !== null ? output.layer : undefined,
        Opacity: output.opacity !== undefined && output.opacity !== null ? output.opacity : undefined,
        StartTime: output.startTime !== undefined && output.startTime !== null ? output.startTime : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
var deserializeAws_restJson1Job = function (output, context) {
    return {
        AccelerationSettings: output.accelerationSettings !== undefined && output.accelerationSettings !== null
            ? deserializeAws_restJson1AccelerationSettings(output.accelerationSettings, context)
            : undefined,
        AccelerationStatus: output.accelerationStatus !== undefined && output.accelerationStatus !== null
            ? output.accelerationStatus
            : undefined,
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        BillingTagsSource: output.billingTagsSource !== undefined && output.billingTagsSource !== null
            ? output.billingTagsSource
            : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        CurrentPhase: output.currentPhase !== undefined && output.currentPhase !== null ? output.currentPhase : undefined,
        ErrorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        ErrorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        HopDestinations: output.hopDestinations !== undefined && output.hopDestinations !== null
            ? deserializeAws_restJson1__listOfHopDestination(output.hopDestinations, context)
            : undefined,
        Id: output.id !== undefined && output.id !== null ? output.id : undefined,
        JobPercentComplete: output.jobPercentComplete !== undefined && output.jobPercentComplete !== null
            ? output.jobPercentComplete
            : undefined,
        JobTemplate: output.jobTemplate !== undefined && output.jobTemplate !== null ? output.jobTemplate : undefined,
        Messages: output.messages !== undefined && output.messages !== null
            ? deserializeAws_restJson1JobMessages(output.messages, context)
            : undefined,
        OutputGroupDetails: output.outputGroupDetails !== undefined && output.outputGroupDetails !== null
            ? deserializeAws_restJson1__listOfOutputGroupDetail(output.outputGroupDetails, context)
            : undefined,
        Priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        Queue: output.queue !== undefined && output.queue !== null ? output.queue : undefined,
        QueueTransitions: output.queueTransitions !== undefined && output.queueTransitions !== null
            ? deserializeAws_restJson1__listOfQueueTransition(output.queueTransitions, context)
            : undefined,
        RetryCount: output.retryCount !== undefined && output.retryCount !== null ? output.retryCount : undefined,
        Role: output.role !== undefined && output.role !== null ? output.role : undefined,
        Settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_restJson1JobSettings(output.settings, context)
            : undefined,
        SimulateReservedQueue: output.simulateReservedQueue !== undefined && output.simulateReservedQueue !== null
            ? output.simulateReservedQueue
            : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
        StatusUpdateInterval: output.statusUpdateInterval !== undefined && output.statusUpdateInterval !== null
            ? output.statusUpdateInterval
            : undefined,
        Timing: output.timing !== undefined && output.timing !== null
            ? deserializeAws_restJson1Timing(output.timing, context)
            : undefined,
        UserMetadata: output.userMetadata !== undefined && output.userMetadata !== null
            ? deserializeAws_restJson1__mapOf__string(output.userMetadata, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobMessages = function (output, context) {
    return {
        Info: output.info !== undefined && output.info !== null
            ? deserializeAws_restJson1__listOf__string(output.info, context)
            : undefined,
        Warning: output.warning !== undefined && output.warning !== null
            ? deserializeAws_restJson1__listOf__string(output.warning, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobSettings = function (output, context) {
    return {
        AdAvailOffset: output.adAvailOffset !== undefined && output.adAvailOffset !== null ? output.adAvailOffset : undefined,
        AvailBlanking: output.availBlanking !== undefined && output.availBlanking !== null
            ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
            : undefined,
        Esam: output.esam !== undefined && output.esam !== null
            ? deserializeAws_restJson1EsamSettings(output.esam, context)
            : undefined,
        Inputs: output.inputs !== undefined && output.inputs !== null
            ? deserializeAws_restJson1__listOfInput(output.inputs, context)
            : undefined,
        KantarWatermark: output.kantarWatermark !== undefined && output.kantarWatermark !== null
            ? deserializeAws_restJson1KantarWatermarkSettings(output.kantarWatermark, context)
            : undefined,
        MotionImageInserter: output.motionImageInserter !== undefined && output.motionImageInserter !== null
            ? deserializeAws_restJson1MotionImageInserter(output.motionImageInserter, context)
            : undefined,
        NielsenConfiguration: output.nielsenConfiguration !== undefined && output.nielsenConfiguration !== null
            ? deserializeAws_restJson1NielsenConfiguration(output.nielsenConfiguration, context)
            : undefined,
        NielsenNonLinearWatermark: output.nielsenNonLinearWatermark !== undefined && output.nielsenNonLinearWatermark !== null
            ? deserializeAws_restJson1NielsenNonLinearWatermarkSettings(output.nielsenNonLinearWatermark, context)
            : undefined,
        OutputGroups: output.outputGroups !== undefined && output.outputGroups !== null
            ? deserializeAws_restJson1__listOfOutputGroup(output.outputGroups, context)
            : undefined,
        TimecodeConfig: output.timecodeConfig !== undefined && output.timecodeConfig !== null
            ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
            : undefined,
        TimedMetadataInsertion: output.timedMetadataInsertion !== undefined && output.timedMetadataInsertion !== null
            ? deserializeAws_restJson1TimedMetadataInsertion(output.timedMetadataInsertion, context)
            : undefined,
    };
};
var deserializeAws_restJson1JobTemplate = function (output, context) {
    return {
        AccelerationSettings: output.accelerationSettings !== undefined && output.accelerationSettings !== null
            ? deserializeAws_restJson1AccelerationSettings(output.accelerationSettings, context)
            : undefined,
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Category: output.category !== undefined && output.category !== null ? output.category : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        HopDestinations: output.hopDestinations !== undefined && output.hopDestinations !== null
            ? deserializeAws_restJson1__listOfHopDestination(output.hopDestinations, context)
            : undefined,
        LastUpdated: output.lastUpdated !== undefined && output.lastUpdated !== null
            ? new Date(Math.round(output.lastUpdated * 1000))
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
        Queue: output.queue !== undefined && output.queue !== null ? output.queue : undefined,
        Settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_restJson1JobTemplateSettings(output.settings, context)
            : undefined,
        StatusUpdateInterval: output.statusUpdateInterval !== undefined && output.statusUpdateInterval !== null
            ? output.statusUpdateInterval
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1JobTemplateSettings = function (output, context) {
    return {
        AdAvailOffset: output.adAvailOffset !== undefined && output.adAvailOffset !== null ? output.adAvailOffset : undefined,
        AvailBlanking: output.availBlanking !== undefined && output.availBlanking !== null
            ? deserializeAws_restJson1AvailBlanking(output.availBlanking, context)
            : undefined,
        Esam: output.esam !== undefined && output.esam !== null
            ? deserializeAws_restJson1EsamSettings(output.esam, context)
            : undefined,
        Inputs: output.inputs !== undefined && output.inputs !== null
            ? deserializeAws_restJson1__listOfInputTemplate(output.inputs, context)
            : undefined,
        KantarWatermark: output.kantarWatermark !== undefined && output.kantarWatermark !== null
            ? deserializeAws_restJson1KantarWatermarkSettings(output.kantarWatermark, context)
            : undefined,
        MotionImageInserter: output.motionImageInserter !== undefined && output.motionImageInserter !== null
            ? deserializeAws_restJson1MotionImageInserter(output.motionImageInserter, context)
            : undefined,
        NielsenConfiguration: output.nielsenConfiguration !== undefined && output.nielsenConfiguration !== null
            ? deserializeAws_restJson1NielsenConfiguration(output.nielsenConfiguration, context)
            : undefined,
        NielsenNonLinearWatermark: output.nielsenNonLinearWatermark !== undefined && output.nielsenNonLinearWatermark !== null
            ? deserializeAws_restJson1NielsenNonLinearWatermarkSettings(output.nielsenNonLinearWatermark, context)
            : undefined,
        OutputGroups: output.outputGroups !== undefined && output.outputGroups !== null
            ? deserializeAws_restJson1__listOfOutputGroup(output.outputGroups, context)
            : undefined,
        TimecodeConfig: output.timecodeConfig !== undefined && output.timecodeConfig !== null
            ? deserializeAws_restJson1TimecodeConfig(output.timecodeConfig, context)
            : undefined,
        TimedMetadataInsertion: output.timedMetadataInsertion !== undefined && output.timedMetadataInsertion !== null
            ? deserializeAws_restJson1TimedMetadataInsertion(output.timedMetadataInsertion, context)
            : undefined,
    };
};
var deserializeAws_restJson1KantarWatermarkSettings = function (output, context) {
    return {
        ChannelName: output.channelName !== undefined && output.channelName !== null ? output.channelName : undefined,
        ContentReference: output.contentReference !== undefined && output.contentReference !== null ? output.contentReference : undefined,
        CredentialsSecretName: output.credentialsSecretName !== undefined && output.credentialsSecretName !== null
            ? output.credentialsSecretName
            : undefined,
        FileOffset: output.fileOffset !== undefined && output.fileOffset !== null ? output.fileOffset : undefined,
        KantarLicenseId: output.kantarLicenseId !== undefined && output.kantarLicenseId !== null ? output.kantarLicenseId : undefined,
        KantarServerUrl: output.kantarServerUrl !== undefined && output.kantarServerUrl !== null ? output.kantarServerUrl : undefined,
        LogDestination: output.logDestination !== undefined && output.logDestination !== null ? output.logDestination : undefined,
        Metadata3: output.metadata3 !== undefined && output.metadata3 !== null ? output.metadata3 : undefined,
        Metadata4: output.metadata4 !== undefined && output.metadata4 !== null ? output.metadata4 : undefined,
        Metadata5: output.metadata5 !== undefined && output.metadata5 !== null ? output.metadata5 : undefined,
        Metadata6: output.metadata6 !== undefined && output.metadata6 !== null ? output.metadata6 : undefined,
        Metadata7: output.metadata7 !== undefined && output.metadata7 !== null ? output.metadata7 : undefined,
        Metadata8: output.metadata8 !== undefined && output.metadata8 !== null ? output.metadata8 : undefined,
    };
};
var deserializeAws_restJson1M2tsScte35Esam = function (output, context) {
    return {
        Scte35EsamPid: output.scte35EsamPid !== undefined && output.scte35EsamPid !== null ? output.scte35EsamPid : undefined,
    };
};
var deserializeAws_restJson1M2tsSettings = function (output, context) {
    return {
        AudioBufferModel: output.audioBufferModel !== undefined && output.audioBufferModel !== null ? output.audioBufferModel : undefined,
        AudioDuration: output.audioDuration !== undefined && output.audioDuration !== null ? output.audioDuration : undefined,
        AudioFramesPerPes: output.audioFramesPerPes !== undefined && output.audioFramesPerPes !== null
            ? output.audioFramesPerPes
            : undefined,
        AudioPids: output.audioPids !== undefined && output.audioPids !== null
            ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.audioPids, context)
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        BufferModel: output.bufferModel !== undefined && output.bufferModel !== null ? output.bufferModel : undefined,
        DvbNitSettings: output.dvbNitSettings !== undefined && output.dvbNitSettings !== null
            ? deserializeAws_restJson1DvbNitSettings(output.dvbNitSettings, context)
            : undefined,
        DvbSdtSettings: output.dvbSdtSettings !== undefined && output.dvbSdtSettings !== null
            ? deserializeAws_restJson1DvbSdtSettings(output.dvbSdtSettings, context)
            : undefined,
        DvbSubPids: output.dvbSubPids !== undefined && output.dvbSubPids !== null
            ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.dvbSubPids, context)
            : undefined,
        DvbTdtSettings: output.dvbTdtSettings !== undefined && output.dvbTdtSettings !== null
            ? deserializeAws_restJson1DvbTdtSettings(output.dvbTdtSettings, context)
            : undefined,
        DvbTeletextPid: output.dvbTeletextPid !== undefined && output.dvbTeletextPid !== null ? output.dvbTeletextPid : undefined,
        EbpAudioInterval: output.ebpAudioInterval !== undefined && output.ebpAudioInterval !== null ? output.ebpAudioInterval : undefined,
        EbpPlacement: output.ebpPlacement !== undefined && output.ebpPlacement !== null ? output.ebpPlacement : undefined,
        EsRateInPes: output.esRateInPes !== undefined && output.esRateInPes !== null ? output.esRateInPes : undefined,
        ForceTsVideoEbpOrder: output.forceTsVideoEbpOrder !== undefined && output.forceTsVideoEbpOrder !== null
            ? output.forceTsVideoEbpOrder
            : undefined,
        FragmentTime: output.fragmentTime !== undefined && output.fragmentTime !== null ? output.fragmentTime : undefined,
        MaxPcrInterval: output.maxPcrInterval !== undefined && output.maxPcrInterval !== null ? output.maxPcrInterval : undefined,
        MinEbpInterval: output.minEbpInterval !== undefined && output.minEbpInterval !== null ? output.minEbpInterval : undefined,
        NielsenId3: output.nielsenId3 !== undefined && output.nielsenId3 !== null ? output.nielsenId3 : undefined,
        NullPacketBitrate: output.nullPacketBitrate !== undefined && output.nullPacketBitrate !== null
            ? output.nullPacketBitrate
            : undefined,
        PatInterval: output.patInterval !== undefined && output.patInterval !== null ? output.patInterval : undefined,
        PcrControl: output.pcrControl !== undefined && output.pcrControl !== null ? output.pcrControl : undefined,
        PcrPid: output.pcrPid !== undefined && output.pcrPid !== null ? output.pcrPid : undefined,
        PmtInterval: output.pmtInterval !== undefined && output.pmtInterval !== null ? output.pmtInterval : undefined,
        PmtPid: output.pmtPid !== undefined && output.pmtPid !== null ? output.pmtPid : undefined,
        PrivateMetadataPid: output.privateMetadataPid !== undefined && output.privateMetadataPid !== null
            ? output.privateMetadataPid
            : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        RateMode: output.rateMode !== undefined && output.rateMode !== null ? output.rateMode : undefined,
        Scte35Esam: output.scte35Esam !== undefined && output.scte35Esam !== null
            ? deserializeAws_restJson1M2tsScte35Esam(output.scte35Esam, context)
            : undefined,
        Scte35Pid: output.scte35Pid !== undefined && output.scte35Pid !== null ? output.scte35Pid : undefined,
        Scte35Source: output.scte35Source !== undefined && output.scte35Source !== null ? output.scte35Source : undefined,
        SegmentationMarkers: output.segmentationMarkers !== undefined && output.segmentationMarkers !== null
            ? output.segmentationMarkers
            : undefined,
        SegmentationStyle: output.segmentationStyle !== undefined && output.segmentationStyle !== null
            ? output.segmentationStyle
            : undefined,
        SegmentationTime: output.segmentationTime !== undefined && output.segmentationTime !== null ? output.segmentationTime : undefined,
        TimedMetadataPid: output.timedMetadataPid !== undefined && output.timedMetadataPid !== null ? output.timedMetadataPid : undefined,
        TransportStreamId: output.transportStreamId !== undefined && output.transportStreamId !== null
            ? output.transportStreamId
            : undefined,
        VideoPid: output.videoPid !== undefined && output.videoPid !== null ? output.videoPid : undefined,
    };
};
var deserializeAws_restJson1M3u8Settings = function (output, context) {
    return {
        AudioDuration: output.audioDuration !== undefined && output.audioDuration !== null ? output.audioDuration : undefined,
        AudioFramesPerPes: output.audioFramesPerPes !== undefined && output.audioFramesPerPes !== null
            ? output.audioFramesPerPes
            : undefined,
        AudioPids: output.audioPids !== undefined && output.audioPids !== null
            ? deserializeAws_restJson1__listOf__integerMin32Max8182(output.audioPids, context)
            : undefined,
        MaxPcrInterval: output.maxPcrInterval !== undefined && output.maxPcrInterval !== null ? output.maxPcrInterval : undefined,
        NielsenId3: output.nielsenId3 !== undefined && output.nielsenId3 !== null ? output.nielsenId3 : undefined,
        PatInterval: output.patInterval !== undefined && output.patInterval !== null ? output.patInterval : undefined,
        PcrControl: output.pcrControl !== undefined && output.pcrControl !== null ? output.pcrControl : undefined,
        PcrPid: output.pcrPid !== undefined && output.pcrPid !== null ? output.pcrPid : undefined,
        PmtInterval: output.pmtInterval !== undefined && output.pmtInterval !== null ? output.pmtInterval : undefined,
        PmtPid: output.pmtPid !== undefined && output.pmtPid !== null ? output.pmtPid : undefined,
        PrivateMetadataPid: output.privateMetadataPid !== undefined && output.privateMetadataPid !== null
            ? output.privateMetadataPid
            : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        Scte35Pid: output.scte35Pid !== undefined && output.scte35Pid !== null ? output.scte35Pid : undefined,
        Scte35Source: output.scte35Source !== undefined && output.scte35Source !== null ? output.scte35Source : undefined,
        TimedMetadata: output.timedMetadata !== undefined && output.timedMetadata !== null ? output.timedMetadata : undefined,
        TimedMetadataPid: output.timedMetadataPid !== undefined && output.timedMetadataPid !== null ? output.timedMetadataPid : undefined,
        TransportStreamId: output.transportStreamId !== undefined && output.transportStreamId !== null
            ? output.transportStreamId
            : undefined,
        VideoPid: output.videoPid !== undefined && output.videoPid !== null ? output.videoPid : undefined,
    };
};
var deserializeAws_restJson1MotionImageInserter = function (output, context) {
    return {
        Framerate: output.framerate !== undefined && output.framerate !== null
            ? deserializeAws_restJson1MotionImageInsertionFramerate(output.framerate, context)
            : undefined,
        Input: output.input !== undefined && output.input !== null ? output.input : undefined,
        InsertionMode: output.insertionMode !== undefined && output.insertionMode !== null ? output.insertionMode : undefined,
        Offset: output.offset !== undefined && output.offset !== null
            ? deserializeAws_restJson1MotionImageInsertionOffset(output.offset, context)
            : undefined,
        Playback: output.playback !== undefined && output.playback !== null ? output.playback : undefined,
        StartTime: output.startTime !== undefined && output.startTime !== null ? output.startTime : undefined,
    };
};
var deserializeAws_restJson1MotionImageInsertionFramerate = function (output, context) {
    return {
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
    };
};
var deserializeAws_restJson1MotionImageInsertionOffset = function (output, context) {
    return {
        ImageX: output.imageX !== undefined && output.imageX !== null ? output.imageX : undefined,
        ImageY: output.imageY !== undefined && output.imageY !== null ? output.imageY : undefined,
    };
};
var deserializeAws_restJson1MovSettings = function (output, context) {
    return {
        ClapAtom: output.clapAtom !== undefined && output.clapAtom !== null ? output.clapAtom : undefined,
        CslgAtom: output.cslgAtom !== undefined && output.cslgAtom !== null ? output.cslgAtom : undefined,
        Mpeg2FourCCControl: output.mpeg2FourCCControl !== undefined && output.mpeg2FourCCControl !== null
            ? output.mpeg2FourCCControl
            : undefined,
        PaddingControl: output.paddingControl !== undefined && output.paddingControl !== null ? output.paddingControl : undefined,
        Reference: output.reference !== undefined && output.reference !== null ? output.reference : undefined,
    };
};
var deserializeAws_restJson1Mp2Settings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
var deserializeAws_restJson1Mp3Settings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        VbrQuality: output.vbrQuality !== undefined && output.vbrQuality !== null ? output.vbrQuality : undefined,
    };
};
var deserializeAws_restJson1Mp4Settings = function (output, context) {
    return {
        AudioDuration: output.audioDuration !== undefined && output.audioDuration !== null ? output.audioDuration : undefined,
        CslgAtom: output.cslgAtom !== undefined && output.cslgAtom !== null ? output.cslgAtom : undefined,
        CttsVersion: output.cttsVersion !== undefined && output.cttsVersion !== null ? output.cttsVersion : undefined,
        FreeSpaceBox: output.freeSpaceBox !== undefined && output.freeSpaceBox !== null ? output.freeSpaceBox : undefined,
        MoovPlacement: output.moovPlacement !== undefined && output.moovPlacement !== null ? output.moovPlacement : undefined,
        Mp4MajorBrand: output.mp4MajorBrand !== undefined && output.mp4MajorBrand !== null ? output.mp4MajorBrand : undefined,
    };
};
var deserializeAws_restJson1MpdSettings = function (output, context) {
    return {
        AccessibilityCaptionHints: output.accessibilityCaptionHints !== undefined && output.accessibilityCaptionHints !== null
            ? output.accessibilityCaptionHints
            : undefined,
        AudioDuration: output.audioDuration !== undefined && output.audioDuration !== null ? output.audioDuration : undefined,
        CaptionContainerType: output.captionContainerType !== undefined && output.captionContainerType !== null
            ? output.captionContainerType
            : undefined,
        Scte35Esam: output.scte35Esam !== undefined && output.scte35Esam !== null ? output.scte35Esam : undefined,
        Scte35Source: output.scte35Source !== undefined && output.scte35Source !== null ? output.scte35Source : undefined,
    };
};
var deserializeAws_restJson1Mpeg2Settings = function (output, context) {
    return {
        AdaptiveQuantization: output.adaptiveQuantization !== undefined && output.adaptiveQuantization !== null
            ? output.adaptiveQuantization
            : undefined,
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        CodecLevel: output.codecLevel !== undefined && output.codecLevel !== null ? output.codecLevel : undefined,
        CodecProfile: output.codecProfile !== undefined && output.codecProfile !== null ? output.codecProfile : undefined,
        DynamicSubGop: output.dynamicSubGop !== undefined && output.dynamicSubGop !== null ? output.dynamicSubGop : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopClosedCadence: output.gopClosedCadence !== undefined && output.gopClosedCadence !== null ? output.gopClosedCadence : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        GopSizeUnits: output.gopSizeUnits !== undefined && output.gopSizeUnits !== null ? output.gopSizeUnits : undefined,
        HrdBufferInitialFillPercentage: output.hrdBufferInitialFillPercentage !== undefined && output.hrdBufferInitialFillPercentage !== null
            ? output.hrdBufferInitialFillPercentage
            : undefined,
        HrdBufferSize: output.hrdBufferSize !== undefined && output.hrdBufferSize !== null ? output.hrdBufferSize : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        IntraDcPrecision: output.intraDcPrecision !== undefined && output.intraDcPrecision !== null ? output.intraDcPrecision : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MinIInterval: output.minIInterval !== undefined && output.minIInterval !== null ? output.minIInterval : undefined,
        NumberBFramesBetweenReferenceFrames: output.numberBFramesBetweenReferenceFrames !== undefined && output.numberBFramesBetweenReferenceFrames !== null
            ? output.numberBFramesBetweenReferenceFrames
            : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SceneChangeDetect: output.sceneChangeDetect !== undefined && output.sceneChangeDetect !== null
            ? output.sceneChangeDetect
            : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        Softness: output.softness !== undefined && output.softness !== null ? output.softness : undefined,
        SpatialAdaptiveQuantization: output.spatialAdaptiveQuantization !== undefined && output.spatialAdaptiveQuantization !== null
            ? output.spatialAdaptiveQuantization
            : undefined,
        Syntax: output.syntax !== undefined && output.syntax !== null ? output.syntax : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
        TemporalAdaptiveQuantization: output.temporalAdaptiveQuantization !== undefined && output.temporalAdaptiveQuantization !== null
            ? output.temporalAdaptiveQuantization
            : undefined,
    };
};
var deserializeAws_restJson1MsSmoothAdditionalManifest = function (output, context) {
    return {
        ManifestNameModifier: output.manifestNameModifier !== undefined && output.manifestNameModifier !== null
            ? output.manifestNameModifier
            : undefined,
        SelectedOutputs: output.selectedOutputs !== undefined && output.selectedOutputs !== null
            ? deserializeAws_restJson1__listOf__stringMin1(output.selectedOutputs, context)
            : undefined,
    };
};
var deserializeAws_restJson1MsSmoothEncryptionSettings = function (output, context) {
    return {
        SpekeKeyProvider: output.spekeKeyProvider !== undefined && output.spekeKeyProvider !== null
            ? deserializeAws_restJson1SpekeKeyProvider(output.spekeKeyProvider, context)
            : undefined,
    };
};
var deserializeAws_restJson1MsSmoothGroupSettings = function (output, context) {
    return {
        AdditionalManifests: output.additionalManifests !== undefined && output.additionalManifests !== null
            ? deserializeAws_restJson1__listOfMsSmoothAdditionalManifest(output.additionalManifests, context)
            : undefined,
        AudioDeduplication: output.audioDeduplication !== undefined && output.audioDeduplication !== null
            ? output.audioDeduplication
            : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        DestinationSettings: output.destinationSettings !== undefined && output.destinationSettings !== null
            ? deserializeAws_restJson1DestinationSettings(output.destinationSettings, context)
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1MsSmoothEncryptionSettings(output.encryption, context)
            : undefined,
        FragmentLength: output.fragmentLength !== undefined && output.fragmentLength !== null ? output.fragmentLength : undefined,
        ManifestEncoding: output.manifestEncoding !== undefined && output.manifestEncoding !== null ? output.manifestEncoding : undefined,
    };
};
var deserializeAws_restJson1MxfSettings = function (output, context) {
    return {
        AfdSignaling: output.afdSignaling !== undefined && output.afdSignaling !== null ? output.afdSignaling : undefined,
        Profile: output.profile !== undefined && output.profile !== null ? output.profile : undefined,
    };
};
var deserializeAws_restJson1NexGuardFileMarkerSettings = function (output, context) {
    return {
        License: output.license !== undefined && output.license !== null ? output.license : undefined,
        Payload: output.payload !== undefined && output.payload !== null ? output.payload : undefined,
        Preset: output.preset !== undefined && output.preset !== null ? output.preset : undefined,
        Strength: output.strength !== undefined && output.strength !== null ? output.strength : undefined,
    };
};
var deserializeAws_restJson1NielsenConfiguration = function (output, context) {
    return {
        BreakoutCode: output.breakoutCode !== undefined && output.breakoutCode !== null ? output.breakoutCode : undefined,
        DistributorId: output.distributorId !== undefined && output.distributorId !== null ? output.distributorId : undefined,
    };
};
var deserializeAws_restJson1NielsenNonLinearWatermarkSettings = function (output, context) {
    return {
        ActiveWatermarkProcess: output.activeWatermarkProcess !== undefined && output.activeWatermarkProcess !== null
            ? output.activeWatermarkProcess
            : undefined,
        AdiFilename: output.adiFilename !== undefined && output.adiFilename !== null ? output.adiFilename : undefined,
        AssetId: output.assetId !== undefined && output.assetId !== null ? output.assetId : undefined,
        AssetName: output.assetName !== undefined && output.assetName !== null ? output.assetName : undefined,
        CbetSourceId: output.cbetSourceId !== undefined && output.cbetSourceId !== null ? output.cbetSourceId : undefined,
        EpisodeId: output.episodeId !== undefined && output.episodeId !== null ? output.episodeId : undefined,
        MetadataDestination: output.metadataDestination !== undefined && output.metadataDestination !== null
            ? output.metadataDestination
            : undefined,
        SourceId: output.sourceId !== undefined && output.sourceId !== null ? output.sourceId : undefined,
        SourceWatermarkStatus: output.sourceWatermarkStatus !== undefined && output.sourceWatermarkStatus !== null
            ? output.sourceWatermarkStatus
            : undefined,
        TicServerUrl: output.ticServerUrl !== undefined && output.ticServerUrl !== null ? output.ticServerUrl : undefined,
        UniqueTicPerAudioTrack: output.uniqueTicPerAudioTrack !== undefined && output.uniqueTicPerAudioTrack !== null
            ? output.uniqueTicPerAudioTrack
            : undefined,
    };
};
var deserializeAws_restJson1NoiseReducer = function (output, context) {
    return {
        Filter: output.filter !== undefined && output.filter !== null ? output.filter : undefined,
        FilterSettings: output.filterSettings !== undefined && output.filterSettings !== null
            ? deserializeAws_restJson1NoiseReducerFilterSettings(output.filterSettings, context)
            : undefined,
        SpatialFilterSettings: output.spatialFilterSettings !== undefined && output.spatialFilterSettings !== null
            ? deserializeAws_restJson1NoiseReducerSpatialFilterSettings(output.spatialFilterSettings, context)
            : undefined,
        TemporalFilterSettings: output.temporalFilterSettings !== undefined && output.temporalFilterSettings !== null
            ? deserializeAws_restJson1NoiseReducerTemporalFilterSettings(output.temporalFilterSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1NoiseReducerFilterSettings = function (output, context) {
    return {
        Strength: output.strength !== undefined && output.strength !== null ? output.strength : undefined,
    };
};
var deserializeAws_restJson1NoiseReducerSpatialFilterSettings = function (output, context) {
    return {
        PostFilterSharpenStrength: output.postFilterSharpenStrength !== undefined && output.postFilterSharpenStrength !== null
            ? output.postFilterSharpenStrength
            : undefined,
        Speed: output.speed !== undefined && output.speed !== null ? output.speed : undefined,
        Strength: output.strength !== undefined && output.strength !== null ? output.strength : undefined,
    };
};
var deserializeAws_restJson1NoiseReducerTemporalFilterSettings = function (output, context) {
    return {
        AggressiveMode: output.aggressiveMode !== undefined && output.aggressiveMode !== null ? output.aggressiveMode : undefined,
        PostTemporalSharpening: output.postTemporalSharpening !== undefined && output.postTemporalSharpening !== null
            ? output.postTemporalSharpening
            : undefined,
        Speed: output.speed !== undefined && output.speed !== null ? output.speed : undefined,
        Strength: output.strength !== undefined && output.strength !== null ? output.strength : undefined,
    };
};
var deserializeAws_restJson1OpusSettings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
var deserializeAws_restJson1Output = function (output, context) {
    return {
        AudioDescriptions: output.audioDescriptions !== undefined && output.audioDescriptions !== null
            ? deserializeAws_restJson1__listOfAudioDescription(output.audioDescriptions, context)
            : undefined,
        CaptionDescriptions: output.captionDescriptions !== undefined && output.captionDescriptions !== null
            ? deserializeAws_restJson1__listOfCaptionDescription(output.captionDescriptions, context)
            : undefined,
        ContainerSettings: output.containerSettings !== undefined && output.containerSettings !== null
            ? deserializeAws_restJson1ContainerSettings(output.containerSettings, context)
            : undefined,
        Extension: output.extension !== undefined && output.extension !== null ? output.extension : undefined,
        NameModifier: output.nameModifier !== undefined && output.nameModifier !== null ? output.nameModifier : undefined,
        OutputSettings: output.outputSettings !== undefined && output.outputSettings !== null
            ? deserializeAws_restJson1OutputSettings(output.outputSettings, context)
            : undefined,
        Preset: output.preset !== undefined && output.preset !== null ? output.preset : undefined,
        VideoDescription: output.videoDescription !== undefined && output.videoDescription !== null
            ? deserializeAws_restJson1VideoDescription(output.videoDescription, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputChannelMapping = function (output, context) {
    return {
        InputChannels: output.inputChannels !== undefined && output.inputChannels !== null
            ? deserializeAws_restJson1__listOf__integerMinNegative60Max6(output.inputChannels, context)
            : undefined,
        InputChannelsFineTune: output.inputChannelsFineTune !== undefined && output.inputChannelsFineTune !== null
            ? deserializeAws_restJson1__listOf__doubleMinNegative60Max6(output.inputChannelsFineTune, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputDetail = function (output, context) {
    return {
        DurationInMs: output.durationInMs !== undefined && output.durationInMs !== null ? output.durationInMs : undefined,
        VideoDetails: output.videoDetails !== undefined && output.videoDetails !== null
            ? deserializeAws_restJson1VideoDetail(output.videoDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputGroup = function (output, context) {
    return {
        AutomatedEncodingSettings: output.automatedEncodingSettings !== undefined && output.automatedEncodingSettings !== null
            ? deserializeAws_restJson1AutomatedEncodingSettings(output.automatedEncodingSettings, context)
            : undefined,
        CustomName: output.customName !== undefined && output.customName !== null ? output.customName : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        OutputGroupSettings: output.outputGroupSettings !== undefined && output.outputGroupSettings !== null
            ? deserializeAws_restJson1OutputGroupSettings(output.outputGroupSettings, context)
            : undefined,
        Outputs: output.outputs !== undefined && output.outputs !== null
            ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputGroupDetail = function (output, context) {
    return {
        OutputDetails: output.outputDetails !== undefined && output.outputDetails !== null
            ? deserializeAws_restJson1__listOfOutputDetail(output.outputDetails, context)
            : undefined,
    };
};
var deserializeAws_restJson1OutputGroupSettings = function (output, context) {
    return {
        CmafGroupSettings: output.cmafGroupSettings !== undefined && output.cmafGroupSettings !== null
            ? deserializeAws_restJson1CmafGroupSettings(output.cmafGroupSettings, context)
            : undefined,
        DashIsoGroupSettings: output.dashIsoGroupSettings !== undefined && output.dashIsoGroupSettings !== null
            ? deserializeAws_restJson1DashIsoGroupSettings(output.dashIsoGroupSettings, context)
            : undefined,
        FileGroupSettings: output.fileGroupSettings !== undefined && output.fileGroupSettings !== null
            ? deserializeAws_restJson1FileGroupSettings(output.fileGroupSettings, context)
            : undefined,
        HlsGroupSettings: output.hlsGroupSettings !== undefined && output.hlsGroupSettings !== null
            ? deserializeAws_restJson1HlsGroupSettings(output.hlsGroupSettings, context)
            : undefined,
        MsSmoothGroupSettings: output.msSmoothGroupSettings !== undefined && output.msSmoothGroupSettings !== null
            ? deserializeAws_restJson1MsSmoothGroupSettings(output.msSmoothGroupSettings, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1OutputSettings = function (output, context) {
    return {
        HlsSettings: output.hlsSettings !== undefined && output.hlsSettings !== null
            ? deserializeAws_restJson1HlsSettings(output.hlsSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1PartnerWatermarking = function (output, context) {
    return {
        NexguardFileMarkerSettings: output.nexguardFileMarkerSettings !== undefined && output.nexguardFileMarkerSettings !== null
            ? deserializeAws_restJson1NexGuardFileMarkerSettings(output.nexguardFileMarkerSettings, context)
            : undefined,
    };
};
var deserializeAws_restJson1Preset = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Category: output.category !== undefined && output.category !== null ? output.category : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        LastUpdated: output.lastUpdated !== undefined && output.lastUpdated !== null
            ? new Date(Math.round(output.lastUpdated * 1000))
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Settings: output.settings !== undefined && output.settings !== null
            ? deserializeAws_restJson1PresetSettings(output.settings, context)
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1PresetSettings = function (output, context) {
    return {
        AudioDescriptions: output.audioDescriptions !== undefined && output.audioDescriptions !== null
            ? deserializeAws_restJson1__listOfAudioDescription(output.audioDescriptions, context)
            : undefined,
        CaptionDescriptions: output.captionDescriptions !== undefined && output.captionDescriptions !== null
            ? deserializeAws_restJson1__listOfCaptionDescriptionPreset(output.captionDescriptions, context)
            : undefined,
        ContainerSettings: output.containerSettings !== undefined && output.containerSettings !== null
            ? deserializeAws_restJson1ContainerSettings(output.containerSettings, context)
            : undefined,
        VideoDescription: output.videoDescription !== undefined && output.videoDescription !== null
            ? deserializeAws_restJson1VideoDescription(output.videoDescription, context)
            : undefined,
    };
};
var deserializeAws_restJson1ProresSettings = function (output, context) {
    return {
        CodecProfile: output.codecProfile !== undefined && output.codecProfile !== null ? output.codecProfile : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
    };
};
var deserializeAws_restJson1Queue = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CreatedAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        LastUpdated: output.lastUpdated !== undefined && output.lastUpdated !== null
            ? new Date(Math.round(output.lastUpdated * 1000))
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        PricingPlan: output.pricingPlan !== undefined && output.pricingPlan !== null ? output.pricingPlan : undefined,
        ProgressingJobsCount: output.progressingJobsCount !== undefined && output.progressingJobsCount !== null
            ? output.progressingJobsCount
            : undefined,
        ReservationPlan: output.reservationPlan !== undefined && output.reservationPlan !== null
            ? deserializeAws_restJson1ReservationPlan(output.reservationPlan, context)
            : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
        SubmittedJobsCount: output.submittedJobsCount !== undefined && output.submittedJobsCount !== null
            ? output.submittedJobsCount
            : undefined,
        Type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1QueueTransition = function (output, context) {
    return {
        DestinationQueue: output.destinationQueue !== undefined && output.destinationQueue !== null ? output.destinationQueue : undefined,
        SourceQueue: output.sourceQueue !== undefined && output.sourceQueue !== null ? output.sourceQueue : undefined,
        Timestamp: output.timestamp !== undefined && output.timestamp !== null
            ? new Date(Math.round(output.timestamp * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1Rectangle = function (output, context) {
    return {
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
        X: output.x !== undefined && output.x !== null ? output.x : undefined,
        Y: output.y !== undefined && output.y !== null ? output.y : undefined,
    };
};
var deserializeAws_restJson1RemixSettings = function (output, context) {
    return {
        ChannelMapping: output.channelMapping !== undefined && output.channelMapping !== null
            ? deserializeAws_restJson1ChannelMapping(output.channelMapping, context)
            : undefined,
        ChannelsIn: output.channelsIn !== undefined && output.channelsIn !== null ? output.channelsIn : undefined,
        ChannelsOut: output.channelsOut !== undefined && output.channelsOut !== null ? output.channelsOut : undefined,
    };
};
var deserializeAws_restJson1ReservationPlan = function (output, context) {
    return {
        Commitment: output.commitment !== undefined && output.commitment !== null ? output.commitment : undefined,
        ExpiresAt: output.expiresAt !== undefined && output.expiresAt !== null
            ? new Date(Math.round(output.expiresAt * 1000))
            : undefined,
        PurchasedAt: output.purchasedAt !== undefined && output.purchasedAt !== null
            ? new Date(Math.round(output.purchasedAt * 1000))
            : undefined,
        RenewalType: output.renewalType !== undefined && output.renewalType !== null ? output.renewalType : undefined,
        ReservedSlots: output.reservedSlots !== undefined && output.reservedSlots !== null ? output.reservedSlots : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1ResourceTags = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3DestinationAccessControl = function (output, context) {
    return {
        CannedAcl: output.cannedAcl !== undefined && output.cannedAcl !== null ? output.cannedAcl : undefined,
    };
};
var deserializeAws_restJson1S3DestinationSettings = function (output, context) {
    return {
        AccessControl: output.accessControl !== undefined && output.accessControl !== null
            ? deserializeAws_restJson1S3DestinationAccessControl(output.accessControl, context)
            : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1S3EncryptionSettings(output.encryption, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3EncryptionSettings = function (output, context) {
    return {
        EncryptionType: output.encryptionType !== undefined && output.encryptionType !== null ? output.encryptionType : undefined,
        KmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    };
};
var deserializeAws_restJson1SccDestinationSettings = function (output, context) {
    return {
        Framerate: output.framerate !== undefined && output.framerate !== null ? output.framerate : undefined,
    };
};
var deserializeAws_restJson1SpekeKeyProvider = function (output, context) {
    return {
        CertificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        SystemIds: output.systemIds !== undefined && output.systemIds !== null
            ? deserializeAws_restJson1__listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12(output.systemIds, context)
            : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1SpekeKeyProviderCmaf = function (output, context) {
    return {
        CertificateArn: output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
        DashSignaledSystemIds: output.dashSignaledSystemIds !== undefined && output.dashSignaledSystemIds !== null
            ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(output.dashSignaledSystemIds, context)
            : undefined,
        HlsSignaledSystemIds: output.hlsSignaledSystemIds !== undefined && output.hlsSignaledSystemIds !== null
            ? deserializeAws_restJson1__listOf__stringMin36Max36Pattern09aFAF809aFAF409aFAF409aFAF409aFAF12(output.hlsSignaledSystemIds, context)
            : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1StaticKeyProvider = function (output, context) {
    return {
        KeyFormat: output.keyFormat !== undefined && output.keyFormat !== null ? output.keyFormat : undefined,
        KeyFormatVersions: output.keyFormatVersions !== undefined && output.keyFormatVersions !== null
            ? output.keyFormatVersions
            : undefined,
        StaticKeyValue: output.staticKeyValue !== undefined && output.staticKeyValue !== null ? output.staticKeyValue : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1TeletextDestinationSettings = function (output, context) {
    return {
        PageNumber: output.pageNumber !== undefined && output.pageNumber !== null ? output.pageNumber : undefined,
        PageTypes: output.pageTypes !== undefined && output.pageTypes !== null
            ? deserializeAws_restJson1__listOfTeletextPageType(output.pageTypes, context)
            : undefined,
    };
};
var deserializeAws_restJson1TeletextSourceSettings = function (output, context) {
    return {
        PageNumber: output.pageNumber !== undefined && output.pageNumber !== null ? output.pageNumber : undefined,
    };
};
var deserializeAws_restJson1TimecodeBurnin = function (output, context) {
    return {
        FontSize: output.fontSize !== undefined && output.fontSize !== null ? output.fontSize : undefined,
        Position: output.position !== undefined && output.position !== null ? output.position : undefined,
        Prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    };
};
var deserializeAws_restJson1TimecodeConfig = function (output, context) {
    return {
        Anchor: output.anchor !== undefined && output.anchor !== null ? output.anchor : undefined,
        Source: output.source !== undefined && output.source !== null ? output.source : undefined,
        Start: output.start !== undefined && output.start !== null ? output.start : undefined,
        TimestampOffset: output.timestampOffset !== undefined && output.timestampOffset !== null ? output.timestampOffset : undefined,
    };
};
var deserializeAws_restJson1TimedMetadataInsertion = function (output, context) {
    return {
        Id3Insertions: output.id3Insertions !== undefined && output.id3Insertions !== null
            ? deserializeAws_restJson1__listOfId3Insertion(output.id3Insertions, context)
            : undefined,
    };
};
var deserializeAws_restJson1Timing = function (output, context) {
    return {
        FinishTime: output.finishTime !== undefined && output.finishTime !== null
            ? new Date(Math.round(output.finishTime * 1000))
            : undefined,
        StartTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        SubmitTime: output.submitTime !== undefined && output.submitTime !== null
            ? new Date(Math.round(output.submitTime * 1000))
            : undefined,
    };
};
var deserializeAws_restJson1TrackSourceSettings = function (output, context) {
    return {
        TrackNumber: output.trackNumber !== undefined && output.trackNumber !== null ? output.trackNumber : undefined,
    };
};
var deserializeAws_restJson1TtmlDestinationSettings = function (output, context) {
    return {
        StylePassthrough: output.stylePassthrough !== undefined && output.stylePassthrough !== null ? output.stylePassthrough : undefined,
    };
};
var deserializeAws_restJson1Vc3Settings = function (output, context) {
    return {
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        InterlaceMode: output.interlaceMode !== undefined && output.interlaceMode !== null ? output.interlaceMode : undefined,
        ScanTypeConversionMode: output.scanTypeConversionMode !== undefined && output.scanTypeConversionMode !== null
            ? output.scanTypeConversionMode
            : undefined,
        SlowPal: output.slowPal !== undefined && output.slowPal !== null ? output.slowPal : undefined,
        Telecine: output.telecine !== undefined && output.telecine !== null ? output.telecine : undefined,
        Vc3Class: output.vc3Class !== undefined && output.vc3Class !== null ? output.vc3Class : undefined,
    };
};
var deserializeAws_restJson1VideoCodecSettings = function (output, context) {
    return {
        Av1Settings: output.av1Settings !== undefined && output.av1Settings !== null
            ? deserializeAws_restJson1Av1Settings(output.av1Settings, context)
            : undefined,
        AvcIntraSettings: output.avcIntraSettings !== undefined && output.avcIntraSettings !== null
            ? deserializeAws_restJson1AvcIntraSettings(output.avcIntraSettings, context)
            : undefined,
        Codec: output.codec !== undefined && output.codec !== null ? output.codec : undefined,
        FrameCaptureSettings: output.frameCaptureSettings !== undefined && output.frameCaptureSettings !== null
            ? deserializeAws_restJson1FrameCaptureSettings(output.frameCaptureSettings, context)
            : undefined,
        H264Settings: output.h264Settings !== undefined && output.h264Settings !== null
            ? deserializeAws_restJson1H264Settings(output.h264Settings, context)
            : undefined,
        H265Settings: output.h265Settings !== undefined && output.h265Settings !== null
            ? deserializeAws_restJson1H265Settings(output.h265Settings, context)
            : undefined,
        Mpeg2Settings: output.mpeg2Settings !== undefined && output.mpeg2Settings !== null
            ? deserializeAws_restJson1Mpeg2Settings(output.mpeg2Settings, context)
            : undefined,
        ProresSettings: output.proresSettings !== undefined && output.proresSettings !== null
            ? deserializeAws_restJson1ProresSettings(output.proresSettings, context)
            : undefined,
        Vc3Settings: output.vc3Settings !== undefined && output.vc3Settings !== null
            ? deserializeAws_restJson1Vc3Settings(output.vc3Settings, context)
            : undefined,
        Vp8Settings: output.vp8Settings !== undefined && output.vp8Settings !== null
            ? deserializeAws_restJson1Vp8Settings(output.vp8Settings, context)
            : undefined,
        Vp9Settings: output.vp9Settings !== undefined && output.vp9Settings !== null
            ? deserializeAws_restJson1Vp9Settings(output.vp9Settings, context)
            : undefined,
    };
};
var deserializeAws_restJson1VideoDescription = function (output, context) {
    return {
        AfdSignaling: output.afdSignaling !== undefined && output.afdSignaling !== null ? output.afdSignaling : undefined,
        AntiAlias: output.antiAlias !== undefined && output.antiAlias !== null ? output.antiAlias : undefined,
        CodecSettings: output.codecSettings !== undefined && output.codecSettings !== null
            ? deserializeAws_restJson1VideoCodecSettings(output.codecSettings, context)
            : undefined,
        ColorMetadata: output.colorMetadata !== undefined && output.colorMetadata !== null ? output.colorMetadata : undefined,
        Crop: output.crop !== undefined && output.crop !== null
            ? deserializeAws_restJson1Rectangle(output.crop, context)
            : undefined,
        DropFrameTimecode: output.dropFrameTimecode !== undefined && output.dropFrameTimecode !== null
            ? output.dropFrameTimecode
            : undefined,
        FixedAfd: output.fixedAfd !== undefined && output.fixedAfd !== null ? output.fixedAfd : undefined,
        Height: output.height !== undefined && output.height !== null ? output.height : undefined,
        Position: output.position !== undefined && output.position !== null
            ? deserializeAws_restJson1Rectangle(output.position, context)
            : undefined,
        RespondToAfd: output.respondToAfd !== undefined && output.respondToAfd !== null ? output.respondToAfd : undefined,
        ScalingBehavior: output.scalingBehavior !== undefined && output.scalingBehavior !== null ? output.scalingBehavior : undefined,
        Sharpness: output.sharpness !== undefined && output.sharpness !== null ? output.sharpness : undefined,
        TimecodeInsertion: output.timecodeInsertion !== undefined && output.timecodeInsertion !== null
            ? output.timecodeInsertion
            : undefined,
        VideoPreprocessors: output.videoPreprocessors !== undefined && output.videoPreprocessors !== null
            ? deserializeAws_restJson1VideoPreprocessor(output.videoPreprocessors, context)
            : undefined,
        Width: output.width !== undefined && output.width !== null ? output.width : undefined,
    };
};
var deserializeAws_restJson1VideoDetail = function (output, context) {
    return {
        HeightInPx: output.heightInPx !== undefined && output.heightInPx !== null ? output.heightInPx : undefined,
        WidthInPx: output.widthInPx !== undefined && output.widthInPx !== null ? output.widthInPx : undefined,
    };
};
var deserializeAws_restJson1VideoPreprocessor = function (output, context) {
    return {
        ColorCorrector: output.colorCorrector !== undefined && output.colorCorrector !== null
            ? deserializeAws_restJson1ColorCorrector(output.colorCorrector, context)
            : undefined,
        Deinterlacer: output.deinterlacer !== undefined && output.deinterlacer !== null
            ? deserializeAws_restJson1Deinterlacer(output.deinterlacer, context)
            : undefined,
        DolbyVision: output.dolbyVision !== undefined && output.dolbyVision !== null
            ? deserializeAws_restJson1DolbyVision(output.dolbyVision, context)
            : undefined,
        ImageInserter: output.imageInserter !== undefined && output.imageInserter !== null
            ? deserializeAws_restJson1ImageInserter(output.imageInserter, context)
            : undefined,
        NoiseReducer: output.noiseReducer !== undefined && output.noiseReducer !== null
            ? deserializeAws_restJson1NoiseReducer(output.noiseReducer, context)
            : undefined,
        PartnerWatermarking: output.partnerWatermarking !== undefined && output.partnerWatermarking !== null
            ? deserializeAws_restJson1PartnerWatermarking(output.partnerWatermarking, context)
            : undefined,
        TimecodeBurnin: output.timecodeBurnin !== undefined && output.timecodeBurnin !== null
            ? deserializeAws_restJson1TimecodeBurnin(output.timecodeBurnin, context)
            : undefined,
    };
};
var deserializeAws_restJson1VideoSelector = function (output, context) {
    return {
        AlphaBehavior: output.alphaBehavior !== undefined && output.alphaBehavior !== null ? output.alphaBehavior : undefined,
        ColorSpace: output.colorSpace !== undefined && output.colorSpace !== null ? output.colorSpace : undefined,
        ColorSpaceUsage: output.colorSpaceUsage !== undefined && output.colorSpaceUsage !== null ? output.colorSpaceUsage : undefined,
        Hdr10Metadata: output.hdr10Metadata !== undefined && output.hdr10Metadata !== null
            ? deserializeAws_restJson1Hdr10Metadata(output.hdr10Metadata, context)
            : undefined,
        Pid: output.pid !== undefined && output.pid !== null ? output.pid : undefined,
        ProgramNumber: output.programNumber !== undefined && output.programNumber !== null ? output.programNumber : undefined,
        Rotate: output.rotate !== undefined && output.rotate !== null ? output.rotate : undefined,
        SampleRange: output.sampleRange !== undefined && output.sampleRange !== null ? output.sampleRange : undefined,
    };
};
var deserializeAws_restJson1VorbisSettings = function (output, context) {
    return {
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
        VbrQuality: output.vbrQuality !== undefined && output.vbrQuality !== null ? output.vbrQuality : undefined,
    };
};
var deserializeAws_restJson1Vp8Settings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        HrdBufferSize: output.hrdBufferSize !== undefined && output.hrdBufferSize !== null ? output.hrdBufferSize : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
    };
};
var deserializeAws_restJson1Vp9Settings = function (output, context) {
    return {
        Bitrate: output.bitrate !== undefined && output.bitrate !== null ? output.bitrate : undefined,
        FramerateControl: output.framerateControl !== undefined && output.framerateControl !== null ? output.framerateControl : undefined,
        FramerateConversionAlgorithm: output.framerateConversionAlgorithm !== undefined && output.framerateConversionAlgorithm !== null
            ? output.framerateConversionAlgorithm
            : undefined,
        FramerateDenominator: output.framerateDenominator !== undefined && output.framerateDenominator !== null
            ? output.framerateDenominator
            : undefined,
        FramerateNumerator: output.framerateNumerator !== undefined && output.framerateNumerator !== null
            ? output.framerateNumerator
            : undefined,
        GopSize: output.gopSize !== undefined && output.gopSize !== null ? output.gopSize : undefined,
        HrdBufferSize: output.hrdBufferSize !== undefined && output.hrdBufferSize !== null ? output.hrdBufferSize : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        ParControl: output.parControl !== undefined && output.parControl !== null ? output.parControl : undefined,
        ParDenominator: output.parDenominator !== undefined && output.parDenominator !== null ? output.parDenominator : undefined,
        ParNumerator: output.parNumerator !== undefined && output.parNumerator !== null ? output.parNumerator : undefined,
        QualityTuningLevel: output.qualityTuningLevel !== undefined && output.qualityTuningLevel !== null
            ? output.qualityTuningLevel
            : undefined,
        RateControlMode: output.rateControlMode !== undefined && output.rateControlMode !== null ? output.rateControlMode : undefined,
    };
};
var deserializeAws_restJson1WavSettings = function (output, context) {
    return {
        BitDepth: output.bitDepth !== undefined && output.bitDepth !== null ? output.bitDepth : undefined,
        Channels: output.channels !== undefined && output.channels !== null ? output.channels : undefined,
        Format: output.format !== undefined && output.format !== null ? output.format : undefined,
        SampleRate: output.sampleRate !== undefined && output.sampleRate !== null ? output.sampleRate : undefined,
    };
};
var deserializeAws_restJson1WebvttDestinationSettings = function (output, context) {
    return {
        StylePassthrough: output.stylePassthrough !== undefined && output.stylePassthrough !== null ? output.stylePassthrough : undefined,
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