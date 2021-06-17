import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
export var serializeAws_json1_1CreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.CreateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1CreateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.CreateParameterGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateParameterGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1CreateSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.CreateSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1CreateSubnetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DecreaseReplicationFactorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DecreaseReplicationFactor",
        };
        body = JSON.stringify(serializeAws_json1_1DecreaseReplicationFactorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DeleteCluster",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DeleteParameterGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteParameterGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DeleteSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DeleteSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1DeleteSubnetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeClusters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeClustersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeDefaultParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeDefaultParameters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeDefaultParametersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeEvents",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeEventsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeParameterGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeParameterGroups",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeParameterGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeParameters",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeParametersRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1DescribeSubnetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.DescribeSubnetGroups",
        };
        body = JSON.stringify(serializeAws_json1_1DescribeSubnetGroupsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1IncreaseReplicationFactorCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.IncreaseReplicationFactor",
        };
        body = JSON.stringify(serializeAws_json1_1IncreaseReplicationFactorRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1ListTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.ListTags",
        };
        body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1RebootNodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.RebootNode",
        };
        body = JSON.stringify(serializeAws_json1_1RebootNodeRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.UpdateCluster",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateClusterRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.UpdateParameterGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateParameterGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_1UpdateSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.1",
            "x-amz-target": "AmazonDAXV3.UpdateSubnetGroup",
        };
        body = JSON.stringify(serializeAws_json1_1UpdateSubnetGroupRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_1CreateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateClusterResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 4];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InsufficientClusterCapacityFault": return [3 /*break*/, 6];
                    case "InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidParameterGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#InvalidParameterGroupStateFault": return [3 /*break*/, 12];
                    case "InvalidParameterValueException": return [3 /*break*/, 14];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 14];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 16];
                    case "com.amazonaws.dax#InvalidVPCNetworkStateFault": return [3 /*break*/, 16];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault": return [3 /*break*/, 18];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 20];
                    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 20];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 22];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 22];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 24];
                    case "SubnetGroupNotFoundFault": return [3 /*break*/, 26];
                    case "com.amazonaws.dax#SubnetGroupNotFoundFault": return [3 /*break*/, 26];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 28];
                    case "com.amazonaws.dax#TagQuotaPerResourceExceeded": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1CreateParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateParameterGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ParameterGroupAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ParameterGroupAlreadyExistsFault": return [3 /*break*/, 8];
                    case "ParameterGroupQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#ParameterGroupQuotaExceededFault": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1CreateSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1CreateSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1CreateSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1CreateSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidSubnet": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidSubnet": return [3 /*break*/, 2];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 4];
                    case "SubnetGroupAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#SubnetGroupAlreadyExistsFault": return [3 /*break*/, 6];
                    case "SubnetGroupQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#SubnetGroupQuotaExceededFault": return [3 /*break*/, 8];
                    case "SubnetQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#SubnetQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DecreaseReplicationFactorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DecreaseReplicationFactorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DecreaseReplicationFactorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DecreaseReplicationFactorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "NodeNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#NodeNotFoundFault": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteParameterGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DeleteSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DeleteSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DeleteSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DeleteSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 2];
                    case "SubnetGroupInUseFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#SubnetGroupInUseFault": return [3 /*break*/, 4];
                    case "SubnetGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#SubnetGroupNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupInUseFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeDefaultParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeDefaultParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeDefaultParametersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeDefaultParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeEventsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeEventsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeEventsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeEventsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeParameterGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeParameterGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeParameterGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeParameterGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeParametersResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 6];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1DescribeSubnetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1DescribeSubnetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1DescribeSubnetGroupsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1DescribeSubnetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 2];
                    case "SubnetGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#SubnetGroupNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1IncreaseReplicationFactorCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1IncreaseReplicationFactorCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1IncreaseReplicationFactorResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1IncreaseReplicationFactorCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InsufficientClusterCapacityFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#InvalidVPCNetworkStateFault": return [3 /*break*/, 12];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.dax#NodeQuotaForClusterExceededFault": return [3 /*break*/, 14];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 16];
                    case "com.amazonaws.dax#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 16];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InsufficientClusterCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_1ListTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1ListTagsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1ListTagsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1ListTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidARNFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidARNFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1RebootNodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1RebootNodeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1RebootNodeResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1RebootNodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "NodeNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#NodeNotFoundFault": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1NodeNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1TagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidARNFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidARNFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 14];
                    case "com.amazonaws.dax#TagQuotaPerResourceExceeded": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UntagResourceResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidARNFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidARNFault": return [3 /*break*/, 4];
                    case "InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 12];
                    case "TagNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.dax#TagNotFoundFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidARNFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1TagNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateClusterResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#ClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterGroupStateFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#InvalidParameterGroupStateFault": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 12];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateParameterGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#InvalidParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#ParameterGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_json1_1UpdateSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_1UpdateSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_1UpdateSubnetGroupResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_1UpdateSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidSubnet": return [3 /*break*/, 2];
                    case "com.amazonaws.dax#InvalidSubnet": return [3 /*break*/, 2];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.dax#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 4];
                    case "SubnetGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.dax#SubnetGroupNotFoundFault": return [3 /*break*/, 6];
                    case "SubnetInUse": return [3 /*break*/, 8];
                    case "com.amazonaws.dax#SubnetInUse": return [3 /*break*/, 8];
                    case "SubnetQuotaExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.dax#SubnetQuotaExceededFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_1InvalidSubnetResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetInUseResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_1SubnetQuotaExceededFaultResponse(parsedOutput, context)];
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
var deserializeAws_json1_1ClusterAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterAlreadyExistsFault(body, context);
        contents = __assign({ name: "ClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterNotFoundFault(body, context);
        contents = __assign({ name: "ClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ClusterQuotaForCustomerExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ClusterQuotaForCustomerExceededFault(body, context);
        contents = __assign({ name: "ClusterQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InsufficientClusterCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InsufficientClusterCapacityFault(body, context);
        contents = __assign({ name: "InsufficientClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidARNFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidARNFault(body, context);
        contents = __assign({ name: "InvalidARNFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidClusterStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidClusterStateFault(body, context);
        contents = __assign({ name: "InvalidClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterCombinationException(body, context);
        contents = __assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParameterGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterGroupStateFault(body, context);
        contents = __assign({ name: "InvalidParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidParameterValueException(body, context);
        contents = __assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidSubnetResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidSubnet(body, context);
        contents = __assign({ name: "InvalidSubnet", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1InvalidVPCNetworkStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1InvalidVPCNetworkStateFault(body, context);
        contents = __assign({ name: "InvalidVPCNetworkStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NodeNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NodeNotFoundFault(body, context);
        contents = __assign({ name: "NodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NodeQuotaForClusterExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NodeQuotaForClusterExceededFault(body, context);
        contents = __assign({ name: "NodeQuotaForClusterExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1NodeQuotaForCustomerExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1NodeQuotaForCustomerExceededFault(body, context);
        contents = __assign({ name: "NodeQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ParameterGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ParameterGroupAlreadyExistsFault(body, context);
        contents = __assign({ name: "ParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ParameterGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ParameterGroupNotFoundFault(body, context);
        contents = __assign({ name: "ParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ParameterGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ParameterGroupQuotaExceededFault(body, context);
        contents = __assign({ name: "ParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1ServiceLinkedRoleNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1ServiceLinkedRoleNotFoundFault(body, context);
        contents = __assign({ name: "ServiceLinkedRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetGroupAlreadyExistsFault(body, context);
        contents = __assign({ name: "SubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetGroupInUseFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetGroupInUseFault(body, context);
        contents = __assign({ name: "SubnetGroupInUseFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetGroupNotFoundFault(body, context);
        contents = __assign({ name: "SubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetGroupQuotaExceededFault(body, context);
        contents = __assign({ name: "SubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetInUse(body, context);
        contents = __assign({ name: "SubnetInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1SubnetQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1SubnetQuotaExceededFault(body, context);
        contents = __assign({ name: "SubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagNotFoundFault(body, context);
        contents = __assign({ name: "TagNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_1TagQuotaPerResourceExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_1TagQuotaPerResourceExceeded(body, context);
        contents = __assign({ name: "TagQuotaPerResourceExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_1AvailabilityZoneList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ClusterNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1CreateClusterRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    })), (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn })), (input.NodeType !== undefined && input.NodeType !== null && { NodeType: input.NodeType })), (input.NotificationTopicArn !== undefined &&
        input.NotificationTopicArn !== null && { NotificationTopicArn: input.NotificationTopicArn })), (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.ReplicationFactor !== undefined &&
        input.ReplicationFactor !== null && { ReplicationFactor: input.ReplicationFactor })), (input.SSESpecification !== undefined &&
        input.SSESpecification !== null && {
        SSESpecification: serializeAws_json1_1SSESpecification(input.SSESpecification, context),
    })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    })), (input.SubnetGroupName !== undefined &&
        input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1CreateParameterGroupRequest = function (input, context) {
    return __assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }));
};
var serializeAws_json1_1CreateSubnetGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.SubnetGroupName !== undefined &&
        input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }));
};
var serializeAws_json1_1DecreaseReplicationFactorRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    })), (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName })), (input.NewReplicationFactor !== undefined &&
        input.NewReplicationFactor !== null && { NewReplicationFactor: input.NewReplicationFactor })), (input.NodeIdsToRemove !== undefined &&
        input.NodeIdsToRemove !== null && {
        NodeIdsToRemove: serializeAws_json1_1NodeIdentifierList(input.NodeIdsToRemove, context),
    }));
};
var serializeAws_json1_1DeleteClusterRequest = function (input, context) {
    return __assign({}, (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName }));
};
var serializeAws_json1_1DeleteParameterGroupRequest = function (input, context) {
    return __assign({}, (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName }));
};
var serializeAws_json1_1DeleteSubnetGroupRequest = function (input, context) {
    return __assign({}, (input.SubnetGroupName !== undefined &&
        input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName }));
};
var serializeAws_json1_1DescribeClustersRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ClusterNames !== undefined &&
        input.ClusterNames !== null && {
        ClusterNames: serializeAws_json1_1ClusterNameList(input.ClusterNames, context),
    })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeDefaultParametersRequest = function (input, context) {
    return __assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }));
};
var serializeAws_json1_1DescribeEventsRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Duration !== undefined && input.Duration !== null && { Duration: input.Duration })), (input.EndTime !== undefined &&
        input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) })), (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SourceName !== undefined && input.SourceName !== null && { SourceName: input.SourceName })), (input.SourceType !== undefined && input.SourceType !== null && { SourceType: input.SourceType })), (input.StartTime !== undefined &&
        input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }));
};
var serializeAws_json1_1DescribeParameterGroupsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ParameterGroupNames !== undefined &&
        input.ParameterGroupNames !== null && {
        ParameterGroupNames: serializeAws_json1_1ParameterGroupNameList(input.ParameterGroupNames, context),
    }));
};
var serializeAws_json1_1DescribeParametersRequest = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName })), (input.Source !== undefined && input.Source !== null && { Source: input.Source }));
};
var serializeAws_json1_1DescribeSubnetGroupsRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.SubnetGroupNames !== undefined &&
        input.SubnetGroupNames !== null && {
        SubnetGroupNames: serializeAws_json1_1SubnetGroupNameList(input.SubnetGroupNames, context),
    }));
};
var serializeAws_json1_1IncreaseReplicationFactorRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.AvailabilityZones !== undefined &&
        input.AvailabilityZones !== null && {
        AvailabilityZones: serializeAws_json1_1AvailabilityZoneList(input.AvailabilityZones, context),
    })), (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName })), (input.NewReplicationFactor !== undefined &&
        input.NewReplicationFactor !== null && { NewReplicationFactor: input.NewReplicationFactor }));
};
var serializeAws_json1_1KeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ListTagsRequest = function (input, context) {
    return __assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName }));
};
var serializeAws_json1_1NodeIdentifierList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ParameterGroupNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1ParameterNameValue = function (input, context) {
    return __assign(__assign({}, (input.ParameterName !== undefined && input.ParameterName !== null && { ParameterName: input.ParameterName })), (input.ParameterValue !== undefined &&
        input.ParameterValue !== null && { ParameterValue: input.ParameterValue }));
};
var serializeAws_json1_1ParameterNameValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1ParameterNameValue(entry, context);
    });
};
var serializeAws_json1_1RebootNodeRequest = function (input, context) {
    return __assign(__assign({}, (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName })), (input.NodeId !== undefined && input.NodeId !== null && { NodeId: input.NodeId }));
};
var serializeAws_json1_1SecurityGroupIdentifierList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SSESpecification = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_json1_1SubnetGroupNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1SubnetIdentifierList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_1Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_1TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
var serializeAws_json1_1TagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }));
};
var serializeAws_json1_1UntagResourceRequest = function (input, context) {
    return __assign(__assign({}, (input.ResourceName !== undefined && input.ResourceName !== null && { ResourceName: input.ResourceName })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_1KeyList(input.TagKeys, context) }));
};
var serializeAws_json1_1UpdateClusterRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ClusterName !== undefined && input.ClusterName !== null && { ClusterName: input.ClusterName })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.NotificationTopicArn !== undefined &&
        input.NotificationTopicArn !== null && { NotificationTopicArn: input.NotificationTopicArn })), (input.NotificationTopicStatus !== undefined &&
        input.NotificationTopicStatus !== null && { NotificationTopicStatus: input.NotificationTopicStatus })), (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName })), (input.PreferredMaintenanceWindow !== undefined &&
        input.PreferredMaintenanceWindow !== null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow })), (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIdentifierList(input.SecurityGroupIds, context),
    }));
};
var serializeAws_json1_1UpdateParameterGroupRequest = function (input, context) {
    return __assign(__assign({}, (input.ParameterGroupName !== undefined &&
        input.ParameterGroupName !== null && { ParameterGroupName: input.ParameterGroupName })), (input.ParameterNameValues !== undefined &&
        input.ParameterNameValues !== null && {
        ParameterNameValues: serializeAws_json1_1ParameterNameValueList(input.ParameterNameValues, context),
    }));
};
var serializeAws_json1_1UpdateSubnetGroupRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.SubnetGroupName !== undefined &&
        input.SubnetGroupName !== null && { SubnetGroupName: input.SubnetGroupName })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIdentifierList(input.SubnetIds, context) }));
};
var deserializeAws_json1_1Cluster = function (output, context) {
    return {
        ActiveNodes: output.ActiveNodes !== undefined && output.ActiveNodes !== null ? output.ActiveNodes : undefined,
        ClusterArn: output.ClusterArn !== undefined && output.ClusterArn !== null ? output.ClusterArn : undefined,
        ClusterDiscoveryEndpoint: output.ClusterDiscoveryEndpoint !== undefined && output.ClusterDiscoveryEndpoint !== null
            ? deserializeAws_json1_1Endpoint(output.ClusterDiscoveryEndpoint, context)
            : undefined,
        ClusterName: output.ClusterName !== undefined && output.ClusterName !== null ? output.ClusterName : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IamRoleArn: output.IamRoleArn !== undefined && output.IamRoleArn !== null ? output.IamRoleArn : undefined,
        NodeIdsToRemove: output.NodeIdsToRemove !== undefined && output.NodeIdsToRemove !== null
            ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToRemove, context)
            : undefined,
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Nodes: output.Nodes !== undefined && output.Nodes !== null
            ? deserializeAws_json1_1NodeList(output.Nodes, context)
            : undefined,
        NotificationConfiguration: output.NotificationConfiguration !== undefined && output.NotificationConfiguration !== null
            ? deserializeAws_json1_1NotificationConfiguration(output.NotificationConfiguration, context)
            : undefined,
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroupStatus(output.ParameterGroup, context)
            : undefined,
        PreferredMaintenanceWindow: output.PreferredMaintenanceWindow !== undefined && output.PreferredMaintenanceWindow !== null
            ? output.PreferredMaintenanceWindow
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_1SSEDescription(output.SSEDescription, context)
            : undefined,
        SecurityGroups: output.SecurityGroups !== undefined && output.SecurityGroups !== null
            ? deserializeAws_json1_1SecurityGroupMembershipList(output.SecurityGroups, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null ? output.SubnetGroup : undefined,
        TotalNodes: output.TotalNodes !== undefined && output.TotalNodes !== null ? output.TotalNodes : undefined,
    };
};
var deserializeAws_json1_1ClusterAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ClusterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Cluster(entry, context);
    });
};
var deserializeAws_json1_1ClusterNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ClusterQuotaForCustomerExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1CreateClusterResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateParameterGroupResponse = function (output, context) {
    return {
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1CreateSubnetGroupResponse = function (output, context) {
    return {
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null
            ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1DecreaseReplicationFactorResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteClusterResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1DeleteParameterGroupResponse = function (output, context) {
    return {
        DeletionMessage: output.DeletionMessage !== undefined && output.DeletionMessage !== null ? output.DeletionMessage : undefined,
    };
};
var deserializeAws_json1_1DeleteSubnetGroupResponse = function (output, context) {
    return {
        DeletionMessage: output.DeletionMessage !== undefined && output.DeletionMessage !== null ? output.DeletionMessage : undefined,
    };
};
var deserializeAws_json1_1DescribeClustersResponse = function (output, context) {
    return {
        Clusters: output.Clusters !== undefined && output.Clusters !== null
            ? deserializeAws_json1_1ClusterList(output.Clusters, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeDefaultParametersResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeEventsResponse = function (output, context) {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_json1_1EventList(output.Events, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_1DescribeParameterGroupsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        ParameterGroups: output.ParameterGroups !== undefined && output.ParameterGroups !== null
            ? deserializeAws_json1_1ParameterGroupList(output.ParameterGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeParametersResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Parameters: output.Parameters !== undefined && output.Parameters !== null
            ? deserializeAws_json1_1ParameterList(output.Parameters, context)
            : undefined,
    };
};
var deserializeAws_json1_1DescribeSubnetGroupsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        SubnetGroups: output.SubnetGroups !== undefined && output.SubnetGroups !== null
            ? deserializeAws_json1_1SubnetGroupList(output.SubnetGroups, context)
            : undefined,
    };
};
var deserializeAws_json1_1Endpoint = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
var deserializeAws_json1_1Event = function (output, context) {
    return {
        Date: output.Date !== undefined && output.Date !== null ? new Date(Math.round(output.Date * 1000)) : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        SourceName: output.SourceName !== undefined && output.SourceName !== null ? output.SourceName : undefined,
        SourceType: output.SourceType !== undefined && output.SourceType !== null ? output.SourceType : undefined,
    };
};
var deserializeAws_json1_1EventList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Event(entry, context);
    });
};
var deserializeAws_json1_1IncreaseReplicationFactorResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1InsufficientClusterCapacityFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidARNFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidClusterStateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterCombinationException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterGroupStateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidParameterValueException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidSubnet = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1InvalidVPCNetworkStateFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ListTagsResponse = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1Node = function (output, context) {
    return {
        AvailabilityZone: output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
        Endpoint: output.Endpoint !== undefined && output.Endpoint !== null
            ? deserializeAws_json1_1Endpoint(output.Endpoint, context)
            : undefined,
        NodeCreateTime: output.NodeCreateTime !== undefined && output.NodeCreateTime !== null
            ? new Date(Math.round(output.NodeCreateTime * 1000))
            : undefined,
        NodeId: output.NodeId !== undefined && output.NodeId !== null ? output.NodeId : undefined,
        NodeStatus: output.NodeStatus !== undefined && output.NodeStatus !== null ? output.NodeStatus : undefined,
        ParameterGroupStatus: output.ParameterGroupStatus !== undefined && output.ParameterGroupStatus !== null
            ? output.ParameterGroupStatus
            : undefined,
    };
};
var deserializeAws_json1_1NodeIdentifierList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_1NodeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Node(entry, context);
    });
};
var deserializeAws_json1_1NodeNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NodeQuotaForClusterExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NodeQuotaForCustomerExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1NodeTypeSpecificValue = function (output, context) {
    return {
        NodeType: output.NodeType !== undefined && output.NodeType !== null ? output.NodeType : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1NodeTypeSpecificValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1NodeTypeSpecificValue(entry, context);
    });
};
var deserializeAws_json1_1NotificationConfiguration = function (output, context) {
    return {
        TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
        TopicStatus: output.TopicStatus !== undefined && output.TopicStatus !== null ? output.TopicStatus : undefined,
    };
};
var deserializeAws_json1_1Parameter = function (output, context) {
    return {
        AllowedValues: output.AllowedValues !== undefined && output.AllowedValues !== null ? output.AllowedValues : undefined,
        ChangeType: output.ChangeType !== undefined && output.ChangeType !== null ? output.ChangeType : undefined,
        DataType: output.DataType !== undefined && output.DataType !== null ? output.DataType : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        IsModifiable: output.IsModifiable !== undefined && output.IsModifiable !== null ? output.IsModifiable : undefined,
        NodeTypeSpecificValues: output.NodeTypeSpecificValues !== undefined && output.NodeTypeSpecificValues !== null
            ? deserializeAws_json1_1NodeTypeSpecificValueList(output.NodeTypeSpecificValues, context)
            : undefined,
        ParameterName: output.ParameterName !== undefined && output.ParameterName !== null ? output.ParameterName : undefined,
        ParameterType: output.ParameterType !== undefined && output.ParameterType !== null ? output.ParameterType : undefined,
        ParameterValue: output.ParameterValue !== undefined && output.ParameterValue !== null ? output.ParameterValue : undefined,
        Source: output.Source !== undefined && output.Source !== null ? output.Source : undefined,
    };
};
var deserializeAws_json1_1ParameterGroup = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ParameterGroupName: output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
            ? output.ParameterGroupName
            : undefined,
    };
};
var deserializeAws_json1_1ParameterGroupAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ParameterGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ParameterGroup(entry, context);
    });
};
var deserializeAws_json1_1ParameterGroupNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ParameterGroupQuotaExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1ParameterGroupStatus = function (output, context) {
    return {
        NodeIdsToReboot: output.NodeIdsToReboot !== undefined && output.NodeIdsToReboot !== null
            ? deserializeAws_json1_1NodeIdentifierList(output.NodeIdsToReboot, context)
            : undefined,
        ParameterApplyStatus: output.ParameterApplyStatus !== undefined && output.ParameterApplyStatus !== null
            ? output.ParameterApplyStatus
            : undefined,
        ParameterGroupName: output.ParameterGroupName !== undefined && output.ParameterGroupName !== null
            ? output.ParameterGroupName
            : undefined,
    };
};
var deserializeAws_json1_1ParameterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Parameter(entry, context);
    });
};
var deserializeAws_json1_1RebootNodeResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupMembership = function (output, context) {
    return {
        SecurityGroupIdentifier: output.SecurityGroupIdentifier !== undefined && output.SecurityGroupIdentifier !== null
            ? output.SecurityGroupIdentifier
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1SecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SecurityGroupMembership(entry, context);
    });
};
var deserializeAws_json1_1ServiceLinkedRoleNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SSEDescription = function (output, context) {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_1Subnet = function (output, context) {
    return {
        SubnetAvailabilityZone: output.SubnetAvailabilityZone !== undefined && output.SubnetAvailabilityZone !== null
            ? output.SubnetAvailabilityZone
            : undefined,
        SubnetIdentifier: output.SubnetIdentifier !== undefined && output.SubnetIdentifier !== null ? output.SubnetIdentifier : undefined,
    };
};
var deserializeAws_json1_1SubnetGroup = function (output, context) {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        SubnetGroupName: output.SubnetGroupName !== undefined && output.SubnetGroupName !== null ? output.SubnetGroupName : undefined,
        Subnets: output.Subnets !== undefined && output.Subnets !== null
            ? deserializeAws_json1_1SubnetList(output.Subnets, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
var deserializeAws_json1_1SubnetGroupAlreadyExistsFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetGroupInUseFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1SubnetGroup(entry, context);
    });
};
var deserializeAws_json1_1SubnetGroupNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetGroupQuotaExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetInUse = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1SubnetList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Subnet(entry, context);
    });
};
var deserializeAws_json1_1SubnetQuotaExceededFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_1TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
var deserializeAws_json1_1TagNotFoundFault = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TagQuotaPerResourceExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_1TagResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1UntagResourceResponse = function (output, context) {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateClusterResponse = function (output, context) {
    return {
        Cluster: output.Cluster !== undefined && output.Cluster !== null
            ? deserializeAws_json1_1Cluster(output.Cluster, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateParameterGroupResponse = function (output, context) {
    return {
        ParameterGroup: output.ParameterGroup !== undefined && output.ParameterGroup !== null
            ? deserializeAws_json1_1ParameterGroup(output.ParameterGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_1UpdateSubnetGroupResponse = function (output, context) {
    return {
        SubnetGroup: output.SubnetGroup !== undefined && output.SubnetGroup !== null
            ? deserializeAws_json1_1SubnetGroup(output.SubnetGroup, context)
            : undefined,
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
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
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
//# sourceMappingURL=Aws_json1_1.js.map