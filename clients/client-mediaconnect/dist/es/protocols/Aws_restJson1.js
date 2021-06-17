import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AddFlowMediaStreamsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/mediaStreams";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.MediaStreams !== undefined &&
                    input.MediaStreams !== null && {
                    mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
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
export var serializeAws_restJson1AddFlowOutputsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/outputs";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.Outputs !== undefined &&
                    input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) })));
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
export var serializeAws_restJson1AddFlowSourcesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/source";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.Sources !== undefined &&
                    input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) })));
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
export var serializeAws_restJson1AddFlowVpcInterfacesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/vpcInterfaces";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.VpcInterfaces !== undefined &&
                    input.VpcInterfaces !== null && {
                    vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
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
export var serializeAws_restJson1CreateFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvailabilityZone !== undefined &&
                    input.AvailabilityZone !== null && { availabilityZone: input.AvailabilityZone })), (input.Entitlements !== undefined &&
                    input.Entitlements !== null && {
                    entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
                })), (input.MediaStreams !== undefined &&
                    input.MediaStreams !== null && {
                    mediaStreams: serializeAws_restJson1__listOfAddMediaStreamRequest(input.MediaStreams, context),
                })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Outputs !== undefined &&
                    input.Outputs !== null && { outputs: serializeAws_restJson1__listOfAddOutputRequest(input.Outputs, context) })), (input.Source !== undefined &&
                    input.Source !== null && { source: serializeAws_restJson1SetSourceRequest(input.Source, context) })), (input.SourceFailoverConfig !== undefined &&
                    input.SourceFailoverConfig !== null && {
                    sourceFailoverConfig: serializeAws_restJson1FailoverConfig(input.SourceFailoverConfig, context),
                })), (input.Sources !== undefined &&
                    input.Sources !== null && { sources: serializeAws_restJson1__listOfSetSourceRequest(input.Sources, context) })), (input.VpcInterfaces !== undefined &&
                    input.VpcInterfaces !== null && {
                    vpcInterfaces: serializeAws_restJson1__listOfVpcInterfaceRequest(input.VpcInterfaces, context),
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
export var serializeAws_restJson1DeleteFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
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
export var serializeAws_restJson1DescribeFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
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
export var serializeAws_restJson1DescribeOfferingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/offerings/{OfferingArn}";
                if (input.OfferingArn !== undefined) {
                    labelValue = input.OfferingArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: OfferingArn.");
                    }
                    resolvedPath = resolvedPath.replace("{OfferingArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: OfferingArn.");
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
export var serializeAws_restJson1DescribeReservationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/reservations/{ReservationArn}";
                if (input.ReservationArn !== undefined) {
                    labelValue = input.ReservationArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ReservationArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ReservationArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ReservationArn.");
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
export var serializeAws_restJson1GrantFlowEntitlementsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/entitlements";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.Entitlements !== undefined &&
                    input.Entitlements !== null && {
                    entitlements: serializeAws_restJson1__listOfGrantEntitlementRequest(input.Entitlements, context),
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
export var serializeAws_restJson1ListEntitlementsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/entitlements";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListFlowsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListOfferingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/offerings";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListReservationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/reservations";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1PurchaseOfferingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/offerings/{OfferingArn}";
                if (input.OfferingArn !== undefined) {
                    labelValue = input.OfferingArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: OfferingArn.");
                    }
                    resolvedPath = resolvedPath.replace("{OfferingArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: OfferingArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.ReservationName !== undefined &&
                    input.ReservationName !== null && { reservationName: input.ReservationName })), (input.Start !== undefined && input.Start !== null && { start: input.Start })));
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
export var serializeAws_restJson1RemoveFlowMediaStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.MediaStreamName !== undefined) {
                    labelValue = input.MediaStreamName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
                    }
                    resolvedPath = resolvedPath.replace("{MediaStreamName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: MediaStreamName.");
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
export var serializeAws_restJson1RemoveFlowOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.OutputArn !== undefined) {
                    labelValue = input.OutputArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: OutputArn.");
                    }
                    resolvedPath = resolvedPath.replace("{OutputArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: OutputArn.");
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
export var serializeAws_restJson1RemoveFlowSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.SourceArn !== undefined) {
                    labelValue = input.SourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceArn.");
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
export var serializeAws_restJson1RemoveFlowVpcInterfaceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}/vpcInterfaces/{VpcInterfaceName}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.VpcInterfaceName !== undefined) {
                    labelValue = input.VpcInterfaceName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VpcInterfaceName.");
                    }
                    resolvedPath = resolvedPath.replace("{VpcInterfaceName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VpcInterfaceName.");
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
export var serializeAws_restJson1RevokeFlowEntitlementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
                if (input.EntitlementArn !== undefined) {
                    labelValue = input.EntitlementArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
                    }
                    resolvedPath = resolvedPath.replace("{EntitlementArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: EntitlementArn.");
                }
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
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
export var serializeAws_restJson1StartFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/start/{FlowArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
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
export var serializeAws_restJson1StopFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/flows/stop/{FlowArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
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
                body = JSON.stringify(__assign({}, (input.Tags !== undefined &&
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
export var serializeAws_restJson1UpdateFlowCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign({}, (input.SourceFailoverConfig !== undefined &&
                    input.SourceFailoverConfig !== null && {
                    sourceFailoverConfig: serializeAws_restJson1UpdateFailoverConfig(input.SourceFailoverConfig, context),
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
export var serializeAws_restJson1UpdateFlowEntitlementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
                if (input.EntitlementArn !== undefined) {
                    labelValue = input.EntitlementArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: EntitlementArn.");
                    }
                    resolvedPath = resolvedPath.replace("{EntitlementArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: EntitlementArn.");
                }
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Encryption !== undefined &&
                    input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) })), (input.EntitlementStatus !== undefined &&
                    input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus })), (input.Subscribers !== undefined &&
                    input.Subscribers !== null && {
                    subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
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
export var serializeAws_restJson1UpdateFlowMediaStreamCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/mediaStreams/{MediaStreamName}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.MediaStreamName !== undefined) {
                    labelValue = input.MediaStreamName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: MediaStreamName.");
                    }
                    resolvedPath = resolvedPath.replace("{MediaStreamName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: MediaStreamName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
                    input.Attributes !== null && {
                    attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
                })), (input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.MediaStreamType !== undefined &&
                    input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType })), (input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat })));
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
export var serializeAws_restJson1UpdateFlowOutputCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.OutputArn !== undefined) {
                    labelValue = input.OutputArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: OutputArn.");
                    }
                    resolvedPath = resolvedPath.replace("{OutputArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: OutputArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CidrAllowList !== undefined &&
                    input.CidrAllowList !== null && {
                    cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
                })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.Encryption !== undefined &&
                    input.Encryption !== null && { encryption: serializeAws_restJson1UpdateEncryption(input.Encryption, context) })), (input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency })), (input.MediaStreamOutputConfigurations !== undefined &&
                    input.MediaStreamOutputConfigurations !== null && {
                    mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(input.MediaStreamOutputConfigurations, context),
                })), (input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency })), (input.Port !== undefined && input.Port !== null && { port: input.Port })), (input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol })), (input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId })), (input.SmoothingLatency !== undefined &&
                    input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency })), (input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId })), (input.VpcInterfaceAttachment !== undefined &&
                    input.VpcInterfaceAttachment !== null && {
                    vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
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
export var serializeAws_restJson1UpdateFlowSourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
                if (input.FlowArn !== undefined) {
                    labelValue = input.FlowArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FlowArn.");
                    }
                    resolvedPath = resolvedPath.replace("{FlowArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FlowArn.");
                }
                if (input.SourceArn !== undefined) {
                    labelValue = input.SourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: SourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{SourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: SourceArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Decryption !== undefined &&
                    input.Decryption !== null && { decryption: serializeAws_restJson1UpdateEncryption(input.Decryption, context) })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.EntitlementArn !== undefined &&
                    input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn })), (input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency })), (input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer })), (input.MediaStreamSourceConfigurations !== undefined &&
                    input.MediaStreamSourceConfigurations !== null && {
                    mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(input.MediaStreamSourceConfigurations, context),
                })), (input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency })), (input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol })), (input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId })), (input.VpcInterfaceName !== undefined &&
                    input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName })), (input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr })));
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
export var deserializeAws_restJson1AddFlowMediaStreamsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddFlowMediaStreamsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    MediaStreams: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.mediaStreams !== undefined && data.mediaStreams !== null) {
                    contents.MediaStreams = deserializeAws_restJson1__listOfMediaStream(data.mediaStreams, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddFlowMediaStreamsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddFlowOutputsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddFlowOutputsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Outputs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.outputs !== undefined && data.outputs !== null) {
                    contents.Outputs = deserializeAws_restJson1__listOfOutput(data.outputs, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddFlowOutputsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AddFlowOutputs420Exception": return [3 /*break*/, 2];
                    case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception": return [3 /*break*/, 2];
                    case "BadRequestException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AddFlowOutputs420ExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddFlowSourcesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddFlowSourcesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Sources: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.Sources = deserializeAws_restJson1__listOfSource(data.sources, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddFlowSourcesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddFlowVpcInterfacesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddFlowVpcInterfacesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    VpcInterfaces: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.vpcInterfaces !== undefined && data.vpcInterfaces !== null) {
                    contents.VpcInterfaces = deserializeAws_restJson1__listOfVpcInterface(data.vpcInterfaces, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddFlowVpcInterfacesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Flow: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flow !== undefined && data.flow !== null) {
                    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "CreateFlow420Exception": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#CreateFlow420Exception": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1CreateFlow420ExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Flow: undefined,
                    Messages: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flow !== undefined && data.flow !== null) {
                    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
                }
                if (data.messages !== undefined && data.messages !== null) {
                    contents.Messages = deserializeAws_restJson1Messages(data.messages, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeOfferingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeOfferingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Offering: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.offering !== undefined && data.offering !== null) {
                    contents.Offering = deserializeAws_restJson1Offering(data.offering, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeOfferingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeReservationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeReservationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Reservation: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.reservation !== undefined && data.reservation !== null) {
                    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeReservationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 10];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GrantFlowEntitlementsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GrantFlowEntitlementsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Entitlements: undefined,
                    FlowArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.entitlements !== undefined && data.entitlements !== null) {
                    contents.Entitlements = deserializeAws_restJson1__listOfEntitlement(data.entitlements, context);
                }
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GrantFlowEntitlementsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "GrantFlowEntitlements420Exception": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 8];
                    case "NotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListEntitlementsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListEntitlementsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Entitlements: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.entitlements !== undefined && data.entitlements !== null) {
                    contents.Entitlements = deserializeAws_restJson1__listOfListedEntitlement(data.entitlements, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListEntitlementsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFlowsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFlowsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Flows: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flows !== undefined && data.flows !== null) {
                    contents.Flows = deserializeAws_restJson1__listOfListedFlow(data.flows, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFlowsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListOfferingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListOfferingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Offerings: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.offerings !== undefined && data.offerings !== null) {
                    contents.Offerings = deserializeAws_restJson1__listOfOffering(data.offerings, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListOfferingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListReservationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListReservationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Reservations: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.reservations !== undefined && data.reservations !== null) {
                    contents.Reservations = deserializeAws_restJson1__listOfReservation(data.reservations, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListReservationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "ServiceUnavailableException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 8];
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
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PurchaseOfferingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PurchaseOfferingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Reservation: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.reservation !== undefined && data.reservation !== null) {
                    contents.Reservation = deserializeAws_restJson1Reservation(data.reservation, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PurchaseOfferingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveFlowMediaStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveFlowMediaStreamCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    MediaStreamName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.mediaStreamName !== undefined && data.mediaStreamName !== null) {
                    contents.MediaStreamName = data.mediaStreamName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RemoveFlowMediaStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveFlowOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveFlowOutputCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    OutputArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.outputArn !== undefined && data.outputArn !== null) {
                    contents.OutputArn = data.outputArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RemoveFlowOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveFlowSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveFlowSourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    SourceArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.sourceArn !== undefined && data.sourceArn !== null) {
                    contents.SourceArn = data.sourceArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RemoveFlowSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveFlowVpcInterfaceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    NonDeletedNetworkInterfaceIds: undefined,
                    VpcInterfaceName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.nonDeletedNetworkInterfaceIds !== undefined && data.nonDeletedNetworkInterfaceIds !== null) {
                    contents.NonDeletedNetworkInterfaceIds = deserializeAws_restJson1__listOf__string(data.nonDeletedNetworkInterfaceIds, context);
                }
                if (data.vpcInterfaceName !== undefined && data.vpcInterfaceName !== null) {
                    contents.VpcInterfaceName = data.vpcInterfaceName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RemoveFlowVpcInterfaceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RevokeFlowEntitlementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RevokeFlowEntitlementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    EntitlementArn: undefined,
                    FlowArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.entitlementArn !== undefined && data.entitlementArn !== null) {
                    contents.EntitlementArn = data.entitlementArn;
                }
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RevokeFlowEntitlementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StopFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StopFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.Status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StopFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFlowCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Flow: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flow !== undefined && data.flow !== null) {
                    contents.Flow = deserializeAws_restJson1Flow(data.flow, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFlowCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowEntitlementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFlowEntitlementCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Entitlement: undefined,
                    FlowArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.entitlement !== undefined && data.entitlement !== null) {
                    contents.Entitlement = deserializeAws_restJson1Entitlement(data.entitlement, context);
                }
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFlowEntitlementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowMediaStreamCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFlowMediaStreamCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    MediaStream: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.mediaStream !== undefined && data.mediaStream !== null) {
                    contents.MediaStream = deserializeAws_restJson1MediaStream(data.mediaStream, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFlowMediaStreamCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowOutputCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFlowOutputCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Output: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.output !== undefined && data.output !== null) {
                    contents.Output = deserializeAws_restJson1Output(data.output, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFlowOutputCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFlowSourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFlowSourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FlowArn: undefined,
                    Source: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.flowArn !== undefined && data.flowArn !== null) {
                    contents.FlowArn = data.flowArn;
                }
                if (data.source !== undefined && data.source !== null) {
                    contents.Source = deserializeAws_restJson1Source(data.source, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFlowSourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.mediaconnect#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.mediaconnect#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.mediaconnect#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.mediaconnect#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.mediaconnect#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.mediaconnect#TooManyRequestsException": return [3 /*break*/, 12];
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
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1AddFlowOutputs420ExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AddFlowOutputs420Exception",
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
var deserializeAws_restJson1CreateFlow420ExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "CreateFlow420Exception",
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
var deserializeAws_restJson1GrantFlowEntitlements420ExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "GrantFlowEntitlements420Exception",
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
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableException",
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
var serializeAws_restJson1__listOfAddMediaStreamRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AddMediaStreamRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfAddOutputRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AddOutputRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfDestinationConfigurationRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DestinationConfigurationRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfGrantEntitlementRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1GrantEntitlementRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfInputConfigurationRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputConfigurationRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaStreamOutputConfigurationRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MediaStreamSourceConfigurationRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfSetSourceRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SetSourceRequest(entry, context);
    });
};
var serializeAws_restJson1__listOfVpcInterfaceRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1VpcInterfaceRequest(entry, context);
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
var serializeAws_restJson1AddMediaStreamRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Attributes !== undefined &&
        input.Attributes !== null && {
        attributes: serializeAws_restJson1MediaStreamAttributesRequest(input.Attributes, context),
    })), (input.ClockRate !== undefined && input.ClockRate !== null && { clockRate: input.ClockRate })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.MediaStreamId !== undefined && input.MediaStreamId !== null && { mediaStreamId: input.MediaStreamId })), (input.MediaStreamName !== undefined &&
        input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName })), (input.MediaStreamType !== undefined &&
        input.MediaStreamType !== null && { mediaStreamType: input.MediaStreamType })), (input.VideoFormat !== undefined && input.VideoFormat !== null && { videoFormat: input.VideoFormat }));
};
var serializeAws_restJson1AddOutputRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.CidrAllowList !== undefined &&
        input.CidrAllowList !== null && {
        cidrAllowList: serializeAws_restJson1__listOf__string(input.CidrAllowList, context),
    })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Destination !== undefined && input.Destination !== null && { destination: input.Destination })), (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency })), (input.MediaStreamOutputConfigurations !== undefined &&
        input.MediaStreamOutputConfigurations !== null && {
        mediaStreamOutputConfigurations: serializeAws_restJson1__listOfMediaStreamOutputConfigurationRequest(input.MediaStreamOutputConfigurations, context),
    })), (input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Port !== undefined && input.Port !== null && { port: input.Port })), (input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol })), (input.RemoteId !== undefined && input.RemoteId !== null && { remoteId: input.RemoteId })), (input.SmoothingLatency !== undefined &&
        input.SmoothingLatency !== null && { smoothingLatency: input.SmoothingLatency })), (input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId })), (input.VpcInterfaceAttachment !== undefined &&
        input.VpcInterfaceAttachment !== null && {
        vpcInterfaceAttachment: serializeAws_restJson1VpcInterfaceAttachment(input.VpcInterfaceAttachment, context),
    }));
};
var serializeAws_restJson1DestinationConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.DestinationIp !== undefined && input.DestinationIp !== null && { destinationIp: input.DestinationIp })), (input.DestinationPort !== undefined &&
        input.DestinationPort !== null && { destinationPort: input.DestinationPort })), (input.Interface !== undefined &&
        input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }));
};
var serializeAws_restJson1EncodingParametersRequest = function (input, context) {
    return __assign(__assign({}, (input.CompressionFactor !== undefined &&
        input.CompressionFactor !== null && { compressionFactor: input.CompressionFactor })), (input.EncoderProfile !== undefined &&
        input.EncoderProfile !== null && { encoderProfile: input.EncoderProfile }));
};
var serializeAws_restJson1Encryption = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm })), (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId })), (input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType })), (input.Region !== undefined && input.Region !== null && { region: input.Region })), (input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId })), (input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn })), (input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1FailoverConfig = function (input, context) {
    return __assign(__assign({}, (input.RecoveryWindow !== undefined &&
        input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow })), (input.State !== undefined && input.State !== null && { state: input.State }));
};
var serializeAws_restJson1FmtpRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ChannelOrder !== undefined && input.ChannelOrder !== null && { channelOrder: input.ChannelOrder })), (input.Colorimetry !== undefined && input.Colorimetry !== null && { colorimetry: input.Colorimetry })), (input.ExactFramerate !== undefined &&
        input.ExactFramerate !== null && { exactFramerate: input.ExactFramerate })), (input.Par !== undefined && input.Par !== null && { par: input.Par })), (input.Range !== undefined && input.Range !== null && { range: input.Range })), (input.ScanMode !== undefined && input.ScanMode !== null && { scanMode: input.ScanMode })), (input.Tcs !== undefined && input.Tcs !== null && { tcs: input.Tcs }));
};
var serializeAws_restJson1GrantEntitlementRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.DataTransferSubscriberFeePercent !== undefined &&
        input.DataTransferSubscriberFeePercent !== null && {
        dataTransferSubscriberFeePercent: input.DataTransferSubscriberFeePercent,
    })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.Encryption !== undefined &&
        input.Encryption !== null && { encryption: serializeAws_restJson1Encryption(input.Encryption, context) })), (input.EntitlementStatus !== undefined &&
        input.EntitlementStatus !== null && { entitlementStatus: input.EntitlementStatus })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Subscribers !== undefined &&
        input.Subscribers !== null && {
        subscribers: serializeAws_restJson1__listOf__string(input.Subscribers, context),
    }));
};
var serializeAws_restJson1InputConfigurationRequest = function (input, context) {
    return __assign(__assign({}, (input.InputPort !== undefined && input.InputPort !== null && { inputPort: input.InputPort })), (input.Interface !== undefined &&
        input.Interface !== null && { interface: serializeAws_restJson1InterfaceRequest(input.Interface, context) }));
};
var serializeAws_restJson1InterfaceRequest = function (input, context) {
    return __assign({}, (input.Name !== undefined && input.Name !== null && { name: input.Name }));
};
var serializeAws_restJson1MediaStreamAttributesRequest = function (input, context) {
    return __assign(__assign({}, (input.Fmtp !== undefined &&
        input.Fmtp !== null && { fmtp: serializeAws_restJson1FmtpRequest(input.Fmtp, context) })), (input.Lang !== undefined && input.Lang !== null && { lang: input.Lang }));
};
var serializeAws_restJson1MediaStreamOutputConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DestinationConfigurations !== undefined &&
        input.DestinationConfigurations !== null && {
        destinationConfigurations: serializeAws_restJson1__listOfDestinationConfigurationRequest(input.DestinationConfigurations, context),
    })), (input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName })), (input.EncodingParameters !== undefined &&
        input.EncodingParameters !== null && {
        encodingParameters: serializeAws_restJson1EncodingParametersRequest(input.EncodingParameters, context),
    })), (input.MediaStreamName !== undefined &&
        input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }));
};
var serializeAws_restJson1MediaStreamSourceConfigurationRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.EncodingName !== undefined && input.EncodingName !== null && { encodingName: input.EncodingName })), (input.InputConfigurations !== undefined &&
        input.InputConfigurations !== null && {
        inputConfigurations: serializeAws_restJson1__listOfInputConfigurationRequest(input.InputConfigurations, context),
    })), (input.MediaStreamName !== undefined &&
        input.MediaStreamName !== null && { mediaStreamName: input.MediaStreamName }));
};
var serializeAws_restJson1SetSourceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Decryption !== undefined &&
        input.Decryption !== null && { decryption: serializeAws_restJson1Encryption(input.Decryption, context) })), (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.EntitlementArn !== undefined &&
        input.EntitlementArn !== null && { entitlementArn: input.EntitlementArn })), (input.IngestPort !== undefined && input.IngestPort !== null && { ingestPort: input.IngestPort })), (input.MaxBitrate !== undefined && input.MaxBitrate !== null && { maxBitrate: input.MaxBitrate })), (input.MaxLatency !== undefined && input.MaxLatency !== null && { maxLatency: input.MaxLatency })), (input.MaxSyncBuffer !== undefined && input.MaxSyncBuffer !== null && { maxSyncBuffer: input.MaxSyncBuffer })), (input.MediaStreamSourceConfigurations !== undefined &&
        input.MediaStreamSourceConfigurations !== null && {
        mediaStreamSourceConfigurations: serializeAws_restJson1__listOfMediaStreamSourceConfigurationRequest(input.MediaStreamSourceConfigurations, context),
    })), (input.MinLatency !== undefined && input.MinLatency !== null && { minLatency: input.MinLatency })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.Protocol !== undefined && input.Protocol !== null && { protocol: input.Protocol })), (input.StreamId !== undefined && input.StreamId !== null && { streamId: input.StreamId })), (input.VpcInterfaceName !== undefined &&
        input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName })), (input.WhitelistCidr !== undefined && input.WhitelistCidr !== null && { whitelistCidr: input.WhitelistCidr }));
};
var serializeAws_restJson1UpdateEncryption = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Algorithm !== undefined && input.Algorithm !== null && { algorithm: input.Algorithm })), (input.ConstantInitializationVector !== undefined &&
        input.ConstantInitializationVector !== null && {
        constantInitializationVector: input.ConstantInitializationVector,
    })), (input.DeviceId !== undefined && input.DeviceId !== null && { deviceId: input.DeviceId })), (input.KeyType !== undefined && input.KeyType !== null && { keyType: input.KeyType })), (input.Region !== undefined && input.Region !== null && { region: input.Region })), (input.ResourceId !== undefined && input.ResourceId !== null && { resourceId: input.ResourceId })), (input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn })), (input.SecretArn !== undefined && input.SecretArn !== null && { secretArn: input.SecretArn })), (input.Url !== undefined && input.Url !== null && { url: input.Url }));
};
var serializeAws_restJson1UpdateFailoverConfig = function (input, context) {
    return __assign(__assign({}, (input.RecoveryWindow !== undefined &&
        input.RecoveryWindow !== null && { recoveryWindow: input.RecoveryWindow })), (input.State !== undefined && input.State !== null && { state: input.State }));
};
var serializeAws_restJson1VpcInterfaceAttachment = function (input, context) {
    return __assign({}, (input.VpcInterfaceName !== undefined &&
        input.VpcInterfaceName !== null && { vpcInterfaceName: input.VpcInterfaceName }));
};
var serializeAws_restJson1VpcInterfaceRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.NetworkInterfaceType !== undefined &&
        input.NetworkInterfaceType !== null && { networkInterfaceType: input.NetworkInterfaceType })), (input.RoleArn !== undefined && input.RoleArn !== null && { roleArn: input.RoleArn })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1__listOf__string(input.SecurityGroupIds, context),
    })), (input.SubnetId !== undefined && input.SubnetId !== null && { subnetId: input.SubnetId }));
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
var deserializeAws_restJson1__listOfDestinationConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DestinationConfiguration(entry, context);
    });
};
var deserializeAws_restJson1__listOfEntitlement = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Entitlement(entry, context);
    });
};
var deserializeAws_restJson1__listOfInputConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputConfiguration(entry, context);
    });
};
var deserializeAws_restJson1__listOfListedEntitlement = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListedEntitlement(entry, context);
    });
};
var deserializeAws_restJson1__listOfListedFlow = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ListedFlow(entry, context);
    });
};
var deserializeAws_restJson1__listOfMediaStream = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStream(entry, context);
    });
};
var deserializeAws_restJson1__listOfMediaStreamOutputConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStreamOutputConfiguration(entry, context);
    });
};
var deserializeAws_restJson1__listOfMediaStreamSourceConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MediaStreamSourceConfiguration(entry, context);
    });
};
var deserializeAws_restJson1__listOfOffering = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Offering(entry, context);
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
var deserializeAws_restJson1__listOfReservation = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Reservation(entry, context);
    });
};
var deserializeAws_restJson1__listOfSource = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Source(entry, context);
    });
};
var deserializeAws_restJson1__listOfVpcInterface = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VpcInterface(entry, context);
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
var deserializeAws_restJson1DestinationConfiguration = function (output, context) {
    return {
        DestinationIp: output.destinationIp !== undefined && output.destinationIp !== null ? output.destinationIp : undefined,
        DestinationPort: output.destinationPort !== undefined && output.destinationPort !== null ? output.destinationPort : undefined,
        Interface: output.interface !== undefined && output.interface !== null
            ? deserializeAws_restJson1Interface(output.interface, context)
            : undefined,
        OutboundIp: output.outboundIp !== undefined && output.outboundIp !== null ? output.outboundIp : undefined,
    };
};
var deserializeAws_restJson1EncodingParameters = function (output, context) {
    return {
        CompressionFactor: output.compressionFactor !== undefined && output.compressionFactor !== null
            ? output.compressionFactor
            : undefined,
        EncoderProfile: output.encoderProfile !== undefined && output.encoderProfile !== null ? output.encoderProfile : undefined,
    };
};
var deserializeAws_restJson1Encryption = function (output, context) {
    return {
        Algorithm: output.algorithm !== undefined && output.algorithm !== null ? output.algorithm : undefined,
        ConstantInitializationVector: output.constantInitializationVector !== undefined && output.constantInitializationVector !== null
            ? output.constantInitializationVector
            : undefined,
        DeviceId: output.deviceId !== undefined && output.deviceId !== null ? output.deviceId : undefined,
        KeyType: output.keyType !== undefined && output.keyType !== null ? output.keyType : undefined,
        Region: output.region !== undefined && output.region !== null ? output.region : undefined,
        ResourceId: output.resourceId !== undefined && output.resourceId !== null ? output.resourceId : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SecretArn: output.secretArn !== undefined && output.secretArn !== null ? output.secretArn : undefined,
        Url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
var deserializeAws_restJson1Entitlement = function (output, context) {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1Encryption(output.encryption, context)
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        EntitlementStatus: output.entitlementStatus !== undefined && output.entitlementStatus !== null
            ? output.entitlementStatus
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Subscribers: output.subscribers !== undefined && output.subscribers !== null
            ? deserializeAws_restJson1__listOf__string(output.subscribers, context)
            : undefined,
    };
};
var deserializeAws_restJson1FailoverConfig = function (output, context) {
    return {
        RecoveryWindow: output.recoveryWindow !== undefined && output.recoveryWindow !== null ? output.recoveryWindow : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
var deserializeAws_restJson1Flow = function (output, context) {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EgressIp: output.egressIp !== undefined && output.egressIp !== null ? output.egressIp : undefined,
        Entitlements: output.entitlements !== undefined && output.entitlements !== null
            ? deserializeAws_restJson1__listOfEntitlement(output.entitlements, context)
            : undefined,
        FlowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
        MediaStreams: output.mediaStreams !== undefined && output.mediaStreams !== null
            ? deserializeAws_restJson1__listOfMediaStream(output.mediaStreams, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        Outputs: output.outputs !== undefined && output.outputs !== null
            ? deserializeAws_restJson1__listOfOutput(output.outputs, context)
            : undefined,
        Source: output.source !== undefined && output.source !== null
            ? deserializeAws_restJson1Source(output.source, context)
            : undefined,
        SourceFailoverConfig: output.sourceFailoverConfig !== undefined && output.sourceFailoverConfig !== null
            ? deserializeAws_restJson1FailoverConfig(output.sourceFailoverConfig, context)
            : undefined,
        Sources: output.sources !== undefined && output.sources !== null
            ? deserializeAws_restJson1__listOfSource(output.sources, context)
            : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
        VpcInterfaces: output.vpcInterfaces !== undefined && output.vpcInterfaces !== null
            ? deserializeAws_restJson1__listOfVpcInterface(output.vpcInterfaces, context)
            : undefined,
    };
};
var deserializeAws_restJson1Fmtp = function (output, context) {
    return {
        ChannelOrder: output.channelOrder !== undefined && output.channelOrder !== null ? output.channelOrder : undefined,
        Colorimetry: output.colorimetry !== undefined && output.colorimetry !== null ? output.colorimetry : undefined,
        ExactFramerate: output.exactFramerate !== undefined && output.exactFramerate !== null ? output.exactFramerate : undefined,
        Par: output.par !== undefined && output.par !== null ? output.par : undefined,
        Range: output.range !== undefined && output.range !== null ? output.range : undefined,
        ScanMode: output.scanMode !== undefined && output.scanMode !== null ? output.scanMode : undefined,
        Tcs: output.tcs !== undefined && output.tcs !== null ? output.tcs : undefined,
    };
};
var deserializeAws_restJson1InputConfiguration = function (output, context) {
    return {
        InputIp: output.inputIp !== undefined && output.inputIp !== null ? output.inputIp : undefined,
        InputPort: output.inputPort !== undefined && output.inputPort !== null ? output.inputPort : undefined,
        Interface: output.interface !== undefined && output.interface !== null
            ? deserializeAws_restJson1Interface(output.interface, context)
            : undefined,
    };
};
var deserializeAws_restJson1Interface = function (output, context) {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1ListedEntitlement = function (output, context) {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        EntitlementName: output.entitlementName !== undefined && output.entitlementName !== null ? output.entitlementName : undefined,
    };
};
var deserializeAws_restJson1ListedFlow = function (output, context) {
    return {
        AvailabilityZone: output.availabilityZone !== undefined && output.availabilityZone !== null ? output.availabilityZone : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        FlowArn: output.flowArn !== undefined && output.flowArn !== null ? output.flowArn : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SourceType: output.sourceType !== undefined && output.sourceType !== null ? output.sourceType : undefined,
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1MediaStream = function (output, context) {
    return {
        Attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1MediaStreamAttributes(output.attributes, context)
            : undefined,
        ClockRate: output.clockRate !== undefined && output.clockRate !== null ? output.clockRate : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Fmt: output.fmt !== undefined && output.fmt !== null ? output.fmt : undefined,
        MediaStreamId: output.mediaStreamId !== undefined && output.mediaStreamId !== null ? output.mediaStreamId : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
        MediaStreamType: output.mediaStreamType !== undefined && output.mediaStreamType !== null ? output.mediaStreamType : undefined,
        VideoFormat: output.videoFormat !== undefined && output.videoFormat !== null ? output.videoFormat : undefined,
    };
};
var deserializeAws_restJson1MediaStreamAttributes = function (output, context) {
    return {
        Fmtp: output.fmtp !== undefined && output.fmtp !== null
            ? deserializeAws_restJson1Fmtp(output.fmtp, context)
            : undefined,
        Lang: output.lang !== undefined && output.lang !== null ? output.lang : undefined,
    };
};
var deserializeAws_restJson1MediaStreamOutputConfiguration = function (output, context) {
    return {
        DestinationConfigurations: output.destinationConfigurations !== undefined && output.destinationConfigurations !== null
            ? deserializeAws_restJson1__listOfDestinationConfiguration(output.destinationConfigurations, context)
            : undefined,
        EncodingName: output.encodingName !== undefined && output.encodingName !== null ? output.encodingName : undefined,
        EncodingParameters: output.encodingParameters !== undefined && output.encodingParameters !== null
            ? deserializeAws_restJson1EncodingParameters(output.encodingParameters, context)
            : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
    };
};
var deserializeAws_restJson1MediaStreamSourceConfiguration = function (output, context) {
    return {
        EncodingName: output.encodingName !== undefined && output.encodingName !== null ? output.encodingName : undefined,
        InputConfigurations: output.inputConfigurations !== undefined && output.inputConfigurations !== null
            ? deserializeAws_restJson1__listOfInputConfiguration(output.inputConfigurations, context)
            : undefined,
        MediaStreamName: output.mediaStreamName !== undefined && output.mediaStreamName !== null ? output.mediaStreamName : undefined,
    };
};
var deserializeAws_restJson1Messages = function (output, context) {
    return {
        Errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_restJson1__listOf__string(output.errors, context)
            : undefined,
    };
};
var deserializeAws_restJson1Offering = function (output, context) {
    return {
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        OfferingArn: output.offeringArn !== undefined && output.offeringArn !== null ? output.offeringArn : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        PricePerUnit: output.pricePerUnit !== undefined && output.pricePerUnit !== null ? output.pricePerUnit : undefined,
        PriceUnits: output.priceUnits !== undefined && output.priceUnits !== null ? output.priceUnits : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
            : undefined,
    };
};
var deserializeAws_restJson1Output = function (output, context) {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
        Encryption: output.encryption !== undefined && output.encryption !== null
            ? deserializeAws_restJson1Encryption(output.encryption, context)
            : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        ListenerAddress: output.listenerAddress !== undefined && output.listenerAddress !== null ? output.listenerAddress : undefined,
        MediaLiveInputArn: output.mediaLiveInputArn !== undefined && output.mediaLiveInputArn !== null
            ? output.mediaLiveInputArn
            : undefined,
        MediaStreamOutputConfigurations: output.mediaStreamOutputConfigurations !== undefined && output.mediaStreamOutputConfigurations !== null
            ? deserializeAws_restJson1__listOfMediaStreamOutputConfiguration(output.mediaStreamOutputConfigurations, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        OutputArn: output.outputArn !== undefined && output.outputArn !== null ? output.outputArn : undefined,
        Port: output.port !== undefined && output.port !== null ? output.port : undefined,
        Transport: output.transport !== undefined && output.transport !== null
            ? deserializeAws_restJson1Transport(output.transport, context)
            : undefined,
        VpcInterfaceAttachment: output.vpcInterfaceAttachment !== undefined && output.vpcInterfaceAttachment !== null
            ? deserializeAws_restJson1VpcInterfaceAttachment(output.vpcInterfaceAttachment, context)
            : undefined,
    };
};
var deserializeAws_restJson1Reservation = function (output, context) {
    return {
        CurrencyCode: output.currencyCode !== undefined && output.currencyCode !== null ? output.currencyCode : undefined,
        Duration: output.duration !== undefined && output.duration !== null ? output.duration : undefined,
        DurationUnits: output.durationUnits !== undefined && output.durationUnits !== null ? output.durationUnits : undefined,
        End: output.end !== undefined && output.end !== null ? output.end : undefined,
        OfferingArn: output.offeringArn !== undefined && output.offeringArn !== null ? output.offeringArn : undefined,
        OfferingDescription: output.offeringDescription !== undefined && output.offeringDescription !== null
            ? output.offeringDescription
            : undefined,
        PricePerUnit: output.pricePerUnit !== undefined && output.pricePerUnit !== null ? output.pricePerUnit : undefined,
        PriceUnits: output.priceUnits !== undefined && output.priceUnits !== null ? output.priceUnits : undefined,
        ReservationArn: output.reservationArn !== undefined && output.reservationArn !== null ? output.reservationArn : undefined,
        ReservationName: output.reservationName !== undefined && output.reservationName !== null ? output.reservationName : undefined,
        ReservationState: output.reservationState !== undefined && output.reservationState !== null ? output.reservationState : undefined,
        ResourceSpecification: output.resourceSpecification !== undefined && output.resourceSpecification !== null
            ? deserializeAws_restJson1ResourceSpecification(output.resourceSpecification, context)
            : undefined,
        Start: output.start !== undefined && output.start !== null ? output.start : undefined,
    };
};
var deserializeAws_restJson1ResourceSpecification = function (output, context) {
    return {
        ReservedBitrate: output.reservedBitrate !== undefined && output.reservedBitrate !== null ? output.reservedBitrate : undefined,
        ResourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
    };
};
var deserializeAws_restJson1Source = function (output, context) {
    return {
        DataTransferSubscriberFeePercent: output.dataTransferSubscriberFeePercent !== undefined && output.dataTransferSubscriberFeePercent !== null
            ? output.dataTransferSubscriberFeePercent
            : undefined,
        Decryption: output.decryption !== undefined && output.decryption !== null
            ? deserializeAws_restJson1Encryption(output.decryption, context)
            : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        EntitlementArn: output.entitlementArn !== undefined && output.entitlementArn !== null ? output.entitlementArn : undefined,
        IngestIp: output.ingestIp !== undefined && output.ingestIp !== null ? output.ingestIp : undefined,
        IngestPort: output.ingestPort !== undefined && output.ingestPort !== null ? output.ingestPort : undefined,
        MediaStreamSourceConfigurations: output.mediaStreamSourceConfigurations !== undefined && output.mediaStreamSourceConfigurations !== null
            ? deserializeAws_restJson1__listOfMediaStreamSourceConfiguration(output.mediaStreamSourceConfigurations, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        SourceArn: output.sourceArn !== undefined && output.sourceArn !== null ? output.sourceArn : undefined,
        Transport: output.transport !== undefined && output.transport !== null
            ? deserializeAws_restJson1Transport(output.transport, context)
            : undefined,
        VpcInterfaceName: output.vpcInterfaceName !== undefined && output.vpcInterfaceName !== null ? output.vpcInterfaceName : undefined,
        WhitelistCidr: output.whitelistCidr !== undefined && output.whitelistCidr !== null ? output.whitelistCidr : undefined,
    };
};
var deserializeAws_restJson1Transport = function (output, context) {
    return {
        CidrAllowList: output.cidrAllowList !== undefined && output.cidrAllowList !== null
            ? deserializeAws_restJson1__listOf__string(output.cidrAllowList, context)
            : undefined,
        MaxBitrate: output.maxBitrate !== undefined && output.maxBitrate !== null ? output.maxBitrate : undefined,
        MaxLatency: output.maxLatency !== undefined && output.maxLatency !== null ? output.maxLatency : undefined,
        MaxSyncBuffer: output.maxSyncBuffer !== undefined && output.maxSyncBuffer !== null ? output.maxSyncBuffer : undefined,
        MinLatency: output.minLatency !== undefined && output.minLatency !== null ? output.minLatency : undefined,
        Protocol: output.protocol !== undefined && output.protocol !== null ? output.protocol : undefined,
        RemoteId: output.remoteId !== undefined && output.remoteId !== null ? output.remoteId : undefined,
        SmoothingLatency: output.smoothingLatency !== undefined && output.smoothingLatency !== null ? output.smoothingLatency : undefined,
        StreamId: output.streamId !== undefined && output.streamId !== null ? output.streamId : undefined,
    };
};
var deserializeAws_restJson1VpcInterface = function (output, context) {
    return {
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        NetworkInterfaceIds: output.networkInterfaceIds !== undefined && output.networkInterfaceIds !== null
            ? deserializeAws_restJson1__listOf__string(output.networkInterfaceIds, context)
            : undefined,
        NetworkInterfaceType: output.networkInterfaceType !== undefined && output.networkInterfaceType !== null
            ? output.networkInterfaceType
            : undefined,
        RoleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        SecurityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1__listOf__string(output.securityGroupIds, context)
            : undefined,
        SubnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
    };
};
var deserializeAws_restJson1VpcInterfaceAttachment = function (output, context) {
    return {
        VpcInterfaceName: output.vpcInterfaceName !== undefined && output.vpcInterfaceName !== null ? output.vpcInterfaceName : undefined,
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